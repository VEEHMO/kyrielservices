// Composant pour afficher des icônes de manière cohérente entre SSR et CSR
'use client';

import Image from 'next/image';

type IconProps = {
  name: 'automation' | 'tools' | 'web' | 'communication';
  size?: number;
  className?: string;
};

export default function Icon({ name, size = 64, className = '' }: IconProps) {
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
