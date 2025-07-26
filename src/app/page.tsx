"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import Icon from "@/components/ui/Icon";
import RevealOnScroll from "@/components/ui/RevealOnScroll";
import PowerBIDashboard from "@/components/ui/PowerBIDashboard";
import WebExperienceDashboard from "@/components/ui/WebExperienceDashboard";
import ServicesProgressBar from "@/components/ui/ServicesProgressBar";
import {
  GlowingDot,
  LuxuryGlow,
  LuxuryParticles,
  PremiumCodeBlock,
  LuxuryWaterDropEffect,
  MetallicOrb
} from "@/components/ui/Decorations";
import {
  ParallaxElement,
  MagneticReveal,
  FloatingOrbs,
  MorphingGlow,
  LightWave,
  ScrollReveal
} from "@/components/ui/AdvancedAnimations";
import { PortfolioSection } from "@/components/ui/PortfolioSection";

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 }
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

// Composant pour encapsuler le logo animé et éviter les erreurs d'hydratation
const AnimatedLogo = () => {
  return (
    <div className="flex justify-center mb-6">
      <div className="text-4xl font-bold text-primary animate-float">
        Kyriel Services
      </div>
    </div>
  );
};

// Composant pour encapsuler les animations de dashboard avec système de chevauchement et écartement
const DashboardAnimations = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    // Démarrer immédiatement les animations
    setIsVisible(true);
    
    // Écouter le scroll pour l'effet d'écartement
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const progress = Math.min(scrollY / (documentHeight - windowHeight), 1);
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="dashboard-animations-container" aria-hidden="true">
      <motion.div
        className="animation-overlap-container"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ 
          opacity: isVisible ? 1 : 0, 
          scale: isVisible ? 1 : 0.8,
          rotateZ: scrollProgress * 360, // Rotation basée sur le scroll
          x: scrollProgress * 100, // Déplacement horizontal
          y: scrollProgress * -50 // Déplacement vertical
        }}
        transition={{ 
          duration: 0.8, 
          ease: "easeOut",
          staggerChildren: 0.2
        }}
      >
        {/* Animation 1 - Code Block */}
        <motion.div
          className="animation-item code-animation"
          initial={{ opacity: 0, x: -50, y: -30 }}
          animate={{ 
            opacity: 1, 
            x: scrollProgress * 150, // Écartement vers la droite
            y: scrollProgress * -80, // Écartement vers le haut
            rotateZ: scrollProgress * 180 // Rotation individuelle
          }}
          transition={{ 
            duration: 0.6, 
            ease: "easeOut",
            delay: 0.1
          }}
        >
        <PremiumCodeBlock className="z-10 relative animate-float" />
        </motion.div>

        {/* Animation 2 - PowerBI Dashboard */}
        <motion.div
          className="animation-item dashboard-animation"
          initial={{ opacity: 0, x: 50, y: 30 }}
          animate={{ 
            opacity: 1, 
            x: scrollProgress * -150, // Écartement vers la gauche
            y: scrollProgress * 80, // Écartement vers le bas
            rotateZ: scrollProgress * -180 // Rotation inverse
          }}
          transition={{ 
            duration: 0.6, 
            ease: "easeOut",
            delay: 0.3
          }}
        >
        <PowerBIDashboard className="z-10 relative animate-float" />
        </motion.div>

        {/* Animation 3 - Particules flottantes */}
        <motion.div
          className="animation-item particles-animation"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ 
            opacity: 0.6, 
            scale: 1 + scrollProgress * 0.5,
            x: scrollProgress * 200 * Math.sin(scrollProgress * Math.PI),
            y: scrollProgress * 100 * Math.cos(scrollProgress * Math.PI)
          }}
          transition={{ 
            duration: 0.8, 
            ease: "easeOut",
            delay: 0.5
          }}
        >
          <LuxuryParticles count={8} className="opacity-60" />
        </motion.div>
      </motion.div>
    </div>
  );
};

