export type ServiceEntry = {
  date: string;
  odometerKm?: number;
  title: string;
  note?: string;
  highlight?: boolean; // used for roof rack entry etc.
};

export type CarData = {
  model: string;
  version: string;
  year: string;
  mileage: string;
  color: string;
  drivetrain: string;
  power: string;
  price: string;
  negotiable: boolean;
  location: string;
  phone: string;
  tssSystems: string[];
  interiorHighlights: string[];
  addons: string[];
  serviceHistory: ServiceEntry[];
};

export const carData: CarData = {
  model: 'TOYOTA YARIS HYBRID 1.5',
  version: 'PREMIERE EDITION (Full Opcja)',
  year: '2020 (Grudzień – Polska Salon)',
  mileage: '34 036 km (aktualny)',
  color: 'Tokyo Red / Night Sky Black (Tokyo Fusion) – lakier specjalny z kontrastowym dachem',
  drivetrain: 'Hybrid (e-CVT)',
  power: '116 KM',
  price: '82 000 PLN',
  negotiable: true,
  location: 'Kraków',
  phone: '535504117',
  tssSystems: [
    'PCS – Pre-Collision System',
    'LDA – Lane Departure Alert z asystą kierowania',
    'AHB – Automatyczne światła drogowe',
    'DRCC – Aktywny tempomat (radarowy)',
    'RSA – Rozpoznawanie znaków drogowych',
  ],
  interiorHighlights: [
    'Smart Entry & Start',
    'Automatyczna klimatyzacja dwustrefowa',
    'Podgrzewane fotele',
    '8-calowy ekran multimedialny',
  ],
  addons: [
    'Powłoka ceramiczna z 9-letnią gwarancją (ok. 4 lata pozostałe)',
    'Komplet kół zimowych na alufelgach 17” (gotowy zestaw)',
    'Oryginalny bagażnik dachowy Toyota — zakup i montaż udokumentowany w ASO (3.01.2022)',
    'Czujniki parkowania przód — profesjonalna integracja ASO z kamerą',
  ],
  serviceHistory: [
    { date: '2020-12-21', title: 'Dostawa pojazdu' },
    { date: '2021-02-24', odometerKm: 2837, title: 'Naprawa', note: 'Mała naprawa po dotarciu, szczegóły w dokumentacji' },
    { date: '2021-12-21', odometerKm: 13585, title: 'Test baterii układu hybrydowego' },
    { date: '2021-12-21', odometerKm: 13585, title: 'Obsługa w serwisie' },
    {
      date: '2022-01-03',
      odometerKm: 14050,
      title: 'ZAKUP/MONTAŻ AKCESORIÓW ASO',
      note: 'Bagażnik Dachowy',
      highlight: true,
    },
    { date: '2022-12-14', odometerKm: 23830, title: 'Test baterii układu hybrydowego' },
    { date: '2022-12-14', odometerKm: 23830, title: 'Obsługa w serwisie' },
    { date: '2023-12-14', odometerKm: 27533, title: 'Obsługa w serwisie' },
    { date: '2024-12-04', odometerKm: 31580, title: 'Obsługa w serwisie' },
  ],
};

export const keyFacts: Array<{ label: string; value: string }> = [
  { label: 'Rok', value: '2020' },
  { label: 'Przebieg', value: '34 036 km' },
  { label: 'Kolor', value: 'Tokyo Red / Night Sky Black' },
  { label: 'Moc', value: '116 KM' },
  { label: 'Napęd', value: 'Hybrid (e-CVT)' },
  { label: 'Lokalizacja', value: 'Kraków' },
];


