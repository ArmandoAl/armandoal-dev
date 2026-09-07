export const ROUTE_NAMES = {
  en: {
    home: '/',
    work: '/work',
    workDetail: (slug: string) => `/work/${slug}`,
    about: '/about',
    contact: '/contact',
    notFound: '/404',
  },
  es: {
    home: '/es',
    work: '/es/proyectos',
    workDetail: (slug: string) => `/es/proyectos/${slug}`,
    about: '/es/perfil',
    contact: '/es/contacto',
    notFound: '/es/404',
  },
} as const;

export const CV_PATHS = {
  en: '/cv/Armando_Alvarado_CV_EN.pdf',
  es: '/cv/Armando_Alvarado_CV_ES.pdf',
} as const;

export const SITEMAP_PATH = '/sitemap.xml';
