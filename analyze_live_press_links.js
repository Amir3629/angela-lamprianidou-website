// Complete script to analyze ALL links on LIVE press page
// Run this in browser console on https://lamprianidou.com/Per4mer/press/

console.log("=== COMPLETE LINK ANALYSIS - LIVE PRESS PAGE ===");
console.log("URL:", window.location.href);
console.log("Timestamp:", new Date().toISOString());

// 1. Find ALL clickable links
const allLinks = Array.from(document.querySelectorAll('a'));
console.log(`\n📊 TOTAL LINKS FOUND: ${allLinks.length}`);

console.log("\n🔗 ALL CLICKABLE LINKS WITH CONTEXT:");
allLinks.forEach((link, index) => {
  console.log(`\n${index + 1}. LINK:`);
  console.log(`   URL: ${link.href}`);
  console.log(`   Text: "${link.textContent.trim()}"`);
  console.log(`   Visible: ${link.offsetParent !== null ? '✅ YES' : '❌ NO (hidden)'}`);
  console.log(`   Target: ${link.target || '_self'}`);
  console.log(`   Classes: ${link.className || 'none'}`);
  
  // Get parent context (what section it's in)
  let parentContext = '';
  let currentParent = link.parentElement;
  let level = 0;
  while (currentParent && level < 5) {
    const parentText = currentParent.textContent.trim().substring(0, 100);
    if (parentText && parentText !== link.textContent.trim()) {
      parentContext = parentText + ' | ' + parentContext;
    }
    currentParent = currentParent.parentElement;
    level++;
  }
  console.log(`   Context: "${parentContext.substring(0, 200)}..."`);
  
  // Check link type
  if (link.href.includes('.pdf')) {
    console.log(`   📄 PDF LINK`);
  } else if (link.href.startsWith('http') && !link.href.includes(window.location.hostname)) {
    console.log(`   🌐 EXTERNAL LINK`);
  } else if (link.href.includes(window.location.hostname) || link.href.startsWith('/')) {
    console.log(`   🏠 INTERNAL LINK`);
  }
});

// 2. Find all PDF links specifically
const pdfLinks = allLinks.filter(link => link.href.includes('.pdf'));
console.log(`\n📄 PDF LINKS (${pdfLinks.length} found):`);
pdfLinks.forEach((link, index) => {
  console.log(`\n${index + 1}. PDF: ${link.href}`);
  console.log(`   Text: "${link.textContent.trim()}"`);
  console.log(`   Context: ${link.parentElement.textContent.substring(0, 100)}...`);
});

// 3. Find all external links
const externalLinks = allLinks.filter(link => 
  link.href.startsWith('http') && !link.href.includes(window.location.hostname)
);
console.log(`\n🌐 EXTERNAL LINKS (${externalLinks.length} found):`);
externalLinks.forEach((link, index) => {
  console.log(`\n${index + 1}. External: ${link.href}`);
  console.log(`   Text: "${link.textContent.trim()}"`);
  console.log(`   Context: ${link.parentElement.textContent.substring(0, 100)}...`);
});

// 4. Find all internal links
const internalLinks = allLinks.filter(link => 
  link.href.includes(window.location.hostname) || link.href.startsWith('/')
);
console.log(`\n🏠 INTERNAL LINKS (${internalLinks.length} found):`);
internalLinks.forEach((link, index) => {
  console.log(`\n${index + 1}. Internal: ${link.href}`);
  console.log(`   Text: "${link.textContent.trim()}"`);
  console.log(`   Context: ${link.parentElement.textContent.substring(0, 100)}...`);
});

// 5. Search for specific LeCool links
console.log(`\n🎯 SEARCHING FOR LECOOL LINKS:`);
const lecoolLinks = allLinks.filter(link => 
  link.href.includes('lecool') || 
  link.textContent.toLowerCase().includes('lecool') ||
  link.textContent.toLowerCase().includes('francisco estrada')
);
console.log(`LeCool links found: ${lecoolLinks.length}`);
lecoolLinks.forEach((link, index) => {
  console.log(`\n${index + 1}. LeCool Link: ${link.href}`);
  console.log(`   Text: "${link.textContent.trim()}"`);
  console.log(`   Context: ${link.parentElement.textContent.substring(0, 150)}...`);
});

// 6. Find all text that looks like URLs but isn't clickable
const potentialUrls = Array.from(document.querySelectorAll('*')).filter(el => {
  const text = el.textContent.toLowerCase();
  return (
    (text.includes('barcelona.lecool.com') ||
     text.includes('lecool.com') ||
     text.includes('francisco estrada') ||
     text.includes('magazine')) &&
    !el.tagName.toLowerCase() === 'a' && 
    !el.querySelector('a')
  );
});

console.log(`\n❓ POTENTIAL MISSING LECOOL LINKS (${potentialUrls.length} found):`);
potentialUrls.forEach((element, index) => {
  console.log(`\n${index + 1}. Potential Link:`);
  console.log(`   Text: "${element.textContent.trim().substring(0, 200)}..."`);
  console.log(`   Tag: ${element.tagName}`);
  console.log(`   Full HTML: ${element.outerHTML.substring(0, 300)}...`);
});

// 7. Check for commented out links in HTML source
const htmlSource = document.documentElement.innerHTML;
const commentedLecool = htmlSource.match(/<!--[^>]*lecool[^>]*-->/gi);
if (commentedLecool) {
  console.log(`\n💬 COMMENTED OUT LECOOL LINKS (${commentedLecool.length} found):`);
  commentedLecool.forEach((comment, index) => {
    console.log(`\n${index + 1}. Commented: ${comment}`);
  });
}

// 8. Summary
console.log(`\n📋 SUMMARY:`);
console.log(`   Total Links: ${allLinks.length}`);
console.log(`   PDF Links: ${pdfLinks.length}`);
console.log(`   External Links: ${externalLinks.length}`);
console.log(`   Internal Links: ${internalLinks.length}`);
console.log(`   LeCool Links: ${lecoolLinks.length}`);
console.log(`   Potential Missing: ${potentialUrls.length}`);
console.log(`   Commented Out: ${commentedLecool ? commentedLecool.length : 0}`);

// 9. Check for specific expected URLs
const expectedUrls = [
  'barcelona.lecool.com/barcelona/en/issue/141',
  'barcelona.lecool.com/barcelona/es/3951'
];

console.log(`\n🎯 CHECKING EXPECTED LECOOL URLs:`);
expectedUrls.forEach((expectedUrl, index) => {
  const found = allLinks.some(link => link.href.includes(expectedUrl));
  console.log(`${index + 1}. ${expectedUrl}: ${found ? '✅ FOUND' : '❌ MISSING'}`);
});

console.log(`\n✅ ANALYSIS COMPLETE!`);
console.log(`Copy this output to compare with local version.`);