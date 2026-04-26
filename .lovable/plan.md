# Rebuild webu Bistro Apetit – Český Těšín

Moderní, profesionální prezentační web malého rodinného bistra (od r. 1994). Zachová všechny stávající podstránky a obsah, použije současné fotky (později se vymění za kvalitní), a integruje denní menu přes iframe z Meníčka.cz.

## 🎨 Vizuální styl
- **Tón**: moderní, teplý, gastronomický – vhodný pro tradiční domácí kuchyni
- **Paleta**: teplé zemité barvy (hluboká vínová / terakota jako akcent, krémová/off-white pozadí, tmavě hnědá pro text) – evokuje domácí kuchyni, ne dřevěné pozadí staré stránky
- **Typografie**: elegantní serif na nadpisy (např. Playfair Display) + čistý sans-serif na text (Inter)
- **Layout**: prostorný, vzdušný, plně responzivní, jemné hover efekty, kvalitní fotky na celou šířku v hero sekcích
- **Sticky navigace** s logem „Bistro Apetit – Za kolejama"

## 🗂️ Struktura stránek (samostatné routy pro SEO)

### 1. **Domů** (`/`)
- Hero sekce s fotkou jídla, claimem „Domácí kuchyně od roku 1994" a CTA tlačítky („Denní menu", „Objednat: 777 808 071")
- Sekce „O nás" – příběh podniku (Moskevská → nákladní nádraží 2006, vaření pro firmy a stálé zákazníky)
- Rychlé info bloky: Otevírací doba, Kontakt, Rozvoz
- Highlights: rozvoz zdarma nad 100 Kč po Č. Těšíně, platba kartou
- Náhled denního menu + odkaz na plnou stránku

### 2. **Jídelní lístek / Denní menu** (`/menu`)
- Důležité info v upozorňovacím boxu:
  - Objednávky telefonicky 777 808 071 do 10:00
  - Rozvoz do 11:00, zdarma po Č. Těšíně nad 100 Kč (jinak 25 Kč)
  - Krabička 6 Kč, možnost platby kartou
- **Iframe s denním menu z Meníčka.cz** (`https://www.menicka.cz/4932-bistro-apetit.html`) – přesně podle aktuálního stavu, responzivní rámeček
- Tlačítko „Objednat online" → odkaz na meníčka rozvoz
- V patičce stránky: zákonná informace o mimosoudním řešení sporů (zákon 634/1992)

### 3. **Otevírací doba** (`/oteviraci-doba`)
- Přehledná tabulka Po–Ne (Po–Pá 8:00–13:00, So/Ne/svátky zavřeno)
- Aktuální stav „Otevřeno / Zavřeno" počítaný v reálném čase
- Připomenutí časů pro objednávky a rozvoz

### 4. **Fotogalerie** (`/fotogalerie`)
- Mřížka fotek z původního webu (6 stávajících fotek z bistroapetit.cz)
- Lightbox pro zvětšení po kliknutí
- Poznámka, že fotky jsou dočasné a budou nahrazeny kvalitnějšími

### 5. **Kontakt** (`/kontakt`)
- Telefon: 777 808 071 (klikatelný)
- E-mail: bistroapetit@seznam.cz (klikatelný)
- Adresa: nákladní nádraží, Český Těšín
- Embedded Google Maps (Český Těšín – nákladní nádraží)
- Otevírací doba zopakovaná pro rychlou orientaci

## 🧭 Společné prvky
- **Header**: logo + menu (Domů, Menu, Otevírací doba, Galerie, Kontakt) + telefon jako CTA
- **Footer**: kontakt, otevírací doba, copyright, odkaz na zákonné info
- **Mobilní menu** (hamburger) plně funkční
- **SEO**: každá routa má vlastní `<title>`, meta description a OG tagy v češtině

## ✅ Co plán NEzahrnuje
- Backend / databáze (není potřeba – menu se tahá iframem z Meníčka.cz)
- Online objednávkový systém vlastní (zachová odkaz na Meníčka.cz)
- Výměna nízko-rozlišených fotek (uděláte později)
