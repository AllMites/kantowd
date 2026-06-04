# Kanto Web Design — Portfolio Site

Single-page portfolio for web design business targeting local PH businesses (Parañaque, Las Piñas, Muntinlupa, NCR).

## Stack

React 19 + Tailwind CSS v4 + Vite + Framer Motion. Deployed via Netlify.

## Quick Start

```bash
cd portfolio
npm install
npm run dev        # dev server with HMR
npm run build      # production build → dist/
npm run preview    # preview production build locally
```

## Deploy

```bash
cd portfolio
npm run build
netlify deploy --prod --dir=dist
```

Current production URL: `https://kantowd.netlify.app`

## Project Structure

```
portfolio/
├── index.html              # HTML entry (Google Fonts links here)
├── vite.config.js          # Vite + React + Tailwind plugins
├── src/
│   ├── index.css           # Tailwind imports, @theme tokens, glass styles, animations
│   ├── main.jsx            # React entry
│   ├── App.jsx             # Compose all sections + IntersectionObserver scroll reveal
│   └── components/
│       ├── AnimatedBg.jsx  # Fixed mesh gradient background
│       ├── Nav.jsx         # Sticky nav with blur backdrop
│       ├── Hero.jsx        # "Your Business, Online Today" — glass card, 2 CTAs
│       ├── ExampleSites.jsx# 3 portfolio cards (café, plumbing, barbershop)
│       ├── About.jsx       # Problem-framing: 3 numbered glass cards
│       ├── Pricing.jsx     # Generic ₱15k / Custom ₱25k-50k tiers
│       ├── Contact.jsx     # Phone + email, no form
│       └── Footer.jsx      # Brand, social links, copyright
└── dist/                   # Production build output
```

## Brand Name

Current: **Kanto Web Design**. To rename, edit these 3 files:

- `index.html` → `<title>` tag
- `src/components/Nav.jsx` → branded span text
- `src/components/Footer.jsx` → brand name + tagline text

## Contact Info

Current values in `src/components/Contact.jsx`:
- Phone: `+63 920 910 0616` (also update `tel:` href)
- Email: `all.mites1@gmail.com` (also update `mailto:` href)

## Design Tokens (index.css)

| Token | Value |
|---|---|
| Display font | Playfair Display |
| Body font | Source Serif 4 |
| Warm gold | `#d4a853` |
| Warm gold soft | `#e8c97a` |
| Surface | `#0a0a0f` |
| Surface raised | `#12121a` |
| Glass bg | `rgba(255,255,255,0.06)` |
| Glass border | `rgba(255,255,255,0.12)` |

## Example Site Links

Point to GitHub Pages templates (deployed separately):

| Site | URL |
|---|---|
| Kanto Coffee | `https://allmites.github.io/kanto-coffee/` |
| Noriel Plumbing | `https://allmites.github.io/noriel-plumbing/` |
| Oragon Barber | `https://allmites.github.io/oragon-barber/` |

To update: edit `sites` array in `src/components/ExampleSites.jsx`.

## Deploying Template Updates

Template HTML files live in `../WebsiteTemplates/`. Each has a companion:

```
WebsiteTemplates/
├── cafe_config.json       → replace.js        → output/index.html
├── trades_config.json     → trades_replace.js → trades_output/index.html
├── barbershop_config.json → barbershop_replace.js → barbershop_output/index.html
```

Edit the config JSON, then run the matching replace script:

```bash
cd ../WebsiteTemplates
node replace.js              # café
node trades_replace.js       # plumbing
node barbershop_replace.js   # barbershop
```

Then push the updated `output/index.html` to the matching GitHub repo.
