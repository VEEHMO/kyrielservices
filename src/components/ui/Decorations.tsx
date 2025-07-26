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

export const PremiumCodeBlock = ({ className = '' }) => {
  return (
    <motion.div
      className={`bg-slate-900 rounded-xl shadow-2xl overflow-hidden relative ${className}`}
      initial={{ opacity: 0, y: 20, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      style={{
        boxShadow: '0 25px 50px rgba(0, 0, 0, 0.25), 0 0 30px rgba(102, 126, 234, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.1)',
      }}
    >
      {/* Barre de titre avec effet métallique */}
      <div className="flex items-center px-6 py-3 bg-gradient-to-r from-slate-800 to-slate-700 border-b border-slate-600">
        <div className="flex space-x-3">
          <motion.div 
            className="w-3 h-3 bg-red-500 rounded-full"
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
          />
          <motion.div 
            className="w-3 h-3 bg-yellow-500 rounded-full"
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, delay: 0.3 }}
          />
          <motion.div 
            className="w-3 h-3 bg-green-500 rounded-full"
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, delay: 0.6 }}
          />
        </div>
        <div className="ml-4 text-gray-300 text-sm font-mono font-medium">kyriel-automation.js</div>
        <div className="ml-auto text-xs text-slate-400">●</div>
      </div>
      
      {/* Code avec syntax highlighting amélioré */}
      <div className="p-6 text-slate-300 font-mono text-sm leading-relaxed">
        <motion.div className="flex" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}>
          <span className="text-slate-500 mr-4 select-none">1</span>
          <span className="text-purple-400">import</span>
          <span className="text-white mx-2">{`{`}</span>
          <span className="text-yellow-300">AutomationEngine</span>
          <span className="text-white">{`}`}</span>
          <span className="text-purple-400 ml-2">from</span>
          <span className="text-green-300 ml-2">'@kyriel/automation'</span>
          <span className="text-white">;</span>
        </motion.div>
        
        <motion.div className="flex mt-3" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }}>
          <span className="text-slate-500 mr-4 select-none">2</span>
          <span></span>
        </motion.div>
        
        <motion.div className="flex mt-2" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6 }}>
          <span className="text-slate-500 mr-4 select-none">3</span>
          <span className="text-blue-400">const</span>
          <span className="text-yellow-300 ml-2">engine</span>
          <span className="text-white ml-2">=</span>
          <span className="text-blue-400 ml-2">new</span>
          <span className="text-cyan-300 ml-2">AutomationEngine</span>
          <span className="text-white">({`{`}</span>
        </motion.div>
        
        <motion.div className="flex mt-2" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.8 }}>
          <span className="text-slate-500 mr-4 select-none">4</span>
          <span className="ml-8 text-orange-400">apiKey:</span>
          <span className="text-green-300 ml-2">'kyriel_premium_2024'</span>
          <span className="text-white">,</span>
        </motion.div>
        
        <motion.div className="flex mt-2" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.0 }}>
          <span className="text-slate-500 mr-4 select-none">5</span>
          <span className="ml-8 text-orange-400">mode:</span>
          <span className="text-green-300 ml-2">'enterprise'</span>
        </motion.div>
        
        <motion.div className="flex mt-2" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.2 }}>
          <span className="text-slate-500 mr-4 select-none">6</span>
          <span className="text-white">{`});`}</span>
        </motion.div>
        
        <motion.div className="flex mt-3" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.4 }}>
          <span className="text-slate-500 mr-4 select-none">7</span>
          <span></span>
        </motion.div>
        
        <motion.div className="flex mt-2" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.6 }}>
          <span className="text-slate-500 mr-4 select-none">8</span>
          <span className="text-slate-400">// Automatisation révolutionnaire</span>
        </motion.div>
        
        <motion.div className="flex mt-2" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.8 }}>
          <span className="text-slate-500 mr-4 select-none">9</span>
          <span className="text-yellow-300">engine</span>
          <span className="text-white">.</span>
          <span className="text-blue-400">revolutionize</span>
          <span className="text-white">('</span>
          <span className="text-green-300">your-business</span>
          <span className="text-white">');</span>
        </motion.div>
      </div>
      
      {/* Effet de curseur clignotant */}
      <motion.div
        className="absolute bottom-6 right-6 w-2 h-5 bg-green-400"
        animate={{ opacity: [1, 0, 1] }}
        transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY }}
      />
      
      {/* Effet de particules de code */}
      <div className="absolute inset-0 pointer-events-none">
        {Array.from({ length: 5 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-blue-400 rounded-full"
            style={{
              left: `${20 + i * 15}%`,
              top: `${30 + i * 10}%`,
            }}
            animate={{
              opacity: [0, 1, 0],
              scale: [0, 1, 0],
            }}
            transition={{
              duration: 3,
              repeat: Number.POSITIVE_INFINITY,
              delay: i * 0.5,
            }}
          />
        ))}
      </div>
    </motion.div>
  );
};

export const CodeBlock = PremiumCodeBlock; // Alias pour compatibilité

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

