export interface SriLankaDestination {
  id: string;
  name: string;
  tagline: string;
  description: string;
  image: string;
  highlights: string[];
}

export interface SriLankaTour {
  id: string;
  title: string;
  duration: string;
  destinations: string;
  type: string;
  image: string;
  description: string;
  highlights: string[];
  priceEstimate: string;
}

export const HERO_SRI_LANKA_IMG = '/src/assets/images/hero_sri_lanka_expedition_1791378786322.jpg';
export const ELLA_RAIL_IMG = '/src/assets/images/luxury_expedition_rail_heritage_1791378821662.jpg';
export const GALLE_COAST_IMG = '/src/assets/images/galle_coastal_beach_sri_lanka_1791381603229.jpg';
export const YALA_WILDLIFE_IMG = '/src/assets/images/yala_wildlife_safari_sri_lanka_1791381618014.jpg';
export const MOUNTAIN_PHOTOGRAPHER_IMG = '/src/assets/images/studio_cinematographer_sunset_1791378797558.jpg';
export const DALADA_MALIGAWA_IMG = '/src/assets/images/kandy_dalada_maligawa_temple_1791382136224.jpg';

export const SRI_LANKA_DESTINATIONS: SriLankaDestination[] = [
  {
    id: 'ella',
    name: 'ELLA',
    tagline: 'Mountains, waterfalls, tea plantations and scenic train journeys',
    description: 'Famous for the iconic Nine Arches Demodara stone railway viaduct, Ravana Falls, Little Adam’s Peak, and rolling green mountain gaps shrouded in morning mist.',
    image: ELLA_RAIL_IMG,
    highlights: ['Nine Arches Bridge Train Journey', 'Ella Rock & Little Adam’s Peak', 'Ravana Falls & Secret Caves']
  },
  {
    id: 'kandy',
    name: 'KANDY',
    tagline: 'Culture, temples, mountains and beautiful surroundings',
    description: 'The sacred hill capital of Sri Lanka. Cradled around a tranquil lake, Kandy is home to the revered Temple of the Sacred Tooth Relic (Sri Dalada Maligawa) and royal gardens.',
    image: DALADA_MALIGAWA_IMG,
    highlights: ['Temple of the Sacred Tooth Relic', 'Peradeniya Royal Botanical Gardens', 'Kandy Lake & Cultural Kandyan Dance']
  },
  {
    id: 'sigiriya',
    name: 'SIGIRIYA',
    tagline: 'Ancient history, nature and the famous Sigiriya Rock',
    description: 'Rising 200 meters out of the jungle, King Kashyapa’s 5th-century Lion Rock fortress features ancient frescoes, the Mirror Wall, water gardens, and panoramic jungle vistas.',
    image: HERO_SRI_LANKA_IMG,
    highlights: ['Sigiriya Lion Rock Fortress Climb', 'Pidurangala Rock Sunrise Viewpoint', 'Dambulla Golden Cave Temple']
  },
  {
    id: 'nuwara-eliya',
    name: 'NUWARA ELIYA',
    tagline: 'Tea plantations, cool weather and beautiful mountain views',
    description: 'Known as "Little England", Nuwara Eliya sits at 1,868 meters elevation. It offers refreshing alpine air, colonial hill cottages, Lake Gregory, and world-renowned Ceylon tea estates.',
    image: ELLA_RAIL_IMG,
    highlights: ['World-Famous Ceylon Tea Factory Tours', 'Horton Plains & World’s End Cliff', 'Lake Gregory & Victoria Park']
  },
  {
    id: 'galle',
    name: 'GALLE',
    tagline: 'Historic fort, beaches and south coast charm',
    description: 'The UNESCO World Heritage 17th-century Galle Dutch Fort sits on the southern ocean. Walk ancient cobblestone bastions, colonial lighthouse walls, and nearby golden tropical beaches.',
    image: GALLE_COAST_IMG,
    highlights: ['UNESCO Galle Dutch Fort Bastions & Lighthouse', 'Boutique Cafes & Colonial Architecture', 'Nearby Unawatuna & Mirissa Surf Beaches']
  },
  {
    id: 'yala',
    name: 'YALA',
    tagline: 'Wildlife, leopards, elephants and untouched nature',
    description: 'Home to the highest density of wild leopards in the world. Embark on exhilarating 4x4 open-air safari adventures to spot leopards, wild elephants, sloth bears, and crocodiles.',
    image: YALA_WILDLIFE_IMG,
    highlights: ['World-Class Leopard Spotting Safaris', 'Wild Asian Elephants & Sloth Bears', 'Untouched Indian Ocean Coastal Dunes']
  }
];

