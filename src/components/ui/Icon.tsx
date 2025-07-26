// Composant pour afficher des icônes de manière cohérente entre SSR et CSR
'use client';

import { motion } from 'framer-motion';

type IconProps = {
  name: 'automation' | 'tools' | 'web' | 'communication';
  size?: number;
  className?: string;
};

// Nouvelles icônes SVG plus professionnelles
const icons = {
  automation: (
    <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="8" y="20" width="48" height="24" rx="4" fill="url(#automation-gradient)" fillOpacity="0.1" stroke="url(#automation-gradient)" strokeWidth="2"/>
      <circle cx="16" cy="32" r="3" fill="url(#automation-gradient)"/>
      <circle cx="32" cy="32" r="3" fill="url(#automation-gradient)"/>
      <circle cx="48" cy="32" r="3" fill="url(#automation-gradient)"/>
      <path d="M19 32h10M35 32h10" stroke="url(#automation-gradient)" strokeWidth="2" strokeLinecap="round"/>
      <path d="M32 12v8M32 44v8" stroke="url(#automation-gradient)" strokeWidth="2" strokeLinecap="round"/>
      <path d="M24 16l4 4M36 44l4 4" stroke="url(#automation-gradient)" strokeWidth="2" strokeLinecap="round"/>
      <path d="M40 16l-4 4M28 44l-4 4" stroke="url(#automation-gradient)" strokeWidth="2" strokeLinecap="round"/>
      <defs>
        <linearGradient id="automation-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="var(--blue-500)"/>
          <stop offset="100%" stopColor="var(--blue-700)"/>
        </linearGradient>
      </defs>
    </svg>
  ),
  tools: (
    <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="8" y="8" width="16" height="48" rx="2" fill="url(#tools-gradient)" fillOpacity="0.1" stroke="url(#tools-gradient)" strokeWidth="2"/>
      <rect x="28" y="16" width="16" height="32" rx="2" fill="url(#tools-gradient)" fillOpacity="0.1" stroke="url(#tools-gradient)" strokeWidth="2"/>
      <rect x="48" y="24" width="8" height="16" rx="1" fill="url(#tools-gradient)" fillOpacity="0.1" stroke="url(#tools-gradient)" strokeWidth="2"/>
      <circle cx="16" cy="12" r="2" fill="url(#tools-gradient)"/>
      <circle cx="36" cy="20" r="2" fill="url(#tools-gradient)"/>
      <circle cx="52" cy="28" r="1" fill="url(#tools-gradient)"/>
      <path d="M16 20v24M36 28v12M52 36v4" stroke="url(#tools-gradient)" strokeWidth="2" strokeLinecap="round"/>
      <defs>
        <linearGradient id="tools-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="var(--blue-500)"/>
          <stop offset="100%" stopColor="var(--blue-700)"/>
        </linearGradient>
      </defs>
    </svg>
  ),
  web: (
    <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="4" y="12" width="56" height="40" rx="4" fill="url(#web-gradient)" fillOpacity="0.1" stroke="url(#web-gradient)" strokeWidth="2"/>
      <rect x="4" y="12" width="56" height="12" rx="4" fill="url(#web-gradient)" fillOpacity="0.2"/>
      <circle cx="12" cy="18" r="2" fill="url(#web-gradient)"/>
      <circle cx="20" cy="18" r="2" fill="url(#web-gradient)"/>
      <circle cx="28" cy="18" r="2" fill="url(#web-gradient)"/>
      <rect x="12" y="32" width="20" height="2" rx="1" fill="url(#web-gradient)" fillOpacity="0.6"/>
      <rect x="12" y="36" width="32" height="2" rx="1" fill="url(#web-gradient)" fillOpacity="0.6"/>
      <rect x="12" y="40" width="24" height="2" rx="1" fill="url(#web-gradient)" fillOpacity="0.6"/>
      <rect x="44" y="32" width="8" height="8" rx="1" fill="url(#web-gradient)" fillOpacity="0.3"/>
      <defs>
        <linearGradient id="web-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="var(--blue-500)"/>
          <stop offset="100%" stopColor="var(--blue-700)"/>
        </linearGradient>
      </defs>
    </svg>
  ),
  communication: (
    <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
      <ellipse cx="32" cy="24" rx="20" ry="12" fill="url(#comm-gradient)" fillOpacity="0.1" stroke="url(#comm-gradient)" strokeWidth="2"/>
      <ellipse cx="32" cy="32" rx="16" ry="8" fill="url(#comm-gradient)" fillOpacity="0.1" stroke="url(#comm-gradient)" strokeWidth="2"/>
      <ellipse cx="32" cy="40" rx="12" ry="6" fill="url(#comm-gradient)" fillOpacity="0.1" stroke="url(#comm-gradient)" strokeWidth="2"/>
      <circle cx="32" cy="16" r="4" fill="url(#comm-gradient)"/>
      <path d="M32 20v4M28 24l8 0M24 28l16 0M26 32l12 0M28 36l8 0" stroke="url(#comm-gradient)" strokeWidth="2" strokeLinecap="round"/>
      <circle cx="20" cy="28" r="2" fill="url(#comm-gradient)" fillOpacity="0.8"/>
      <circle cx="44" cy="28" r="2" fill="url(#comm-gradient)" fillOpacity="0.8"/>
      <circle cx="24" cy="36" r="1.5" fill="url(#comm-gradient)" fillOpacity="0.8"/>
      <circle cx="40" cy="36" r="1.5" fill="url(#comm-gradient)" fillOpacity="0.8"/>
      <defs>
        <linearGradient id="comm-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="var(--blue-500)"/>
          <stop offset="100%" stopColor="var(--blue-700)"/>
        </linearGradient>
      </defs>
    </svg>
  ),
};

export default function Icon({ name, size = 64, className = '' }: IconProps) {
  return (
    <motion.div 
      className={className} 
      style={{ height: size, width: size }}
      whileHover={{ scale: 1.1 }}
      transition={{ duration: 0.3 }}
    >
      {icons[name]}
    </motion.div>
  );
}
