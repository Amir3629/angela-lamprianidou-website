// Console script to verify LeCool Magazine links on LOCAL website
// Run this in the browser console on http://localhost:3002/press

console.log("=== VERIFYING LECOOL MAGAZINE LINKS ON LOCAL WEBSITE ===");

// Find all links containing "lecool"
const lecoolLinks = Array.from(document.querySelectorAll('a[href*="lecool"]'));
console.log(`Found ${lecoolLinks.length} LeCool links:`);

lecoolLinks.forEach((link, index) => {
  console.log(`\n${index + 1}. LeCool Link:`);
  console.log(`   URL: ${link.href}`);
  console.log(`   Text: "${link.textContent.trim()}"`);
  console.log(`   Visible: ${link.offsetParent !== null ? 'YES' : 'NO'}`);
  console.log(`   Parent context:`, link.parentElement.textContent.substring(0, 100) + '...');
});

// Find all text containing "LeCool" or "Francisco Estrada"
const lecoolTexts = Array.from(document.querySelectorAll('*')).filter(el => 
  el.textContent && (
    el.textContent.includes('LeCool') || 
    el.textContent.includes('Francisco Estrada') ||
    el.textContent.includes('lecool')
  )
);

console.log(`\n=== LECOOL TEXT REFERENCES (${lecoolTexts.length} found) ===`);
lecoolTexts.forEach((el, index) => {
  console.log(`\n${index + 1}. Text element:`);
  console.log(`   Tag: ${el.tagName}`);
  console.log(`   Text: "${el.textContent.trim().substring(0, 150)}..."`);
  console.log(`   Has href: ${el.href ? 'YES' : 'NO'}`);
  if (el.href) {
    console.log(`   URL: ${el.href}`);
  }
});

// Check for the specific LeCool section
const lecoolSection = Array.from(document.querySelectorAll('*')).find(el => 
  el.textContent && el.textContent.includes('LeCool Magazine:')
);

if (lecoolSection) {
  console.log(`\n=== LECOOL SECTION FOUND ===`);
  console.log(`Section text: "${lecoolSection.textContent.substring(0, 200)}..."`);
  
  // Find all links within this section
  const sectionLinks = lecoolSection.querySelectorAll('a');
  console.log(`Links in LeCool section: ${sectionLinks.length}`);
  sectionLinks.forEach((link, index) => {
    console.log(`  ${index + 1}. ${link.href} - "${link.textContent.trim()}"`);
  });
}

// Summary
console.log(`\n=== SUMMARY ===`);
console.log(`Active LeCool links: ${lecoolLinks.length}`);
console.log(`LeCool text references: ${lecoolTexts.length}`);

if (lecoolLinks.length >= 2) {
  console.log("✅ LeCool links found - should have 2 links");
} else {
  console.log("❌ Missing LeCool links - expected 2 links");
}

// Expected URLs
const expectedUrls = [
  'http://barcelona.lecool.com/barcelona/en/issue/141',
  'http://barcelona.lecool.com/barcelona/es/3951'
];

console.log(`\n=== CHECKING EXPECTED URLs ===`);
expectedUrls.forEach((expectedUrl, index) => {
  const found = lecoolLinks.some(link => link.href === expectedUrl);
  console.log(`${index + 1}. ${expectedUrl}: ${found ? '✅ FOUND' : '❌ MISSING'}`);
});