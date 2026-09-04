export const ROUTE_NAMES = {
  en: {
    home: '/',
    work: '/work',
    workDetail: (slug: string) => `/work/${slug}`,
    about: '/about',
    contact: '/contact',
  },
  es: {
    home: '/es',
    work: '/es/trabajo',
    workDetail: (slug: string) => `/es/trabajo/${slug}`,
    about: '/es/sobre-mi',
    contact: '/es/contacto',
  },
} as const;
