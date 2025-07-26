"use client";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";

// Composant de parallaxe avancé
export const ParallaxElement = ({ 
  children, 
  speed = 0.5, 
  className = "" 
}: { 
  children: React.ReactNode; 
  speed?: number; 
  className?: string; 
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], [0, speed * 100]);
  
  return (
    <motion.div
      ref={ref}
      style={{ y }}
      className={`${className} parallax-element`}
    >
      {children}
    </motion.div>
  );
};

// Composant de révélation magnétique
export const MagneticReveal = ({ 
  children, 
  delay = 0, 
  className = "" 
}: { 
  children: React.ReactNode; 
  delay?: number; 
  className?: string; 
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40, scale: 0.95, filter: "blur(5px)" }}
      animate={isInView ? { 
        opacity: 1, 
        y: 0, 
        scale: 1, 
        filter: "blur(0px)" 
      } : {}}
      transition={{
        duration: 1.2,
        delay,
        ease: [0.4, 0, 0.2, 1]
      }}
      className={`${className} magnetic-reveal`}
    >
      {children}
    </motion.div>
  );
};

// Orbes flottantes améliorées
export const FloatingOrbs = ({ count = 5 }: { count?: number }) => {
  const [orbs, setOrbs] = useState<Array<{
    id: number;
    size: number;
    duration: number;
    delay: number;
    x: number;
    y: number;
  }>>([]);

  useEffect(() => {
    const newOrbs = Array.from({ length: count }, (_, i) => ({
      id: i,
      size: Math.random() * 8 + 4, // 4-12px
      duration: Math.random() * 15 + 20, // 20-35s
      delay: Math.random() * -10, // 0 to -10s
      x: Math.random() * 100, // 0-100%
      y: Math.random() * 100, // 0-100%
    }));
    setOrbs(newOrbs);
  }, [count]);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {orbs.map((orb) => (
        <motion.div
          key={orb.id}
          className="floating-orb absolute opacity-60"
          style={{
            width: orb.size,
            height: orb.size,
            left: `${orb.x}%`,
            top: `${orb.y}%`,
          }}
          animate={{
            y: [0, -20, 0],
            x: [0, 10, -10, 0],
            scale: [1, 1.1, 0.9, 1],
            opacity: [0.3, 0.7, 0.5, 0.3],
          }}
          transition={{
            duration: orb.duration,
            repeat: Infinity,
            delay: orb.delay,
            ease: "easeInOut"
          }}
        />
      ))}
    </div>
  );
};

// Effet de morphing fluide
export const MorphingGlow = ({ 
  className = "",
  size = 200 
}: { 
  className?: string;
  size?: number;
}) => {
  return (
    <motion.div
      className={`morphing-glow ${className}`}
      style={{ width: size, height: size }}
      animate={{
        borderRadius: [
          "50% 40% 30% 60%",
          "60% 30% 70% 40%", 
          "30% 60% 40% 70%",
          "70% 40% 60% 30%",
          "50% 40% 30% 60%"
        ],
        background: [
          "radial-gradient(circle at 30% 40%, rgba(39, 101, 236, 0.1), transparent 70%)",
          "radial-gradient(circle at 60% 30%, rgba(79, 125, 245, 0.12), transparent 70%)",
          "radial-gradient(circle at 70% 60%, rgba(31, 80, 216, 0.08), transparent 70%)",
          "radial-gradient(circle at 40% 70%, rgba(103, 148, 255, 0.15), transparent 70%)",
          "radial-gradient(circle at 30% 40%, rgba(39, 101, 236, 0.1), transparent 70%)"
        ]
      }}
      transition={{
        duration: 12,
        repeat: Infinity,
        ease: "easeInOut"
      }}
    />
  );
};

// Composant de vague de lumière
export const LightWave = ({ className = "" }: { className?: string }) => {
  return (
    <div className={`light-wave-bg ${className}`}>
      <motion.div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "linear-gradient(90deg, transparent 0%, rgba(255, 255, 255, 0.1) 25%, rgba(39, 101, 236, 0.1) 50%, rgba(255, 255, 255, 0.1) 75%, transparent 100%)",
          backgroundSize: "200% 100%"
        }}
        animate={{
          backgroundPosition: ["-200% center", "200% center", "600% center"]
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
    </div>
  );
};

// Composant de scroll reveal avancé
export const ScrollReveal = ({
  children,
  direction = "up",
  delay = 0,
  className = ""
}: {
  children: React.ReactNode;
  direction?: "up" | "down" | "left" | "right" | "zoom";
  delay?: number;
  className?: string;
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  const variants = {
    up: { y: 30 },
    down: { y: -30 },
    left: { x: -30 },
    right: { x: 30 },
    zoom: { scale: 0.95 }
  };

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, ...variants[direction] }}
      animate={isInView ? { 
        opacity: 1, 
        y: 0, 
        x: 0, 
        scale: 1 
      } : {}}
      transition={{
        duration: 0.8,
        delay,
        ease: [0.4, 0, 0.2, 1]
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};