/**
 * Composant IconCollection - Galerie d'icônes Lucide disponibles pour l'application
 * Ce composant est utilisé principalement dans la documentation du design system
 */
'use client';

import Icon from './Icon';

interface IconCollectionProps {
  category?: 'navigation' | 'actions' | 'services' | 'all';
}

interface IconDefinition {
  name: string;
  category: 'navigation' | 'actions' | 'services';
  description: string;
}

// Liste des icônes communes avec leurs catégories pour le design system
const ICON_LIST: IconDefinition[] = [
  // Icônes de navigation
  { name: 'home', category: 'navigation', description: 'Accueil' },
  { name: 'menu', category: 'navigation', description: 'Menu' },
  { name: 'search', category: 'navigation', description: 'Recherche' },
  { name: 'arrow-left', category: 'navigation', description: 'Retour' },
  { name: 'arrow-right', category: 'navigation', description: 'Suivant' },
  { name: 'x', category: 'navigation', description: 'Fermer' },
  { name: 'chevron-down', category: 'navigation', description: 'Ouvrir' },
  { name: 'chevron-up', category: 'navigation', description: 'Fermer' },
  { name: 'chevron-left', category: 'navigation', description: 'Précédent' },
  { name: 'chevron-right', category: 'navigation', description: 'Suivant' },

  // Icônes d'actions
  { name: 'plus', category: 'actions', description: 'Ajouter' },
  { name: 'minus', category: 'actions', description: 'Soustraire' },
  { name: 'trash', category: 'actions', description: 'Supprimer' },
  { name: 'edit', category: 'actions', description: 'Modifier' },
  { name: 'check', category: 'actions', description: 'Confirmer' },
  { name: 'download', category: 'actions', description: 'Télécharger' },
  { name: 'upload', category: 'actions', description: 'Uploader' },
  { name: 'share', category: 'actions', description: 'Partager' },
  { name: 'mail', category: 'actions', description: 'Email' },
  { name: 'phone', category: 'actions', description: 'Téléphone' },

  // Icônes de services (correspondant aux services de Kyriel)
  { name: 'settings', category: 'services', description: 'Automatisation' },
  { name: 'tool', category: 'services', description: 'Outils' },
  { name: 'globe', category: 'services', description: 'Web' },
  { name: 'message-square', category: 'services', description: 'Communication' },
  { name: 'bar-chart', category: 'services', description: 'Analytique' },
  { name: 'database', category: 'services', description: 'Données' },
  { name: 'code', category: 'services', description: 'Développement' },
  { name: 'users', category: 'services', description: 'Collaboration' },
];

// Converti les icônes de service anciennes vers les nouvelles
export const SERVICE_ICON_MAPPING = {
  automation: 'settings',
  tools: 'tool',
  web: 'globe',
  communication: 'message-square',
};

export default function IconCollection({ category = 'all' }: IconCollectionProps) {
  // Filtrer les icônes selon la catégorie sélectionnée
  const filteredIcons = category === 'all'
    ? ICON_LIST
    : ICON_LIST.filter(icon => icon.category === category);

  return (
    <div className="p-6 bg-white rounded-lg shadow-sm">
      <h3 className="text-lg font-semibold mb-4 text-gray-700">
        {category === 'all' ? 'Toutes les icônes' : `Icônes : ${category}`}
      </h3>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
        {filteredIcons.map((icon) => (
          <div
            key={icon.name}
            className="flex flex-col items-center p-3 border border-gray-100 rounded-md hover:border-primary hover:shadow-sm transition-all"
          >
            <Icon name={icon.name} type="lucide" size={24} className="text-primary mb-2" />
            <p className="text-xs text-gray-500 text-center">{icon.name}</p>
            <p className="text-xs text-gray-400 text-center mt-1">{icon.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
