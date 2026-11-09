# Prompt for AI Developer — "Maya Brothers Group" (קבוצת האחים מאיה) Homepage

You are a senior front-end developer. Build the **homepage** of the corporate website for **"קבוצת האחים מאיה" (Maya Brothers Group / MAYA GROUP)** so that it matches the attached design mockup pixel-faithfully. The design is a premium, calm, architectural, navy-and-white corporate look. The site is **Hebrew, right-to-left (RTL)**. Treat the attached homepage image as the source of truth for layout and proportions; treat the design tokens below (extracted from the Figma file) as the source of truth for colors, fonts, radii and shadows.

---

## 1. Tech requirements

- Semantic HTML5 + modern CSS (CSS custom properties, Flexbox, Grid). If you use a framework (Next.js/React + Tailwind is fine), map every token below into the theme config — **no hard-coded one-off values**.
- `<html lang="he" dir="rtl">`. Use logical CSS properties (`margin-inline-start`, `padding-inline`, `inset-inline-end`, etc.) so the layout is correct in RTL.
- Fonts: **Heebo** (Google Fonts) weights 400, 500, 700, 800 for all Hebrew text; **Inter** 500/600 for small Latin text and numerals (section numbers "01", "02", the vertical "MAYA GROUP / A SHARED VISION" label).
- Fully responsive: desktop (≥1200px, design reference), tablet (768–1199px), mobile (<768px, there is a dedicated mobile design — described in section 6).
- Accessibility: WCAG AA contrast, visible focus states, `alt` text on all images, `aria-label` on icon-only buttons, keyboard-operable menu, `prefers-reduced-motion` respected (hero video/animation pauses).
- Performance: images in WebP/AVIF with `srcset`, `loading="lazy"` for everything below the hero, hero image `fetchpriority="high"`.
- All content in components/sections so later pages (division pages 02–07) can reuse Header, Footer, Section-Eyebrow, Card and Button components.

---

## 2. Design tokens (use exactly)

### Colors
| Token | Value | Usage |
|---|---|---|
| `--color-navy-900` | `#0F2340` | Main text, headings on light bg, hamburger, logo text |
| `--color-navy-800` | `#0F2C4C` | Hero / dark section background, hero gradient fade |
| `--color-blue-600` | `#1F6E9E` | Primary brand blue: accent heading line, eyebrow lines, primary buttons, links |
| `--color-blue-650` | `#1C6A99` | Primary button hover/pressed |
| `--color-sky-300` | `#6CB6E0` | Accent heading color on dark backgrounds |
| `--color-gray-600` | `#4B5565` | Body / paragraph text on light bg |
| `--color-border` | `#D7DDE5` | Header bottom border, dividers, card borders |
| `--color-bg-page` | `#F4F6F9` | Page background |
| `--color-white` | `#FFFFFF` | Cards, header, text on dark |
| `--color-white-25` | `rgba(255,255,255,0.25)` | Divider lines and outline-button borders on dark bg |
| `--color-gold` | approx. `#C9A24A` → `#E3C26E` gradient | Only for the "קרן מאיה" (Maya Fund) card/logo. Sample exact value from the logo asset |

Hero fade gradient: `linear-gradient(180deg, rgba(15,44,76,0) 0%, #0F2C4C 100%)` on mobile; on desktop use a horizontal gradient from the right (text side): `linear-gradient(270deg, rgba(15,44,76,0.85) 0%, rgba(15,44,76,0.35) 45%, rgba(15,44,76,0) 70%)` so the headline is readable while the building photo stays bright on the left.

### Typography (Heebo unless noted)
| Style | Desktop | Mobile | Weight | Line-height |
|---|---|---|---|---|
| Hero title (2 lines) | 64px | 34px | 800 | 1.1 |
| Section title (2 lines) | 48px | 28px | 800 | 1.15 |
| Hero subtitle / lead | 20px | 15px | 400 | 1.6 |
| Body paragraph | 18px | 16px | 400 | 1.6 |
| Card title | 20px | 18px | 700 | 1.3 |
| Eyebrow ("02 / אודות הקבוצה") | 14px | 13px | 500 | 1.25 |
| Nav links | 15px | — | 500 | 1 |
| Button label | 15px | 16px | 700 | 1 |
| Section/card number (Inter) | 13px | 13px | 500 | 1 |

