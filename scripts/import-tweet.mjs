#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const POSTS_DIR = path.join(__dirname, '..', 'src', 'content', 'posts');

// ─── URL Parsing ───

function parseTweetUrl(url) {
  const match = url.match(/(?:x\.com|twitter\.com)\/(\w+)\/status\/(\d+)/);
  if (!match) {
    console.error('Invalid tweet URL. Expected: https://x.com/user/status/123');
    process.exit(1);
  }
  return { username: match[1], tweetId: match[2] };
}

// ─── API ───

async function fetchTweet(username, tweetId) {
  const apiUrl = `https://api.fxtwitter.com/${username}/status/${tweetId}`;
  console.log(`Fetching: ${apiUrl}`);

  const res = await fetch(apiUrl);
  if (!res.ok) {
    console.error(`Failed to fetch tweet: ${res.status} ${res.statusText}`);
    process.exit(1);
  }

  const data = await res.json();
  if (data.code !== 200 || !data.tweet) {
    console.error('Tweet not found or API error:', data);
    process.exit(1);
  }

  return data.tweet;
}

// ─── Draft.js Article → Markdown ───

function articleToMarkdown(article) {
  const { blocks, entityMap } = article.content;
  const lines = [];

  for (const block of blocks) {
    const text = block.text || '';

    if (block.type === 'header-two') {
      lines.push(`### ${text}\n`);
    } else if (block.type === 'header-three') {
      lines.push(`#### ${text}\n`);
    } else if (block.type === 'atomic') {
      // Atomic blocks contain media via entityRanges
      for (const er of block.entityRanges) {
        const entity = entityMap[String(er.key)];
        if (!entity) continue;
        const d = entity.value?.data;
        if (entity.value?.type === 'MEDIA' && d?.mediaKey) {
          // Image from tweet media
          const imgUrl = d.originalImgUrl || d.url;
          if (imgUrl) lines.push(`![](${imgUrl})\n`);
        } else if (entity.value?.type === 'IMAGE' && d?.src) {
          lines.push(`![](${d.src})\n`);
        } else if (entity.value?.type === 'LINK' && d?.url) {
          lines.push(`[${d.url}](${d.url})\n`);
        }
      }
    } else {
      // unstyled / paragraph — apply inline styles and entity links
      let md = applyInlineFormatting(text, block.inlineStyleRanges, block.entityRanges, entityMap);
      lines.push(md + '\n');
    }
  }

  return lines.join('\n');
}

function applyInlineFormatting(text, styleRanges, entityRanges, entityMap) {
  if (!text) return '';

  // Build character-level annotations
  const chars = Array.from(text);
  const annotations = chars.map(() => ({ bold: false, italic: false, linkUrl: null }));

  for (const sr of (styleRanges || [])) {
    for (let i = sr.offset; i < sr.offset + sr.length && i < chars.length; i++) {
      if (sr.style === 'Bold') annotations[i].bold = true;
      if (sr.style === 'Italic') annotations[i].italic = true;
    }
  }

  for (const er of (entityRanges || [])) {
    const entity = entityMap[String(er.key)];
    if (entity?.value?.type === 'LINK' && entity.value.data?.url) {
      for (let i = er.offset; i < er.offset + er.length && i < chars.length; i++) {
        annotations[i].linkUrl = entity.value.data.url;
      }
    }
  }

  // Group consecutive characters with same annotations
  let result = '';
  let i = 0;
  while (i < chars.length) {
    const a = annotations[i];
    let j = i;
    while (j < chars.length &&
      annotations[j].bold === a.bold &&
      annotations[j].italic === a.italic &&
      annotations[j].linkUrl === a.linkUrl) {
      j++;
    }

    let segment = chars.slice(i, j).join('');

    if (a.bold) segment = `**${segment}**`;
    if (a.italic) segment = `*${segment}*`;
    if (a.linkUrl) segment = `[${segment}](${a.linkUrl})`;

    result += segment;
    i = j;
  }

  return result;
}

// ─── Helpers ───

function formatDate(timestamp) {
  const d = new Date(timestamp);
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;
}

function isChinese(text) {
  const cn = (text.match(/[\u4e00-\u9fff]/g) || []).length;
  const total = text.replace(/\s/g, '').length;
  return total > 0 && cn / total > 0.3;
}

