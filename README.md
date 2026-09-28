# Navigation Bar Site

A small two-page site (Home and About) with a responsive top navigation bar. Built with plain HTML, CSS, and JavaScript — no build step, no dependencies.

## Files

- `index.html` — home page: hero section, about/services/contact sections, a contact form
- `about.html` — about page, linked from the nav and from the home page's "Read the full story" link
- `style.css` — all styling, including the mobile nav layout
- `script.js` — hamburger menu toggle and active-link highlighting

## Running it

No server or build tools required. Open `index.html` directly in a browser.

## How the nav works

- On screens above 768px, the menu items (`Home`, `About`, `Services`, `Contact`) sit in a row inside `.navbar`, which is `position: sticky` and gains a shadow once the page scrolls.
- Below 768px, `.nav-menu` collapses behind the hamburger button (`#hamburger`). Clicking it toggles the `.active` class on the menu and the `.open` class on the button, which slides the menu down (via `max-height`/`opacity`, so it animates) and morphs the three bars into an X. `aria-expanded` on the button tracks open/closed state for screen readers.
- The menu also closes on: selecting a link, clicking anywhere outside `.navbar`, and pressing Escape.
- `script.js` compares the current page's filename against each link's `data-page` attribute and adds an `.active` class to the matching link, so the current page is highlighted in the nav.
- On the home page, an `IntersectionObserver` additionally highlights `Home`, `Services`, or `Contact` as you scroll past their section — a lightweight scroll-spy. `About` stays tied to the dedicated `about.html` page rather than the home page's short about teaser.
- `Services` and `Contact` are anchor links (`#services`, `#contact`) on the home page. From `about.html` they point back to `index.html#services` and `index.html#contact`.
- `prefers-reduced-motion: reduce` turns off the menu/scroll transitions for anyone who's asked for that.

## Styling notes

Colors and fonts are defined as CSS custom properties at the top of `style.css` (`--ink`, `--bg`, `--nav-bg`, `--nav-text`, `--accent`, `--muted`, `--border`), so the palette can be changed in one place. Headings use Fraunces, body text uses Inter, both pulled from Google Fonts.

## Known gaps

The contact form has no submit handler — it's markup only, so submitting it will just reload the page. Wire it up to a backend or a form service (e.g. Formspree) if you need it to actually send anything.
