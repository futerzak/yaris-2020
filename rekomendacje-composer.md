# Rekomendacje — strona sprzedażowa Toyota Yaris Hybrid

> Stan na: czerwiec 2026  
> Plik utworzony po review i pierwszej iteracji poprawek UX.

---

## Zrobione

### Review i treść
- [x] Poprawki językowe (`Polski Salon`, `pełne wyposażenie`, nagłówki, interpunkcja)
- [x] Ujednolicenie tytułu strony (`Raport Sprzedażowy`)
- [x] Ujednolicenie opisu gwarancji ceramiki
- [x] Poprawka zdjęcia/alt w sekcji ceramiki
- [x] `lang="pl"` w HTML
- [x] Meta `description`
- [x] Usunięcie zduplikowanej listy dodatków (serwis vs sekcja Addons)
- [x] Aktualizacja copyright → 2026
- [x] Nagłówek ExpertSection: „Europejski Samochód Roku 2021” zamiast „Ultra-Premium”

### UX i konwersja
- [x] **Sticky bar** — cena + telefon + WhatsApp po scrollu
- [x] **WhatsApp** w Hero i stopce (z gotową wiadomością)
- [x] **Open Graph / Twitter Card** — ładny podgląd linku przy udostępnianiu
- [x] Safe area na iPhone (sticky bar)
- [x] Kotwica `#kontakt` w stopce

### Opony i FAQ
- [x] Informacja o oponach: letnie z dostawy salonowej, zimowe Nokian z salonu Toyota
- [x] Osobna ramka „Opony” w sekcji kół
- [x] FAQ: jazda próbna, jakie opony, kiedy dostępne

### Świadomie pominięte
- [ ] ~~Porównanie cen z Otomoto/OLX~~ — świadoma decyzja właściciela, bez linków do konkurencji

---

## Do zrobienia — priorytet wysoki

### 1. Głębokość bieżnika opon
Kupujący często o to pyta od razu.

- [ ] Zmierzyć i wpisać bieżnik letni + zimowy (np. „letnie ~5 mm, zimowe ~6 mm”)
- [ ] Opcjonalnie: rok produkcji opon (jeśli widoczny na boku)

**Gdzie:** `src/data/carData.ts` → `wheelSets`, FAQ

---

### 2. Marka opon letnich
Jeśli da się odczytać z boku opony (np. Bridgestone, Dunlop, Michelin):

- [ ] Dopisać dokładny model letnich obok „oryginalne z dostawy salonowej”

**Gdzie:** `src/data/carData.ts` → `wheelSets`

---

### 3. Wartość dodatków — pełniejszy breakdown
Obecnie suma to ~6500 PLN, bez czujników parkowania i dywaników.

- [ ] Dodać do `valueAddedItems`: czujniki ASO (~800–1200 PLN), dywaniki (~300–500 PLN)
- [ ] Zaktualizować łączną sumę (realnie bliżej ~8000–9000 PLN)
- [ ] Ewentualnie wspomnieć o wartości HUD / Premiere Edition jako wyróżniku wersji

**Gdzie:** `src/data/carData.ts` → `valueAddedItems`, `ValueBreakdown.tsx`

---

### 4. Dowody zaufania (zdjęcia)
Landing opiera się na zaufaniu — brakuje twardych dowodów wizualnych.

- [ ] Zdjęcia książki serwisowej / faktur ASO (z zamazanymi danymi osobowymi)
- [ ] Certyfikat / dokumentacja powłoki ceramicznej (produkt, data, pozostała gwarancja)
- [ ] Ostatnie 6 znaków VIN (buduje wiarygodność u poważnych kupujących)

**Gdzie:** nowa sekcja np. `DocumentsSection.tsx` lub rozszerzenie `TrustBadges` / `ServiceHistory`

---

## Do zrobienia — priorytet średni

### 5. Koszty eksploatacji i gwarancja hybrydy
Hybryda to mocny argument — warto go skonkretyzować.

