import { ROUTE_NAMES } from '@app/router/route_names';
import { getUiCopy, type Locale } from '@core/utils/i18n';

export type Language = Locale;
export type AppRoute = 'home' | 'work' | 'about' | 'contact';

const ICONS: Record<AppRoute, string> = {
  home: 'home',
  work: 'briefcase',
  about: 'account',
  contact: 'email',
};

export function getNavigationItems(lang: Language) {
  const routes = ROUTE_NAMES[lang];
  const labels = getUiCopy(lang).nav;

  return (['home', 'work', 'about', 'contact'] as const).map((route) => ({
    route,
    href: routes[route],
    label: labels[route],
    icon: ICONS[route],
  }));
}
