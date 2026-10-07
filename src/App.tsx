/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { DestinationsSection } from './components/DestinationsSection';
import { ToursSection } from './components/ToursSection';
import { PhotographySection } from './components/PhotographySection';
import { TripPlannerSection } from './components/TripPlannerSection';
import { UnknownTravelerBanner } from './components/UnknownTravelerBanner';
import { Footer } from './components/Footer';
import { WhatsAppChatBox } from './components/WhatsAppChatBox';

export default function App() {
  const [selectedDestinationForPlanner, setSelectedDestinationForPlanner] = useState<string | undefined>(undefined);
  const [selectedTourForPlanner, setSelectedTourForPlanner] = useState<string | undefined>(undefined);

  const scrollToPlanner = (dest?: string, tour?: string) => {
    if (dest) setSelectedDestinationForPlanner(dest);
    if (tour) setSelectedTourForPlanner(tour);
    const element = document.getElementById('planner');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToTours = () => {
    const element = document.getElementById('tours');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#050505] text-[#e5e2e1] flex flex-col font-sans selection:bg-[#c9a84c]/30 selection:text-[#ffe08f]">
      
      {/* Navigation Header */}
      <Navbar
        onPlanTripClick={() => scrollToPlanner()}
        onExploreToursClick={scrollToTours}
      />

      {/* Main Page Flow */}
      <main className="flex-1 w-full">
        {/* 1. Hero Section */}
        <HeroSection
          onExploreTours={scrollToTours}
          onPlanTrip={() => scrollToPlanner()}
        />

        {/* 2. About Us */}
        <AboutSection />

        {/* 3. Sri Lanka Destinations (Ella, Kandy, Sigiriya, Nuwara Eliya, Galle, Yala) */}
        <DestinationsSection
          onSelectDestination={(destName) => scrollToPlanner(destName)}
        />

        {/* 4. Curated Sri Lanka Tours */}
        <ToursSection
          onSelectTour={(tourTitle) => scrollToPlanner(undefined, tourTitle)}
        />

        {/* 5. Photography & Drone Cinematography */}
        <PhotographySection
          onPlanTripWithPhoto={() => scrollToPlanner()}
        />

        {/* 6. Plan Your Trip (Interactive Form) */}
        <TripPlannerSection
          preselectedDest={selectedDestinationForPlanner}
          preselectedTour={selectedTourForPlanner}
        />

        {/* 7. Unknown Traveler - "Collect moments, not things" (Down Last) */}
        <UnknownTravelerBanner
          onPlanTrip={() => scrollToPlanner()}
        />
      </main>

      {/* WhatsApp Floating Chat Box on the right (+94 77 808 4913) */}
      <WhatsAppChatBox phoneNumber="94778084913" displayNumber="+94 77 808 4913" />

      {/* Footer */}
      <Footer />
    </div>
  );
}
