'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Header from './Header';
import { convertUrlsToLinks } from '../lib/urlUtils';

interface MediaItem {
  src: string;
  alt: string;
  type: 'image' | 'video';
  title?: string;
  caption?: string;
  credit?: string;
}

interface MediaGalleryProps {
  mediaItems: MediaItem[];
  title: string | React.ReactNode;
  description?: string;
  additionalInfo?: string;
  photographer?: string;
  rightImageSrc?: string;
  className?: string;
}

export default function MediaGallery({
  mediaItems,
  title,
  description,
  additionalInfo,
  photographer,
  rightImageSrc,
  className = "",
  disableBackground = false
}: MediaGalleryProps & { disableBackground?: boolean }) {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isChanging, setIsChanging] = useState(false);
  const [isModalClosing, setIsModalClosing] = useState(false);

  const selectedMedia = mediaItems[selectedIndex];

  // Auto-advance slideshow - change image every 8 seconds
  useEffect(() => {
    if (mediaItems.length <= 1) return; // Don't auto-advance if only one item
    
    const interval = setInterval(() => {
      setIsChanging(true);
      setTimeout(() => {
        setSelectedIndex((prev) => (prev < mediaItems.length - 1 ? prev + 1 : 0));
        setIsChanging(false);
      }, 1000); // Smooth 1000ms (1 second) transition
    }, 8000); // Change every 8 seconds

    return () => clearInterval(interval);
  }, [mediaItems.length]);

  const openModal = () => {
    setIsModalClosing(false);
    setIsModalOpen(true);
  };
  
  const closeModal = () => {
    setIsModalClosing(true);
    setTimeout(() => {
      setIsModalOpen(false);
      setIsModalClosing(false);
    }, 300);
  };

  const handleThumbnailClick = (index: number) => {
    if (index !== selectedIndex) {
      setIsChanging(true);
      setTimeout(() => {
        setSelectedIndex(index);
        setIsChanging(false);
      }, 1000);
    }
  };

  const handlePrevious = () => {
    setIsChanging(true);
    setTimeout(() => {
      setSelectedIndex((prev) => (prev > 0 ? prev - 1 : mediaItems.length - 1));
      setIsChanging(false);
    }, 1000);
  };

  const handleNext = () => {
    setIsChanging(true);
    setTimeout(() => {
      setSelectedIndex((prev) => (prev < mediaItems.length - 1 ? prev + 1 : 0));
      setIsChanging(false);
    }, 1000);
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') handlePrevious();
      if (e.key === 'ArrowRight') handleNext();
      if (e.key === 'Escape') closeModal();
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, []);

  return (
    <div 
      className={`min-h-screen relative overflow-hidden ${disableBackground ? '' : 'bg-black'} text-white website-font ${className}`}
      style={{
        backgroundImage: disableBackground ? 'none' : `url('/entire_website_background.jpg')`,
        backgroundSize: '100% auto',
        backgroundPosition: 'top center',
        backgroundRepeat: 'repeat-y'
      }}
    >
      {/* Dynamic Header */}
      <Header />

      {/* Main Content - Original Style */}
      <div className="relative z-10 min-h-screen mt-20 ml-4 md:ml-18 pb-10 pr-4 md:pr-8">
        <div className="max-w-none">

          {/* Layout: Images in corners, text flows around them like newspaper */}
          <div className="relative">
            {/* Top Left Image Container - Float left for text wrapping */}
            <div className="float-left w-full md:w-[500px] mr-0 md:mr-8 mb-4 space-y-4 media-display-container">
              {/* Main Display Screen */}
              <div className="relative group">
                <div 
                  className="relative w-full border-2 border-transparent rounded-lg overflow-hidden cursor-pointer transition-all duration-300 hover:border-green-600"
                  style={{ aspectRatio: '1169/826' }}
                  onClick={openModal}
                >
                    {selectedMedia && selectedMedia.type === 'image' ? (
                      <Image
                        src={selectedMedia.src}
                        alt={selectedMedia.alt}
                        fill
                        className={`object-contain transition-opacity duration-[1000ms] ease-in-out group-hover:scale-105 ${isChanging ? 'opacity-0' : 'opacity-100'}`}
                        sizes="500px"
                      />
                    ) : selectedMedia && selectedMedia.type === 'video' ? (
                      selectedMedia.src.includes('vimeo.com') ? (
                        <iframe
                          src={`https://player.vimeo.com/video/${selectedMedia.src.split('/').pop()}?autoplay=0&loop=0&muted=1&controls=1`}
                          className={`w-full h-full transition-opacity duration-[1000ms] ease-in-out ${isChanging ? 'opacity-0' : 'opacity-100'}`}
                          frameBorder="0"
                          allow="autoplay; fullscreen; picture-in-picture"
                          allowFullScreen
                        />
                      ) : selectedMedia.src.includes('youtube.com') || selectedMedia.src.includes('youtu.be') ? (
                        <iframe
                          src={selectedMedia.src}
                          className={`w-full h-full transition-opacity duration-[1000ms] ease-in-out ${isChanging ? 'opacity-0' : 'opacity-100'}`}
                          frameBorder="0"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                        />
                      ) : (
                        <video
                          src={selectedMedia.src}
                          className={`w-full h-full object-contain transition-opacity duration-[600ms] ease-in-out ${isChanging ? 'opacity-0' : 'opacity-100'}`}
                          controls
                          muted
                        />
                      )
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-white/50">
                      No media available
                    </div>
                  )}
                  
                  {/* Navigation Arrows - Only show if multiple images */}
                  {mediaItems.length > 1 && (
                    <>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          handlePrevious();
                        }}
                        className="absolute left-2 top-1/2 -translate-y-1/2 text-white/80 hover:text-white text-2xl transition-all duration-300 opacity-0 group-hover:opacity-100 hover:scale-125"
                      >
                        ‹
                      </button>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          handleNext();
                        }}
                        className="absolute right-2 top-1/2 -translate-y-1/2 text-white/80 hover:text-white text-2xl transition-all duration-300 opacity-0 group-hover:opacity-100 hover:scale-125"
                      >
                        ›
                      </button>
                    </>
                  )}

                  {/* Media Counter - Only show if multiple images */}
                  {mediaItems.length > 1 && (
                  <div className="absolute bottom-4 right-4 bg-black/60 text-white website-small px-2 py-1 rounded">
                    {selectedIndex + 1} / {mediaItems.length}
                  </div>
                  )}

                  {/* Photo Credit */}
                  {selectedMedia && selectedMedia.credit && (
                    <div className="absolute bottom-4 left-4 text-white/80 website-small">
                      {selectedMedia.credit}
                    </div>
                  )}
                </div>
              </div>

              {/* Thumbnails - Only show if multiple images */}
              {mediaItems.length > 1 && (
                <div className="relative">
                  <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
                    {mediaItems.map((item, index) => (
                      <div
                        key={index}
                        className={`relative flex-shrink-0 w-20 h-20 cursor-pointer rounded transition-all duration-200 ${
                          index === selectedIndex
                            ? 'ring-2 ring-green-600'
                            : 'hover:ring-2 hover:ring-white/40'
                        }`}
                        onClick={() => handleThumbnailClick(index)}
                      >
                        {item.type === 'image' ? (
                          <Image
                            src={item.src}
                            alt={item.alt}
                            fill
                            className="object-contain rounded"
                            sizes="80px"
                          />
                        ) : item.src.includes('vimeo.com') ? (
                          <Image
                            src={`https://vumbnail.com/${item.src.split('/').pop()}.jpg`}
                            alt={item.alt}
                            fill
                            className="object-cover rounded"
                            sizes="80px"
                          />
                        ) : item.src.includes('youtube.com') || item.src.includes('youtu.be') ? (
                          <Image
                            src={`https://img.youtube.com/vi/${item.src.includes('embed/') ? item.src.split('embed/')[1].split('?')[0] : item.src.split('v=')[1].split('&')[0]}/hqdefault.jpg`}
                            alt={item.alt}
                            fill
                            className="object-cover rounded"
                            sizes="80px"
                          />
                        ) : item.src.endsWith('.mp4') || item.src.endsWith('.mov') ? (
                          <div className="relative w-full h-full bg-gray-800 rounded overflow-hidden">
                            <video
                              src={item.src}
                              className="w-full h-full object-cover"
                              muted
                              playsInline
                            />
                            <div className="absolute inset-0 flex items-center justify-center bg-black/30">
                              <div className="text-white text-2xl">▶</div>
                            </div>
                          </div>
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

              {/* Copyright/Photographer */}
              {photographer && (
                <p className="website-small">© {photographer}</p>
              )}
            </div>

            {/* Text Content - Original Style */}
            <div className="space-y-4">
              {description && (
                <div>
                  <p className="website-text whitespace-pre-wrap">
                    {description.split('\n').map((line, index) => (
                      index === 0 ? (
                        <span key={index} className="website-title block mb-2">
                          {convertUrlsToLinks(line)}
                        </span>
                      ) : (
                        <span key={index}>
                          {convertUrlsToLinks(line)}
                          {index < description.split('\n').length - 1 && '\n'}
                        </span>
                      )
                    ))}
                  </p>
                  
                  {/* Right Image - Float right at the very end of description */}
                  {rightImageSrc && (
                    <div className="float-right w-full md:w-96 ml-0 md:ml-4 mb-4 mt-4">
                      <Image
                        src={rightImageSrc}
                        alt="Performance image"
                        width={384}
                        height={384}
                        className="object-cover rounded-lg w-full"
                      />
                    </div>
                  )}
                </div>
              )}

              {additionalInfo && (
                <div>
                  {/* Bottom Right Image - Float right for text wrapping */}
                  <div className="float-right w-full md:w-96 ml-0 md:ml-4 mb-4 mt-8">
                    <Image
                      src="/bottom_right_image.png"
                      alt="Performance image"
                      width={384}
                      height={384}
                      className="object-cover rounded-lg w-full"
                    />
                  </div>
                  
                  <pre className="website-text whitespace-pre-wrap">
                    {convertUrlsToLinks(additionalInfo)}
                  </pre>
                </div>
              )}
            </div>

            {/* Clear float to prevent layout issues */}
            <div className="clear-both"></div>
          </div>
        </div>

      </div>

      {/* Modal for Full Size Media */}
      {isModalOpen && (
        <div
          className={`fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-sm transition-all duration-300 ${
            isModalClosing ? 'opacity-0' : 'opacity-100'
          }`}
          onClick={closeModal}
        >
          <div
            className={`relative max-w-6xl max-h-[90vh] p-4 transition-all duration-300 ${
              isModalClosing ? 'opacity-0 scale-95' : 'opacity-100 scale-100'
            }`}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={closeModal}
              className="absolute -top-2 -right-2 z-10 bg-black/70 hover:bg-black/90 text-white rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold transition-all duration-300 hover:scale-110 shadow-lg border border-white/30 hover:border-white/60"
            >
              ×
            </button>
            
            <div className="relative">
                {selectedMedia.type === 'image' ? (
                  <Image
                    src={selectedMedia.src}
                    alt={selectedMedia.alt}
                    width={1200}
                    height={800}
                    className={`max-w-full max-h-[80vh] object-contain rounded-lg shadow-2xl transition-all duration-700 ease-in-out ${
                      isChanging ? 'opacity-50' : 'opacity-100'
                    }`}
                  />
                ) : selectedMedia.src.includes('vimeo.com') ? (
                  <iframe
                    src={`https://player.vimeo.com/video/${selectedMedia.src.split('/').pop()}?autoplay=1&loop=0&muted=0&controls=1`}
                    className={`max-w-full max-h-[80vh] rounded-lg shadow-2xl transition-all duration-700 ease-in-out ${
                      isChanging ? 'opacity-50' : 'opacity-100'
                    }`}
                    frameBorder="0"
                    allow="autoplay; fullscreen; picture-in-picture"
                    allowFullScreen
                  />
                ) : (
                  <video
                    src={selectedMedia.src}
                    className={`max-w-full max-h-[80vh] rounded-lg shadow-2xl transition-all duration-700 ease-in-out ${
                      isChanging ? 'opacity-50' : 'opacity-100'
                    }`}
                    controls
                    autoPlay
                  />
                )}
            </div>

            {/* Modal Navigation - Only show if multiple images */}
            {mediaItems.length > 1 && (
              <div className="flex justify-between items-center mt-4">
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    handlePrevious();
                  }}
                  className="bg-black/70 hover:bg-black/90 text-white px-6 py-3 rounded-lg transition-all duration-300 hover:scale-105 shadow-lg border border-white/30 hover:border-white/60"
                >
                  Previous
                </button>
                <span className="text-white website-small bg-black/70 px-4 py-2 rounded-lg border border-white/30">
                  {selectedIndex + 1} / {mediaItems.length}
                </span>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    handleNext();
                  }}
                className="bg-black/70 hover:bg-black/90 text-white px-6 py-3 rounded-lg transition-all duration-300 hover:scale-105 shadow-lg border border-white/30 hover:border-white/60"
              >
                Next
              </button>
            </div>
            )}

            {/* Modal Thumbnails - Only show if multiple images */}
            {mediaItems.length > 1 && (
              <div className="flex gap-2 mt-4 justify-center overflow-x-auto">
                {mediaItems.map((item, index) => (
                  <div
                    key={index}
                    className={`relative flex-shrink-0 w-16 h-16 cursor-pointer border-2 rounded transition-all duration-200 ${
                      index === selectedIndex 
                        ? 'border-green-600' 
                        : 'border-white/20 hover:border-white/40'
                    }`}
                    onClick={(e) => {
                      e.stopPropagation();
                      handleThumbnailClick(index);
                  }}
                >
                  {item.type === 'image' ? (
                    <Image
                      src={item.src}
                      alt={item.alt}
                      fill
                      className="object-contain rounded"
                      sizes="64px"
                    />
                  ) : item.src.includes('vimeo.com') ? (
                    <Image
                      src={`https://vumbnail.com/${item.src.split('/').pop()}.jpg`}
                      alt={item.alt}
                      fill
                      className="object-cover rounded"
                      sizes="64px"
                    />
                  ) : (
                    <div className="w-full h-full bg-gray-800 flex items-center justify-center text-white text-xs">
                      ▶
                    </div>
                  )}
                </div>
              ))}
            </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}