"use client";
import React from 'react';
import Link from "next/link";
import { motion } from "framer-motion";
import AnimatedLogo from '@/components/ui/AnimatedLogo';
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

export default function HomePage() {
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
          {/* Éléments décoratifs spécifiques à la section hero */}
          <FloatingParticles count={15} className="opacity-40" aria-hidden="true" />
          <Glow className="-top-20 -right-20" width={70} height={70} aria-hidden="true" />

          <motion.div
            className="max-w-5xl mx-auto text-center"
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

          {/* Cercles décoratifs */}
          <div className="absolute -top-24 -right-24 w-64 h-64 rounded-full bg-primary-50 opacity-30" aria-hidden="true" />
          <div className="absolute -bottom-32 -left-32 w-96 h-96 rounded-full bg-primary-50 opacity-20" aria-hidden="true" />
        </div>
      </section>

      <SectionSeparator color="light" width="180px" />

      {/* Code example section */}
      <section className="section relative" aria-labelledby="solutions-heading">
        <div className="container-custom">
          <WaterDropEffect className="opacity-40" aria-hidden="true" />
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
        <div className="absolute top-0 left-0 w-full h-24 bg-blue-100 opacity-30 transform -skew-y-2" />
        <div className="absolute bottom-0 right-0 w-full h-24 bg-blue-100 opacity-30 transform skew-y-2" />
      </section>
    </div>
  );
}
