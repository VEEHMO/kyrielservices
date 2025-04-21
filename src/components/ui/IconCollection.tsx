/**
 * Composant IconCollection - Galerie d'icônes Lucide disponibles pour l'application
 * Ce composant est utilisé principalement dans la documentation du design system
 */
'use client';

import { useEffect, useState } from 'react';
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

// Animations disponibles pour la démonstration
const ANIMATIONS = ['none', 'hover', 'pulse', 'bounce', 'spin'];

export default function IconCollection({ category = 'all' }: IconCollectionProps) {
  // Utilisation de useState et useEffect pour le rendu côté client
  const [mounted, setMounted] = useState(false);
  const [filteredIcons, setFilteredIcons] = useState<IconDefinition[]>([]);
  const [selectedAnimation, setSelectedAnimation] = useState<string>('hover');

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (mounted) {
      setFilteredIcons(
        category === 'all'
          ? ICON_LIST
          : ICON_LIST.filter(icon => icon.category === category)
      );
    }
  }, [category, mounted]);

  return (
    <div className="p-6 bg-white rounded-lg shadow-sm">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6">
        <h3 className="text-lg font-semibold text-gray-700 mb-2 sm:mb-0">
          {category === 'all' ? 'Toutes les icônes' : `Icônes : ${category}`}
        </h3>

        {mounted && (
          <div className="flex flex-wrap gap-2">
            <span className="text-sm text-gray-500 my-auto mr-2">Animation:</span>
            {ANIMATIONS.map(anim => (
              <button
                key={anim}
                className={`px-3 py-1 text-xs rounded-full ${
                  selectedAnimation === anim
                    ? 'bg-primary text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
                onClick={() => setSelectedAnimation(anim)}
              >
                {anim === 'none' ? 'Aucune' : anim}
              </button>
            ))}
          </div>
        )}
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
        {!mounted ? (
          // Affichage d'un espace réservé pendant le chargement côté client
          Array.from({ length: 12 }).map((_, index) => (
            <div
              key={index}
              className="animate-pulse flex flex-col items-center p-3 border border-gray-100 rounded-md"
            >
              <div className="h-6 w-6 bg-gray-200 mb-2 rounded" />
              <div className="h-3 w-16 bg-gray-200 rounded mb-1" />
              <div className="h-2 w-12 bg-gray-200 rounded mt-1" />
            </div>
          ))
        ) : (
          filteredIcons.map((icon) => (
            <div
              key={icon.name}
              className="flex flex-col items-center p-3 border border-gray-100 rounded-md hover:border-primary hover:shadow-sm transition-all group"
            >
              <Icon
                name={icon.name}
                type="lucide"
                size={24}
                className="text-primary mb-2"
                animated={selectedAnimation !== 'none'}
                animation={selectedAnimation === 'none' ? 'none' : selectedAnimation}
              />
              <p className="text-xs text-gray-500 text-center">{icon.name}</p>
              <p className="text-xs text-gray-400 text-center mt-1">{icon.description}</p>
            </div>
          ))
        )}
      </div>

      {mounted && category === 'services' && (
        <div className="mt-8 p-4 border border-gray-200 rounded-lg bg-gray-50">
          <h4 className="text-base font-semibold mb-2 text-gray-700">Comment utiliser</h4>
          <pre className="bg-gray-800 text-gray-100 p-4 rounded overflow-auto text-sm">
            {`// Icône standard avec animation au survol
<Icon
  name="${filteredIcons[0]?.name || 'settings'}"
  type="lucide"
  size={24}
  className="text-primary"
  animated={true}
  animation="hover"
/>`}
          </pre>
        </div>
      )}
    </div>
  );
}
