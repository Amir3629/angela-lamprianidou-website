// Back to Emotions Page Image Debug Script
// Run this in the browser console on the Back to emotions page

console.log("=== BACK TO EMOTIONS IMAGE DEBUG SCRIPT ===");

// 1. Check all images on the page
const allImages = document.querySelectorAll('img');
console.log(`Found ${allImages.length} images on the page`);

allImages.forEach((img, index) => {
  console.log(`\n--- Image ${index + 1} ---`);
  console.log(`Src: ${img.src}`);
  console.log(`Alt: ${img.alt}`);
  console.log(`Classes: ${img.className}`);
  console.log(`Natural width: ${img.naturalWidth}`);
  console.log(`Natural height: ${img.naturalHeight}`);
  console.log(`Display: ${window.getComputedStyle(img).display}`);
  console.log(`Visibility: ${window.getComputedStyle(img).visibility}`);
  console.log(`Opacity: ${window.getComputedStyle(img).opacity}`);
});

// 2. Check for the old external image
const oldImage = document.querySelector('img[src*="happy11"]');
if (oldImage) {
  console.log("\n*** FOUND OLD EXTERNAL IMAGE ***");
  console.log("Old image src:", oldImage.src);
  console.log("Old image element:", oldImage);
} else {
  console.log("\n✅ No old external image found");
}

// 3. Check for new local images
const newImages = document.querySelectorAll('img[src*="back_to_emotions"]');
console.log(`\nFound ${newImages.length} new local images:`);
newImages.forEach((img, index) => {
  console.log(`  ${index + 1}. ${img.src}`);
});

// 4. Check MediaGallerySeparated component
const mediaGallery = document.querySelector('[class*="MediaGallery"]');
if (mediaGallery) {
  console.log("\n*** MEDIA GALLERY COMPONENT FOUND ***");
  console.log("Gallery element:", mediaGallery);
  console.log("Gallery classes:", mediaGallery.className);
  
  const galleryImages = mediaGallery.querySelectorAll('img');
  console.log(`Gallery contains ${galleryImages.length} images:`);
  galleryImages.forEach((img, index) => {
    console.log(`  ${index + 1}. ${img.src}`);
  });
} else {
  console.log("\n❌ MediaGallerySeparated component not found");
}

// 5. Check for any hidden or display:none images
const hiddenImages = Array.from(allImages).filter(img => {
  const style = window.getComputedStyle(img);
  return style.display === 'none' || style.visibility === 'hidden' || style.opacity === '0';
});

if (hiddenImages.length > 0) {
  console.log(`\n⚠️  Found ${hiddenImages.length} hidden images:`);
  hiddenImages.forEach((img, index) => {
    console.log(`  ${index + 1}. ${img.src} (${window.getComputedStyle(img).display})`);
  });
}

// 6. Check React component state (if available)
if (window.React) {
  console.log("\n=== REACT COMPONENT DEBUG ===");
  const reactRoot = document.getElementById('__next');
  if (reactRoot) {
    console.log("React root found:", reactRoot);
    
    // Try to find React fiber nodes
    const fiberKey = Object.keys(reactRoot).find(key => key.startsWith('__reactFiber'));
    if (fiberKey) {
      console.log("React fiber found:", fiberKey);
    }
  }
}

// 7. Check for any error messages in console
console.log("\n=== CHECKING FOR ERRORS ===");
console.log("Check the browser console for any 404 errors or failed image loads");

// 8. Test image loading manually
console.log("\n=== MANUAL IMAGE LOAD TEST ===");
const testImages = [
  '/back_to_emotions_1.jpg',
  '/back_to_emotions_2.jpg', 
  '/back_to_emotions_3.jpg',
  '/back_to_emotions_4.jpg',
  '/back_to_emotions_5.jpg'
];

testImages.forEach((src, index) => {
  const testImg = new Image();
  testImg.onload = () => console.log(`✅ ${src} loads successfully`);
  testImg.onerror = () => console.log(`❌ ${src} failed to load`);
  testImg.src = src;
});

// 9. Check if we're on the right page
console.log("\n=== PAGE VERIFICATION ===");
console.log("Current URL:", window.location.href);
console.log("Page title:", document.title);
console.log("Expected URL should contain: /Per4mer/backtoemotion");

// 10. Force refresh check
console.log("\n=== CACHE CHECK ===");
console.log("If you still see the old image, try:");
console.log("1. Hard refresh: Ctrl+F5 (Windows) or Cmd+Shift+R (Mac)");
console.log("2. Open in incognito/private mode");
console.log("3. Clear browser cache");
console.log("4. Check if you're on the right URL");

console.log("\n=== DEBUG SCRIPT COMPLETE ===");
