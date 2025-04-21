/** @type {import('next').NextConfig} */

const nextConfig = {
  // Configuration des images
  images: {
    unoptimized: true,
    dangerouslyAllowSVG: true,
    contentDispositionType: 'attachment',
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },

  // Configuration des headers HTTP pour la sécurité
  headers: async () => {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block',
          },
        ],
      },
    ];
  },

  // Ajout pour améliorer le débogage en développement
  typescript: {
    // ⚠️ Activé uniquement pour le développement
    // Désactiver en production
    ignoreBuildErrors: process.env.NODE_ENV === 'development',
  },

  eslint: {
    ignoreDuringBuilds: true,
  },

  experimental: {
    serverActions: {
      allowedOrigins: ['localhost:3000', 'kyrielservices.fr'],
    },
  },

  // Configuration des packages externes pour les composants serveur
  serverExternalPackages: ['mongoose', 'nodemailer'],
};

module.exports = nextConfig;