Headings always use two lines: **line 1 in navy (or white on dark)**, **line 2 in the accent color** (`--color-blue-600` on light bg, `--color-sky-300` on dark bg) — e.g. "הכול מתחיל" / "בחיבור הנכון." Every heading line ends with a period, as in the design.

### Radii, shadows, spacing
- Radius: cards `12px`, large image / CTA bar `14px`, buttons `8px`, small badges `6px`, circular icon buttons `50%`.
- Card shadow: `0 4px 14px rgba(15,36,64,0.08)`; hover: `0 10px 28px rgba(15,36,64,0.14)` + `translateY(-4px)`, transition 250ms ease.
- Spacing scale (8-pt): 4, 8, 12, 16, 24, 32, 48, 64, 96, 128.
- Container: `max-width: 1200px; padding-inline: 24px; margin-inline: auto`. Section vertical padding: 96px desktop, 56px mobile.

---

## 3. Page structure (desktop, top → bottom, matching the image)

All alignment is RTL: "right" = start, "left" = end.

### 3.1 Header (sticky)
- Height 72px, white background (`rgba(255,255,255,0.92)` + `backdrop-filter: blur(10px)` when scrolled), 1px bottom border `--color-border`.
- **Right:** logo — the "האחים מאיה" building-icon mark + wordmark, with the tagline "בנייה ויזמות נדל"ן" underneath. Height ~44px. Use the SVG asset `logo-maya-group.svg`.
- **Center-right:** nav links in this order (right → left): **הקבוצה** | **החטיבות שלנו** | **הפעילות שלנו**. Separate them with thin 1px × 16px vertical dividers in `--color-border`. Color navy-900, hover color blue-600 with a 2px underline that grows from the center.
- **Left:** outline button **"בואו נדבר"** with a small diagonal arrow icon (↖, pointing up-left) on its left side. 1px navy border, 8px radius, padding 10px 18px, navy text; hover: fill navy, text white.

### 3.2 Hero
- Full container width (edge-to-edge inside the page, no radius), height ~**620px** desktop (keep aspect ≈ 2.6:1 relative to 1440 width), background-color `--color-navy-800`.
- Background photo: modern white curved-balcony residential tower in the foreground on the left, palm trees, a city skyline and the Mediterranean sea at sunset on the right (`hero-coastal-tower.jpg`, `object-fit: cover`, focal point left-center). Apply the horizontal navy gradient described above.
- **Content block on the right**, vertically centered, max-width 560px:
  1. Title, white, 64px/800, two lines: **"רואים רחוק."** / **"בונים אחרת."**
  2. A row: 48px × 1px white line (opacity .6) + text **"קבוצת האחים מאיה"** (20px/500, white).
  3. Subtitle: **"נדל"ן. טכנולוגיה. השקעות."** (18px/400, white, opacity .85).
  4. Circular icon button (48px, 1.5px white border, transparent) with a ↗-style arrow, aligned under the text block on the right. Links to `#divisions`. Hover: white fill, navy arrow.
- **Left edge:** vertical label rotated -90° reading bottom→top: **"MAYA GROUP / A SHARED VISION"** (Inter 11px, letter-spacing .2em, white opacity .7), with a 1px × 60px white line under it.
- **Bottom-left:** small pause icon (‖) to pause the hero motion (if you implement a subtle Ken-Burns zoom or a video). Required for accessibility.
- **Bottom-center:** a thin down-arrow (↓) scroll cue with a gentle 2s bounce animation; scrolls to `#divisions`.
- Text entrance: fade-up 600ms, staggered 100ms per line (disabled under reduced motion).

