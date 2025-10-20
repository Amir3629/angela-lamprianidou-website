// Complete script to find ALL links and clickable text on press page
// Run this in browser console on any press page (live or local)

console.log("=== COMPLETE LINK ANALYSIS FOR PRESS PAGE ===");

// 1. Find ALL clickable links
const allLinks = Array.from(document.querySelectorAll('a'));
console.log(`\n📊 TOTAL LINKS FOUND: ${allLinks.length}`);

console.log("\n🔗 ALL CLICKABLE LINKS:");
allLinks.forEach((link, index) => {
  console.log(`\n${index + 1}. LINK:`);
  console.log(`   URL: ${link.href}`);
  console.log(`   Text: "${link.textContent.trim()}"`);
  console.log(`   Visible: ${link.offsetParent !== null ? '✅ YES' : '❌ NO (hidden)'}`);
  console.log(`   Target: ${link.target || '_self'}`);
  console.log(`   Classes: ${link.className || 'none'}`);
  
  // Check if it's a PDF link
  if (link.href.includes('.pdf')) {
    console.log(`   📄 PDF LINK`);
  }
  
  // Check if it's external
  if (link.href.startsWith('http') && !link.href.includes(window.location.hostname)) {
    console.log(`   🌐 EXTERNAL LINK`);
  }
  
  // Get parent context
  const parentText = link.parentElement ? link.parentElement.textContent.trim().substring(0, 100) : '';
  console.log(`   Context: "${parentText}..."`);
});

// 2. Find all PDF links specifically
const pdfLinks = allLinks.filter(link => link.href.includes('.pdf'));
console.log(`\n📄 PDF LINKS (${pdfLinks.length} found):`);
pdfLinks.forEach((link, index) => {
  console.log(`\n${index + 1}. PDF: ${link.href}`);
  console.log(`   Text: "${link.textContent.trim()}"`);
});

// 3. Find all external links
const externalLinks = allLinks.filter(link => 
  link.href.startsWith('http') && !link.href.includes(window.location.hostname)
);
console.log(`\n🌐 EXTERNAL LINKS (${externalLinks.length} found):`);
externalLinks.forEach((link, index) => {
  console.log(`\n${index + 1}. External: ${link.href}`);
  console.log(`   Text: "${link.textContent.trim()}"`);
});

// 4. Find all internal links
const internalLinks = allLinks.filter(link => 
  link.href.includes(window.location.hostname) || link.href.startsWith('/')
);
console.log(`\n🏠 INTERNAL LINKS (${internalLinks.length} found):`);
internalLinks.forEach((link, index) => {
  console.log(`\n${index + 1}. Internal: ${link.href}`);
  console.log(`   Text: "${link.textContent.trim()}"`);
});

// 5. Find all clickable elements (buttons, etc.)
const clickableElements = Array.from(document.querySelectorAll('button, [onclick], [role="button"]'));
console.log(`\n🔘 OTHER CLICKABLE ELEMENTS (${clickableElements.length} found):`);
clickableElements.forEach((element, index) => {
  console.log(`\n${index + 1}. Clickable Element:`);
  console.log(`   Tag: ${element.tagName}`);
  console.log(`   Text: "${element.textContent.trim()}"`);
  console.log(`   Classes: ${element.className || 'none'}`);
  if (element.onclick) {
    console.log(`   Has onclick: YES`);
  }
});

// 6. Find all text that looks like it should be clickable but isn't
const potentialLinks = Array.from(document.querySelectorAll('*')).filter(el => {
  const text = el.textContent.toLowerCase();
  return (
    text.includes('www.') || 
    text.includes('http') || 
    text.includes('.com') || 
    text.includes('.de') || 
    text.includes('.gr') || 
    text.includes('.cz') || 
    text.includes('.es') ||
    text.includes('download') ||
    text.includes('pdf')
  ) && !el.tagName.toLowerCase() === 'a' && !el.querySelector('a');
});

console.log(`\n❓ POTENTIAL MISSING LINKS (${potentialLinks.length} found):`);
potentialLinks.forEach((element, index) => {
  console.log(`\n${index + 1}. Potential Link:`);
  console.log(`   Text: "${element.textContent.trim().substring(0, 100)}..."`);
  console.log(`   Tag: ${element.tagName}`);
});

// 7. Summary by category
console.log(`\n📋 SUMMARY:`);
console.log(`   Total Links: ${allLinks.length}`);
console.log(`   PDF Links: ${pdfLinks.length}`);
console.log(`   External Links: ${externalLinks.length}`);
console.log(`   Internal Links: ${internalLinks.length}`);
console.log(`   Other Clickable: ${clickableElements.length}`);
console.log(`   Potential Missing: ${potentialLinks.length}`);

// 8. Check for specific known links
const knownLinks = [
  'barcelona.lecool.com',
  'rozhlas.cz',
  'tanecnizona.cz',
  'ceskatelevize.cz',
  'fuga.es',
  'tea-tron.com',
  'nosolojazz.contrabanda.org',
  'freitag.de',
  'thehiddenpeople.com',
  'ms.stubnitz.com',
  'int.ert.gr',
  'popaganda.gr',
  'ladylike.gr',
  'berliner-woche.de',
  'berlin.de',
  'tagesspiegel.de',
  'debop.gr',
  'e-pieria.gr',
  'olympospress.gr',
  'ballhausost.de',
  'kink.cz'
];

console.log(`\n🎯 KNOWN PRESS LINKS CHECK:`);
knownLinks.forEach(domain => {
  const found = allLinks.some(link => link.href.includes(domain));
  console.log(`   ${domain}: ${found ? '✅ FOUND' : '❌ MISSING'}`);
});

console.log(`\n✅ ANALYSIS COMPLETE!`);
console.log(`Copy this output and compare with the other website.`);