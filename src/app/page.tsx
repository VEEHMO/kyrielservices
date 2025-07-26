"use client";
import Image from "next/image";
import Link from "next/link";
import Icon from "@/components/ui/Icon";
import { motion } from "framer-motion";
import RevealOnScroll from "@/components/ui/RevealOnScroll";
import SectionSeparator from "@/components/ui/SectionSeparator";
import {
  GlowingDot,
  LuxuryGlow,
  LuxuryParticles,
  PremiumGrid,
  PremiumCodeBlock,
  LuxuryWaterDropEffect,
  MetallicOrb
} from "@/components/ui/Decorations";
import PowerBIDashboard from "@/components/ui/PowerBIDashboard";

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
      <Image
        src="/images/Kyriel_Services_Gemini_-_Logo_seul_-_900px.png"
        alt="Kyriel Services Logo"
        width={80}
        height={80}
        className="animate-float"
      />
    </div>
  );
};

// Composant pour encapsuler les animations de dashboard et éviter les erreurs d'hydratation
const DashboardAnimations = () => {
  return (
    <div className="dashboard-animations" aria-hidden="true">
      <div className="animation-container">
        <PremiumCodeBlock className="z-10 relative animate-float" />
      </div>
      <div className="animation-container">
        <PowerBIDashboard className="z-10 relative animate-float" />
      </div>
    </div>
  );
};

// Composant de carte de service accessible
const ServiceCard = ({
  iconName,
  title,
  description
}: {
  iconName: string;
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
          className="text-primary hover:text-primary-700 text-sm font-medium inline-flex items-center group/link focus:outline-none focus:underline"
          aria-label={`En savoir plus sur ${title}`}
        >
          En savoir plus
          <svg className="w-4 h-4 ml-1 transform group-hover/link:translate-x-1 transition-transform duration-300" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </Link>
      </div>
    </div>
  );
};

