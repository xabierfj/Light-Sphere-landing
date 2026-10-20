# LightSphere Landing

A one-page marketing site I designed and built for **LightSphere**, the company behind *TRUE COLORS*, an experimental single-eye micro-implant that lets you see an aura of colour around the one person you are meant to love.

The site is in Spanish, written in the brand's voice, and built to be fast, accessible and easy for the client to keep editing.

## What I delivered

- A complete landing page: hero, how the implant works, colour guide, technology, FAQ, beta sign-up, products, locations and pricing.
- Legal pages (`/aviso-legal`, `/privacidad`).
- A small design system: tokens, component classes and keyframes in one stylesheet, with chamfered "clipped corner" components as the visual signature.
- SEO basics: per-page title and description, `robots` control and favicons.
- A content layer the client can edit without touching markup: all copy for products, locations, steps, specs and FAQs lives in `src/consts.ts`.

## Design decisions

- **Monochrome base, colour as the payoff.** The page is paper, ink and graphite. Colour appears only as the "aura" accents, which mirrors the product's idea: the world looks the same until it doesn't.
- **Four-font system.** Outfit for display, Playfair Condensed for editorial emphasis, Hanken Grotesk for body text and JetBrains Mono for labels and specs.
- **Accessibility first.** Skip link, labelled sections, semantic landmarks and `jsx-a11y` linting on every build.
- **Unknown facts stay visibly unknown.** Anything the client hasn't confirmed (price, address, email, screen specs) is a bracketed placeholder such as `[PRECIO]` or `[DIRECCIÓN]`, so nothing invented can ship by accident.

## Stack

| Area      | Choice                                      |
| :-------- | :------------------------------------------ |
| Framework | [Astro](https://astro.build) 7              |
| Styling   | Tailwind CSS 4 (via the Vite plugin)        |
| Icons     | `@lucide/astro`                             |
| Language  | TypeScript                                  |
| Quality   | ESLint (Astro + jsx-a11y), Prettier         |
| Tooling   | Bun, Node >= 22.12                          |

## Project structure

```text
src/
├── components/   One component per page section (Hero, Implante, FAQ, Precios...)
├── layouts/      Base layout and legal-page layout
├── pages/        index, aviso-legal, privacidad
├── styles/       global.css: tokens, component classes, keyframes
└── consts.ts     Editable site content and SEO metadata
public/           Fonts, images and favicons
```

## Running it

```sh
bun install
bun dev        # http://localhost:4321
bun build      # production build to ./dist
bun preview    # preview the build
bun lint       # ESLint
bun format     # Prettier
```

## Still pending from the client

Placeholders left in the copy until the client supplies the real values: contact email, location addresses, product screen specs, pricing and the book link.

## Status

Built and ready for content sign-off. Production domain to be set in `astro.config.mjs` (`site`) once confirmed.