### 3.3 Divisions — four cards (`#divisions`)
- Background `--color-bg-page`, padding-top ~64px.
- On desktop the design shows the cards directly under the hero without a visible heading; add a visually-hidden `<h2>`: "01 / החטיבות שלנו — ארבע חטיבות. חזון אחד." (On mobile this heading is visible, see section 6.)
- **Grid of 4 equal cards**, `grid-template-columns: repeat(4, 1fr)`, gap 20px. Card aspect ratio **≈ 0.82 (w:h)**, e.g. 270 × 330 at 1200 container.
- RTL order, right → left:
  1. **01 — האחים מאיה · בנייה ויזמות נדל"ן** — bg photo: green-terraced luxury building; logo: building-bars icon.
  2. **02 — האחים מאיה · השקעות וטכנולוגיה** — bg photo: blue bokeh/financial light; logo: rising-arrow chart icon.
  3. **03 — האחים מאיה · בית תוכנה** — bg photo: blurred modern office with monitors; logo: pixel/circuit icon.
  4. **04 — קרן מאיה** — **dark variant**: navy bg with a city-skyline photo at dusk; gold antler/"M" logo and gold wordmark "קרן מאיה".
- Card anatomy:
  - Background photo `object-fit: cover`, overlaid with a soft **white radial/linear wash** (cards 1–3: `linear-gradient(180deg, rgba(255,255,255,0.15) 0%, rgba(244,246,249,0.92) 55%, #F4F6F9 100%)`) so the logo sits on a light, misty area in the lower-middle. Card 4 uses a navy wash: `linear-gradient(180deg, rgba(15,44,76,0.2) 0%, rgba(15,44,76,0.9) 70%)`.
  - Top-right corner: number in Inter 13px ("01"), preceded (on its left) by a 20px × 1px line. Navy on light cards, white on card 4.
  - Center/lower-center: division logo (icon above wordmark, wordmark in navy-900 800 weight ~26px, sub-label in blue-600 500 weight 15px). Use the SVG logos — do not rebuild them in text.
  - Bottom-left corner: 32px circular outline button with a ↗ arrow (navy on light, white on card 4).
  - Radius 12px, shadow as tokens, whole card is a link (`<a>`), hover lifts and the photo zooms to `scale(1.05)` over 400ms.

### 3.4 About — "02 / אודות הקבוצה" (`#about`)
- Two-column grid, `grid-template-columns: 1fr 1fr`, gap 48px, vertically centered. **Text on the right, image on the left.**
- Text column (right-aligned):
  - Eyebrow row: `02 / אודות הקבוצה` with a 40px × 2px blue-600 line on its left.
  - Title, 48px/800: line 1 **"הכול מתחיל"** (navy), line 2 **"בחיבור הנכון."** (navy in the desktop image — use navy for both lines on desktop as shown; mobile uses blue-600 for line 2).
  - Paragraph, 18px gray-600: **"אנשים, רעיונות ועשייה."** newline **"מחברים ניסיון עם מבט אל העתיד."**
- Image column: photo of a curved white concrete building with a tree and the sun bursting through the leaves (`about-curve-sunset.jpg`), aspect ≈ 2.4:1 on desktop, radius 14px (the desktop mockup shows square corners – use 0 radius on desktop, 14px on mobile). A **56px navy square badge** containing the white group logo icon sits on the image's bottom-left corner, inset 16px.

### 3.5 Activities — "03 / הפעילות שלנו" (dark section) — continue the design language
(Not visible in the cropped desktop image; follow the mobile Figma frame and adapt to desktop.)
- Background `--color-navy-800`. Desktop: two columns — left: tall architecture photo (glass-and-concrete building with warm interior lights, `activities-building.jpg`) fading into navy on its right edge; right: content.
- Eyebrow `03 / הפעילות שלנו` (white, opacity .8). Title: **"מחזון"** (white) / **"למציאות."** (`--color-sky-300`).
- Paragraph (white .85): **"שלושה תחומים, צוות אחד ותפיסה אחת: לבנות דברים שמחזיקים לאורך זמן."**
- A list of 3 link rows, each 64px high, separated by 1px `--color-white-25` lines, text 20px/500 white on the right and a ↖ arrow icon on the left: **"יזמות ובנייה"**, **"חדשנות וטכנולוגיה"**, **"חיבורים והשקעות"**. Hover: text shifts 6px left and turns sky-300.

