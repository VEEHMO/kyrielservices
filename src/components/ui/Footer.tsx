'use client';

import Link from 'next/link';
import Logo from './Logo';
import { motion } from 'framer-motion';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-[#188ce4] to-[#1581cf] text-white">
      <div className="container mx-auto px-4 pt-10 pb-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 mb-16">
          {/* Logo et description - occupe 4 colonnes sur desktop */}
          <div className="md:col-span-4">
            <div className="flex items-center mb-6">
              <Logo width={36} height={36} />
              <span className="ml-3 text-xl font-bold tracking-tight">Kyriel Services</span>
            </div>
            <p className="text-blue-100 text-sm mb-5">
              Solutions informatiques et web pour entrepreneurs, PME et particuliers.
              Nous construisons des outils qui révolutionnent vos opérations et font gagner
              du temps à votre entreprise.
            </p>
            <div className="flex space-x-4 mt-6">
              <a
                href="https://www.linkedin.com/"
                aria-label="LinkedIn"
                className="bg-blue-400 bg-opacity-20 p-3 rounded-full hover:bg-opacity-30 transition-all duration-300"
              >
                <span className="sr-only">LinkedIn</span>
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path
                    fillRule="evenodd"
                    d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
              <a
                href="mailto:contact@kyriel-services.fr"
                aria-label="Email"
                className="bg-blue-400 bg-opacity-20 p-3 rounded-full hover:bg-opacity-30 transition-all duration-300"
              >
                <span className="sr-only">Email</span>
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
                  <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Services - occupe 2 colonnes sur desktop */}
          <div className="md:col-span-2">
            <h3 className="text-lg font-semibold mb-6 text-white">Services</h3>
            <ul className="space-y-4">
              <li>
                <Link href="/services#automatisation" className="text-blue-100 hover:text-white transition-colors flex items-center">
                  <svg className="w-3 h-3 mr-2" viewBox="0 0 12 12" fill="currentColor">
                    <path d="M4 1L9 6L4 11" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" />
                  </svg>
                  Automatisation
                </Link>
              </li>
              <li>
                <Link href="/services#outils" className="text-blue-100 hover:text-white transition-colors flex items-center">
                  <svg className="w-3 h-3 mr-2" viewBox="0 0 12 12" fill="currentColor">
                    <path d="M4 1L9 6L4 11" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" />
                  </svg>
                  Développement d'outils
                </Link>
              </li>
              <li>
                <Link href="/services#web" className="text-blue-100 hover:text-white transition-colors flex items-center">
                  <svg className="w-3 h-3 mr-2" viewBox="0 0 12 12" fill="currentColor">
                    <path d="M4 1L9 6L4 11" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" />
                  </svg>
                  Création de sites web
                </Link>
              </li>
              <li>
                <Link href="/services#communication" className="text-blue-100 hover:text-white transition-colors flex items-center">
                  <svg className="w-3 h-3 mr-2" viewBox="0 0 12 12" fill="currentColor">
                    <path d="M4 1L9 6L4 11" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" />
                  </svg>
                  Communication digitale
                </Link>
              </li>
            </ul>
          </div>

          {/* Liens rapides - occupe 2 colonnes sur desktop */}
          <div className="md:col-span-2">
            <h3 className="text-lg font-semibold mb-6 text-white">Navigation</h3>
            <ul className="space-y-4">
              <li>
                <Link href="/" className="text-blue-100 hover:text-white transition-colors flex items-center">
                  <svg className="w-3 h-3 mr-2" viewBox="0 0 12 12" fill="currentColor">
                    <path d="M4 1L9 6L4 11" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" />
                  </svg>
                  Accueil
                </Link>
              </li>
              <li>
                <Link href="/realisations" className="text-blue-100 hover:text-white transition-colors flex items-center">
                  <svg className="w-3 h-3 mr-2" viewBox="0 0 12 12" fill="currentColor">
                    <path d="M4 1L9 6L4 11" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" />
                  </svg>
                  Réalisations
                </Link>
              </li>
              <li>
                <Link href="/a-propos" className="text-blue-100 hover:text-white transition-colors flex items-center">
                  <svg className="w-3 h-3 mr-2" viewBox="0 0 12 12" fill="currentColor">
                    <path d="M4 1L9 6L4 11" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" />
                  </svg>
                  À propos
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-blue-100 hover:text-white transition-colors flex items-center">
                  <svg className="w-3 h-3 mr-2" viewBox="0 0 12 12" fill="currentColor">
                    <path d="M4 1L9 6L4 11" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" />
                  </svg>
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact - occupe 4 colonnes sur desktop */}
          <div className="md:col-span-4">
            <h3 className="text-lg font-semibold mb-6 text-white">Contactez-nous</h3>
            <ul className="space-y-4 text-blue-100">
              <li className="flex items-start">
                <div className="bg-blue-400 bg-opacity-20 p-2 rounded-md mr-3">
                  <svg className="h-5 w-5 text-blue-50" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M11.47 3.84a.75.75 0 011.06 0l8.69 8.69a.75.75 0 101.06-1.06l-8.69-8.69a2.25 2.25 0 00-3.182 0l-8.69 8.69a.75.75 0 001.061 1.06l8.69-8.69z" />
                    <path d="M12 5.432l8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 01-.75-.75v-4.5a.75.75 0 00-.75-.75h-3a.75.75 0 00-.75.75V21a.75.75 0 01-.75.75H5.625a1.875 1.875 0 01-1.875-1.875v-6.198a2.29 2.29 0 00.091-.086L12 5.43z" />
                  </svg>
                </div>
                <div>
                  <span className="font-medium text-white">Adresse</span><br />
                  <span>Kyriel Services<br />France</span>
                </div>
              </li>
              <li className="flex items-start">
                <div className="bg-blue-400 bg-opacity-20 p-2 rounded-md mr-3">
                  <svg className="h-5 w-5 text-blue-50" fill="currentColor" viewBox="0 0 24 24">
                    <path
                      fillRule="evenodd"
                      d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <div>
                  <span className="font-medium text-white">Téléphone</span><br />
                  <span>+33 (0) XX XX XX XX</span>
                </div>
              </li>
              <li className="flex items-start">
                <div className="bg-blue-400 bg-opacity-20 p-2 rounded-md mr-3">
                  <svg className="h-5 w-5 text-blue-50" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
                    <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
                  </svg>
                </div>
                <div>
                  <span className="font-medium text-white">Email</span><br />
                  <span>contact@kyriel-services.fr</span>
                </div>
              </li>
            </ul>

            {/* Bouton de contact rapide */}
            <div className="mt-8">
              <Link
                href="/contact"
                className="bg-white hover:bg-blue-50 text-[#188ce4] font-semibold py-3 px-6 rounded-md shadow-md hover:shadow-lg transition duration-300 inline-flex items-center"
              >
                Nous contacter
                <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" fill="none">
                  <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </Link>
            </div>
          </div>
        </div>

        {/* Copyright sans séparateur */}
        <div className="pt-8 flex flex-col md:flex-row justify-between items-center text-blue-100 text-sm">
          <p>© 2024 Kyriel Services. Tous droits réservés.</p>
          <div className="mt-4 md:mt-0 flex space-x-6">
            <Link href="/mentions-legales" className="hover:text-white transition-colors">Mentions légales</Link>
            <Link href="/confidentialite" className="hover:text-white transition-colors">Politique de confidentialité</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
