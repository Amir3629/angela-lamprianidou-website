// Bio Page Font Debug Script
// Run this in the browser console on the Bio page

console.log("=== BIO PAGE FONT DEBUG SCRIPT ===");

// 1. Find all elements with website-text class
const websiteTextElements = document.querySelectorAll('.website-text');
console.log(`Found ${websiteTextElements.length} elements with website-text class`);

// 2. Check each element's computed font-size
websiteTextElements.forEach((element, index) => {
  const computedStyle = window.getComputedStyle(element);
  const fontSize = computedStyle.fontSize;
  const fontFamily = computedStyle.fontFamily;
  const color = computedStyle.color;
  const letterSpacing = computedStyle.letterSpacing;
  const lineHeight = computedStyle.lineHeight;
  
  console.log(`\n--- Element ${index + 1} ---`);
  console.log(`Tag: ${element.tagName}`);
  console.log(`Classes: ${element.className}`);
  console.log(`Inline style: ${element.style.cssText}`);
  console.log(`Computed font-size: ${fontSize}`);
  console.log(`Computed font-family: ${fontFamily}`);
  console.log(`Computed color: ${color}`);
  console.log(`Computed letter-spacing: ${letterSpacing}`);
  console.log(`Computed line-height: ${lineHeight}`);
  console.log(`Element text preview: "${element.textContent.substring(0, 50)}..."`);
});

// 3. Check parent containers that might affect font size
console.log("\n=== PARENT CONTAINER ANALYSIS ===");
websiteTextElements.forEach((element, index) => {
  let parent = element.parentElement;
  let level = 1;
  
  console.log(`\n--- Element ${index + 1} Parent Chain ---`);
  while (parent && level <= 5) {
    const computedStyle = window.getComputedStyle(parent);
    console.log(`Level ${level} - ${parent.tagName}: ${parent.className}`);
    console.log(`  Font-size: ${computedStyle.fontSize}`);
    console.log(`  Font-family: ${computedStyle.fontFamily}`);
    
    if (parent.classList.contains('media-screen-small')) {
      console.log(`  *** FOUND media-screen-small container! ***`);
    }
    
    parent = parent.parentElement;
    level++;
  }
});

// 4. Check for any CSS rules that might be overriding
console.log("\n=== CSS RULE ANALYSIS ===");
websiteTextElements.forEach((element, index) => {
  console.log(`\n--- Element ${index + 1} CSS Rules ---`);
  
  // Get all CSS rules affecting this element
  const rules = [];
  for (let sheet of document.styleSheets) {
    try {
      for (let rule of sheet.cssRules) {
        if (rule.style && element.matches(rule.selectorText)) {
          if (rule.style.fontSize) {
            rules.push(`${rule.selectorText}: font-size: ${rule.style.fontSize}`);
          }
        }
      }
    } catch (e) {
      // Skip cross-origin stylesheets
    }
  }
  
  if (rules.length > 0) {
    console.log("Matching CSS rules:");
    rules.forEach(rule => console.log(`  ${rule}`));
  } else {
    console.log("No matching CSS rules found");
  }
});

// 5. Compare with a working page (Ballet page)
console.log("\n=== COMPARISON WITH BALLET PAGE ===");
console.log("Navigate to /Per4mer/BalletBloody and run this part of the script:");

const balletScript = `
// Run this on Ballet page for comparison
const balletElements = document.querySelectorAll('.website-text');
console.log("BALLET PAGE COMPARISON:");
balletElements.forEach((element, index) => {
  const computedStyle = window.getComputedStyle(element);
  console.log(\`Ballet Element \${index + 1}: font-size = \${computedStyle.fontSize}\`);
});
`;

console.log(balletScript);

// 6. Force apply styles to test
console.log("\n=== FORCE STYLE TEST ===");
websiteTextElements.forEach((element, index) => {
  console.log(`\nTesting element ${index + 1}...`);
  
  // Try different font sizes
  const testSizes = ['2em', '24px', '2rem'];
  
  testSizes.forEach(size => {
    element.style.setProperty('font-size', size, 'important');
    const computed = window.getComputedStyle(element).fontSize;
    console.log(`  Set to ${size} -> Computed: ${computed}`);
  });
  
  // Reset to original
  element.style.removeProperty('font-size');
});

console.log("\n=== DEBUG SCRIPT COMPLETE ===");
console.log("If you still see small fonts, the issue might be:");
console.log("1. Browser zoom level");
console.log("2. CSS specificity conflicts");
console.log("3. Parent container font-size inheritance");
console.log("4. Browser caching issues");
