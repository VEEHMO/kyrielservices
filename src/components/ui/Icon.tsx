// Composant pour afficher des icônes de manière cohérente entre SSR et CSR
'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import type { LucideIcon } from 'lucide-react';
import * as LucideIcons from 'lucide-react';

type IconName = 'automation' | 'tools' | 'web' | 'communication';

type IconProps = {
  name: IconName | string;
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
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Gestion des animations CSS
  const animationClass = animated && animation !== 'none' ? `icon-${animation}` : '';

  if (type === 'lucide') {
    // Convertir le nom au format PascalCase pour correspondre aux noms des composants Lucide
    const iconName = name
      .split('-')
      .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
      .join('');

    // Astuce pour éviter l'erreur de type en utilisant as any et en vérifiant l'existence
    const IconComponent = (LucideIcons as any)[iconName];

    if (!IconComponent) {
      return <div className={`${className} icon-missing`} style={{ width: size, height: size }}>Icon not found</div>;
    }

    return (
      <IconComponent
        size={size}
        className={`${className} ${animationClass}`}
        aria-label={name}
      />
    );
  }

  // Par défaut, on affiche une icône personnalisée sous forme d'image
  // On attend que le composant soit monté pour éviter des problèmes SSR/CSR
  if (!isMounted) {
    return <div className={className} style={{ width: size, height: size }} />;
  }

  return (
    <div className={`${className} ${animationClass}`} style={{ width: size, height: size }}>
      <Image
        src={`/assets/icons/${name}.svg`}
        alt={name.toString()}
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
