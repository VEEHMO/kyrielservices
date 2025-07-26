'use client';

import { motion } from 'framer-motion';

type SectionSeparatorProps = {
  color?: 'light' | 'dark' | 'premium' | 'gold' | 'silver';
  width?: string;
  className?: string;
};

export default function SectionSeparator({
  color = 'premium',
  width = '160px',
  className = '',
}: SectionSeparatorProps) {
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
}
