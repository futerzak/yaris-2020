export type PhotoRef = {
  url?: string; // direct image URL if available
  alt: string;
  external?: string; // fallback link to album or photo page
};

// optional album reference (not used after switching to local assets)
// const album = 'https://photos.app.goo.gl/fpaMcQiCQcQ3ri4q9';

// Base URL for GitHub Pages deployment (Vite provides this automatically)
// BASE_URL already includes trailing slash: '/yaris-2020/'
const BASE_URL = import.meta.env.BASE_URL;

// Helper function to build image paths
const img = (path: string) => `${BASE_URL}Yaris/${path}`;

// Hero: fresh full-car shots from Sept 2025
export const heroPhoto: PhotoRef = {
  alt: "Toyota Yaris Hybrid 1.5 — Tokyo Red w pełnej krasie",
  url: img('20250901_131522.jpg'),
};

export const expertSidePhoto: PhotoRef = {
  alt: "Profil — linia nadwozia i kontrastowy dach",
  url: img('20250901_131532.jpg'),
};

// Gallery: curated best shots (full car, clean angles, details)
export const designPhotos: PhotoRef[] = [
  { alt: "Wnętrze — strona pasażera", url: img('20251020_054955.jpg') },
  {
    alt: "Oryginalny bagażnik dachowy Toyota z ASO",
    url: img('20250901_131621.jpg'),
  },
  { alt: "Drzwi pasażera przód", url: img('20251020_055001.jpg') },
  {
    alt: "Reflektory Full LED i sportowa linia",
    url: img('20250901_131640.jpg'),
  },
  { alt: "Profil lewy — kontrastowy dach", url: img('20250901_131546.jpg') },
  { alt: "Czujniki parkowania przód", url: img('20250901_131650.jpg') },
  { alt: "Drzwi pasażera tylne", url: img('20251020_165537.jpg') },
  {
    alt: "Wnętrze — fotel kierowcy i kokpit",
    url: img('IMG_20201222_072516.jpg'),
  },
  { alt: "Prawy przedni róg samochodu", url: img('IMG_20201222_072710.jpg') },
];

export const interiorHero: PhotoRef = {
  alt: "Wnętrze — kokpit kierowcy i kierownica",
  url: img('IMG_20201222_072516.jpg'),
};

export const interiorDetail: PhotoRef = {
  alt: "Head-Up Display (HUD) — projekcja informacji na przedniej szybie",
  url: img('20251030_070108.jpg'),
};

export const serviceSidePhoto: PhotoRef = {
  alt: "Profil z bagażnikiem dachowym — kompletny widok",
  url: img('20250901_131546.jpg'),
};

export const ceramicCoatingPhoto: PhotoRef = {
  alt: "Head-Up Display (HUD) — projekcja na przedniej szybie",
  url: img('20251030_070108.jpg'),
};

export const parkingSensorsPhoto: PhotoRef = {
  alt: "Czujniki parkowania przód — profesjonalna integracja ASO",
  url: img('20250901_131650.jpg'),
};

// Condition photos: minor scratches on plastic trim (transparency)
export const conditionPhotos: PhotoRef[] = [
  {
    alt: "Rysa na plastikowym zderzaku — transparentność stanu",
    url: img('20251020_165548.jpg'),
  },
  {
    alt: "Drobne rysy na plastikowych elementach",
    url: img('20251020_165537.jpg'),
  },
];

// Wheels: summer and winter sets
export const wheelsPhotos: PhotoRef[] = [
  {
    alt: 'Letnie 17" Premiere Edition — dwukolorowe alufelgi',
    url: img('20250901_131605.jpg'),
  },
  {
    alt: 'Zimowe 17" alufelgi — kompletny zestaw',
    url: img('IMG_20210109_085038.jpg'),
  },
];
