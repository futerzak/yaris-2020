export type PhotoRef = {
  url?: string
  alt: string
}

const BASE_URL = import.meta.env.BASE_URL
const img = (path: string) => `${BASE_URL}Yaris/${path}`

export const heroPhoto: PhotoRef = {
  alt: 'Widok tylny — Tokyo Red, HYBRID, relingi dachowe i kontrastowy dach',
  url: img('20250901_131522.jpg'),
}

export const expertSidePhoto: PhotoRef = {
  alt: 'Tył 3/4 — kontrastowy dach, relingi i bagażnik w otoczeniu górskim',
  url: img('20250901_131532.jpg'),
}

export const hybridClusterPhoto: PhotoRef = {
  alt: 'Cyfrowe zegary hybrydy — CHG, ECO, PWR, tryb READY',
  url: img('20251020_054906.jpg'),
}

export const deliveryPhoto: PhotoRef = {
  alt: 'Dzień odbioru z salonu Toyota — grudzień 2020',
  url: img('IMG-20210107-WA0002.jpg'),
}

export const documentsPhoto: PhotoRef = {
  alt: 'Dokumentacja serwisowa — przekazanie w Toyota Romanowski Kraków',
  url: img('IMG-20210107-WA0000.jpg'),
}

export const gtechniqCertPhoto: PhotoRef = {
  alt: 'Certyfikat Gtechniq Crystal Serum Ultra — 9-letnia gwarancja, nr 311057',
  url: img('IMG_20210113_221204.jpg'),
}

export const designPhotos: PhotoRef[] = [
  { alt: 'Tył 3/4 — HYBRID, relingi dachowe, kontrastowy dach', url: img('20250901_131516.jpg') },
  { alt: 'Reflektory Full LED — zbliżenie', url: img('20250901_131640.jpg') },
  { alt: 'Profil lewy — kontrastowy dach i alufelgi 17"', url: img('20250901_131546.jpg') },
  { alt: 'Reling dachowy Toyota — mocowanie z logo marki', url: img('20250901_131621.jpg') },
  { alt: 'Wnętrze — kokpit, fotele diament, czerwone przeszycia', url: img('20251020_054941.jpg') },
  { alt: 'Wnętrze — strona pasażera, niebieskie oświetlenie ambient', url: img('20251020_054955.jpg') },
  { alt: 'Tylna kanapa — ISOFIX, diamentowy wzór', url: img('20251020_165533.jpg') },
  { alt: 'Składane tylne siedzenia — rozszerzona przestrzeń bagażowa', url: img('IMG_20201222_072443.jpg') },
  { alt: 'Przestronny bagażnik — transport mebli (codzienna eksploatacja)', url: img('IMG_20210109_155915.jpg') },
  { alt: 'Przyciski: podgrzewana kierownica, czujniki parkowania, AHB', url: img('IMG_20210225_111440.jpg') },
  { alt: 'Czujnik parkowania przód — integracja ASO w zderzaku', url: img('20250901_131650.jpg') },
  { alt: 'Lewy przedni róg — reflektor Full LED', url: img('IMG_20201222_072710.jpg') },
]

export const interiorHero: PhotoRef = {
  alt: 'Kokpit — fotele diament, czerwone przeszycia, ekran multimedialny',
  url: img('20251020_054941.jpg'),
}

export const interiorDetail: PhotoRef = {
  alt: 'Head-Up Display (HUD) — projekcja prędkości na przedniej szybie',
  url: img('20251030_070108.jpg'),
}

export const interiorRearPhoto: PhotoRef = {
  alt: 'Tylna kanapa — ISOFIX, diamentowy wzór, czerwone przeszycia',
  url: img('20251020_165533.jpg'),
}

export const serviceSidePhoto: PhotoRef = {
  alt: 'Profil z boxem dachowym Inter Pack na relingach Toyota',
  url: img('IMG_20220205_141142.jpg'),
}

export const ceramicCoatingPhoto: PhotoRef = {
  alt: 'Lakier Tokyo Red — profil nadwozia chroniony powłoką ceramiczną',
  url: img('20250901_131546.jpg'),
}

export const parkingSensorsPhoto: PhotoRef = {
  alt: 'Czujnik parkowania przód — profesjonalna integracja ASO',
  url: img('20250901_131650.jpg'),
}

export const conditionPhotos: PhotoRef[] = [
  {
    alt: 'Drobna rysa na lakierze tylnego zderzaka — uczciwie pokazana',
    url: img('20250901_131728.jpg'),
  },
  {
    alt: 'Odprysk lakieru na przednim zderzaku — zbliżenie',
    url: img('20250901_131659.jpg'),
  },
  {
    alt: 'Rysa na tylnym zderzaku — transparentność stanu',
    url: img('IMG_20230422_181159.jpg'),
  },
]

export const wheelsPhotos: PhotoRef[] = [
  {
    alt: 'Letnie 17" Premiere Edition — dwukolorowe alufelgi Toyota',
    url: img('20250901_131605.jpg'),
  },
  {
    alt: 'Alufelgi 17" — widok boku tylnego (zimowy komplet Nokian)',
    url: img('IMG_20210109_140130.jpg'),
  },
]

export const ogImageUrl = 'https://futerzak.github.io/yaris-2020/Yaris/FB_IMG_1615045136405.jpg'
