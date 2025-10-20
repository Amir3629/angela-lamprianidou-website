import Link from 'next/link';
import Image from 'next/image';
import { useEffect, useRef } from 'react';

interface GalleryCardProps {
  title: string;
  date?: string;
  image: string;
  alt: string;
  href: string;
  onClick?: () => void;
  tags?: string[];
  height?: 'short' | 'medium' | 'tall';
}

export default function GalleryCard({ 
  title, 
  date, 
  image, 
  alt, 
  href, 
  onClick,
  tags = [],
  height = 'medium'
}: GalleryCardProps) {
  const titleAreaRef = useRef<HTMLDivElement>(null);

  const handleClick = () => {
    if (onClick) {
      onClick();
    }
  };

  // Force white background and add spaces after component mounts
  useEffect(() => {
    const applyStyles = () => {
      if (titleAreaRef.current) {
        titleAreaRef.current.style.setProperty('background-color', 'white', 'important');
        titleAreaRef.current.style.setProperty('color', 'black', 'important');
        titleAreaRef.current.style.setProperty('height', '60px', 'important');
        titleAreaRef.current.style.setProperty('padding', '20px 20px 20px 30px', 'important');
        titleAreaRef.current.style.setProperty('display', 'flex', 'important');
        titleAreaRef.current.style.setProperty('align-items', 'center', 'important');
        
        // Force all child elements to be black
        const allChildren = titleAreaRef.current.querySelectorAll('*');
        allChildren.forEach(child => {
          (child as HTMLElement).style.setProperty('color', 'black', 'important');
        });
        
        // Add a small gap to the title using CSS
        const titleSpan = titleAreaRef.current.querySelector('span');
        if (titleSpan) {
          titleSpan.style.setProperty('padding-right', '3px', 'important');
          titleSpan.style.setProperty('margin-left', '-10px', 'important');
        }
      }
    };

    // Apply immediately
    applyStyles();
    
    // Apply again after a short delay
    setTimeout(applyStyles, 100);
    setTimeout(applyStyles, 500);
    setTimeout(applyStyles, 1000);
  }, [title]);

  const titleElement = (
    <div 
      className="item item-showcase"
        style={{
          width: '228px', // Proper width for 5 columns (1200px - 60px gaps) / 5
          maxWidth: '228px', // Proper width for 5 columns (1200px - 60px gaps) / 5
          border: '1px solid #000000',
          margin: 0,
          padding: 0,
          display: 'block',
          float: 'left',
          boxSizing: 'border-box'
        }}
    >
      <div className="inner item-inner clearfix">
        {/* Item main - Title and tags */}
        <div 
          ref={titleAreaRef}
          className="item-main clearfix white-title-area"
            style={{
              backgroundColor: 'white',
              padding: '20px 20px 20px 30px',
              borderBottom: '1px solid #000000',
              color: 'black',
              height: '60px',
              display: 'flex',
              alignItems: 'center'
            }}
        >
          {/* Item header */}
          <div className="header item-header clearfix">
            <div className="item-title">
              <h2>
                <span 
                  className="item-link" 
                  title={title}
                    style={{
                      color: '#000000',
                      textDecoration: 'none',
                      fontSize: '20px',
                      fontWeight: 'normal',
                      fontStyle: 'normal',
                      fontVariant: 'normal',
                      fontStretch: 'normal',
                      textTransform: 'none',
                      textAlign: 'start',
                      textIndent: '0px',
                      display: 'block',
                      width: '100%',
                      fontFamily: '"Domestic Manners", serif, arial, helvetica'
                    }}
                  >
                    {title}
                  </span>
              </h2>
            </div>
          </div>
          
        </div>
        
        {/* Item Image */}
        <div className="item-image">
          <Image
            src={image}
            alt={alt}
            width={600}
            height={500}
            className="w-full h-auto object-cover"
            style={{
              margin: 0,
              padding: 0,
              border: 'none',
              display: 'block'
            }}
          />
        </div>
      </div>
    </div>
  );

  if (href && href !== "#") {
    if (href.startsWith('http')) {
      return (
        <a href={href} target="_blank" rel="noopener noreferrer" className="cursor-pointer" onClick={onClick ? handleClick : undefined}>
          {titleElement}
        </a>
      );
    } else {
      // For Next.js Link, we need to handle onClick differently
      return (
        <div className="cursor-pointer" onClick={onClick ? handleClick : undefined}>
          <Link href={href} className="block">
            {titleElement}
          </Link>
        </div>
      );
    }
  } else {
    return (
      <div className="cursor-pointer" onClick={onClick ? handleClick : undefined}>
        {titleElement}
      </div>
    );
  }
}