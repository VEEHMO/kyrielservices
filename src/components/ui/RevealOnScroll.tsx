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
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
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
  }, [once, threshold]);

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
      case 'none':
      default:
        return 'reveal';
    }
  };

  const animationClass = getAnimationClass();
  const delayStyle = delay ? { transitionDelay: `${delay}ms` } : {};

  return (
    <div
      ref={ref}
      className={`${animationClass} ${isVisible ? 'active' : ''} ${className}`}
      style={delayStyle}
    >
      {children}
    </div>
  );
}
