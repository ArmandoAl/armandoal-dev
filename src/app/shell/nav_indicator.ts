let resizeTimer: number | undefined, resizeBound = false;

function move(nav: HTMLElement, item: HTMLElement, instant = false): void {
  const indicator = nav.querySelector<HTMLElement>('.nav-indicator');
  if (!indicator) return;
  const navRect = nav.getBoundingClientRect();
  const itemRect = item.getBoundingClientRect();
  if (!itemRect.width || !itemRect.height) return;
  const items = nav.querySelectorAll<HTMLElement>('[data-nav-item]');
  const firstRect = items[0]?.getBoundingClientRect();
  const lastRect = items[items.length - 1]?.getBoundingClientRect();
  const horizontal = !firstRect || !lastRect || Math.abs(lastRect.left - firstRect.left) >= Math.abs(lastRect.top - firstRect.top);
  if (instant) indicator.style.transition = 'none';
  indicator.style.width = `${itemRect.width}px`;
  indicator.style.height = `${itemRect.height}px`;
  indicator.style.left = horizontal ? '0' : `${itemRect.left - navRect.left}px`;
  indicator.style.top = horizontal ? `${itemRect.top - navRect.top}px` : '0';
  indicator.style.transform = horizontal
    ? `translate3d(${itemRect.left - navRect.left}px, 0, 0)`
    : `translate3d(0, ${itemRect.top - navRect.top}px, 0)`;
  nav.dataset.navAxis = horizontal ? 'horizontal' : 'vertical';
  nav.dataset.indicator = 'js';
  if (instant) { indicator.getBoundingClientRect(); indicator.style.removeProperty('transition'); }
}

function positionActive(instant = true): void {
  document.querySelectorAll<HTMLElement>('[data-nav-indicator]').forEach((nav) => {
    const active = nav.querySelector<HTMLElement>('[data-nav-item][aria-current="page"]');
    if (active) move(nav, active, instant);
  });
}

export function initNavIndicators(): void {
  document.querySelectorAll<HTMLElement>('[data-nav-indicator]').forEach((nav) => {
    const active = nav.querySelector<HTMLElement>('[data-nav-item][aria-current="page"]');
    if (active) move(nav, active, true);
    if (nav.dataset.indicatorBound) return;
    nav.dataset.indicatorBound = 'true';
    nav.addEventListener('pointerdown', (event) => {
      if (event.button !== 0) return;
      const item = event.target instanceof Element ? event.target.closest<HTMLElement>('[data-nav-item]') : null;
      if (!item || !nav.contains(item)) return;
      move(nav, item);
    });
    nav.addEventListener('pointercancel', () => positionActive());
  });
  if (resizeBound) return;
  resizeBound = true;
  addEventListener('resize', () => {
    clearTimeout(resizeTimer);
    resizeTimer = window.setTimeout(() => positionActive(), 100);
  });
}
