// Console script to debug footer on homepage
console.log("=== FOOTER DEBUG SCRIPT ===");

// Check if ConditionalFooter component exists
const footerComponents = document.querySelectorAll('[class*="footer"], [class*="Footer"]');
console.log("Footer components found:", footerComponents.length);

// Check for social media icons
const socialIcons = document.querySelectorAll('a[href*="instagram"], a[href*="facebook"], a[href*="twitter"], a[href*="linkedin"], a[href*="youtube"]');
console.log("Social media links found:", socialIcons.length);

// Check for copyright text
const copyrightText = document.querySelector('*');
const allText = document.body.innerText;
const hasCopyright = allText.includes('© 2025') || allText.includes('Angela Lamprianidou') || allText.includes('All rights reserved');
console.log("Copyright text found:", hasCopyright);

// Check for webmaster text
const hasWebmaster = allText.includes('Amir Firoozi') || allText.includes('Webmaster');
console.log("Webmaster text found:", hasWebmaster);

// Check the bottom of the page
const pageHeight = document.body.scrollHeight;
console.log("Page height:", pageHeight);
console.log("Viewport height:", window.innerHeight);

// Scroll to bottom and check
window.scrollTo(0, document.body.scrollHeight);
setTimeout(() => {
  const bottomElements = document.querySelectorAll('*');
  const visibleAtBottom = Array.from(bottomElements).filter(el => {
    const rect = el.getBoundingClientRect();
    return rect.bottom <= window.innerHeight && rect.top >= window.innerHeight - 100;
  });
  console.log("Elements visible at bottom:", visibleAtBottom.length);
  
  // Check if footer is in DOM but hidden
  const allElements = document.querySelectorAll('*');
  const footerElements = Array.from(allElements).filter(el => 
    el.className.includes('footer') || 
    el.className.includes('Footer') ||
    el.textContent.includes('©') ||
    el.textContent.includes('Amir Firoozi')
  );
  console.log("All footer-related elements:", footerElements);
  
  footerElements.forEach((el, index) => {
    console.log(`Footer element ${index}:`, {
      tagName: el.tagName,
      className: el.className,
      textContent: el.textContent.substring(0, 100),
      style: el.style.cssText,
      computedStyle: window.getComputedStyle(el).display
    });
  });
}, 1000);

// Check React components
console.log("React root:", document.getElementById('__next'));
console.log("All React components:", document.querySelectorAll('[data-reactroot], [data-react-helmet]'));

// Check for any elements with footer-related classes
const footerClasses = document.querySelectorAll('[class*="footer"], [class*="Footer"], [class*="social"], [class*="copyright"]');
console.log("Elements with footer-related classes:", footerClasses.length);
footerClasses.forEach((el, index) => {
  console.log(`Footer class element ${index}:`, {
    tagName: el.tagName,
    className: el.className,
    textContent: el.textContent.substring(0, 50)
  });
});

console.log("=== END DEBUG SCRIPT ===");
