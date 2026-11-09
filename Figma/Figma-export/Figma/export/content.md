# Content — Maya Group homepage (in page order)

Source: the desktop mockup image and the layered mobile frame `01 · דף הבית – קבוצת האחים מאיה`.
Strings are copied exactly as they appear in the design, including the final periods.

> Items marked **[NOT IN DESIGN]** do not exist anywhere in the Figma file. Get them from the client. Do not invent them.

---

## 1. Header
| Element | Text | Link |
|---|---|---|
| Logo | האחים מאיה / בנייה ויזמות נדל"ן | `/` (home) |
| Nav 1 | הקבוצה | `#about` (assumed, no link set in Figma) |
| Nav 2 | החטיבות שלנו | `#divisions` (assumed) |
| Nav 3 | הפעילות שלנו | `#activities` (assumed) |
| Button | בואו נדבר ↖ | `#contact` / contact page (assumed) |
| Mobile | hamburger menu (3 bars) | Opens the menu. **[NOT IN DESIGN]**: there is no open-menu screen |

## 2. Hero
- Vertical label on the left (desktop only): `MAYA GROUP / A SHARED VISION`
- Eyebrow (mobile, above the title): קבוצת האחים מאיה
- Title line 1: רואים רחוק.
- Title line 2 (accent): בונים אחרת.
- Sub-line (desktop, with a line before it): קבוצת האחים מאיה
- Subtitle: נדל"ן. טכנולוגיה. השקעות.
- Desktop: circular arrow button → `#divisions`
- Mobile button: גלו את החטיבות ↓ → `#divisions`
- Desktop bottom-left: pause button ‖ (implies hero motion/video, see section 8)
- Desktop bottom-center: scroll-down arrow ↓ → `#divisions`

## 3. Divisions (`#divisions`)
- Eyebrow: 01 / החטיבות שלנו (visible on mobile; not shown on the desktop mockup)
- Title line 1: ארבע חטיבות.
- Title line 2 (accent): חזון אחד.

| # | Brand line | Title (mobile card) | Logo on desktop card | Link |
|---|---|---|---|---|
| 01 | האחים מאיה | בנייה ויזמות נדל"ן | האחים מאיה – בנייה ויזמות נדל"ן | Page `02 · בנייה ויזמות נדל"ן` |
| 02 | האחים מאיה | השקעות וטכנולוגיה | האחים מאיה – השקעות וטכנולוגיה | Page `04 · השקעות וטכנולוגיה` |
| 03 | האחים מאיה | בית תוכנה | האחים מאיה – בית תוכנה | Page `06 · בית תוכנה` (assumed) |
| 04 | קרן מאיה | השקעות והזדמנויות | קרן מאיה (gold) | Page `07 · קרן מאיה` (assumed) |

The Figma file has 7 page frames: 01 דף הבית, 02 בנייה ויזמות נדל"ן, 03 פרויקט קיש 23, 04 השקעות וטכנולוגיה, 05 (NIVAT), 06, 07. The links above are inferred from the frame names. No prototype links are set in Figma.

## 4. About (`#about`)
- Eyebrow: 02 / אודות הקבוצה
- Title line 1: הכול מתחיל
- Title line 2: בחיבור הנכון.
- Body (desktop, 2 lines): אנשים, רעיונות ועשייה. / מחברים ניסיון עם מבט אל העתיד.
- Image: the tree and curved building at sunset. Desktop has a navy logo badge (icon only) on the image.

## 5. Activities (`#activities`), from the mobile frame
- Eyebrow: 03 / הפעילות שלנו
- Title line 1: מחזון
- Title line 2 (accent): למציאות.
- Body: שלושה תחומים, צוות אחד ותפיסה אחת: לבנות דברים שמחזיקים לאורך זמן.
- List links (each with a ↖ arrow):
  1. יזמות ובנייה → division 01 (assumed)
  2. חדשנות וטכנולוגיה → divisions 02/03 (assumed)
  3. חיבורים והשקעות → division 04 (assumed)

## 6. Closing CTA
- Title: בואו נבנה את המחר.
- Button: נדבר? ↖ → contact (assumed)

## 7. Footer
- Logo: האחים מאיה – בנייה ויזמות נדל"ן
- Link: חזרה למעלה ↖ → scroll to top
- Contact details (phone, email, address): **[NOT IN DESIGN]**
- Social links: **[NOT IN DESIGN]**
- Legal / copyright line: **[NOT IN DESIGN]**. Suggested: © 2026 קבוצת האחים מאיה. כל הזכויות שמורות.

## 8. Interactions and animation (what the design implies; nothing is prototyped in Figma)
- **Hero:** the pause button means the hero should move: a slow zoom on the photo, or a short looping video. The pause button must stop it (accessibility). Not specified, so confirm with the client.
- **Scroll-down arrow:** smooth scroll to the divisions section; optional gentle bounce.
- **Vertical "MAYA GROUP / A SHARED VISION":** static decorative label (rotated -90°), not interactive.
- **Cards:** the whole card is a link; the arrow circle is a visual cue. Suggested hover: lift 4px, stronger shadow, photo zooms to 1.05.
- **Buttons/nav:** no hover states are designed. Suggested: outline button fills navy; primary button `#1F6E9E` → `#1C6A99`.
- **Designer notes found in Figma:**
  - Header: "logo on the right, hamburger menu on the left; swap the logo via the Fill of the Logo layer."
  - Hero: "image on top fading into navy, text and button full width; swap the image via Media/Image."
  - CTA: "Primary is blue in Group mode and gold in Fund mode. In mobile rows, width is Fill."
