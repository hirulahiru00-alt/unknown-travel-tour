import React from 'react';
import { UnknownTravelerLogo } from './BrandLogos';
import { Heart, Compass, MapPin, Sparkles } from 'lucide-react';

interface UnknownTravelerBannerProps {
  onPlanTrip: () => void;
}

export const UnknownTravelerBanner: React.FC<UnknownTravelerBannerProps> = ({
  onPlanTrip,
}) => {
  return (
    <section className="py-20 bg-gradient-to-b from-[#0a0a0a] via-[#050e14] to-[#050505] border-b border-[#38bdf8]/20 relative overflow-hidden">
      {/* Background ambient teal/cyan and gold glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[#38bdf8]/10 blur-[120px] pointer-events-none rounded-full" />
      
      <div className="max-w-[1440px] mx-auto px-6 relative z-10">
        <div className="glass-level-2 border border-[#38bdf8]/30 p-8 sm:p-14 flex flex-col md:flex-row items-center justify-between gap-10">
          
          {/* Logo Emblem matching Image 3 (LSII0463.PNG) */}
          <div className="shrink-0 flex flex-col items-center text-center">
            <div className="transform hover:scale-105 transition-transform duration-500 drop-shadow-[0_12px_36px_rgba(56,189,248,0.35)]">
              <UnknownTravelerLogo size={168} />
            </div>
            <span className="mt-4 text-[10px] uppercase font-mono tracking-[0.25em] text-[#38bdf8]">
              OFFICIAL TRAVELER EMBLEM
            </span>
          </div>

          {/* Core Copy */}
          <div className="max-w-2xl space-y-4 text-center md:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#38bdf8]/10 border border-[#38bdf8]/30 text-xs font-mono text-[#38bdf8]">
              <Sparkles className="w-3.5 h-3.5" />
              <span>THE UNKNOWN TRAVELER PHILOSOPHY</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-5xl font-medium text-[#f5f5f5] tracking-tight">
              UNKNOWN TRAVELER
            </h2>

            <p className="font-serif text-2xl sm:text-3xl text-[#fbbf24] italic font-light">
              “Collect moments, not things”
            </p>

            <p className="text-sm sm:text-base text-[#d0c5b2] font-light leading-relaxed">
              We travel not to escape life, but so life does not escape us. Join our community of mindful explorers collecting unforgettable sunrises atop Sigiriya, solitary train journeys through Ella’s tea mist, and wild leopard encounters in Yala.
            </p>

            <div className="pt-2 flex flex-wrap items-center justify-center md:justify-start gap-4">
              <button
                onClick={onPlanTrip}
                className="px-8 py-3.5 text-xs font-semibold uppercase tracking-[0.2em] text-[#050505] bg-[#38bdf8] hover:bg-[#7dd3fc] transition-all shadow-[0_4px_20px_rgba(56,189,248,0.35)] cursor-pointer"
              >
                Start Your Journey
              </button>

              <a
                href="https://wa.me/94778084913?text=Hello%20Unknown%20Traveler%2C%20I%20would%20like%20to%20collect%20moments%20in%20Sri%20Lanka."
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3.5 text-xs font-semibold uppercase tracking-[0.18em] text-[#f5f5f5] bg-transparent border border-[#38bdf8]/40 hover:bg-[#38bdf8]/10 transition-colors"
              >
                Join Community On WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