export const LuxuryWaterDropEffect = ({ className = '' }) => {
  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
      <svg width="0" height="0">
        <defs>
          <filter id="luxuryGoo">
            <feGaussianBlur in="SourceGraphic" stdDeviation="12" result="blur" />
            <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 20 -8" result="goo" />
            <feDropShadow dx="0" dy="4" stdDeviation="3" floodColor="rgba(102, 126, 234, 0.3)" result="shadow" />
          </filter>
          <linearGradient id="goldGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FFD700" />
            <stop offset="50%" stopColor="#FFA500" />
            <stop offset="100%" stopColor="#FF8C00" />
          </linearGradient>
          <linearGradient id="silverGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#E8E8E8" />
            <stop offset="50%" stopColor="#C0C0C0" />
            <stop offset="100%" stopColor="#A8A8A8" />
          </linearGradient>
        </defs>
      </svg>

      <div className="absolute inset-0" style={{ filter: 'url(#luxuryGoo)' }}>
        {Array.from({ length: 12 }).map((_, i) => {
          const colors = ['#667eea', 'url(#goldGradient)', 'url(#silverGradient)', '#f093fb'];
          const size = Math.random() * 80 + 30;
          const isSpecial = i < 3;
          
          return (
            <motion.div
              key={i}
              className="absolute rounded-full"
              style={{
                width: `${size}px`,
                height: `${size * 0.6}px`,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                background: isSpecial ? colors[i + 1] : colors[0],
                opacity: isSpecial ? 0.4 : 0.25,
              }}
              animate={{
                scale: [1, 1.3, 0.8, 1],
                x: [0, Math.random() * 100 - 50, Math.random() * 80 - 40, 0],
                y: [0, Math.random() * 100 - 50, Math.random() * 80 - 40, 0],
                rotate: [0, 180, 360],
              }}
              transition={{
                duration: 12 + Math.random() * 8,
                ease: "easeInOut",
                repeat: Number.POSITIVE_INFINITY,
                delay: i * 0.8,
              }}
            />
          );
        })}
      </div>
    </div>
  );
};

export const WaterDropEffect = LuxuryWaterDropEffect; // Alias pour compatibilité

// Nouveaux composants luxueux
export const MetallicOrb = ({ 
  className = '', 
  size = 200,
  color = 'blue',
  x = 50,
  y = 50 
}: {
  className?: string;
  size?: number;
  color?: 'blue' | 'lightblue' | 'darkblue';
  x?: number;
  y?: number;
}) => {
  const gradients: Record<string, string> = {
    blue: 'linear-gradient(135deg, #4f7df5 0%, #2765ec 50%, #1f50d8 100%)',
    lightblue: 'linear-gradient(135deg, #93b5ff 0%, #6794ff 50%, #4f7df5 100%)',
    darkblue: 'linear-gradient(135deg, #1a40c4 0%, #1530a3 100%)',
  };

  return (
    <motion.div
      className={`absolute rounded-full ${className}`}
      style={{
        width: size,
        height: size,
        left: `${x}%`,
        top: `${y}%`,
        background: gradients[color] || gradients.blue,
        transform: 'translate(-50%, -50%)',
        filter: 'blur(60px)',
        opacity: 0.08,
      }}
      animate={{
        scale: [1, 1.15, 1],
        opacity: [0.06, 0.12, 0.06],
        rotate: [0, 180, 360],
      }}
      transition={{
        duration: 25,
        ease: "easeInOut",
        repeat: Number.POSITIVE_INFINITY,
      }}
    />
  );
};

export const PremiumSectionSeparator = ({ 
  color = "premium", 
  width = "160px",
  className = ""
}: {
  color?: 'premium' | 'gold' | 'silver' | 'light' | 'dark';
  width?: string;
  className?: string;
}) => {
  const gradients: Record<string, string> = {
    premium: 'linear-gradient(90deg, #2765ec 0%, #1f50d8 100%)',
    gold: 'linear-gradient(90deg, #FFD700 0%, #FFA500 100%)',
    silver: 'linear-gradient(90deg, #E8E8E8 0%, #C0C0C0 100%)',
    light: 'linear-gradient(90deg, #4f7df5 0%, #2765ec 100%)',
    dark: 'linear-gradient(90deg, #1a40c4 0%, #1530a3 100%)',
  };

  return (
    <div className={`flex justify-center my-16 ${className}`}>
      <motion.div
        style={{ maxWidth: width }}
        className="relative"
        initial={{ width: 0, opacity: 0 }}
        whileInView={{ width: '100%', opacity: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        viewport={{ once: true, margin: "-100px" }}
      >
        <div
          className="h-1 rounded-full relative overflow-hidden"
          style={{ background: gradients[color] }}
        >
          {/* Effet de shimmer */}
          <motion.div
            className="absolute inset-0 opacity-60"
            style={{
              background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.8), transparent)',
            }}
            animate={{ x: ['-100%', '100%'] }}
            transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, repeatDelay: 3 }}
          />
        </div>
        
        {/* Points décoratifs */}
        <motion.div
          className="absolute left-0 top-1/2 w-3 h-3 rounded-full -translate-y-1/2 -translate-x-1/2"
          style={{ background: gradients[color] }}
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          transition={{ delay: 0.8, duration: 0.4 }}
        />
        <motion.div
          className="absolute right-0 top-1/2 w-3 h-3 rounded-full -translate-y-1/2 translate-x-1/2"
          style={{ background: gradients[color] }}
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          transition={{ delay: 0.8, duration: 0.4 }}
        />
      </motion.div>
    </div>
  );
};
