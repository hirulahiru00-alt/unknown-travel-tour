import React, { useState } from 'react';
import { UnknownTravelsLogo } from './BrandLogos';
import { Phone, Menu, X } from 'lucide-react';

interface NavbarProps {
  onPlanTripClick: () => void;
  onExploreToursClick: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  onPlanTripClick,
  onExploreToursClick,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-[#050505]/95 backdrop-blur-md border-b border-[#c9a84c]/20">
      <div className="max-w-[1440px] mx-auto px-6 h-20 flex items-center justify-between gap-4">
        
        {/* Zone 1: Brand Wordmark & Insignia */}
        <a href="#hero" className="flex items-center gap-3 group">
          <UnknownTravelsLogo size={48} className="transition-transform duration-300 group-hover:scale-105" />
          <div className="flex flex-col">
            <span className="font-serif text-lg font-bold tracking-wider text-[#f5f5f5] group-hover:text-[#e5c76b] transition-colors leading-tight">
              UNKNOWN TRAVELS & TOURS
            </span>
            <span className="label-caps text-[9px] text-[#c9a84c] tracking-[0.25em]">
              EXPLORE SRI LANKA
            </span>
          </div>
        </a>

        {/* Zone 2: Navigation Links */}
        <nav className="hidden lg:flex items-center gap-8 text-xs font-semibold uppercase tracking-widest text-[#d0c5b2]">
          <button
            onClick={() => scrollToSection('destinations')}
            className="hover:text-[#e5c76b] transition-colors py-1 cursor-pointer"
          >
            Destinations
          </button>
          <button
            onClick={() => scrollToSection('tours')}
            className="hover:text-[#e5c76b] transition-colors py-1 cursor-pointer"
          >
            Tours & Packages
          </button>
          <button
            onClick={() => scrollToSection('about')}
            className="hover:text-[#e5c76b] transition-colors py-1 cursor-pointer"
          >
            About Us
          </button>
          <button
            onClick={() => scrollToSection('photography')}
            className="hover:text-[#e5c76b] transition-colors py-1 cursor-pointer"
          >
            Cinematography & Drone
          </button>
          <button
            onClick={() => scrollToSection('planner')}
            className="hover:text-[#e5c76b] transition-colors py-1 cursor-pointer text-[#e5c76b]"
          >
            Plan Your Trip
          </button>
        </nav>

        {/* Zone 3: Direct Actions */}
        <div className="hidden sm:flex items-center gap-3 shrink-0">
          <a
            href="https://wa.me/94778084913?text=Hello%20Unknown%20Travels%2C%20I%20would%20like%20to%20plan%20a%20trip%20to%20Sri%20Lanka."
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-3 py-2 text-xs font-mono text-[#25D366] bg-[#25D366]/10 border border-[#25D366]/30 hover:bg-[#25D366]/20 transition-colors"
          >
            <span className="w-2 h-2 rounded-full bg-[#25D366] animate-pulse" />
            <span>+94 77 808 4913</span>
          </a>

          <button
            onClick={onPlanTripClick}
            className="px-5 py-2.5 text-xs font-semibold uppercase tracking-[0.18em] text-[#050505] bg-[#c9a84c] hover:bg-[#e5c76b] transition-all duration-200 gold-glow whitespace-nowrap cursor-pointer"
          >
            Plan Your Trip
          </button>
        </div>

        {/* Mobile menu trigger */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 text-[#d0c5b2] hover:text-[#f5f5f5]"
          title="Toggle Navigation Menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#0c0c0c] border-b border-[#c9a84c]/20 px-6 py-6 space-y-4">
          <div className="flex flex-col space-y-3 text-xs font-semibold uppercase tracking-wider text-[#d0c5b2]">
            <button
              onClick={() => scrollToSection('destinations')}
              className="text-left py-2 hover:text-[#e5c76b]"
            >
              Destinations (Ella, Kandy, Sigiriya...)
            </button>
            <button
              onClick={() => scrollToSection('tours')}
              className="text-left py-2 hover:text-[#e5c76b]"
            >
              Explore Tours
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className="text-left py-2 hover:text-[#e5c76b]"
            >
              About Us
            </button>
            <button
              onClick={() => scrollToSection('photography')}
              className="text-left py-2 hover:text-[#e5c76b]"
            >
              Photography & Drone
            </button>
            <button
              onClick={() => scrollToSection('planner')}
              className="text-left py-2 text-[#e5c76b]"
            >
              Plan Your Trip
            </button>
          </div>

          <div className="pt-4 border-t border-[#c9a84c]/20 flex flex-col gap-3">
            <a
              href="https://wa.me/94778084913?text=Hello%20Unknown%20Travels%2C%20I%20would%20like%20to%20plan%20a%20trip%20to%20Sri%20Lanka."
              target="_blank"
              rel="noopener noreferrer"
              className="w-full text-center py-2.5 text-xs font-medium text-[#25D366] bg-[#25D366]/10 border border-[#25D366]/30"
            >
              WhatsApp: +94 77 808 4913
            </a>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onPlanTripClick();
              }}
              className="w-full py-3 text-xs font-semibold uppercase tracking-wider text-[#050505] bg-[#c9a84c]"
            >
              Plan Your Trip
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
