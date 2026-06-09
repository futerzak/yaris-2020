# Rekomendacje — strona sprzedażowa Toyota Yaris Hybrid

> **Skonsolidowany backlog** (zastępuje `rekomendacje-composer.md` + `REVIEW.md`).
> Stan: 2026-06-09 · projekt: `yaris-2020` (Vite + React 19 + Tailwind v4) · URL: https://futerzak.github.io/yaris-2020/
>
> Powstał z połączenia rekomendacji UX/treściowych (Composer) i review technicznego (wydajność obrazów, a11y, SEO, martwy kod), zdeduplikowany i ujednolicony w skali **P0 / P1 / P2**. Konflikty rozstrzygnięte w sekcji [Rozstrzygnięcia](#rozstrzygnięcia-konfliktów).

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

### 2. Lazy loading + wymiary obrazów
- [ ] `loading="lazy"` + `decoding="async"` na **wszystkich** `<img>` poza hero (Gallery, Interior, Wheels, Service, Addons, Condition) — obecnie **0 obrazów** ma lazy-loading
- [ ] Hero: `loading="eager"` + `fetchpriority="high"` + preload w `<head>` (to LCP)
- [ ] `width`/`height` lub stały `aspect-ratio` (CLS) — szczególnie `ExpertSection.tsx`, `ServiceHistory.tsx` (obraz boczny bez ograniczenia proporcji)

### 3. Usunięcie martwego kodu (boilerplate Vite)
- [ ] `src/index.css` i `src/App.css` — resztki startera (ciemne tło `#242424`, spinning logo, `#root max-width`), **nie importowane** (`main.tsx` ładuje tylko `styles/tailwind.css`) — mylące, usunąć
- [ ] `src/assets/react.svg`, `public/vite.svg`, `src/components/ImagePlaceholder.tsx` (nieużywany) — usunąć

### 4. Bieżnik + marka opon letnich (quick win, ~15-40 min)
Najczęstsze pytanie kupującego — brak tej danej wymusza telefon zamiast decyzji o wizycie.

- [x] **Marka opon letnich: Bridgestone Ecopia EP150** _(ustalone 2026-06-09)_ → wpisać do `wheelSets`
- [ ] Zmierzyć i wpisać głębokość bieżnika: letnie + zimowe (np. „letnie ~5 mm, zimowe ~6 mm")
- [ ] Opcjonalnie: rok produkcji opon (z boku opony)

Plik: `src/data/carData.ts` → `wheelSets`, FAQ.

---

## 🟡 P1 — Przed publiczną publikacją

### 5. Dowody zaufania (zdjęcia + VIN) — rekompensata za brak OLX/Otomoto
- [ ] Zdjęcia książki serwisowej / faktur ASO (z zamazanymi danymi osobowymi)
- [ ] Certyfikat / dokumentacja powłoki ceramicznej (produkt, data, pozostała gwarancja)
- [ ] **Ostatnie 6 znaków VIN** (nie pełny — prywatność) — buduje wiarygodność u poważnych kupujących

Gdzie: nowa sekcja `DocumentsSection.tsx` lub rozszerzenie `TrustBadges` / `ServiceHistory`.

### 6. SEO — dane strukturalne + favicon
- [ ] **JSON-LD** `schema.org/Vehicle` + `Product`/`Offer` (marka, model, rok, przebieg, cena, lokalizacja, stan) → rich snippet w Google
- [ ] `<link rel="canonical">`
- [ ] **Własny favicon** (zamiast domyślnego `vite.svg`) + `theme-color` — domyślna ikona Vite przy share na WhatsApp sygnalizuje „niedokończona strona"

Gdzie: `index.html`, `public/`.

### 7. Dostępność (a11y)
- [ ] **Emoji jako ikony** (TrustBadges, OwnerStory, WhyWorth, ValueBreakdown, CTA, FAQ) → owinąć w `aria-hidden="true"` (czytniki ekranu czytają „emoji rodzina")
- [ ] **FAQ accordion**: dodać `aria-expanded` + `aria-controls`; strzałka ▼ → `aria-hidden`
- [ ] **Lightbox**: `role="dialog"` + `aria-modal`, focus-trap, przywracanie focusu, **nawigacja prev/next + strzałkami** (dziś pokazuje 1 zdjęcie bez przeklikiwania)

### 8. Animacje + spójność semantyczna
- [ ] `prefers-reduced-motion` — wyłączyć `animate-fade-in` / `animate-slide-up` w hero
- [ ] `Addons.tsx`: `<h3>` → `<h2>` (pozostałe sekcje mają `<h2>`; hierarchia: jeden `<h1>` w hero)

### 9. Wartość dodatków — pełniejszy breakdown
Obecnie suma ~6500 PLN, bez czujników i dywaników.

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

**Faza A (~2-4 h) — przed wysłaniem linku:**
1. Optymalizacja zdjęć: usuń 87 nieużywanych z `public/Yaris/` + `dist/Yaris/`, skala + WebP na 15 używanych (P0 #1)
2. Lazy loading poza hero + `fetchpriority="high"` + width/height na hero (P0 #2)
3. Usuń martwy kod: `index.css`, `App.css`, `vite.svg`, `react.svg`, `ImagePlaceholder.tsx` (P0 #3)

**Faza B (~30 min):**
4. Wpisz markę opon (Bridgestone Ecopia EP150) + zmierzony bieżnik do `carData.ts` (P0 #4)

> **Po Fazie A+B link można wysyłać.**

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
