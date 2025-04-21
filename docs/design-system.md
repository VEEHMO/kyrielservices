# Design System Kyriel Services

Ce document détaille les règles visuelles, composants et tokens utilisés dans le site Kyriel Services. Le design system vise à maintenir une cohérence visuelle sur l'ensemble des pages et à faciliter le développement de nouveaux composants.

## Palette de couleurs

Notre palette utilise des couleurs primaires, secondaires et d'accent avec une gamme de nuances pour chacune, permettant de créer une hiérarchie visuelle claire.

### Couleurs principales

| Nom | Valeur | Description | Classe Tailwind |
|-----|--------|-------------|-----------------|
| Primaire | `#2563EB` | Bleu principal utilisé pour les éléments clés, boutons et accents primaires | `text-primary`, `bg-primary` |
| Secondaire | `#13E0DC` | Cyan utilisé pour les accents secondaires et certains éléments interactifs | `text-secondary`, `bg-secondary` |
| Accent | `#F59E0B` | Orange utilisé pour les éléments d'emphase, alertes ou notifications | `text-accent`, `bg-accent` |

### Neutres

| Nom | Valeur | Description | Classe Tailwind |
|-----|--------|-------------|-----------------|
| Neutre Foncé | `#1F2937` | Texte principal | `text-gray-700` |
| Neutre Médium | `#6B7280` | Texte secondaire et sous-titres | `text-gray-400` |
| Neutre Clair | `#F3F4F6` | Arrière-plans subtils et éléments désactivés | `bg-gray-50` |

### Nuances de couleurs

Chaque couleur principale dispose d'une gamme de nuances accessibles via les classes Tailwind :

- **Primaire** : `primary-50`, `primary-100`, `primary-200`, ..., `primary-900`
- **Secondaire** : `secondary-50`, `secondary-100`, `secondary-200`, ..., `secondary-900`
- **Accent** : `accent-50`, `accent-100`, `accent-200`, ..., `accent-900`

## Typographie

### Police principale

La police **Montserrat** est utilisée pour l'ensemble du site, avec différentes épaisseurs pour créer une hiérarchie typographique.

Importation dans le CSS global :
```css
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;700&display=swap');
```

### Hiérarchie typographique

| Élément | Classe Tailwind | Description |
|---------|-----------------|-------------|
| H1 | `text-4xl md:text-6xl font-bold text-gray-700` | Titres principaux de page |
| H2 | `text-3xl font-bold text-gray-700` | Titres de section |
| H3 | `text-xl font-semibold text-gray-700` | Sous-titres |
| H4 | `text-lg font-semibold text-gray-700` | Titres de paragraphe |
| Body | `text-base text-gray-500` | Texte de paragraphe standard |
| Small | `text-sm text-gray-400` | Texte secondaire ou légal |

### Classes spéciales

- **Gradient Heading** : `gradient-heading` - Texte avec un dégradé de couleur primaire
- **Section Title** : `section-title` - Style spécifique pour les titres de section
- **Section Subtitle** : `section-subtitle` - Style pour les sous-titres de section

## Composants

### Boutons

Les boutons utilisent les classes suivantes pour maintenir une apparence cohérente :

#### Classes de base

```html
<button class="btn">Base</button>
```

La classe `btn` fournit les styles communs à tous les boutons :
- Affichage en ligne-flex
- Alignement des éléments au centre
- Coins arrondis (border-radius)
- Transition fluide des couleurs
- Focus ring pour l'accessibilité

#### Variantes

```html
<button class="btn btn-primary">Primaire</button>
<button class="btn btn-secondary">Secondaire</button>
<button class="btn btn-outline">Outline</button>
<button class="btn btn-accent">Accent</button>
```

#### Tailles

```html
<button class="btn btn-primary btn-sm">Petit</button>
<button class="btn btn-primary">Normal</button>
<button class="btn btn-primary btn-lg">Grand</button>
```

### Cartes

Les cartes sont utilisées pour présenter des informations groupées :

```html
<div class="service-card">
  <Icon name="web" className="card-icon" />
  <h3 class="text-xl font-semibold mb-2 text-gray-700">Titre</h3>
  <p class="text-gray-500">Description du service...</p>
</div>
```

## Grille et espacement

### Module d'espacement de 8px

Notre système d'espacement est basé sur un module de 8px. Les valeurs d'espacement suivent cette progression pour maintenir une cohérence visuelle dans tout le site :

