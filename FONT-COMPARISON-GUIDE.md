# Font & Layout Comparison Guide

## Overview
We've created 8 different variations on the performance pages so you can compare and choose which styles you prefer.

## FONT Variations (First 4 Pages):

### 1. **Ballet for bloody beginners**
- **Style:** 20% Bigger Font Size
- **Changes:** All text is 20% larger than the original
- **Label on homepage:** `[Font: +20% bigger]`

### 2. **Piece#Peace**
- **Style:** Bold/Thick Text
- **Changes:** All text has bold weight (thicker/heavier appearance)
- **Label on homepage:** `[Font: Bold/Thick]`

### 3. **Dance as a social movement**
- **Style:** Bigger + Bold Combined
- **Changes:** Text is both 20% larger AND bold (maximum emphasis)
- **Label on homepage:** `[Font: Bigger+Bold]`

### 4. **SITz**
- **Style:** Wider Letter Spacing
- **Changes:** Letters are more spread out (increased spacing between characters)
- **Label on homepage:** `[Font: Wider spacing]`

## SCREEN SIZE & LAYOUT Variations (Next 4 Pages):

### 5. **From NOW to Now**
- **Style:** Medium Screen Size
- **Changes:** Media display screen is 650px wide (was 500px) - 30% bigger
- **Label on homepage:** `[Screen: 650px]`

### 6. **Tanz hin Tanz her**
- **Style:** Largest Screen Size
- **Changes:** Media display screen is 800px wide (was 500px) - 60% bigger!
- **Label on homepage:** `[Screen: 800px]`

### 7. **Appointment on stage**
- **Style:** VERTICAL Layout - Big Image on Top → Big Video Below → Text at Bottom
- **Changes:** 
  - Big image gallery centered at the top (750px wide)
  - Big video screen centered below the images (max-w-3xl)
  - Text content flows at the bottom
  - Everything is stacked vertically and centered
- **Label on homepage:** `[Big Image→Big Video→Text (750px)]`

### 8. **alihop**
- **Style:** Same VERTICAL Layout as Appointment, Bigger Screen
- **Changes:**
  - Same vertical layout: Big image on top → Big video below → Text at bottom
  - Image gallery is 900px wide (bigger than Appointment)
  - Video screen is also centered and big (max-w-3xl)
  - Everything centered and stacked vertically
- **Label on homepage:** `[Big Image→Big Video→Text (900px)]`

## How to Compare:

1. Visit the homepage - you'll see yellow labels next to the first 8 pages showing which variation is applied
2. Click on each page to see how it looks with that particular style
3. Compare the readability, visual appeal, layout, and overall feel of each variation
4. For FONT variations (first 4): Look at text size, weight, and spacing
5. For SCREEN SIZE variations (5-6): Look at how big the media display is
6. For LAYOUT variations (7-8): Notice how images, videos, and text are organized differently
7. Let us know which ones you prefer!

## Next Steps:

Once you've decided which font style you like best, we can:
- Apply that style to all pages consistently
- Make further adjustments if needed (size, weight, spacing)
- Remove the comparison labels from the homepage

## Technical Details (for reference):

### Font Variations:
- **Variation 1:** `font-size: 1.44em` (text), `1.8em` (titles)
- **Variation 2:** `font-weight: bold`
- **Variation 3:** `font-size: 1.44em` + `font-weight: bold`
- **Variation 4:** `letter-spacing: 1.5px` (was 0.23px)

### Screen Size Variations:
- **Variation 5:** `max-width: 650px` (was 500px)
- **Variation 6:** `max-width: 800px` (was 500px)
- **Variation 7:** `max-width: 750px` for images
- **Variation 8:** `max-width: 900px` for images

### Layout Variations:
- **Variations 7 & 8:** Custom VERTICAL component (`MediaGallerySeparated`) that:
  - Displays big image gallery centered at the TOP (max-w-4xl)
  - Shows big video screen centered BELOW images (max-w-3xl)
  - Places text content at the BOTTOM
  - Everything is stacked VERTICALLY and centered
  - Perfect for pages with both images and videos that need clear separation

All variations maintain the same font family (FreeMono) for consistency.
