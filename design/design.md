# Design System — Portfolio « Dark Academia / Scriptorium »

Sandes Savarimuthu — portfolio développeur.
Registre visuel : **manuscrit enluminé**, encre sur vélin, lu à la chandelle.
Fichier de référence : `Portfolio.dc.html`.

---

## 1. Principes

1. **Le texte est le sujet.** L'image, l'ornement et le mouvement servent la lecture ; jamais l'inverse.
2. **Un seul fond.** Une nuit d'encre unique (`#100d0a`), modulée par la lumière et le grain, pas par des couleurs supplémentaires.
3. **Peu d'accents, tenus.** Or et oxblood. Aucun troisième accent.
4. **L'ornement est typographique.** Filets, petites capitales, folios, lettrines, marginalia — pas d'illustrations dessinées.
5. **Le mouvement est lent.** 600–1200 ms, courbes douces. Rien ne rebondit.
6. **Scalable par pages.** Chaque œuvre est une entrée de folio : on en ajoute sans réorganiser les précédentes (voir « Feuillet laissé blanc »).

---

## 2. Couleur

| Rôle | Valeur | Usage |
|---|---|---|
| Encre (fond) | `#100d0a` | Fond de page, unique |
| Panneau | `rgba(23,18,13,.6–.7)` | Cartes, cadres de planches |
| Vélin (texte) | `#ece0c8` | Titres, texte fort |
| Vélin adouci | `#d8caac` | Paragraphes de corps |
| Vélin sourd | `#cdbe9f` | Texte secondaire, descriptions |
| Sépia | `#a89a80` | Labels, navigation au repos |
| Sépia éteint | `#6f6455` / `#5d5445` | Métadonnées, éléments désactivés |
| Or (accent 1) | `#c9a24a` | Liens, folios, filets, lettrine |
| Oxblood (accent 2) | `#7d2b26` | Catégories d'œuvres, lettrine, hover |
| Filet | `rgba(201,162,74,.12 → .40)` | Séparateurs — opacité selon la hiérarchie |

**Règles**
- Ne jamais introduire de couleur hors de cette liste ; si un ton manque, ajuster l'opacité d'un existant.
- L'or est réservé à l'interactif et au numérotage. Un élément or non cliquable doit être un folio ou un filet.
- L'oxblood ne s'utilise jamais en aplat large : traits, capitales, voiles de survol.
- Opacités de filets normalisées : `.12` (interne), `.16–.22` (cadre), `.28` (titre de section), `.40` (encadré fort).

---

## 3. Typographie

Trois familles, chacune avec un rôle strict.

| Famille | Rôle | Réglages |
|---|---|---|
| **Cormorant Garamond** | Titres, lettrines, citations, chiffres romains | 300 / 400 ; italique pour les notes de marge |
| **EB Garamond** | Corps de texte | 400 ; `line-height: 1.6–1.68` |
| **IBM Plex Mono** | Labels, navigation, métadonnées, chips | 400 ; `10–11px`, `letter-spacing: .22–.34em`, `uppercase` |

**Échelle**

| Élément | Taille |
|---|---|
| Nom (H1) | `clamp(46px, 8.4vw, 104px)`, poids 300, `line-height: .96` |
| Titre de section (H2) | `clamp(30px, 3.6vw, 46px)`, poids 400 |
| Titre d'œuvre (H3) | `clamp(28px, 3.4vw, 42px)` |
| Chapeau / intro | `clamp(18px, 1.6vw, 23px)` |
| Corps | `clamp(19px, 1.5vw, 22px)` |
| Description d'œuvre | `19px` (liste) / `18px` (grille) |
| Marginalia | `15–21px` Cormorant italique |
| Label mono | `9–11px` |

**Règles**
- Un seul H1 par page : le nom.
- Tout label mono est en capitales avec interlettrage large ; jamais de mono en corps de texte.
- Mesure de ligne : `48–54ch` maximum (`max-width: 54ch`).
- `text-wrap: pretty` sur les paragraphes, `balance` sur le H1.
- Lettrine : Cormorant `78px`, `line-height: .78`, `float: left`, couleur oxblood — une seule par section.
- Jamais de gras : la hiérarchie vient de la taille, de la couleur et de l'espace.

---

## 4. Grille et espacement

- Colonne de texte : `max-width: 1180px`, marges `clamp(20px, 5vw, 88px)`.
- Aperçu mobile : la même colonne contrainte à `420px` (tweak `mobilePreview`).
- Rythme vertical entre sections : `clamp(64px, 14vh, 150px)`.
- Espace sous un titre de section : `clamp(34px, 7vh, 62px)`.
- Toute grille de frères utilise `display: flex|grid` + `gap` — jamais de marges individuelles.
- Colonnes fluides : `flex: 1 1 <base>` + `min-width`, pas de media queries. Le layout se replie de lui-même du mobile au desktop.
- Colonne de marginalia : `flex: 0 1 280px`, filet à gauche, `padding-left: clamp(18px, 2vw, 28px)`.

---

## 5. Composants

### Masthead (en-tête)
Filet + label `FOLIO OF WORKS & DAYS`, puis planche de lettrine enluminée (`clamp(96px, 12vw, 138px)`, cadre or) à côté du nom sur deux lignes. Dessous : filet, chapeau à gauche, devise latine en italique à droite avec sa traduction en mono.

