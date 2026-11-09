# Design Tokens — Maya Group homepage

Source: Figma file "Untitled", page "Desktop – מקור", frame `01 · דף הבית – קבוצת האחים מאיה` (mobile, layered), and the `Mobile` text styles on the `Components` page.

> **Important context**
> - The **desktop homepage exists in Figma only as a flat raster image** ("Luxury coastal homepage with four balanced cards.png", 1045×1171 on canvas). It has no layers, so there is no exact desktop CSS. The desktop values below that say **(derived)** are proportional estimates taken from that image.
> - The **mobile homepage is real, layered design** and every mobile value below is exact.
> - The mobile frame on the canvas is 696.65px wide = a **390px design scaled ×1.786**. All mobile numbers below are already converted back to real 390px values.

---

## 1. Frame widths
| Design | Width | Notes |
|---|---|---|
| Mobile | **390px** (canvas frame 696.65px = 390 × 1.786) | Frame height 4231.52px on canvas ≈ 2369px real |
| Desktop | Mockup image 1045 × 1171 on canvas (2090 × 2342 @2x) | Flat image, cut off after the About section. Recommended build width: 1440px with a 1200px container |

## 2. Colors
| Token | Hex | Role | Uses in the frame |
|---|---|---|---|
| `navy-900` | `#0F2340` | Primary navy: headings, main text, hamburger, logo text | 20 |
| `navy-800` | `#0F2C4C` | Dark sections: hero background, "הפעילות שלנו" section | 8 |
| `blue-600` | `#1F6E9E` | Accent blue: second heading line, eyebrow lines, primary button, links | 10 |
| `blue-650` | `#1C6A99` | Primary button, pressed/alternate state | 1 |
| `sky-300` | `#6CB6E0` | Accent heading color on dark backgrounds ("בונים אחרת.", "למציאות.") | 2 |
| `gray-600` | `#4B5565` | Body / paragraph text | 7 |
| `border` | `#D7DDE5` | Header bottom border, dividers | 6 |
| `bg-page` | `#F4F6F9` | Page background (Figma variable `color/bg/page`) | 3 |
| `white` | `#FFFFFF` | Cards, header, text on dark | 24 |
| `white-25` | `rgba(255,255,255,0.25)` | Lines and outline-button borders on dark | 3 |
| `shadow` | `rgba(15,36,64,0.08)` | Card shadow color | 4 |

**Gold (קרן מאיה):** **no gold color exists as a token or fill in the Figma file.** The gold appears only inside the raster logo image, so no exact value can be provided. Sample it from the logo artwork, or ask the designer. Visual estimate from the image: gradient ≈ `#C9A24A` → `#E3C26E`. The designer's own note in the CTA component says: Primary button = blue in "Group" mode and **gold in "Fund" mode**.

Hero image fade (mobile, exact): `linear-gradient(180deg, rgba(15,44,76,0) 0%, #0F2C4C 100%)`, 196px tall over the bottom of the 250px hero photo.

## 3. Fonts
| Family | Weights used | Where to get it |
|---|---|---|
| **Heebo** | 400, 500, 600, 700, 800 | Google Fonts (free): https://fonts.google.com/specimen/Heebo |
| **Inter** | used for numbers/Latin labels (01, 02 …, "MAYA GROUP / A SHARED VISION") | Google Fonts (free): https://fonts.google.com/specimen/Inter |

Both are on Google Fonts, so no font files are needed in `fonts/`.

## 4. Type scale

### Mobile (exact, Figma text styles "Mobile")
| Style | Size / line-height | Weight | Used for |
|---|---|---|---|
| Display | 34 / 40 | 800 | Hero title "רואים רחוק." / "בונים אחרת." |
| H1 | 28 / 34 | 800 | Section titles ("ארבע חטיבות." / "חזון אחד.") |
| H2 | 22 / 28 | 700 | Sub-section titles, CTA title "בואו נבנה את המחר." |
| H3 | 18 / 24 | 700 | Card titles ("בנייה ויזמות נדל"ן") |
| Body | 15 / 24 | 400 | Hero subtitle, paragraphs |
| Body Small | 13 / 20 | 400 | Small descriptions |
| Label | 14 / 18 | 500 | List links, card brand line |
| Eyebrow | 13 / 16 | 500 | "02 / אודות הקבוצה", "קבוצת האחים מאיה" |
| Button | 15 / 20 | 700 | Button labels |
| Caption | 11 / 14 | 400 | Numbers, captions |

Letter spacing: 0 for all Heebo styles (no letter-spacing appears in the exported CSS). All text is `text-align: right`.

### Desktop (derived from the mockup image)
| Style | Size / line-height | Weight |
|---|---|---|
| Hero title | 64 / 70 | 800 |
| Section title | 48 / 54 | 800 |
| Hero sub-line ("קבוצת האחים מאיה") | 20 / 28 | 500 |
| Hero subtitle / body | 18 / 28 | 400 |
| Eyebrow | 14 / 18 | 500 |
| Nav links | 15 / 20 | 500 |
| Button | 15 / 20 | 700 |
| Card number | 13 / 16 (Inter) | 500 |
| Vertical hero label | 11 / 14 (Inter), letter-spacing 0.2em, uppercase | 500 |

## 5. Corner radii, shadows, borders (mobile, exact)
| Token | Value | Used for |
|---|---|---|
| `radius-xs` | 1px | Hamburger bars |
| `radius-sm` | 6px | Thumbnails inside cards |
| `radius-md` | 8px | Buttons |
| `radius-lg` | 12px | Division cards |
| `radius-xl` | 14px | Large images, CTA button |
| `radius-full` | 50% | Circular arrow buttons |
| `shadow-card` | `box-shadow: 0px 4px 14px rgba(15, 36, 64, 0.08);` | Division cards |
| `border` | `1px solid #D7DDE5` | Header bottom border, dividers |
| `border-dark` | `1px solid rgba(255,255,255,0.25)` | Lines and outline buttons on dark |
| Eyebrow line | 24 × 1.5px, `#1F6E9E` | Line before an eyebrow |

Desktop: use the same radii and shadow. The desktop mockup shows the hero and the About image with square corners (0 radius).

## 6. Spacing

### Mobile (exact)
- Page side margin: **24px** (content padding 42.87px on canvas = 24px)
- Header: height **64px**, horizontal padding **20px**
- Hero content padding: 4px 24px 32px, gap between items 12px
- Card list gap: 12px; card inner padding 8px; thumbnail 100 × 86
- Section vertical padding: 40–56px
- Eyebrow row gap: 8px

### Desktop (derived)
- Container max-width **1200px**, side padding 24px (on the 1440 design: 120px margins)
- Header height ~72px
- Hero height ~620px
- Section vertical padding 96px
- Card grid: 4 columns, gap ~20px, card aspect ≈ 0.82 (w:h)
- About grid: 2 columns, gap 48px
