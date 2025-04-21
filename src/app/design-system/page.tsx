"use client";

import Link from 'next/link';
import Icon from '@/components/ui/Icon';
import IconCollection from '@/components/ui/IconCollection';

export default function DesignSystemPage() {
  return (
    <div className="container-custom py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-6 text-gray-700">Design System</h1>
        <p className="text-gray-500 mb-12">
          Cette page présente les composants visuels, les couleurs, la typographie et les autres éléments
          qui composent l'identité visuelle de Kyriel Services.
        </p>

        {/* Navigation du Design System */}
        <div className="flex flex-wrap gap-2 mb-12">
          <a href="#colors" className="px-4 py-2 bg-primary-50 text-primary rounded-md hover:bg-primary-100 transition">
            Couleurs
          </a>
          <a href="#typography" className="px-4 py-2 bg-primary-50 text-primary rounded-md hover:bg-primary-100 transition">
            Typographie
          </a>
          <a href="#buttons" className="px-4 py-2 bg-primary-50 text-primary rounded-md hover:bg-primary-100 transition">
            Boutons
          </a>
          <a href="#cards" className="px-4 py-2 bg-primary-50 text-primary rounded-md hover:bg-primary-100 transition">
            Cartes
          </a>
          <a href="#spacing" className="px-4 py-2 bg-primary-50 text-primary rounded-md hover:bg-primary-100 transition">
            Espacement
          </a>
          <a href="#icons" className="px-4 py-2 bg-primary-50 text-primary rounded-md hover:bg-primary-100 transition">
            Icônes
          </a>
        </div>

        {/* Section Couleurs */}
        <section id="colors" className="mb-16">
          <h2 className="text-3xl font-bold mb-6 text-gray-700">Palette de couleurs</h2>

          <h3 className="text-xl font-semibold mb-4 text-gray-700">Couleurs primaires</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
            <div className="rounded-lg overflow-hidden shadow-sm">
              <div className="h-32 bg-primary"></div>
              <div className="p-4 bg-white">
                <p className="font-semibold">Primaire</p>
                <p className="text-sm text-gray-500">#2563EB</p>
                <p className="text-xs text-gray-400">bg-primary, text-primary</p>
              </div>
            </div>

            <div className="rounded-lg overflow-hidden shadow-sm">
              <div className="h-32 bg-secondary"></div>
              <div className="p-4 bg-white">
                <p className="font-semibold">Secondaire</p>
                <p className="text-sm text-gray-500">#13E0DC</p>
                <p className="text-xs text-gray-400">bg-secondary, text-secondary</p>
              </div>
            </div>

            <div className="rounded-lg overflow-hidden shadow-sm">
              <div className="h-32 bg-accent"></div>
              <div className="p-4 bg-white">
                <p className="font-semibold">Accent</p>
                <p className="text-sm text-gray-500">#F59E0B</p>
                <p className="text-xs text-gray-400">bg-accent, text-accent</p>
              </div>
            </div>
          </div>

          <h3 className="text-xl font-semibold mb-4 text-gray-700">Nuances de couleur primaire</h3>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-2 mb-8">
            <div className="bg-primary-50 p-4 rounded">
              <p className="font-mono text-xs">50</p>
            </div>
            <div className="bg-primary-100 p-4 rounded">
              <p className="font-mono text-xs">100</p>
            </div>
            <div className="bg-primary-300 p-4 rounded">
              <p className="font-mono text-xs">300</p>
            </div>
            <div className="bg-primary-500 p-4 rounded text-white">
              <p className="font-mono text-xs">500</p>
            </div>
            <div className="bg-primary-700 p-4 rounded text-white">
              <p className="font-mono text-xs">700</p>
            </div>
          </div>

          <h3 className="text-xl font-semibold mb-4 text-gray-700">Couleurs neutres</h3>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-2">
            <div className="bg-gray-50 p-4 rounded">
              <p className="font-mono text-xs">50</p>
            </div>
            <div className="bg-gray-100 p-4 rounded">
              <p className="font-mono text-xs">100</p>
            </div>
            <div className="bg-gray-300 p-4 rounded">
              <p className="font-mono text-xs">300</p>
            </div>
            <div className="bg-gray-500 p-4 rounded text-white">
              <p className="font-mono text-xs">500</p>
            </div>
            <div className="bg-gray-700 p-4 rounded text-white">
              <p className="font-mono text-xs">700</p>
            </div>
          </div>
        </section>

        {/* Section Typographie */}
        <section id="typography" className="mb-16">
          <h2 className="text-3xl font-bold mb-6 text-gray-700">Typographie</h2>

          <div className="space-y-8">
            <div>
              <p className="text-sm text-gray-500 mb-2">Heading 1</p>
              <h1 className="text-4xl md:text-6xl font-bold text-gray-700">Titre principal</h1>
              <p className="text-xs text-gray-400 mt-2">text-4xl md:text-6xl font-bold text-gray-700</p>
            </div>

            <div>
              <p className="text-sm text-gray-500 mb-2">Heading 2</p>
              <h2 className="text-3xl font-bold text-gray-700">Titre de section</h2>
              <p className="text-xs text-gray-400 mt-2">text-3xl font-bold text-gray-700</p>
            </div>

            <div>
              <p className="text-sm text-gray-500 mb-2">Heading 3</p>
              <h3 className="text-xl font-semibold text-gray-700">Sous-titre</h3>
              <p className="text-xs text-gray-400 mt-2">text-xl font-semibold text-gray-700</p>
            </div>

            <div>
              <p className="text-sm text-gray-500 mb-2">Paragraph</p>
              <p className="text-base text-gray-500">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam eget fermentum quam, vel ultricies diam. Suspendisse a quam non risus fringilla venenatis.</p>
              <p className="text-xs text-gray-400 mt-2">text-base text-gray-500</p>
            </div>

            <div>
              <p className="text-sm text-gray-500 mb-2">Small</p>
              <p className="text-sm text-gray-400">Texte légal ou secondaire</p>
              <p className="text-xs text-gray-400 mt-2">text-sm text-gray-400</p>
            </div>

            <div>
              <p className="text-sm text-gray-500 mb-2">Gradient Heading</p>
              <h2 className="gradient-heading text-3xl font-bold">Titre avec dégradé</h2>
              <p className="text-xs text-gray-400 mt-2">gradient-heading text-3xl font-bold</p>
            </div>
          </div>
        </section>

        {/* Section Boutons */}
        <section id="buttons" className="mb-16">
          <h2 className="text-3xl font-bold mb-6 text-gray-700">Boutons</h2>

          <h3 className="text-xl font-semibold mb-4 text-gray-700">Variantes</h3>
          <div className="flex flex-wrap gap-4 mb-8">
            <button className="btn btn-primary">Primaire</button>
            <button className="btn btn-secondary">Secondaire</button>
            <button className="btn btn-outline">Outline</button>
            <button className="btn btn-accent">Accent</button>
          </div>

          <h3 className="text-xl font-semibold mb-4 text-gray-700">Tailles</h3>
          <div className="flex flex-wrap gap-4 items-center">
            <button className="btn btn-primary btn-sm">Petit</button>
            <button className="btn btn-primary">Normal</button>
            <button className="btn btn-primary btn-lg">Grand</button>
          </div>
        </section>

        {/* Section Cartes */}
        <section id="cards" className="mb-16">
          <h2 className="text-3xl font-bold mb-6 text-gray-700">Cartes</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="service-card">
              <Icon name="settings" type="lucide" size={48} className="card-icon" />
              <h3 className="text-xl font-semibold mb-2 text-gray-700">Titre de la carte</h3>
              <p className="text-gray-500">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio.</p>
              <div className="mt-4">
                <a href="#" className="text-primary hover:text-primary-700 text-sm font-medium inline-flex items-center">
                  En savoir plus
                  <svg className="w-4 h-4 ml-1" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </a>
              </div>
            </div>

            <div className="p-6 rounded-lg border border-gray-100 bg-white shadow-sm">
              <h3 className="text-xl font-semibold mb-4 text-gray-700">Carte simple</h3>
              <p className="text-gray-500 mb-4">Une carte simple avec bordure et ombre légère.</p>
              <button className="btn btn-sm btn-outline">Action</button>
            </div>
          </div>
        </section>

        {/* Section Espacement */}
        <section id="spacing" className="mb-16">
          <h2 className="text-3xl font-bold mb-6 text-gray-700">Espacement</h2>

          <h3 className="text-xl font-semibold mb-4 text-gray-700">Module d'espacement</h3>
          <div className="bg-gray-100 p-4 rounded-lg mb-8">
            <div className="flex flex-wrap gap-4">
              <div className="text-center">
                <div className="w-8 h-8 bg-primary mx-auto"></div>
                <p className="text-xs mt-2">8px</p>
                <p className="text-xs text-gray-500">spacing-2</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-primary mx-auto"></div>
                <p className="text-xs mt-2">16px</p>
                <p className="text-xs text-gray-500">spacing-4</p>
              </div>

              <div className="text-center">
                <div className="w-24 h-24 bg-primary mx-auto"></div>
                <p className="text-xs mt-2">24px</p>
                <p className="text-xs text-gray-500">spacing-6</p>
              </div>

              <div className="text-center">
                <div className="w-32 h-32 bg-primary mx-auto"></div>
                <p className="text-xs mt-2">32px</p>
                <p className="text-xs text-gray-500">spacing-8</p>
              </div>
            </div>
          </div>

          <h3 className="text-xl font-semibold mb-4 text-gray-700">Classes d'espacement</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold mb-2">Padding</h4>
              <div className="bg-gray-100 p-4 rounded-lg">
                <div className="spacing-module bg-white rounded border border-gray-200">
                  <p className="text-sm text-center">spacing-module (p-6)</p>
                </div>
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-2">Margin</h4>
              <div className="bg-gray-100 p-4 rounded-lg flex flex-col gap-4">
                <div className="bg-white rounded border border-gray-200 p-2 text-sm text-center">
                  Élément 1
                </div>
                <div className="mt-module bg-white rounded border border-gray-200 p-2 text-sm text-center">
                  mt-module (mt-6)
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section Icônes */}
        <section id="icons" className="mb-16">
          <h2 className="text-3xl font-bold mb-6 text-gray-700">Icônes</h2>

          <h3 className="text-xl font-semibold mb-4 text-gray-700">Icônes de service</h3>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
            <div className="flex flex-col items-center">
              <Icon name="settings" type="lucide" size={32} className="text-primary mb-2" />
              <p className="text-sm">Automatisation</p>
            </div>
            <div className="flex flex-col items-center">
              <Icon name="tool" type="lucide" size={32} className="text-primary mb-2" />
              <p className="text-sm">Outils</p>
            </div>
            <div className="flex flex-col items-center">
              <Icon name="globe" type="lucide" size={32} className="text-primary mb-2" />
              <p className="text-sm">Web</p>
            </div>
            <div className="flex flex-col items-center">
              <Icon name="message-square" type="lucide" size={32} className="text-primary mb-2" />
              <p className="text-sm">Communication</p>
            </div>
          </div>

          <h3 className="text-xl font-semibold mb-4 text-gray-700">Collection d'icônes</h3>
          <IconCollection category="services" />

          <div className="mt-8">
            <p className="text-gray-500 mb-4">Consulter toutes les catégories d'icônes :</p>
            <div className="flex flex-wrap gap-2">
              <Link href="/design-system?category=all" className="px-3 py-1 bg-primary-50 text-primary rounded-full text-sm">
                Toutes
              </Link>
              <Link href="/design-system?category=navigation" className="px-3 py-1 bg-primary-50 text-primary rounded-full text-sm">
                Navigation
              </Link>
              <Link href="/design-system?category=actions" className="px-3 py-1 bg-primary-50 text-primary rounded-full text-sm">
                Actions
              </Link>
              <Link href="/design-system?category=services" className="px-3 py-1 bg-primary-50 text-primary rounded-full text-sm">
                Services
              </Link>
            </div>
          </div>
        </section>

        {/* Documentation complète */}
        <div className="bg-primary-50 rounded-lg p-6 mb-12">
          <h2 className="text-xl font-semibold mb-2 text-gray-700">Documentation complète</h2>
          <p className="text-gray-500 mb-4">
            Pour une documentation technique complète, consultez le fichier Markdown du Design System :
          </p>
          <a
            href="https://github.com/VEEHMO/kyrielservices/blob/main/docs/design-system.md"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary"
          >
            Voir le fichier design-system.md
          </a>
        </div>
      </div>
    </div>
  );
}
