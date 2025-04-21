import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Nouvelle palette de couleurs basée sur les spécifications
        primary: {
          DEFAULT: '#2563EB', // Bleu primaire
          foreground: 'white',
          50: '#EFF6FF',
          100: '#DBEAFE',
          200: '#BFDBFE',
          300: '#93C5FD',
          400: '#60A5FA',
          500: '#3B82F6',
          600: '#2563EB', // Cette valeur est la couleur primaire par défaut
          700: '#1D4ED8',
          800: '#1E40AF',
          900: '#1E3A8A',
        },
        secondary: {
          DEFAULT: '#13E0DC', // Cyan secondaire
          foreground: '#1F2937',
          50: '#ecfeff',
          100: '#cffcfc',
          200: '#a5f7f9',
          300: '#67f0f3',
          400: '#22e5e9',
          500: '#13E0DC', // Cette valeur est la couleur secondaire par défaut
          600: '#08b3b8',
          700: '#0d8f94',
          800: '#127277',
          900: '#135e63',
        },
        accent: {
          DEFAULT: '#F59E0B', // Orange accent
          foreground: 'white',
          50: '#fffbeb',
          100: '#fef3c7',
          200: '#fde68a',
          300: '#fcd34d',
          400: '#fbbf24',
          500: '#F59E0B', // Cette valeur est la couleur accent par défaut
          600: '#d97706',
          700: '#b45309',
          800: '#92400e',
          900: '#78350f',
        },
        gray: {
          50: '#F3F4F6', // Neutre clair
          100: '#E5E7EB',
          200: '#D1D5DB',
          300: '#9CA3AF',
          400: '#6B7280', // Neutre médium
          500: '#4B5563',
          600: '#374151',
          700: '#1F2937', // Neutre foncé
          800: '#1F2937',
          900: '#111827',
        },
        background: 'white',
        foreground: '#1F2937',
        card: {
          DEFAULT: 'white',
          foreground: '#1F2937'
        },
        popover: {
          DEFAULT: 'white',
          foreground: '#1F2937'
        },
        muted: {
          DEFAULT: '#F3F4F6',
          foreground: '#6B7280'
        },
        destructive: {
          DEFAULT: '#EF4444',
          foreground: 'white'
        },
        border: '#E5E7EB',
        input: '#E5E7EB',
        ring: '#2563EB',
        chart: {
          '1': '#2563EB',
          '2': '#13E0DC',
          '3': '#F59E0B',
          '4': '#1F2937',
          '5': '#6B7280'
        }
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)'
      },
      container: {
        center: true,
        padding: {
          DEFAULT: '1rem',
          sm: '2rem',
          lg: '4rem',
          xl: '5rem',
          '2xl': '6rem',
        },
        screens: {
          sm: '640px',
          md: '768px',
          lg: '1024px',
          xl: '1280px',
          '2xl': '1536px',
        },
      },
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
      },
    }
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
