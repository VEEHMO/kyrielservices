"use client";
import Image from "next/image";
import Link from "next/link";
import Icon from "@/components/ui/Icon";
import { SERVICE_ICON_MAPPING } from "@/components/ui/IconCollection";
import { motion } from "framer-motion";
import RevealOnScroll from "@/components/ui/RevealOnScroll";
import SectionSeparator from "@/components/ui/SectionSeparator";
import {
  GlowingDot,
  Glow,
  FloatingParticles,
  Grid,
  CodeBlock,
  WaterDropEffect
} from "@/components/ui/Decorations";
import PowerBIDashboard from "@/components/ui/PowerBIDashboard";
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
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return (
      <div className="flex justify-center mb-6">
        <div className="w-20 h-20 bg-gray-100 rounded-full"></div>
      </div>
    );
  }

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
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return (
      <div className="dashboard-animations min-h-[300px] flex items-center justify-center bg-white/5 rounded-lg">
        <div className="text-gray-400">Chargement du dashboard...</div>
      </div>
    );
  }

  return (
    <div className="dashboard-animations" aria-hidden="true">
      <div className="animation-container">
        <CodeBlock className="z-10 relative animate-float" />
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
  // Utiliser la conversion d'icônes si c'est une ancienne icône, sinon utiliser le nom directement
  const lucideIconName = SERVICE_ICON_MAPPING[iconName as keyof typeof SERVICE_ICON_MAPPING] || iconName;

  return (
    <div className="service-card hover:translate-y-[-5px] h-full relative overflow-hidden group focus-within:ring-2 focus-within:ring-primary">
      <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-primary-700/5 opacity-0 group-hover:opacity-100 group-focus-within:opacity-100 transition-opacity duration-500" />
      <Icon
        name={lucideIconName}
        type="lucide"
        size={48}
        className="card-icon"
        aria-hidden="true"
        animated={true}
        animation="hover"
      />
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
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <div className="relative overflow-hidden">
      {/* Éléments décoratifs pour l'ensemble de la page */}
      <div className="fixed inset-0 pointer-events-none" aria-hidden="true">
        <Grid className="opacity-10" />
      </div>

      <div className="gradient-blob blob-1" aria-hidden="true" />
      <div className="gradient-blob blob-2" aria-hidden="true" />

      {/* Hero Section */}
      <section className="section-lg bg-subtle-pattern relative overflow-hidden min-h-[calc(50vh)]" aria-labelledby="hero-heading">
        <div className="container-custom">
          {/* Éléments décoratifs spécifiques à la section hero - uniquement côté client */}
          {isClient && (
            <FloatingParticles count={15} className="opacity-40" aria-hidden="true" />
          )}
          {isClient && (
            <Glow className="-top-20 -right-20" width={70} height={70} aria-hidden="true" />
          )}

          <div className="max-w-5xl mx-auto text-center">
            {isClient ? (
              <motion.div
                className="w-full"
                initial="hidden"
                animate="visible"
                variants={staggerChildren}
              >
                <AnimatedLogo />
                <motion.h1
                  id="hero-heading"
                  className="text-4xl md:text-6xl font-bold mb-6 text-gray-700 leading-tight relative"
                  variants={fadeInUp}
                >
                  <div className="inline-block relative">
                    <div className="absolute -top-10 -left-10" aria-hidden="true">
                      <GlowingDot x={0} y={0} size={30} delay={0.5} />
                    </div>
                  </div>
                  Nous construisons des solutions <span className="gradient-heading">informatiques</span> au service de votre <span className="gradient-heading">croissance</span>
                </motion.h1>
                <motion.p
                  className="text-xl text-gray-500 mb-10 max-w-3xl mx-auto"
                  variants={fadeInUp}
                >
                  Kyriel Services crée des solutions d'automatisation innovantes qui révolutionnent vos opérations et font gagner du temps à votre entreprise.
                </motion.p>
                <motion.div
                  className="flex flex-col sm:flex-row gap-module-sm justify-center mb-10"
                  variants={fadeInUp}
                >
                  <Link
                    href="/services"
                    className="btn btn-primary"
                  >
                    <span className="relative z-10">Découvrir nos services</span>
                  </Link>
                  <Link
                    href="/contact"
                    className="btn btn-outline group"
                  >
                    Contactez-nous
                    <svg className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform duration-300" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                      <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </Link>
                </motion.div>
              </motion.div>
            ) : (
              <>
                <AnimatedLogo />
                <h1
                  id="hero-heading"
                  className="text-4xl md:text-6xl font-bold mb-6 text-gray-700 leading-tight relative"
                >
                  Nous construisons des solutions <span className="gradient-heading">informatiques</span> au service de votre <span className="gradient-heading">croissance</span>
                </h1>
                <p
                  className="text-xl text-gray-500 mb-10 max-w-3xl mx-auto"
                >
                  Kyriel Services crée des solutions d'automatisation innovantes qui révolutionnent vos opérations et font gagner du temps à votre entreprise.
                </p>
                <div
                  className="flex flex-col sm:flex-row gap-module-sm justify-center mb-10"
                >
                  <Link
                    href="/services"
                    className="btn btn-primary"
                  >
                    <span className="relative z-10">Découvrir nos services</span>
                  </Link>
                  <Link
                    href="/contact"
                    className="btn btn-outline group"
                  >
                    Contactez-nous
                    <svg className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform duration-300" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                      <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </Link>
                </div>
              </>
            )}
          </div>

          {/* Cercles décoratifs */}
          <div className="absolute -top-24 -right-24 w-64 h-64 rounded-full bg-primary-50 opacity-30" aria-hidden="true" />
          <div className="absolute -bottom-32 -left-32 w-96 h-96 rounded-full bg-primary-50 opacity-20" aria-hidden="true" />
        </div>
      </section>

      <SectionSeparator color="light" width="180px" />

      {/* Code example section */}
      <section className="section relative" aria-labelledby="solutions-heading">
        <div className="container-custom">
          {isClient && <WaterDropEffect className="opacity-40" aria-hidden="true" />}
          <RevealOnScroll>
            <div className="max-w-4xl mx-auto">
              <div className="grid-cols-1-2 items-center">
                <div>
                  <h2 id="solutions-heading" className="text-3xl font-bold mb-6 gradient-heading">Des solutions sur mesure</h2>
                  <p className="text-gray-600 mb-8">
                    Notre expertise en développement et en automatisation nous permet de créer des solutions
                    parfaitement adaptées à vos besoins spécifiques. Nous travaillons en étroite collaboration
                    avec vous pour comprendre vos objectifs et développer des outils qui simplifient vos flux de travail.
                  </p>
                  <div className="flex flex-wrap gap-module-sm mb-module" aria-label="Domaines d'expertise">
                    <span className="px-3 py-1 bg-primary-50 text-primary rounded-full text-sm">Automatisation</span>
                    <span className="px-3 py-1 bg-primary-50 text-primary rounded-full text-sm">Développement</span>
                    <span className="px-3 py-1 bg-primary-50 text-primary rounded-full text-sm">API</span>
                    <span className="px-3 py-1 bg-primary-50 text-primary rounded-full text-sm">Web</span>
                    <span className="px-3 py-1 bg-primary-50 text-primary rounded-full text-sm">Data</span>
                  </div>
                </div>
                <div className="relative hidden md:block">
                  <div className="absolute -z-10 right-0 top-0 w-32 h-32 bg-primary-100 rounded-full mix-blend-multiply filter blur-xl opacity-60 animate-pulse-glow" aria-hidden="true" />
                  <DashboardAnimations />
                </div>
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      <SectionSeparator color="light" width="120px" />

      {/* Services Aperçu */}
      <section className="section bg-subtle-pattern relative" aria-labelledby="services-heading">
        <div className="container-custom">
          {/* Points lumineux décoratifs - uniquement côté client */}
          {isClient && (
            <div aria-hidden="true">
              <GlowingDot x={10} y={30} size={8} />
              <GlowingDot x={90} y={60} size={12} delay={1} />
              <GlowingDot x={15} y={80} size={10} delay={2} />
              <GlowingDot x={85} y={20} size={15} delay={0.5} />
            </div>
          )}

          <RevealOnScroll>
            <h2 id="services-heading" className="section-title">Nos services</h2>
          </RevealOnScroll>
          <RevealOnScroll>
            <p className="section-subtitle">Optimisez vos opérations, automatisez vos tâches répétitives, développez votre présence digitale.</p>
          </RevealOnScroll>

          <div className="grid-cols-1-4 mt-module-lg">
            <RevealOnScroll direction="up" delay={0}>
              <ServiceCard
                iconName="automation"
                title="Automatisation"
                description="Libérez du temps en automatisant vos tâches récurrentes."
              />
            </RevealOnScroll>

            <RevealOnScroll direction="up" delay={100}>
              <ServiceCard
                iconName="tools"
                title="Développement d'outils"
                description="Excel, Python, Power BI pour un suivi optimal de votre activité."
              />
            </RevealOnScroll>

            <RevealOnScroll direction="up" delay={200}>
              <ServiceCard
                iconName="web"
                title="Création de sites web"
                description="Sites vitrines ou solutions sur-mesure selon vos besoins."
              />
            </RevealOnScroll>

            <RevealOnScroll direction="up" delay={300}>
              <ServiceCard
                iconName="communication"
                title="Communication digitale"
                description="Renforcez votre visibilité et votre notoriété sur le web."
              />
            </RevealOnScroll>
          </div>
        </div>
      </section>

      <SectionSeparator color="dark" width="120px" />

      {/* Call to Action */}
      <section className="section-sm bg-primary-50 relative overflow-hidden" aria-labelledby="cta-heading">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center relative z-10">
            <RevealOnScroll>
              <h2 id="cta-heading" className="text-3xl font-bold mb-4 text-gray-700">Libérez votre potentiel</h2>
            </RevealOnScroll>
            <RevealOnScroll delay={100}>
              <p className="text-lg text-gray-500 mb-8">Nous accompagnons les entrepreneurs souhaitant gagner en efficacité grâce à l'informatique.</p>
            </RevealOnScroll>
            <RevealOnScroll delay={200}>
              <div className="inline-block">
                <Link
                  href="/contact"
                  className="btn btn-primary group"
                  aria-label="Contactez-nous pour discuter de vos projets"
                >
                  <span className="flex items-center">
                    Parlons de vos projets
                    <svg className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform duration-300" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                      <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </span>
                </Link>
              </div>
            </RevealOnScroll>
          </div>

          {/* Formes décoratives */}
          <div className="absolute top-0 left-0 w-full h-24 bg-primary-100 opacity-30 transform -skew-y-2" aria-hidden="true" />
          <div className="absolute bottom-0 right-0 w-full h-24 bg-primary-100 opacity-30 transform skew-y-2" aria-hidden="true" />
        </div>
      </section>
    </div>
  );
}
