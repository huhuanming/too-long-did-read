import typography from '@tailwindcss/typography';

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: [
          'Inter',
          '-apple-system',
          'BlinkMacSystemFont',
          '"Noto Sans SC"',
          '"PingFang SC"',
          '"Microsoft YaHei"',
          'sans-serif',
        ],
      },
      typography: {
        DEFAULT: {
          css: {
            maxWidth: '65ch',
            color: '#1a1a1a',
            a: {
              color: '#1a1a1a',
              textDecoration: 'underline',
              textUnderlineOffset: '3px',
            },
          },
        },
        invert: {
          css: {
            color: '#e5e5e5',
            a: { color: '#e5e5e5' },
            h1: { color: '#f5f5f5' },
            h2: { color: '#f5f5f5' },
            h3: { color: '#f5f5f5' },
            strong: { color: '#f5f5f5' },
            blockquote: { color: '#d4d4d4', borderLeftColor: '#525252' },
            hr: { borderColor: '#404040' },
            'ol > li::marker': { color: '#a3a3a3' },
            'ul > li::marker': { color: '#a3a3a3' },
            code: { color: '#f5f5f5' },
            thead: { borderBottomColor: '#525252' },
            'tbody tr': { borderBottomColor: '#404040' },
          },
        },
      },
    },
  },
  plugins: [typography],
};
