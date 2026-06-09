# Review strony sprzedażowej Toyota Yaris + plan poprawek

_Data: 2026-06-09 · zakres: cały projekt `yaris-2020` (Vite + React 19 + Tailwind v4)_

## Werdykt ogólny

Strona jest **bardzo dobra contentowo i wizualnie** — narracja "od rodziny fana motoryzacji", pełna transparentność (sekcja stanu technicznego, historia naprawy), karta serwisowa ASO, rozbicie wartości dodatków, FAQ, sticky bar z kontaktem. To znacznie więcej niż typowe ogłoszenie z OLX/Otomoto i realnie buduje zaufanie.

**Największy problem nie jest treściowy, lecz techniczny: wydajność obrazów.** Strona w obecnej formie ładuje ~63 MB zdjęć od razu, a do hostingu ląduje 336 MB. To zabija pierwsze wrażenie na telefonie (a kupujący auto klika w link najczęściej z telefonu) i psuje SEO.

Priorytety: **P0 = naprawić, zanim wyślesz komuś link** · **P1 = warto przed publikacją** · **P2 = nice-to-have**.

---

## P0 — Krytyczne (zrobić przed udostępnieniem linku)

### 1. Waga i optymalizacja zdjęć — #1 problem
**Stan faktyczny (zmierzony):**
- `public/Yaris/` waży **336 MB / 102 pliki**, ale kod używa tylko **15 zdjęć**. 87 plików jest deployowanych bez powodu.
- Realnie ładowane na stronie: **~63 MB**.
- Hero (obraz LCP, ładowany natychmiast): **4,8 MB**.
- Zdjęcie kół zimowych `IMG_20210109_085038.jpg`: **14 MB** (!) jako miniatura w galerii.

**Skutki:** kilkanaście sekund ładowania na LTE, ogromny transfer, słaby Largest Contentful Paint, gorszy ranking w Google.

