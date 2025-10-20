// Border Layout Analysis Script
// Run this in browser console to check border positioning

console.log('🔍 BORDER LAYOUT ANALYSIS');
console.log('=========================');

// Get viewport info
const viewportWidth = window.innerWidth;
const viewportHeight = window.innerHeight;
console.log(`📱 Viewport: ${viewportWidth}x${viewportHeight}`);

// Find the main container
const mainContainer = document.querySelector('.min-h-screen') || document.querySelector('body');
if (mainContainer) {
  const containerRect = mainContainer.getBoundingClientRect();
  console.log('\n📐 MAIN CONTAINER:');
  console.log(`Width: ${Math.round(containerRect.width)}px`);
  console.log(`Left: ${Math.round(containerRect.left)}px`);
  console.log(`Right: ${Math.round(containerRect.right)}px`);
}

// Find the flex container with title and image
const flexContainer = document.querySelector('.flex.flex-col.lg\\:flex-row');
if (flexContainer) {
  const flexRect = flexContainer.getBoundingClientRect();
  console.log('\n🔲 FLEX CONTAINER:');
  console.log(`Width: ${Math.round(flexRect.width)}px`);
  console.log(`Left: ${Math.round(flexRect.left)}px`);
  console.log(`Right: ${Math.round(flexRect.right)}px`);
}

// Find the title and border
const titleElement = document.querySelector('.font-bold');
const borderElement = document.querySelector('.border-b.border-gray-300');

if (titleElement) {
  const titleRect = titleElement.getBoundingClientRect();
  console.log('\n📝 TITLE:');
  console.log(`Width: ${Math.round(titleRect.width)}px`);
  console.log(`Left: ${Math.round(titleRect.left)}px`);
  console.log(`Right: ${Math.round(titleRect.right)}px`);
}

if (borderElement) {
  const borderRect = borderElement.getBoundingClientRect();
  console.log('\n📏 BORDER:');
  console.log(`Width: ${Math.round(borderRect.width)}px`);
  console.log(`Left: ${Math.round(borderRect.left)}px`);
  console.log(`Right: ${Math.round(borderRect.right)}px`);
}

// Find the image container
const imageContainer = document.querySelector('.lg\\:w-2\\/3');
if (imageContainer) {
  const imageRect = imageContainer.getBoundingClientRect();
  console.log('\n🖼️ IMAGE CONTAINER:');
  console.log(`Width: ${Math.round(imageRect.width)}px`);
  console.log(`Left: ${Math.round(imageRect.left)}px`);
  console.log(`Right: ${Math.round(imageRect.right)}px`);
}

// Check if border spans full width
if (borderElement && flexContainer) {
  const borderRect = borderElement.getBoundingClientRect();
  const flexRect = flexContainer.getBoundingClientRect();
  
  const borderSpansFullWidth = Math.abs(borderRect.width - flexRect.width) < 5;
  console.log('\n✅ BORDER ANALYSIS:');
  console.log(`Border spans full width: ${borderSpansFullWidth}`);
  console.log(`Border width: ${Math.round(borderRect.width)}px`);
  console.log(`Container width: ${Math.round(flexRect.width)}px`);
  console.log(`Difference: ${Math.round(Math.abs(borderRect.width - flexRect.width))}px`);
}

console.log('\n💡 RECOMMENDATIONS:');
console.log('   - Border should span the full width of the flex container');
console.log('   - Border should go over both text and image areas');
console.log('   - Check if border is constrained by parent containers');

// Export function for manual use
window.borderAnalysis = function() {
  console.log('🔍 Re-running border analysis...');
  // Re-run the analysis
  const borderElement = document.querySelector('.border-b.border-gray-300');
  const flexContainer = document.querySelector('.flex.flex-col.lg\\:flex-row');
  
  if (borderElement && flexContainer) {
    const borderRect = borderElement.getBoundingClientRect();
    const flexRect = flexContainer.getBoundingClientRect();
    
    console.log(`Border width: ${Math.round(borderRect.width)}px`);
    console.log(`Container width: ${Math.round(flexRect.width)}px`);
    console.log(`Border spans full width: ${Math.abs(borderRect.width - flexRect.width) < 5}`);
  }
};

console.log('\n🔧 Available function: window.borderAnalysis()');
