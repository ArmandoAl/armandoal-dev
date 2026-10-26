# Design QA — final hiring pass

Date: 2026-09-14

## Brief and references

- Goal: preserve the portfolio's Material 3 application model while borrowing the calm off-white palette, floating navigation and alternating project rhythm shown in the supplied Martin Ortiz references.
- Content goal: make professional work and open-source evidence visual and scannable without copying another portfolio's branding or page structure.
- Reference captures: supplied Martin project/navigation screens, the supplied Maxipublica dashboard, Fraktalweb mark and the current portfolio bug capture.
- Implementation captures: `.audit/final-pass-2026-09-14/`, including desktop Safari and iPhone 16e Simulator in light and dark modes.

## Combined comparison

- `.audit/final-pass-2026-09-14/comparison-nav.png`: reference navigation/home beside the implementation.
- `.audit/final-pass-2026-09-14/comparison-work.png`: reference alternating projects beside the implementation.

## Fidelity scorecard

| Area | Score | Result |
| --- | ---: | --- |
| Visual hierarchy | 9/10 | Role, availability, name and actions read before supporting work. |
| Composition | 9/10 | Alternating image/text rhythm adds movement while retaining the app shell. |
| Typography | 9/10 | Manrope and the existing Material roles remain consistent across modes. |
| Spacing | 8/10 | Desktop breathing room is calm; mobile cards remain comfortably tappable. |
| Color | 9/10 | Warm off-white replaces stark white; navigation reverses contrast between themes. |
| Imagery | 8/10 | Every relevant work/open-source entry has evidence; Fraktalweb is limited by the supplied low-resolution logo. |
| Responsive behavior | 9/10 | Desktop top nav and iPhone floating bottom nav both preserve hierarchy and contrast. |

## Findings and fixes

- P0: none.
- P1 fixed: the sticky Work stack shared the metrics row and overlapped metric cards; the layout now uses explicit `header / metrics / narrative` rows beside one sticky rail.
- P1 fixed: metric counters could remain at zero in Safari after navigation; initialization is shared and the animation clock no longer depends on a suspended animation frame.
- P1 fixed: the selected theme could be lost during Astro document swaps; the current theme is copied into the incoming document before the swap.
- P1 fixed: the initial splash could reappear after a view transition; it is hidden by default, runs once per tab session and removes itself after 900 ms.
- P2 fixed: Open Source cards without Sophia's prior artwork now use repository screenshots and alternate image placement.
- P2 fixed: the Contact card no longer displays the `mailto:` protocol while retaining the mail link.
- Accepted source constraint: the Fraktalweb mark is the exact supplied raster capture. Replace it with an SVG or a larger export when one is available; no artificial redraw was introduced.

## Final validation

- `astro check`: pass, 0 errors and 0 warnings.
- Production build: pass, 32 static pages and 69 optimized image variants.
- Safari desktop: pass in light/dark, including theme persistence and non-repeating splash.
- iPhone 16e Simulator: pass for card stacking, imagery, floating bottom navigation and both contrast directions.

Status: **passed**.
