export type PhotoRef = {
  url?: string; // direct image URL if available
  alt: string;
  external?: string; // fallback link to album or photo page
};

// optional album reference (not used after switching to local assets)
// const album = 'https://photos.app.goo.gl/fpaMcQiCQcQ3ri4q9';

// Hero: fresh full-car shots from Sept 2025
export const heroPhoto: PhotoRef = {
  alt: 'Toyota Yaris Hybrid 1.5 — Tokyo Red w pełnej krasie',
  url: '/Yaris/20250901_131522.jpg',
};

export const expertSidePhoto: PhotoRef = {
  alt: 'Profil — linia nadwozia i kontrastowy dach',
  url: '/Yaris/20250901_131532.jpg',
};

// Gallery: curated best shots (full car, clean angles, details)
export const designPhotos: PhotoRef[] = [
  { alt: 'Reflektory LED — pełna technologia światła', url: '/Yaris/20251020_054955.jpg' },
  { alt: 'Profil boczny — kontrastowy dach i 17" felgi', url: '/Yaris/20250901_131621.jpg' },
  { alt: 'Oryginalny bagażnik dachowy Toyota z ASO', url: '/Yaris/20251020_055001.jpg' },
  { alt: 'Tył z bagażnikiem — lampy LED i sportowa linia', url: '/Yaris/20250901_131640.jpg' },
  { alt: 'Tył 3/4 z bagażnikiem — kompletny widok', url: '/Yaris/20250901_131546.jpg' },
  { alt: 'Detal — 17" alufelga Premiere Edition', url: '/Yaris/20250901_131650.jpg' },
  { alt: 'Drobna rysa na plastikowym błotniku — transparentność', url: '/Yaris/20251020_165537.jpg' },
  { alt: 'Wnętrze — fotel kierowcy i kokpit', url: '/Yaris/IMG_20201222_072516.jpg' },
  { alt: 'Wnętrze — drzwi i panel boczny', url: '/Yaris/IMG_20201222_072710.jpg' },
];

export const interiorHero: PhotoRef = {
  alt: 'Wnętrze — kokpit kierowcy i kierownica',
  url: '/Yaris/IMG_20201222_072516.jpg',
};

export const interiorDetail: PhotoRef = {
  alt: 'Ekran 8" i panel klimatyzacji dwustrefowej',
  url: '/Yaris/IMG_20201222_072702.jpg',
};

export const serviceSidePhoto: PhotoRef = {
  alt: 'Profil z bagażnikiem dachowym — kompletny widok',
  url: '/Yaris/20250901_131546.jpg',
};

export const ceramicCoatingPhoto: PhotoRef = {
  alt: 'Powłoka ceramiczna — po aplikacji (styczeń 2021)',
  url: '/Yaris/IMG_20210110_181542.jpg',
};

// Condition photos: minor scratches on plastic trim (transparency)
export const conditionPhotos: PhotoRef[] = [
  { alt: 'Rysa na plastikowym zderzaku — transparentność stanu', url: '/Yaris/20251020_165548.jpg' },
  { alt: 'Drobne rysy na plastikowych elementach', url: '/Yaris/20251020_165537.jpg' },
];

// Wheels: summer and winter sets
export const wheelsPhotos: PhotoRef[] = [
  { alt: 'Letnie 17" Premiere Edition — dwukolorowe alufelgi', url: '/Yaris/20250901_131650.jpg' },
  { alt: 'Zimowe 17" alufelgi — kompletny zestaw', url: '/Yaris/IMG_20210225_111437.jpg' },
];