// Composant de carte de service accessible
const ServiceCard = ({
  iconName,
  title,
  description
}: {
  iconName: "automation" | "tools" | "web" | "communication";
  title: string;
  description: string;
}) => {
  return (
    <div className="service-card hover:translate-y-[-5px] h-full relative overflow-hidden group focus-within:ring-2 focus-within:ring-primary">
      <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-primary-700/5 opacity-0 group-hover:opacity-100 group-focus-within:opacity-100 transition-opacity duration-500" />
      <Icon name={iconName} className="card-icon" aria-hidden="true" />
      <h3 className="text-xl font-semibold mb-2 text-gray-700">{title}</h3>
      <p className="text-gray-500">{description}</p>
      <div className="mt-4">
        <Link
          href={`/services#${iconName}`}
          className="btn-metallic-bronze text-sm font-medium inline-flex items-center group/link focus:outline-none focus:underline px-4 py-2 rounded-lg"
          aria-label={`En savoir plus sur ${title}`}
        >
          <span className="relative z-10">En savoir plus</span>
          <svg className="w-4 h-4 ml-1 transform group-hover/link:translate-x-1 transition-transform duration-300" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          {/* Mini particules */}
          <div className="metallic-particles">
            <div className="metallic-particle gold" style={{ top: '20%', right: '15%', animationDelay: '1s', width: '2px', height: '2px' }}></div>
          </div>
        </Link>
      </div>
    </div>
  );
};

// Composant d'animation de base de données inspiré des images
const DatabaseAnimation = () => {
  return (
    <div className="database-animation-container w-full h-full flex items-center justify-center">
      <div className="database-scaling flex items-center gap-8">
        <motion.div
          className="database-cylinder small"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <div className="cylinder-body w-8 h-12 bg-gradient-to-b from-gray-300 to-gray-400 rounded-t-lg border-2 border-gray-500 relative">
            <div className="absolute inset-1 bg-gradient-to-b from-gray-200 to-gray-300 rounded-t-sm"></div>
          </div>
          <div className="cylinder-base w-10 h-2 bg-gradient-to-r from-blue-500 to-blue-600 rounded shadow-lg"></div>
        </motion.div>
        
        <motion.div
          className="database-cylinder medium"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
        >
          <div className="cylinder-body w-9 h-14 bg-gradient-to-b from-gray-300 to-gray-400 rounded-t-lg border-2 border-gray-500 relative">
            <div className="absolute inset-1 bg-gradient-to-b from-gray-200 to-gray-300 rounded-t-sm"></div>
          </div>
          <div className="cylinder-base w-11 h-2 bg-gradient-to-r from-blue-500 to-blue-600 rounded shadow-lg"></div>
        </motion.div>
        
        <motion.div
          className="database-cylinder large"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
        >
          <div className="cylinder-body w-10 h-16 bg-gradient-to-b from-gray-300 to-gray-400 rounded-t-lg border-2 border-gray-500 relative">
            <div className="absolute inset-1 bg-gradient-to-b from-gray-200 to-gray-300 rounded-t-sm"></div>
          </div>
          <div className="cylinder-base w-12 h-2 bg-gradient-to-r from-blue-500 to-blue-600 rounded shadow-lg"></div>
        </motion.div>
        
        {/* Flèches de progression */}
        <motion.div
          className="progress-arrow absolute w-16 h-1 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full shadow-lg"
          style={{ left: '35px', top: '50%', transform: 'translateY(-50%)' }}
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1.5, delay: 0.8 }}
        />
        <motion.div
          className="progress-arrow absolute w-16 h-1 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full shadow-lg"
          style={{ left: '85px', top: '50%', transform: 'translateY(-50%)' }}
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1.5, delay: 1.0 }}
        />
      </div>
    </div>
  );
};