export const SRI_LANKA_TOURS: SriLankaTour[] = [
  {
    id: 'tour-classic-ceylon',
    title: 'The Classic Sri Lanka Discovery',
    duration: '8 Days / 7 Nights',
    destinations: 'Sigiriya • Kandy • Nuwara Eliya • Ella • Galle',
    type: 'Culture & Nature',
    image: HERO_SRI_LANKA_IMG,
    description: 'Experience the complete heart of Sri Lanka. From the ancient lion citadel of Sigiriya to the cool tea country of Nuwara Eliya, the scenic Ella train, and the coastal Dutch fort of Galle.',
    highlights: ['Sigiriya Rock & Dambulla Caves', 'Temple of the Tooth in Kandy', 'Scenic Highland Train Ride to Ella', 'Galle Fort Sunset Walk'],
    priceEstimate: 'Customized based on travel style'
  },
  {
    id: 'tour-wild-and-coastal',
    title: 'Wild Safari & Southern Coast Tour',
    duration: '7 Days / 6 Nights',
    destinations: 'Yala • Mirissa • Weligama • Galle • Colombo',
    type: 'Wildlife & Beach',
    image: YALA_WILDLIFE_IMG,
    description: 'The ultimate adventure for wildlife and ocean lovers. Track wild leopards and elephants in Yala National Park, go blue whale watching in Mirissa, and relax on southern palm-fringed beaches.',
    highlights: ['Private 4x4 Leopard Safari in Yala', 'Whale Watching in Mirissa Bay', 'Stilt Fishermen of Weligama', 'Historic Galle Fort Ramparts'],
    priceEstimate: 'Customized based on travel style'
  },
  {
    id: 'tour-tea-and-trains',
    title: 'Highland Tea & Mountain Train Adventure',
    duration: '5 Days / 4 Nights',
    destinations: 'Kandy • Nuwara Eliya • Horton Plains • Ella',
    type: 'Highlands & Scenic Rail',
    image: ELLA_RAIL_IMG,
    description: 'A picturesque journey through misty mountains, cascading waterfalls, fresh tea gardens, and the world-renowned colonial hill country railway.',
    highlights: ['Iconic Nine Arches Stone Viaduct', 'Ceylon Orthodox Tea Estate Tour', 'World’s End Cliff at Horton Plains', 'Little Adam’s Peak Hiking'],
    priceEstimate: 'Customized based on travel style'
  },
  {
    id: 'tour-cultural-citadel',
    title: 'Sacred Heritage & Ancient Kingdoms',
    duration: '6 Days / 5 Nights',
    destinations: 'Colombo • Anuradhapura • Sigiriya • Kandy',
    type: 'Ancient History & Heritage',
    image: DALADA_MALIGAWA_IMG,
    description: 'Uncover 2,500 years of civilization across Sri Lanka’s UNESCO World Heritage Cultural Triangle, sacred stupas, ancient reservoirs, and mountain royal palaces.',
    highlights: ['Ancient City of Anuradhapura', 'Sigiriya Rock Citadel at Sunrise', 'Dambulla Golden Rock Temple', 'Sacred Tooth Relic Ceremony'],
    priceEstimate: 'Customized based on travel style'
  }
];

export const SERVICE_HIGHLIGHTS = [
  {
    title: 'Custom Tour Planning',
    desc: 'Tailor-made itineraries crafted for solo travelers, couples, families, and private groups.'
  },
  {
    title: 'Private Chauffeured Transport',
    desc: 'Comfortable, air-conditioned luxury vans, SUVs, and private English-speaking tour guides.'
  },
  {
    title: 'Scenic Train Reservations',
    desc: 'Guaranteed reserved observation seats on the famous Kandy-to-Ella scenic mountain railway.'
  },
  {
    title: 'Cinematography & Drone',
    desc: 'Professional drone pilot and photographer accompaniment to capture 4K travel memories.'
  }
];
