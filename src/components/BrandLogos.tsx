import React from 'react';

interface LogoProps {
  size?: number | string;
  className?: string;
  showWordmark?: boolean;
}

/**
 * High-fidelity representation of "UNKNOWN TRAVELS & TOURS"
 * matching the user's uploaded circular insignia (Image 1):
 * - Circular gold ring
 * - Backpacker silhouette with backpack on ridge
 * - Sun, mountain ranges, sea bay, palm trees, stupas & skyline
 * - Airplane contrail
 * - Stylized "UNKNOWN" with mountain inside 'U' & golden compass rose in 'O'
 * - Golden script "Travels & Tours"
 * - "EXPLORE • EXPERIENCE • DISCOVER"
 * - Golden camera aperture emblem
 */
export const UnknownTravelsLogo: React.FC<LogoProps> = ({ size = 72, className = '' }) => {
  return (
    <div className={`relative inline-flex items-center justify-center select-none ${className}`} style={{ width: size, height: size }}>
      <svg
        viewBox="0 0 500 500"
        className="w-full h-full drop-shadow-[0_8px_24px_rgba(201,168,76,0.25)]"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <radialGradient id="skyGrad" cx="50%" cy="30%" r="70%">
            <stop offset="0%" stopColor="#87CEEB" />
            <stop offset="50%" stopColor="#3A88D7" />
            <stop offset="100%" stopColor="#1E5C9A" />
          </radialGradient>
          <linearGradient id="goldRing" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#F9DF88" />
            <stop offset="25%" stopColor="#D4AF37" />
            <stop offset="50%" stopColor="#AA7C11" />
            <stop offset="75%" stopColor="#EDC967" />
            <stop offset="100%" stopColor="#996E00" />
          </linearGradient>
          <linearGradient id="metalSilver" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#FFFFFF" />
            <stop offset="50%" stopColor="#D8DDE3" />
            <stop offset="100%" stopColor="#8A95A5" />
          </linearGradient>
          <linearGradient id="blueMountain" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#00A3FF" />
            <stop offset="100%" stopColor="#0066CC" />
          </linearGradient>
          <filter id="goldGlow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="6" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>

        {/* Outer Circular Ring with Metallic Bevel */}
        <circle cx="250" cy="250" r="236" stroke="url(#goldRing)" strokeWidth="10" fill="#0C0D0E" />
        <circle cx="250" cy="250" r="226" stroke="#4D4637" strokeWidth="2" fill="none" opacity="0.6" />

        {/* Inner Scenic Circle (Upper 65%) */}
        <g clipPath="url(#topCircleClip)">
          <clipPath id="topCircleClip">
            <circle cx="250" cy="250" r="222" />
          </clipPath>
          
          {/* Sky background */}
          <rect x="28" y="28" width="444" height="280" fill="url(#skyGrad)" />
          
          {/* Glowing Sun */}
          <circle cx="270" cy="160" r="46" fill="#FFFDF0" opacity="0.9" filter="url(#goldGlow)" />
          <circle cx="270" cy="160" r="38" fill="#FFFFFF" />

          {/* Plane Contrail & Jet */}
          <path d="M 230 190 Q 340 140 405 105" stroke="#FFFFFF" strokeWidth="2.5" strokeDasharray="3 2" opacity="0.8" />
          <path d="M 398 108 L 416 99 L 409 114 L 403 111 L 398 116 Z" fill="#FFFFFF" />

          {/* Distant Mountain Ridges */}
          <path d="M 120 260 L 220 180 L 320 230 L 420 160 L 480 230 L 480 270 L 120 270 Z" fill="#2D608F" opacity="0.7" />
          <path d="M 240 240 L 300 170 L 370 220 L 472 260 L 240 260 Z" fill="#1C4670" opacity="0.8" />

          {/* Sea & Islands */}
          <ellipse cx="360" cy="235" rx="100" ry="25" fill="#186A9E" />
          <path d="M 330 240 Q 360 226 390 240 Z" fill="#123B58" />
          <path d="M 400 242 Q 425 230 450 242 Z" fill="#123B58" />

          {/* Ancient Stupas and Sigiriya Rock Formation (Sri Lanka) */}
          <path d="M 130 235 L 138 215 L 140 200 L 142 215 L 150 235 Z" fill="#0C2538" />
          <path d="M 154 235 L 160 220 L 166 235 Z" fill="#0C2538" />
          {/* Sigiriya Lion Rock Monolith Silhouette */}
          <path d="M 410 235 L 418 200 L 442 195 L 452 235 Z" fill="#0C2538" />
          <path d="M 420 195 L 435 188 L 440 195 Z" fill="#0C2538" />

          {/* Tropical Palm Trees */}
          <g transform="translate(85, 140) scale(0.65)">
            <path d="M 30 130 Q 35 70 50 10" stroke="#071926" strokeWidth="6" fill="none" />
            <path d="M 50 10 Q 15 -10 -15 15 M 50 10 Q 40 -35 15 -40 M 50 10 Q 80 -35 95 -10 M 50 10 Q 100 0 110 35 M 50 10 Q 80 40 60 70" stroke="#071926" strokeWidth="4" fill="none" />
          </g>

          {/* Mountain Ridge with Backpacker */}
          <path d="M 40 280 L 100 240 L 180 235 L 250 255 L 290 270 L 40 270 Z" fill="#0E181F" />
          
          {/* Backpacker Silhouette */}
          <g transform="translate(160, 95) scale(0.95)" fill="#070E14">
            {/* Cap & Head */}
            <circle cx="50" cy="22" r="11" />
            <path d="M 42 16 L 68 18 L 68 23 L 42 23 Z" />
            {/* Neck & Torso */}
            <path d="M 42 32 L 58 32 L 62 75 L 38 75 Z" />
            {/* Huge Backpack */}
            <rect x="18" y="28" width="24" height="42" rx="7" />
            {/* Arms */}
            <path d="M 39 34 L 32 58 L 36 68" stroke="#070E14" strokeWidth="7" strokeLinecap="round" />
            <path d="M 58 34 L 70 52 L 68 68" stroke="#070E14" strokeWidth="7" strokeLinecap="round" />
            {/* Legs & Hiking Boots */}
            <path d="M 40 75 L 36 110 L 48 112" stroke="#070E14" strokeWidth="10" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M 58 75 L 72 105 L 84 107" stroke="#070E14" strokeWidth="10" strokeLinecap="round" strokeLinejoin="round" />
          </g>
        </g>

        {/* Lower Banner Plaque Base */}
        <path d="M 40 270 C 40 270 120 285 250 285 C 380 285 460 270 460 270 C 460 380 370 465 250 465 C 130 465 40 380 40 270 Z" fill="#141414" />
        <path d="M 42 270 C 120 285 250 285 458 270" stroke="url(#goldRing)" strokeWidth="3" fill="none" />

        {/* UNKNOWN Bold Metallic Typography */}
        <g transform="translate(0, 0)">
          {/* The U with snowy peaks */}
          <g transform="translate(50, 255)">
            <rect x="0" y="0" width="60" height="74" rx="8" fill="url(#blueMountain)" />
            <rect x="16" y="0" width="28" height="46" rx="4" fill="#141414" />
            {/* White snowy mountain peak inside U */}
            <path d="M 2 48 L 22 18 L 38 48 L 48 30 L 58 48 L 58 74 L 2 74 Z" fill="#FFFFFF" />
            <path d="M 16 48 L 22 28 L 30 48 M 42 42 L 48 34 L 54 42" fill="#00A3FF" />
          </g>

          {/* N */}
          <path d="M 120 329 L 120 255 L 140 255 L 168 305 L 168 255 L 188 255 L 188 329 L 168 329 L 140 278 L 140 329 Z" fill="url(#metalSilver)" />
          {/* K */}
          <path d="M 198 329 L 198 255 L 218 255 L 218 285 L 244 255 L 268 255 L 236 290 L 270 329 L 244 329 L 218 298 L 218 329 Z" fill="url(#metalSilver)" />
          {/* N */}
          <path d="M 276 329 L 276 255 L 296 255 L 324 305 L 324 255 L 344 255 L 344 329 L 324 329 L 296 278 L 296 329 Z" fill="url(#metalSilver)" />

          {/* O - 8-Point Golden Compass Rose */}
          <g transform="translate(378, 292)">
            <circle cx="0" cy="0" r="32" fill="#1C180E" stroke="url(#goldRing)" strokeWidth="6" />
            <circle cx="0" cy="0" r="22" stroke="#AA7C11" strokeWidth="1.5" fill="none" />
            {/* North-South Needle */}
            <polygon points="0,-24 6,-2 0,0 -6,-2" fill="#E5C76B" />
            <polygon points="0,24 6,2 0,0 -6,2" fill="#AA7C11" />
            {/* East-West */}
            <polygon points="24,0 2,6 0,0 2,-6" fill="#C9A84C" />
            <polygon points="-24,0 -2,6 0,0 -2,-6" fill="#88600E" />
            <circle cx="0" cy="0" r="4" fill="#FFFFFF" />
          </g>

          {/* W */}
          <path d="M 416 255 L 428 329 L 442 329 L 452 280 L 462 329 L 476 329 L 488 255 L 470 255 L 462 305 L 452 255 L 442 255 L 434 305 L 426 255 Z" fill="url(#metalSilver)" />
        </g>

        {/* Golden Cursive "TRAVELS & TOURS" */}
        <text
          x="250"
          y="370"
          textAnchor="middle"
          fill="url(#goldRing)"
          fontFamily="'Playfair Display', serif"
          fontStyle="italic"
          fontWeight="bold"
          fontSize="36"
          letterSpacing="1.5"
          filter="url(#goldGlow)"
        >
          Travels & Tours
        </text>

        {/* Tagline: EXPLORE • EXPERIENCE • DISCOVER */}
        <g transform="translate(250, 396)">
          <text
            x="0"
            y="0"
            textAnchor="middle"
            fill="#E5E2E1"
            fontFamily="'Plus Jakarta Sans', sans-serif"
            fontWeight="600"
            fontSize="12"
            letterSpacing="5"
          >
            EXPLORE · EXPERIENCE · DISCOVER
          </text>
        </g>

        {/* Golden Camera Emblem & Aperture at bottom */}
        <g transform="translate(250, 432)">
          {/* Subtle wing lines */}
          <line x1="-80" y1="0" x2="-35" y2="0" stroke="url(#goldRing)" strokeWidth="1.5" />
          <line x1="35" y1="0" x2="80" y2="0" stroke="url(#goldRing)" strokeWidth="1.5" />
          
          {/* Camera Body */}
          <rect x="-24" y="-12" width="48" height="24" rx="4" fill="none" stroke="url(#goldRing)" strokeWidth="2.5" />
          {/* Camera Flash Bump */}
          <path d="M -8 -12 L -6 -16 L 6 -16 L 8 -12 Z" fill="none" stroke="url(#goldRing)" strokeWidth="2" />
          {/* Aperture Iris Circle */}
          <circle cx="0" cy="0" r="9" stroke="url(#goldRing)" strokeWidth="2" fill="#1C180E" />
          <polygon points="0,-7 5,-2 2,4 -5,3" fill="#E5C76B" opacity="0.8" />
        </g>
      </svg>
    </div>
  );
};