export default function HomePage() {
  return (
    <div className="relative overflow-hidden">
      {/* Éléments décoratifs professionnels pour l'ensemble de la page */}
      <div className="fixed inset-0 pointer-events-none" aria-hidden="true">
        <PremiumGrid className="opacity-6" />
        <MetallicOrb size={450} color="blue" x={88} y={12} />
        <MetallicOrb size={350} color="lightblue" x={8} y={75} />
        <MetallicOrb size={280} color="darkblue" x={78} y={88} />
      </div>

      <div className="gradient-blob blob-1" aria-hidden="true" />
      <div className="gradient-blob blob-2" aria-hidden="true" />
      <div className="gradient-blob blob-3" aria-hidden="true" />

      {/* Hero Section */}
      <section className="section-lg bg-professional-pattern relative overflow-hidden min-h-[calc(60vh)]" aria-labelledby="hero-heading">
        <div className="container-custom">
          {/* Éléments décoratifs professionnels spécifiques à la section hero */}
          <LuxuryParticles count={18} className="opacity-50" aria-hidden="true" />
          <LuxuryGlow className="-top-32 -right-32" width={85} height={85} intensity="high" aria-hidden="true" />

          <motion.div
            className="max-w-6xl mx-auto text-center relative z-10"
            initial="hidden"
            animate="visible"
            variants={staggerChildren}
          >
            <AnimatedLogo />
            <motion.h1
              id="hero-heading"
              className="text-5xl md:text-7xl font-bold mb-8 text-gray-700 leading-tight relative"
              variants={fadeInUp}
            >
              <div className="inline-block relative">
                <div className="absolute -top-12 -left-12" aria-hidden="true">
                  <GlowingDot x={0} y={0} size={40} delay={0.5} color="#2765ec" />
                </div>
              </div>
              Nous construisons des solutions <span className="gradient-heading-professional">informatiques</span> au service de votre <span className="gradient-heading-blue">excellence</span>
            </motion.h1>
            <motion.p
              className="text-2xl text-gray-500 mb-12 max-w-4xl mx-auto leading-relaxed"
              variants={fadeInUp}
            >
              Kyriel Services révolutionne votre entreprise avec des solutions d'automatisation premium qui transforment vos opérations et créent une valeur exceptionnelle.
            </motion.p>
            <motion.div
              className="flex flex-col sm:flex-row gap-module justify-center mb-12"
              variants={fadeInUp}
            >
              <Link
                href="/services"
                className="btn btn-primary hover-lift"
              >
                <span className="relative z-10">Découvrir l'Excellence</span>
              </Link>
              <Link
                href="/contact"
                className="btn btn-outline group hover-glow"
              >
                Commencer votre Transformation
                <svg className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform duration-300" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                  <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </Link>
            </motion.div>
          </motion.div>

          {/* Cercles décoratifs professionnels */}
          <div className="absolute -top-32 -right-32 w-80 h-80 rounded-full opacity-15" 
               style={{ background: 'linear-gradient(135deg, #4f7df5, #2765ec)' }} 
               aria-hidden="true" />
          <div className="absolute -bottom-40 -left-40 w-96 h-96 rounded-full opacity-12" 
               style={{ background: 'linear-gradient(135deg, #93b5ff, #6794ff)' }} 
               aria-hidden="true" />
        </div>
      </section>

      <SectionSeparator color="premium" width="200px" />

      {/* Solutions Section */}
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
                  <DashboardAnimations />
                </div>
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      <SectionSeparator color="gold" width="160px" />

      {/* Services Premium */}
      <section className="section bg-luxury-pattern relative overflow-hidden" aria-labelledby="services-heading">
        <div className="container-custom">
          {/* Points lumineux décoratifs premium */}
          <div aria-hidden="true">
            <GlowingDot x={8} y={25} size={12} color="#FFD700" />
            <GlowingDot x={92} y={55} size={16} delay={1} color="#C0C0C0" />
            <GlowingDot x={12} y={85} size={14} delay={2} color="#CD7F32" />
            <GlowingDot x={88} y={15} size={18} delay={0.5} color="#667eea" />
          </div>

          <RevealOnScroll>
            <h2 id="services-heading" className="section-title gradient-heading-luxury">
              Services d'Excellence
            </h2>
          </RevealOnScroll>
          <RevealOnScroll>
            <p className="section-subtitle text-xl">
              Transformez votre vision en réalité avec nos solutions premium qui redéfinissent les standards de l'excellence technologique.
            </p>
          </RevealOnScroll>

          <div className="grid-cols-1-4 mt-16 gap-8">
            <RevealOnScroll direction="up" delay={0}>
              <ServiceCard
                iconName="automation"
                title="Automatisation Intelligente"
                description="Révolutionnez vos opérations avec des systèmes d'automatisation de pointe qui libèrent le potentiel de votre équipe."
              />
            </RevealOnScroll>

            <RevealOnScroll direction="up" delay={100}>
              <ServiceCard
                iconName="tools"
                title="Solutions Technologiques Avancées"
                description="Outils sur-mesure utilisant l'IA, Python, Power BI et technologies cloud pour une performance optimale."
              />
            </RevealOnScroll>

            <RevealOnScroll direction="up" delay={200}>
              <ServiceCard
                iconName="web"
                title="Expériences Digitales Premium"
                description="Créations web exceptionnelles qui captivent vos audiences et renforcent votre présence numérique."
              />
            </RevealOnScroll>

            <RevealOnScroll direction="up" delay={300}>
              <ServiceCard
                iconName="communication"
                title="Stratégie Digitale 360°"
                description="Communication omnicanale sophistiquée qui amplifie votre impact et votre influence sur le marché."
              />
            </RevealOnScroll>
          </div>
        </div>
      </section>

      <SectionSeparator color="silver" width="140px" />

      {/* Call to Action Premium */}
      <section className="section glass-panel-premium relative overflow-hidden" aria-labelledby="cta-heading">
        <div className="container-custom">
          <div className="max-w-5xl mx-auto text-center relative z-10">
            <RevealOnScroll>
              <h2 id="cta-heading" className="text-4xl md:text-5xl font-bold mb-6 gradient-heading-gold">
                Libérez Votre Excellence
              </h2>
            </RevealOnScroll>
            <RevealOnScroll delay={100}>
              <p className="text-2xl text-gray-600 mb-12 leading-relaxed max-w-4xl mx-auto">
                Rejoignez l'élite des entrepreneurs visionnaires qui transforment leurs ambitions en succès extraordinaires grâce à notre expertise technologique de pointe.
              </p>
            </RevealOnScroll>
            <RevealOnScroll delay={200}>
              <div className="inline-block">
                <Link
                  href="/contact"
                  className="btn btn-accent btn-lg group hover-lift hover-gold-glow"
                  aria-label="Contactez-nous pour démarrer votre transformation"
                >
                  <span className="flex items-center text-lg font-bold">
                    Démarrer votre Transformation
                    <svg className="w-6 h-6 ml-3 transform group-hover:translate-x-2 group-hover:scale-110 transition-all duration-300" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                      <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </span>
                </Link>
              </div>
            </RevealOnScroll>
          </div>

          {/* Effets décoratifs métalliques sophistiqués */}
          <div className="absolute top-0 left-0 w-full h-32 opacity-20 transform -skew-y-1" 
               style={{ background: 'linear-gradient(135deg, #FFD700, #FFA500)' }} 
               aria-hidden="true" />
          <div className="absolute bottom-0 right-0 w-full h-32 opacity-15 transform skew-y-1" 
               style={{ background: 'linear-gradient(135deg, #E8E8E8, #C0C0C0)' }} 
               aria-hidden="true" />
          
          {/* Particules dorées */}
          <LuxuryParticles count={15} className="opacity-40" />
        </div>
      </section>
    </div>
  );
}
