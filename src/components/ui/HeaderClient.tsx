'use client';

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Logo from "@/components/ui/Logo";
import { usePathname } from "next/navigation";

export default function HeaderClient() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isClient, setIsClient] = useState(false);
  const menuRef = useRef<HTMLDialogElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const pathname = usePathname();

  // S'assurer que le rendu se fait uniquement côté client
  useEffect(() => {
    setIsClient(true);
  }, []);

  // Fermer le menu quand on clique en dehors
  useEffect(() => {
    if (!isClient) return;

    const handleClickOutside = (event: MouseEvent) => {
      if (
        menuRef.current &&
        buttonRef.current &&
        !menuRef.current.contains(event.target as Node) &&
        !buttonRef.current.contains(event.target as Node) &&
        isMenuOpen
      ) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isMenuOpen, isClient]);

  // Empêcher le défilement du corps quand le menu est ouvert
  useEffect(() => {
    if (!isClient) return;

    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isMenuOpen, isClient]);

  // Fermer le menu quand on change de page
  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Gestion des touches pour l'accessibilité
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Escape') {
      setIsMenuOpen(false);
    }
  };

  // Rendu d'un header statique côté serveur pour éviter les erreurs d'hydratation
  if (!isClient) {
    return (
      <header className="sticky top-0 z-20 bg-white border-b border-gray-100 shadow-sm">
        <div className="container-custom">
          <div className="flex justify-between items-center py-3">
            {/* Logo and Brand */}
            <Link href="/" className="flex items-center gap-3 select-none">
              <Logo variant="icon-only" width={40} height={40} />
              <span className="hidden sm:inline-block text-xl font-bold text-gray-700">Kyriel Services</span>
            </Link>

            {/* Version statique du bouton de menu mobile */}
            <div className="md:hidden">
              <button
                className="flex flex-col justify-center items-end gap-1.5 w-10 h-10 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                aria-label="Ouvrir le menu"
              >
                <div className="w-6 h-0.5 bg-gray-700" />
                <div className="w-6 h-0.5 bg-gray-700" />
                <div className="w-6 h-0.5 bg-gray-700" />
              </button>
            </div>

            {/* Navigation Desktop */}
            <nav className="hidden md:flex items-center gap-module text-base font-medium">
              <Link
                className="hover:text-primary transition-colors relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-primary after:transition-all hover:after:w-full px-2 py-1 rounded-md focus:outline-none focus:bg-gray-50 focus:text-primary"
                href="/"
              >
                <span className={pathname === "/" ? "text-primary font-semibold after:w-full" : ""}>Accueil</span>
              </Link>
              <Link
                className="hover:text-primary transition-colors relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-primary after:transition-all hover:after:w-full px-2 py-1 rounded-md focus:outline-none focus:bg-gray-50 focus:text-primary"
                href="/services"
              >
                <span className={pathname === "/services" ? "text-primary font-semibold after:w-full" : ""}>Services</span>
              </Link>
              <Link
                className="hover:text-primary transition-colors relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-primary after:transition-all hover:after:w-full px-2 py-1 rounded-md focus:outline-none focus:bg-gray-50 focus:text-primary"
                href="/realisations"
              >
                <span className={pathname === "/realisations" ? "text-primary font-semibold after:w-full" : ""}>Réalisations</span>
              </Link>
              <Link
                className="hover:text-primary transition-colors relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-primary after:transition-all hover:after:w-full px-2 py-1 rounded-md focus:outline-none focus:bg-gray-50 focus:text-primary"
                href="/a-propos"
              >
                <span className={pathname === "/a-propos" ? "text-primary font-semibold after:w-full" : ""}>À propos</span>
              </Link>
              <Link
                className="btn btn-primary rounded-lg"
                href="/contact"
              >
                Contactez-nous
              </Link>
            </nav>
          </div>
        </div>
      </header>
    );
  }

  return (
    <header className="sticky top-0 z-20 bg-white border-b border-gray-100 shadow-sm" onKeyDown={handleKeyDown}>
      <div className="container-custom">
        <div className="flex justify-between items-center py-3">
          {/* Logo and Brand */}
          <Link href="/" className="flex items-center gap-3 select-none">
            <Logo variant="icon-only" width={40} height={40} />
            <span className="hidden sm:inline-block text-xl font-bold text-gray-700">Kyriel Services</span>
          </Link>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              ref={buttonRef}
              onClick={toggleMenu}
              className="flex flex-col justify-center items-end gap-1.5 w-10 h-10 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
              aria-label={isMenuOpen ? "Fermer le menu" : "Ouvrir le menu"}
              aria-expanded={isMenuOpen}
              aria-controls="mobile-menu"
            >
              <div className={`w-6 h-0.5 bg-gray-700 transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`} />
              <div className={`w-6 h-0.5 bg-gray-700 transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`} />
              <div className={`w-6 h-0.5 bg-gray-700 transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
            </button>

            {/* Mobile Navigation Menu - Utilise dialog pour une meilleure accessibilité */}
            <dialog
              id="mobile-menu"
              ref={menuRef}
              className={`fixed inset-0 bg-white z-30 m-0 p-0 w-full h-full transition-all duration-300 pt-20 spacing-module ${
                isMenuOpen ? 'flex flex-col' : 'hidden'
              }`}
              aria-labelledby="mobile-menu-title"
              open={isMenuOpen}
            >
              <h2 id="mobile-menu-title" className="sr-only">Menu mobile</h2>
              <nav className="flex flex-col gap-module-sm text-lg font-medium">
                <Link
                  className="py-3 px-2 border-b border-gray-100 hover:text-primary transition-colors focus:outline-none focus:bg-gray-50 focus:text-primary rounded-md"
                  href="/"
                  onClick={toggleMenu}
                >
                  <span className={pathname === "/" ? "text-primary font-semibold" : ""}>Accueil</span>
                </Link>
                <Link
                  className="py-3 px-2 border-b border-gray-100 hover:text-primary transition-colors focus:outline-none focus:bg-gray-50 focus:text-primary rounded-md"
                  href="/services"
                  onClick={toggleMenu}
                >
                  <span className={pathname === "/services" ? "text-primary font-semibold" : ""}>Services</span>
                </Link>
                <Link
                  className="py-3 px-2 border-b border-gray-100 hover:text-primary transition-colors focus:outline-none focus:bg-gray-50 focus:text-primary rounded-md"
                  href="/realisations"
                  onClick={toggleMenu}
                >
                  <span className={pathname === "/realisations" ? "text-primary font-semibold" : ""}>Réalisations</span>
                </Link>
                <Link
                  className="py-3 px-2 border-b border-gray-100 hover:text-primary transition-colors focus:outline-none focus:bg-gray-50 focus:text-primary rounded-md"
                  href="/a-propos"
                  onClick={toggleMenu}
                >
                  <span className={pathname === "/a-propos" ? "text-primary font-semibold" : ""}>À propos</span>
                </Link>
                <Link
                  className="mt-4 btn btn-primary rounded-lg text-center"
                  href="/contact"
                  onClick={toggleMenu}
                >
                  Contactez-nous
                </Link>
              </nav>
            </dialog>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-module text-base font-medium">
            <Link
              className="hover:text-primary transition-colors relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-primary after:transition-all hover:after:w-full px-2 py-1 rounded-md focus:outline-none focus:bg-gray-50 focus:text-primary"
              href="/"
            >
              <span className={pathname === "/" ? "text-primary font-semibold after:w-full" : ""}>Accueil</span>
            </Link>
            <Link
              className="hover:text-primary transition-colors relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-primary after:transition-all hover:after:w-full px-2 py-1 rounded-md focus:outline-none focus:bg-gray-50 focus:text-primary"
              href="/services"
            >
              <span className={pathname === "/services" ? "text-primary font-semibold after:w-full" : ""}>Services</span>
            </Link>
            <Link
              className="hover:text-primary transition-colors relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-primary after:transition-all hover:after:w-full px-2 py-1 rounded-md focus:outline-none focus:bg-gray-50 focus:text-primary"
              href="/realisations"
            >
              <span className={pathname === "/realisations" ? "text-primary font-semibold after:w-full" : ""}>Réalisations</span>
            </Link>
            <Link
              className="hover:text-primary transition-colors relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-primary after:transition-all hover:after:w-full px-2 py-1 rounded-md focus:outline-none focus:bg-gray-50 focus:text-primary"
              href="/a-propos"
            >
              <span className={pathname === "/a-propos" ? "text-primary font-semibold after:w-full" : ""}>À propos</span>
            </Link>
            <Link
              className="btn btn-primary rounded-lg"
              href="/contact"
            >
              Contactez-nous
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}