/**
 * High-fidelity representation of "UNKNOWN STUDIO"
 * matching the user's uploaded black & gold circular luxury insignia (Image 2):
 * - Deep obsidian circle with concentric gold borders
 * - Glowing celestial amber/gold sun/moon
 * - Backpacker / Cinematographer silhouette with tripod
 * - Fluid signature gold script "Unknown Studio"
 */
export const UnknownStudioLogo: React.FC<LogoProps> = ({ size = 72, className = '' }) => {
  return (
    <div className={`relative inline-flex items-center justify-center select-none ${className}`} style={{ width: size, height: size }}>
      <svg
        viewBox="0 0 500 500"
        className="w-full h-full drop-shadow-[0_8px_30px_rgba(229,199,107,0.3)]"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <radialGradient id="sunGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#FFF2A8" />
            <stop offset="45%" stopColor="#F5B82E" />
            <stop offset="78%" stopColor="#C97B00" />
            <stop offset="100%" stopColor="#7E4700" stopOpacity="0" />
          </radialGradient>
          <linearGradient id="goldScript" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#FFF3D1" />
            <stop offset="50%" stopColor="#E5C76B" />
            <stop offset="100%" stopColor="#C9A84C" />
          </linearGradient>
          <linearGradient id="goldRimOuter" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FDEAA8" />
            <stop offset="50%" stopColor="#D4A738" />
            <stop offset="100%" stopColor="#8C6614" />
          </linearGradient>
        </defs>

        {/* Dark Obsidian Canvas Circle */}
        <circle cx="250" cy="250" r="240" fill="#060606" />

        {/* Concentric Double Gold Rings */}
        <circle cx="250" cy="250" r="236" stroke="url(#goldRimOuter)" strokeWidth="6" />
        <circle cx="250" cy="250" r="226" stroke="#C9A84C" strokeWidth="2.5" opacity="0.85" />

        {/* Glowing Golden Celestial Moon / Sun */}
        <circle cx="250" cy="195" r="115" fill="url(#sunGlow)" />
        <circle cx="250" cy="195" r="92" fill="#F8BC24" />

        {/* Silhouette of Cinematographer with Backpack & Tripod */}
        <g transform="translate(195, 115) scale(1.05)" fill="#070707">
          {/* Head & Neck */}
          <circle cx="58" cy="26" r="15" />
          {/* Torso & Jacket */}
          <path d="M 44 42 Q 58 38 72 44 L 70 120 L 40 120 Z" />
          {/* Heavy Expedition Backpack */}
          <path d="M 22 46 C 14 60 14 96 24 105 C 32 110 42 108 44 100 L 44 52 Z" />
          {/* Arms reaching to tripod head */}
          <path d="M 68 48 L 92 72 L 96 86" stroke="#070707" strokeWidth="9" strokeLinecap="round" />
          {/* Tripod Head & Fluid Head Controls */}
          <circle cx="98" cy="85" r="7" />
          <rect x="94" y="80" width="16" height="6" rx="2" />
          {/* Tripod 3 Carbon Legs */}
          <line x1="98" y1="88" x2="80" y2="175" stroke="#070707" strokeWidth="6" strokeLinecap="round" />
          <line x1="98" y1="88" x2="105" y2="175" stroke="#070707" strokeWidth="6" strokeLinecap="round" />
          <line x1="98" y1="88" x2="126" y2="175" stroke="#070707" strokeWidth="6" strokeLinecap="round" />
          {/* Legs of Cinematographer */}
          <path d="M 44 120 L 40 175" stroke="#070707" strokeWidth="12" strokeLinecap="round" />
          <path d="M 68 120 L 72 175" stroke="#070707" strokeWidth="12" strokeLinecap="round" />
        </g>

        {/* Lower Atmospheric Horizon Fog */}
        <path d="M 30 250 C 120 280 380 280 470 250 C 470 370 380 470 250 470 C 120 470 30 370 30 250 Z" fill="#060606" />

        {/* Script Typography: "Unknown Studio" in Gold */}
        {/* Large sweeping U and handwritten calligraphy */}
        <g transform="translate(250, 310)">
          {/* "Unknown" script text */}
          <text
            x="0"
            y="25"
            textAnchor="middle"
            fill="url(#goldScript)"
            fontFamily="'Alex Brush', cursive, 'Playfair Display'"
            fontSize="96"
            fontWeight="normal"
            letterSpacing="2"
          >
            Unknown
          </text>

          {/* "Studio" script connected below */}
          <text
            x="35"
            y="95"
            textAnchor="middle"
            fill="url(#goldScript)"
            fontFamily="'Alex Brush', cursive, 'Playfair Display'"
            fontSize="68"
            letterSpacing="4"
          >
            Studio
          </text>
        </g>
      </svg>
    </div>
  );
};

