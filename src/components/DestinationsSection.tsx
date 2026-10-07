import React, { useState } from 'react';
import { SRI_LANKA_DESTINATIONS, SriLankaDestination } from '../data/mockData';
import { ArrowRight, MapPin, X, Check } from 'lucide-react';

interface DestinationsSectionProps {
  onSelectDestination: (destName: string) => void;
}

export const DestinationsSection: React.FC<DestinationsSectionProps> = ({
  onSelectDestination,
}) => {
  const [activeModalDest, setActiveModalDest] = useState<SriLankaDestination | null>(null);

  return (
    <section id="destinations" className="py-24 bg-[#050505] border-b border-[#c9a84c]/20">
      <div className="max-w-[1440px] mx-auto px-6">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <span className="label-caps text-[#c9a84c] tracking-[0.25em]">
              ISLAND HIGHLIGHTS
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl font-normal text-[#f5f5f5] mt-2">
              SRI LANKA DESTINATIONS
            </h2>
          </div>
          <p className="text-sm text-[#9e9e9e] max-w-md font-light leading-relaxed">
            From the misty tea mountains of Ella and Nuwara Eliya to the sacred temples of Kandy, ancient Sigiriya citadel, wildlife of Yala, and coastal ramparts of Galle.
          </p>
        </div>

        {/* 6 Grid Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SRI_LANKA_DESTINATIONS.map((dest) => (
            <div
              key={dest.id}
              className="bg-[#0e0e0e] border border-[#c9a84c]/20 hover:border-[#e5c76b]/60 transition-all duration-300 flex flex-col group overflow-hidden"
            >
              {/* Image Container with 16:10 aspect ratio */}
              <div className="relative aspect-[16/10] overflow-hidden bg-black">
                <img
                  src={dest.image}
                  alt={`${dest.name} Sri Lanka`}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0e0e0e] via-transparent to-black/30" />
                <div className="absolute top-3 left-3 bg-[#050505]/85 px-3 py-1 text-[11px] font-mono text-[#e5c76b] border border-[#c9a84c]/30">
                  SRI LANKA
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 sm:p-8 flex flex-col flex-1 justify-between">
                <div>
                  <h3 className="font-serif text-2xl sm:text-3xl font-medium text-[#f5f5f5] group-hover:text-[#e5c76b] transition-colors mb-2">
                    {dest.name}
                  </h3>
                  
                  <p className="text-xs uppercase tracking-wider text-[#c9a84c] font-semibold mb-3">
                    {dest.tagline}
                  </p>

                  <p className="text-xs sm:text-sm text-[#d0c5b2] font-light leading-relaxed mb-6">
                    {dest.description}
                  </p>

                  {/* Highlights list */}
                  <div className="space-y-2 mb-6 pt-4 border-t border-[#c9a84c]/15">
                    {dest.highlights.map((h, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs text-[#9e9e9e]">
                        <span className="text-[#c9a84c] mt-0.5">✦</span>
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Action buttons */}
                <div className="pt-4 border-t border-[#c9a84c]/20 flex items-center justify-between gap-4">
                  <button
                    onClick={() => setActiveModalDest(dest)}
                    className="text-xs uppercase tracking-wider text-[#9e9e9e] hover:text-[#f5f5f5] transition-colors cursor-pointer"
                  >
                    View Details
                  </button>

                  <button
                    onClick={() => onSelectDestination(dest.name)}
                    className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-[#050505] bg-[#c9a84c] hover:bg-[#e5c76b] transition-colors cursor-pointer"
                  >
                    <span>Add to Trip</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Destination Modal */}
      {activeModalDest && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md">
          <div className="bg-[#0e0e0e] border border-[#c9a84c]/50 max-w-2xl w-full max-h-[90vh] overflow-y-auto p-6 sm:p-10 relative">
            <button
              onClick={() => setActiveModalDest(null)}
              className="absolute top-6 right-6 p-2 text-[#9e9e9e] hover:text-[#f5f5f5] border border-[#c9a84c]/20 hover:border-[#e5c76b] transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            <span className="label-caps text-[#c9a84c] block mb-1">
              SRI LANKA SANCTUARY
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#f5f5f5] mb-2">
              {activeModalDest.name}
            </h2>
            <p className="text-xs uppercase tracking-widest text-[#e5c76b] mb-6 font-semibold">
              {activeModalDest.tagline}
            </p>

            <div className="aspect-video w-full overflow-hidden mb-6 border border-[#c9a84c]/30">
              <img
                src={activeModalDest.image}
                alt={activeModalDest.name}
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>

            <p className="text-sm text-[#d0c5b2] font-light leading-relaxed mb-6">
              {activeModalDest.description}
            </p>

            <div className="p-4 bg-[#171717] border border-[#c9a84c]/20 mb-8 space-y-2">
              <span className="label-caps text-[#c9a84c] block mb-2">Key Experiences:</span>
              {activeModalDest.highlights.map((h, i) => (
                <div key={i} className="flex items-center gap-2 text-xs text-[#f5f5f5]">
                  <Check className="w-3.5 h-3.5 text-[#e5c76b]" />
                  <span>{h}</span>
                </div>
              ))}
            </div>

            <div className="flex items-center justify-between pt-4 border-t border-[#c9a84c]/20">
              <button
                onClick={() => setActiveModalDest(null)}
                className="text-xs uppercase tracking-wider text-[#9e9e9e] hover:text-[#f5f5f5]"
              >
                Close
              </button>
              <button
                onClick={() => {
                  const name = activeModalDest.name;
                  setActiveModalDest(null);
                  onSelectDestination(name);
                }}
                className="px-6 py-2.5 text-xs font-semibold uppercase tracking-wider text-[#050505] bg-[#c9a84c] hover:bg-[#e5c76b] transition-colors cursor-pointer"
              >
                Plan Trip to {activeModalDest.name}
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
