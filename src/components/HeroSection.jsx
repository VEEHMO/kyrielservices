"use client";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 }
  }
};

const slideUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8 }
  }
};

const staggerChildren = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const HeroSection = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <section className="min-h-screen bg-[#121212] text-white flex items-center font-inter">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 px-8">
        
        {/* Colonne de Gauche - 45% */}
        <motion.div 
          className="flex flex-col justify-center md:pr-8"
          style={{ flex: "0 0 45%" }}
          initial="hidden"
          animate={isLoaded ? "visible" : "hidden"}
          variants={staggerChildren}
        >
          {/* Titre Principal */}
          <motion.h1 
            className="font-extrabold text-5xl md:text-6xl tracking-tight leading-none mb-6"
            style={{ lineHeight: 1.1 }}
            variants={fadeInUp}
          >
            Nous construisons des solutions au service de votre excellence
          </motion.h1>

          {/* Paragraphe de description */}
          <motion.p 
            className="font-light text-lg text-gray-300 mt-4 mb-8 max-w-xl leading-relaxed"
            variants={fadeInUp}
          >
            Kyriel Services révolutionne votre entreprise avec des solutions d'automatisation premium qui transforment vos opérations et créent une valeur exceptionnelle.
          </motion.p>

          {/* Conteneur des Boutons */}
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 mt-8"
            variants={fadeInUp}
          >
            {/* Bouton Primaire */}
            <button className="bg-blue-600 hover:bg-blue-500 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-300 transform hover:scale-105">
              Commencer votre Transformation
            </button>

            {/* Bouton Secondaire */}
            <button className="bg-transparent border border-white/50 hover:bg-white hover:text-black text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-300 transform hover:scale-105">
              Découvrir nos réalisations
            </button>
          </motion.div>
        </motion.div>
        
        {/* Colonne de Droite - 55% */}
        <motion.div 
          className="flex items-center justify-center"
          style={{ flex: "0 0 55%" }}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={isLoaded ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          {/* Placeholder pour le visuel 3D */}
          <div className="w-full h-96 border-2 border-dashed border-gray-700 rounded-lg flex items-center justify-center">
            <div className="text-center">
              <div className="text-6xl mb-4">🎯</div>
              <p className="text-gray-400 text-lg font-medium">3D Visual Placeholder</p>
              <p className="text-gray-500 text-sm mt-2">Espace réservé pour animation 3D</p>
            </div>
          </div>
        </motion.div>
        
      </div>
    </section>
  );
};

export default HeroSection;