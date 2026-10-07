import React from 'react';
import { UnknownTravelsLogo } from './BrandLogos';
import { HERO_SRI_LANKA_IMG } from '../data/mockData';

interface HeroSectionProps {
  onExploreTours: () => void;
  onPlanTrip: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onExploreTours,
  onPlanTrip,
}) => {
  return (
    <section id="hero" className="relative min-h-[92vh] flex items-center justify-center overflow-hidden border-b border-[#c9a84c]/20">
      
      {/* Cinematic Sri Lankan Landscape Background */}
      <div className="absolute inset-0 z-0">
        <img
          src={HERO_SRI_LANKA_IMG}
          alt="Sri Lanka scenic mountains and tea plantation dawn mist"
          className="w-full h-full object-cover object-center scale-105 transition-transform duration-1000 ease-out"
          referrerPolicy="no-referrer"
        />
        {/* Measured contrast scrim: dark luxury black/gold atmosphere */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/70 to-black/50" />
        <div className="absolute inset-0 bg-radial-gradient from-transparent via-[#050505]/30 to-[#050505]/85" />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-[1440px] mx-auto px-6 py-20 w-full flex flex-col items-center text-center">
        
        {/* Circular Emblem matching uploaded image */}
        <div className="mb-8 transform hover:scale-105 transition-transform duration-500">
          <UnknownTravelsLogo size={152} className="drop-shadow-[0_12px_45px_rgba(201,168,76,0.35)]" />
        </div>

        {/* Subtitle */}
        <div className="inline-block px-4 py-1.5 mb-4 border border-[#c9a84c]/40 bg-[#050505]/60 backdrop-blur-sm">
          <span className="label-caps text-[#e5c76b] tracking-[0.3em]">
            EXPLORE SRI LANKA
          </span>
        </div>

        {/* Main Title */}
        <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl font-normal text-[#f5f5f5] max-w-5xl tracking-tight leading-[1.08] mb-6">
          UNKNOWN TRAVELS & TOURS
        </h1>

        {/* Short Text */}
        <p className="max-w-2xl text-base sm:text-lg md:text-xl text-[#d0c5b2] font-light leading-relaxed mb-10 text-balance">
          Discover beautiful places, unique experiences and unforgettable journeys in Sri Lanka.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 mb-12">
          <button
            onClick={onExploreTours}
            className="px-9 py-4 text-xs font-semibold uppercase tracking-[0.2em] text-[#050505] bg-[#c9a84c] hover:bg-[#e5c76b] transition-all duration-200 gold-glow whitespace-nowrap cursor-pointer"
          >
            EXPLORE TOURS
          </button>
          
          <button
            onClick={onPlanTrip}
            className="px-9 py-4 text-xs font-semibold uppercase tracking-[0.2em] text-[#f5f5f5] bg-transparent border border-[#c9a84c]/60 hover:bg-[#c9a84c]/10 hover:border-[#e5c76b] transition-all duration-200 whitespace-nowrap cursor-pointer"
          >
            PLAN YOUR TRIP
          </button>
        </div>

        {/* Small Text */}
        <div className="pt-6 border-t border-[#c9a84c]/20 max-w-xl w-full">
          <p className="text-xs sm:text-sm font-medium tracking-[0.22em] text-[#c9a84c] uppercase">
            Travel • Tours • Photography • Cinematography • Drone
          </p>
        </div>
      </div>
    </section>
  );
};
