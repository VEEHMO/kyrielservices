'use client';

import { useState, useEffect } from "react";
import Link from "next/link";
import Logo from "@/components/ui/Logo";

export default function HeaderClient() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isClient, setIsClient] = useState(false);

  // S'assurer que le rendu se fait uniquement côté client
  useEffect(() => {
    setIsClient(true);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="sticky top-0 z-20 bg-white border-b border-gray-100 shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-3">
          {/* Logo and Brand */}
          <Link href="/" className="flex items-center gap-3 select-none">
            <Logo variant="icon-only" width={40} height={40} />
            <span className="hidden sm:inline-block text-xl font-bold text-gray-900">Kyriel Services</span>
          </Link>

          {/* Mobile Menu Button - Client-side only */}
          {isClient && (
            <div className="md:hidden">
              <button
                onClick={toggleMenu}
                className="flex flex-col justify-center items-end gap-1.5 w-8 h-8"
                aria-label={isMenuOpen ? "Fermer le menu" : "Ouvrir le menu"}
              >
                <div className={`w-6 h-0.5 bg-gray-800 transition-all ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`} />
                <div className={`w-6 h-0.5 bg-gray-800 transition-all ${isMenuOpen ? 'opacity-0' : ''}`} />
                <div className={`w-6 h-0.5 bg-gray-800 transition-all ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
              </button>

              {/* Mobile Navigation Menu */}
              <div className={`fixed inset-0 bg-white z-30 transition-transform duration-300 pt-20 px-6 ${isMenuOpen ? 'translate-y-0' : '-translate-y-full'}`}>
                <nav className="flex flex-col gap-4 text-lg font-medium">
                  <Link
                    className="py-3 border-b border-gray-100 hover:text-blue-500 transition-colors"
                    href="/"
                    onClick={toggleMenu}
                  >
                    Accueil
                  </Link>
                  <Link
                    className="py-3 border-b border-gray-100 hover:text-blue-500 transition-colors"
                    href="/services"
                    onClick={toggleMenu}
                  >
                    Services
                  </Link>
                  <Link
                    className="py-3 border-b border-gray-100 hover:text-blue-500 transition-colors"
                    href="/realisations"
                    onClick={toggleMenu}
                  >
                    Réalisations
                  </Link>
                  <Link
                    className="py-3 border-b border-gray-100 hover:text-blue-500 transition-colors"
                    href="/a-propos"
                    onClick={toggleMenu}
                  >
                    À propos
                  </Link>
                  <Link
                    className="mt-4 py-3 px-6 rounded-full bg-blue-500 text-white font-semibold text-center hover:bg-blue-600 transition-colors"
                    href="/contact"
                    onClick={toggleMenu}
                  >
                    Contact
                  </Link>
                </nav>
              </div>
            </div>
          )}

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6 text-base font-medium">
            <Link
              className="hover:text-blue-500 transition-colors relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-blue-500 after:transition-all hover:after:w-full"
              href="/"
            >
              Accueil
            </Link>
            <Link
              className="hover:text-blue-500 transition-colors relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-blue-500 after:transition-all hover:after:w-full"
              href="/services"
            >
              Services
            </Link>
            <Link
              className="hover:text-blue-500 transition-colors relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-blue-500 after:transition-all hover:after:w-full"
              href="/realisations"
            >
              Réalisations
            </Link>
            <Link
              className="hover:text-blue-500 transition-colors relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-blue-500 after:transition-all hover:after:w-full"
              href="/a-propos"
            >
              À propos
            </Link>
            <Link
              className="py-2 px-5 rounded-full bg-blue-500 text-white font-semibold hover:bg-blue-600 transition-colors"
              href="/contact"
            >
              Contact
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}
