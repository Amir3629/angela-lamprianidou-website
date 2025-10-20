// Debug script for navigation buttons - run this in browser console
console.log('🔍 DEBUGGING NAVIGATION BUTTONS');
console.log('================================');

// Find all navigation buttons
const navButtons = document.querySelectorAll('button');
const arrowButtons = Array.from(navButtons).filter(btn => 
  btn.textContent.includes('‹') || btn.textContent.includes('›')
);

console.log(`Found ${arrowButtons.length} navigation arrow buttons:`);

arrowButtons.forEach((button, index) => {
  console.log(`\n--- Button ${index + 1} ---`);
  console.log('Text content:', button.textContent.trim());
  console.log('Classes:', button.className);
  console.log('Inline styles:', button.style.cssText);
  
  // Get computed styles
  const computedStyle = window.getComputedStyle(button);
  console.log('Computed styles:');
  console.log('  - color:', computedStyle.color);
  console.log('  - font-size:', computedStyle.fontSize);
  console.log('  - font-weight:', computedStyle.fontWeight);
  console.log('  - line-height:', computedStyle.lineHeight);
  console.log('  - text-shadow:', computedStyle.textShadow);
  console.log('  - background-color:', computedStyle.backgroundColor);
  console.log('  - border:', computedStyle.border);
  
  // Check parent elements
  console.log('Parent elements:');
  let parent = button.parentElement;
  let level = 0;
  while (parent && level < 5) {
    console.log(`  Level ${level}:`, parent.tagName, parent.className);
    parent = parent.parentElement;
    level++;
  }
  
  // Check for any CSS rules affecting this button
  console.log('CSS rules affecting this button:');
  const rules = [];
  for (let sheet of document.styleSheets) {
    try {
      for (let rule of sheet.cssRules) {
        if (rule.style && button.matches(rule.selectorText)) {
          rules.push({
            selector: rule.selectorText,
            color: rule.style.color,
            fontSize: rule.style.fontSize,
            fontWeight: rule.style.fontWeight
          });
        }
      }
    } catch (e) {
      // Skip cross-origin stylesheets
    }
  }
  console.log('  Matching CSS rules:', rules);
});

// Check for any global CSS overrides
console.log('\n--- GLOBAL CSS CHECK ---');
const globalStyles = document.querySelectorAll('style, link[rel="stylesheet"]');
console.log(`Found ${globalStyles.length} style elements`);

// Check if our CSS is loaded
const styleSheets = Array.from(document.styleSheets);
const ourCSS = styleSheets.find(sheet => 
  sheet.href && sheet.href.includes('globals.css')
);
console.log('Our globals.css loaded:', !!ourCSS);

if (ourCSS) {
  console.log('Checking for our CSS rules...');
  try {
    const rules = Array.from(ourCSS.cssRules);
    const navRules = rules.filter(rule => 
      rule.selectorText && (
        rule.selectorText.includes('button') ||
        rule.selectorText.includes('left-12') ||
        rule.selectorText.includes('right-12')
      )
    );
    console.log(`Found ${navRules.length} navigation-related CSS rules:`);
    navRules.forEach(rule => {
      console.log(`  - ${rule.selectorText}: color=${rule.style.color}, fontSize=${rule.style.fontSize}`);
    });
  } catch (e) {
    console.log('Could not access CSS rules (cross-origin):', e.message);
  }
}

// Check for any JavaScript that might be modifying styles
console.log('\n--- JAVASCRIPT STYLE MODIFICATIONS ---');
const styleModifications = [];
arrowButtons.forEach(button => {
  // Check if there are any event listeners that modify styles
  const events = ['mouseenter', 'mouseleave', 'click', 'hover'];
  events.forEach(event => {
    const listeners = getEventListeners ? getEventListeners(button)[event] : null;
    if (listeners) {
      listeners.forEach(listener => {
        console.log(`Event listener on ${event}:`, listener.listener.toString());
      });
    }
  });
});

console.log('\n🔍 DEBUG COMPLETE - Copy this output and share it!');
