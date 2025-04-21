"use client";
import Icon from "@/components/ui/Icon";
import { motion } from "framer-motion";
import RevealOnScroll from "@/components/ui/RevealOnScroll";
import Link from "next/link";
import SectionSeparator from "@/components/ui/SectionSeparator";
import { SERVICE_ICON_MAPPING } from "@/components/ui/IconCollection";

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

export default function ServicesPage() {
  return (
    <div>
      <section className="py-20 px-4 bg-subtle-pattern relative overflow-hidden">
        <motion.div
          className="max-w-5xl mx-auto text-center"
          initial="hidden"
          animate="visible"
          variants={staggerChildren}
        >
          <motion.h1
            className="text-4xl md:text-5xl font-bold mb-6 text-neutral-900"
            variants={fadeInUp}
          >
            Nos <span className="gradient-heading">services</span>
          </motion.h1>
          <motion.p
            className="text-xl text-neutral-600 mb-10 max-w-3xl mx-auto"
            variants={fadeInUp}
          >
            Des solutions qui libèrent votre potentiel et maximisent votre productivité.
          </motion.p>
        </motion.div>

        {/* Éléments décoratifs */}
        <div className="absolute -top-32 -right-32 w-64 h-64 rounded-full bg-blue-50 opacity-30" />
        <div className="absolute -bottom-32 -left-32 w-64 h-64 rounded-full bg-blue-50 opacity-20" />
      </section>

      <SectionSeparator color="light" width="150px" />

      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            <RevealOnScroll direction="left">
              <div id="automatisation" className="service-card shadow-soft">
                <Icon
                  name={SERVICE_ICON_MAPPING.automation}
                  type="lucide"
                  size={48}
                  className="mb-4 text-primary"
                  animated={true}
                  animation="pulse"
                />
                <h2 className="text-2xl font-semibold mb-4 text-[#188ce4]">Automatisation</h2>
                <p className="text-neutral-700 mb-4">Libérez du temps en automatisant factures, relances, mails, tâches récurrentes… Solutions sur-mesure pour entrepreneurs exigeants.</p>
                <ul className="space-y-2 text-neutral-600">
                  <li className="flex items-start">
                    <span className="text-[#188ce4] mr-2">•</span>
                    <span>Génération automatique de documents</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#188ce4] mr-2">•</span>
                    <span>Envoi programmé d'emails personnalisés</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#188ce4] mr-2">•</span>
                    <span>Intégration entre vos outils existants</span>
                  </li>
                </ul>
              </div>
            </RevealOnScroll>

            <RevealOnScroll direction="right">
              <div id="outils" className="service-card shadow-soft">
                <Icon
                  name={SERVICE_ICON_MAPPING.tools}
                  type="lucide"
                  size={48}
                  className="mb-4 text-primary"
                  animated={true}
                  animation="bounce"
                />
                <h2 className="text-2xl font-semibold mb-4 text-[#188ce4]">Développement d'outils</h2>
                <p className="text-neutral-700 mb-4">Création d'outils sur Excel, Python ou Power BI pour un suivi plus simple, une gestion plus efficace, des reportings automatisés.</p>
                <ul className="space-y-2 text-neutral-600">
                  <li className="flex items-start">
                    <span className="text-[#188ce4] mr-2">•</span>
                    <span>Tableaux de bord interactifs Excel</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#188ce4] mr-2">•</span>
                    <span>Programmes Python pour traitement de données</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#188ce4] mr-2">•</span>
                    <span>Visualisations Power BI pour l'aide à la décision</span>
                  </li>
                </ul>
              </div>
            </RevealOnScroll>

            <RevealOnScroll direction="left">
              <div id="web" className="service-card shadow-soft">
                <Icon
                  name={SERVICE_ICON_MAPPING.web}
                  type="lucide"
                  size={48}
                  className="mb-4 text-primary"
                  animated={true}
                  animation="spin"
                />
                <h2 className="text-2xl font-semibold mb-4 text-[#188ce4]">Création de sites web</h2>
                <p className="text-neutral-700 mb-4">Sites vitrine, institutionnels ou e-commerce. Solutions rapides, sophistiquées ou sur-mesure selon votre besoin.</p>
                <ul className="space-y-2 text-neutral-600">
                  <li className="flex items-start">
                    <span className="text-[#188ce4] mr-2">•</span>
                    <span>Sites vitrines professionnels</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#188ce4] mr-2">•</span>
                    <span>E-commerce et solutions de paiement</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#188ce4] mr-2">•</span>
                    <span>Applications web sur-mesure</span>
                  </li>
                </ul>
              </div>
            </RevealOnScroll>

            <RevealOnScroll direction="right">
              <div id="communication" className="service-card shadow-soft">
                <Icon
                  name={SERVICE_ICON_MAPPING.communication}
                  type="lucide"
                  size={48}
                  className="mb-4 text-primary"
                  animated={true}
                  animation="hover"
                />
                <h2 className="text-2xl font-semibold mb-4 text-[#188ce4]">Communication digitale</h2>
                <p className="text-neutral-700 mb-4">Conseils, mise en place et accompagnement pour renforcer votre visibilité et votre notoriété sur le web.</p>
                <ul className="space-y-2 text-neutral-600">
                  <li className="flex items-start">
                    <span className="text-[#188ce4] mr-2">•</span>
                    <span>Stratégie digitale adaptée à vos objectifs</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#188ce4] mr-2">•</span>
                    <span>Optimisation pour les moteurs de recherche</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#188ce4] mr-2">•</span>
                    <span>Présence cohérente sur les réseaux sociaux</span>
                  </li>
                </ul>
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </section>

      <SectionSeparator color="dark" width="120px" />

      {/* Appel à l'action */}
      <section className="py-16 px-4 bg-gradient-to-r from-[#188ce4] to-[#1581cf] text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-64 bg-white opacity-20 transform -skew-y-6" />
          <div className="absolute bottom-0 right-0 w-full h-64 bg-white opacity-20 transform skew-y-6" />
        </div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <RevealOnScroll>
            <h2 className="text-3xl font-bold mb-4">Un projet à réaliser ?</h2>
          </RevealOnScroll>
          <RevealOnScroll delay={100}>
            <p className="text-lg mb-8 text-blue-50">Nos experts vous accompagnent à chaque étape pour transformer vos idées en solutions concrètes.</p>
          </RevealOnScroll>
          <RevealOnScroll delay={200}>
            <div className="flex flex-col sm:flex-row gap-5 justify-center">
              <Link
                href="/contact"
                className="bg-white hover:bg-blue-50 text-[#188ce4] font-semibold py-3 px-6 rounded-md shadow-md hover:shadow-lg transition duration-300 inline-flex items-center group"
              >
                Demander un devis gratuit
                <svg className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform duration-300" viewBox="0 0 24 24" fill="none">
                  <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </Link>
              <Link
                href="/realisations"
                className="bg-transparent hover:bg-blue-400 border-2 border-white text-white font-semibold py-3 px-6 rounded-md transition duration-300"
              >
                Voir nos réalisations
              </Link>
            </div>
          </RevealOnScroll>
        </div>
      </section>
    </div>
  );
}
