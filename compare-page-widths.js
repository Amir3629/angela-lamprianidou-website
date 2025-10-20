// Page Width Comparison Script
// Run this on both your website and Jana's website to compare widths

console.log('📏 PAGE WIDTH COMPARISON SCRIPT');
console.log('=================================');

// Get viewport info
const viewportWidth = window.innerWidth;
const viewportHeight = window.innerHeight;
console.log(`📱 Viewport: ${viewportWidth}x${viewportHeight}`);

// Function to analyze container widths
function analyzeContainerWidths() {
  console.log('\n🔍 CONTAINER WIDTH ANALYSIS:');
  console.log('============================');
  
  // Find main content containers
  const mainContainers = [
    document.querySelector('.min-h-screen'),
    document.querySelector('body'),
    document.querySelector('main'),
    document.querySelector('[class*="container"]'),
    document.querySelector('.max-w-7xl'),
    document.querySelector('.max-w-6xl'),
    document.querySelector('.max-w-5xl'),
    document.querySelector('.max-w-4xl'),
    document.querySelector('.max-w-3xl'),
    document.querySelector('.max-w-2xl'),
    document.querySelector('.max-w-xl'),
    document.querySelector('.max-w-lg'),
    document.querySelector('.max-w-md'),
    document.querySelector('.max-w-sm')
  ].filter(Boolean);

  mainContainers.forEach((container, index) => {
    if (container) {
      const rect = container.getBoundingClientRect();
      const style = window.getComputedStyle(container);
      const classes = container.className;
      
      console.log(`\nContainer ${index + 1}:`);
      console.log(`  Classes: ${classes}`);
      console.log(`  Width: ${Math.round(rect.width)}px`);
      console.log(`  Max Width: ${style.maxWidth}`);
      console.log(`  Padding Left: ${style.paddingLeft}`);
      console.log(`  Padding Right: ${style.paddingRight}`);
      console.log(`  Margin Left: ${style.marginLeft}`);
      console.log(`  Margin Right: ${style.marginRight}`);
      console.log(`  Left: ${Math.round(rect.left)}px`);
      console.log(`  Right: ${Math.round(rect.right)}px`);
      
      // Calculate side gaps
      const leftGap = rect.left;
      const rightGap = viewportWidth - rect.right;
      const totalGaps = leftGap + rightGap;
      const contentWidth = rect.width;
      const contentPercentage = (contentWidth / viewportWidth) * 100;
      const gapPercentage = (totalGaps / viewportWidth) * 100;
      
      console.log(`  📊 Content Width: ${Math.round(contentPercentage)}% of viewport`);
      console.log(`  📊 Side Gaps: ${Math.round(gapPercentage)}% of viewport`);
      console.log(`  📊 Left Gap: ${Math.round(leftGap)}px (${Math.round((leftGap/viewportWidth)*100)}%)`);
      console.log(`  📊 Right Gap: ${Math.round(rightGap)}px (${Math.round((rightGap/viewportWidth)*100)}%)`);
    }
  });
}

// Function to analyze text and image columns
function analyzeColumns() {
  console.log('\n📝 COLUMN ANALYSIS:');
  console.log('===================');
  
  // Find flex containers
  const flexContainers = document.querySelectorAll('.flex, [class*="flex"]');
  flexContainers.forEach((container, index) => {
    const rect = container.getBoundingClientRect();
    const style = window.getComputedStyle(container);
    const classes = container.className;
    
    if (rect.width > 100 && rect.height > 50) { // Only show significant containers
      console.log(`\nFlex Container ${index + 1}:`);
      console.log(`  Classes: ${classes}`);
      console.log(`  Width: ${Math.round(rect.width)}px`);
      console.log(`  Height: ${Math.round(rect.height)}px`);
      console.log(`  Gap: ${style.gap}`);
      console.log(`  Flex Direction: ${style.flexDirection}`);
      
      // Find child columns
      const children = container.children;
      Array.from(children).forEach((child, childIndex) => {
        const childRect = child.getBoundingClientRect();
        const childStyle = window.getComputedStyle(child);
        const childClasses = child.className;
        
        if (childRect.width > 50) {
          console.log(`    Child ${childIndex + 1}:`);
          console.log(`      Classes: ${childClasses}`);
          console.log(`      Width: ${Math.round(childRect.width)}px`);
          console.log(`      Flex: ${childStyle.flex}`);
          console.log(`      Width %: ${Math.round((childRect.width/rect.width)*100)}%`);
        }
      });
    }
  });
}

