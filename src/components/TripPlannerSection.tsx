import React, { useState } from 'react';
import { Send, Check, Phone, MessageSquare, MapPin } from 'lucide-react';

interface TripPlannerSectionProps {
  preselectedDest?: string;
  preselectedTour?: string;
}

export const TripPlannerSection: React.FC<TripPlannerSectionProps> = ({
  preselectedDest,
  preselectedTour,
}) => {
  const availableDestinations = [
    'Ella',
    'Kandy',
    'Sigiriya',
    'Nuwara Eliya',
    'Galle',
    'Yala',
    'Mirissa',
    'Colombo',
    'Trincomalee',
  ];

  const [selectedDestinations, setSelectedDestinations] = useState<string[]>(
    preselectedDest ? [preselectedDest] : ['Ella', 'Sigiriya', 'Kandy']
  );
  const [duration, setDuration] = useState<string>('7-9 Days');
  const [travelers, setTravelers] = useState<string>('Couple (2 Guests)');
  const [includePhotography, setIncludePhotography] = useState<boolean>(false);
  const [includeTrainTickets, setIncludeTrainTickets] = useState<boolean>(true);
  const [includeSafari, setIncludeSafari] = useState<boolean>(true);

  // Contact inputs
  const [fullName, setFullName] = useState<string>('');
  const [whatsappPhone, setWhatsappPhone] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [travelDates, setTravelDates] = useState<string>('');
  const [notes, setNotes] = useState<string>(preselectedTour ? `Interested in: ${preselectedTour}` : '');
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);

  const toggleDestination = (dest: string) => {
    if (selectedDestinations.includes(dest)) {
      setSelectedDestinations(selectedDestinations.filter((d) => d !== dest));
    } else {
      setSelectedDestinations([...selectedDestinations, dest]);
    }
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  // Build direct WhatsApp message
  const summaryMessage = `Hello Unknown Travels & Tours, I would like to plan a Sri Lanka trip.
*Name:* ${fullName || 'Guest'}
*Travelers:* ${travelers}
*Duration:* ${duration}
*Destinations:* ${selectedDestinations.join(', ') || 'All Sri Lanka'}
*Dates:* ${travelDates || 'Flexible'}
*Options:* ${includeTrainTickets ? 'Scenic Train Tickets, ' : ''}${includeSafari ? 'Yala Safari, ' : ''}${includePhotography ? 'Drone & Photography' : ''}
*Notes:* ${notes || 'Looking forward to recommendations'}`;

  const whatsappDirectLink = `https://wa.me/94778084913?text=${encodeURIComponent(summaryMessage)}`;

  return (
    <section id="planner" className="py-24 bg-[#0a0a0a] border-b border-[#c9a84c]/20">
      <div className="max-w-[1440px] mx-auto px-6">
        
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <span className="label-caps text-[#c9a84c] tracking-[0.25em]">
            CUSTOMIZE YOUR JOURNEY
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl font-normal text-[#f5f5f5] mt-2 mb-4">
            PLAN YOUR TRIP TO SRI LANKA
          </h2>
          <p className="text-sm text-[#d0c5b2] font-light leading-relaxed">
            Tell us where you want to go and what you want to experience. Our local Sri Lankan travel team will craft a free custom itinerary and quote for you.
          </p>
        </div>

        {isSubmitted ? (
          <div className="bg-[#121212] border border-[#c9a84c]/50 p-10 sm:p-14 text-center max-w-2xl mx-auto gold-glow">
            <div className="w-16 h-16 rounded-full bg-[#c9a84c]/20 border border-[#c9a84c] text-[#e5c76b] flex items-center justify-center mx-auto mb-6">
              <Check className="w-8 h-8" />
            </div>

            <span className="label-caps text-[#c9a84c] block mb-2">
              ITINERARY REQUEST RECEIVED
            </span>

            <h3 className="font-serif text-3xl text-[#f5f5f5] mb-4">
              Thank You, {fullName || 'Traveler'}!
            </h3>

            <p className="text-sm text-[#d0c5b2] font-light leading-relaxed mb-6">
              We have received your Sri Lanka travel inquiry. To receive immediate assistance or discuss custom hotel options, connect directly with our travel manager on WhatsApp.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href={whatsappDirectLink}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-8 py-3.5 text-xs font-semibold uppercase tracking-wider text-[#050505] bg-[#25D366] hover:bg-[#20ba5a] transition-colors flex items-center justify-center gap-2"
              >
                <span>Open WhatsApp (+94 77 808 4913)</span>
              </a>

              <button
                onClick={() => setIsSubmitted(false)}
                className="w-full sm:w-auto px-6 py-3.5 text-xs uppercase tracking-wider text-[#9e9e9e] hover:text-[#f5f5f5] border border-[#c9a84c]/30"
              >
                Edit Details
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleFormSubmit} className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            
            {/* Left Column: Trip Preferences (7 Cols) */}
            <div className="lg:col-span-7 space-y-8">
              
              {/* Destination Multi-Select */}
              <div>
                <label className="text-xs uppercase tracking-wider text-[#c9a84c] font-semibold block mb-3">
                  1. Select Sri Lanka Destinations to Visit:
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                  {availableDestinations.map((dest) => {
                    const isSelected = selectedDestinations.includes(dest);
                    return (
                      <button
                        type="button"
                        key={dest}
                        onClick={() => toggleDestination(dest)}
                        className={`p-3 text-left text-xs transition-all border cursor-pointer ${
                          isSelected
                            ? 'bg-[#c9a84c] text-[#050505] font-semibold border-[#c9a84c]'
                            : 'bg-[#121212] text-[#d0c5b2] border-[#c9a84c]/20 hover:border-[#c9a84c]/60'
                        }`}
                      >
                        <span className="block font-medium">{dest}</span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Duration & Travelers */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs uppercase tracking-wider text-[#c9a84c] font-semibold block mb-2">
                    2. Desired Trip Duration:
                  </label>
                  <select
                    value={duration}
                    onChange={(e) => setDuration(e.target.value)}
                    className="w-full bg-[#121212] border border-[#c9a84c]/30 p-3 text-sm text-[#f5f5f5] focus:outline-none focus:border-[#e5c76b]"
                  >
                    <option value="3-5 Days">3–5 Days (Short Highlights)</option>
                    <option value="6-8 Days">6–8 Days (Classic Tour)</option>
                    <option value="9-12 Days">9–12 Days (In-Depth Discovery)</option>
                    <option value="14+ Days">14+ Days (Complete Island Grand Tour)</option>
                  </select>
                </div>

                <div>
                  <label className="text-xs uppercase tracking-wider text-[#c9a84c] font-semibold block mb-2">
                    3. Number of Travelers:
                  </label>
                  <select
                    value={travelers}
                    onChange={(e) => setTravelers(e.target.value)}
                    className="w-full bg-[#121212] border border-[#c9a84c]/30 p-3 text-sm text-[#f5f5f5] focus:outline-none focus:border-[#e5c76b]"
                  >
                    <option value="Solo Traveler">Solo Traveler</option>
                    <option value="Couple (2 Guests)">Couple (2 Guests)</option>
                    <option value="Family (3-5 Guests)">Family (3–5 Guests)</option>
                    <option value="Private Group (6+ Guests)">Private Group (6+ Guests)</option>
                  </select>
                </div>
              </div>

              {/* Experience Options */}
              <div>
                <label className="text-xs uppercase tracking-wider text-[#c9a84c] font-semibold block mb-3">
                  4. Special Experiences:
                </label>
                <div className="p-4 bg-[#121212] border border-[#c9a84c]/20 space-y-3">
                  <label className="flex items-center gap-3 cursor-pointer select-none">
                    <input
                      type="checkbox"
                      checked={includeTrainTickets}
                      onChange={(e) => setIncludeTrainTickets(e.target.checked)}
                      className="w-4 h-4 accent-[#c9a84c]"
                    />
                    <span className="text-xs text-[#d0c5b2]">
                      Reserved Seats on Scenic Kandy-to-Ella Mountain Train
                    </span>
                  </label>

                  <label className="flex items-center gap-3 cursor-pointer select-none">
                    <input
                      type="checkbox"
                      checked={includeSafari}
                      onChange={(e) => setIncludeSafari(e.target.checked)}
                      className="w-4 h-4 accent-[#c9a84c]"
                    />
                    <span className="text-xs text-[#d0c5b2]">
                      4x4 Private Wildlife Safari in Yala National Park (Leopard & Elephant tracking)
                    </span>
                  </label>

                  <label className="flex items-center gap-3 cursor-pointer select-none">
                    <input
                      type="checkbox"
                      checked={includePhotography}
                      onChange={(e) => setIncludePhotography(e.target.checked)}
                      className="w-4 h-4 accent-[#c9a84c]"
                    />
                    <span className="text-xs text-[#d0c5b2]">
                      Professional Cinematographer / Drone Pilot Accompaniment (Unknown Studio)
                    </span>
                  </label>
                </div>
              </div>
            </div>

            {/* Right Column: Contact Details (5 Cols) */}
            <div className="lg:col-span-5 bg-[#121212] border border-[#c9a84c]/30 p-6 sm:p-8 flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <span className="label-caps text-[#c9a84c] block">
                  CONTACT DETAILS
                </span>
                <h3 className="font-serif text-2xl text-[#f5f5f5]">
                  Where Should We Send Your Itinerary?
                </h3>

                <div>
                  <label className="text-xs uppercase tracking-wider text-[#9e9e9e] block mb-1.5">
                    Your Full Name:
                  </label>
                  <input
                    type="text"
                    required
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    placeholder="e.g. David Miller"
                    className="w-full bg-[#050505] border border-[#c9a84c]/30 p-3 text-sm text-[#f5f5f5] focus:outline-none focus:border-[#e5c76b]"
                  />
                </div>

                <div>
                  <label className="text-xs uppercase tracking-wider text-[#9e9e9e] block mb-1.5">
                    WhatsApp Number:
                  </label>
                  <input
                    type="tel"
                    required
                    value={whatsappPhone}
                    onChange={(e) => setWhatsappPhone(e.target.value)}
                    placeholder="+44 7123 456789"
                    className="w-full bg-[#050505] border border-[#c9a84c]/30 p-3 text-sm text-[#f5f5f5] focus:outline-none focus:border-[#e5c76b]"
                  />
                </div>

                <div>
                  <label className="text-xs uppercase tracking-wider text-[#9e9e9e] block mb-1.5">
                    Email Address:
                  </label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="name@example.com"
                    className="w-full bg-[#050505] border border-[#c9a84c]/30 p-3 text-sm text-[#f5f5f5] focus:outline-none focus:border-[#e5c76b]"
                  />
                </div>

                <div>
                  <label className="text-xs uppercase tracking-wider text-[#9e9e9e] block mb-1.5">
                    Approximate Dates / Month:
                  </label>
                  <input
                    type="text"
                    value={travelDates}
                    onChange={(e) => setTravelDates(e.target.value)}
                    placeholder="e.g. November 2026 / Winter 2027"
                    className="w-full bg-[#050505] border border-[#c9a84c]/30 p-3 text-sm text-[#f5f5f5] focus:outline-none focus:border-[#e5c76b]"
                  />
                </div>

                <div>
                  <label className="text-xs uppercase tracking-wider text-[#9e9e9e] block mb-1.5">
                    Special Requests / Hotel Preferences:
                  </label>
                  <textarea
                    rows={3}
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    placeholder="Tell us about your interests, preferred hotel style, or specific activities..."
                    className="w-full bg-[#050505] border border-[#c9a84c]/30 p-3 text-sm text-[#f5f5f5] focus:outline-none focus:border-[#e5c76b] resize-none"
                  />
                </div>
              </div>

              <div className="space-y-3 pt-4 border-t border-[#c9a84c]/20">
                <button
                  type="submit"
                  className="w-full py-4 text-xs font-semibold uppercase tracking-[0.2em] text-[#050505] bg-[#c9a84c] hover:bg-[#e5c76b] transition-all gold-glow flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                  <span>Request Custom Itinerary & Quote</span>
                </button>

                <p className="text-[11px] text-center text-[#9e9e9e]">
                  No obligation · Free itinerary design · Direct Sri Lanka team
                </p>
              </div>
            </div>
          </form>
        )}
      </div>
    </section>
  );
};
