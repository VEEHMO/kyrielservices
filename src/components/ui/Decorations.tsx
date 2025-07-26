'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export const GlowingDot = ({
  color = "#188ce4",
  size = 12,
  delay = 0,
  x = 0,
  y = 0,
  className = ''
}) => {
  return (
    <motion.div
      className={`absolute rounded-full opacity-60 blur-md ${className}`}
      style={{
        backgroundColor: color,
        width: size,
        height: size,
        left: `${x}%`,
        top: `${y}%`,
      }}
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{
        opacity: [0.4, 1, 0.4],
        scale: [1, 1.3, 1],
        boxShadow: [
          `0 0 ${size}px ${color}30`,
          `0 0 ${size * 2}px ${color}60`,
          `0 0 ${size}px ${color}30`
        ]
      }}
      transition={{
        duration: 4,
        ease: "easeInOut",
        times: [0, 0.5, 1],
        repeat: Number.POSITIVE_INFINITY,
        repeatDelay: 0.5,
        delay
      }}
    />
  );
};

export const LuxuryGlow = ({
  className = '',
  width = 100,
  height = 60,
  color = "#188ce4",
  intensity = "medium"
}) => {
  const getBlurAmount = () => {
    switch (intensity) {
      case "low": return "blur-2xl";
      case "high": return "blur-3xl";
      default: return "blur-3xl";
    }
  };

  return (
    <div className={`absolute pointer-events-none ${className}`}>
      <motion.div
        className={`absolute inset-0 opacity-20 ${getBlurAmount()} rounded-full`}
        style={{
          width: `${width}%`,
          height: `${height}%`,
          background: `radial-gradient(circle, ${color} 0%, rgba(255,215,0,0.1) 35%, transparent 70%)`,
        }}
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.2, 0.35, 0.2],
        }}
        transition={{
          duration: 8,
          ease: "easeInOut",
          repeat: Number.POSITIVE_INFINITY,
        }}
      />
      <motion.div
        className={`absolute inset-0 opacity-10 ${getBlurAmount()} rounded-full`}
        style={{
          width: `${width * 0.7}%`,
          height: `${height * 0.7}%`,
          background: `radial-gradient(circle, #FFD700 0%, transparent 70%)`,
          left: '15%',
          top: '15%',
        }}
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.1, 0.25, 0.1],
        }}
        transition={{
          duration: 6,
          ease: "easeInOut",
          repeat: Number.POSITIVE_INFINITY,
          delay: 2,
        }}
      />
    </div>
  );
};

export const Glow = LuxuryGlow; // Alias pour compatibilité

export const PremiumGrid = ({ className = '', opacity = 0.08 }) => {
  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`} style={{ opacity }}>
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `
            linear-gradient(to right, #FFD700 1px, transparent 1px),
            linear-gradient(to bottom, #FFD700 1px, transparent 1px),
            linear-gradient(to right, #667eea 1px, transparent 1px),
            linear-gradient(to bottom, #667eea 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px, 60px 60px, 20px 20px, 20px 20px',
          backgroundPosition: '0 0, 0 0, 0 0, 0 0'
        }}
      />
    </div>
  );
};

export const Grid = ({ className = '' }) => {
  return <PremiumGrid className={className} opacity={0.1} />;
};

export const LuxuryParticles = ({ count = 25, className = '' }) => {
  const [particles, setParticles] = useState<Array<{
    id: number;
    x: number;
    y: number;
    size: number;
    opacity: number;
    color: string;
    delay: number;
    duration: number;
    metallic: boolean;
  }>>([]);

  useEffect(() => {
    const colors = ['#667eea', '#FFD700', '#C0C0C0', '#CD7F32', '#f093fb'];
    const metallicColors = ['#FFD700', '#C0C0C0', '#CD7F32'];

    const newParticles = Array.from({ length: count }).map((_, i) => {
      const isMetallic = Math.random() > 0.6;
      const colorArray = isMetallic ? metallicColors : colors;
      
      return {
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 8 + 3,
        opacity: Math.random() * 0.6 + 0.2,
        color: colorArray[Math.floor(Math.random() * colorArray.length)],
        delay: Math.random() * 8,
        duration: 15 + Math.random() * 10,
        metallic: isMetallic,
      };
    });

    setParticles(newParticles);
  }, [count]);

  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className={`absolute rounded-full ${particle.metallic ? 'animate-shimmer' : ''}`}
          style={{
            width: particle.size,
            height: particle.size,
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            background: particle.metallic 
              ? `linear-gradient(135deg, ${particle.color}, rgba(255,255,255,0.4), ${particle.color})`
              : particle.color,
            opacity: particle.opacity,
            filter: particle.metallic 
              ? `drop-shadow(0 0 ${particle.size}px ${particle.color}60)`
              : 'none',
          }}
          animate={{
            x: [0, Math.random() * 80 - 40, Math.random() * 60 - 30, 0],
            y: [0, Math.random() * 80 - 40, Math.random() * 60 - 30, 0],
            scale: [1, 1.2, 0.8, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: particle.duration,
            ease: "easeInOut",
            repeat: Number.POSITIVE_INFINITY,
            delay: particle.delay,
          }}
        />
      ))}
    </div>
  );
};

