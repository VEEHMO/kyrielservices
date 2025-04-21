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

Nous utilisons la bibliothèque [Lucide React](https://lucide.dev/) pour un ensemble cohérent d'icônes vectorielles modernes et accessibles. Ces icônes sont facilement personnalisables en taille et en couleur.

### Utilisation de base

Les icônes sont accessibles via le composant `Icon` :

```jsx
// Icône standard de Lucide
<Icon name="settings" type="lucide" size={24} className="text-primary" />

// Icône personnalisée (SVG stocké dans /public/assets/icons/)
<Icon name="automation" type="custom" size={64} className="text-primary" />
```

### Catégories d'icônes

Nos icônes sont organisées en trois catégories principales pour faciliter leur utilisation :

1. **Navigation** : Utilisées pour les éléments d'interface de navigation (menu, flèches, recherche...)
2. **Actions** : Représentent des actions que l'utilisateur peut effectuer (ajouter, supprimer, éditer...)
3. **Services** : Illustrent les services et fonctionnalités métier de Kyriel Services

### Icônes de navigation

| Nom | Description | Aperçu |
|-----|-------------|--------|
| home | Accueil | <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg> |
| menu | Menu | <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="18" x2="21" y2="18"/></svg> |
| search | Recherche | <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg> |
| chevron-down | Déplier | <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"/></svg> |

### Icônes d'actions

| Nom | Description | Aperçu |
|-----|-------------|--------|
| mail | Email | <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg> |
| phone | Téléphone | <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg> |
| plus | Ajouter | <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg> |
| edit | Modifier | <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 20h9"/><path d="M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"/></svg> |

### Icônes de services

| Nom | Service | Aperçu |
|-----|---------|--------|
| settings | Automatisation | <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"/><circle cx="12" cy="12" r="3"/></svg> |
| tool | Outils | <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></svg> |
| globe | Web | <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg> |
| message-square | Communication | <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg> |

### Collection complète

Pour explorer toutes les icônes disponibles, consultez le composant `IconCollection` qui affiche l'ensemble des icônes organisées par catégorie :

```jsx
// Afficher toutes les icônes
<IconCollection category="all" />

// Afficher uniquement les icônes de navigation
<IconCollection category="navigation" />
```

### Personnalisation des icônes

Les icônes peuvent être personnalisées avec les propriétés suivantes :

- `size` : Taille de l'icône en pixels (par défaut : 24px)
- `className` : Classes CSS pour modifier la couleur, les marges, etc.
- `type` : Type d'icône ('lucide' ou 'custom')

### Couleurs d'icônes

Les icônes héritent de la couleur du texte par défaut, mais peuvent être colorées à l'aide des classes de couleur Tailwind :

```jsx
<Icon name="settings" type="lucide" className="text-primary" />
<Icon name="settings" type="lucide" className="text-secondary" />
<Icon name="settings" type="lucide" className="text-accent" />
<Icon name="settings" type="lucide" className="text-gray-400" />
```

## Optimisation des images

Toutes les images du projet sont optimisées pour un chargement rapide et une expérience utilisateur fluide.

### Format WebP

Le format WebP est utilisé pour toutes les images de contenu car il offre :

- Une compression supérieure (30-80% plus petite que JPEG ou PNG)
- Un support de la transparence (comme PNG)
- Une excellente qualité visuelle

```jsx
// Utilisation optimale des images
<Image
  src="/assets/images/business-growth.webp"
  alt="Description de l'image"
  width={640}
  height={360}
  className="rounded-lg"
/>
```

### Règles d'optimisation

1. **Format** - Utiliser WebP pour toutes les images de contenu
2. **Taille** - Redimensionner les images à la taille maximale nécessaire
3. **Lazy loading** - Utiliser le lazy loading par défaut via Next.js Image
4. **Alt text** - Toujours fournir un texte alternatif descriptif pour l'accessibilité

### Script d'optimisation

Un script est disponible pour convertir les images existantes au format WebP :

```bash
node scripts/convert-images.mjs
```

### Guidelines pour les nouveaux assets

- Résolution maximale recommandée : 1920px de large (pour les images pleine largeur)
- Résolution maximale des vignettes : 800px
- Poids cible : < 200KB pour les grandes images, < 50KB pour les vignettes
- Toujours fournir une version WebP

## Utilisation du Design System

Pour maintenir la cohérence, suivre ces règles :

1. Utiliser les classes et composants prédéfinis plutôt que de créer des styles personnalisés
2. Respecter la hiérarchie typographique
3. Limiter l'usage des couleurs à la palette définie
4. Appliquer le système d'espacement modulaire en utilisant les classes fournies
5. Utiliser les classes de grille pour une mise en page responsive cohérente
6. S'assurer que tous les éléments sont accessibles (contraste, focus, alternatives textuelles)
