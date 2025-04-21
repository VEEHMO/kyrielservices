'use client';

import { useEffect, useRef, useState } from 'react';

type RevealProps = {
  children: React.ReactNode;
  direction?: 'up' | 'down' | 'left' | 'right' | 'none';
  delay?: number; // en millisecondes
  threshold?: number; // 0 à 1, défaut 0.1
  once?: boolean; // jouer l'animation une seule fois ou à chaque fois
  className?: string;
};

export default function RevealOnScroll({
  children,
  direction = 'up',
  delay = 0,
  threshold = 0.1,
  once = true,
  className = '',
}: RevealProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [isClient, setIsClient] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  // S'assurer que nous sommes côté client pour éviter les problèmes d'hydratation
  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (!isClient) return; // Ne pas créer d'observer pendant l'hydratation

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (once && ref.current) {
            observer.unobserve(ref.current);
          }
        } else if (!once) {
          setIsVisible(false);
        }
      },
      {
        threshold,
        rootMargin: '0px 0px -50px 0px',
      }
    );

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [once, threshold, isClient]);

  // Choisir la classe CSS en fonction de la direction
  const getAnimationClass = () => {
    switch (direction) {
      case 'up':
        return 'reveal-up';
      case 'down':
        return 'reveal-down';
      case 'left':
        return 'reveal-left';
      case 'right':
        return 'reveal-right';
      default:
        return 'reveal';
    }
  };

  // Si nous ne sommes pas côté client, retourner un élément sans animation
  if (!isClient) {
    return <div className={className}>{children}</div>;
  }

  const animationClass = getAnimationClass();
  const delayStyle = delay ? { transitionDelay: `${delay}ms` } : {};

  return (
    <div
      ref={ref}
      className={`${animationClass} ${isVisible ? 'active' : ''} ${className}`}
      style={delayStyle}
      suppressHydrationWarning
    >
      {children}
    </div>
  );
}
