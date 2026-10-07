import React from 'react';
import { MOUNTAIN_PHOTOGRAPHER_IMG, ELLA_RAIL_IMG } from '../data/mockData';
import { Camera, Video, Film, CheckCircle2 } from 'lucide-react';
import { UnknownStudioLogo } from './BrandLogos';

interface PhotographySectionProps {
  onPlanTripWithPhoto: () => void;
}

export const PhotographySection: React.FC<PhotographySectionProps> = ({
  onPlanTripWithPhoto,
}) => {
  return (
    <section id="photography" className="py-24 bg-[#050505] border-b border-[#c9a84c]/20">
      <div className="max-w-[1440px] mx-auto px-6">
        
        {/* Split Section Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Visual Showcase (5 Cols) */}
          <div className="lg:col-span-5 relative">
            <div className="aspect-[4/5] overflow-hidden border border-[#c9a84c]/30 relative bg-black">
              <img
                src={MOUNTAIN_PHOTOGRAPHER_IMG}
                alt="Photographer at mountain sunrise Sri Lanka"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent" />
              
              {/* Emblem Overlay */}
              <div className="absolute bottom-6 left-6 right-6 p-4 bg-[#0c0c0c]/90 border border-[#c9a84c]/30 backdrop-blur-md flex items-center gap-4">
                <UnknownStudioLogo size={48} />
                <div>
                  <h4 className="font-serif text-sm font-semibold text-[#f5f5f5]">
                    UNKNOWN STUDIO
                  </h4>
                  <p className="text-[11px] text-[#c9a84c] font-mono">
                    Cinematography & Drone Unit
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Copy & Services (7 Cols) */}
          <div className="lg:col-span-7 space-y-6">
            <div>
              <span className="label-caps text-[#c9a84c] tracking-[0.25em]">
                TRAVEL • TOURS • PHOTOGRAPHY • CINEMATOGRAPHY • DRONE
              </span>
              <h2 className="font-serif text-3xl sm:text-5xl font-normal text-[#f5f5f5] mt-2 leading-tight">
                Capture Your Sri Lanka Journey In Cinematic 4K & Drone
              </h2>
            </div>

            <p className="text-sm sm:text-base text-[#d0c5b2] font-light leading-relaxed">
              Do not leave your precious travel memories to blurry phone snapshots. Travel with our dedicated professional cinematographer or photographer to capture your journey across Ella&apos;s train viaduct, Sigiriya dawn climbs, and secluded southern beaches.
            </p>

            {/* Bullet features */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-4 bg-[#0e0e0e] border border-[#c9a84c]/20 space-y-1.5">
                <div className="flex items-center gap-2 text-[#e5c76b]">
                  <Video className="w-4 h-4" />
                  <span className="font-serif text-sm text-[#f5f5f5]">4K Cinematic Highlight Reel</span>
                </div>
                <p className="text-xs text-[#9e9e9e]">
                  A professionally edited 3–5 minute cinematic short film of your private vacation.
                </p>
              </div>

              <div className="p-4 bg-[#0e0e0e] border border-[#c9a84c]/20 space-y-1.5">
                <div className="flex items-center gap-2 text-[#e5c76b]">
                  <Film className="w-4 h-4" />
                  <span className="font-serif text-sm text-[#f5f5f5]">Licensed Aerial Drone Footage</span>
                </div>
                <p className="text-xs text-[#9e9e9e]">
                  Sweeping aerial mountain and coastal views captured by certified pilots.
                </p>
              </div>

              <div className="p-4 bg-[#0e0e0e] border border-[#c9a84c]/20 space-y-1.5">
                <div className="flex items-center gap-2 text-[#e5c76b]">
                  <Camera className="w-4 h-4" />
                  <span className="font-serif text-sm text-[#f5f5f5]">Couples & Family Portraits</span>
                </div>
                <p className="text-xs text-[#9e9e9e]">
                  Golden hour photo sessions at iconic Sri Lankan landmarks and secluded beaches.
                </p>
              </div>

              <div className="p-4 bg-[#0e0e0e] border border-[#c9a84c]/20 space-y-1.5">
                <div className="flex items-center gap-2 text-[#e5c76b]">
                  <CheckCircle2 className="w-4 h-4" />
                  <span className="font-serif text-sm text-[#f5f5f5]">Fast Digital Delivery</span>
                </div>
                <p className="text-xs text-[#9e9e9e]">
                  High-resolution photo gallery and color-graded video delivered within 7 business days.
                </p>
              </div>
            </div>

            <div className="pt-4 flex flex-wrap items-center gap-4">
              <button
                onClick={onPlanTripWithPhoto}
                className="px-8 py-3.5 text-xs font-semibold uppercase tracking-[0.2em] text-[#050505] bg-[#c9a84c] hover:bg-[#e5c76b] transition-all duration-200 gold-glow cursor-pointer"
              >
                Inquire For Photography Add-On
              </button>

              <a
                href="https://wa.me/94778084913?text=Hello%20Unknown%20Travels%2C%20I%20would%20like%20to%20inquire%20about%20Drone%20and%20Photography%20services%20for%20my%20Sri%20Lanka%20trip."
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3.5 text-xs font-semibold uppercase tracking-[0.18em] text-[#25D366] bg-[#25D366]/10 border border-[#25D366]/30 hover:bg-[#25D366]/20 transition-colors"
              >
                Chat On WhatsApp (+94 77 808 4913)
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
