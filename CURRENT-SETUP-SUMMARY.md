# Current Setup Summary - All Changes Applied

## ✅ Screen Sizes (SWAPPED as requested):

### From NOW to Now:
- Uses: `media-screen-largest`
- Size: **650px** ✓
- Label: `[BG: Light 50% + Font: +20% bigger]`

### Tanz hin Tanz her:
- Uses: `media-screen-bigger`  
- Size: **800px** ✓
- Label: `[BG: Light 50% + Font: Bold]`

## ✅ Layout - VERTICAL (Image → Video → Text):

### Both Appointment on stage AND alihop use:
- Component: `MediaGallerySeparated`
- Layout Structure:
  1. **TOP**: Big centered image gallery (max-w-4xl)
  2. **MIDDLE**: Big centered video player (max-w-3xl)
  3. **BOTTOM**: Text content

### Appointment on stage:
- Image screen: 750px
- Layout: Images centered top → Videos centered below → Text
- Label: `[BG: Dark 80% + Font: Bigger+Bold]`

### alihop:
- Image screen: 900px  
- Layout: Images centered top → Videos centered below → Text
- Label: `[BG: Medium 60% + Font: Wide spacing]`

## MediaGallerySeparated Component Details:

```tsx
// Images Section - Lines 138-223
<div className="mb-8 flex justify-center">
  <div className="w-full max-w-4xl space-y-4 media-display-container">
    {/* Big centered image display */}
  </div>
</div>

// Videos Section - Lines 226-250  
<div className="mb-8 flex justify-center">
  <div className="w-full max-w-3xl space-y-6">
    {/* Big centered video display */}
  </div>
</div>

// Text Section - After videos
<div className="space-y-4 mt-8">
  {/* Description and additional info */}
</div>
```

## All 15 Pages with Custom Backgrounds + Font Effects:

1. **Ballet for bloody beginners** - Medium 60% BG + Font +20%
2. **Piece#Peace** - Dark 80% BG + Font Bold
3. **Dance as a social movement** - Standard 70% BG + Font Bold+Big
4. **SITz** - Medium 60% BG + Wide spacing
5. **From NOW to Now** - Light 50% BG + Font +20% + **650px screen**
6. **Tanz hin Tanz her** - Light 50% BG + Font Bold + **800px screen**
7. **Appointment on stage** - Dark 80% BG + Font Bold+Big + **Vertical Layout 750px**
8. **alihop** - Medium 60% BG + Wide spacing + **Vertical Layout 900px**
9. **Appointment # 2** - B&W 75% BG + Font +20%
10. **opa europa** - B&W 75% BG + Font Bold
11. **tongue** - Medium 60% BG + Font Bold+Big
12. **back to emotion** - Light 50% BG + Wide spacing
13. **the note** - Dark 80% BG + Font +20%
14. **sit** - Standard 70% BG + Font Bold
15. **Homεmotion** - Light 50% BG + Font Bold+Big

## If Layout Still Appears Horizontal:

1. **Hard refresh the browser**: Cmd+Shift+R (Mac) or Ctrl+Shift+R (Windows)
2. **Clear browser cache**
3. **Check browser dev tools** - make sure CSS is loading
4. **Verify dev server restarted** - should be running on http://localhost:3000

The dev server has been restarted to clear any caching issues.

## CSS Classes Reference:

**Font Variations:**
- `font-variation-1` = 20% bigger (1.44em text, 1.8em titles)
- `font-variation-2` = Bold weight
- `font-variation-3` = Bigger + Bold
- `font-variation-4` = Wider letter spacing (1.5px)

**Background Overlays:**
- `page-bg-light-overlay` = 50% black
- `page-bg-medium-overlay` = 60% black
- `page-bg-overlay` (default) = 70% black
- `page-bg-dark-overlay` = 80% black
- `page-bg-bw` = 75% black + grayscale filter

**Screen Sizes:**
- `media-screen-largest` = 650px
- `media-screen-xlarge` = 750px
- `media-screen-bigger` = 800px
- `media-screen-large` = 900px
