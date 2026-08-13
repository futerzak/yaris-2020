import { wheelsSummerPhoto, wheelsWinterPhoto } from './photos'
import type { PhotoRef } from './photos'

export type ServiceEntry = {
  date: string
  odometerKm?: number
  title: string
  note?: string
  highlight?: boolean
}

export type Addon = {
  text: string
  highlight?: boolean
}

export type WheelSet = {
  season: string
  seasonColor: string
  title: string
  rims: string
  tires: string
  tags: string[]
  photo: PhotoRef
}

export type CarData = {
  model: string
  version: string
  year: string
  mileageKm: number
  mileage: string
  color: string
  drivetrain: string
  power: string
  pricePln: number
  price: string
  negotiable: boolean
  location: string
  phone: string
  tssSystems: string[]
  interiorHighlights: string[]
  addons: Addon[]
  serviceHistory: ServiceEntry[]
}

export const formatKm = (n: number) => `${n.toLocaleString('pl-PL')} km`
export const formatPln = (n: number) => `${n.toLocaleString('pl-PL')} PLN`
export const formatPlnNumber = (n: number) => n.toLocaleString('pl-PL')

// Jedyna edytowalna para liczb — reszta strony wylicza się z nich
const mileageKm = 34036
const pricePln = 76900

export const carData: CarData = {
  model: 'TOYOTA YARIS HYBRID 1.5',
  version: 'PREMIERE EDITION (pełne wyposażenie)',
  year: '2020 (grudzień – polski salon)',
  mileageKm,
  mileage: `${formatKm(mileageKm)} (aktualny)`,
  color: 'Tokyo Red / Night Sky Black (Tokyo Fusion) – lakier specjalny z kontrastowym dachem',
  drivetrain: 'Hybrid (e-CVT)',
  power: '116 KM',
  pricePln,
  price: formatPln(pricePln),
  negotiable: true,
  location: 'Kraków',
  phone: '608678027',
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
    'Head-Up Display — projekcja na przedniej szybie',
  ],
  addons: [
    {
      text: 'Powłoka ceramiczna Gtechniq Crystal Serum Ultra — 9-letnia gwarancja (ok. 3 lata pozostałe)',
      highlight: true,
    },
    { text: 'Dwa komplety kół: letnie 17" Premiere Edition + zimowe 17" alufelgi (gotowe zestawy)' },
    {
      text: 'Oryginalny bagażnik dachowy Toyota — zakup i montaż udokumentowany w ASO (3.01.2022)',
      highlight: true,
    },
    { text: 'Czujniki parkowania przód — montaż w ASO' },
    { text: 'Dwa komplety dywaników: gumowe + filcowe (oryginalne z salonu Toyota)' },
  ],
  serviceHistory: [
    { date: '2020-12-21', title: 'Dostawa pojazdu' },
    { date: '2021-02-24', odometerKm: 2837, title: 'Serwis po dotarciu', note: 'Montaż czujników parkowania przód + wymiana oleju' },
    { date: '2021-12-21', odometerKm: 13585, title: 'Test baterii układu hybrydowego' },
    { date: '2021-12-21', odometerKm: 13585, title: 'Obsługa w serwisie' },
    {
      date: '2022-01-03',
      odometerKm: 14050,
      title: 'Zakup / montaż akcesoriów ASO',
      note: 'Bagażnik dachowy',
      highlight: true,
    },
    {
      date: '2022-02-01',
      title: 'Naprawa blacharsko-lakiernicza ASO',
      note: 'Incydent parkingowy (4.12.2021): wymiana lewych tylnych drzwi + ceramika na nowy element',
      highlight: true,
    },
    { date: '2022-12-14', odometerKm: 23830, title: 'Test baterii układu hybrydowego' },
    { date: '2022-12-14', odometerKm: 23830, title: 'Obsługa w serwisie' },
    { date: '2023-12-14', odometerKm: 27533, title: 'Obsługa w serwisie' },
    { date: '2024-12-04', odometerKm: 31580, title: 'Obsługa w serwisie' },
  ],
}

export const wheelSets: WheelSet[] = [
  {
    season: 'Letnie',
    seasonColor: 'bg-[--color-tokyo-red]',
    title: '17" Premiere Edition',
    rims: 'Dwukolorowe alufelgi z oryginalnego wyposażenia Premiere Edition.',
    tires: 'Bridgestone Ecopia EP150 — opony z dostawy salonowej Toyota.',
    tags: ['Bridgestone Ecopia EP150', 'Oryginalne', '17"', 'Z salonu Toyota'],
    photo: wheelsSummerPhoto,
  },
  {
    season: 'Zimowe',
    seasonColor: 'bg-neutral-800',
    title: '17" alufelgi',
    rims: 'Komplet zimowy na aluminiowych felgach 17" — gotowy do sezonowej wymiany.',
    tires: 'Nokian — komplet kupiony w salonie Toyota. Zdjęcie: styczeń 2021, auto na tym zestawie.',
    tags: ['Nokian', '17"', 'Z salonu Toyota'],
    photo: wheelsWinterPhoto,
  },
]

