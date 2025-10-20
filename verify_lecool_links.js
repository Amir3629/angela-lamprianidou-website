// Console script to verify LeCool Magazine links on live website
// Run this in the browser console on https://lamprianidou.com/Per4mer/press/

console.log("=== VERIFYING LECOOL MAGAZINE LINKS ON LIVE WEBSITE ===");

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

// Check for commented out links
const allText = document.documentElement.innerHTML;
const commentedLecool = allText.match(/<!--[^>]*lecool[^>]*-->/gi);
if (commentedLecool) {
  console.log(`\n=== COMMENTED OUT LECOOL LINKS (${commentedLecool.length} found) ===`);
  commentedLecool.forEach((comment, index) => {
    console.log(`\n${index + 1}. Commented link:`);
    console.log(comment);
  });
}

// Summary
console.log(`\n=== SUMMARY ===`);
console.log(`Active LeCool links: ${lecoolLinks.length}`);
console.log(`LeCool text references: ${lecoolTexts.length}`);
console.log(`Commented LeCool links: ${commentedLecool ? commentedLecool.length : 0}`);

if (lecoolLinks.length === 0) {
  console.log("❌ NO ACTIVE LECOOL LINKS FOUND - They might be commented out or removed");
} else {
  console.log("✅ Active LeCool links found");
}