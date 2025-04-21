'use client';

import { useState, useEffect } from 'react';

export default function AccessibilityControl() {
  const [isOpen, setIsOpen] = useState(false);
  const [fontSize, setFontSize] = useState('normal');
  const [highContrast, setHighContrast] = useState(false);
  const [isClient, setIsClient] = useState(false);

  // S'assurer que le rendu se fait uniquement côté client pour éviter les erreurs d'hydratation
  useEffect(() => {
    setIsClient(true);

    // Récupérer les préférences stockées
    const savedFontSize = localStorage.getItem('kyriel-font-size');
    const savedContrast = localStorage.getItem('kyriel-high-contrast') === 'true';

    if (savedFontSize) {
      setFontSize(savedFontSize);
      applyFontSize(savedFontSize);
    }

    if (savedContrast) {
      setHighContrast(savedContrast);
      applyHighContrast(savedContrast);
    }
  }, []);

  const togglePanel = () => {
    setIsOpen(!isOpen);
  };

  const changeFontSize = (size: string) => {
    setFontSize(size);
    applyFontSize(size);
    localStorage.setItem('kyriel-font-size', size);
  };

  const toggleHighContrast = () => {
    const newContrastValue = !highContrast;
    setHighContrast(newContrastValue);
    applyHighContrast(newContrastValue);
    localStorage.setItem('kyriel-high-contrast', newContrastValue.toString());
  };

  const applyFontSize = (size: string) => {
    const htmlElement = document.documentElement;

    // Supprimer toutes les classes de taille de police
    htmlElement.classList.remove('text-sm', 'text-base', 'text-lg', 'text-xl');

    // Appliquer la nouvelle classe
    switch (size) {
      case 'small':
        htmlElement.classList.add('text-sm');
        break;
      case 'normal':
        htmlElement.classList.add('text-base');
        break;
      case 'large':
        htmlElement.classList.add('text-lg');
        break;
      case 'xlarge':
        htmlElement.classList.add('text-xl');
        break;
    }
  };

  const applyHighContrast = (enabled: boolean) => {
    const htmlElement = document.documentElement;

    if (enabled) {
      htmlElement.classList.add('high-contrast');
    } else {
      htmlElement.classList.remove('high-contrast');
    }
  };

  if (!isClient) return null;

  return (
    <div className="fixed bottom-4 right-4 z-50">
      {/* Bouton d'accessibilité */}
      <button
        aria-label="Options d'accessibilité"
        aria-expanded={isOpen}
        aria-controls="accessibility-panel"
        className="bg-primary text-white p-3 rounded-full shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary hover:bg-primary-600 transition-colors"
        onClick={togglePanel}
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
        </svg>
      </button>

      {/* Panneau d'options d'accessibilité */}
      <div
        id="accessibility-panel"
        className={`absolute bottom-14 right-0 bg-white rounded-lg shadow-xl p-4 w-64 transition-all duration-300 transform ${
          isOpen ? 'scale-100 opacity-100' : 'scale-95 opacity-0 pointer-events-none'
        }`}
        aria-hidden={!isOpen}
      >
        <h3 className="text-gray-700 font-semibold mb-4">Options d'accessibilité</h3>

        {/* Taille du texte */}
        <div className="mb-4">
          <p className="text-gray-600 text-sm mb-2">Taille du texte</p>
          <div className="flex space-x-2">
            <button
              aria-label="Petite taille de texte"
              aria-pressed={fontSize === 'small'}
              className={`px-2 py-1 rounded ${
                fontSize === 'small' ? 'bg-primary text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
              onClick={() => changeFontSize('small')}
            >
              A
            </button>
            <button
              aria-label="Taille de texte normale"
              aria-pressed={fontSize === 'normal'}
              className={`px-3 py-1 rounded ${
                fontSize === 'normal' ? 'bg-primary text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
              onClick={() => changeFontSize('normal')}
            >
              A
            </button>
            <button
              aria-label="Grande taille de texte"
              aria-pressed={fontSize === 'large'}
              className={`px-4 py-1 rounded ${
                fontSize === 'large' ? 'bg-primary text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
              onClick={() => changeFontSize('large')}
            >
              A
            </button>
            <button
              aria-label="Très grande taille de texte"
              aria-pressed={fontSize === 'xlarge'}
              className={`px-5 py-1 rounded ${
                fontSize === 'xlarge' ? 'bg-primary text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
              onClick={() => changeFontSize('xlarge')}
            >
              A
            </button>
          </div>
        </div>

        {/* Contraste élevé */}
        <div className="mb-4">
          <div className="flex items-center">
            <input
              type="checkbox"
              id="high-contrast"
              checked={highContrast}
              onChange={toggleHighContrast}
              className="sr-only"
            />
            <button
              role="switch"
              aria-checked={highContrast}
              aria-labelledby="contrast-label"
              onClick={toggleHighContrast}
              className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 ${
                highContrast ? 'bg-primary' : 'bg-gray-200'
              }`}
            >
              <span
                className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                  highContrast ? 'translate-x-6' : 'translate-x-1'
                }`}
              />
            </button>
            <span id="contrast-label" className="ml-3 text-sm text-gray-600">
              Contraste élevé
            </span>
          </div>
        </div>

        <div className="border-t border-gray-200 pt-2 mt-2">
          <p className="text-xs text-gray-500">
            Ces paramètres sont enregistrés pour vos futures visites.
          </p>
        </div>
      </div>
    </div>
  );
}
