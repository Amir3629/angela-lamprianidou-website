'use client';

import { useState } from 'react';

interface InteractiveImageProps {
  src: string;
  alt: string;
  className?: string;
  style?: React.CSSProperties;
  caption?: string;
}

export default function InteractiveImage({ 
  src, 
  alt, 
  className = "", 
  style = {},
  caption 
}: InteractiveImageProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <>
      <div 
        className={`relative group cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-2xl ${className}`}
        onClick={openModal}
        style={style}
      >
        <img
          src={src}
          alt={alt}
          className="w-full h-auto object-contain transition-all duration-300 group-hover:brightness-110"
        />
        {caption && (
          <p className="text-sm text-white/60 mt-2  transition-colors duration-300">
            {caption}
          </p>
        )}
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm p-4"
          onClick={closeModal}
        >
          <div className="relative max-w-7xl max-h-[90vh] w-full">
            <button
              onClick={closeModal}
              className="absolute top-2 right-2 md:top-4 md:right-4 text-white text-xl md:text-2xl  transition-colors z-10 bg-black/50 rounded-full w-8 h-8 md:w-10 md:h-10 flex items-center justify-center"
            >
              ×
            </button>
            <img
              src={src}
              alt={alt}
              className="max-w-full max-h-full object-contain rounded-lg"
            />
            {caption && (
              <p className="text-white text-center mt-4 text-sm md:text-lg">
                {caption}
              </p>
            )}
          </div>
        </div>
      )}
    </>
  );
}