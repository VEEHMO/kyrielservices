"use client";
import RevealOnScroll from "@/components/ui/RevealOnScroll";
import SectionSeparator from "@/components/ui/SectionSeparator";
import { motion } from "framer-motion";

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

export default function RealisationsPage() {
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
            Nos <span className="gradient-heading">réalisations</span>
          </motion.h1>
          <motion.p
            className="text-xl text-neutral-600 mb-10 max-w-3xl mx-auto"
            variants={fadeInUp}
          >
            Découvrez comment nos solutions ont transformé les entreprises.
          </motion.p>
        </motion.div>

        {/* Cercles décoratifs */}
        <div className="absolute -top-32 -right-32 w-64 h-64 rounded-full bg-blue-50 opacity-30" />
        <div className="absolute -bottom-32 -left-32 w-64 h-64 rounded-full bg-blue-50 opacity-20" />
      </section>

      <SectionSeparator color="light" width="150px" />

      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto space-y-16">
          {/* Réalisation 1 - De gauche */}
          <RevealOnScroll direction="left">
            <div className="grid md:grid-cols-5 gap-10 items-center">
              <div className="md:col-span-3 bg-blue-50 rounded-lg p-10">
                <div className="text-sm font-medium text-[#188ce4] mb-2">AUTOMATISATION</div>
                <h2 className="text-2xl font-semibold mb-6 text-neutral-900">Factures & relances automatisées</h2>

                <div className="space-y-4 mb-8">
                  <div className="bg-white rounded-lg p-4 shadow-soft border border-blue-100">
                    <div className="text-sm font-medium text-neutral-500 mb-1">Avant</div>
                    <div className="text-neutral-700">Envoi manuel chronophage, risque d'oubli, suivi fastidieux. Un processus long et source d'erreurs.</div>
                  </div>

                  <div className="bg-white rounded-lg p-4 shadow-soft border border-blue-100">
                    <div className="text-sm font-medium text-[#188ce4] mb-1">Après</div>
                    <div className="text-neutral-700">Génération automatique, envoi immédiat, zéro stress et zéro oubli. Gain de 4h par semaine.</div>
                  </div>
                </div>
              </div>

              <div className="md:col-span-2 order-first md:order-last">
                <div className="rounded-lg bg-gradient-to-br from-blue-100 to-blue-50 p-8 shadow-soft h-full flex items-center justify-center">
                  <div className="text-9xl text-[#188ce4]">+4h</div>
                </div>
              </div>
            </div>
          </RevealOnScroll>

          {/* Réalisation 2 - De droite */}
          <RevealOnScroll direction="right">
            <div className="grid md:grid-cols-5 gap-10 items-center">
              <div className="md:col-span-2">
                <div className="rounded-lg bg-gradient-to-br from-blue-100 to-blue-50 p-8 shadow-soft h-full flex items-center justify-center">
                  <div className="text-9xl text-[#188ce4]">+30%</div>
                </div>
              </div>

              <div className="md:col-span-3 bg-blue-50 rounded-lg p-10">
                <div className="text-sm font-medium text-[#188ce4] mb-2">OUTIL EXCEL</div>
                <h2 className="text-2xl font-semibold mb-6 text-neutral-900">Tableau de bord personnalisé</h2>

                <div className="space-y-4 mb-8">
                  <div className="bg-white rounded-lg p-4 shadow-soft border border-blue-100">
                    <div className="text-sm font-medium text-neutral-500 mb-1">Avant</div>
                    <div className="text-neutral-700">Tableurs à rallonge, peu lisibles. Données dispersées, difficultés à obtenir une vision globale.</div>
                  </div>

                  <div className="bg-white rounded-lg p-4 shadow-soft border border-blue-100">
                    <div className="text-sm font-medium text-[#188ce4] mb-1">Après</div>
                    <div className="text-neutral-700">Outil adapté, tableaux de bord, alertes automatiques, gain de clarté & temps. +30% de productivité.</div>
                  </div>
                </div>
              </div>
            </div>
          </RevealOnScroll>

          <SectionSeparator color="dark" width="80px" />

          {/* Réalisation 3 - De droite */}
          <RevealOnScroll direction="right">
            <div className="grid md:grid-cols-5 gap-10 items-center">
              <div className="md:col-span-3 bg-blue-50 rounded-lg p-10">
                <div className="text-sm font-medium text-[#188ce4] mb-2">SITE WEB</div>
                <h2 className="text-2xl font-semibold mb-6 text-neutral-900">Site vitrine pour artisans</h2>

                <div className="space-y-4 mb-8">
                  <div className="bg-white rounded-lg p-4 shadow-soft border border-blue-100">
                    <div className="text-sm font-medium text-neutral-500 mb-1">Avant</div>
                    <div className="text-neutral-700">Aucune présence en ligne. Visibilité limitée au bouche-à-oreille local.</div>
                  </div>

                  <div className="bg-white rounded-lg p-4 shadow-soft border border-blue-100">
                    <div className="text-sm font-medium text-[#188ce4] mb-1">Après</div>
                    <div className="text-neutral-700">Site rapide, moderne, formulaire contact, Google My Business connectés. 80% de nouveaux clients via le web.</div>
                  </div>
                </div>
              </div>

              <div className="md:col-span-2 order-first md:order-last">
                <div className="rounded-lg bg-gradient-to-br from-blue-100 to-blue-50 p-8 shadow-soft h-full flex items-center justify-center">
                  <div className="text-9xl text-[#188ce4]">80%</div>
                </div>
              </div>
            </div>
          </RevealOnScroll>

          {/* Réalisation 4 - De gauche */}
          <RevealOnScroll direction="left">
            <div className="grid md:grid-cols-5 gap-10 items-center">
              <div className="md:col-span-2">
                <div className="rounded-lg bg-gradient-to-br from-blue-100 to-blue-50 p-8 shadow-soft h-full flex items-center justify-center">
                  <div className="text-9xl text-[#188ce4]">2x</div>
                </div>
              </div>

              <div className="md:col-span-3 bg-blue-50 rounded-lg p-10">
                <div className="text-sm font-medium text-[#188ce4] mb-2">AUTOMATISATION CRM</div>
                <h2 className="text-2xl font-semibold mb-6 text-neutral-900">Gestion de la relation client</h2>

                <div className="space-y-4 mb-8">
                  <div className="bg-white rounded-lg p-4 shadow-soft border border-blue-100">
                    <div className="text-sm font-medium text-neutral-500 mb-1">Avant</div>
                    <div className="text-neutral-700">Processus de vente manuel, doubles saisies fréquentes, pertes d'information entre services.</div>
                  </div>

                  <div className="bg-white rounded-lg p-4 shadow-soft border border-blue-100">
                    <div className="text-sm font-medium text-[#188ce4] mb-1">Après</div>
                    <div className="text-neutral-700">Workflow fluide, automatisation des tâches répétitives, doublé le taux de conversion commercial.</div>
                  </div>
                </div>
              </div>
            </div>
          </RevealOnScroll>

          <SectionSeparator color="dark" width="80px" />

          {/* Réalisation 5 - De gauche */}
          <RevealOnScroll direction="left">
            <div className="grid md:grid-cols-5 gap-10 items-center">
              <div className="md:col-span-3 bg-blue-50 rounded-lg p-10">
                <div className="text-sm font-medium text-[#188ce4] mb-2">TABLEAUX DE BORD</div>
                <h2 className="text-2xl font-semibold mb-6 text-neutral-900">Analyse de performance</h2>

                <div className="space-y-4 mb-8">
                  <div className="bg-white rounded-lg p-4 shadow-soft border border-blue-100">
                    <div className="text-sm font-medium text-neutral-500 mb-1">Avant</div>
                    <div className="text-neutral-700">Décisions basées sur l'intuition, manque de visibilité sur les KPIs essentiels de l'entreprise.</div>
                  </div>

                  <div className="bg-white rounded-lg p-4 shadow-soft border border-blue-100">
                    <div className="text-sm font-medium text-[#188ce4] mb-1">Après</div>
                    <div className="text-neutral-700">Tableaux de bord PowerBI en temps réel, alertes personnalisées, prise de décision facilitée par les données.</div>
                  </div>
                </div>
              </div>

              <div className="md:col-span-2 order-first md:order-last">
                <div className="rounded-lg bg-gradient-to-br from-blue-100 to-blue-50 p-8 shadow-soft h-full flex items-center justify-center">
                  <div className="text-8xl text-[#188ce4]">+45%</div>
                </div>
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      <SectionSeparator color="light" width="150px" />

      {/* Call to Action */}
      <section className="py-16 px-4 bg-gradient-to-r from-[#188ce4] to-[#1581cf] text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-64 bg-white opacity-20 transform -skew-y-6" />
          <div className="absolute bottom-0 right-0 w-full h-64 bg-white opacity-20 transform skew-y-6" />
        </div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <RevealOnScroll>
            <h2 className="text-3xl font-bold mb-4">Prêt à transformer votre activité ?</h2>
          </RevealOnScroll>
          <RevealOnScroll delay={100}>
            <p className="text-lg mb-8 text-blue-50">Découvrez comment nous pouvons vous aider à optimiser vos processus et développer votre entreprise.</p>
          </RevealOnScroll>
          <RevealOnScroll delay={200}>
            <div className="flex flex-col sm:flex-row gap-5 justify-center">
              <a
                href="/contact"
                className="bg-white hover:bg-blue-50 text-[#188ce4] font-semibold py-3 px-6 rounded-md shadow-md hover:shadow-lg transition duration-300 inline-flex items-center group"
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
