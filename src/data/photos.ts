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

// Gallery: curated best shots from Sept 2025 (full car, clean angles)
export const designPhotos: PhotoRef[] = [
  { alt: 'Front 3/4 — Tokyo Red w pełnym blasku', url: '/Yaris/20250901_131522.jpg' },
  { alt: 'Profil boczny — dynamiczna linia', url: '/Yaris/20250901_131532.jpg' },
  { alt: 'Tył 3/4 — lampy LED i proporcje', url: '/Yaris/20250901_131546.jpg' },
  { alt: 'Front — grill i reflektory LED', url: '/Yaris/20250901_131605.jpg' },
  { alt: 'Profil z kontrastowym dachem', url: '/Yaris/20250901_131621.jpg' },
  { alt: 'Tył — lampy i zderzak', url: '/Yaris/20250901_131640.jpg' },
  { alt: 'Detal — 17" alufelga', url: '/Yaris/20250901_131650.jpg' },
  { alt: 'Bryła z boku — elegancja linii', url: '/Yaris/20250901_131659.jpg' },
  { alt: 'Całość — Tokyo Fusion', url: '/Yaris/20250901_131711.jpg' },
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
  alt: 'Widok z góry — dach Night Sky Black',
  url: '/Yaris/20250901_131728.jpg',
};

export const ceramicCoatingPhoto: PhotoRef = {
  alt: 'Powłoka ceramiczna — po aplikacji (styczeń 2021)',
  url: '/Yaris/IMG_20210110_181542.jpg',
};


