import React from 'react';
import { Compass, Users, Camera, ShieldCheck, Heart } from 'lucide-react';
import { SERVICE_HIGHLIGHTS } from '../data/mockData';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-[#0a0a0a] border-b border-[#c9a84c]/20">
      <div className="max-w-[1440px] mx-auto px-6">
        
        {/* Main About Text Box */}
        <div className="max-w-3xl mx-auto text-center space-y-6 mb-20">
          <div className="inline-block">
            <span className="label-caps text-[#c9a84c] tracking-[0.25em]">
              ABOUT UNKNOWN TRAVELS & TOURS
            </span>
          </div>

          <h2 className="font-serif text-3xl sm:text-5xl font-normal text-[#f5f5f5] tracking-tight">
            DISCOVER SRI LANKA WITH US
          </h2>

          <div className="space-y-4 text-base sm:text-lg text-[#d0c5b2] font-light leading-relaxed">
            <p>
              We create memorable Sri Lankan travel experiences for individuals, couples, families and groups.
            </p>
            <p>
              From beautiful beaches and mountains to wildlife, culture and hidden places, we help you experience the best of Sri Lanka.
            </p>
          </div>

          {/* Signature tagline */}
          <div className="pt-4">
            <p className="font-serif text-xl sm:text-2xl text-[#e5c76b] italic">
              Your Journey. Your Story. Your Memories.
            </p>
          </div>
        </div>

        {/* 4 Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {SERVICE_HIGHLIGHTS.map((service, index) => (
            <div
              key={index}
              className="p-8 bg-[#121212] border border-[#c9a84c]/20 hover:border-[#e5c76b]/50 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="w-10 h-10 mb-6 flex items-center justify-center bg-[#1c1b1b] border border-[#c9a84c]/30 text-[#e5c76b]">
                  {index === 0 && <Compass className="w-5 h-5 text-[#c9a84c]" />}
                  {index === 1 && <Users className="w-5 h-5 text-[#c9a84c]" />}
                  {index === 2 && <ShieldCheck className="w-5 h-5 text-[#c9a84c]" />}
                  {index === 3 && <Camera className="w-5 h-5 text-[#c9a84c]" />}
                </div>

                <h3 className="font-serif text-xl text-[#f5f5f5] mb-3">
                  {service.title}
                </h3>

                <p className="text-xs sm:text-sm text-[#9e9e9e] font-light leading-relaxed">
                  {service.desc}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-[#c9a84c]/10 flex items-center text-[11px] font-mono text-[#c9a84c]">
                <span>100% SRI LANKA SPECIALISTS</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
