export type Theme = 'dark' | 'light';

const STORAGE_KEY = 'theme';

export const THEME_INIT_SCRIPT = `(()=>{try{const t=localStorage.getItem('${STORAGE_KEY}');if(t==='dark'||t==='light')document.documentElement.dataset.theme=t}catch{}})()`;

export function getTheme(): Theme {
  const theme = document.documentElement.dataset.theme;
  if (theme === 'dark' || theme === 'light') return theme;
  return matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark';
}

export function setTheme(theme: Theme): void {
  document.documentElement.dataset.theme = theme;
  try {
    localStorage.setItem(STORAGE_KEY, theme);
  } catch {}
}

export function toggleTheme(): Theme {
  const theme = getTheme() === 'dark' ? 'light' : 'dark';
  setTheme(theme);
  return theme;
}
