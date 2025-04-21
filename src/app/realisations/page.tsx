"use client";
import RevealOnScroll from "@/components/ui/RevealOnScroll";
import SectionSeparator from "@/components/ui/SectionSeparator";
import TreasureMapLine, { type TreasureMapMilestone } from "@/components/ui/TreasureMapLine";
import { motion } from "framer-motion";
import {
  MessageSquare,
  Wrench,
  Globe,
  Settings,
  BarChart3,
  Clock,
  Users,
  Award,
  TrendingUp,
  Heart
} from "lucide-react";
import { useEffect, useState } from "react";

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
      staggerChildren: 0.3
    }
  }
};

// Données pour la ligne de trésor
const treasureMilestones: TreasureMapMilestone[] = [
  {
    id: "1",
    position: 0.1, // Position à 10% de la hauteur
    side: "right",
    icon: Clock,
    title: "Automatisation des factures",
    value: "+4h",
    description: "De temps gagné par semaine grâce à l'automatisation du processus de facturation"
  },
  {
    id: "2",
    position: 0.3, // Position à 30% de la hauteur
    side: "left",
    icon: Users,
    title: "Tableau de bord personnalisé",
    value: "+30%",
    description: "D'augmentation de la productivité des équipes grâce à la centralisation des données"
  },
  {
    id: "3",
    position: 0.5, // Position à 50% de la hauteur
    side: "right",
    icon: Globe,
    title: "Site vitrine pour artisans",
    value: "80%",
    description: "Des nouveaux clients viennent désormais du web suite à la mise en place de la stratégie digitale"
  },
  {
    id: "4",
    position: 0.7, // Position à 70% de la hauteur
    side: "left",
    icon: TrendingUp,
    title: "Gestion de la relation client",
    value: "2x",
    description: "Le taux de conversion commercial a doublé grâce à l'automatisation du CRM"
  },
  {
    id: "5",
    position: 0.9, // Position à 90% de la hauteur
    side: "right",
    icon: Award,
    title: "Analyse de performance",
    value: "+45%",
    description: "D'efficacité opérationnelle grâce aux tableaux de bord en temps réel et aux KPIs pertinents"
  }
];

export default function RealisationsPage() {
  // Utiliser un état pour détecter si nous sommes côté client
  const [isClient, setIsClient] = useState(false);

  // Effet pour définir isClient à true lors du montage du composant
  useEffect(() => {
    setIsClient(true);
  }, []);

  // Rendu de la page avec gestion appropriée de l'hydratation
  return (
    <div>
      <section className="py-20 px-4 bg-subtle-pattern relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary-50/30 to-transparent opacity-60 pointer-events-none" />

        {/* Vue statique par défaut pour le SSR, remplacée par la version animée côté client */}
        <div className="max-w-5xl mx-auto text-center relative z-10">
          {isClient ? (
            <motion.div
              className="w-full"
              initial="hidden"
              animate="visible"
              variants={staggerChildren}
            >
              <motion.h1
                className="text-4xl md:text-5xl font-bold mb-6 text-gray-800"
                variants={fadeInUp}
              >
                Nos <span className="gradient-heading">réalisations</span>
              </motion.h1>
              <motion.p
                className="text-xl text-gray-600 mb-10 max-w-3xl mx-auto"
                variants={fadeInUp}
              >
                Découvrez comment nos solutions ont transformé les entreprises.
              </motion.p>
            </motion.div>
          ) : (
            <>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-800">
                Nos <span className="gradient-heading">réalisations</span>
              </h1>
              <p className="text-xl text-gray-600 mb-10 max-w-3xl mx-auto">
                Découvrez comment nos solutions ont transformé les entreprises.
              </p>
            </>
          )}
        </div>

        {/* Éléments décoratifs améliorés */}
        <div className="absolute top-0 right-0 w-1/3 h-64 bg-gradient-to-bl from-primary-100 to-transparent opacity-20 rounded-bl-full" />
        <div className="absolute bottom-0 left-0 w-1/3 h-64 bg-gradient-to-tr from-primary-100 to-transparent opacity-20 rounded-tr-full" />
      </section>

      <SectionSeparator color="light" width="150px" />

      {/* Section avec la carte au trésor - squelette rendu côté serveur et complet côté client */}
      <section className="relative overflow-hidden">
        <div className="absolute top-20 left-0 w-full h-64 bg-gradient-to-tr from-primary-50 to-transparent opacity-30" />
        <div className="absolute bottom-20 right-0 w-full h-64 bg-gradient-to-tl from-primary-50 to-transparent opacity-30" />

        <div className="max-w-6xl mx-auto px-4 py-12 relative z-10">
          <RevealOnScroll>
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">Notre Parcours de Réussite</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Suivez le chemin de nos réalisations et découvrez l'impact concret de nos solutions sur les performances de nos clients.
              </p>
            </div>
          </RevealOnScroll>

          <TreasureMapLine milestones={treasureMilestones} />
        </div>
      </section>

      <SectionSeparator color="light" width="150px" />

      {/* Call to Action amélioré */}
      <section className="py-16 px-4 bg-gradient-to-r from-primary-600 to-primary-700 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-64 bg-white opacity-20 transform -skew-y-6" />
          <div className="absolute bottom-0 right-0 w-full h-64 bg-white opacity-20 transform skew-y-6" />
        </div>

        {/* Éléments décoratifs */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-10 rounded-full transform translate-x-1/4 -translate-y-1/4" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-white opacity-10 rounded-full transform -translate-x-1/4 translate-y-1/4" />

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <RevealOnScroll>
            <h2 className="text-3xl font-bold mb-6">Prêt à transformer votre activité ?</h2>
          </RevealOnScroll>
          <RevealOnScroll delay={100}>
            <p className="text-lg mb-10 text-primary-50">Découvrez comment nous pouvons vous aider à optimiser vos processus et développer votre entreprise.</p>
          </RevealOnScroll>
          <RevealOnScroll delay={200}>
            <div className="flex flex-col sm:flex-row gap-5 justify-center">
              <a
                href="/contact"
                className="bg-white hover:bg-blue-50 text-primary-600 font-semibold py-3 px-8 rounded-md shadow-md hover:shadow-lg transition duration-300 inline-flex items-center group"
              >
                Discuter de votre projet
                <svg className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform duration-300" viewBox="0 0 24 24" fill="none">
                  <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
            </div>
          </RevealOnScroll>
        </div>
      </section>
    </div>
  );
}
