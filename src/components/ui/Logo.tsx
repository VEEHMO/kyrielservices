'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

type LogoProps = {
  width?: number;
  height?: number;
  className?: string;
  variant?: 'full' | 'icon-only';
};

export default function Logo({ width = 48, height = 48, className = '', variant = 'full' }: LogoProps) {
  // Utiliser un état local pour éviter les problèmes d'hydratation
  const [logoPath, setLogoPath] = useState<string>('/assets/Logo_Kyriel_Service.png');

  // Mettre à jour le chemin du logo côté client uniquement
  useEffect(() => {
    if (variant === 'icon-only') {
      setLogoPath('/images/Kyriel_Services_Gemini_-_Logo_seul_-_900px.png');
    } else {
      setLogoPath('/assets/Logo_Kyriel_Service.png');
    }
  }, [variant]);

  return (
    <Image
      src={logoPath}
      alt="Kyriel Services Logo"
      width={width}
      height={height}
      priority={true}
      className={className}
      style={{
        objectFit: 'contain',
        height: 'auto'
      }}
    />
  );
}