function generateSlug(text, tweetId) {
  const words = text
    .replace(/https?:\/\/\S+/g, '')
    .replace(/[^\w\s-]/g, ' ')
    .trim()
    .split(/\s+/)
    .filter(w => /^[a-zA-Z]/.test(w))
    .slice(0, 5)
    .map(w => w.toLowerCase());

  if (words.length >= 2) return words.join('-');
  return `tweet-${tweetId}`;
}

function extractTitle(text) {
  const clean = text.replace(/https?:\/\/\S+/g, '').trim();
  const first = clean.split('\n')[0].trim();
  return first.length <= 80 ? first : first.slice(0, 77) + '...';
}

// ─── Markdown Builder ───

function buildMarkdown(tweet) {
  const date = formatDate(tweet.created_timestamp * 1000);
  const tweetUrl = tweet.url || `https://x.com/${tweet.author?.screen_name}/status/${tweet.id}`;
  const author = tweet.author?.name || 'Unknown';
  const handle = tweet.author?.screen_name || '';
  const isArticle = !!tweet.article;

  // Determine title and body
  let title, bodyText, coverImage;

  if (isArticle) {
    title = tweet.article.title || extractTitle(tweet.text || '');
    bodyText = articleToMarkdown(tweet.article);
    coverImage = tweet.article.cover_media?.media_info?.original_img_url;
  } else {
    title = extractTitle(tweet.text || '');
    bodyText = tweet.text || '';
  }

  const slug = generateSlug(title, tweet.id);
  const textIsChinese = isChinese(title + bodyText);

  // Build body with metadata header
  let body = '';
  body += `> Author: [${author} (@${handle})](https://x.com/${handle})\n`;
  body += `> Date: ${date}\n`;
  const stats = [];
  if (tweet.replies) stats.push(`Replies: ${tweet.replies}`);
  if (tweet.retweets) stats.push(`Retweets: ${tweet.retweets}`);
  if (tweet.likes) stats.push(`Likes: ${tweet.likes}`);
  if (stats.length) body += `> ${stats.join(' | ')}\n`;
  body += '\n';

  if (coverImage) {
    body += `![](${coverImage})\n\n`;
  }

  body += bodyText;

  // Handle non-article tweet media
  if (!isArticle && tweet.media?.all?.length) {
    body += '\n';
    for (const m of tweet.media.all) {
      if (m.type === 'photo') body += `![](${m.url})\n\n`;
      else if (m.type === 'video' || m.type === 'gif') body += `[Video](${m.url})\n\n`;
    }
  }

  // Build bilingual sections
  let englishSection, chineseSection;
  if (textIsChinese) {
    englishSection = `## English\n\n*Original content is in Chinese. See below.*\n`;
    chineseSection = `## 中文翻译\n\n${body}`;
  } else {
    englishSection = `## English\n\n${body}`;
    chineseSection = `## 中文翻译\n\n*待翻译*\n`;
  }

  const titleEn = textIsChinese ? title : title;
  const titleZh = textIsChinese ? title : '待翻译';

  const frontmatter = [
    '---',
    `titleEn: "${titleEn.replace(/"/g, '\\"')}"`,
    `titleZh: "${titleZh.replace(/"/g, '\\"')}"`,
    `date: ${date}`,
    `slug: ${slug}`,
    `originalUrl: ${tweetUrl}`,
    '---',
  ].join('\n');

  const content = `${frontmatter}\n\n${englishSection}\n---\n\n${chineseSection}\n`;

  return { content, date, slug, title };
}

// ─── Main ───

async function main() {
  const url = process.argv[2];
  if (!url) {
    console.error('Usage: node scripts/import-tweet.mjs <tweet-url>');
    console.error('Example: node scripts/import-tweet.mjs https://x.com/user/status/123456');
    process.exit(1);
  }

  const { username, tweetId } = parseTweetUrl(url);
  const tweet = await fetchTweet(username, tweetId);

  const type = tweet.article ? 'Article' : 'Tweet';
  console.log(`\n${type} by @${tweet.author?.screen_name}`);

  const { content, date, slug, title } = buildMarkdown(tweet);
  console.log(`Title: ${title}`);

  const filename = `${date}-${slug}.md`;
  const filepath = path.join(POSTS_DIR, filename);

  if (fs.existsSync(filepath)) {
    console.error(`\nFile already exists: ${filepath}`);
    console.error('Aborting to avoid overwriting.');
    process.exit(1);
  }

  fs.writeFileSync(filepath, content, 'utf-8');
  console.log(`\nCreated: ${filepath}`);
  console.log('Done!');
}

main().catch(err => {
  console.error('Error:', err.message);
  process.exit(1);
});
