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

- On screens above 768px, the menu items (`Home`, `About`, `Services`, `Contact`) sit in a row inside `.navbar`.
- Below 768px, `.nav-menu` is hidden by default and the hamburger button (`#hamburger`) appears. Clicking it toggles the `.active` class, which shows the menu as a stacked dropdown.
- `script.js` also compares the current page's filename against each link's `data-page` attribute and adds an `.active` class to the matching link, so the current page is highlighted in the nav.
- `Services` and `Contact` are anchor links (`#services`, `#contact`) on the home page. From `about.html` they point back to `index.html#services` and `index.html#contact`.

## Styling notes

Colors and fonts are defined as CSS custom properties at the top of `style.css` (`--ink`, `--bg`, `--nav-bg`, `--nav-text`, `--accent`, `--muted`, `--border`), so the palette can be changed in one place. Headings use Fraunces, body text uses Inter, both pulled from Google Fonts.

## Known gaps

The contact form has no submit handler — it's markup only, so submitting it will just reload the page. Wire it up to a backend or a form service (e.g. Formspree) if you need it to actually send anything.
