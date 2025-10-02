'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isWorkshopDropdownOpen, setIsWorkshopDropdownOpen] = useState(false);
  const [workshopDropdownTimeout, setWorkshopDropdownTimeout] = useState<NodeJS.Timeout | null>(null);
  const pathname = usePathname();
  const isHomepage = pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 50);
    };

    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Element;
      if (isWorkshopDropdownOpen && !target.closest('[data-workshop-dropdown]')) {
        setIsWorkshopDropdownOpen(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    document.addEventListener('mousedown', handleClickOutside);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isWorkshopDropdownOpen]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const toggleWorkshopDropdown = () => {
    setIsWorkshopDropdownOpen(!isWorkshopDropdownOpen);
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-20 transition-all duration-300 ${
        isScrolled 
          ? 'bg-black/90 backdrop-blur-md border-b border-white/20 shadow-lg' 
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo/Title */}
          <div className="website-title">
            <Link href="/" className="hover:text-green-600 transition-colors">
              Angela Lamprianidou
            </Link>
          </div>
          
          {/* Desktop Navigation Menu */}
          <nav className="hidden md:flex items-center space-x-6">
            <Link href="/" className={`website-text font-bold transition-colors ${
              isHomepage 
                ? '!text-green-600 hover:!text-green-600' 
                : 'text-white hover:text-green-600'
            }`}>
              Home
            </Link>
            <Link href="/bio" className="website-text font-bold hover:text-green-600 transition-colors">
              Bio
            </Link>
            <Link href="/press" className="website-text font-bold hover:text-green-600 transition-colors">
              Press
            </Link>
            <Link href="/contact" className="website-text font-bold hover:text-green-600 transition-colors">
              Contact
            </Link>
            <Link href="/collaborations" className="website-text font-bold hover:text-green-600 transition-colors">
              Collaborations
            </Link>
            
            {/* Workshop Dropdown */}
            <div className="relative" data-workshop-dropdown>
              <button
                onClick={toggleWorkshopDropdown}
                className="website-text font-bold hover:!text-green-600 transition-colors"
              >
                Workshop
              </button>
              
              <div 
                className={`absolute top-full left-0 w-64 bg-black/95 backdrop-blur-md border border-white/20 rounded-lg shadow-lg py-2 z-30 transition-all duration-300 ease-in-out ${
                  isWorkshopDropdownOpen 
                    ? 'opacity-100 transform translate-y-0 pointer-events-auto' 
                    : 'opacity-0 transform -translate-y-2 pointer-events-none'
                }`}
                style={{ marginTop: '0px' }}
              >
                  <Link href="/workshop/jaw-release" className="block px-4 py-2 text-sm text-white/80 hover:text-green-400 hover:bg-white/10 transition-colors">
                    Jaw and Body Release
                  </Link>
                  <Link href="/workshop/raw-man-tick" className="block px-4 py-2 text-sm text-white/80 hover:text-green-400 hover:bg-white/10 transition-colors">
                    RAW-MAN-TICK
                  </Link>
                  <Link href="/workshop/you-are-point" className="block px-4 py-2 text-sm text-white/80 hover:text-green-400 hover:bg-white/10 transition-colors">
                    You are the point
                  </Link>
                  <Link href="/workshop/life-choreography" className="block px-4 py-2 text-sm text-white/80 hover:text-green-400 hover:bg-white/10 transition-colors">
                    Lifechoreography
                  </Link>
                  <Link href="/workshop/expansion" className="block px-4 py-2 text-sm text-white/80 hover:text-green-400 hover:bg-white/10 transition-colors">
                    Expansion and Explosion
                  </Link>
                  <Link href="/workshop/dance-news" className="block px-4 py-2 text-sm text-white/80 hover:text-green-400 hover:bg-white/10 transition-colors">
                    Dance News
                  </Link>
                  <Link href="/workshop/zeitgeist" className="block px-4 py-2 text-sm text-white/80 hover:text-green-400 hover:bg-white/10 transition-colors">
                    Gegen den Zeitgeist
                  </Link>
                  <Link href="/workshop/flipflop" className="block px-4 py-2 text-sm text-white/80 hover:text-green-400 hover:bg-white/10 transition-colors">
                    Flip Flop for everyone
                  </Link>
                  <Link href="/workshop/yoga" className="block px-4 py-2 text-sm text-white/80 hover:text-green-400 hover:bg-white/10 transition-colors">
                    Yoga - Composition - Dance
                  </Link>
                  <Link href="/workshop/composition" className="block px-4 py-2 text-sm text-white/80 hover:text-green-400 hover:bg-white/10 transition-colors">
                    Composition
                  </Link>
                  <Link href="/workshop/cia" className="block px-4 py-2 text-sm text-white/80 hover:text-green-400 hover:bg-white/10 transition-colors">
                    CIA
                  </Link>
                  <Link href="/workshop/ta-panta-rei" className="block px-4 py-2 text-sm text-white/80 hover:text-green-400 hover:bg-white/10 transition-colors">
                    Ta Panta Rei - Seniors
                  </Link>
                </div>
            </div>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMobileMenu}
            className="md:hidden text-white hover:text-green-600 transition-colors"
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
        {isMobileMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 border-t border-white/20 pt-4">
            <div className="flex flex-col space-y-4">
              <Link 
                href="/" 
                className={`website-text font-bold transition-colors ${
                  isHomepage 
                    ? '!text-green-600 hover:!text-green-600' 
                    : 'text-white hover:text-green-600'
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Home
              </Link>
              <Link 
                href="/bio" 
                className="website-text font-bold hover:text-green-600 transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Bio
              </Link>
              <Link 
                href="/press" 
                className="website-text font-bold hover:text-green-600 transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Press
              </Link>
              <Link 
                href="/contact" 
                className="website-text font-bold hover:text-green-600 transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Contact
              </Link>
              <Link 
                href="/collaborations" 
                className="website-text font-bold hover:text-green-600 transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Collaborations
              </Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
