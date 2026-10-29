# Content audit: old sites → new portfolio

Audited October 29, 2026. Covers every page on the Adobe Portfolio site
(sofiagodoyrojas.myportfolio.com) and the Framer site (sofia-godoy.framer.website),
and where each piece now lives in this repo.

Every Adobe page's text, images, and embeds have been migrated. Images were
downloaded from Adobe's CDN, resized to max 1600px, and converted to WebP
(`public/images/<slug>/`). The text keeps your wording, with spelling fixes only
(listed at the bottom).

---

## 1. Adobe Portfolio

### Site structure

| Nav | URL | Contents |
| --- | --- | --- |
| About Me | `/about-me` | Bio (4 paragraphs + thank-you line) and 1 headshot |
| Work | `/work` | Grid of 10 project covers (the homepage). Hero line: “Hi, I'm Sofia Godoy! Research-Driven Marketer & Designer” |
| Creative | `/creative-lab` | Grid of 12 creative project covers |
| Contact | `/contact` | Form: name, email, message. No direct email shown |

### Work pages (10)

| Old page | Title / subtitle on Adobe | Images | Embeds | New location | Notes |
| --- | --- | --- | --- | --- | --- |
| `/fnn` | FNN · Product Design - UX/UI - Brand | 2 | Figma mood board, Figma design file, Adobe video (final site walkthrough) | `/work/fnn` | Full case study: problem, Mar–May 2025, mood board, development & testing (25 user tests), links to live site |
| `/universal-destinations-and-expiriences` | Universal Destinations and Experiences · Digital Asset Management | 2 | none | `/work/universal` | HHN 35th anniversary research, global asset requests, metadata auditing. The old URL is misspelled (“expiriences”) |
| `/the-agency` | The Agency · Market Research - Strategy | 6 | 2 Google Drive PDFs | split into `/work/inquire-capitalism` + `/work/vero-beach-film-festival` | This page held two projects. One paragraph was duplicated word-for-word (now removed). The VBFF half repeated the VBFF page, so only the Inquire Capitalism half was kept here |
| `/vero-beach-film-festival` | Vero Beach Film Festival · Data Analyst - Market Research and Brand Strategy | 4 | Google Drive PDF | `/work/vero-beach-film-festival` | Gen Z audience research for the festival and Film Vero |
| `/cordelia` | Cordelia · Consulting - Digital Marketing | 0 (cover only) | none | `/work/cordelia` (**draft, hidden**) | **Empty on Adobe.** Needs content (your resume list says this was the class-winning digital marketing case) |
| `/ditto` | Ditto · Content Creation - Social Media | 1 | none | `/work/ditto` | Brand ambassador, Spring 2026, ~20 TikToks, links to @sofia_gator |
| `/access-newswire` | Access Newswire | 0 (cover only) | none | `/work/access-newswire` (**draft, hidden**) | **Empty on Adobe.** Needs content |
| `/online-businesses` | Online Businesses · Business Management - SEO | 7 | none | `/work/choco-chips` | Depop + eBay shops (choco_chips) |
| `/digital-graphics` | Social Media · Social Media - Content Development | 29 | none | `/work/gud-social` | Social media director for UF's UX/UI club: templates, analytics, design variations (“Sock Tember”), accounts managed |
| `/web-design` | Bloom · Web Design - UX/UI | 11 | Adobe video | `/work/bloom` | Design-A-thon runner-up, Best Design. Links to Figma and DevPost |

### Creative pages (12) → Playground

| Old page | Title | Images | Embeds | New location |
| --- | --- | --- | --- | --- |
| `/photography` | Photography | 27 | none | `/playground/photography` |
| `/physical-work` | Award Winner Childrens Book | 28 | none | `/playground/childrens-book` |
| `/design-process` | Design Process (survey infographic) | 9 | none | `/playground/design-process` |
| `/animations` | Animations (2D, “Meme Museum”) | 7 | 4 Adobe videos | `/playground/animations` |
| `/games` | Games (Waddle Hero, Crimson Veil, Minesweeper C++) | 39 | 5 Adobe videos | `/playground/games` |
| `/traditional-art` | Traditional Art | 11 | none | `/playground/traditional-art` |
| `/digital-art` | Digital Art | 11 | none | `/playground/digital-art` |
| `/assignment-6-product-label-design` | Assignment 6: Product Label Design | 7 | none | `/playground/product-label` |
| `/color-theory-digital-paint` | Color Theory Digital Paint | 7 | none | `/playground/color-theory` |
| `/text-masking-design` | Text Masking & Design | 5 | 1 Adobe video | `/playground/text-masking` |
| `/multiple-exposure-animation-obsession` | Multiple Exposure Animation - Obsession | 9 | 2 Adobe videos | `/playground/obsession` |
| `/social-media-ad-moving-graphic` | Social Media Ad Moving Graphic (“Healing Eyes”) | 8 | 1 Adobe video | `/playground/healing-eyes-ad` |