- [ ] Średnie spalanie (np. 3,5–4,5 l/100 km w mieście — realne zużycie właściciela)
- [ ] Pozostała gwarancja na baterię hybrydową (data końca + lata)
- [ ] Opcjonalnie: szacunkowy koszt OC/AC

**Gdzie:** `ExpertSection.tsx` lub nowa karta w `keyFacts` / `TrustBadges`

---

### 6. Pełna lista wyposażenia Premiere Edition
Masz TSS i wnętrze, brakuje kompletnej listy fabrycznej.

- [ ] Kamera cofania, JBL, tapicerka, reflektory LED, Smart Entry itd. — wg faktycznej konfiguracji
- [ ] Można jako rozwijana lista lub osobna sekcja „Wyposażenie fabryczne”

**Gdzie:** `carData.ts` → nowe pole `factoryEquipment`, nowy komponent

---

### 7. FAQ — brakujące pytania
- [ ] *Czy akceptujecie leasing / kredyt?* (informacja dla kupujących finansujących)
- [ ] *Czy mogę zrobić niezależny przegląd przed zakupem?* → TAK
- [ ] *Ile kluczyków?* (już jest w „Co dostaję” — można wydzielić jeśli często pytają)

**Gdzie:** `src/data/carData.ts` → `faqItems`

---

### 8. Udostępnianie i analityka
- [ ] Przycisk „Udostępnij” (Web Share API + fallback WhatsApp)
- [ ] QR kod z linkiem do strony / numerem telefonu (do wydruku na wizytówkę przy aucie)
- [ ] Google Analytics, Plausible lub podobne — wiedzieć, ilu odwiedzających dzwoni

**Gdzie:** `index.html`, nowy komponent `ShareButton.tsx`

---

### 9. Dodatkowy kanał kontaktu
Telefon + WhatsApp są — brakuje jeszcze:

- [ ] E-mail kontaktowy (nawet ogólny)
- [ ] Opcjonalnie: prosty formularz „Umów oględziny” (Formspree, Netlify Forms)

**Gdzie:** `ContactButtons.tsx`, `CTA.tsx`

---

## Do zrobienia — priorytet niski / nice-to-have

### 10. Nawigacja po sekcjach
Przy długiej stronie scroll może męczyć.

- [ ] Sticky menu u góry (Historia | Galeria | Serwis | Stan | FAQ | Kontakt)
- [ ] `scroll-margin-top` przy kotwicach

---

### 11. Favicon
Obecnie domyślny Vite (`vite.svg`).

- [ ] Własna ikona — np. czerwony Yaris / logo Toyota stylizowane

**Gdzie:** `public/`, `index.html`

---

### 12. README projektu
README to nadal domyślny template Vite.

- [ ] Krótki opis projektu, URL produkcyjny, instrukcja deploy

---

## Szybka checklista „następny krok”

Jeśli masz 30 minut, zrób w tej kolejności:

1. Zmierz bieżnik opon → wpisz w `wheelSets`
2. Sprawdź markę opon letnich na boku → dopisz
3. Zrób 2–3 zdjęcia dokumentów (serwis, ceramika) → dodaj sekcję
4. Uzupełnij breakdown wartości dodatków
5. Wpisz spalanie i datę końca gwarancji baterii hybrydowej

---

## Pliki kluczowe

| Plik | Rola |
|------|------|
| `src/data/carData.ts` | Treść, FAQ, opony, wartość dodatków |
| `src/components/Hero.tsx` | Pierwsze wrażenie, CTA |
| `src/components/StickyBar.tsx` | Sticky kontakt |
| `src/components/ContactButtons.tsx` | Telefon + WhatsApp |
| `src/components/WheelsSection.tsx` | Opony i koła |
| `src/components/ValueBreakdown.tsx` | Wartość pakietu |
| `index.html` | SEO, Open Graph |

---

## URL produkcyjny

https://futerzak.github.io/yaris-2020/
