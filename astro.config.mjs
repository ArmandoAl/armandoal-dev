import { defineConfig } from 'astro/config';
import icon from 'astro-icon';

const stripIconMotion = () => ({
  name: 'strip-line-md-motion',
  enforce: 'post',
  transform(code, id) {
    if (id !== '\0virtual:astro-icon') return;
    return code.replace(/<(?:animate(?:Transform)?|set)\b[^>]*\/>/g, '');
  },
});

export default defineConfig({
  site: 'https://armandoal.dev',
  output: 'static',
  integrations: [icon({ include: { 'line-md': ['home', 'briefcase', 'account', 'email', 'arrow-left', 'arrow-right', 'download-outline', 'github', 'linkedin', 'sunny', 'moon'] } })],
  vite: { plugins: [stripIconMotion()] },
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'es'],
    routing: {
      prefixDefaultLocale: false,
    },
  },
});
