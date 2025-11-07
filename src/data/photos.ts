export type PhotoRef = {
  url?: string; // direct image URL if available
  alt: string;
  external?: string; // fallback link to album or photo page
};

const album = 'https://photos.app.goo.gl/fpaMcQiCQcQ3ri4q9';

export const heroPhoto: PhotoRef = {
  alt: 'Toyota Yaris Hybrid 1.5 — lewy przedni róg (Tokyo Fusion)',
  external: 'https://photos.app.goo.gl/9cCz587FoL7XhfWr7',
};

export const expertSidePhoto: PhotoRef = {
  alt: 'Detal technologii / TSS — kamera/radar w osłonie',
  external: album,
};

export const designPhotos: PhotoRef[] = [
  { alt: 'Lewy przedni róg — kontrastowy czarny dach', external: 'https://photos.app.goo.gl/9cCz587FoL7XhfWr7' },
  { alt: 'Po aplikacji powłoki ceramicznej (09.01.2021)', external: 'https://photos.app.goo.gl/KK31JgCfkKbWeZJM8' },
  { alt: 'Front 3/4 — światła LED i grill', external: album },
  { alt: 'Profil boczny — linia nadwozia i 17” felgi', external: album },
  { alt: 'Detal — 17” alufelga Tokyo Premiere', external: album },
  { alt: 'Tył — lampy LED i zderzak', external: album },
  { alt: 'Kontrastowy dach Night Sky Black — detal słupka', external: album },
  { alt: 'Maska i reflektory — zbliżenie', external: album },
  { alt: 'Linia boczna — proporcje i przetłoczenia', external: album },
];

export const interiorHero: PhotoRef = {
  alt: 'Wnętrze — kokpit kierowcy i kierownica',
  external: album,
};

export const interiorDetail: PhotoRef = {
  alt: 'Ekran 8" i panel klimatyzacji dwustrefowej',
  external: album,
};

export const serviceSidePhoto: PhotoRef = {
  alt: 'Dokumentacja ASO / zdjęcie z wizyty serwisowej',
  external: album,
};

export const ceramicCoatingPhoto: PhotoRef = {
  alt: 'Powłoka ceramiczna — po aplikacji (09.01.2021)',
  external: 'https://photos.app.goo.gl/KK31JgCfkKbWeZJM8',
};


