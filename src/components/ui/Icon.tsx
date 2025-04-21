// Composant pour afficher des icônes de manière cohérente entre SSR et CSR
'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import type { LucideIcon } from 'lucide-react';
import * as LucideIcons from 'lucide-react';

type IconProps = {
  name: string;
  size?: number;
  className?: string;
  type?: 'custom' | 'lucide';
  animated?: boolean;
  animation?: 'pulse' | 'bounce' | 'spin' | 'hover' | 'none';
};

export default function Icon({
  name,
  size = 24,
  className = '',
  type = 'custom',
  animated = false,
  animation = 'hover'
}: IconProps) {
  // État pour gérer le montage côté client
  const [mounted, setMounted] = useState(false);

  // S'assurer que le composant est monté côté client pour éviter les erreurs d'hydratation
  useEffect(() => {
    setMounted(true);
  }, []);

  // Déterminer les classes d'animation en fonction des props
  const getAnimationClass = () => {
    if (!animated) return '';

    switch (animation) {
      case 'pulse':
        return 'animate-pulse';
      case 'bounce':
        return 'animate-bounce';
      case 'spin':
        return 'animate-spin';
      case 'hover':
        return 'transition-transform duration-300 hover:scale-110';
      case 'none':
        return '';
      default:
        return '';
    }
  };

  // Classes combinées avec l'animation
  const combinedClassName = `${className} ${getAnimationClass()}`.trim();

  // Si le composant n'est pas encore monté, render un placeholder statique
  if (!mounted) {
    return (
      <div
        className={className} // Pas d'animation sur le placeholder pour éviter les différences d'hydratation
        style={{ height: size, width: size }}
        data-icon-placeholder="true"
      />
    );
  }

  // Si c'est une icône personnalisée (SVG existant)
  if (type === 'custom') {
    return (
      <div className={combinedClassName} style={{ height: size, width: size }}>
        <Image
          src={`/assets/icons/${name}.svg`}
          alt={name}
          width={size}
          height={size}
          style={{
            maxWidth: '100%',
            height: 'auto',
            objectFit: 'contain'
          }}
        />
      </div>
    );
  }

  // Si c'est une icône Lucide
  // Convertir le nom au format PascalCase pour correspondre aux noms des composants Lucide
  const iconName = name
    .split('-')
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join('');

  const LucideIcon = LucideIcons[iconName as keyof typeof LucideIcons] as LucideIcon;

  if (!LucideIcon) {
    // En cas d'icône non trouvée, afficher une icône d'alerte (mais ne pas logger d'erreur en production)
    if (process.env.NODE_ENV !== 'production') {
      console.warn(`Icône "${name}" introuvable dans la bibliothèque Lucide.`);
    }

    return (
      <div className={combinedClassName} style={{ height: size, width: size }}>
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
          <line x1="12" y1="9" x2="12" y2="13" />
          <line x1="12" y1="17" x2="12.01" y2="17" />
        </svg>
      </div>
    );
  }

  const IconComponent = LucideIcon;
  return <IconComponent size={size} className={combinedClassName} />;
}
