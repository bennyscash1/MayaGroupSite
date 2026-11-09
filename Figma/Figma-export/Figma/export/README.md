# Figma export — Maya Group site

Target folder on the dev PC: `C:\Bennys\DevProject\MayaProjects\MayaGroupSite\Figma`

## What the Figma file actually contains (checked 2026-11-09)

1. **Logos are PNG only. No vector logo exists anywhere in the file.**
   - The Components page has no logo component either.
   - The header logo in the mobile frames is a fill on a "Logo" layer that uses the same PNG.
   - SVG export from Figma would only wrap the PNG, so real SVGs must come from the designer or be traced.
2. **There are no clean photos in the file.**
   - Every homepage photo in the mobile frames is a *crop* of a single image: `Luxury coastal homepage with four balanced cards.png`. That is the 2090×2342 desktop mockup you already have.
   - This covers: Hero/Mobile → Media → Image, About image, Card/Division → Thumb, and CTA Banner → Image.
   - Cropping from the 2090×2342 mockup gives the **same quality** as exporting from Figma. Nothing higher-res exists.
   - The desktop mockups for the other pages (02–07) are the same kind of flat AI-generated images.
3. **Tokens:** see `tokens/tokens.md`. Mobile values are exact, from Figma variables, text styles and layer CSS. Desktop values are measured from the mockup. Figma has one color variable (`color/bg/page` = #F4F6F9) and the "Mobile" text styles listed there.

## Files downloaded to the PC's Downloads folder (from Chrome)

### Zip 1: mobile pages, PNG @2x (780px wide)
These are the 7 frames on the "Mobile" page:
- `01 · דף הבית – קבוצת האחים מאיה`
- `02 · בנייה ויזמות נדל"ן`
- `03 · פרויקט קיש 23`
- `04 · השקעות וטכנולוגיה`
- `05 · מודאל מיזם NIVAT (Bottom Sheet)`
- `06 · בית תוכנה`
- `07 · קרן מאיה`

Suggested location: `Figma/export/mockups/mobile/`

### Zip 2: desktop mockups + logos, PNG @1x (native size)
Rename them like this:

| Figma layer name (file in zip) | Size | Rename to |
|---|---|---|
| `Asset-2-2048×1356 (1) 1` | 2048×1356 | `export/logos/logo-construction.png` (also use as `logo-main.png`; it is the header logo "האחים מאיה – בנייה ויזמות נדל"ן") |
| `2 1 האחים-מאיה-השקעות-וטכנולוגיה` | 2169×1436 | `export/logos/logo-investments.png` |
| `האחים-מאיה-בית-תוכנה 1` | 2105×1394 | `export/logos/logo-software.png` |
| `WhatsApp Image 2026-11-02 at 20.0…` | 1284×1284 | `export/logos/logo-fund.png` (gold on navy square, not transparent) |
| `Luxury coastal homepage with four balanced cards` | 1045×1171 | `export/mockups/desktop/01-home.png`. **Use your 2090×2342 copy instead**; this one is half size |
| `Maya Fund premium navy-gold landing…` | — | `export/mockups/desktop/07-fund.png` |
| `NIVAT Glass Modal for Cardiac Innov…` | 1536×1024 | `export/mockups/desktop/05-nivat-modal.png` |
| `d7ce5407-…`, `97d2c25f-…`, `525212c0-…`, `432b19af-…` (1024×1536, 977×1610, 1024×1536, 925×1536) | — | `export/mockups/desktop/` — open each to see which division page it is (02 / 03 / 04 / 06) |

Logo notes:
- The logo PNGs have a **white/light background, not transparent**. Remove it (or trace to SVG) before placing them on photos.
- There is **no "-light" (white) version** of any logo in the file.
- There is **no icon-only main logo**. Crop the building icon from `logo-construction.png` for the About badge.

## Images to crop from the 2090×2342 desktop mockup
Boxes are `x1,y1 → x2,y2`, accurate to about ±10px. Text and logos are burned into the mockup.

| Name | Box | Note |
|---|---|---|
| `images/hero` | 21,147 → 2090,929 | Contains the hero headline; crop the left ~55% for a text-free photo or retouch |
| `images/card-1-construction` | 1567,1111 → 2027,1666 | Logo burned in |
| `images/card-2-investments` | 1073,1111 → 1532,1666 | Logo burned in |
| `images/card-3-software` | 579,1111 → 1038,1666 | Logo burned in |
| `images/card-4-fund` | 84,1111 → 543,1666 | Logo burned in |
| `images/about` | 84,1876 → 1083,2283 | Has a logo badge bottom-left |
| `images/activities` | not in the desktop mockup | The mobile frame crops it from the same source; take it from `mobile/01` |

For truly clean photos without burned-in text or logos, ask the designer for the original photo files, or generate or retouch them.
