// Debug script for choreographer page layout issues
// Copy and paste this entire script into the browser console

console.log("=== CHOREOGRAPHER PAGE LAYOUT DEBUG ===");

// 1. Check page dimensions and scroll position
console.log("1. PAGE DIMENSIONS:");
console.log("- Window height:", window.innerHeight);
console.log("- Window width:", window.innerWidth);
console.log("- Document height:", document.documentElement.scrollHeight);
console.log("- Scroll position:", window.scrollY);

// 2. Find main content container
const mainContent = document.querySelector('.homepage-links');
if (mainContent) {
  console.log("2. MAIN CONTENT CONTAINER:");
  console.log("- Element:", mainContent);
  console.log("- Computed height:", window.getComputedStyle(mainContent).height);
  console.log("- Computed min-height:", window.getComputedStyle(mainContent).minHeight);
  console.log("- Computed padding-bottom:", window.getComputedStyle(mainContent).paddingBottom);
  console.log("- Offset height:", mainContent.offsetHeight);
  console.log("- Scroll height:", mainContent.scrollHeight);
  console.log("- Position:", window.getComputedStyle(mainContent).position);
  console.log("- Top:", mainContent.offsetTop);
} else {
  console.log("2. MAIN CONTENT CONTAINER: NOT FOUND!");
}

// 3. Check all sliding sections
const slidingSections = document.querySelectorAll('[class*="transition-all"]');
console.log("3. SLIDING SECTIONS:");
slidingSections.forEach((section, index) => {
  console.log(`Section ${index + 1}:`);
  console.log("- Element:", section);
  console.log("- Classes:", section.className);
  console.log("- Computed position:", window.getComputedStyle(section).position);
  console.log("- Computed display:", window.getComputedStyle(section).display);
  console.log("- Computed opacity:", window.getComputedStyle(section).opacity);
  console.log("- Computed transform:", window.getComputedStyle(section).transform);
  console.log("- Computed pointer-events:", window.getComputedStyle(section).pointerEvents);
  console.log("- Offset height:", section.offsetHeight);
  console.log("- Scroll height:", section.scrollHeight);
});

// 4. Check footer
const footer = document.querySelector('footer');
if (footer) {
  console.log("4. FOOTER:");
  console.log("- Element:", footer);
  console.log("- Computed height:", window.getComputedStyle(footer).height);
  console.log("- Computed padding:", window.getComputedStyle(footer).padding);
  console.log("- Computed margin:", window.getComputedStyle(footer).margin);
  console.log("- Offset height:", footer.offsetHeight);
  console.log("- Offset top:", footer.offsetTop);
  console.log("- Background color:", window.getComputedStyle(footer).backgroundColor);
} else {
  console.log("4. FOOTER: NOT FOUND!");
}

// 5. Check body and html
console.log("5. BODY & HTML:");
console.log("- Body height:", window.getComputedStyle(document.body).height);
console.log("- Body min-height:", window.getComputedStyle(document.body).minHeight);
console.log("- HTML height:", window.getComputedStyle(document.documentElement).height);
console.log("- HTML min-height:", window.getComputedStyle(document.documentElement).minHeight);

// 6. Check for any elements with large heights
console.log("6. LARGE ELEMENTS CHECK:");
const allElements = document.querySelectorAll('*');
const largeElements = [];
allElements.forEach(el => {
  const rect = el.getBoundingClientRect();
  const computedStyle = window.getComputedStyle(el);
  if (rect.height > 500 || parseInt(computedStyle.height) > 500 || parseInt(computedStyle.minHeight) > 500) {
    largeElements.push({
      element: el,
      tagName: el.tagName,
      className: el.className,
      height: rect.height,
      computedHeight: computedStyle.height,
      minHeight: computedStyle.minHeight,
      backgroundColor: computedStyle.backgroundColor
    });
  }
});

if (largeElements.length > 0) {
  console.log("Found large elements:");
  largeElements.forEach(el => {
    console.log(`- ${el.tagName} (${el.className}): height=${el.height}, computed=${el.computedHeight}, min-height=${el.minHeight}, bg=${el.backgroundColor}`);
  });
} else {
  console.log("No large elements found");
}

// 7. Check current view state
console.log("7. CURRENT VIEW STATE:");
const currentSection = document.querySelector('.opacity-100');
if (currentSection) {
  console.log("- Active section:", currentSection);
  console.log("- Active section classes:", currentSection.className);
} else {
  console.log("- No active section found");
}

// 8. Check for any absolutely positioned elements
console.log("8. ABSOLUTELY POSITIONED ELEMENTS:");
const absoluteElements = [];
allElements.forEach(el => {
  const computedStyle = window.getComputedStyle(el);
  if (computedStyle.position === 'absolute') {
    absoluteElements.push({
      element: el,
      tagName: el.tagName,
      className: el.className,
      top: computedStyle.top,
      left: computedStyle.left,
      height: computedStyle.height,
      width: computedStyle.width
    });
  }
});

if (absoluteElements.length > 0) {
  console.log("Found absolutely positioned elements:");
  absoluteElements.forEach(el => {
    console.log(`- ${el.tagName} (${el.className}): top=${el.top}, left=${el.left}, height=${el.height}, width=${el.width}`);
  });
} else {
  console.log("No absolutely positioned elements found");
}

// 9. Scroll to top and check again
console.log("9. SCROLLING TO TOP AND CHECKING AGAIN:");
window.scrollTo(0, 0);
setTimeout(() => {
  console.log("- After scroll to top - Document height:", document.documentElement.scrollHeight);
  console.log("- After scroll to top - Window height:", window.innerHeight);
  console.log("- After scroll to top - Footer offset top:", footer ? footer.offsetTop : 'No footer');
}, 100);

console.log("=== END DEBUG ===");