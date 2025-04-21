'use client';

import { useEffect, useRef, useState } from 'react';

type SectionSeparatorProps = {
  color?: 'light' | 'dark';
  width?: string;
  className?: string;
};

export default function SectionSeparator({
  color = 'light',
  width = '80px',
  className = '',
}: SectionSeparatorProps) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      {
        threshold: 0.1,
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
  }, []);

  const bgColor = color === 'light' ? 'bg-[#188ce4]' : 'bg-[#1581cf]';
  const visibilityClass = isVisible ? 'w-full opacity-100' : 'w-0 opacity-0';
  const styleWidth = { maxWidth: width };

  return (
    <div className={`flex justify-center my-10 ${className}`}>
      <div
        ref={ref}
        style={styleWidth}
        className={`h-1 rounded-full transition-all duration-1000 transform ${bgColor} ${visibilityClass}`}
      />
    </div>
  );
}
