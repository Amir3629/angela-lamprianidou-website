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

interface MediaGallerySeparatedProps {
  mediaItems: MediaItem[];
  title: string | React.ReactNode;
  description?: string;
  additionalInfo?: string;
  photographer?: string;
  className?: string;
}

export default function MediaGallerySeparated({
  mediaItems,
  title,
  description,
  additionalInfo,
  photographer,
  className = ""
}: MediaGallerySeparatedProps) {
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [selectedVideoIndex, setSelectedVideoIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isChanging, setIsChanging] = useState(false);
  const [isVideoChanging, setIsVideoChanging] = useState(false);
  const [isModalClosing, setIsModalClosing] = useState(false);
  const [modalMediaItem, setModalMediaItem] = useState<MediaItem | null>(null);

  // Separate images and videos
  const images = mediaItems.filter(item => item.type === 'image');
  const videos = mediaItems.filter(item => item.type === 'video');

  const selectedImage = images[selectedImageIndex];
  const selectedVideo = videos[selectedVideoIndex];

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
    setIsModalOpen(true);
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
      className={`min-h-screen relative overflow-hidden text-white website-font ${className}`}
    >
      {/* Dynamic Header */}
      <Header />

      {/* Main Content */}
      <div className="relative z-10 min-h-screen mt-20 ml-4 md:ml-18 pb-10 pr-4 md:pr-8">
        <div className="max-w-none">

          {/* Title */}
          {title && (
            <h1 className="website-title mb-8">{title}</h1>
          )}

          {/* Images Section - Big display at the top CENTER */}
          {images.length > 0 && (
            <div className="mb-8 flex justify-center">
              <div className="w-full max-w-4xl space-y-4 media-display-container">
                {/* Main Image Display */}
                <div className="relative group">
                  <div 
                    className="relative w-full border-2 border-transparent rounded-lg overflow-hidden cursor-pointer transition-all duration-300 hover:border-green-600"
                    style={{ aspectRatio: '1169/826' }}
                    onClick={() => selectedImage && openModal(selectedImage)}
                  >
                    {selectedImage && (
                      <Image
                        src={selectedImage.src}
                        alt={selectedImage.alt}
                        fill
                        className={`object-contain transition-opacity duration-[1000ms] ease-in-out group-hover:scale-105 ${isChanging ? 'opacity-0' : 'opacity-100'}`}
                        sizes="1024px"
                      />
                    )}
                    
                    {/* Navigation Arrows - Only show if multiple images */}
                    {images.length > 1 && (
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

                    {/* Image Counter */}
                    {images.length > 1 && (
                      <div className="absolute bottom-4 right-4 bg-black/60 text-white website-small px-2 py-1 rounded">
                        {selectedImageIndex + 1} / {images.length}
                      </div>
                    )}
                  </div>
                </div>

                {/* Thumbnails - Only show if multiple images */}
                {images.length > 1 && (
                  <div className="relative">
                    <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide justify-center">
                      {images.map((item, index) => (
                        <div
                          key={index}
                          className={`relative flex-shrink-0 w-20 h-20 cursor-pointer rounded transition-all duration-200 ${
                            index === selectedImageIndex
                              ? 'ring-2 ring-green-600'
                              : 'hover:ring-2 hover:ring-white/40'
                          }`}
                          onClick={() => handleThumbnailClick(index)}
                        >
                          <Image
                            src={item.src}
                            alt={item.alt}
                            fill
                            className="object-contain rounded"
                            sizes="80px"
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Photographer */}
                {photographer && (
                  <p className="website-small text-center">© {photographer}</p>
                )}
              </div>
            </div>
          )}

          {/* Videos Section - Big size below images, centered */}
          {videos.length > 0 && (
            <div className="mb-8 flex justify-center">
              <div className="w-full max-w-3xl space-y-4">
                {/* Main Video Display */}
                <div className="relative group">
                  <div 
                    className="relative w-full border-2 border-transparent rounded-lg overflow-hidden cursor-pointer transition-all duration-300 hover:border-green-600"
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
                            src={selectedVideo.src}
                            className={`w-full h-full transition-opacity duration-700 ease-in-out ${isVideoChanging ? 'opacity-50' : 'opacity-100'}`}
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
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
                    
                    {/* Navigation Arrows - Only show if multiple videos */}
                    {videos.length > 1 && (
                      <>
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            handleVideoPrevious();
                          }}
                          className="absolute left-2 top-1/2 -translate-y-1/2 text-white/80 hover:text-white text-2xl transition-all duration-300 opacity-0 group-hover:opacity-100 hover:scale-125 z-10"
                        >
                          ‹
                        </button>
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            handleVideoNext();
                          }}
                          className="absolute right-2 top-1/2 -translate-y-1/2 text-white/80 hover:text-white text-2xl transition-all duration-300 opacity-0 group-hover:opacity-100 hover:scale-125 z-10"
                        >
                          ›
                        </button>
                      </>
                    )}

                    {/* Video Counter */}
                    {videos.length > 1 && (
                      <div className="absolute bottom-4 right-4 bg-black/60 text-white website-small px-2 py-1 rounded z-10">
                        {selectedVideoIndex + 1} / {videos.length}
                      </div>
                    )}
                  </div>
                </div>

                {/* Video Thumbnails - Only show if multiple videos */}
                {videos.length > 1 && (
                  <div className="relative">
                    <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide justify-center">
                      {videos.map((video, index) => (
                        <div
                          key={index}
                          className={`relative flex-shrink-0 w-20 h-20 cursor-pointer rounded transition-all duration-200 ${
                            index === selectedVideoIndex
                              ? 'ring-2 ring-green-600'
                              : 'hover:ring-2 hover:ring-white/40'
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

          {/* Text Content */}
          <div className="space-y-4 mt-8">
            {description && (
              <div>
                <p className="website-text whitespace-pre-wrap">
                  {description.split('\n').map((line, index) => (
                    <span key={index}>
                      {convertUrlsToLinks(line)}
                      {index < description.split('\n').length - 1 && '\n'}
                    </span>
                  ))}
                </p>
              </div>
            )}

            {additionalInfo && (
              <div>
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

      {/* Modal for Full Size Media */}
      {isModalOpen && modalMediaItem && (
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
              {modalMediaItem.type === 'image' ? (
                <Image
                  src={modalMediaItem.src}
                  alt={modalMediaItem.alt}
                  width={1200}
                  height={800}
                  className="max-w-full max-h-[80vh] object-contain rounded-lg shadow-2xl"
                />
              ) : modalMediaItem.src.includes('vimeo.com') ? (
                <iframe
                  src={`https://player.vimeo.com/video/${modalMediaItem.src.split('/').pop()}?autoplay=1&loop=0&muted=0&controls=1`}
                  className="max-w-full max-h-[80vh] rounded-lg shadow-2xl"
                  style={{ width: '800px', height: '450px' }}
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
  );
}