### External links found

- TikTok: `@sofia_gator`
- Depop: `choco_chips` · eBay: `ebay.us/m/7pvUVK`
- FNN live site, FNN Figma file + mood board
- Bloom Figma file, DevPost `bloom-b7tlu5`
- Inquire Capitalism site, Vero Beach Film Festival site
- 2 Google Drive research PDFs (Inquire Capitalism, VBFF)

---

## 2. Framer site (Artemis template)

Fonts: **Libre Baskerville** (italic headings) + **DM Sans** (body). Colors: cream
background, navy headings, magenta accent. Pages: Home, Works, Playground (+ 5
template case studies).

| Section | Status | What happened to it |
| --- | --- | --- |
| Nav: Works · *Sofia Godoy* · Playground | Real | Kept, with About and Contact added |
| “Welcome to my World” arched text | Real | Kept (SVG curved text) |
| Name + “Business Marketer and UX/UI Designer” + Get Started | Real | Kept; role now “Research-driven marketer & UX/UI designer” |
| Floating tilted cards (strawberry art, Waddle Hero, Bloom, Esri card) | Real | Kept, using images from Adobe. The Esri card image is only on Framer, whose image server is blocked here; send it if you want it back |
| Rotating text around headshot | Real | Kept: “UF STUDENT · MARKETING · DIGITAL ARTS” |
| Spotify player (Tame Impala, *The Slow Rush*) | Real | Became a small vinyl “On repeat” chip in the hero, plus the full player on About |
| “Sneak peak of my works” marquee | Real (typo) | Kept as “Sneak peek of my work” |
| “Design in action”: FinFlow, LaunchPad, HealthSync, TalentBridge, MarketMingle | **Template filler** | Removed; replaced with your real projects |
| “What I bring to the table” floating skill pills | Template skills | Kept the animation; skills rewritten from your experience |
| “Behind the canvas” (startups, stargazing, coffee, “Remix for Free!”) | **Template filler** | Removed |
| “Kind words from Clients” (Sarah Chen, Marcus Rivera, Jessica Park) | **Fake testimonials** | Removed. Add real quotes from managers/professors if you get them |
| “Brands I've worked with” (FinFlow, Altoe, Sonooi, radiO, Beeply…) | **Fake logos** | Replaced with real names: Universal, FNN, The Agency, Ditto, Access Newswire, Cordelia |
| Contact rows (hello@artemis.com, linkedin.com/artemis, are.na) | **Template filler** | Kept the row design; only real links are shown |
| Works page / Playground page | Template filler | Rebuilt with real content |

---

## 3. Not on either site yet (from your notebook)

These were on your resume/portfolio to-do lists but have no page anywhere:

- L'Oréal competition: Braille (strategy + inclusive design, strong flagship candidate)
- Color Blind App (class group project, UX/UI)
- 5 Personas & Nudging: Qualtrics consumer behavior study (research)
- Python word cloud / sentiment data scraping (research + data)
- Rose Ninja game (or is this Crimson Veil?)
- Handshake AI Fellow, WiCSE Merch Chair (Grace Hopper), AMA (Atlanta), NCDMC runner-up (Nashville), Owala agency presentation
- 2D animation final, C++/Python games (partly covered by Games)
- More FNN Instagram designs, more GUD graphics
- Logos for the About page: UF Innovate, FNN, Agency, Ditto, Handshake, Access, Inquire Cap, Universal, GUD, WiCSE, DSSD

## 4. Things to double-check

- **Videos are still hosted by Adobe.** 15 videos (FNN, Bloom, animations, games, motion pieces) play from Adobe's player. If you cancel Adobe Portfolio/Behance they may break. Send the original video files and they can be self-hosted.
- **Cordelia and Access Newswire** are empty on Adobe. They are migrated as hidden drafts; set `draft: false` once they have content.
- **About bio** still describes FNN as your current role; consider updating it now that Universal is done.
- **Universal NDA:** the text was already public on Adobe, so it was kept as is. Confirm you're comfortable with it.
- **Contact:** add your email, LinkedIn, resume PDF, and Instagram handles in `src/data/site.ts`.

### Spelling fixes applied during migration

crate → create · engament → engagement · costumer → customer · definetly → definitely ·
Lightning → Lighting (color theory) · layes → layers · non destructive from → non-destructive form ·
Aftereffects → After Effects · Childrens → Children's · “LinkedIn in to” → “LinkedIn to” ·
“i used” → “I used” · removed one duplicated paragraph (The Agency)
