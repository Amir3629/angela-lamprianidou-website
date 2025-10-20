'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useSearchParams } from 'next/navigation';
import Header from '../../components/Header';
import { choreographerGalleryItems } from '../../data/choreographerGallery';
import { workshopGalleryItems } from '../../data/workshopGallery';
import { experiencesGalleryItems } from '../../data/experiencesGallery';

export default function Choreographer2Page() {
  const searchParams = useSearchParams();
  const [showWorkshop, setShowWorkshop] = useState(false);
  const [showExperiences, setShowExperiences] = useState(false);

  useEffect(() => {
    // Check if user came from header "Experiences" button
    const showExperiencesParam = searchParams.get('showExperiences');
    if (showExperiencesParam === 'true') {
      setShowExperiences(true);
      setShowWorkshop(false);
    }
  }, [searchParams]);

  const toggleWorkshop = () => {
    setShowWorkshop(!showWorkshop);
    setShowExperiences(false);
  };

  const toggleChoreographer = () => {
    setShowWorkshop(false);
    setShowExperiences(false);
  };

  const toggleExperiences = () => {
    setShowExperiences(!showExperiences);
    setShowWorkshop(false);
  };

  return (
    <div className="bg-black text-white min-h-screen">
      <Header 
        onChoreographerToggle={toggleChoreographer}
        onWorkshopToggle={toggleWorkshop}
        alwaysVisible={true}
      />

      {/* Title Section */}
      <div className="pt-20 md:pt-32 px-4 md:px-6 lg:pl-24">
         <div className="text-base md:text-lg font-bold mb-8">
          <button 
            onClick={toggleChoreographer}
            className={`transition-all duration-300 cursor-pointer ${
              !showWorkshop && !showExperiences 
                ? 'text-white' 
                : 'text-gray-400 hover:text-white'
            }`}
            style={{ textDecoration: 'none' }}
          >
            Choreographies
          </button>
          &nbsp;&amp;&nbsp;
          <button 
            onClick={toggleWorkshop}
            className={`transition-all duration-300 cursor-pointer ${
              showWorkshop 
                ? 'text-white' 
                : 'text-gray-400 hover:text-white'
            }`}
            style={{ textDecoration: 'none' }}
          >
            Teaching
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="px-0 md:px-0 lg:px-2 pb-20">
        {/* Choreographer Gallery */}
        <div className={`transition-all duration-700 ease-in-out ${
          !showWorkshop && !showExperiences 
            ? 'opacity-100 transform translate-x-0' 
            : 'opacity-0 transform translate-x-[-50px] pointer-events-none absolute top-0 left-0 w-full h-0 overflow-hidden'
        }`}>
          <div className="w-full gallery-columns">
            {choreographerGalleryItems.map((item, index) => (
              <Link key={index} href={item.href} className="block">
                <div className="bg-white border-2 border-black flex flex-col mb-2" style={{ breakInside: 'avoid', display: 'inline-block', width: '100%' }}>
                  <div className="p-4" style={{ minHeight: 'auto', height: 'auto' }}>
                    <div style={{ 
                      color: '#000000',
                      fontSize: '19px',
                      fontWeight: '700',
                      fontFamily: '"Domestic Manners", cursive',
                      lineHeight: '21px',
                      margin: 0,
                      padding: 0
                    }}>
                      {item.title === "Homεmotion" ? (
                        <>
                          Hom<span style={{ color: 'red' }}>ε</span>motion
                        </>
                      ) : (
                        item.title
                      )}
                    </div>
                  </div>
                  <div className="relative">
                    <Image
                      src={item.image}
                      alt={item.alt}
                      width={650}
                      height={812}
                      className="w-full h-auto object-cover"
                    />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Workshop Gallery */}
        <div className={`transition-all duration-700 ease-in-out ${
          showWorkshop 
            ? 'opacity-100 transform translate-x-0' 
            : 'opacity-0 transform translate-x-[50px] pointer-events-none absolute top-0 left-0 w-full h-0 overflow-hidden'
        }`}>
          <div className="w-full gallery-columns">
            {workshopGalleryItems.map((item, index) => (
              <Link key={index} href={item.href} className="block">
                <div className="bg-white border-2 border-black flex flex-col mb-2" style={{ breakInside: 'avoid', display: 'inline-block', width: '100%' }}>
                  <div className="p-4" style={{ minHeight: 'auto', height: 'auto' }}>
                    <div style={{ 
                      color: '#000000',
                      fontSize: '19px',
                      fontWeight: '700',
                      fontFamily: '"Domestic Manners", cursive',
                      lineHeight: '21px',
                      margin: 0,
                      padding: 0
                    }}>
                      {item.title === "Homεmotion" ? (
                        <>
                          Hom<span style={{ color: 'red' }}>ε</span>motion
                        </>
                      ) : (
                        item.title
                      )}
                    </div>
                  </div>
                  <div className="relative">
                    <Image
                      src={item.image}
                      alt={item.alt}
                      width={650}
                      height={812}
                      className="w-full h-auto object-cover"
                    />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Experiences Gallery */}
        <div className={`transition-all duration-700 ease-in-out ${
          showExperiences 
            ? 'opacity-100 transform translate-x-0' 
            : 'opacity-0 transform translate-x-[50px] pointer-events-none absolute top-0 left-0 w-full h-0 overflow-hidden'
        }`}>
          <div className="w-full gallery-columns">
            {experiencesGalleryItems.map((item, index) => (
              <Link key={index} href={item.href} className="block">
                <div className="bg-white border-2 border-black flex flex-col mb-2" style={{ breakInside: 'avoid', display: 'inline-block', width: '100%' }}>
                  <div className="p-4" style={{ minHeight: 'auto', height: 'auto' }}>
                    <div style={{ 
                      color: '#000000',
                      fontSize: '19px',
                      fontWeight: '700',
                      fontFamily: '"Domestic Manners", cursive',
                      lineHeight: '21px',
                      margin: 0,
                      padding: 0
                    }}>
                      {item.title === "Homεmotion" ? (
                        <>
                          Hom<span style={{ color: 'red' }}>ε</span>motion
                        </>
                      ) : (
                        item.title
                      )}
                    </div>
                  </div>
                  <div className="relative">
                    <Image
                      src={item.image}
                      alt={item.alt}
                      width={650}
                      height={812}
                      className="w-full h-auto object-cover"
                    />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
