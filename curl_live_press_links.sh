#!/bin/bash

# Script to extract all links from live press page using curl
# Usage: ./curl_live_press_links.sh

echo "=== EXTRACTING ALL LINKS FROM LIVE PRESS PAGE ==="
echo "URL: https://lamprianidou.com/Per4mer/press/"
echo "Timestamp: $(date)"

# Get the page content
echo -e "\n📥 Fetching page content..."
curl -s "https://lamprianidou.com/Per4mer/press/" > live_press_page.html

# Extract all href attributes
echo -e "\n🔗 ALL LINKS FOUND:"
grep -o 'href="[^"]*"' live_press_page.html | sed 's/href="//g' | sed 's/"//g' | sort | uniq > live_links.txt

# Count total links
total_links=$(wc -l < live_links.txt)
echo "Total links: $total_links"

# Display all links with context
echo -e "\n📋 ALL LINKS WITH CONTEXT:"
counter=1
while IFS= read -r link; do
    echo -e "\n$counter. $link"
    
    # Find context around this link
    context=$(grep -A2 -B2 "href=\"$link\"" live_press_page.html | head -5)
    echo "   Context: $context"
    
    # Check if it's a PDF
    if [[ $link == *".pdf"* ]]; then
        echo "   📄 PDF LINK"
    fi
    
    # Check if it's external
    if [[ $link == http* ]] && [[ $link != *"lamprianidou.com"* ]]; then
        echo "   🌐 EXTERNAL LINK"
    fi
    
    counter=$((counter + 1))
done < live_links.txt

# Search for LeCool links specifically
echo -e "\n🎯 SEARCHING FOR LECOOL LINKS:"
lecool_links=$(grep -i "lecool" live_press_page.html)
if [ -n "$lecool_links" ]; then
    echo "LeCool content found:"
    echo "$lecool_links"
else
    echo "❌ No LeCool links found"
fi

# Search for Francisco Estrada
echo -e "\n🎯 SEARCHING FOR FRANCISCO ESTRADA:"
francisco_links=$(grep -i "francisco" live_press_page.html)
if [ -n "$francisco_links" ]; then
    echo "Francisco Estrada content found:"
    echo "$francisco_links"
else
    echo "❌ No Francisco Estrada links found"
fi

# Search for commented out links
echo -e "\n💬 SEARCHING FOR COMMENTED OUT LINKS:"
commented_links=$(grep -i "<!--.*lecool.*-->" live_press_page.html)
if [ -n "$commented_links" ]; then
    echo "Commented LeCool links found:"
    echo "$commented_links"
else
    echo "No commented LeCool links found"
fi

# Check for specific expected URLs
echo -e "\n🎯 CHECKING EXPECTED LECOOL URLs:"
expected_urls=(
    "barcelona.lecool.com/barcelona/en/issue/141"
    "barcelona.lecool.com/barcelona/es/3951"
)

for url in "${expected_urls[@]}"; do
    if grep -q "$url" live_press_page.html; then
        echo "✅ FOUND: $url"
    else
        echo "❌ MISSING: $url"
    fi
done

# Summary
echo -e "\n📊 SUMMARY:"
echo "Total links extracted: $total_links"
echo "LeCool links found: $(grep -c -i "lecool" live_press_page.html || echo "0")"
echo "Francisco Estrada found: $(grep -c -i "francisco" live_press_page.html || echo "0")"

# Clean up
rm live_press_page.html live_links.txt

echo -e "\n✅ EXTRACTION COMPLETE!"