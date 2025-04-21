// Composant pour afficher des icônes de manière cohérente entre SSR et CSR
'use client';

import Image from 'next/image';
import { LucideIcon } from 'lucide-react';
import * as LucideIcons from 'lucide-react';

type IconProps = {
  name: string;
  size?: number;
  className?: string;
  type?: 'custom' | 'lucide';
};

export default function Icon({ name, size = 24, className = '', type = 'custom' }: IconProps) {
  // Si c'est une icône personnalisée (SVG existant)
  if (type === 'custom') {
    return (
      <div className={className} style={{ height: size, width: size }}>
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
    console.warn(`Icône "${name}" introuvable dans la bibliothèque Lucide.`);
    return (
      <div className={className} style={{ height: size, width: size }}>
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
          <line x1="12" y1="9" x2="12" y2="13" />
          <line x1="12" y1="17" x2="12.01" y2="17" />
        </svg>
      </div>
    );
  }

  const IconComponent = LucideIcon;
  return <IconComponent size={size} className={className} />;
}
