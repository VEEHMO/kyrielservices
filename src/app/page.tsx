"use client";
import Image from "next/image";
import Link from "next/link";
import Icon from "@/components/ui/Icon";
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
    <div className="dashboard-animations">
      <div className="animation-container">
        <CodeBlock className="z-10 relative animate-float" />
      </div>
      <div className="animation-container">
        <PowerBIDashboard className="z-10 relative animate-float" />
      </div>
    </div>
  );
};

export default function HomePage() {
  return (
    <div className="relative overflow-hidden">
      {/* Éléments décoratifs pour l'ensemble de la page */}
      <div className="fixed inset-0 pointer-events-none">
        <Grid className="opacity-10" />
      </div>

      <div className="gradient-blob blob-1" />
      <div className="gradient-blob blob-2" />

      {/* Hero Section */}
      <section className="py-20 px-4 bg-subtle-pattern relative overflow-hidden">
        {/* Éléments décoratifs spécifiques à la section hero */}
        <FloatingParticles count={15} className="opacity-40" />
        <Glow className="-top-20 -right-20" width={70} height={70} />

        <motion.div
          className="max-w-5xl mx-auto text-center"
          initial="hidden"
          animate="visible"
          variants={staggerChildren}
        >
          <AnimatedLogo />
          <motion.h1
            className="text-4xl md:text-6xl font-bold mb-6 text-neutral-900 leading-tight relative"
            variants={fadeInUp}
          >
            <div className="inline-block relative">
              <div className="absolute -top-10 -left-10">
                <GlowingDot x={0} y={0} size={30} delay={0.5} />
              </div>
            </div>
            Nous construisons des solutions <span className="gradient-heading">informatiques</span> au service de votre <span className="gradient-heading">croissance</span>
          </motion.h1>
          <motion.p
            className="text-xl text-neutral-600 mb-10 max-w-3xl mx-auto"
            variants={fadeInUp}
          >
            Kyriel Services crée des solutions d'automatisation innovantes qui révolutionnent vos opérations et font gagner du temps à votre entreprise.
          </motion.p>
          <motion.div
            className="flex flex-col sm:flex-row gap-5 justify-center mb-10"
            variants={fadeInUp}
          >
            <Link href="/services" className="prismia-button group relative overflow-hidden">
              <span className="relative z-10">Découvrir nos services</span>
              <span className="absolute inset-0 bg-gradient-to-r from-[#1581cf] to-[#188ce4] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </Link>
            <Link href="/contact" className="rounded-full px-6 py-3 border-2 border-[#188ce4] text-[#188ce4] bg-white hover:bg-blue-50 font-semibold transition-all duration-300 flex items-center justify-center group">
              Contactez-nous
              <svg className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform duration-300" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </Link>
          </motion.div>
        </motion.div>

        {/* Cercles décoratifs */}
        <div className="absolute -top-24 -right-24 w-64 h-64 rounded-full bg-blue-50 opacity-30" />
        <div className="absolute -bottom-32 -left-32 w-96 h-96 rounded-full bg-blue-50 opacity-20" />
      </section>

      <SectionSeparator color="light" width="180px" />

      {/* Code example section */}
      <section className="py-16 px-4 relative">
        <WaterDropEffect className="opacity-40" />
        <RevealOnScroll>
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-5 gap-8 items-center">
              <div className="md:col-span-3">
                <h2 className="text-3xl font-bold mb-6 gradient-heading">Des solutions sur mesure</h2>
                <p className="text-neutral-700 mb-8">
                  Notre expertise en développement et en automatisation nous permet de créer des solutions
                  parfaitement adaptées à vos besoins spécifiques. Nous travaillons en étroite collaboration
                  avec vous pour comprendre vos objectifs et développer des outils qui simplifient vos flux de travail.
                </p>
                <div className="flex flex-wrap gap-4 mb-6">
                  <span className="px-3 py-1 bg-blue-50 text-[#188ce4] rounded-full text-sm">Automatisation</span>
                  <span className="px-3 py-1 bg-blue-50 text-[#188ce4] rounded-full text-sm">Développement</span>
                  <span className="px-3 py-1 bg-blue-50 text-[#188ce4] rounded-full text-sm">API</span>
                  <span className="px-3 py-1 bg-blue-50 text-[#188ce4] rounded-full text-sm">Web</span>
                  <span className="px-3 py-1 bg-blue-50 text-[#188ce4] rounded-full text-sm">Data</span>
                </div>
              </div>
              <div className="md:col-span-2 relative">
                <div className="absolute -z-10 right-0 top-0 w-32 h-32 bg-blue-100 rounded-full mix-blend-multiply filter blur-xl opacity-60 animate-pulse-glow" />
                <DashboardAnimations />
              </div>
            </div>
          </div>
        </RevealOnScroll>
      </section>

      <SectionSeparator color="light" width="120px" />

      {/* Services Aperçu */}
      <section className="py-20 px-4 bg-subtle-pattern relative">
        {/* Points lumineux décoratifs */}
        <GlowingDot x={10} y={30} size={8} />
        <GlowingDot x={90} y={60} size={12} delay={1} />
        <GlowingDot x={15} y={80} size={10} delay={2} />
        <GlowingDot x={85} y={20} size={15} delay={0.5} />

        <div className="max-w-6xl mx-auto">
          <RevealOnScroll>
            <h2 className="section-title">Nos services</h2>
          </RevealOnScroll>
          <RevealOnScroll>
            <p className="section-subtitle">Optimisez vos opérations, automatisez vos tâches répétitives, développez votre présence digitale.</p>
          </RevealOnScroll>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
            <RevealOnScroll direction="up" delay={0}>
              <div className="service-card hover:translate-y-[-5px] h-full relative overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-r from-[#188ce4]/5 to-[#1581cf]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <Icon name="automation" className="mb-4" />
                <h3 className="text-xl font-semibold mb-2 text-neutral-900">Automatisation</h3>
                <p className="text-neutral-600">Libérez du temps en automatisant vos tâches récurrentes.</p>
              </div>
            </RevealOnScroll>

            <RevealOnScroll direction="up" delay={100}>
              <div className="service-card hover:translate-y-[-5px] h-full relative overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-r from-[#188ce4]/5 to-[#1581cf]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <Icon name="tools" className="mb-4" />
                <h3 className="text-xl font-semibold mb-2 text-neutral-900">Développement d'outils</h3>
                <p className="text-neutral-600">Excel, Python, Power BI pour un suivi optimal de votre activité.</p>
              </div>
            </RevealOnScroll>

            <RevealOnScroll direction="up" delay={200}>
              <div className="service-card hover:translate-y-[-5px] h-full relative overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-r from-[#188ce4]/5 to-[#1581cf]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <Icon name="web" className="mb-4" />
                <h3 className="text-xl font-semibold mb-2 text-neutral-900">Création de sites web</h3>
                <p className="text-neutral-600">Sites vitrines ou solutions sur-mesure selon vos besoins.</p>
              </div>
            </RevealOnScroll>

            <RevealOnScroll direction="up" delay={300}>
              <div className="service-card hover:translate-y-[-5px] h-full relative overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-r from-[#188ce4]/5 to-[#1581cf]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <Icon name="communication" className="mb-4" />
                <h3 className="text-xl font-semibold mb-2 text-neutral-900">Communication digitale</h3>
                <p className="text-neutral-600">Renforcez votre visibilité et votre notoriété sur le web.</p>
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </section>

      <SectionSeparator color="dark" width="120px" />

      {/* Call to Action */}
      <section className="py-16 px-4 bg-blue-50 relative overflow-hidden">
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <RevealOnScroll>
            <h2 className="text-3xl font-bold mb-4 text-neutral-900">Libérez votre potentiel</h2>
          </RevealOnScroll>
          <RevealOnScroll delay={100}>
            <p className="text-lg text-neutral-700 mb-8">Nous accompagnons les entrepreneurs souhaitant gagner en efficacité grâce à l'informatique.</p>
          </RevealOnScroll>
          <RevealOnScroll delay={200}>
            <div className="inline-block relative group">
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[#188ce4] via-[#4fb3ef] to-[#1581cf] animate-border opacity-70 blur-sm group-hover:opacity-100 transition-opacity duration-500" />
              <Link
                href="/contact"
                className="prismia-button flex items-center group relative overflow-hidden"
              >
                <span className="relative z-10 flex items-center">
                  Parlons de vos projets
                  <svg className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform duration-300" viewBox="0 0 24 24" fill="none">
                    <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </span>
                <span className="absolute inset-0 bg-gradient-to-r from-[#1581cf] to-[#188ce4] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </Link>
            </div>
          </RevealOnScroll>
        </div>

        {/* Formes décoratives */}
        <div className="absolute top-0 left-0 w-full h-24 bg-blue-100 opacity-30 transform -skew-y-2" />
        <div className="absolute bottom-0 right-0 w-full h-24 bg-blue-100 opacity-30 transform skew-y-2" />
      </section>
    </div>
  );
}
