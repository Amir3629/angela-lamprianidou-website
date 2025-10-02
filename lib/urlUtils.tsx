import React from 'react';

// Helper function to convert URLs and emails to clickable links
export const convertUrlsToLinks = (text: string | React.ReactNode) => {
  // If it's not a string, return as is
  if (typeof text !== 'string') {
    return text;
  }
  
  // Enhanced regex to catch URLs, email addresses, and PDF files, excluding trailing punctuation
  const urlRegex = /(https?:\/\/[^\s\)]+|www\.[^\s\)]+|player\.vimeo\.com[^\s\)]*|vimeo\.com[^\s\)]*|[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}|\/.*?\.pdf|\/archive\/[^\s\)]+)/g;
  const parts = text.split(urlRegex);
  
  return parts.map((part, index) => {
    if (urlRegex.test(part)) {
      let href = part;
      let displayText = part;
      
      if (part.includes('@')) {
        // It's an email address
        href = `mailto:${part}`;
      } else if (part.endsWith('.pdf')) {
        // It's a PDF file - use as is (relative path)
        href = part;
      } else if (part.startsWith('/archive/')) {
        // It's an internal archive path - use as is
        href = part;
      } else if (!part.startsWith('http')) {
        // It's a URL without protocol
        href = `https://${part}`;
      }
      
      // Create shorter display text for long URLs
      if (part.startsWith('http')) {
        try {
          const url = new URL(part);
          if (part.includes('web.archive.org')) {
            // For archive.org links, show "web.archive.org"
            displayText = 'web.archive.org';
          } else if (part.includes('schwelle-festival.com')) {
            // For Schwelle Festival, show the domain
            displayText = 'schwelle-festival.com';
          } else if (part.includes('fetedeladanse.ch')) {
            // For Fete de la danse, show the domain
            displayText = 'fetedeladanse.ch';
          } else if (part.includes('tanzraumberlin.de')) {
            // For Tanzraum Berlin, show the domain
            displayText = 'tanzraumberlin.de';
          } else if (part.includes('bpb.de')) {
            // For BPB, show the domain
            displayText = 'bpb.de';
          } else if (part.includes('wunschkollektiv.net')) {
            // For Wunschkollektiv, show the domain
            displayText = 'wunschkollektiv.net';
          } else if (part.includes('ballhausost.de')) {
            // For Ballhaus Ost, show the domain
            displayText = 'ballhausost.de';
          } else {
            // For other URLs, show just the domain
            displayText = url.hostname;
          }
        } catch (e) {
          // If URL parsing fails, keep original text
          displayText = part;
        }
      }
      
      return (
        <a
          key={index}
          href={href}
          target={part.includes('@') || part.startsWith('/archive/') ? '_self' : '_blank'}
          rel={part.includes('@') || part.startsWith('/archive/') ? '' : 'noopener noreferrer'}
          className="text-green-400 hover:text-green-300 underline"
          title={part} // Show full URL on hover
        >
          {displayText}
        </a>
      );
    }
    return part;
  });
};