export const FloatingParticles = LuxuryParticles; // Alias pour compatibilité

export const CodeBlock = ({ className = '' }) => {
  return (
    <motion.div
      className={`bg-slate-900 rounded-lg shadow-xl overflow-hidden ${className}`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="flex items-center px-4 py-2 bg-slate-800">
        <div className="flex space-x-2">
          <div className="w-3 h-3 bg-red-500 rounded-full" />
          <div className="w-3 h-3 bg-yellow-500 rounded-full" />
          <div className="w-3 h-3 bg-green-500 rounded-full" />
        </div>
        <div className="ml-4 text-gray-400 text-xs">code.js</div>
      </div>
      <div className="p-4 text-slate-300 font-mono text-sm">
        <div className="flex">
          <span className="text-slate-500 mr-4">1</span>
          <span className="text-blue-400">import</span>
          <span className="text-white mx-2">&#123;</span>
          <span className="text-yellow-300">createClient</span>
          <span className="text-white">&#125;</span>
          <span className="text-blue-400 ml-2">from</span>
          <span className="text-green-300 ml-2">'@kyriel/services'</span>
          <span className="text-white">;</span>
        </div>
        <div className="flex mt-2">
          <span className="text-slate-500 mr-4">2</span>
          <span></span>
        </div>
        <div className="flex mt-1">
          <span className="text-slate-500 mr-4">3</span>
          <span className="text-blue-400">const</span>
          <span className="text-yellow-300 ml-2">client</span>
          <span className="text-white ml-2">=</span>
          <span className="text-blue-400 ml-2">createClient</span>
          <span className="text-white">(&#123;</span>
        </div>
        <div className="flex mt-1">
          <span className="text-slate-500 mr-4">4</span>
          <span className="ml-8 text-purple-400">apiKey:</span>
          <span className="text-green-300 ml-2">'k7s_...'</span>
          <span className="text-white">,</span>
        </div>
        <div className="flex mt-1">
          <span className="text-slate-500 mr-4">5</span>
          <span className="text-white">&#125;);</span>
        </div>
      </div>
    </motion.div>
  );
};

export const AnimatedGradientBorder = ({ className = '', children }) => {
  return (
    <div className={`relative ${className}`}>
      <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-[#188ce4] via-[#4fb3ef] to-[#1581cf]
                      animate-border p-[2px]">
        <div className="absolute inset-0 bg-white rounded-lg dark:bg-gray-950" />
      </div>
      <div className="relative">{children}</div>
    </div>
  );
};

// Ajoute cette classe dans globals.css:
// @keyframes border-rotate {
//   from { background-position: 0% center; }
//   to { background-position: -200% center; }
// }
// .animate-border {
//   background-size: 200% 200%;
//   animation: border-rotate 6s linear infinite;
// }

export const WaterDropEffect = ({ className = '' }) => {
  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
      <svg width="0" height="0">
        <filter id="goo">
          <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
          <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7" result="goo" />
        </filter>
      </svg>

      <div className="absolute inset-0" style={{ filter: 'url(#goo)' }}>
        {Array.from({ length: 8 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute bg-[#188ce4] rounded-full opacity-30"
            style={{
              width: `${Math.random() * 60 + 20}px`,
              height: `${Math.random() * 60 + 20}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              scale: [1, 1.2, 1],
              x: [0, Math.random() * 60 - 30, 0],
              y: [0, Math.random() * 60 - 30, 0],
            }}
            transition={{
              duration: 10 + Math.random() * 5,
              ease: "easeInOut",
              repeat: Number.POSITIVE_INFINITY,
              delay: i * 0.5,
            }}
          />
        ))}
      </div>
    </div>
  );
};
