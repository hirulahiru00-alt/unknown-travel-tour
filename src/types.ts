export type AppScreen = 'travels' | 'studio' | 'gallery' | 'concierge';

export interface SriLankaCity {
  id: string;
  name: string;
  nativeName?: string;
  tagline: string;
  province: string;
  elevation: string;
  coordinates: string;
  highlights: string[];
  description: string;
  keySanctuaries: string;
}

export interface Expedition {
  id: string;
  title: string;
  region: string;
  coordinates: string;
  duration: string;
  elevation: string;
  highlights: string[];
  description: string;
  image: string;
  startingPrice: string;
  days: {
    day: number;
    title: string;
    description: string;
    lodging: string;
    privilege: string;
  }[];
}

export interface ProductionProject {
  id: string;
  title: string;
  client: string;
  location: string;
  category: 'Expedition Doc' | 'Aerial FPV' | 'Luxury Brand' | 'Editorial Stills';
  camera: string;
  lens: string;
  aspectRatio: string;
  duration: string;
  image: string;
  description: string;
  specs: {
    iso: string;
    aperture: string;
    shutter: string;
    droneLicense?: string;
  };
}

export interface GalleryItem {
  id: string;
  title: string;
  location: string;
  category: 'highlands' | 'cultural' | 'coastal' | 'aerial' | 'editorial';
  image: string;
  coordinates: string;
  camera: string;
  lens: string;
  exif: string;
  story: string;
}
