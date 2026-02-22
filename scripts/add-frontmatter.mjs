import fs from 'fs';
import path from 'path';

const dir = 'src/content/posts';
const files = fs.readdirSync(dir).filter(f => f.endsWith('.md'));

for (const file of files) {
  const filePath = path.join(dir, file);
  const content = fs.readFileSync(filePath, 'utf-8');
  const lines = content.split('\n');

  // Extract metadata from the consistent header format
  const titleZh = lines[0].replace(/^#\s+/, '');
  const titleEn = lines[1].replace(/^#\s+/, '');
  const originalUrl = lines[3].replace(/^>\s*原文链接:\s*/, '');
  const date = lines[4].replace(/^>\s*日期:\s*/, '');
  const slug = file.replace(/^\d{4}-\d{2}-\d{2}-/, '').replace(/\.md$/, '');

  // Find where the body content starts (after the --- separator)
  let bodyStartIndex = 0;
  for (let i = 6; i < lines.length; i++) {
    if (lines[i].trim() === '---') {
      bodyStartIndex = i + 1;
      break;
    }
  }

  // Skip blank lines after ---
  while (bodyStartIndex < lines.length && lines[bodyStartIndex].trim() === '') {
    bodyStartIndex++;
  }

  const body = lines.slice(bodyStartIndex).join('\n');

  const frontmatter = `---
titleEn: "${titleEn.replace(/"/g, '\\"')}"
titleZh: "${titleZh.replace(/"/g, '\\"')}"
date: ${date}
slug: ${slug}
originalUrl: ${originalUrl}
---

`;

  fs.writeFileSync(filePath, frontmatter + body);
  console.log(`✓ ${file}`);
}

console.log(`\nDone: ${files.length} files processed.`);