export const keyFacts: Array<{ label: string; value: string }> = [
  { label: 'Rok', value: '2020' },
  { label: 'Przebieg', value: formatKm(carData.mileageKm) },
  { label: 'Kolor', value: 'Tokyo Red / Night Sky Black' },
  { label: 'Moc', value: carData.power },
  { label: 'Napęd', value: carData.drivetrain },
  { label: 'Miasto', value: carData.location },
]

export const proofFacts: Array<{ label: string; value: string }> = [
  { label: 'Pochodzenie', value: 'Polski salon, grudzień 2020' },
  { label: 'Właściciele', value: 'Jeden, od nowości' },
  { label: 'Serwis', value: 'Wyłącznie ASO Toyota' },
  { label: 'Naprawy', value: 'Jedne drzwi, ASO 2022' },
]

export const ownerStory = {
  headline: 'Dlaczego sprzedajemy',
  story:
    'Grudzień 2020, Toyota Romanowski w Krakowie — pierwszy samochód z polskiego salonu. Regularny serwis ASO, ceramika, dwa komplety kół. Rodzina urosła do pięciu osób i Yaris przestał się mieścić. Zostaje pełna dokumentacja i auto, które miało zostać z nami dłużej.',
  whySelling:
    'Dwoje dorosłych i troje dzieci. Potrzebujemy większego auta. Gdybyśmy byli we dwoje albo troje — zostałby.',
}

export type ValueAddedItem = { item: string; value: number | 'w cenie' }

export const valueAddedItems: ValueAddedItem[] = [
  { item: 'Ceramika Gtechniq Crystal Serum Ultra (ok. 3 lata gwarancji pozostałe)', value: 2000 },
  { item: 'Drugi komplet kół na alufelgach 17"', value: 3000 },
  { item: 'Oryginalny bagażnik dachowy Toyota', value: 1500 },
  { item: 'Czujniki parkowania przód — montaż ASO', value: 1000 },
  { item: 'Dwa komplety dywaników Toyota', value: 400 },
  { item: 'Pełna historia serwisowa ASO', value: 'w cenie' },
]

export type MarketComp = { price: number; km: number; note: string }

export const marketComparables: MarketComp[] = [
  {
    price: 75000,
    km: 52000,
    note: 'Premiere Edition 2020, Tokyo Fusion, polski salon, 2. właściciel — Otomoto, VIII 2026',
  },
  {
    price: 74900,
    km: 47319,
    note: 'Yaris Hybrid 2020, import — Otomoto, VI 2026',
  },
  {
    price: 69900,
    km: 88393,
    note: 'Premiere Edition 2020, 1. właściciel, ASO — Otomoto, VI 2026',
  },
]

export type FaqItem = { question: string; answer: string }

export const faqItems: FaqItem[] = [
  {
    question: 'Dlaczego sprzedajecie?',
    answer: ownerStory.whySelling,
  },
  {
    question: 'Czy były wypadki lub uszkodzenia?',
    answer:
      'Jeden incydent parkingowy (4.12.2021) — wgniecenie i obtarcie lewych tylnych drzwi. Naprawa w ASO Toyota: wymiana drzwi na nowe oryginalne i ceramika na nowy element. Dokumentacja do wglądu. Poza tym powierzchowne rysy na zderzakach — zdjęcia w sekcji stanu.',
  },
  {
    question: 'Czy auto jest finansowane lub obciążone?',
    answer: 'Nie. W pełni opłacone, bez obciążeń. Przy transakcji wszystkie dokumenty własności.',
  },
  {
    question: 'Czy mogę zobaczyć auto w ASO?',
    answer: 'Tak. Umówimy wspólną wizytę w ASO Toyota — historię i stan można zweryfikować z mechanikiem.',
  },
  {
    question: 'Czy cena jest do negocjacji?',
    answer: `Tak, w rozsądnych granicach. ${formatPln(pricePln)} jest ustawione do rynku z sierpnia 2026: porównywalne Premiere 2020 na Otomoto idą po 70–75 tys. przy wyższych przebiegach. Ten ma ${formatKm(mileageKm)}, jednego właściciela i dodatki w cenie.`,
  },
  {
    question: 'Co jest w cenie?',
    answer:
      'Samochód, dwa komplety kół (letnie + zimowe na alufelgach 17"), bagażnik dachowy, dokumenty, książka serwisowa, dokumentacja ceramiki, dwa komplety kluczyków.',
  },
  {
    question: 'Czy można pojechać na jazdę próbną?',
    answer: 'Tak, po umówieniu — okolice Krakowa.',
  },
  {
    question: 'Jakie opony są w zestawie?',
    answer:
      'Letnie: Bridgestone Ecopia EP150 z dostawy salonowej. Zimowe: Nokian, komplet z salonu Toyota. Oba zestawy na alufelgach 17".',
  },
  {
    question: 'Kiedy auto jest dostępne?',
    answer: 'Od zaraz. Oględziny zwykle w ciągu kilku dni.',
  },
]