// Function to analyze text content width
function analyzeTextContent() {
  console.log('\n📄 TEXT CONTENT ANALYSIS:');
  console.log('=========================');
  
  // Find text elements
  const textElements = document.querySelectorAll('p, div[class*="text"], div[class*="description"], .website-text');
  textElements.forEach((element, index) => {
    const rect = element.getBoundingClientRect();
    const style = window.getComputedStyle(element);
    const classes = element.className;
    
    if (rect.width > 100 && rect.height > 20) {
      console.log(`\nText Element ${index + 1}:`);
      console.log(`  Classes: ${classes}`);
      console.log(`  Width: ${Math.round(rect.width)}px`);
      console.log(`  Height: ${Math.round(rect.height)}px`);
      console.log(`  Font Size: ${style.fontSize}`);
      console.log(`  Line Height: ${style.lineHeight}`);
      console.log(`  Max Width: ${style.maxWidth}`);
    }
  });
}

// Function to analyze images
function analyzeImages() {
  console.log('\n🖼️ IMAGE ANALYSIS:');
  console.log('==================');
  
  const images = document.querySelectorAll('img');
  console.log(`Images found: ${images.length}`);
  
  images.forEach((img, index) => {
    const rect = img.getBoundingClientRect();
    const style = window.getComputedStyle(img);
    
    if (rect.width > 50) {
      console.log(`\nImage ${index + 1}:`);
      console.log(`  Size: ${Math.round(rect.width)}x${Math.round(rect.height)}px`);
      console.log(`  Object Fit: ${style.objectFit}`);
      console.log(`  Border: ${style.border}`);
      console.log(`  Classes: ${img.className}`);
    }
  });
}

// Function to get responsive breakpoint info
function getResponsiveInfo() {
  console.log('\n📱 RESPONSIVE INFO:');
  console.log('===================');
  
  const breakpoints = [
    { name: 'Mobile', width: 375 },
    { name: 'Tablet', width: 768 },
    { name: 'Desktop', width: 1024 },
    { name: 'Large Desktop', width: 1440 }
  ];
  
  let closestBreakpoint = breakpoints[0];
  let smallestDiff = Math.abs(viewportWidth - breakpoints[0].width);
  
  breakpoints.forEach(bp => {
    const diff = Math.abs(viewportWidth - bp.width);
    if (diff < smallestDiff) {
      smallestDiff = diff;
      closestBreakpoint = bp;
    }
  });
  
  console.log(`Current Width: ${viewportWidth}px`);
  console.log(`Closest Breakpoint: ${closestBreakpoint.name} (${closestBreakpoint.width}px)`);
  
  // Check for responsive classes
  const responsiveElements = document.querySelectorAll('[class*="sm:"], [class*="md:"], [class*="lg:"], [class*="xl:"]');
  console.log(`Elements with responsive classes: ${responsiveElements.length}`);
}

// Main analysis function
function runFullAnalysis() {
  console.log('🚀 Starting comprehensive width analysis...');
  
  analyzeContainerWidths();
  analyzeColumns();
  analyzeTextContent();
  analyzeImages();
  getResponsiveInfo();
  
  console.log('\n✅ ANALYSIS COMPLETE!');
  console.log('====================');
  console.log('💡 Key metrics to compare:');
  console.log('   - Content width percentage of viewport');
  console.log('   - Side gap percentages');
  console.log('   - Column proportions');
  console.log('   - Text content widths');
  console.log('   - Image sizes and positioning');
  
  console.log('\n📋 INSTRUCTIONS:');
  console.log('1. Run this script on your website');
  console.log('2. Copy the results');
  console.log('3. Run this script on Jana\'s website');
  console.log('4. Compare the results to see differences');
  console.log('5. Adjust your website to match Jana\'s tighter layout');
}

// Run the analysis
runFullAnalysis();

// Export functions for manual use
window.widthAnalysis = {
  analyzeContainerWidths,
  analyzeColumns,
  analyzeTextContent,
  analyzeImages,
  getResponsiveInfo,
  runFullAnalysis
};

console.log('\n🔧 Available functions:');
console.log('  - window.widthAnalysis.analyzeContainerWidths()');
console.log('  - window.widthAnalysis.analyzeColumns()');
console.log('  - window.widthAnalysis.analyzeTextContent()');
console.log('  - window.widthAnalysis.analyzeImages()');
console.log('  - window.widthAnalysis.getResponsiveInfo()');
console.log('  - window.widthAnalysis.runFullAnalysis()');