### Titre de section
Ligne `justify-content: space-between` : H2 à gauche, label mono à droite (`I — IV`, `MARGINALIA`, `COLOPHON`), filet `.28` en dessous.

### Entrée d'œuvre — « folio list » (par défaut)
Trois colonnes : chiffre romain (58px de large), bloc texte (titre, catégorie oxblood en mono, description, chips), planche image + note de marge en italique. Filet bas `.12`.
**Survol** : voile oxblood en dégradé + barre intérieure gauche `inset 3px 0 0 #7d2b26`, 700 ms — l'effet « encre qui gagne le papier ».

### Entrée d'œuvre — « plates grid »
Même contenu en carte : planche image en haut (`190px`), folio, titre, description, chips poussées en bas par `margin-top: auto`. Grille `auto-fit, minmax(280px, 1fr)`.
**Survol** : bordure or plus vive + `translateY(-6px)`, 600 ms.

### Chip de stack
`display: inline-flex`, `white-space: nowrap`, `padding: 5px 11px`, bordure `rgba(201,162,74,.25)`, mono `9.5px` capitales. Toujours inline-flex — en `inline` la bordure se casse à la ligne.

### Feuillet laissé blanc
Encadré `1px dashed`, folio gris, titre italique sourd, mention `IN PREPARATION`. C'est le point d'extension : dupliquer une entrée de `works` suffit, ce bloc reste en fin de liste.

### Note de bas de page (†)
Marqueur or pointillé dans le texte ; au survol, une plaque `260px` apparaît sous le marqueur (opacité + 4px de translation, 400 ms). Câblée en JS sur un `ref`, pas en CSS.

### Colophon
Centré : label `COLOPHON`, phrase d'appel en Cormorant 300, rangée de liens mono soulignés d'un filet or, puis mention d'édition en italique (fontes utilisées, année en chiffres romains).

### Planche image (`<image-slot>`)
Cadre `1px` or à `.16–.22`, `padding: 5px`, fond panneau, slot en `fit="cover"`, `radius="0"`. Chaque slot porte un `id` unique (`da-plume-list`, `da-tracer-grid`, `da-portrait`, `da-initial`…) pour que l'image déposée persiste. Légende éventuelle en Cormorant italique sourd.

---

## 6. Atmosphère et mouvement

| Effet | Implémentation | Réglage |
|---|---|---|
| Chandelle | Dégradé radial `460px` suivant le curseur, `requestAnimationFrame`, `pointermove` | tweak `candlelight` |
| Vacillement | `@keyframes flicker`, 6 s, opacité `.44 → .62` | permanent |
| Vignette | `box-shadow: inset 0 0 260px 80px rgba(0,0,0,.72)` | permanent |
| Grain | SVG `feTurbulence` en data-URI, `opacity: .055`, `mix-blend-mode: overlay` | permanent |
| Entrée du masthead | `@keyframes riseIn` 1.4 s (opacité + 22px + flou 7px) | au chargement |
| Révélation à l'encre | Sections `[data-reveal]` : opacité 0 → 1, 26px, flou 8px, 1200 ms | balayage `getBoundingClientRect` au scroll |

**Règles**
- Toutes les couches d'atmosphère sont `position: fixed`, `pointer-events: none`, z-index 3–5 ; le contenu est en z-index 2.
- La révélation au scroll doit **toujours** avoir un filet de sécurité (`setTimeout` 4 s qui affiche tout) : aucun contenu ne peut rester invisible si le JS échoue.
- Pas d'animation pilotée depuis le template avec des trous `{{ }}` : les valeurs vives passent par mutation DOM sur un `ref`.

---

## 7. Tweaks (props du composant)

| Prop | Type | Défaut | Effet |
|---|---|---|---|
| `candlelight` | booléen | `true` | Halo de chandelle suivant le curseur |
| `worksLayout` | enum | `folio list` | `folio list` (liste de folios) ou `plates grid` (grille de planches) |
| `mobilePreview` | booléen | `false` | Contraint la colonne à 420px pour juger le rendu mobile |

Les textes et les couleurs unitaires s'éditent directement dans l'éditeur — ils ne sont pas exposés en tweaks.

---

## 8. Ton de la copie

Littéraire mais simple. Phrases courtes, vocabulaire concret, une seule métaphore par section — toujours empruntée au livre (folio, planche, feuillet, colophon, marginalia). Pas de superlatifs, pas de jargon marketing, pas d'emoji. Les métadonnées sont sèches ; le corps de texte peut avoir une opinion.

Exemples de registre retenu : « L'image est la preuve. Ou la lumière se comporte, ou elle ne se comporte pas. » — « Réservé pour la suite. »

---

## 9. Contraintes techniques

- Un seul fichier `Portfolio.dc.html`, styles **inline uniquement**. Le `<helmet>` ne contient que les polices, les `@keyframes` et les resets.
- Pas de media queries : `clamp()`, `flex-wrap`, `minmax()`.
- Pas de SVG dessiné à la main ; les images passent par `<image-slot>` (dépôt par glisser-déposer, persistant).
- États d'interaction via `style-hover` / `style-active` / `style-focus`.
- Liens : or au repos, vélin au survol — définis dans le reset.

---

## 10. À remplacer avant publication

- Adresse e-mail (`sandes@example.com`) et liens GitHub / LinkedIn / CV du colophon.
- Les planches images : lettrine enluminée, portrait, et une planche par projet.
- Le titre définitif du troisième projet (« Untitled writing desk »).