export default function HomePage() {
  const [servicesScrollProgress, setServicesScrollProgress] = useState(0);
  const servicesSectionRef = useRef<HTMLDivElement>(null);
  const introRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    const handleServicesScroll = () => {
      if (servicesSectionRef.current) {
        const rect = servicesSectionRef.current.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        
        // Calculer le progrès de scroll dans la section Services
        if (rect.top <= windowHeight && rect.bottom >= 0) {
          const sectionHeight = rect.height;
          const scrollInSection = windowHeight - rect.top;
          const progress = Math.min(Math.max(scrollInSection / sectionHeight, 0), 1);
          setServicesScrollProgress(progress);
        } else {
          setServicesScrollProgress(0);
        }
      }
    };

    window.addEventListener('scroll', handleServicesScroll);
    return () => window.removeEventListener('scroll', handleServicesScroll);
  }, []);

  return (
    <div className="relative overflow-hidden">
      {/* Orbes flottantes améliorées */}
      <FloatingOrbs count={8} />
      
      {/* Éléments décoratifs professionnels pour l'ensemble de la page avec parallaxe */}
      <div className="fixed inset-0 pointer-events-none" aria-hidden="true">
        <ParallaxElement speed={0.3}>
          <MetallicOrb size={450} color="blue" x={88} y={12} />
        </ParallaxElement>
        <ParallaxElement speed={0.6}>
          <MetallicOrb size={350} color="lightblue" x={8} y={75} />
        </ParallaxElement>
        <ParallaxElement speed={0.4}>
          <MetallicOrb size={280} color="darkblue" x={78} y={88} />
        </ParallaxElement>
        
        {/* Morphing glow elements */}
        <MorphingGlow className="top-20 left-10" size={150} />
        <MorphingGlow className="bottom-40 right-20" size={200} />
      </div>

      <div className="gradient-blob blob-1" aria-hidden="true" />
      <div className="gradient-blob blob-2" aria-hidden="true" />
      <div className="gradient-blob blob-3" aria-hidden="true" />

      {/* Hero Section avec animations avancées */}
      <section className="section-lg bg-professional-pattern relative overflow-hidden min-h-[calc(60vh)]" aria-labelledby="hero-heading">
        <LightWave className="absolute inset-0" />
        <div className="container-custom">
          {/* Éléments décoratifs professionnels spécifiques à la section hero avec parallaxe */}
          <ParallaxElement speed={0.5} className="absolute">
            <LuxuryParticles count={18} className="opacity-50" aria-hidden="true" />
          </ParallaxElement>
          <ParallaxElement speed={0.7} className="absolute -top-32 -right-32">
            <LuxuryGlow width={85} height={85} intensity="high" aria-hidden="true" />
          </ParallaxElement>

          <motion.div
            className="max-w-6xl mx-auto text-center relative z-10"
            initial="hidden"
            animate="visible"
            variants={staggerChildren}
          >
            <MagneticReveal delay={0}>
              <AnimatedLogo />
            </MagneticReveal>
            
            <MagneticReveal delay={0.2}>
              <motion.h1
                id="hero-heading"
                className="text-5xl md:text-7xl font-bold mb-8 text-gray-700 leading-tight relative"
                variants={fadeInUp}
              >
                <div className="inline-block relative">
                  <ParallaxElement speed={0.2} className="absolute -top-12 -left-12">
                    <GlowingDot x={0} y={0} size={40} delay={0.5} color="#2765ec" />
                  </ParallaxElement>
                </div>
                Nous construisons des solutions <span className="gradient-heading-professional">informatiques</span> au service de votre <span className="gradient-heading-blue">excellence</span>
              </motion.h1>
            </MagneticReveal>
            
            <MagneticReveal delay={0.4}>
              <motion.p
                className="text-2xl text-gray-500 mb-12 max-w-4xl mx-auto leading-relaxed"
                variants={fadeInUp}
              >
                Kyriel Services révolutionne votre entreprise avec des solutions d'automatisation premium qui transforment vos opérations et créent une valeur exceptionnelle.
              </motion.p>
            </MagneticReveal>
            
            <MagneticReveal delay={0.6}>
              <motion.div
                className="flex flex-col sm:flex-row gap-module justify-center mb-12"
                variants={fadeInUp}
              >
                <Link
                  href="/services"
                  className="btn btn-metallic-gold hover-lift advanced-hover"
                >
                  <span className="relative z-10">Découvrir l'Excellence</span>
                  {/* Particules métalliques décoratives */}
                  <div className="metallic-particles">
                    <div className="metallic-particle gold" style={{ top: '10%', left: '15%', animationDelay: '0s' }}></div>
                    <div className="metallic-particle gold" style={{ top: '60%', right: '10%', animationDelay: '2s' }}></div>
                    <div className="metallic-particle gold" style={{ top: '30%', left: '70%', animationDelay: '4s' }}></div>
                  </div>
                </Link>
                <Link
                  href="/contact"
                  className="btn btn-metallic-silver group hover-glow advanced-hover"
                >
                  <span className="relative z-10">Commencer votre Transformation</span>
                  <svg className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform duration-300" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                    <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  {/* Particules métalliques décoratives */}
                  <div className="metallic-particles">
                    <div className="metallic-particle silver" style={{ top: '20%', left: '20%', animationDelay: '1s' }}></div>
                    <div className="metallic-particle silver" style={{ top: '70%', right: '15%', animationDelay: '3s' }}></div>
                  </div>
                </Link>
              </motion.div>
            </MagneticReveal>
          </motion.div>

          {/* Cercles décoratifs professionnels avec parallaxe */}
          <ParallaxElement speed={0.3} className="absolute -top-32 -right-32">
            <div className="w-80 h-80 rounded-full opacity-15" 
                 style={{ background: 'linear-gradient(135deg, #4f7df5, #2765ec)' }} 
                 aria-hidden="true" />
          </ParallaxElement>
          <ParallaxElement speed={0.4} className="absolute -bottom-40 -left-40">
            <div className="w-96 h-96 rounded-full opacity-12" 
                 style={{ background: 'linear-gradient(135deg, #93b5ff, #6794ff)' }} 
                 aria-hidden="true" />
          </ParallaxElement>
        </div>
      </section>

      {/* Transition fluide sans barre de séparation */}

      {/* Services Premium - Animation progressive basée sur le scroll avec micro-interactions */}
      <section
        ref={servicesSectionRef}
        className="section bg-professional-pattern relative overflow-hidden services-section" aria-labelledby="services-heading">
        <div className="container-custom">
          {/* Points lumineux décoratifs professionnels avec parallaxe */}
          <div aria-hidden="true">
            <ParallaxElement speed={0.2}>
              <GlowingDot x={8} y={25} size={12} color="#2765ec" />
            </ParallaxElement>
            <ParallaxElement speed={0.4}>
              <GlowingDot x={92} y={55} size={16} delay={1} color="#4f7df5" />
            </ParallaxElement>
            <ParallaxElement speed={0.3}>
              <GlowingDot x={12} y={85} size={14} delay={2} color="#1f50d8" />
            </ParallaxElement>
            <ParallaxElement speed={0.5}>
              <GlowingDot x={88} y={15} size={18} delay={0.5} color="#6794ff" />
            </ParallaxElement>
          </div>
          
          <ScrollReveal direction="zoom" delay={0.2}>
            <h2 id="services-heading" className="section-title gradient-heading-professional luxury-pulse">
              Services d'Excellence
            </h2>
          </ScrollReveal>
          
          <ScrollReveal direction="up" delay={0.4}>
            <p ref={introRef} className="section-subtitle text-xl">
              Transformez votre vision en réalité avec nos solutions premium qui redéfinissent les standards de l'excellence technologique.
            </p>
          </ScrollReveal>

          {/* Nouveau système d'animations progressives avec aération augmentée */}
          <div className="services-progressive-container">
            {/* Service 1 - Automatisation */}
            <ScrollReveal direction="left" delay={0.2}>
              <motion.div
                className="service-animation-pair flex flex-row"
                style={{ gap: '200px' }}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
              >
                <div className="service-card-container advanced-hover luxury-pulse">
                  <ServiceCard
                    iconName="automation"
                    title="Automatisation Intelligente"
                    description="Révolutionnez vos opérations avec des systèmes d'automatisation de pointe qui libèrent le potentiel de votre équipe."
                  />
                </div>
                <div className="animation-preview-container">
                  <LightWave className="absolute inset-0" />
                  <div className="code-editor-preview" style={{ width: '480px', height: '420px' }}>
                    <PremiumCodeBlock className="z-10 relative" />
                  </div>
                </div>
              </motion.div>
            </ScrollReveal>

            {/* Service 2 - Solutions Technologiques (inversé) */}
            <ScrollReveal direction="right" delay={0.4}>
              <motion.div
                className="service-animation-pair flex flex-row"
                style={{ gap: '200px' }}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
              >
                <div className="animation-preview-container">
                  <LightWave className="absolute inset-0" />
                  <div className="dashboard-preview" style={{ width: '480px', height: '420px' }}>
                    <PowerBIDashboard />
                  </div>
                </div>
                <div className="service-card-container advanced-hover luxury-pulse">
                  <ServiceCard
                    iconName="tools"
                    title="Solutions Technologiques Avancées"
                    description="Outils sur-mesure utilisant l'IA, Python, Power BI et technologies cloud pour une performance optimale."
                  />
                </div>
              </motion.div>
            </ScrollReveal>

            {/* Service 3 - Expériences Digitales */}
            <ScrollReveal direction="left" delay={0.6}>
              <motion.div
                className="service-animation-pair flex flex-row"
                style={{ gap: '200px' }}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.6 }}
              >
                <div className="service-card-container advanced-hover luxury-pulse">
                  <ServiceCard
                    iconName="web"
                    title="Expériences Digitales Premium"
                    description="Créations web exceptionnelles qui captivent vos audiences et renforcent votre présence numérique."
                  />
                </div>
                <div className="animation-preview-container">
                  <LightWave className="absolute inset-0" />
                  <div className="database-preview" style={{ width: '480px', height: '420px' }}>
                    <WebExperienceDashboard />
                  </div>
                </div>
              </motion.div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Transition fluide sans barre de séparation */}

      {/* Solutions Section - Déplacée après Services */}
      <section className="section relative glass-panel-premium" aria-labelledby="solutions-heading">
        <div className="container-custom">
          <LuxuryWaterDropEffect className="opacity-40" aria-hidden="true" />
          <RevealOnScroll>
            <div className="max-w-5xl mx-auto">
              <div className="grid-cols-1-2 items-center gap-16">
                <div className="space-y-8">
                  <h2 id="solutions-heading" className="text-4xl md:text-5xl font-bold mb-8 gradient-heading-professional">
                    Solutions d'Excellence sur Mesure
                  </h2>
                  <p className="text-xl text-gray-600 mb-10 leading-relaxed">
                    Notre expertise technique de pointe et notre approche personnalisée nous permettent de créer des solutions 
                    révolutionnaires parfaitement alignées sur vos ambitions. Nous transformons vos défis en avantages concurrentiels 
                    grâce à des technologies intelligentes qui redéfinissent l'efficacité opérationnelle.
                  </p>
                  <div className="flex flex-wrap gap-4 mb-8" aria-label="Domaines d'expertise premium">
                    <span className="px-6 py-3 glass-panel-premium text-primary rounded-full text-base font-medium hover-glow">Intelligence Artificielle</span>
                    <span className="px-6 py-3 glass-panel-premium text-primary rounded-full text-base font-medium hover-glow">Automatisation Avancée</span>
                    <span className="px-6 py-3 glass-panel-premium text-primary rounded-full text-base font-medium hover-glow">Solutions Cloud</span>
                    <span className="px-6 py-3 glass-panel-premium text-primary rounded-full text-base font-medium hover-glow">Développement Premium</span>
                    <span className="px-6 py-3 glass-panel-premium text-primary rounded-full text-base font-medium hover-glow">Analytics Prédictifs</span>
                  </div>
                </div>
                <div className="relative hidden md:block">
                  <div className="absolute -z-10 right-0 top-0 w-40 h-40 rounded-full mix-blend-multiply filter blur-xl opacity-60 animate-pulse-glow" 
                       style={{ background: 'linear-gradient(135deg, #4f7df5, #2765ec)' }} 
                       aria-hidden="true" />
                  {/* Animation supprimée - Section simplifiée */}
                </div>
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* Transition fluide sans barre de séparation */}

      {/* Call to Action Premium - Transition immersive refondue */}
      <section className="section excellence-section relative overflow-hidden" aria-labelledby="cta-heading">
        <div className="container-custom">
          <div className="max-w-5xl mx-auto text-center relative z-10">
            <RevealOnScroll>
              <h2 id="cta-heading" className="text-4xl md:text-5xl font-bold mb-6 excellence-title">
                Libérez Votre Excellence
              </h2>
            </RevealOnScroll>
            <RevealOnScroll delay={100}>
              <p className="text-2xl text-white mb-12 leading-relaxed max-w-4xl mx-auto excellence-subtitle">
                Rejoignez l'élite des entrepreneurs visionnaires qui transforment leurs ambitions en succès extraordinaires grâce à notre expertise technologique de pointe.
              </p>
            </RevealOnScroll>
            <RevealOnScroll delay={200}>
              <div className="inline-block">
                <Link
                  href="/contact"
                  className="btn btn-metallic-platinum btn-lg btn-beam group hover-lift excellence-button"
                  aria-label="Contactez-nous pour démarrer votre transformation"
                >
                  <span className="flex items-center text-lg font-bold relative z-10">
                    Démarrer votre Transformation
                    <svg className="w-6 h-6 ml-3 transform group-hover:translate-x-2 group-hover:scale-110 transition-all duration-300" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                      <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </span>
                  {/* Particules métalliques premium */}
                  <div className="metallic-particles">
                    <div className="metallic-particle platinum" style={{ top: '15%', left: '10%', animationDelay: '0s' }}></div>
                    <div className="metallic-particle platinum" style={{ top: '45%', right: '20%', animationDelay: '2.5s' }}></div>
                    <div className="metallic-particle platinum" style={{ top: '75%', left: '60%', animationDelay: '5s' }}></div>
                    <div className="metallic-particle platinum" style={{ top: '25%', left: '80%', animationDelay: '7.5s' }}></div>
                  </div>
                </Link>
              </div>
            </RevealOnScroll>
          </div>

          {/* Nouvelle transition immersive : dégradé animé + particules + effet de lumière */}
          <div className="absolute inset-0 pointer-events-none z-0">
            <div className="excellence-gradient-bg" />
            <LuxuryParticles count={18} className="opacity-40" />
            <LuxuryGlow className="top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" width={180} height={180} intensity="ultra" />
          </div>
        </div>
      </section>
    </div>
  );
}
