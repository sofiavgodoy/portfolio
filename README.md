# Sofia Godoy — Portfolio

My professional portfolio, built from scratch. It shows my marketing research and UX/UI design work.

Built with [Astro](https://astro.build): fast static pages, no heavy framework, and every
project is a Markdown file.

## The idea: paint mixing

Every discipline has a color, and projects that span several show the blend:

| Color | Discipline |
| --- | --- |
| Pink | Strategy & Marketing |
| Blue | UX & Research |
| Purple | Brand & Visual |

The homepage hero is a soft “paint field” where these colors drift and follow the cursor.
Hovering *Strategy* or *Design* pulls that color forward. The Work page uses the same colors
as filters instead of separate Marketing and UX tabs, so hybrid projects never have to pick a side.

### Other signature features

- **Read as a strategist / designer:** every case study opens with a switch. The strategist view
  shows the problem, insight, and results, with visuals kept compact. The designer view shows the
  challenge, process, and tools, with visuals shown large. The choice is remembered across projects.
  Edit the text in each project's `lenses:` front matter.
- **Junk-journal Playground:** creative work is taped into a scrapbook page with washi tape,
  polaroids, ticket-stub labels, sticky notes, and stickers.
- **Brush stroke:** the three paint colors sweep in behind the name on load.

## Run it locally

```bash
npm install
npm run dev        # http://localhost:4321
npm run build      # outputs to dist/
```

## Editing content

| What | Where |
| --- | --- |
| Name, contact links, skills, involvement pins, awards, experience | `src/data/site.ts` |
| Work case studies | `src/content/work/*.md` |
| Playground pieces | `src/content/playground/*.md` |
| Images | `public/images/<project>/` |
| Colors, fonts, spacing | top of `src/styles/global.css` |

Each Markdown file starts with front matter:

```yaml
---
title: "Bloom"
kicker: "Design-A-thon · Runner-up, Best Design"
disciplines: ["ux", "visual"]   # strategy | ux | visual
year: "2025"
summary: "One or two sentences shown on the card."
cover: "/images/bloom/cover.webp"
featured: true                   # show on the homepage
order: 5                         # sort order
draft: false                     # true hides the page
lenses:                          # optional "read as" switch (work only)
  strategist:
    - label: "The brief"
      text: "What the client needed."
  designer:
    - label: "Process"
      text: "How I got there."
---
```

To show several images side by side, wrap them in a gallery:

```md
<div class="gallery">

![](/images/bloom/03.webp)

![](/images/bloom/04.webp)

</div>
```

## Deploying

Connect this repo to [Vercel](https://vercel.com) or [Netlify](https://netlify.com)
(both free). They detect Astro automatically: build command `npm run build`, output `dist`.
Then add the custom domain and update `site` in `astro.config.mjs`.

## Docs

- `docs/content-audit.md`: every page from the old Adobe Portfolio and Framer sites, and where it lives now
