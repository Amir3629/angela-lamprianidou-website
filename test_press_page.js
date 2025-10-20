// Simple test script to check if press page is working
// Run this in browser console on http://localhost:3002/press

console.log("=== TESTING PRESS PAGE ===");

// Check if page loaded
console.log("Page title:", document.title);
console.log("Page URL:", window.location.href);

// Check for any content
const bodyText = document.body.textContent;
console.log("Body text length:", bodyText.length);
console.log("Body text preview:", bodyText.substring(0, 200) + "...");

// Check for MediaGallerySeparated component
const mediaGallery = document.querySelector('[class*="media-gallery"]') || document.querySelector('[class*="gallery"]');
console.log("MediaGallery component found:", !!mediaGallery);

// Check for any additional info sections
const additionalInfo = document.querySelector('[class*="additional"]') || document.querySelector('[class*="info"]');
console.log("Additional info section found:", !!additionalInfo);

// Check for any links
const allLinks = document.querySelectorAll('a');
console.log("Total links found:", allLinks.length);

// Check for press-related content
const pressContent = bodyText.toLowerCase().includes('press') || bodyText.toLowerCase().includes('angela');
console.log("Press content found:", pressContent);

// Check for LeCool content specifically
const lecoolContent = bodyText.toLowerCase().includes('lecool') || bodyText.toLowerCase().includes('francisco');
console.log("LeCool content found:", lecoolContent);

// List all links
console.log("\n=== ALL LINKS ===");
allLinks.forEach((link, index) => {
  console.log(`${index + 1}. ${link.href} - "${link.textContent.trim()}"`);
});

console.log("\n=== TEST COMPLETE ===");