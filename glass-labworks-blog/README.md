# Glass Labworks — Blog Detail

Implementation of the Figma **Blog Detail — Desktop** (`57:1233`) and **Blog Detail — Mobile** (`57:1766`) frames from the [Blog file](https://www.figma.com/design/EKwbeW8F7rP7Qqdv3X58P2/Blog).

## Preview locally

Open `index.html` in a browser, or run a local server:

```bash
cd glass-labworks-blog
python3 -m http.server 8080
```

Then visit http://localhost:8080

Resize the browser to compare desktop (≥900px) and mobile layouts.

## Shopify theme

Copy the contents of `shopify/` into your theme:

| File | Purpose |
|---|---|
| `sections/main-article-glass.liquid` | Article hero, body, prev/next |
| `sections/article-faq.liquid` | FAQ accordion (theme editor blocks) |
| `sections/article-related.liquid` | Related articles grid |
| `snippets/article-card.liquid` | Card used in related section |
| `templates/article.glass.json` | Template wiring all sections |
| `assets/*` | CSS, JS, images, icons |

In the Shopify admin, assign the **glass** template to an article under **Online Store → Themes → Customize → Blog posts**.

## Design notes

- **Font:** Montserrat (Google Fonts in preview; add to theme for production)
- **Breakpoint:** 900px (desktop nav vs. mobile hamburger)
- **Content width:** 1044px centered column on desktop
- **Figma typo preserved:** “PREVOUS” in design → implemented as “Previous” in code

## Figma source

- Desktop: `node-id=57-1233`
- Mobile: `node-id=57-1766`
