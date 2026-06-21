# Victory Square Technologies — Marketing Website

A fast, modern, fully responsive static marketing site for Victory Square Technologies
(publicly traded venture builder — CSE: VST · FWB: 6F6 · OTC: VSQTF).

Built with **Tailwind CSS**, plain HTML, and a tiny bit of vanilla JavaScript.
No backend, no framework, no build step required just to view it — it's static files.

## Pages

| File | Page |
|------|------|
| `index.html` | Home |
| `about.html` | About / team / ESG |
| `portfolio.html` | Portfolio companies |
| `investors.html` | Investor relations |
| `news-media.html` | News & media |
| `careers.html` | Careers / open roles |
| `newsletter.html` | Newsletter signup |
| `contact.html` | Contact |
| `privacy-policy.html` | Privacy policy |
| `dividend-note.html` | Dividend note for Canadian shareholders |

## Design system

- **Palette:** premium charcoal (`#1C1917`) + gold (`#CA8A04`) on warm paper (`#FAFAF9`)
- **Type:** Lexend (display) + Source Sans 3 (body), loaded from Google Fonts
- **Components** live in `assets/css/input.css` (`@layer components`)
- **Tokens** (colors, fonts, shadows, animations) live in `tailwind.config.js`

## Develop / build

The compiled stylesheet (`assets/css/styles.css`) is already committed, so the site
works as-is. To change styles, edit `assets/css/input.css` or `tailwind.config.js`,
then rebuild:

```bash
npm install        # one time
npm run build      # compile + minify styles.css
npm run watch      # rebuild on change while developing
```

## Preview locally

Any static file server works, e.g.:

```bash
npx serve .
# or
python -m http.server 8080
```

Then open http://localhost:8080.

## Deploy

Upload the contents of this folder to any static host — Netlify, Vercel, Cloudflare
Pages, GitHub Pages, S3, or traditional shared hosting. No server-side runtime needed.

## Notes for the new owner

- **Forms** (contact + newsletter) are front-end only. Wire them to your provider of
  choice (Formspree, Mailchimp, HubSpot, a serverless function, etc.).
- **Document links** on the Investors page (proxy, circular, financials) point to `#`
  placeholders — drop in the real PDFs / SEDAR+ links.
- **News items** link to `#` — point them at your press releases or a CMS.
- Figures (25+ companies, ~9x return, share count) reflect the source site's last
  published numbers — update before going live.
