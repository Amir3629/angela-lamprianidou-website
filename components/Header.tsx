'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface HeaderProps {
  onWorkshopToggle?: () => void;
  onChoreographerToggle?: () => void;
  onExperiencesToggle?: () => void;
  alwaysVisible?: boolean;
}

export default function Header({ onWorkshopToggle, onChoreographerToggle, onExperiencesToggle, alwaysVisible = false }: HeaderProps = {}) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const isHomepage = pathname === '/';
  const isWhiteBackgroundPage = pathname === '/' || pathname.startsWith('/Per4mer/') || pathname.startsWith('/workshop/') || pathname.startsWith('/energy-shifting') || pathname.startsWith('/per-se-present') || pathname.startsWith('/news-dates') || pathname.startsWith('/bio') || pathname.startsWith('/press') || pathname.startsWith('/contact') || pathname.startsWith('/collaborations') || pathname.startsWith('/choreographer') || pathname.startsWith('/experiences') || pathname.startsWith('/you-are-the-point') || pathname === '/pure' || pathname === '/homemotion';
  const isBioPage = pathname === '/bio';

  // Debug logging removed for production build

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const newIsScrolled = scrollTop > 20;
      // Debug logging removed for production build
      setIsScrolled(newIsScrolled);
    };

    // Add scroll listener immediately
    window.addEventListener('scroll', handleScroll);
    
    // Also call handleScroll once to set initial state
    handleScroll();
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      {/* Static header with smooth black to white gradient transition */}
      <header 
        className="fixed top-0 left-0 right-0 z-20"
      >
      <div className="max-w-7xl mx-auto pl-2 pr-2 sm:pl-4 sm:pr-4 md:pl-0 md:pr-6 py-2 sm:py-4">
        <div className="flex items-center justify-between">
          {/* Logo/Title */}
          <div className="flex items-center space-x-2 sm:space-x-4">
            <img 
              src="/green-shoe-logo.png" 
              alt="Angela Lamprianidou Logo" 
              className="h-16 w-16 sm:h-20 sm:w-20 md:h-23 md:w-23 object-contain rounded-full"
            />
            <Link 
              href="/" 
              className="font-bold transition-colors !text-white  text-sm sm:text-base md:text-lg leading-tight header-logo-link"
              style={{ color: '#ffffff !important', textDecoration: 'none' }}
            >
              <span className="hidden sm:inline">Angela Lamprianidou</span>
              <span className="sm:hidden">A. Lamprianidou</span>
            </Link>
          </div>
          
          {/* Desktop Navigation Menu */}
          <nav className="hidden md:flex items-center space-x-6">
            {onChoreographerToggle ? (
              <button 
                onClick={onChoreographerToggle}
                className="font-bold transition-colors cursor-pointer !text-white "
              >
                Choreographies
              </button>
            ) : (
              <Link href="/choreographer" className="font-bold transition-colors !text-white" style={{ textDecoration: 'none' }}>
                Choreographies
              </Link>
            )}
            {onWorkshopToggle ? (
              <button 
                onClick={onWorkshopToggle}
                className="font-bold transition-colors cursor-pointer !text-white "
              >
                Workshops
              </button>
            ) : (
              <Link href="/choreographer?showWorkshop=true" className="font-bold transition-colors !text-white" style={{ textDecoration: 'none' }}>
                Workshops
              </Link>
            )}
            {onExperiencesToggle ? (
              <button 
                onClick={onExperiencesToggle}
                className="font-bold transition-colors cursor-pointer !text-white "
              >
                Experiences
              </button>
            ) : (
              <Link href="/choreographer?showExperiences=true" className="font-bold transition-colors !text-white" style={{ textDecoration: 'none' }}>
                Experiences
              </Link>
            )}
            <Link href="/you-are-the-point" className="font-bold transition-colors !text-white" style={{ textDecoration: 'none' }}>
              You are the point
            </Link>
            <Link href="/news-dates" className="font-bold transition-colors !text-white" style={{ textDecoration: 'none' }}>
              News-Dates
            </Link>
            <Link href="/press" className="font-bold transition-colors !text-white" style={{ textDecoration: 'none' }}>
              Press Link
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMobileMenu}
            className="md:hidden transition-colors text-white touch-target"
            aria-label="Toggle mobile menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        <div className={`md:hidden transition-all duration-300 ease-in-out overflow-hidden ${
          isMobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}>
          <nav className="mt-4 pb-4 border-t border-white/20 pt-4 bg-black/95 backdrop-blur-md rounded-lg mx-1 sm:mx-2 px-3 sm:px-4 mobile-menu">
            <div className="flex flex-col space-y-3 sm:space-y-4">
              {onChoreographerToggle ? (
                <button 
                  onClick={() => {
                    onChoreographerToggle();
                    setIsMobileMenuOpen(false);
                  }}
                  className="!text-white  transition-colors duration-200 font-bold text-left text-sm sm:text-base touch-target"
                >
                  Choreographies
                </button>
              ) : (
                <Link 
                  href="/choreographer" 
                  className="!text-white  transition-colors duration-200 font-bold text-sm sm:text-base touch-target"
                  style={{ textDecoration: 'none' }}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Choreographies
                </Link>
              )}
              {onWorkshopToggle ? (
                <button 
                  onClick={() => {
                    onWorkshopToggle();
                    setIsMobileMenuOpen(false);
                  }}
                  className="!text-white  transition-colors duration-200 font-bold text-left text-sm sm:text-base touch-target"
                >
                  Workshops
                </button>
              ) : (
                <Link 
                  href="/choreographer?showWorkshop=true" 
                  className="!text-white  transition-colors duration-200 font-bold text-sm sm:text-base touch-target"
                  style={{ textDecoration: 'none' }}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Workshops
                </Link>
              )}
              {onExperiencesToggle ? (
                <button 
                  onClick={() => {
                    onExperiencesToggle();
                    setIsMobileMenuOpen(false);
                  }}
                  className="!text-white  transition-colors duration-200 font-bold text-left text-sm sm:text-base touch-target"
                >
                  Experiences
                </button>
              ) : (
                <Link 
                  href="/choreographer?showExperiences=true" 
                  className="!text-white  transition-colors duration-200 font-bold text-sm sm:text-base touch-target"
                  style={{ textDecoration: 'none' }}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Experiences
                </Link>
              )}
              <Link 
                href="/you-are-the-point" 
                className="!text-white  transition-colors duration-200 font-bold text-sm sm:text-base touch-target"
                style={{ textDecoration: 'none' }}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                You are the point
              </Link>
              <Link 
                href="/news-dates" 
                className="!text-white  transition-colors duration-200 font-bold text-sm sm:text-base touch-target"
                style={{ textDecoration: 'none' }}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                News-Dates
              </Link>
              <Link 
                href="/press" 
                className="!text-white  transition-colors duration-200 font-bold text-sm sm:text-base touch-target"
                style={{ textDecoration: 'none' }}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Press Link
              </Link>
            </div>
          </nav>
        </div>
      </div>
    </header>
    </>
  );
}