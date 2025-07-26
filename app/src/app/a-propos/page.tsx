'use client';

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
      staggerChildren: 0.2
    }
  }
};

export default function AProposPage() {
  return (
    <div>
      <section className="py-20 px-4 bg-subtle-pattern">
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
            À <span className="gradient-heading">propos</span>
          </motion.h1>
          <motion.p
            className="text-xl text-neutral-600 mb-10 max-w-3xl mx-auto"
            variants={fadeInUp}
          >
            L'expertise informatique alliée à l'obsession du résultat.
          </motion.p>
        </motion.div>
      </section>

      <SectionSeparator color="light" width="150px" />

      <section className="py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-3 gap-10">
            <RevealOnScroll direction="left" delay={100}>
              <div className="p-8 bg-white rounded-xl shadow-soft border border-blue-100">
                <div className="text-3xl text-[#188ce4] mb-4">💡</div>
                <h2 className="text-2xl font-semibold mb-3 text-neutral-900">Expertise</h2>
                <p className="text-neutral-700">
                  <b>Kyriel Services</b> combine l'expertise technique et une parfaite compréhension des problématiques des PME. Notre approche : chaque solution est pensée pour faire gagner du temps et éviter la paperasse inutile.
                </p>
              </div>
            </RevealOnScroll>

            <RevealOnScroll direction="up" delay={200}>
              <div className="p-8 bg-white rounded-xl shadow-soft border border-blue-100">
                <div className="text-3xl text-[#188ce4] mb-4">🧭</div>
                <h2 className="text-2xl font-semibold mb-3 text-neutral-900">Notre mission</h2>
                <p className="text-neutral-700">
                  Accompagner les PME et indépendants afin qu'ils se concentrent sur leur cœur de métier, pendant que nos solutions automatisent l'administratif et fluidifient les processus techniques.
                </p>
              </div>
            </RevealOnScroll>

            <RevealOnScroll direction="right" delay={300}>
              <div className="p-8 bg-white rounded-xl shadow-soft border border-blue-100">
                <div className="text-3xl text-[#188ce4] mb-4">🌟</div>
                <h2 className="text-2xl font-semibold mb-3 text-neutral-900">Notre vision</h2>
                <p className="text-neutral-700">
                  Proposer des outils, des sites et des automatisations fiables, robustes, faits pour durer — sans superflu. Transparence, clarté, efficacité sont nos maîtres mots.
                </p>
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </section>

      <SectionSeparator color="dark" width="100px" />

      <section className="py-16 px-4 bg-blue-50">
        <RevealOnScroll>
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4 text-neutral-900">Notre philosophie</h2>
            <p className="text-lg text-neutral-700 mb-8">
              Le seul indicateur de réussite pour chacune de nos solutions est le <span className="font-semibold">temps gagné par nos clients</span>. L'informatique n'est qu'un moyen — votre réussite est notre fin.
            </p>
          </div>
        </RevealOnScroll>
      </section>
    </div>
  );
}