**Plan:**
- [ ] Usunąć z repo/deployu wszystkie nieużywane zdjęcia (zostawić 15 referencjonowanych + ewentualnie kilka w rezerwie). `dist/Yaris/` też.
- [ ] Przeskalować zdjęcia do realnych rozmiarów wyświetlania: hero max ~1920px, miniatury galerii ~800px szer. Cel: **każde < 300 KB**.
- [ ] Wygenerować **WebP/AVIF** (oszczędność 60-80% vs JPG) z fallbackiem przez `<picture>`.
- [ ] Najprościej: pipeline buildowy, np. [`vite-imagetools`](https://github.com/JonasKruckenberg/imagetools) albo jednorazowe `sharp`/`squoosh` na folderze. Docelowo ~63 MB → ~2-4 MB całości.

### 2. Lazy loading + wymiary obrazów
- [ ] Dodać `loading="lazy"` i `decoding="async"` do **wszystkich** `<img>` poza hero (Gallery, Interior, Wheels, Service, Addons, Condition). Obecnie **0 obrazów** ma lazy-loading — wszystko ładuje się naraz.
- [ ] Hero ma zostać `loading="eager"` + `fetchpriority="high"` (to LCP) i najlepiej preload w `<head>`.
- [ ] Dodać `width`/`height` (lub stały `aspect-ratio`) do obrazów, by uniknąć skoków layoutu (CLS) — dotyczy m.in. `ExpertSection` i `ServiceHistory`, gdzie obraz boczny nie ma żadnego ograniczenia proporcji.

### 3. Martwe pliki CSS z boilerplate Vite
- [ ] `src/index.css` i `src/App.css` to resztki startera Vite (ciemne tło `#242424`, `display:flex; place-items:center` na `body`, spinning React logo, `#root max-width:1280px`). **Nie są nigdzie importowane** (`main.tsx` ładuje tylko `styles/tailwind.css`), więc są nieszkodliwe, ale mylące — usunąć oba pliki, żeby nikt przez pomyłkę ich nie podpiął.
- [ ] `src/assets/react.svg`, `public/vite.svg` oraz `components/ImagePlaceholder.tsx` (nieużywany) — do usunięcia.

---

## P1 — Ważne (przed publiczną publikacją)

### 4. SEO — dane strukturalne
- [ ] Brak JSON-LD. Dla ogłoszenia auta dodać `schema.org/Vehicle` + `Product`/`Offer` (marka, model, rok, przebieg, cena, lokalizacja, stan). To realnie pomaga w Google i daje rich snippet.
- [ ] Dodać `<link rel="canonical">`.
- [ ] Favicon to wciąż domyślny `vite.svg` — podmienić na np. literę "Y" / ikonę auta + `theme-color`.

### 5. Dostępność (a11y)
- [ ] **Emoji jako ikony** (TrustBadges, OwnerStory, WhyWorth, ValueBreakdown, CTA, FAQ) są czytane przez czytniki ekranu ("emoji rodzina", "młotek"...). Owinąć dekoracyjne emoji w `aria-hidden="true"`.
- [ ] **FAQ accordion**: przyciskom brakuje `aria-expanded` i `aria-controls`; strzałka ▼ powinna być `aria-hidden`.
- [ ] **Lightbox**: brak `role="dialog"`, `aria-modal`, focus-trapa i przywracania focusu po zamknięciu. Dodatkowo brak nawigacji prev/next i strzałkami — kliknięcie w galerię pokazuje 1 zdjęcie bez możliwości przeklikania.
- [ ] Sprawdzić kontrast małych etykiet `--color-tokyo-red` (#b0122b) na białym — OK (~6:1), ale `text-neutral-400/500` na jasnym tle bywa zbyt jasny.

### 6. `prefers-reduced-motion`
- [ ] Animacje `animate-fade-in` / `animate-slide-up` w hero nie respektują `prefers-reduced-motion`. Dodać media query wyłączające animacje (dostępność + mniej "skakania").

### 7. Spójność semantyczna nagłówków
- [ ] `Addons.tsx` używa `<h3>` jako tytułu sekcji, gdy wszystkie inne sekcje mają `<h2>`. Ujednolicić do `<h2>` (hierarchia: jeden `<h1>` w hero — OK — i `<h2>` per sekcja).

---

## P2 — Nice-to-have (konwersja i dopieszczenie)

### 8. Konwersja / zaufanie
- [ ] **VIN / data pierwszej rejestracji / nr rej.** — opcjonalnie, ale poważni kupujący pytają; choćby częściowo zamaskowany VIN podnosi wiarygodność.
- [ ] Link do ogłoszenia na **OLX/Otomoto** (społeczny dowód, że to realna oferta) i/lub osadzona mapka lokalizacji (Kraków).
- [ ] Rozważyć **anchor "Kontakt"** w sticky barze przewijający do sekcji CTA (dziś sticky daje tylko tel/WhatsApp — to OK, ale przycisk "szczegóły kontaktu" bywa wygodny).
- [ ] Galeria: pokazać licznik "X zdjęć" / link "zobacz wszystkie", skoro masz ich dużo więcej niż 9.

### 9. Mobile UX
- [ ] Hero `min-h-[85vh]` mieści badge + h1 + podtytuł + przyciski + cenę + `KeyFacts` (6 kafelków). Na małych telefonach (~360×640) bywa ciasno / przewija się. Sprawdzić realnie i ewentualnie przenieść `KeyFacts` pod hero albo zmniejszyć na mobile.

### 10. Drobiazgi
- [ ] `data/photos.ts` — zakomentowany `album` i pole `external` w `PhotoRef` są nieużywane (Lightbox obsługuje `external`, ale żadne zdjęcie go nie ma). Uprościć typ albo usunąć martwą gałąź.
- [ ] `eslint .` + `tsc -b` na czysto przed deployem (CI/GitHub Pages).
- [ ] Stopka "© 2026" — OK, ale rozważyć dodanie roku dynamicznie.

---

## Sugerowana kolejność prac

1. **Optymalizacja + czyszczenie zdjęć** (P0 #1, #2) — największy zysk, ~63 MB → ~3 MB.
2. **Usunięcie martwego kodu** (P0 #3) — 5 min, porządek.
3. **JSON-LD + favicon + canonical** (P1 #4).
4. **A11y: emoji aria-hidden, FAQ, lightbox** (P1 #5, #6).
5. **Spójność nagłówków + reduced-motion** (P1 #6, #7).
6. **Konwersja i mobile** (P2) — w miarę czasu.

> Po punktach 1-2 strona jest gotowa do wysłania linkiem. Punkty 3-5 robią ją "publication-grade".
