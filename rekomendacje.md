# Rekomendacje — strona sprzedażowa Toyota Yaris Hybrid

> **Skonsolidowany backlog** (zastępuje `rekomendacje-composer.md` + `REVIEW.md`).
> Stan: 2026-06-09 · projekt: `yaris-2020` (Vite + React 19 + Tailwind v4) · URL: https://futerzak.github.io/yaris-2020/
> **Branch:** `feature/gallery-and-trust-photos` · ostatni commit `014cb49` · **working tree czysty (wszystko zcommitowane)**
>
> Powstał z połączenia rekomendacji UX/treściowych (Composer) i review technicznego (wydajność obrazów, a11y, SEO, martwy kod), zdeduplikowany i ujednolicony w skali **P0 / P1 / P2**. Konflikty rozstrzygnięte w sekcji [Rozstrzygnięcia](#rozstrzygnięcia-konfliktów).
>
> **Aktualizacja 2026-06-09 (po 2 commitach):** statusy poniżej zweryfikowane bezpośrednio w kodzie (✅ zrobione · 🟡 częściowo · ❌ nie zrobione).

---

## 📍 Stan wdrożenia (zweryfikowany w kodzie)

> **Aktualizacja 2026-06-09 — runda implementacji** (lint ✅ + build ✅): wdrożono większość P0/P1 poza kompresją zdjęć. Zmiany niezcommitowane (working tree).

| Pozycja | Status | Uwaga |
|---|---|---|
| P0 #1 Optymalizacja zdjęć | ❌ | **JEDYNY pozostały P0.** `public/Yaris/` nadal **336 MB / 102 pliki, 0 WebP**; wymaga `sharp` (brak w env). Galeria = 28 zdjęć → payload wzrósł |
| P0 #2 Lazy loading | 🟡→✅* | `OptimizedImage` (9 sekcji) + **preload hero w `<head>`** (✅ teraz). Pozostaje `width/height`/`aspect-ratio` (CLS) |
| P0 #3 Martwy kod | ✅ | Usunięto `index.css`, `App.css`, `ImagePlaceholder.tsx`, `vite.svg`, `react.svg` |
| P0 #4 Marka/bieżnik opon | 🟡 | ✅ **Bridgestone Ecopia EP150** wpisane (`wheelSets` + FAQ). ❌ bieżnik (pomiar po stronie właściciela) |
| P1 #5 Dowody zaufania | 🟡 | Cert Gtechniq + dokumenty z salonu. ❌ książka serwisowa/faktury ASO, 6 znaków VIN (materiały od właściciela) |
| P1 #6 SEO | ✅ | **JSON-LD `Car`+`Offer`**, `canonical`, własny **favicon.svg**, `theme-color` |
| P1 #7 a11y emoji | ✅ | `aria-hidden` we wszystkich sekcjach (dodano TrustBadges, WhyWorth, ValueBreakdown, CTA, FAQ) |
| P1 #7 FAQ + Lightbox a11y | ✅ | FAQ `aria-expanded`/`aria-controls`/`role=region`; Lightbox `role=dialog`+`aria-modal`+focus-trap+**prev/next + strzałki**+blokada scrolla |
| P1 #8 Addons `<h2>` | ✅ | Zrobione wcześniej (commit `014cb49`) |
| P1 #8 `prefers-reduced-motion` | ✅ | Guard w `tailwind.css` (animacje hero + scroll-behavior) |
| P1 #9 Breakdown wartości | ✅ | Dodano czujniki (~1000) + dywaniki (~400) z ikonami → suma ~**7900 PLN** |
| P1 #10 Spalanie + gwarancja baterii | ❌ | Dane od właściciela |
| P2 Licznik zdjęć w galerii | ✅ | `{designPhotos.length} zdjęć` w `Gallery.tsx` (był już wcześniej — wcześniejsza notka „brak" była błędna) |
| P2 Dynamiczny rok w stopce | ✅ | `{new Date().getFullYear()}` w CTA |

**Werdykt aktualny:** P1 (SEO, a11y) + większość P0 zrobione i build przechodzi. **Zostaje jedyny krytyczny blocker: kompresja zdjęć (P0 #1)** — wymaga instalacji `sharp`. Do wpisania jeszcze (dane od właściciela): bieżnik opon, VIN, faktury ASO, spalanie, gwarancja baterii.

---

## Werdykt

Strona jest **bardzo mocna treściowo** — narracja "od rodziny fana motoryzacji", pełna transparentność (historia naprawy, karta serwisowa ASO), rozbicie wartości dodatków, FAQ, sticky bar z kontaktem. To znacznie więcej niż ogłoszenie z OLX/Otomoto.

**Jedyny krytyczny problem jest techniczny: waga zdjęć.** Strona ładuje **~63 MB** obrazów naraz (hero/LCP = 4,8 MB, jedna miniatura kół = 14 MB), bez lazy-loadingu, a do hostingu trafia **336 MB / 102 plików, z których kod używa tylko 15**. To zabija pierwsze wrażenie na telefonie — a kupujący auto klika link najczęściej z telefonu.

Legenda priorytetów:
- **P0** — zrobić, zanim wyślesz komukolwiek link.
- **P1** — przed szeroką / publiczną publikacją ("publication-grade").
- **P2** — nice-to-have, gdy będzie czas.

---

## ✅ Zrobione

### Treść i język
- Poprawki językowe (`Polski Salon`, `pełne wyposażenie`, nagłówki, interpunkcja)
- Ujednolicony tytuł strony (`Raport Sprzedażowy`)
- Ujednolicony opis gwarancji ceramiki + poprawka zdjęcia/alt w sekcji ceramiki
- Nagłówek ExpertSection: „Europejski Samochód Roku 2021" zamiast „Ultra-Premium"
- Usunięcie zduplikowanej listy dodatków (serwis vs sekcja Addons)
- `lang="pl"` + meta `description`
- Copyright → 2026

### UX i konwersja
- **Sticky bar** — cena + telefon + WhatsApp po scrollu (+ safe area na iPhone)
- **WhatsApp** w Hero i stopce (z gotową wiadomością)
- **Open Graph / Twitter Card** — podgląd linku przy udostępnianiu
- Kotwica `#kontakt` w stopce

### Opony i FAQ
- Info o oponach: letnie z dostawy salonowej, zimowe Nokian z salonu Toyota
- Osobna ramka „Opony" w sekcji kół
- FAQ: jazda próbna, jakie opony, kiedy dostępne

### Wdrożone w 2 commitach (branch `feature/gallery-and-trust-photos`, 2026-06-09)
- **Galeria rozszerzona** 9 → ~12 widocznych zdjęć (tył, kokpit, kanapa, bagażnik, wyposażenie); `photos.ts` referuje 28 plików
- **Dowody zaufania (zdjęcia):** dokumenty z salonu Toyota Romanowski (OwnerStory), certyfikat Gtechniq #311057 (Addons), zegary hybrydy (ExpertSection), nowy kokpit + kanapa (InteriorSection), +3 rysy na lakierze z uczciwym opisem (ConditionSection)
- **Ceramika nazwana:** „Gtechniq Crystal Serum Ultra" w treści
- **`OptimizedImage`** — lazy loading + `decoding="async"`, hero `fetchPriority="high"` (9 sekcji)
- **`Addons.tsx`: `<h3>` → `<h2>`** (P1 #8)
- **`aria-hidden` na emoji** w OwnerStory, ConditionSection, WheelsSection (+ StickyBar)
- OG image → lżejsze zdjęcie (`FB_IMG_…`, ~70 KB) zamiast 4 MB+
- WheelsSection: zimówki bez pliku 14 MB w referencjach

> ⚠️ Composer raportował część z tych zmian jako „niezcommitowane" — w rzeczywistości **working tree jest czysty, wszystko jest w commicie `014cb49`**. Composer twierdził też, że galeria ma licznik „X zdjęć" — **w `Gallery.tsx` go nie ma** (do zrobienia, P2 #15).

---

## 🚫 Świadomie pominięte

- **Linki / porównanie cen z Otomoto / OLX** — świadoma decyzja właściciela (sprzedaż bezpośrednia, bez kierowania ruchu do marketplace'ów i konkurencji). Konsensus wszystkich review: utrzymać. Brak „społecznego dowodu" z portali rekompensujemy **twardymi dowodami zaufania na stronie** (zdjęcia dokumentów ASO, certyfikat ceramiki, częściowy VIN — patrz P1 #5). Ewentualnie wzmianka „ogłoszenie na życzenie" ustnie / na wizytówce, nie na stronie.

---

## 🔴 P0 — Zanim wyślesz komukolwiek link

### 1. Optymalizacja i czyszczenie zdjęć — problem #1
**Stan zmierzony:** `public/Yaris/` = **336 MB / 102 pliki**, kod używa **15 zdjęć**; realnie ładowane ~**63 MB**; hero (LCP) **4,8 MB**; `IMG_20210109_085038.jpg` (koła zimowe) **14 MB** jako miniatura.

- [ ] Usunąć z repo **i z `dist/Yaris/`** wszystkie nieużywane pliki (zostawić 15 referencjonowanych + ew. kilka w rezerwie)
- [ ] Przeskalować do realnych rozmiarów: hero ~1920px, miniatury galerii ~800px szer. Cel: **< 300 KB/plik**
- [ ] Wygenerować **WebP/AVIF** z fallbackiem (`<picture>`) — oszczędność 60-80% vs JPG
- [ ] Narzędzie: jednorazowo `sharp`/`squoosh` na 15 plikach + commit (prostsze niż build-time plugin dla landingu jednego auta)

**Cel: ~63 MB → ~2-4 MB.** Pliki: `public/Yaris/`, `src/data/photos.ts`.

### 2. Lazy loading + wymiary obrazów — 🟡 częściowo
- [x] ✅ `loading="lazy"` + `decoding="async"` — **zrobione** przez `OptimizedImage` w 9 sekcjach (commit `014cb49`)
- [x] ✅ Hero `fetchPriority="high"` + `loading="eager"` — **zrobione**
- [ ] Preload hero w `<head>` — **brak**
- [ ] `width`/`height` lub stały `aspect-ratio` (CLS) — **brak**, szczególnie `ExpertSection.tsx`, `ServiceHistory.tsx`
- [ ] Lightbox nadal surowe `<img>` (do przyjęcia — ładowane na żądanie)

### 3. Usunięcie martwego kodu (boilerplate Vite)
- [ ] `src/index.css` i `src/App.css` — resztki startera (ciemne tło `#242424`, spinning logo, `#root max-width`), **nie importowane** (`main.tsx` ładuje tylko `styles/tailwind.css`) — mylące, usunąć
- [ ] `src/assets/react.svg`, `public/vite.svg`, `src/components/ImagePlaceholder.tsx` (nieużywany) — usunąć

### 4. Bieżnik + marka opon letnich (quick win, ~15-40 min)
Najczęstsze pytanie kupującego — brak tej danej wymusza telefon zamiast decyzji o wizycie.

- [ ] **Marka opon letnich: Bridgestone Ecopia EP150** _(ustalone 2026-06-09, ale ⚠️ NADAL NIE w kodzie — `carData.ts` linie 100 i 169 mają „oryginalne z dostawy salonowej")_ → wpisać do `wheelSets` + FAQ
- [ ] Zmierzyć i wpisać głębokość bieżnika: letnie + zimowe (np. „letnie ~5 mm, zimowe ~6 mm")
- [ ] Opcjonalnie: rok produkcji opon (z boku opony)

Plik: `src/data/carData.ts` → `wheelSets`, FAQ.

---

## 🟡 P1 — Przed publiczną publikacją

### 5. Dowody zaufania (zdjęcia + VIN) — 🟡 częściowo
- [x] ✅ Certyfikat / dokumentacja powłoki ceramicznej — **zrobione** (Gtechniq #311057 w Addons) + dokumenty z salonu (OwnerStory)
- [ ] Zdjęcia książki serwisowej / faktur ASO (z zamazanymi danymi osobowymi) — **brak**
- [ ] **Ostatnie 6 znaków VIN** (nie pełny — prywatność) — **brak**

Gdzie: nowa sekcja `DocumentsSection.tsx` lub rozszerzenie `TrustBadges` / `ServiceHistory`.

### 6. SEO — dane strukturalne + favicon
- [ ] **JSON-LD** `schema.org/Vehicle` + `Product`/`Offer` (marka, model, rok, przebieg, cena, lokalizacja, stan) → rich snippet w Google
- [ ] `<link rel="canonical">`
- [ ] **Własny favicon** (zamiast domyślnego `vite.svg`) + `theme-color` — domyślna ikona Vite przy share na WhatsApp sygnalizuje „niedokończona strona"

Gdzie: `index.html`, `public/`.

### 7. Dostępność (a11y)
- [ ] 🟡 **Emoji jako ikony** → `aria-hidden="true"`. ✅ zrobione: OwnerStory, ConditionSection, WheelsSection, StickyBar. ❌ brak: **TrustBadges, WhyWorth, ValueBreakdown, CTA, FAQ**
- [ ] **FAQ accordion**: dodać `aria-expanded` + `aria-controls`; strzałka ▼ → `aria-hidden`
- [ ] **Lightbox**: `role="dialog"` + `aria-modal`, focus-trap, przywracanie focusu, **nawigacja prev/next + strzałkami** (dziś pokazuje 1 zdjęcie bez przeklikiwania)

### 8. Animacje + spójność semantyczna
- [ ] `prefers-reduced-motion` — wyłączyć `animate-fade-in` / `animate-slide-up` w hero
- [x] ✅ `Addons.tsx`: `<h3>` → `<h2>` — **zrobione** (commit `014cb49`)

### 9. Wartość dodatków — pełniejszy breakdown ❌
Obecnie nadal 4 pozycje, suma ~6500 PLN, bez czujników i dywaników (zmieniono tylko nazwę ceramiki na „Gtechniq Crystal Serum Ultra").

- [ ] Dodać do `valueAddedItems`: czujniki ASO (~800-1200 PLN), dywaniki (~300-500 PLN)
- [ ] Zaktualizować łączną sumę (realnie ~8000-9000 PLN)
- [ ] Ew. wspomnieć wartość HUD / Premiere Edition jako wyróżnik wersji

Pliki: `src/data/carData.ts` → `valueAddedItems`, `ValueBreakdown.tsx`.

### 10. Koszty eksploatacji i gwarancja hybrydy
- [ ] Średnie spalanie (realne zużycie właściciela, np. 3,5-4,5 l/100 km w mieście)
- [ ] Pozostała gwarancja na baterię hybrydową (data końca + lata)
- [ ] Opcjonalnie: szacunkowy koszt OC/AC

Gdzie: `ExpertSection.tsx` lub nowa karta w `keyFacts` / `TrustBadges`.

---

## 🟢 P2 — Nice-to-have

### 11. Pełna lista wyposażenia Premiere Edition
- [ ] Kamera cofania, JBL, tapicerka, reflektory LED, Smart Entry itd. (wg faktycznej konfiguracji) — rozwijana lista lub sekcja „Wyposażenie fabryczne"

Gdzie: `carData.ts` → nowe pole `factoryEquipment`, nowy komponent.

### 12. FAQ — brakujące pytania
- [ ] *Czy akceptujecie leasing / kredyt?*
- [ ] *Czy mogę zrobić niezależny przegląd przed zakupem?* → TAK
- [ ] *Ile kluczyków?* (jest w „Co dostaję" — można wydzielić)

Gdzie: `src/data/carData.ts` → `faqItems`.

### 13. Udostępnianie i analityka
- [ ] Przycisk „Udostępnij" (Web Share API + fallback WhatsApp)
- [ ] QR kod z linkiem (do wydruku na wizytówkę przy aucie)
- [ ] Analityka (Plausible / GA) — ilu odwiedzających dzwoni

Gdzie: `index.html`, nowy `ShareButton.tsx`.

### 14. Dodatkowy kanał kontaktu
- [ ] E-mail kontaktowy (nawet ogólny)
- [ ] Opcjonalnie: prosty formularz „Umów oględziny" (Formspree / Netlify Forms)
- [ ] Anchor „Kontakt" w sticky barze (przewijanie do CTA — sticky daje dziś tel/WhatsApp)

Gdzie: `ContactButtons.tsx`, `CTA.tsx`, `StickyBar.tsx`.

### 15. Nawigacja i mobile
- [ ] Sticky menu sekcji u góry (Historia | Galeria | Serwis | Stan | FAQ | Kontakt) + `scroll-margin-top`
- [ ] Audit hero `min-h-[85vh]` na małych telefonach (~360×640) — badge+h1+podtytuł+przyciski+cena+6 kafelków KeyFacts bywa ciasno; ew. KeyFacts pod hero
- [ ] Galeria: licznik „X zdjęć" / „zobacz wszystkie"
- [ ] Mapka lokalizacji (Kraków)

### 16. Porządki techniczne
- [ ] `data/photos.ts` — usunąć martwy `album` i nieużywane pole `external` z `PhotoRef`
- [ ] `eslint .` + `tsc -b` na czysto przed deployem (bramka CI / GitHub Pages)
- [ ] Dynamiczny rok w stopce (zamiast „© 2026")
- [ ] README projektu (dziś domyślny template Vite) — opis, URL produkcyjny, instrukcja deploy

---

## Rozstrzygnięcia konfliktów

| Temat | Composer | REVIEW | Rozstrzygnięcie (konsensus 5/5) |
|---|---|---|---|
| **OLX/Otomoto** | świadomie pominięte | P2: dodać link (social proof) | **Pominięte** — decyzja właściciela; social proof przez dokumenty + VIN + zdjęcia ASO |
| **Favicon** | priorytet niski | P1 (SEO) | **P1** — pakiet razem z JSON-LD/canonical/theme-color |
| **VIN / dowody** | priorytet wysoki | P2 | **P1** (#5) — jeden scalony item; tylko 6 ostatnich znaków (prywatność) |
| **eslint/tsc** | — | P2 drobiazg | **P2 / bramka deployu** (GPT-5.5 sugerował P0; kompromis) |

---

## 🎯 Sugerowana kolejność (quick wins)

**Faza A (~2-4 h) — przed wysłaniem linku — POZOSTAŁO:**
1. ❌ **Optymalizacja zdjęć** (P0 #1) — `public/Yaris/` (skala + WebP, usuń nieużywane). **Najpilniejsze** — galeria urosła do 28 zdjęć, payload wzrósł.
2. 🟡 Lazy loading (P0 #2) — zrobione; **dorobić** preload hero w `<head>` + `width/height`.
3. ❌ Usuń martwy kod (P0 #3): `index.css`, `App.css`, `vite.svg`, `react.svg`, `ImagePlaceholder.tsx`.

**Faza B (~30 min) — POZOSTAŁO:**
4. ❌ Wpisz markę opon (**Bridgestone Ecopia EP150**) + zmierzony bieżnik do `carData.ts` (P0 #4) — wciąż „oryginalne z dostawy salonowej".

> **Po Fazie A+B link można wysyłać.** Treść i dowody zaufania (Faza C #5 częściowo) już są na branchu.

**Faza C (przed szerszą publikacją):**
5. Dowody zaufania: 2-3 zdjęcia dokumentów + 6 znaków VIN (P1 #5) — najsilniejszy dźwignik konwersji
6. JSON-LD + favicon + canonical (P1 #6) — profesjonalny share i SEO
7. A11y: emoji aria-hidden, FAQ, lightbox (P1 #7) + reduced-motion + h2 (P1 #8)

P1 #9-10 i całe P2 — w miarę czasu.

---

## Pliki kluczowe

| Plik | Rola |
|------|------|
| `src/data/carData.ts` | Treść, FAQ, opony, wartość dodatków |
| `src/data/photos.ts` | Mapowanie zdjęć (do czyszczenia) |
| `src/components/Hero.tsx` | Pierwsze wrażenie, CTA, LCP |
| `src/components/Gallery.tsx` + `Lightbox.tsx` | Galeria + modal (a11y) |
| `src/components/StickyBar.tsx` / `ContactButtons.tsx` | Sticky kontakt |
| `src/components/WheelsSection.tsx` | Opony i koła |
| `src/components/ValueBreakdown.tsx` | Wartość pakietu |
| `index.html` | SEO, Open Graph, JSON-LD, favicon |

---

_Dokument powstał w pipeline multi-agent (Claude Sonnet 4.6, Claude Opus 4.7, GPT-5.5 High, Cursor Composer 2, Gemini 3 Pro) — konsensus 5/5 agentów._
