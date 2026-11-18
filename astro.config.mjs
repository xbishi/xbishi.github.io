import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// 部署在 xbishi.github.io（个人主页根站），无需 base 路径
export default defineConfig({
  site: 'https://xbishi.github.io',
  vite: {
    plugins: [tailwindcss()],
  },
});
