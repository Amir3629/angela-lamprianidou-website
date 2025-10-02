# Custom Background Effects Guide

## Overview
Each page now has its own unique background image from the page's media gallery, with custom overlay effects to ensure text readability.

## Completed Pages with Custom Backgrounds:

### 1. **Appointment # 2**
- **Background Image:** `https://lamprianidou.com/Per4mer/appointment2/musrara1754.jpg`
- **Effect:** Black & White with 75% black overlay
- **CSS Classes:** `page-bg-overlay page-bg-bw`
- **Label on homepage:** `[BG: Black & White]` (purple)

### 2. **opa europa**
- **Background Image:** `/europa.jpeg`
- **Effect:** Black & White with 75% black overlay
- **CSS Classes:** `page-bg-overlay page-bg-bw`
- **Label on homepage:** `[BG: Black & White]` (purple)

### 3. **tongue**
- **Background Image:** `/toung.jpeg`
- **Effect:** Medium overlay (60% black)
- **CSS Classes:** `page-bg-overlay page-bg-medium-overlay`
- **Label on homepage:** `[BG: Medium overlay 60%]` (purple)

### 4. **back to emotion**
- **Background Image:** `https://lamprianidou.com/Per4mer/backtoemo/happy11.jpg`
- **Effect:** Light overlay (50% black)
- **CSS Classes:** `page-bg-overlay page-bg-light-overlay`
- **Label on homepage:** `[BG: Light overlay 50%]` (purple)

### 5. **the note**
- **Background Image:** `https://lamprianidou.com/Per4mer/Workshop/TheNote/bild_flyer3.jpg`
- **Effect:** Dark overlay (80% black)
- **CSS Classes:** `page-bg-overlay page-bg-dark-overlay`
- **Label on homepage:** `[BG: Dark overlay 80%]` (purple)

### 6. **sit**
- **Background Image:** `https://lamprianidou.com/Per4mer/sit/sit01.jpg`
- **Effect:** Standard overlay (70% black)
- **CSS Classes:** `page-bg-overlay`
- **Label on homepage:** `[BG: Standard overlay 70%]` (purple)

### 7. **Homεmotion**
- **Background Image:** `https://lamprianidou.com/homemotion/homemo/HomemotionEIngen.jpg`
- **Effect:** Light overlay (50% black)
- **CSS Classes:** `page-bg-overlay page-bg-light-overlay`
- **Label on homepage:** `[BG: Light overlay 50%]` (purple)

## Available CSS Overlay Effects:

### Standard Overlay (70% black) - Default
```css
page-bg-overlay
```

### Black & White with 75% overlay
```css
page-bg-overlay page-bg-bw
```

### Light Overlay (50% black)
```css
page-bg-overlay page-bg-light-overlay
```

### Medium Overlay (60% black)
```css
page-bg-overlay page-bg-medium-overlay
```

### Dark Overlay (80% black)
```css
page-bg-overlay page-bg-dark-overlay
```

## How to Apply to Other Pages:

### Template Code:
```tsx
return (
  <div className="min-h-screen relative overflow-hidden bg-black text-white website-font page-bg-overlay [OVERLAY-CLASS]" style={{
    backgroundImage: `url('[IMAGE-PATH]')`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundAttachment: 'fixed'
  }}>
    <MediaGallery
      // ... existing props ...
      disableBackground={true}  // ADD THIS!
    />
  </div>
);
```

Replace:
- `[OVERLAY-CLASS]` with one of: `page-bg-bw`, `page-bg-light-overlay`, `page-bg-medium-overlay`, or `page-bg-dark-overlay`
- `[IMAGE-PATH]` with an image from the page's media gallery

## Remaining Pages to Update:

### Performance Pages:
- ☑ Ballet for bloody beginners (already has background)
- ☑ Piece#Peace (already has background)
- ☑ Dance as a social movement (already has background)
- ☑ SITz (already has background)
- ☑ From NOW to Now (already has background)
- ☑ Tanz hin Tanz her (already has background)
- ☑ Appointment on stage (already has background)
- ☑ alihop (already has background)
- ✅ Appointment # 2 (DONE - Black & White)
- ✅ opa europa (DONE - Black & White)
- ✅ tongue (DONE - Medium 60%)
- ✅ back to emotion (DONE - Light 50%)
- ✅ the note (DONE - Dark 80%)
- ✅ sit (DONE - Standard 70%)

### Workshop Pages:
- ✅ Homεmotion (DONE - Light 50%)
- ⚪ Jaw and Body Release
- ⚪ RAW-MAN-TICK
- ⚪ You are the point
- ⚪ Lifechoreography
- ⚪ Expansion and Explosion
- ⚪ Dance News
- ⚪ Gegen den Zeitgeist
- ⚪ Flip Flop for everyone
- ⚪ Yoga - Composition - Dance
- ⚪ Composition
- ⚪ CIA

### Archive Pages:
- ⚪ el cuerpo del otro
- ⚪ time
- ⚪ loop
- ⚪ katharsi
- ⚪ shortcuts
- ⚪ art sit
- ⚪ movie

## Effect Recommendations by Page Type:

### For energetic/active performances:
- Use **Light overlay (50%)** - lets more of the image show through

### For intimate/emotional performances:
- Use **Medium overlay (60%)** - balanced between image and text

### For dramatic/intense performances:
- Use **Dark overlay (80%)** - focuses attention on text

### For historical/documentary content:
- Use **Black & White with 75%** - creates a timeless, archival feel

## Benefits:

1. **Visual Identity:** Each page has its own unique visual character
2. **Better Readability:** Black overlays ensure white text is always readable
3. **Consistency:** Same structure across all pages
4. **Performance:** `background-attachment: fixed` creates a subtle parallax effect
5. **Branding:** Purple labels on homepage distinguish background effects from layout/font changes

## Current Label Colors on Homepage:

- 🟡 **Yellow** - Font variations (Ballet, Piece#Peace, Social Movement, SITz)
- 🟡 **Yellow** - Screen sizes (From NOW to Now, Tanz hin Tanz her)
- 🟡 **Yellow** - Layout variations (Appointment on stage, alihop)
- 🟣 **Purple** - Background effects (Appointment # 2, opa europa, tongue, back to emotion)

This makes it easy for your client to see what's been changed and compare different effects!
