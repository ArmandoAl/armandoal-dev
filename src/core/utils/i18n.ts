export type Locale = 'en' | 'es';

interface UiCopy {
  nav: { home: string; work: string; projects: string; about: string; contact: string };
  sections: {
    proofPoints: string;
    featuredWork: string;
    allWork: string;
    openSource: string;
    openSourceDescription: string;
    experience: string;
    skills: string;
    education: string;
    certifications: string;
    languages: string;
    context: string;
    problem: string;
    approach: string;
    constraints: string;
    outcome: string;
    metrics: string;
    stack: string;
    contact: string;
    highlights: string;
    repository: string;
  };
  actions: { viewWork: string; contact: string; downloadCv: string; downloadCvEn: string; downloadCvEs: string; toggleTheme: string; changeLanguage: string; backHome: string; backToWork: string; backToProjects: string; viewRepo: string; viewLive: string };
  nextSection: { label: string; work: string; projects: string; about: string; contact: string };
  pages: { about: string; contact: string; notFoundTitle: string; notFoundBody: string };
  accessibility: { primaryNavigation: string; skipToContent: string; closeDialog: string; mobileScreenshots: string };
}

const UI_COPY = {
  en: {
    nav: { home: 'Home', work: 'Work', projects: 'Open Source', about: 'About', contact: 'Contact' },
    sections: { proofPoints: 'Proof points', featuredWork: 'Featured work', allWork: 'All projects', openSource: 'Public repositories', openSourceDescription: 'Personal projects with public code, documented architecture, and working product decisions.', experience: 'Experience', skills: 'Skills', education: 'Education', certifications: 'Certifications', languages: 'Languages', context: 'Context', problem: 'Problem', approach: 'What I did', constraints: 'Constraints', outcome: 'Outcome', metrics: 'Metrics', stack: 'Stack', contact: 'Contact', highlights: 'Technical highlights', repository: 'Repository' },
    actions: { viewWork: 'View projects', contact: 'Get in touch', downloadCv: 'Download CV', downloadCvEn: 'Download CV in English', downloadCvEs: 'Download CV in Spanish', toggleTheme: 'Toggle color theme', changeLanguage: 'Change language', backHome: 'Back to home', backToWork: 'Back to projects', backToProjects: 'Back to public repositories', viewRepo: 'View on GitHub', viewLive: 'Open live app' },
    nextSection: { label: 'Next', work: 'Explore selected projects and their outcomes.', projects: 'Explore personal projects and the code behind them.', about: 'Learn about my experience, skills, and approach.', contact: 'Get in touch to discuss a role or project.' },
    pages: { about: 'Profile', contact: 'Contact', notFoundTitle: 'Page not found', notFoundBody: 'The page you requested does not exist.' },
    accessibility: { primaryNavigation: 'Primary navigation', skipToContent: 'Skip to content', closeDialog: 'Close', mobileScreenshots: 'Mobile application screenshots' },
  },
  es: {
    nav: { home: 'Inicio', work: 'Proyectos', projects: 'Código abierto', about: 'Perfil', contact: 'Contacto' },
    sections: { proofPoints: 'Datos clave', featuredWork: 'Proyectos destacados', allWork: 'Todos los proyectos', openSource: 'Repositorios públicos', openSourceDescription: 'Proyectos personales con código público, arquitectura documentada y decisiones de producto funcionales.', experience: 'Experiencia', skills: 'Habilidades', education: 'Formación', certifications: 'Certificaciones', languages: 'Idiomas', context: 'Contexto', problem: 'Problema', approach: 'Qué hice', constraints: 'Restricciones', outcome: 'Resultado', metrics: 'Métricas', stack: 'Tecnologías', contact: 'Contacto', highlights: 'Lo técnico', repository: 'Repositorio' },
    actions: { viewWork: 'Ver proyectos', contact: 'Hablemos', downloadCv: 'Descargar CV', downloadCvEn: 'Descargar CV en inglés', downloadCvEs: 'Descargar CV en español', toggleTheme: 'Alternar tema de color', changeLanguage: 'Cambiar idioma', backHome: 'Volver al inicio', backToWork: 'Volver a proyectos', backToProjects: 'Volver a repositorios públicos', viewRepo: 'Ver en GitHub', viewLive: 'Abrir aplicación' },
    nextSection: { label: 'Siguiente', work: 'Explora proyectos seleccionados y sus resultados.', projects: 'Explora proyectos personales y el código detrás de ellos.', about: 'Conoce mi experiencia, habilidades y enfoque.', contact: 'Hablemos sobre una posición o proyecto.' },
    pages: { about: 'Perfil', contact: 'Contacto', notFoundTitle: 'Página no encontrada', notFoundBody: 'La página solicitada no existe.' },
    accessibility: { primaryNavigation: 'Navegación principal', skipToContent: 'Saltar al contenido', closeDialog: 'Cerrar', mobileScreenshots: 'Capturas de la aplicación móvil' },
  },
} as const satisfies Record<Locale, UiCopy>;

export function getUiCopy(lang: Locale): UiCopy {
  return UI_COPY[lang];
}
