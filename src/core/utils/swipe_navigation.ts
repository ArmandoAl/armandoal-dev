let controller: AbortController | undefined;

function startsInHorizontalScroller(element: Element): boolean {
  for (let node: Element | null = element; node; node = node.parentElement) {
    const overflow = getComputedStyle(node).overflowX;
    if (/(auto|scroll)/.test(overflow) && node.scrollWidth > node.clientWidth) return true;
  }
  return false;
}

export function initSwipeNavigation(): void {
  controller?.abort();
  if (!matchMedia('(hover: none) and (pointer: coarse)').matches || matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  controller = new AbortController();
  const options = { passive: true, signal: controller.signal };
  let startX = 0;
  let startY = 0;
  let endX = 0;
  let endY = 0;
  let tracking = false;

  document.addEventListener('touchstart', (event) => {
    const target = event.target;
    tracking = event.touches.length === 1 && target instanceof Element && !startsInHorizontalScroller(target);
    if (!tracking) return;
    startX = endX = event.touches[0].clientX;
    startY = endY = event.touches[0].clientY;
  }, options);

  document.addEventListener('touchmove', (event) => {
    if (!tracking || event.touches.length !== 1) return;
    endX = event.touches[0].clientX;
    endY = event.touches[0].clientY;
  }, options);

  document.addEventListener('touchend', () => {
    if (!tracking) return;
    tracking = false;
    const dx = endX - startX;
    const dy = endY - startY;
    if (Math.abs(dx) <= 80 || Math.abs(dx) < Math.abs(dy) * 2) return;
    const href = dx < 0 ? document.body.dataset.swipeNext : document.body.dataset.swipePrevious;
    if (href) location.href = href;
  }, options);
}
