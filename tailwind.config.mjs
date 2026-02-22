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
      colors: {
        surface: {
          0: '#09090b',
          1: '#111113',
          2: '#18181b',
          3: '#1f1f23',
          4: '#27272a',
        },
      },
      typography: {
        invert: {
          css: {
            '--tw-prose-body': '#a1a1aa',
            '--tw-prose-headings': '#fafafa',
            '--tw-prose-links': '#a78bfa',
            '--tw-prose-bold': '#e4e4e7',
            '--tw-prose-quotes': '#a1a1aa',
            '--tw-prose-quote-borders': '#3f3f46',
            '--tw-prose-counters': '#71717a',
            '--tw-prose-bullets': '#52525b',
            '--tw-prose-hr': '#27272a',
            '--tw-prose-th-borders': '#3f3f46',
            '--tw-prose-td-borders': '#27272a',
            '--tw-prose-code': '#e4e4e7',
            a: {
              color: '#a78bfa',
              textDecoration: 'none',
              '&:hover': {
                color: '#c4b5fd',
              },
            },
          },
        },
      },
    },
  },
  plugins: [typography],
};
