import React from 'react';
import { UnknownTravelsLogo, UnknownStudioLogo, UnknownTravelerLogo } from './BrandLogos';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="w-full bg-[#050505] border-t border-[#c9a84c]/20 py-16 text-[#e5e2e1]">
      <div className="max-w-[1440px] mx-auto px-6">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-12 border-b border-[#c9a84c]/15">
          
          {/* Brand Col (5 cols) with all 3 emblems */}
          <div className="md:col-span-5 space-y-6">
            <div className="flex items-center gap-4 flex-wrap">
              <UnknownTravelsLogo size={52} />
              <UnknownStudioLogo size={52} />
              <UnknownTravelerLogo size={52} />
            </div>

            <div>
              <h3 className="font-serif text-xl font-bold text-[#f5f5f5] tracking-wide">
                UNKNOWN TRAVELS & TOURS
              </h3>
              <p className="text-xs text-[#c9a84c] tracking-[0.2em] uppercase font-semibold">
                EXPLORE SRI LANKA · UNKNOWN TRAVELER
              </p>
            </div>

            <p className="text-xs sm:text-sm text-[#9e9e9e] font-light leading-relaxed max-w-sm">
              Sri Lanka tourism company specializing in tailor-made holidays, scenic train journeys, wildlife safaris, and professional travel cinematography.
            </p>

            <p className="text-xs text-[#fbbf24] italic font-serif">
              “Collect moments, not things”
            </p>
          </div>

          {/* Top Sri Lanka Destinations (2 cols) */}
          <div className="md:col-span-2 space-y-3">
            <h4 className="label-caps text-[#c9a84c]">Destinations</h4>
            <ul className="space-y-2 text-xs text-[#d0c5b2]">
              <li>
                <button onClick={() => scrollTo('destinations')} className="hover:text-[#e5c76b] transition-colors cursor-pointer">
                  Ella Mountains
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo('destinations')} className="hover:text-[#e5c76b] transition-colors cursor-pointer">
                  Kandy Culture
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo('destinations')} className="hover:text-[#e5c76b] transition-colors cursor-pointer">
                  Sigiriya Lion Rock
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo('destinations')} className="hover:text-[#e5c76b] transition-colors cursor-pointer">
                  Nuwara Eliya Tea
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo('destinations')} className="hover:text-[#e5c76b] transition-colors cursor-pointer">
                  Galle Dutch Fort
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo('destinations')} className="hover:text-[#e5c76b] transition-colors cursor-pointer">
                  Yala Leopard Safari
                </button>
              </li>
            </ul>
          </div>

          {/* Quick Links (2 cols) */}
          <div className="md:col-span-2 space-y-3">
            <h4 className="label-caps text-[#c9a84c]">Navigation</h4>
            <ul className="space-y-2 text-xs text-[#d0c5b2]">
              <li>
                <button onClick={() => scrollTo('hero')} className="hover:text-[#e5c76b] transition-colors cursor-pointer">
                  Home
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo('about')} className="hover:text-[#e5c76b] transition-colors cursor-pointer">
                  About Us
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo('tours')} className="hover:text-[#e5c76b] transition-colors cursor-pointer">
                  Tour Packages
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo('photography')} className="hover:text-[#e5c76b] transition-colors cursor-pointer">
                  Drone & Video
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo('planner')} className="hover:text-[#e5c76b] transition-colors cursor-pointer">
                  Plan Your Trip
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Outposts in Sri Lanka (3 cols) */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="label-caps text-[#c9a84c]">Sri Lanka Offices</h4>
            
            <div className="space-y-3 text-xs text-[#d0c5b2]">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#c9a84c] shrink-0 mt-0.5" />
                <span>Colombo 03 & Galle Fort, Sri Lanka</span>
              </div>

              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#c9a84c] shrink-0" />
                <a href="tel:+94778084913" className="hover:text-[#e5c76b] transition-colors font-mono">
                  +94 77 808 4913
                </a>
              </div>

              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#c9a84c] shrink-0" />
                <a href="mailto:info@unknowntravels.com" className="hover:text-[#e5c76b] transition-colors">
                  info@unknowntravels.com
                </a>
              </div>

              <div className="pt-2">
                <a
                  href="https://wa.me/94778084913?text=Hello%20Unknown%20Travels%2C%20I%20would%20like%20to%20plan%20a%20Sri%20Lanka%20trip."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-3.5 py-1.5 text-xs font-semibold text-[#050505] bg-[#25D366] hover:bg-[#20ba5a] transition-colors"
                >
                  <span>WhatsApp: +94 77 808 4913</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#9e9e9e]">
          <p>© {new Date().getFullYear()} UNKNOWN TRAVELS & TOURS (Sri Lanka). All rights reserved.</p>
          <p className="text-[#c9a84c]">
            Explore Sri Lanka with local experts
          </p>
        </div>
      </div>
    </footer>
  );
};