/**
 * High-fidelity representation of "UNKNOWN TRAVELER"
 * matching the user's uploaded circular badge (Image 3 - LSII0463.PNG):
 * - Vibrant bright cyan ring border
 * - Golden-orange sunrise/sunset sky
 * - Backpacker hiker with hiking stick and backpack traversing mountains
 * - Tropical palm tree on left
 * - Bold white "UNKNOWN"
 * - Bold golden yellow "TRAVELER"
 * - Quote: "Collect moments, not things"
 * - Flowing turquoise ocean waves & tropical leaves at the base
 */
export const UnknownTravelerLogo: React.FC<LogoProps> = ({ size = 72, className = '' }) => {
  return (
    <div className={`relative inline-flex items-center justify-center select-none ${className}`} style={{ width: size, height: size }}>
      <svg
        viewBox="0 0 500 500"
        className="w-full h-full drop-shadow-[0_8px_24px_rgba(56,189,248,0.3)]"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="travelerSky" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#EA580C" />
            <stop offset="35%" stopColor="#F97316" />
            <stop offset="70%" stopColor="#FBBF24" />
            <stop offset="100%" stopColor="#FDE047" />
          </linearGradient>
          <clipPath id="circleClip">
            <circle cx="250" cy="250" r="236" />
          </clipPath>
        </defs>

        {/* Outer Circular Vibrant Cyan Ring */}
        <circle cx="250" cy="250" r="242" stroke="#38BDF8" strokeWidth="12" fill="#07202B" />

        <g clipPath="url(#circleClip)">
          {/* Upper Sunset Sky */}
          <rect x="0" y="0" width="500" height="230" fill="url(#travelerSky)" />
          
          {/* Glowing horizon sun disc */}
          <circle cx="250" cy="180" r="90" fill="#FEF08A" opacity="0.4" />

          {/* Tropical Palm Tree on Left */}
          <g transform="translate(45, 65)">
            <path d="M 75 140 Q 60 70 85 20" stroke="#06282E" strokeWidth="8" strokeLinecap="round" fill="none" />
            {/* Fronds */}
            <path d="M 85 20 Q 30 10 10 35 M 85 20 Q 40 -15 20 -10 M 85 20 Q 95 -25 70 -35 M 85 20 Q 135 -15 145 15 M 85 20 Q 130 35 110 55" stroke="#06282E" strokeWidth="6" strokeLinecap="round" fill="none" />
          </g>

          {/* Mountain Ridges */}
          <path d="M 0 220 L 70 175 L 175 185 L 260 145 L 360 105 L 430 160 L 500 130 L 500 230 L 0 230 Z" fill="#0F766E" />
          <path d="M 100 220 L 190 165 L 280 185 L 360 105 L 440 180 L 500 150 L 500 230 L 100 230 Z" fill="#064E3B" />
          <path d="M 0 220 L 120 180 L 230 205 L 320 190 L 410 200 L 500 190 L 500 230 L 0 230 Z" fill="#042F2C" />

          {/* Backpacker Hiker Silhouette */}
          <g transform="translate(195, 68)" fill="#06282E">
            {/* Cap & Head */}
            <circle cx="55" cy="22" r="13" />
            <path d="M 45 16 L 72 18 L 72 23 L 45 23 Z" />
            {/* Torso */}
            <path d="M 44 32 L 66 32 L 68 85 L 40 85 Z" />
            {/* Expedition Backpack */}
            <rect x="18" y="22" width="28" height="52" rx="10" />
            {/* Walking Stick / Pole */}
            <line x1="88" y1="52" x2="80" y2="155" stroke="#06282E" strokeWidth="4.5" strokeLinecap="round" />
            {/* Arms holding pole */}
            <path d="M 64 36 L 86 54 L 88 64" stroke="#06282E" strokeWidth="8" strokeLinecap="round" fill="none" />
            {/* Legs walking */}
            <path d="M 42 85 L 18 135 L 28 138" stroke="#06282E" strokeWidth="12" strokeLinecap="round" strokeLinejoin="round" fill="none" />
            <path d="M 66 85 L 78 135 L 90 138" stroke="#06282E" strokeWidth="12" strokeLinecap="round" strokeLinejoin="round" fill="none" />
          </g>

          {/* Middle Dark Navy Typography Block */}
          <rect x="0" y="200" width="500" height="150" fill="#07202B" />

          {/* UNKNOWN - Bold White */}
          <text
            x="250"
            y="275"
            textAnchor="middle"
            fill="#FFFFFF"
            fontFamily="'Plus Jakarta Sans', system-ui, sans-serif"
            fontWeight="900"
            fontSize="72"
            letterSpacing="2"
          >
            UNKNOWN
          </text>

          {/* TRAVELER - Bold Golden Yellow */}
          <text
            x="250"
            y="335"
            textAnchor="middle"
            fill="#FBBF24"
            fontFamily="'Plus Jakarta Sans', system-ui, sans-serif"
            fontWeight="900"
            fontSize="54"
            letterSpacing="6"
          >
            TRAVELER
          </text>

          {/* Tagline: "Collect moments, not things" */}
          <text
            x="250"
            y="360"
            textAnchor="middle"
            fill="#E2E8F0"
            fontFamily="'Plus Jakarta Sans', sans-serif"
            fontWeight="700"
            fontSize="18"
            letterSpacing="1"
          >
            “Collect moments, not things”
          </text>

          {/* Bottom Ocean Waves & Lush Tropical Foliage */}
          <g transform="translate(0, 365)">
            {/* Wavy Waters in Blues and Teals */}
            <path d="M 0 15 Q 125 35 250 15 T 500 15 L 500 140 L 0 140 Z" fill="#0C4A6E" />
            <path d="M 0 35 Q 125 15 250 35 T 500 35 L 500 140 L 0 140 Z" fill="#0284C7" opacity="0.7" />
            <path d="M 0 50 Q 125 70 250 50 T 500 50 L 500 140 L 0 140 Z" fill="#0D9488" opacity="0.6" />

            {/* Tropical Leaves at the Base */}
            <path d="M 20 140 Q 60 70 120 110 Q 70 135 20 140 Z" fill="#059669" />
            <path d="M 100 140 Q 160 65 240 100 Q 170 135 100 140 Z" fill="#10B981" opacity="0.8" />
            <path d="M 220 140 Q 280 60 360 95 Q 290 135 220 140 Z" fill="#059669" />
            <path d="M 340 140 Q 400 70 480 110 Q 420 135 340 140 Z" fill="#10B981" opacity="0.9" />
          </g>
        </g>
      </svg>
    </div>
  );
};