| Variable | Valeur | Taille en pixels | Description |
|----------|--------|-----------------|-------------|
| --spacing-0 | 0 | 0px | Aucun espacement |
| --spacing-1 | 0.25rem | 4px | Très petit espacement |
| --spacing-2 | 0.5rem | 8px | Petit espacement |
| --spacing-3 | 0.75rem | 12px | Espacement moyen-petit |
| --spacing-4 | 1rem | 16px | Espacement moyen |
| --spacing-5 | 1.25rem | 20px | Espacement moyen-grand |
| --spacing-6 | 1.5rem | 24px | Espacement standard |
| --spacing-8 | 2rem | 32px | Grand espacement |
| --spacing-12 | 3rem | 48px | Très grand espacement |
| --spacing-16 | 4rem | 64px | Espacement extra-large |
| --spacing-20 | 5rem | 80px | Espacement XXL |
| --spacing-24 | 6rem | 96px | Espacement maximum |

### Classes d'espacements modulaires

Pour simplifier l'application de l'espacement modulaire, nous avons créé des classes utilitaires :

```html
<!-- Padding modulaire -->
<div class="spacing-module">...</div>       <!-- p-6 (24px) -->
<div class="spacing-module-sm">...</div>    <!-- p-4 (16px) -->
<div class="spacing-module-lg">...</div>    <!-- p-8 (32px) -->

<!-- Margin modulaire -->
<div class="mt-module">...</div>            <!-- mt-6 (24px) -->
<div class="mb-module">...</div>            <!-- mb-6 (24px) -->
<div class="my-module">...</div>            <!-- my-6 (24px) -->
<div class="mx-module">...</div>            <!-- mx-6 (24px) -->

<!-- Gap modulaire pour les grilles et flexbox -->
<div class="gap-module">...</div>           <!-- gap-6 (24px) -->
<div class="gap-module-sm">...</div>        <!-- gap-4 (16px) -->
<div class="gap-module-lg">...</div>        <!-- gap-8 (32px) -->
```

### Système de grille responsive

Nous utilisons un système de grille responsive basé sur CSS Grid avec des breakpoints standards :

```html
<!-- Container personnalisé pour un centrage et des marges cohérentes -->
<div class="container-custom">...</div>

<!-- Grille de base avec espacement standard -->
<div class="grid-module">...</div>

<!-- Grilles prédéfinies avec colonnes responsives -->
<div class="grid-cols-1-2">...</div>  <!-- 1 colonne sur mobile, 2 sur tablette et desktop -->
<div class="grid-cols-1-3">...</div>  <!-- 1 colonne sur mobile, 2 sur tablette, 3 sur desktop -->
<div class="grid-cols-1-4">...</div>  <!-- 1 colonne sur mobile, 2 sur tablette, 4 sur desktop -->
```

### Sections standardisées

Pour maintenir une cohérence dans les sections de page :

```html
<!-- Section standard -->
<section class="section">...</section>      <!-- py-12 md:py-16 lg:py-20 -->

<!-- Section plus petite -->
<section class="section-sm">...</section>   <!-- py-8 md:py-12 -->

<!-- Section plus grande -->
<section class="section-lg">...</section>   <!-- py-16 md:py-24 -->
```

### Breakpoints

Le système de grille utilise les breakpoints standards de Tailwind pour assurer une expérience responsive cohérente :

| Breakpoint | Taille minimum | Usage |
|------------|---------------|-------|
| sm | 640px | Téléphones en mode paysage et plus |
| md | 768px | Tablettes et plus |
| lg | 1024px | Petits ordinateurs portables et plus |
| xl | 1280px | Ordinateurs de bureau et plus |
| 2xl | 1536px | Grands écrans |

## Focus et accessibilité

Tous les éléments interactifs disposent d'un style de focus visible pour l'accessibilité :

```css
button, a, input, textarea, select {
  @apply focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary;
}
```

## Animations et transitions

Plusieurs classes d'animation sont disponibles :

- `animate-float` : Effet de flottement léger
- `animate-pulse-glow` : Pulsation lumineuse
- `animate-fadeIn`, `animate-fadeInUp`, `animate-fadeInDown`, etc. : Transitions d'entrée
- `reveal`, `reveal-up`, `reveal-left`, `reveal-right` : Animations au défilement

## Icônes

Nous utilisons un ensemble cohérent d'icônes, accessibles via le composant `Icon` :

```jsx
<Icon name="web" className="card-icon" />
```

## Utilisation du Design System

Pour maintenir la cohérence, suivre ces règles :

1. Utiliser les classes et composants prédéfinis plutôt que de créer des styles personnalisés
2. Respecter la hiérarchie typographique
3. Limiter l'usage des couleurs à la palette définie
4. Appliquer le système d'espacement modulaire en utilisant les classes fournies
5. Utiliser les classes de grille pour une mise en page responsive cohérente
6. S'assurer que tous les éléments sont accessibles (contraste, focus, alternatives textuelles)
