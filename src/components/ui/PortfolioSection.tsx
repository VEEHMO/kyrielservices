"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useRef } from "react";
import { ParallaxElement, MagneticReveal, ScrollReveal, LightWave } from "./AdvancedAnimations";
import { GlowingDot, LuxuryGlow } from "./Decorations";

// Composant de projet portfolio interactif
const PortfolioProject = ({ 
  project, 
  index, 
  isActive, 
  onHover, 
  onLeave 
}: {
  project: {
    id: string;
    title: string;
    category: string;
    description: string;
    technologies: string[];
    preview: string;
    color: string;
    image: string;
  };
  index: number;
  isActive: boolean;
  onHover: () => void;
  onLeave: () => void;
}) => {
  return (
    <motion.div
      className="portfolio-project group cursor-pointer relative overflow-hidden"
      onHoverStart={onHover}
      onHoverEnd={onLeave}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ 
        duration: 0.8, 
        delay: index * 0.1,
        ease: [0.4, 0, 0.2, 1]
      }}
    >
      <div className="portfolio-card glass-panel-premium relative p-8 h-full">
        {/* Effet de vague de lumière au hover */}
        <LightWave className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
        
        {/* Badge catégorie avec effet métallique */}
        <div className="portfolio-category absolute top-4 right-4">
          <span className="px-3 py-1 text-xs font-bold uppercase tracking-wider bg-gradient-to-r from-gold to-gold-light text-black rounded-full">
            {project.category}
          </span>
        </div>

        {/* Preview image avec effet de parallaxe */}
        <motion.div
          className="portfolio-preview relative mb-6 overflow-hidden rounded-xl"
          style={{ height: '200px' }}
          animate={{
            scale: isActive ? 1.05 : 1,
            rotateX: isActive ? 5 : 0,
          }}
          transition={{ duration: 0.4, ease: "easeOut" }}
        >
          <div 
            className="absolute inset-0 bg-gradient-to-br opacity-90 transition-opacity duration-500 group-hover:opacity-75"
            style={{ 
              background: `linear-gradient(135deg, ${project.color}15, ${project.color}05)` 
            }}
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <motion.div
              className="preview-icon text-6xl font-bold"
              style={{ color: project.color }}
              animate={{
                scale: isActive ? 1.2 : 1,
                rotateY: isActive ? 10 : 0,
              }}
              transition={{ duration: 0.3 }}
            >
              {project.preview}
            </motion.div>
          </div>
          
          {/* Particules flottantes sur le preview */}
          <AnimatePresence>
            {isActive && (
              <motion.div
                className="absolute inset-0 pointer-events-none"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                {[...Array(3)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-2 h-2 rounded-full"
                    style={{ 
                      background: project.color,
                      left: `${20 + i * 25}%`,
                      top: `${30 + i * 15}%`
                    }}
                    animate={{
                      y: [-10, -20, -10],
                      opacity: [0.3, 0.8, 0.3],
                      scale: [1, 1.2, 1],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: i * 0.3
                    }}
                  />
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

        {/* Contenu du projet */}
        <div className="portfolio-content">
          <motion.h3 
            className="text-xl font-bold mb-3 text-gray-700 group-hover:text-primary transition-colors duration-300"
            animate={{
              y: isActive ? -5 : 0,
            }}
            transition={{ duration: 0.3 }}
          >
            {project.title}
          </motion.h3>
          
          <motion.p 
            className="text-gray-600 mb-4 leading-relaxed"
            animate={{
              y: isActive ? -3 : 0,
            }}
            transition={{ duration: 0.3, delay: 0.1 }}
          >
            {project.description}
          </motion.p>

          {/* Technologies utilisées */}
          <motion.div 
            className="portfolio-technologies flex flex-wrap gap-2 mb-4"
            animate={{
              y: isActive ? -2 : 0,
            }}
            transition={{ duration: 0.3, delay: 0.2 }}
          >
            {project.technologies.map((tech, i) => (
              <span
                key={i}
                className="px-2 py-1 text-xs font-medium bg-primary/10 text-primary rounded-md hover:bg-primary/20 transition-colors duration-200"
              >
                {tech}
              </span>
            ))}
          </motion.div>

          {/* Bouton d'action avec effet métallique */}
          <motion.div
            animate={{
              y: isActive ? -2 : 0,
            }}
            transition={{ duration: 0.3, delay: 0.3 }}
          >
            <button className="btn-metallic-bronze text-sm font-medium inline-flex items-center group/btn focus:outline-none px-4 py-2 rounded-lg">
              <span className="relative z-10">Voir le projet</span>
              <svg className="w-4 h-4 ml-2 transform group-hover/btn:translate-x-1 transition-transform duration-300" viewBox="0 0 24 24" fill="none">
                <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </motion.div>
        </div>

        {/* Effet de glow au hover */}
        <motion.div
          className="absolute inset-0 rounded-xl pointer-events-none"
          animate={{
            boxShadow: isActive 
              ? `0 20px 40px ${project.color}20, 0 0 20px ${project.color}10`
              : `0 8px 24px rgba(0, 0, 0, 0.1)`,
          }}
          transition={{ duration: 0.4 }}
        />
      </div>
    </motion.div>
  );
};

// Composant de navigation de portfolio avec filtres
const PortfolioFilters = ({ 
  categories, 
  activeCategory, 
  onCategoryChange 
}: {
  categories: string[];
  activeCategory: string;
  onCategoryChange: (category: string) => void;
}) => {
  return (
    <div className="portfolio-filters flex flex-wrap justify-center gap-4 mb-16">
      {categories.map((category, index) => (
        <motion.button
          key={category}
          className={`filter-button px-6 py-3 rounded-full font-medium transition-all duration-300 ${
            activeCategory === category 
              ? 'btn-metallic-gold' 
              : 'glass-panel-premium text-gray-600 hover:text-primary'
          }`}
          onClick={() => onCategoryChange(category)}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          whileHover={{ 
            scale: 1.05,
            y: -2,
          }}
          whileTap={{ scale: 0.95 }}
        >
          <span className="relative z-10">{category}</span>
        </motion.button>
      ))}
    </div>
  );
};

// Composant principal de la section Portfolio
export const PortfolioSection = () => {
  const [activeProject, setActiveProject] = useState<string | null>(null);
  const [activeCategory, setActiveCategory] = useState<string>("Tous");
  
  // Données des projets portfolio
  const projects = [
    {
      id: "automation-erp",
      title: "Système ERP Intelligent",
      category: "Automatisation",
      description: "Plateforme d'automatisation complète qui optimise les processus métier et réduit les tâches manuelles de 85%.",
      technologies: ["Python", "Django", "React", "PostgreSQL", "Redis"],
      preview: "⚙️",
      color: "#2765ec",
      image: "/portfolio/erp-system.jpg"
    },
    {
      id: "dashboard-analytics",
      title: "Dashboard Analytics Prédictif",
      category: "Business Intelligence",
      description: "Tableau de bord avancé avec intelligence artificielle pour la prédiction de tendances et l'analyse de performance.",
      technologies: ["Power BI", "Python", "Azure ML", "SQL Server"],
      preview: "📊",
      color: "#4f7df5",
      image: "/portfolio/analytics-dashboard.jpg"
    },
    {
      id: "ecommerce-premium",
      title: "E-commerce Premium",
      category: "Développement Web",
      description: "Plateforme e-commerce haut de gamme avec expérience utilisateur exceptionnelle et conversion optimisée.",
      technologies: ["Next.js", "TypeScript", "Stripe", "MongoDB"],
      preview: "🛍️",
      color: "#1f50d8",
      image: "/portfolio/ecommerce-platform.jpg"
    },
    {
      id: "mobile-banking",
      title: "Application Bancaire Mobile",
      category: "Développement Mobile",
      description: "Application mobile sécurisée avec fonctionnalités bancaires avancées et interface intuitive.",
      technologies: ["React Native", "Node.js", "MongoDB", "Blockchain"],
      preview: "🏦",
      color: "#6794ff",
      image: "/portfolio/banking-app.jpg"
    },
    {
      id: "ai-chatbot",
      title: "Assistant IA Conversationnel",
      category: "Intelligence Artificielle",
      description: "Chatbot intelligent avec traitement du langage naturel pour l'assistance client automatisée.",
      technologies: ["OpenAI", "Python", "FastAPI", "WebSocket"],
      preview: "🤖",
      color: "#93b5ff",
      image: "/portfolio/ai-chatbot.jpg"
    },
    {
      id: "supply-chain",
      title: "Gestion Chaîne Logistique",
      category: "Automatisation",
      description: "Solution complète pour l'optimisation et le suivi en temps réel de la chaîne d'approvisionnement.",
      technologies: ["React", "Node.js", "IoT", "AWS Lambda"],
      preview: "📦",
      color: "#2765ec",
      image: "/portfolio/supply-chain.jpg"
    }
  ];

  const categories = ["Tous", "Automatisation", "Business Intelligence", "Développement Web", "Développement Mobile", "Intelligence Artificielle"];

  const filteredProjects = activeCategory === "Tous" 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  return (
    <section className="section portfolio-section relative overflow-hidden bg-professional-pattern" aria-labelledby="portfolio-heading">
      <div className="container-custom">
        {/* Éléments décoratifs avec parallaxe */}
        <div aria-hidden="true">
          <ParallaxElement speed={0.3}>
            <GlowingDot x={5} y={20} size={14} color="#2765ec" />
          </ParallaxElement>
          <ParallaxElement speed={0.5}>
            <GlowingDot x={95} y={80} size={18} delay={1.5} color="#4f7df5" />
          </ParallaxElement>
          <ParallaxElement speed={0.4} className="absolute top-20 right-20">
            <LuxuryGlow width={60} height={60} intensity="medium" />
          </ParallaxElement>
        </div>

        {/* En-tête de section */}
        <div className="text-center mb-20">
          <ScrollReveal direction="zoom" delay={0.2}>
            <h2 id="portfolio-heading" className="section-title gradient-heading-professional luxury-pulse">
              Portfolio d'Excellence
            </h2>
          </ScrollReveal>
          
          <ScrollReveal direction="up" delay={0.4}>
            <p className="section-subtitle text-xl max-w-4xl mx-auto">
              Découvrez nos réalisations premium qui témoignent de notre expertise technique et de notre capacité à transformer les visions ambitieuses en succès concrets.
            </p>
          </ScrollReveal>
        </div>

        {/* Filtres de portfolio */}
        <ScrollReveal direction="up" delay={0.6}>
          <PortfolioFilters 
            categories={categories}
            activeCategory={activeCategory}
            onCategoryChange={setActiveCategory}
          />
        </ScrollReveal>

        {/* Grille de projets */}
        <motion.div 
          className="portfolio-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          layout
        >
          <AnimatePresence mode="wait">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <PortfolioProject
                  project={project}
                  index={index}
                  isActive={activeProject === project.id}
                  onHover={() => setActiveProject(project.id)}
                  onLeave={() => setActiveProject(null)}
                />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Call to action pour voir plus de projets */}
        <ScrollReveal direction="up" delay={0.8}>
          <div className="text-center mt-16">
            <motion.div
              className="inline-block"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <button className="btn btn-metallic-platinum btn-lg group hover-lift">
                <span className="flex items-center text-lg font-bold relative z-10">
                  Voir tous nos projets
                  <svg className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform duration-300" viewBox="0 0 24 24" fill="none">
                    <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </span>
                <div className="metallic-particles">
                  <div className="metallic-particle platinum" style={{ top: '20%', left: '15%', animationDelay: '0s' }}></div>
                  <div className="metallic-particle platinum" style={{ top: '60%', right: '10%', animationDelay: '2s' }}></div>
                </div>
              </button>
            </motion.div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};