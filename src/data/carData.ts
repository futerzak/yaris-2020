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
    'Dwa komplety kół: letnie 17" Premiere Edition + zimowe 17" alufelgi (gotowe zestawy)',
    'Oryginalny bagażnik dachowy Toyota — zakup i montaż udokumentowany w ASO (3.01.2022)',
    'Czujniki parkowania przód — profesjonalna integracja ASO z kamerą',
  ],
  serviceHistory: [
    { date: '2020-12-21', title: 'Dostawa pojazdu' },
    { date: '2021-02-24', odometerKm: 2837, title: 'Serwis po dotarciu', note: 'Montaż czujników parkowania przód + wymiana oleju' },
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

// Owner story and emotional context
export const ownerStory = {
  headline: 'Historia Tego Auta',
  story: `Grudzień 2020. Pierwszy samochód z polskiego salonu. Miał być z nami przez lata — regularny serwis, ceramika, dwa komplety kół, każdy detal dopięty na ostatni guzik. Ale życie pisze własne scenariusze: nasza rodzina urosła do 5 osób i ten piękny, sportowy Yaris po prostu się nie mieści. Sprzedajemy go z ciężkim sercem, ale z pełną dokumentacją i nadzieją, że trafi do kolejnego fana Toyoty.`,
  whySelling: 'Nasza rodzina urosła do 5 osób (2 dorosłych + 3 dzieci) i potrzebujemy większego auta. Yaris to fenomenalny samochód, ale po prostu za mały dla naszych potrzeb. Gdybyśmy byli we dwoje lub troje — zostałby z nami do końca.',
};

// Value breakdown
export const valueAddedItems = [
  { item: 'Powłoka ceramiczna (4 lata gwarancji pozostałe)', value: 2000 },
  { item: 'Drugi komplet kół na alufelgach 17"', value: 3000 },
  { item: 'Oryginalny bagażnik dachowy Toyota', value: 1500 },
  { item: 'Pełna historia serwisowa ASO', value: 'bezcenne' as const },
];

// FAQ
export const faqItems = [
  {
    question: 'Dlaczego sprzedajecie?',
    answer: 'Nasza rodzina urosła do 5 osób (2 dorosłych + 3 dzieci) i potrzebujemy większego auta. Yaris to fenomenalny samochód, ale po prostu za mały dla naszych potrzeb. Gdybyśmy byli we dwoje lub troje — zostałby z nami do końca.',
  },
  {
    question: 'Czy były wypadki?',
    answer: 'NIE. Auto ma pełną dokumentację z ASO i nigdy nie było w wypadku. Wszystkie drobne rysy eksploatacyjne (wyłącznie na plastikach) pokazujemy transparentnie w sekcji stanu technicznego.',
  },
  {
    question: 'Czy auto jest finansowane lub obciążone?',
    answer: 'NIE. Samochód jest w pełni opłacony, wolny od jakichkolwiek obciążeń. Przy transakcji otrzymasz wszystkie dokumenty potwierdzające własność.',
  },
  {
    question: 'Czy mogę zobaczyć auto w ASO?',
    answer: 'TAK. Chętnie umówimy wspólną wizytę w ASO Toyota, gdzie możesz zweryfikować historię serwisową i stan techniczny z mechanikiem.',
  },
  {
    question: 'Czy jest możliwość negocjacji ceny?',
    answer: 'TAK, w rozsądnych granicach. Cena 82 000 PLN uwzględnia wartość wszystkich dodatków (ceramika, dwa komplety kół, bagażnik) i niski przebieg ASO. Jesteśmy otwarci na rozmowę.',
  },
  {
    question: 'Co dostaję przy zakupie?',
    answer: 'Pełen pakiet: samochód, dwa komplety kół (letnie + zimowe na alufelgach 17"), bagażnik dachowy, wszystkie dokumenty, książkę serwisową, dokumentację ceramiki, kluczyki (2 komplety) oraz naszą pełną wiedzę o aucie i porady.',
  },
];


