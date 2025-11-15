export type PhotoRef = {
  url?: string; // direct image URL if available
  alt: string;
  external?: string; // fallback link to album or photo page
};

// optional album reference (not used after switching to local assets)
// const album = 'https://photos.app.goo.gl/fpaMcQiCQcQ3ri4q9';

// Hero: fresh full-car shots from Sept 2025
export const heroPhoto: PhotoRef = {
  alt: "Toyota Yaris Hybrid 1.5 — Tokyo Red w pełnej krasie",
  url: "/Yaris/20250901_131522.jpg",
};

export const expertSidePhoto: PhotoRef = {
  alt: "Profil — linia nadwozia i kontrastowy dach",
  url: "/Yaris/20250901_131532.jpg",
};

// Gallery: curated best shots (full car, clean angles, details)
export const designPhotos: PhotoRef[] = [
  { alt: "Wnętrze — strona pasażera", url: "/Yaris/20251020_054955.jpg" },
  {
    alt: "Oryginalny bagażnik dachowy Toyota z ASO",
    url: "/Yaris/20250901_131621.jpg",
  },
  { alt: "Drzwi pasażera przód", url: "/Yaris/20251020_055001.jpg" },
  {
    alt: "Reflektory Full LED i sportowa linia",
    url: "/Yaris/20250901_131640.jpg",
  },
  { alt: "Profil lewy — kontrastowy dach", url: "/Yaris/20250901_131546.jpg" },
  { alt: "Czujniki parkowania przód", url: "/Yaris/20250901_131650.jpg" },
  { alt: "Drzwi pasażera tylne", url: "/Yaris/20251020_165537.jpg" },
  {
    alt: "Wnętrze — fotel kierowcy i kokpit",
    url: "/Yaris/IMG_20201222_072516.jpg",
  },
  { alt: "Prawy przedni róg samochodu", url: "/Yaris/IMG_20201222_072710.jpg" },
];

export const interiorHero: PhotoRef = {
  alt: "Wnętrze — kokpit kierowcy i kierownica",
  url: "/Yaris/IMG_20201222_072516.jpg",
};

export const interiorDetail: PhotoRef = {
  alt: "Head-Up Display (HUD) — projekcja informacji na przedniej szybie",
  url: "/Yaris/20251030_070108.jpg",
};

export const serviceSidePhoto: PhotoRef = {
  alt: "Profil z bagażnikiem dachowym — kompletny widok",
  url: "/Yaris/20250901_131546.jpg",
};

export const ceramicCoatingPhoto: PhotoRef = {
  alt: "Head-Up Display (HUD) — projekcja na przedniej szybie",
  url: "/Yaris/20251030_070108.jpg",
};

export const parkingSensorsPhoto: PhotoRef = {
  alt: "Czujniki parkowania przód — profesjonalna integracja ASO",
  url: "/Yaris/20250901_131650.jpg",
};

// Condition photos: minor scratches on plastic trim (transparency)
export const conditionPhotos: PhotoRef[] = [
  {
    alt: "Rysa na plastikowym zderzaku — transparentność stanu",
    url: "/Yaris/20251020_165548.jpg",
  },
  {
    alt: "Drobne rysy na plastikowych elementach",
    url: "/Yaris/20251020_165537.jpg",
  },
];

// Wheels: summer and winter sets
export const wheelsPhotos: PhotoRef[] = [
  {
    alt: 'Letnie 17" Premiere Edition — dwukolorowe alufelgi',
    url: "/Yaris/20250901_131605.jpg",
  },
  {
    alt: 'Zimowe 17" alufelgi — kompletny zestaw',
    url: "/Yaris/IMG_20210109_085038.jpg",
  },
];
