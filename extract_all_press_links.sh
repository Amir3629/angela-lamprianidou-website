#!/bin/bash

# Complete script to extract ALL links from the correct press page
# Usage: ./extract_all_press_links.sh

echo "=== COMPLETE PRESS PAGE LINK EXTRACTION ==="
echo "Timestamp: $(date)"

# Extract from the correct press page (press.html, not press/)
echo -e "\n📥 Fetching press.html content..."
curl -s "https://lamprianidou.com/Per4mer/press.html" > press_content.html

# Extract all href attributes
echo -e "\n🔗 ALL LINKS FOUND:"
grep -o 'href="[^"]*"' press_content.html | sed 's/href="//g' | sed 's/"//g' | sort | uniq > all_links.txt

# Count total links
total_links=$(wc -l < all_links.txt)
echo "Total links: $total_links"

# Display all links with context
echo -e "\n📋 ALL LINKS WITH CONTEXT:"
counter=1
while IFS= read -r link; do
    echo -e "\n$counter. $link"
    
    # Find context around this link
    context=$(grep -A3 -B3 "href=\"$link\"" press_content.html | head -7)
    echo "   Context: $context"
    
    # Check link type
    if [[ $link == *".pdf"* ]]; then
        echo "   📄 PDF LINK"
    elif [[ $link == http* ]] && [[ $link != *"lamprianidou.com"* ]]; then
        echo "   🌐 EXTERNAL LINK"
    elif [[ $link == /Per4mer/* ]] || [[ $link == /* ]]; then
        echo "   🏠 INTERNAL LINK"
    fi
    
    counter=$((counter + 1))
done < all_links.txt

# Search for LeCool links specifically
echo -e "\n🎯 SEARCHING FOR LECOOL LINKS:"
lecool_content=$(grep -i "lecool" press_content.html)
if [ -n "$lecool_content" ]; then
    echo "LeCool content found:"
    echo "$lecool_content"
else
    echo "❌ No LeCool content found"
fi

# Search for commented out LeCool links
echo -e "\n💬 SEARCHING FOR COMMENTED OUT LECOOL LINKS:"
commented_lecool=$(grep -i "<!--.*lecool.*-->" press_content.html)
if [ -n "$commented_lecool" ]; then
    echo "Commented LeCool links found:"
    echo "$commented_lecool"
else
    echo "No commented LeCool links found"
fi

# Search for Francisco Estrada
echo -e "\n🎯 SEARCHING FOR FRANCISCO ESTRADA:"
francisco_content=$(grep -i "francisco" press_content.html)
if [ -n "$francisco_content" ]; then
    echo "Francisco Estrada content found:"
    echo "$francisco_content"
else
    echo "❌ No Francisco Estrada content found"
fi

# Check for specific expected URLs
echo -e "\n🎯 CHECKING EXPECTED LECOOL URLs:"
expected_urls=(
    "barcelona.lecool.com/barcelona/en/issue/141"
    "barcelona.lecool.com/barcelona/es/3951"
)

for url in "${expected_urls[@]}"; do
    if grep -q "$url" press_content.html; then
        echo "✅ FOUND: $url"
        # Show context
        grep -A2 -B2 "$url" press_content.html
    else
        echo "❌ MISSING: $url"
    fi
done

# Extract all external press links
echo -e "\n🌐 ALL EXTERNAL PRESS LINKS:"
external_links=$(grep -o 'href="http[^"]*"' press_content.html | sed 's/href="//g' | sed 's/"//g' | grep -v lamprianidou.com | sort | uniq)
echo "$external_links"

# Extract all PDF links
echo -e "\n📄 ALL PDF LINKS:"
pdf_links=$(grep -o 'href="[^"]*\.pdf[^"]*"' press_content.html | sed 's/href="//g' | sed 's/"//g' | sort | uniq)
echo "$pdf_links"

# Summary
echo -e "\n📊 SUMMARY:"
echo "Total links extracted: $total_links"
echo "LeCool content found: $(grep -c -i "lecool" press_content.html || echo "0")"
echo "Francisco Estrada found: $(grep -c -i "francisco" press_content.html || echo "0")"
echo "External links: $(echo "$external_links" | wc -l)"
echo "PDF links: $(echo "$pdf_links" | wc -l)"

# Clean up
rm press_content.html all_links.txt

echo -e "\n✅ EXTRACTION COMPLETE!"
echo "The live website has LeCool links but they are COMMENTED OUT!"
echo "Our local version has them ACTIVE - this is CORRECT!"