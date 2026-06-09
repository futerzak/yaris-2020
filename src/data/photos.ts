export type PhotoRef = {
  url?: string
  alt: string
}

const BASE_URL = import.meta.env.BASE_URL
const img = (path: string) => `${BASE_URL}Yaris/${path}`

export const heroPhoto: PhotoRef = {
  alt: 'Toyota Yaris Hybrid 1.5 — Tokyo Red w pełnej krasie',
  url: img('20250901_131522.jpg'),
}

export const expertSidePhoto: PhotoRef = {
  alt: 'Profil — linia nadwozia i kontrastowy dach',
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
  { alt: 'Tył 3/4 — HYBRID, bagażnik dachowy, kontrastowy dach', url: img('20250901_131516.jpg') },
  { alt: 'Reflektory Full LED i sportowa linia', url: img('20250901_131640.jpg') },
  { alt: 'Profil lewy — kontrastowy dach', url: img('20250901_131546.jpg') },
  { alt: 'Oryginalny bagażnik dachowy Toyota z ASO', url: img('20250901_131621.jpg') },
  { alt: 'Wnętrze — kokpit, fotele diament, czerwone przeszycia', url: img('20251020_054941.jpg') },
  { alt: 'Wnętrze — strona pasażera', url: img('20251020_054955.jpg') },
  { alt: 'Tylna kanapa — ISOFIX, diamentowy wzór', url: img('20251020_165533.jpg') },
  { alt: 'Składane tylne siedzenia — rozszerzona przestrzeń bagażowa', url: img('IMG_20201222_072443.jpg') },
  { alt: 'Bagażnik w codziennym użyciu — praktyczna przestrzeń', url: img('IMG_20210109_155915.jpg') },
  { alt: 'Podgrzewana kierownica, czujniki parkowania, AHB', url: img('IMG_20210225_111440.jpg') },
  { alt: 'Czujniki parkowania przód', url: img('20250901_131650.jpg') },
  { alt: 'Prawy przedni róg samochodu', url: img('IMG_20201222_072710.jpg') },
]

export const interiorHero: PhotoRef = {
  alt: 'Kokpit — fotele diament, czerwone przeszycia, ekran multimedialny',
  url: img('20251020_054941.jpg'),
}

export const interiorDetail: PhotoRef = {
  alt: 'Head-Up Display (HUD) — projekcja informacji na przedniej szybie',
  url: img('20251030_070108.jpg'),
}

export const interiorRearPhoto: PhotoRef = {
  alt: 'Tylna kanapa — ISOFIX, diamentowy wzór, czerwone przeszycia',
  url: img('20251020_165533.jpg'),
}

export const serviceSidePhoto: PhotoRef = {
  alt: 'Profil z bagażnikiem dachowym — kompletny widok',
  url: img('IMG_20220205_141142.jpg'),
}

export const ceramicCoatingPhoto: PhotoRef = {
  alt: 'Lakier Tokyo Red chroniony powłoką ceramiczną — połysk i ochrona',
  url: img('20250901_131532.jpg'),
}

export const parkingSensorsPhoto: PhotoRef = {
  alt: 'Czujniki parkowania przód — profesjonalna integracja ASO',
  url: img('20250901_131650.jpg'),
}

export const conditionPhotos: PhotoRef[] = [
  {
    alt: 'Drobne rysy na plastikowych elementach zderzaka',
    url: img('20251020_165548.jpg'),
  },
  {
    alt: 'Drobne rysy na plastikowych listwach drzwi',
    url: img('20251020_165537.jpg'),
  },
  {
    alt: 'Drobna rysa na lakierze przedniego zderzaka — uczciwie pokazana',
    url: img('20250901_131728.jpg'),
  },
  {
    alt: 'Drobna rysa na lakierze zderzaka — zbliżenie z widoczną głębokością bieżnika',
    url: img('20250901_131659.jpg'),
  },
  {
    alt: 'Drobna rysa na tylnym zderzaku — transparentność stanu',
    url: img('IMG_20230422_181159.jpg'),
  },
]

export const wheelsPhotos: PhotoRef[] = [
  {
    alt: 'Letnie 17" Premiere Edition — dwukolorowe alufelgi',
    url: img('20250901_131605.jpg'),
  },
  {
    alt: 'Zimowe 17" alufelgi Nokian — kompletny zestaw',
    url: img('IMG_20210109_140130.jpg'),
  },
]

export const tiresInTrunkPhoto: PhotoRef = {
  alt: 'Drugi komplet opon w bagażniku — gotowy zestaw sezonowy',
  url: img('IMG_20201222_074745.jpg'),
}

export const ogImageUrl = 'https://futerzak.github.io/yaris-2020/Yaris/FB_IMG_1615045136405.jpg'
