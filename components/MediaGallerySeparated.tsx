'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { convertUrlsToLinks } from '../lib/urlUtils';

interface MediaItem {
  src: string;
  alt: string;
  type: 'image' | 'video';
  title?: string;
  caption?: string;
  credit?: string;
}

interface MediaGallerySeparatedProps {
  mediaItems: MediaItem[];
  galleryItems?: MediaItem[];
  title: string | React.ReactNode;
  description?: string;
  additionalInfo?: string | React.ReactNode;
  photographer?: string;
  className?: string;
  imageSize?: 'small' | 'medium' | 'large' | 'xlarge';
  textColor?: 'white' | 'black';
  showGalleryLink?: boolean;
  preserveBackground?: boolean;
  isHomepage?: boolean;
  showFullBio?: boolean;
  setShowFullBio?: (show: boolean) => void;
}

export default function MediaGallerySeparated({
  mediaItems,
  galleryItems = [],
  title,
  description,
  additionalInfo,
  photographer,
  className = "",
  imageSize = 'medium',
  textColor = 'white',
  showGalleryLink = false,
  preserveBackground = false,
  isHomepage = false,
  showFullBio = false,
  setShowFullBio
}: MediaGallerySeparatedProps) {
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [selectedVideoIndex, setSelectedVideoIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isChanging, setIsChanging] = useState(false);
  const [isVideoChanging, setIsVideoChanging] = useState(false);
  const [isModalClosing, setIsModalClosing] = useState(false);
  const [isModalOpening, setIsModalOpening] = useState(false);
  const [isModalImageChanging, setIsModalImageChanging] = useState(false);
  const [modalMediaItem, setModalMediaItem] = useState<MediaItem | null>(null);
  const [modalGalleryIndex, setModalGalleryIndex] = useState<number>(0);
  const [isPageLoaded, setIsPageLoaded] = useState(false);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);
  const [isFadingOut, setIsFadingOut] = useState(false);
  const [fadeOutLines, setFadeOutLines] = useState<number[]>([]);

  // Separate images and videos
  const allImages = mediaItems.filter(item => item.type === 'image');
  const videos = mediaItems.filter(item => item.type === 'video');
  
  // Use all images in main display, no gallery separation
  const images = allImages;
  const defaultGalleryImages: MediaItem[] = [];
  
  // Combine default gallery images with provided gallery items
  const allGalleryImages = [...defaultGalleryImages, ...galleryItems];

  const selectedImage = images[selectedImageIndex];
  const selectedVideo = videos[selectedVideoIndex];

  // Page load animation
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsPageLoaded(true);
    }, 100); // Small delay to ensure smooth animation

    return () => clearTimeout(timer);
  }, []);

  // Auto-advance slideshow for images - change image every 8 seconds
  useEffect(() => {
    if (images.length <= 1) return; // Don't auto-advance if only one image
    
    const interval = setInterval(() => {
      setIsChanging(true);
      setTimeout(() => {
        setSelectedImageIndex((prev) => (prev < images.length - 1 ? prev + 1 : 0));
        setIsChanging(false);
      }, 1000); // Smooth 1000ms (1 second) transition
    }, 8000); // Change every 8 seconds

    return () => clearInterval(interval);
  }, [images.length]);

  const openModal = (item: MediaItem) => {
    setModalMediaItem(item);
    setIsModalClosing(false);
    setIsModalOpening(true);
    setIsModalOpen(true);
    
    // Find index in combined gallery if it's a gallery item
    const combinedGallery = [...images, ...allGalleryImages];
    const index = combinedGallery.findIndex(galleryItem => 
      galleryItem.src === item.src && galleryItem.type === item.type
    );
    if (index !== -1) {
      setModalGalleryIndex(index);
    }
    
    // Reset opening animation after a short delay
    setTimeout(() => {
      setIsModalOpening(false);
    }, 100);
  };
  
  const closeModal = () => {
    setIsModalClosing(true);
    setTimeout(() => {
      setIsModalOpen(false);
      setIsModalClosing(false);
      setModalMediaItem(null);
    }, 300);
  };

  const handleThumbnailClick = (index: number) => {
    if (index !== selectedImageIndex) {
      setIsChanging(true);
      setTimeout(() => {
        setSelectedImageIndex(index);
        setIsChanging(false);
      }, 1000);
    }
  };

  const handlePrevious = () => {
    setIsChanging(true);
    setTimeout(() => {
      setSelectedImageIndex((prev) => (prev > 0 ? prev - 1 : images.length - 1));
      setIsChanging(false);
    }, 1000);
  };

  const handleNext = () => {
    setIsChanging(true);
    setTimeout(() => {
      setSelectedImageIndex((prev) => (prev < images.length - 1 ? prev + 1 : 0));
      setIsChanging(false);
    }, 1000);
  };

  const handleVideoPrevious = () => {
    setIsVideoChanging(true);
    setTimeout(() => {
      setSelectedVideoIndex((prev) => (prev > 0 ? prev - 1 : videos.length - 1));
      setIsVideoChanging(false);
    }, 150);
  };

  const handleVideoNext = () => {
    setIsVideoChanging(true);
    setTimeout(() => {
      setSelectedVideoIndex((prev) => (prev < videos.length - 1 ? prev + 1 : 0));
      setIsVideoChanging(false);
    }, 150);
  };

  const handleVideoThumbnailClick = (index: number) => {
    if (index !== selectedVideoIndex) {
      setIsVideoChanging(true);
      setTimeout(() => {
        setSelectedVideoIndex(index);
        setIsVideoChanging(false);
      }, 150);
    }
  };

  // Touch gesture handlers for mobile navigation
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe && images.length > 1) {
      handleNext();
    }
    if (isRightSwipe && images.length > 1) {
      handlePrevious();
    }
  };


  // Gallery navigation in modal
  const handleModalPrevious = () => {
    const combinedGallery = [...images, ...allGalleryImages];
    if (combinedGallery.length <= 1) return;
    
    setIsModalImageChanging(true);
    setTimeout(() => {
      const newIndex = modalGalleryIndex > 0 ? modalGalleryIndex - 1 : combinedGallery.length - 1;
      setModalGalleryIndex(newIndex);
      setModalMediaItem(combinedGallery[newIndex]);
      setIsModalImageChanging(false);
    }, 200);
  };

  const handleModalNext = () => {
    const combinedGallery = [...images, ...allGalleryImages];
    if (combinedGallery.length <= 1) return;
    
    setIsModalImageChanging(true);
    setTimeout(() => {
      const newIndex = modalGalleryIndex < combinedGallery.length - 1 ? modalGalleryIndex + 1 : 0;
      setModalGalleryIndex(newIndex);
      setModalMediaItem(combinedGallery[newIndex]);
      setIsModalImageChanging(false);
    }, 200);
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (isModalOpen) {
        if (e.key === 'ArrowLeft') handleModalPrevious();
        if (e.key === 'ArrowRight') handleModalNext();
        if (e.key === 'Escape') closeModal();
      } else {
        if (e.key === 'ArrowLeft') handlePrevious();
        if (e.key === 'ArrowRight') handleNext();
        if (e.key === 'Escape') closeModal();
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [isModalOpen, modalGalleryIndex]);

  // Function to split text into first part and rest
  // Use different limits based on title (800 for most, 1200 for Jaw Release Workshop)
  const splitText = (text: string) => {
    if (!text) return { firstPart: '', restPart: '' };
    
    const charLimit = title === 'Jaw Release Workshop' ? 1200 : (title === 'Ballet for bloody beginners' ? 3000 : (title === 'Dance as a social movement' ? 3000 : (title === 'Hello it\'s me' ? 3000 : (title === 'Opa Europa' ? 3000 : (title === 'Piece#Peace' ? 3000 : (title === 'From NOW to Now' ? 999999 : (isBioPage || isHomepage ? 5000 : 800)))))));
    
    // If text is less than the limit, don't split - put everything in first part
    if (text.length <= charLimit) {
      return { firstPart: text, restPart: '' };
    }
    
    // Only split if text is longer than the limit
    const firstPart = text.substring(0, charLimit);
    const lastSpaceIndex = firstPart.lastIndexOf(' ');
    const shortText = lastSpaceIndex > 0 ? firstPart.substring(0, lastSpaceIndex) : firstPart;
    const restText = text.substring(shortText.length).trim();
    
    return { firstPart: shortText, restPart: restText };
  };

  // Check if title is a string or JSX element containing "Biography"
  const isBioPage = typeof title === 'string' ? title === 'Angela Lamprianidou' : 
                   (title && typeof title === 'object' && 'props' in title && 
                    title.props && typeof title.props.children === 'object' && 
                    title.props.children.some && title.props.children.some((child: any) => 
                      child && typeof child === 'object' && child.props && 
                      child.props.children && typeof child.props.children === 'object' && 'length' in child.props.children &&
                      Array.isArray(child.props.children) && child.props.children.some((grandchild: any) => 
                        grandchild && typeof grandchild === 'object' && grandchild.props && 
                        grandchild.props.children === 'Biography'
                      )
                    ));

  const { firstPart, restPart } = splitText(description || '');

  return (
    <>
      <style jsx>{`
        @keyframes fadeInUp {
          0% {
            opacity: 0;
            transform: translateY(30px);
          }
          50% {
            opacity: 0.7;
            transform: translateY(15px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes fadeOutLineByLine {
          0% {
            opacity: 1;
            transform: translateY(0);
          }
          100% {
            opacity: 0;
            transform: translateY(-20px);
          }
        }
        
        .line-fade-out {
          animation: fadeOutLineByLine 0.3s ease-out forwards;
        }
        
        /* Smooth scrolling for the entire page */
        html {
          scroll-behavior: smooth;
          scroll-padding-top: 20px;
        }
        
        /* Additional smooth scrolling properties */
        * {
          scroll-behavior: smooth;
        }
        
        /* Smooth transitions for all elements */
        body {
          scroll-behavior: smooth;
          transition: all 0.3s ease-in-out;
        }
        
        /* Contact page specific styling */
        .contact-page .website-text {
          white-space: pre-line !important;
          word-wrap: normal !important;
          overflow-wrap: normal !important;
          max-width: none !important;
          width: auto !important;
          margin-left: 18px !important;
        }
        
        /* Force navigation button colors */
        .nav-arrow-button {
          color: #ffffff !important;
          font-size: 2.5rem !important;
          font-weight: 300 !important;
          line-height: 1 !important;
          -webkit-text-fill-color: #ffffff !important;
          -webkit-text-stroke: none !important;
        }
        
        .nav-arrow-button:hover {
          color: #f3f4f6 !important;
          -webkit-text-fill-color: #f3f4f6 !important;
        }
        
        /* Target all navigation buttons */
        button[class*="-left-12"],
        button[class*="-right-12"] {
          color: #ffffff !important;
          font-size: 2.5rem !important;
          font-weight: 300 !important;
          line-height: 1 !important;
          -webkit-text-fill-color: #ffffff !important;
          -webkit-text-stroke: none !important;
        }
        
        button[class*="-left-12"]:hover,
        button[class*="-right-12"]:hover {
          color: #f3f4f6 !important;
          -webkit-text-fill-color: #f3f4f6 !important;
        }
        
        /* Close button (×) styles */
        button[onclick*="closeModal"],
        button:has(> *:only-child:is(×)) {
          color: #ffffff !important;
          font-size: 3rem !important;
          font-weight: 300 !important;
          -webkit-text-fill-color: #ffffff !important;
          -webkit-text-stroke: none !important;
        }
        
        button[onclick*="closeModal"]:hover,
        button:has(> *:only-child:is(×)):hover {
          color: #f3f4f6 !important;
          -webkit-text-fill-color: #f3f4f6 !important;
        }
      `}</style>
      <div 
        className={`relative overflow-hidden text-${textColor} website-font ${className}`}
        style={{
          background: preserveBackground ? 'transparent' : (textColor === 'black' ? 'linear-gradient(135deg, #fafafa 0%, #ffffff 100%)' : 'transparent'),
          minHeight: 'auto',
          height: 'auto'
        }}
      >
      {/* Content starts here */}

      {/* Main Content */}
      <div className="relative z-10 mt-40 sm:mt-24 md:mt-32 px-4 sm:px-8 md:px-20 lg:px-28 xl:px-40 pb-6 sm:pb-8 md:pb-10" style={{ minHeight: 'auto', height: 'auto' }}>
        <div className={`max-w-none transition-all duration-700 ease-out ${
          isPageLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        }`}>

          {/* Title and Border - Full Width */}
          {title && (
            <div className="w-full mb-4">
              <div className="mb-2 sm:mb-3" style={{ 
                color: '#000000',
                fontSize: '19px',
                fontWeight: '400',
                fontFamily: '"Domestic Manners", cursive',
                lineHeight: '21px',
                margin: 0,
                padding: 0,
                marginBottom: '4px',
                marginTop: '10px',
                marginLeft: '45px'
              }}>{title}</div>
              <div className="border-b border-gray-300" style={{ width: '92%', marginLeft: '4%', marginRight: '4%', marginBottom: '16px', borderBottomWidth: '2.5px' }}></div>
            </div>
          )}

          {/* Images Section - Responsive layout */}
          {images.length > 0 ? (
            <div className="mb-4 sm:mb-6 flex flex-col lg:flex-row gap-4 sm:gap-6 mt-0 pt-2 sm:pt-3" style={{ marginBottom: '16px', paddingTop: '8px', gap: '16px' }}>
              {/* Left side - Text content */}
              <div className={`lg:w-1/3 lg:pl-4 lg:flex lg:items-start mt-0 sm:mt-1 transition-all duration-700 ease-out delay-100 ${
                isPageLoaded ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'
              }`} style={{ marginTop: '20px' }}>
                <div className="w-full">
                  {/* Show first part of text OR all text if less than 800 chars (1200 for jaw-release, 2000 for bio, 1000 for yoga) */}
                  {(firstPart || (description && description.length <= (title === 'Jaw Release Workshop' ? 1200 : (title === 'Ballet for bloody beginners' ? 3000 : (title === 'Yoga - Composition - Dance' ? 1000 : (isBioPage ? 2000 : 800)))))) && (
                    <div className="website-text leading-relaxed" style={{ 
                      maxWidth: '100%', 
                      wordWrap: 'break-word', 
                      whiteSpace: 'pre-wrap', 
                      overflowWrap: 'break-word',
                      marginBottom: '8px',
                      paddingTop: '4px',
                      fontFamily: '"Andale Mono", monospace',
                      fontSize: '0.93em',
                      lineHeight: '2'
                    }}>
                      {/* If total text is less than 800 chars (1200 for jaw-release, 2000 for bio, 1000 for yoga), show all text, otherwise show first part */}
                      <span>
                        {description && description.length <= (title === 'Jaw Release Workshop' ? 1200 : (title === 'Ballet for bloody beginners' ? 3000 : (title === 'Yoga - Composition - Dance' ? 1000 : (isBioPage ? 2000 : 800)))) ? 
                          convertUrlsToLinks(description) as React.ReactNode : 
                          convertUrlsToLinks(firstPart) as React.ReactNode
                        }
                      </span>
                    </div>
                  )}
                  {/* Read more / less button placed directly after first text section on homepage */}
                  {isHomepage && setShowFullBio && (
                    <div className="mt-4 ml-8 transition-all duration-500 ease-in-out" id="read-more-button">
                      <button
                        onClick={() => {
                          if (!showFullBio) {
                            // Opening - scroll to second text section smoothly and slowly
                            setShowFullBio(true);
                            
                            // Start scroll animation immediately
                            setTimeout(() => {
                              const element = document.getElementById('second-text-section');
                              if (element) {
                                // Get the current scroll position and add the element's position
                                const currentScrollY = window.scrollY;
                                const elementRect = element.getBoundingClientRect();
                                const elementTop = elementRect.top + currentScrollY;
                                const offsetPosition = elementTop - 200; // 200px above the element - less scrolling down
                                
                                // Custom slow scroll animation
                                const startPosition = window.scrollY;
                                const distance = offsetPosition - startPosition;
                                const duration = 2000; // 2 seconds for very slow scroll
                                let startTime = null;
                                
                                function slowScroll(currentTime) {
                                  if (startTime === null) startTime = currentTime;
                                  const timeElapsed = currentTime - startTime;
                                  const progress = Math.min(timeElapsed / duration, 1);
                                  
                                  // Easing function for smooth deceleration
                                  const easeOutCubic = 1 - Math.pow(1 - progress, 3);
                                  const currentPosition = startPosition + (distance * easeOutCubic);
                                  
                                  window.scrollTo(0, currentPosition);
                                  
                                  if (progress < 1) {
                                    requestAnimationFrame(slowScroll);
                                  }
                                }
                                
                                requestAnimationFrame(slowScroll);
                              }
                            }, 100); // Very short delay just to ensure element is rendered
                          } else {
                            // Closing - scroll to top smoothly and immediately with line-by-line text fade out
                            
                            // Start line-by-line fade out immediately
                            setIsFadingOut(true);
                            
                            // Split text into lines and fade them out from bottom to top
                            const fullText = `Angela's piece "SIT" received the Dansa Mes a Prop Award and was selected as a finalist at the international choreography competition No Ballet. Her works are deeply physical yet energetically subtle, unfolding as contemplative landscapes rather than staged events. The audience is never positioned as passive viewers — they are part of the atmosphere, participants in a live field of resonance. She often works in non-institutional, intimate, or forgotten spaces, where the raw edges of time and place become part of the performance itself.
Her creations have been presented across Europe, including at Mercat de les Flors, Antic Teatre, and the Teatre Nacional de Catalunya in Barcelona, Ponec Theatre in Prague, Tanzquartier Wien in Vienna, and Ballhaus Ost in Berlin. Angela lives and works between Athens and Berlin and continues to develop and share her work internationally. Wherever she goes, she brings not just performance, but a deep desire to enter into dialogue with the land, the people, and the invisible structures we all move within.
As a producer, she curates her own projects from concept to realization, crafting spaces where art is not separate from life. Her workshops — offered both nationally and internationally — are themselves performances: immersive, physical, energetic spaces where bodies speak, remember, and shift. These gatherings go beyond teaching; they are happenings, fields of transformation, and real-time rituals of collective research.
Angela has collaborated with artists such as Felix Ruckert, Roger Bernat, Tomeu Vergés, Caroline Brown, Santiago Sempere, and Iago Pericot. Her extended studies include Klein Technique with Barbara Mahler (USA), Feldenkrais Method, Energy Psychology with Astir Vlaminck (Germany), and yoga training at Shivashakti Yoga Barcelona. Since 2009, she has been researching the relationship between the jaw, the nervous system, and the body's energetic field — resulting in her own method of jaw and body release, which now flows into all aspects of her choreographic, performative, and teaching work.
Her artistic world is not one of hierarchy, but of shared presence. She doesn't create to impress — she creates to connect, to disturb comfort zones, to return to what is essential. There is an urgency in her work, but also great care. She says: "I don't create to entertain. I create to connect — to open time, to move energy, to remind us of what the body already knows. I love to bring my art into your country — and meet you there."
Reading her, watching her, moving with her — you feel that invitation. And you might just want to follow it.
www.you-are-the-point.de`;
                            
                            const lines = fullText.split('\n');
                            const totalLines = lines.length;
                            
                            // Fade out lines from bottom to top
                            for (let i = 0; i < totalLines; i++) {
                              setTimeout(() => {
                                setFadeOutLines(prev => [...prev, totalLines - 1 - i]);
                              }, i * 100); // Each line fades out 100ms after the previous
                            }
                            
                            // Start scroll animation immediately
                            setTimeout(() => {
                              // Custom slow scroll to top
                              const startPosition = window.scrollY;
                              const targetPosition = 0; // Top of the page
                              const distance = targetPosition - startPosition;
                              const duration = 2000; // 2 seconds for very slow scroll
                              let startTime = null;
                              
                              function slowScrollToTop(currentTime) {
                                if (startTime === null) startTime = currentTime;
                                const timeElapsed = currentTime - startTime;
                                const progress = Math.min(timeElapsed / duration, 1);
                                
                                // Easing function for smooth deceleration
                                const easeOutCubic = 1 - Math.pow(1 - progress, 3);
                                const currentPosition = startPosition + (distance * easeOutCubic);
                                
                                window.scrollTo(0, currentPosition);
                                
                                if (progress < 1) {
                                  requestAnimationFrame(slowScrollToTop);
                                }
                              }
                              
                              requestAnimationFrame(slowScrollToTop);
                            }, 100); // Very short delay just to ensure state is updated
                            
                            // Hide text after line-by-line animation completes
                            setTimeout(() => {
                              setShowFullBio(false);
                              setIsFadingOut(false);
                              setFadeOutLines([]);
                            }, totalLines * 100 + 500); // Hide text after all lines fade out
                          }
                        }}
                        className="bg-transparent border-2 border-black text-black px-6 py-2 rounded-full hover:bg-black hover:text-white transition-all duration-700 ease-in-out font-medium cursor-pointer"
                        style={{ 
                          fontSize: '14px',
                          letterSpacing: '0.5px',
                          textTransform: 'uppercase',
                          position: 'relative',
                          zIndex: 10,
                          pointerEvents: 'auto',
                          userSelect: 'none'
                        }}
                      >
                        {showFullBio ? 'Read less' : 'Read more'}
                      </button>
                    </div>
                  )}
                </div>
              </div>
              
              {/* Right side - Image display and gallery */}
              <div className={`lg:w-2/3 lg:pr-4 transition-all duration-700 ease-out delay-200 ${
                isPageLoaded ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4'
              }`} style={{ marginTop: '40px' }}>
                <div className="w-full space-y-4 media-display-container">
                {/* Main Image Display */}
                <div className="relative group">
                  <div 
                    className="relative w-full overflow-hidden cursor-pointer transition-all duration-300 sm:min-h-[500px] sm:max-h-[1000px] md:min-h-[600px] md:max-h-[1200px] lg:min-h-[700px] lg:max-h-[1400px]"
                    style={{ 
                      aspectRatio: 'auto', 
                      minHeight: imageSize === 'xlarge' ? '500px' : imageSize === 'large' ? '250px' : imageSize === 'small' ? '150px' : '200px',
                      maxHeight: imageSize === 'xlarge' ? '1000px' : imageSize === 'large' ? '500px' : imageSize === 'small' ? '300px' : '400px'
                    }}
                    onClick={() => selectedImage && openModal(selectedImage)}
                    onTouchStart={handleTouchStart}
                    onTouchMove={handleTouchMove}
                    onTouchEnd={handleTouchEnd}
                  >
                    {selectedImage && (
                      <Image
                        src={selectedImage.src}
                        alt={selectedImage.alt}
                        fill
                        className={`object-contain transition-all duration-700 ease-in-out group-hover:scale-105 ${isChanging ? 'opacity-0' : 'opacity-100'}`}
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                    )}
                    
                     {/* Navigation Arrows - Outside image frame, hidden on mobile */}
                     {images.length > 1 && (
                       <>
                         <button
                           onClick={(e) => {
                             e.stopPropagation();
                             handlePrevious();
                           }}
                           className="nav-arrow-button hidden md:block absolute -left-12 top-1/2 -translate-y-1/2 transition-all duration-300 hover:scale-105"
                           style={{
                             fontWeight: '300',
                             fontSize: '2.5rem',
                             color: '#ffffff !important',
                             lineHeight: '1',
                             WebkitTextFillColor: '#ffffff',
                             WebkitTextStroke: 'none'
                           }}
                           onMouseEnter={(e) => {
                             e.currentTarget.style.color = '#f3f4f6 !important';
                             (e.currentTarget.style as any).webkitTextFillColor = '#f3f4f6';
                           }}
                           onMouseLeave={(e) => {
                             e.currentTarget.style.color = '#ffffff !important';
                             (e.currentTarget.style as any).webkitTextFillColor = '#ffffff';
                           }}
                         >
                           ‹
                         </button>
                         <button
                           onClick={(e) => {
                             e.stopPropagation();
                             handleNext();
                           }}
                           className="nav-arrow-button hidden md:block absolute -right-12 top-1/2 -translate-y-1/2 transition-all duration-300 hover:scale-105"
                           style={{
                             fontWeight: '300',
                             fontSize: '2.5rem',
                             color: '#ffffff !important',
                             lineHeight: '1',
                             WebkitTextFillColor: '#ffffff',
                             WebkitTextStroke: 'none'
                           }}
                           onMouseEnter={(e) => {
                             e.currentTarget.style.color = '#f3f4f6 !important';
                             (e.currentTarget.style as any).webkitTextFillColor = '#f3f4f6';
                           }}
                           onMouseLeave={(e) => {
                             e.currentTarget.style.color = '#ffffff !important';
                             (e.currentTarget.style as any).webkitTextFillColor = '#ffffff';
                           }}
                         >
                           ›
                         </button>
                       </>
                     )}

                  </div>
                </div>

                  {/* Thumbnails - Only show if multiple images */}
                  {images.length > 1 && (
                    <div className="relative mt-8">
                      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 sm:gap-4 md:gap-5">
                      {images.slice(0, Math.min(images.length, 4)).map((item, index) => (
                        <div
                          key={index}
                          className={`relative aspect-square cursor-pointer rounded-lg border border-gray-200 shadow-sm transition-all duration-200 touch-target overflow-hidden ${
                            index === selectedImageIndex
                              ? 'border-gray-400 ring-2 ring-gray-300'
                              : 'hover:border-gray-300 hover:shadow-md'
                          }`}
                          onClick={() => handleThumbnailClick(index)}
                        >
                          <Image
                            src={item.src}
                            alt={item.alt}
                            fill
                            className="object-cover"
                            sizes="(max-width: 640px) 96px, (max-width: 768px) 120px, (max-width: 1024px) 160px, 200px"
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Photographer */}
                {photographer && (
                  <p className="photo-credit text-center">{photographer}</p>
                )}
                
                {/* Gallery Link */}
                </div>
              </div>
            </div>
          ) : (
            /* Text-only section for pages without images */
            <div className={`mb-8 mt-8 transition-all duration-700 ease-out delay-100 ${
              isPageLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}>
              <div className="w-full">
                {description && (
                  <div className="website-text leading-tight" style={{ maxWidth: 'none', width: '100%', fontFamily: '"Andale Mono", monospace', fontSize: '0.93em', lineHeight: '2' }}>
                    {title && !className?.includes('contact-page') && (
                      <>
                        <div className="font-bold text-3xl mb-4" style={{ fontSize: '2.5rem' }}>{title}</div>
                        <div className="h-8"></div>
                      </>
                    )}
                    {/* Show first part of text OR all text if less than 800 chars */}
                    <span>
                      {description && description.length <= (title === 'Ballet for bloody beginners' ? 3000 : (title === 'Yoga - Composition - Dance' ? 1000 : 800)) ? 
                        convertUrlsToLinks(description) as React.ReactNode : 
                        convertUrlsToLinks(firstPart) as React.ReactNode
                      }
                    </span>
                  </div>
                )}
              </div>
            </div>
          )}

          {/* Videos Section - Big size below images, centered */}
          {videos.length > 0 && (
            <div className={`mb-8 flex justify-center transition-all duration-700 ease-out delay-300 ${
              isPageLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}>
              <div className="w-full max-w-7xl space-y-4">
                {/* Main Video Display */}
                <div className="relative group">
                  <div 
                    className="relative w-full border border-gray-200 rounded-lg overflow-hidden cursor-pointer transition-all duration-300 shadow-sm"
                    style={{ aspectRatio: '16/9' }}
                    onClick={() => selectedVideo && openModal(selectedVideo)}
                  >
                    {selectedVideo && (
                      <>
                        {selectedVideo.src.includes('vimeo.com') ? (
                          <iframe
                            src={`https://player.vimeo.com/video/${selectedVideo.src.split('/').pop()}?autoplay=0&loop=0&muted=1&controls=1`}
                            className={`w-full h-full transition-opacity duration-700 ease-in-out ${isVideoChanging ? 'opacity-50' : 'opacity-100'}`}
                            frameBorder="0"
                            allow="autoplay; fullscreen; picture-in-picture"
                            allowFullScreen
                          />
                        ) : selectedVideo.src.includes('youtube.com') || selectedVideo.src.includes('youtu.be') ? (
                          <iframe
                            src={`https://www.youtube.com/embed/${selectedVideo.src.includes('watch?v=') ? selectedVideo.src.split('watch?v=')[1] : selectedVideo.src.includes('youtu.be/') ? selectedVideo.src.split('youtu.be/')[1] : selectedVideo.src.split('embed/')[1]?.split('?')[0]}?autoplay=0&loop=0&muted=1&controls=1&modestbranding=1&rel=0&showinfo=0`}
                            className={`w-full h-full transition-opacity duration-700 ease-in-out ${isVideoChanging ? 'opacity-50' : 'opacity-100'}`}
                            frameBorder="0"
                            allow="autoplay; fullscreen; picture-in-picture"
                            allowFullScreen
                          />
                        ) : (
                          <video
                            src={selectedVideo.src}
                            className={`w-full h-full object-contain transition-opacity duration-700 ease-in-out ${isVideoChanging ? 'opacity-50' : 'opacity-100'}`}
                            controls
                            muted
                          />
                        )}
                      </>
                    )}
                    
                     {/* Navigation Arrows - Outside video frame, hidden on mobile */}
                     {videos.length > 1 && (
                       <>
                         <button
                           onClick={(e) => {
                             e.stopPropagation();
                             handleVideoPrevious();
                           }}
                           className="hidden md:block absolute -left-12 top-1/2 -translate-y-1/2 transition-all duration-300 hover:scale-105 z-10"
                           style={{
                             fontWeight: '300',
                             fontSize: '2.5rem',
                             color: '#ffffff !important',
                             lineHeight: '1',
                             WebkitTextFillColor: '#ffffff',
                             WebkitTextStroke: 'none'
                           }}
                           onMouseEnter={(e) => {
                             e.currentTarget.style.color = '#f3f4f6 !important';
                             (e.currentTarget.style as any).webkitTextFillColor = '#f3f4f6';
                           }}
                           onMouseLeave={(e) => {
                             e.currentTarget.style.color = '#ffffff !important';
                             (e.currentTarget.style as any).webkitTextFillColor = '#ffffff';
                           }}
                         >
                           ‹
                         </button>
                         <button
                           onClick={(e) => {
                             e.stopPropagation();
                             handleVideoNext();
                           }}
                           className="hidden md:block absolute -right-12 top-1/2 -translate-y-1/2 transition-all duration-300 hover:scale-105 z-10"
                           style={{
                             fontWeight: '300',
                             fontSize: '2.5rem',
                             color: '#ffffff !important',
                             lineHeight: '1',
                             WebkitTextFillColor: '#ffffff',
                             WebkitTextStroke: 'none'
                           }}
                           onMouseEnter={(e) => {
                             e.currentTarget.style.color = '#f3f4f6 !important';
                             (e.currentTarget.style as any).webkitTextFillColor = '#f3f4f6';
                           }}
                           onMouseLeave={(e) => {
                             e.currentTarget.style.color = '#ffffff !important';
                             (e.currentTarget.style as any).webkitTextFillColor = '#ffffff';
                           }}
                         >
                           ›
                         </button>
                       </>
                     )}

                  </div>
                </div>

                  {/* Video Thumbnails - Only show if multiple videos */}
                  {videos.length > 1 && (
                    <div className="relative mt-8">
                      <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide justify-center">
                      {videos.map((video, index) => (
                        <div
                          key={index}
                          className={`relative flex-shrink-0 w-20 h-20 cursor-pointer rounded transition-all duration-200 ${
                            index === selectedVideoIndex
                              ? 'border-2 border-gray-600'
                              : 'hover:border-2 hover:border-white/40'
                          }`}
                          onClick={() => handleVideoThumbnailClick(index)}
                        >
                          {video.src.includes('vimeo.com') ? (
                            <Image
                              src={`https://vumbnail.com/${video.src.split('/').pop()}.jpg`}
                              alt={video.alt}
                              fill
                              className="object-cover rounded"
                              sizes="80px"
                            />
                          ) : video.src.includes('youtube.com') || video.src.includes('youtu.be') ? (
                            <Image
                              src={`https://img.youtube.com/vi/${video.src.includes('embed/') ? video.src.split('embed/')[1].split('?')[0] : video.src.split('v=')[1]?.split('&')[0]}/hqdefault.jpg`}
                              alt={video.alt}
                              fill
                              className="object-cover rounded"
                              sizes="80px"
                            />
                          ) : video.src.includes('.mov') ? (
                            <Image
                              src={video.src.replace('.mov', '_thumb.jpg')}
                              alt={video.alt}
                              fill
                              className="object-cover rounded"
                              sizes="80px"
                            />
                          ) : (
                            <div className="w-full h-full bg-gray-800 flex items-center justify-center text-white text-xs rounded">
                              ▶
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          )}


          {/* SECOND SLIDE - REST OF TEXT CONTENT - Show if there are videos OR if there is remaining text (more than 1100 chars) OR if there is additionalInfo */}
          {(videos.length > 0 || (restPart && description && description.length > (title === 'Ballet for bloody beginners' ? 3000 : (title === 'Yoga - Composition - Dance' ? 1000 : 1100))) || additionalInfo) && (
            <div className={`space-y-4 mt-12 mx-[1.3%] transition-all duration-700 ease-out delay-400 ${
              isPageLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}>
                   {/* Show restPart only if not homepage or not showing full bio */}
                   {restPart && description && description.length > (title === 'Ballet for bloody beginners' ? 3000 : (title === 'Yoga - Composition - Dance' ? 1000 : 1100)) && !(isHomepage && showFullBio) && (
                     <div>
                        <p className="website-text leading-tight" style={{ maxWidth: 'none', width: '100%', wordWrap: 'break-word', whiteSpace: 'normal', overflowWrap: 'break-word', fontFamily: '"Andale Mono", monospace', fontSize: '0.93em', lineHeight: '2' }}>
                         <span>
                           {convertUrlsToLinks(restPart) as React.ReactNode}
                         </span>
                       </p>
                     </div>
                   )}

                    {/* Show expanded bio content in second section - part of main page flow with line-by-line reveal */}
                    {isHomepage && showFullBio && (
                      <div id="second-text-section" className="mt-8 transition-all duration-1500 ease-in-out second-text-section" style={{
                        animation: 'fadeInUp 1.2s ease-out forwards',
                        opacity: showFullBio ? 1 : 0,
                        transition: 'opacity 0.8s ease-in-out'
                      }}>
                        <div className="website-text leading-relaxed" style={{ 
                          maxWidth: 'none', 
                          width: '100%', 
                          wordWrap: 'break-word', 
                          whiteSpace: 'pre-wrap', 
                          overflowWrap: 'break-word',
                          padding: '0',
                          margin: '0',
                          lineHeight: '2',
                          fontSize: '0.93em',
                          paddingLeft: '2rem',
                          fontFamily: '"Andale Mono", monospace',
                          animation: 'fadeInUp 1.5s ease-out forwards'
                        }}>
                          {(() => {
                            const fullText = `Angela's piece "SIT" received the Dansa Mes a Prop Award and was selected as a finalist at the international choreography competition No Ballet. Her works are deeply physical yet energetically subtle, unfolding as contemplative landscapes rather than staged events. The audience is never positioned as passive viewers — they are part of the atmosphere, participants in a live field of resonance. She often works in non-institutional, intimate, or forgotten spaces, where the raw edges of time and place become part of the performance itself.
Her creations have been presented across Europe, including at Mercat de les Flors, Antic Teatre, and the Teatre Nacional de Catalunya in Barcelona, Ponec Theatre in Prague, Tanzquartier Wien in Vienna, and Ballhaus Ost in Berlin. Angela lives and works between Athens and Berlin and continues to develop and share her work internationally. Wherever she goes, she brings not just performance, but a deep desire to enter into dialogue with the land, the people, and the invisible structures we all move within.
As a producer, she curates her own projects from concept to realization, crafting spaces where art is not separate from life. Her workshops — offered both nationally and internationally — are themselves performances: immersive, physical, energetic spaces where bodies speak, remember, and shift. These gatherings go beyond teaching; they are happenings, fields of transformation, and real-time rituals of collective research.
Angela has collaborated with artists such as Felix Ruckert, Roger Bernat, Tomeu Vergés, Caroline Brown, Santiago Sempere, and Iago Pericot. Her extended studies include Klein Technique with Barbara Mahler (USA), Feldenkrais Method, Energy Psychology with Astir Vlaminck (Germany), and yoga training at Shivashakti Yoga Barcelona. Since 2009, she has been researching the relationship between the jaw, the nervous system, and the body's energetic field — resulting in her own method of jaw and body release, which now flows into all aspects of her choreographic, performative, and teaching work.
Her artistic world is not one of hierarchy, but of shared presence. She doesn't create to impress — she creates to connect, to disturb comfort zones, to return to what is essential. There is an urgency in her work, but also great care. She says: "I don't create to entertain. I create to connect — to open time, to move energy, to remind us of what the body already knows. I love to bring my art into your country — and meet you there."
Reading her, watching her, moving with her — you feel that invitation. And you might just want to follow it.
www.you-are-the-point.de`;
                            
                            const lines = fullText.split('\n');
                            
                            return lines.map((line, index) => (
                              <div
                                key={index}
                                className={fadeOutLines.includes(index) ? 'line-fade-out' : ''}
                                style={{
                                  opacity: fadeOutLines.includes(index) ? 0 : 1,
                                  transform: fadeOutLines.includes(index) ? 'translateY(-20px)' : 'translateY(0)',
                                  transition: 'opacity 0.3s ease-out, transform 0.3s ease-out'
                                }}
                              >
                                {convertUrlsToLinks(line) as React.ReactNode}
                              </div>
                            ));
                          })()}
                        </div>
                      </div>
                    )}

                    {/* Mobile-only image after all text */}
                    {isHomepage && showFullBio && (
                      <div className="lg:hidden mt-12 flex justify-center">
                        <img 
                          src="/buttomright.png" 
                          alt="Angela Lamprianidou" 
                          className="max-w-full h-auto object-contain"
                          style={{ 
                            maxHeight: '500px', 
                            transform: 'scale(1.2)'
                          }}
                        />
                      </div>
                    )}

              {additionalInfo && (
                <div 
                  className="pt-0 transition-all duration-1000 ease-in-out" 
                  style={{ 
                    paddingTop: '0px', 
                    marginTop: isHomepage && !showFullBio ? '16px' : '-32px',
                    marginBottom: isHomepage && showFullBio ? '40px' : '0px', // Reduced space for mobile image
                    transform: isHomepage && !showFullBio ? 'translateY(0px)' : 'translateY(0px)',
                    position: 'relative',
                    zIndex: 5
                  }}
                >
                  <div className="flex flex-col lg:flex-row gap-4">
                    {/* Text content - Left side */}
                    <div className={isHomepage ? "w-full lg:w-3/4" : "w-full"}>
                      {typeof additionalInfo === 'string' ? (
                          <div className="website-text leading-relaxed whitespace-pre-wrap" style={{ maxWidth: 'none', width: '100%', marginBottom: '8px', paddingTop: '24px', marginTop: isHomepage && showFullBio ? '95px' : '0px', wordWrap: 'break-word', overflowWrap: 'break-word', fontFamily: '"Andale Mono", monospace', fontSize: '0.93em', lineHeight: '2' }}>
                          {isHomepage ? (
                            // Homepage: show only the contact info; button is rendered after first text section
                            <span>{convertUrlsToLinks(additionalInfo) as React.ReactNode}</span>
                          ) : (
                            <span>{convertUrlsToLinks(additionalInfo) as React.ReactNode}</span>
                          )}
                        </div>
                      ) : (
                        <div className="website-text leading-relaxed" style={{ maxWidth: 'none', width: '100%', marginBottom: '8px', paddingTop: '4px', fontFamily: '"Andale Mono", monospace', fontSize: '0.93em', lineHeight: '2' }}>
                          {additionalInfo}
                        </div>
                      )}
                    </div>
                    
                  </div>
                </div>
              )}
            </div>
          )}

          {/* Image on the right side - Only for homepage - MOVED OUTSIDE to prevent movement */}
          {isHomepage && (
            <div 
              className="hidden lg:flex w-full lg:w-1/4 justify-center lg:justify-end" 
              style={{ 
                minHeight: '420px', 
                maxHeight: '420px', 
                marginTop: '60px',
                position: 'absolute',
                right: '20px',
                top: '100vh',
                zIndex: 5
              }}
            >
              <img 
                src="/buttomright.png" 
                alt="Angela Lamprianidou" 
                className="max-w-full h-auto object-contain"
                style={{ 
                  maxHeight: '420px', 
                  transform: 'scale(1.25)'
                }}
              />
            </div>
          )}


          {/* Clear float to prevent layout issues */}
          <div className="clear-both"></div>
        </div>
      </div>

      {/* Modal for Full Size Media */}
      {isModalOpen && modalMediaItem && (
        <div
          className={`fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-md transition-all duration-700 ease-out ${
            isModalClosing ? 'opacity-0' : isModalOpening ? 'opacity-0' : 'opacity-100'
          }`}
          onClick={closeModal}
        >
          <div
            className={`relative max-w-6xl max-h-[90vh] p-2 sm:p-4 transition-all duration-700 ease-out modal-content ${
              isModalClosing ? 'opacity-0 scale-95' : isModalOpening ? 'opacity-0 scale-90' : 'opacity-100 scale-100'
            }`}
            onClick={(e) => e.stopPropagation()}
          >
              <button
                onClick={closeModal}
                className="absolute -top-2 -right-2 sm:-top-3 sm:-right-3 z-10 text-white text-3xl sm:text-4xl transition-all duration-300 hover:scale-110 touch-target"
                style={{
                  textShadow: '2px 2px 4px rgba(0,0,0,0.8)',
                  fontWeight: '300',
                  color: '#ffffff !important',
                  WebkitTextFillColor: '#ffffff',
                  WebkitTextStroke: 'none'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = '#f3f4f6 !important';
                  (e.currentTarget.style as any).webkitTextFillColor = '#f3f4f6';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = '#ffffff !important';
                  (e.currentTarget.style as any).webkitTextFillColor = '#ffffff';
                }}
              >
                ×
              </button>
            
            <div className="relative">
              {modalMediaItem.type === 'image' ? (
                <div className="relative group">
                  <Image
                    src={modalMediaItem.src}
                    alt={modalMediaItem.alt}
                    width={1200}
                    height={800}
                    className={`max-w-full max-h-[70vh] sm:max-h-[80vh] object-contain rounded-lg shadow-2xl transition-all duration-500 ease-out ${
                      isModalImageChanging ? 'opacity-0 scale-95' : 'opacity-100 scale-100'
                    }`}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 80vw"
                  />
                  
                  {/* Gallery Navigation */}
                  {(images.length + allGalleryImages.length) > 1 && (
                    <>
                       <button
                         onClick={(e) => {
                           e.stopPropagation();
                           handleModalPrevious();
                         }}
                         className={`hidden md:block absolute -left-12 top-1/2 -translate-y-1/2 transition-all duration-300 hover:scale-110 touch-target ${
                           isModalImageChanging ? 'opacity-50 scale-95' : 'opacity-100 scale-100'
                         }`}
                         style={{
                           fontWeight: '300',
                           fontSize: '2.5rem',
                           color: '#374151',
                           lineHeight: '1'
                         }}
                         onMouseEnter={(e) => {
                           e.currentTarget.style.color = '#111827';
                         }}
                         onMouseLeave={(e) => {
                           e.currentTarget.style.color = '#374151';
                         }}
                         disabled={isModalImageChanging}
                       >
                         ‹
                       </button>
                       <button
                         onClick={(e) => {
                           e.stopPropagation();
                           handleModalNext();
                         }}
                         className={`hidden md:block absolute -right-12 top-1/2 -translate-y-1/2 transition-all duration-300 hover:scale-110 touch-target ${
                           isModalImageChanging ? 'opacity-50 scale-95' : 'opacity-100 scale-100'
                         }`}
                         style={{
                           fontWeight: '300',
                           fontSize: '2.5rem',
                           color: '#374151',
                           lineHeight: '1'
                         }}
                         onMouseEnter={(e) => {
                           e.currentTarget.style.color = '#111827';
                         }}
                         onMouseLeave={(e) => {
                           e.currentTarget.style.color = '#374151';
                         }}
                         disabled={isModalImageChanging}
                       >
                         ›
                       </button>
                      
                      {/* Gallery Counter */}
                      <div className={`absolute bottom-2 sm:bottom-4 right-2 sm:right-4 bg-black/50 text-white px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm transition-all duration-300 ${
                        isModalImageChanging ? 'opacity-50 scale-95' : 'opacity-100 scale-100'
                      }`}>
                        {modalGalleryIndex + 1} / {images.length + allGalleryImages.length}
                      </div>
                    </>
                  )}
                </div>
              ) : modalMediaItem.src.includes('vimeo.com') ? (
                <iframe
                  src={`https://player.vimeo.com/video/${modalMediaItem.src.split('/').pop()}?autoplay=1&loop=0&muted=0&controls=1`}
                  className="max-w-full max-h-[70vh] sm:max-h-[80vh] rounded-lg shadow-2xl"
                  style={{ width: '100%', height: 'auto', aspectRatio: '16/9' }}
                  frameBorder="0"
                  allow="autoplay; fullscreen; picture-in-picture"
                  allowFullScreen
                />
              ) : (
                <video
                  src={modalMediaItem.src}
                  className="max-w-full max-h-[80vh] rounded-lg shadow-2xl"
                  controls
                  autoPlay
                />
              )}
            </div>
          </div>
        </div>
      )}
    </div>
    </>
  );
}