### 3.6 CTA + Footer
- White background. Title **"בואו נבנה את המחר."** (36px/800 navy, right-aligned).
- Primary button **"נדבר?"** with ↖ icon: desktop width 360px (mobile full width), height 56px, radius 8px, bg `--color-blue-600`, white 700 text; hover `--color-blue-650`.
- 1px `--color-border` divider, then a row: group logo on the right, link **"חזרה למעלה ↖"** (blue-600, 600 weight) on the left that smooth-scrolls to top.
- Add a minimal legal line under it (© {year} קבוצת האחים מאיה. כל הזכויות שמורות.) in 13px gray-600.

---

## 4. Icons
Use a single consistent thin-line icon set (Lucide or Phosphor, stroke 1.5–2): `arrow-up-left` (↖) for all CTA arrows in RTL, `arrow-up-right` inside the circular hero/card buttons as in the image, `arrow-down` for scroll cue, `pause`, `menu`. Size 16–20px.

## 5. Assets (export from the Figma file, page "Desktop – מקור")
- `logo-maya-group.svg` (בנייה ויזמות נדל"ן), `logo-maya-invest-tech.svg` (השקעות וטכנולוגיה), `logo-maya-software.svg` (בית תוכנה), `logo-maya-fund.svg` (קרן מאיה, gold) — the four logos are on the canvas as separate images.
- Photos: hero coastal tower, 4 card backgrounds, about curve+sunset, activities building. Export @2x, WebP, max 2400px wide.
- If any asset is missing, use a neutral placeholder with the correct aspect ratio and a TODO comment — never change the layout to fit a placeholder.

## 6. Mobile (<768px) — follows the existing Figma mobile frame "01 · דף הבית"
- Header 64px: logo on the right, hamburger (3 navy bars, 22/16/22px wide, 2px tall, radius 1px, gap 5px) on the left; opens a full-screen navy menu.
- Hero stacks: photo on top (~250px) with a bottom navy fade, then content on navy bg with padding 4px 24px 32px: eyebrow "קבוצת האחים מאיה", title "רואים רחוק." (white) / "בונים אחרת." (sky-300), subtitle, and a full-width outline button **"גלו את החטיבות ↓"** (1px white-25 border).
- Divisions: visible heading "01 / החטיבות שלנו", "ארבע חטיבות." / "חזון אחד."; cards become **horizontal white list cards** (radius 12, shadow): thumbnail with logo 100×86 on the right, then number, title (18/700), brand line (blue-600: "האחים מאיה" / "קרן מאיה"), and a circular arrow button on the left. The 4th title on mobile is "השקעות והזדמנויות".
- About: text then a full-width image (radius 14).
- Activities: full-width photo on top fading to navy, then content and list.
- CTA: full-width "נדבר?" button; footer row logo + "חזרה למעלה".

## 7. Acceptance criteria
1. At 1440×900 the desktop page visually overlays the mockup within ±4px on positions and sizes of header, hero text block, cards and about section.
2. All colors, fonts and radii come from CSS variables listed in section 2.
3. Correct RTL everywhere (numbers and Latin text keep LTR via `<bdi>` / `dir="ltr"`).
4. Lighthouse: Performance ≥ 90, Accessibility ≥ 95 on mobile.
5. No horizontal scroll at 360px width.
6. Deliver: `index.html`, `styles/tokens.css`, `styles/main.css`, `/assets`, and a short README listing the components and how to swap images/logos.
