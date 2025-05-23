'use client';

import { useState } from 'react';
import RevealOnScroll from "@/components/ui/RevealOnScroll";
import SectionSeparator from "@/components/ui/SectionSeparator";
import { motion } from "framer-motion";
import type { ContactFormData } from '@/lib/types';
import { GlowingDot, Glow, FloatingParticles, Grid } from "@/components/ui/Decorations";
import ConfirmationModal from "@/components/ui/ConfirmationModal";

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

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState<ContactFormData>({
    nom: '',
    email: '',
    telephone: '', // Ajout du champ téléphone
    sujet: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formError, setFormError] = useState<string | null>(null);

  // État pour gérer l'affichage du modal de confirmation
  const [showConfirmationModal, setShowConfirmationModal] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setFormError(null);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      const result = await response.json();

      if (!response.ok || !result.success) {
        throw new Error(result.message || 'Une erreur est survenue');
      }

      // Réinitialiser le formulaire
      setFormData({
        nom: '',
        email: '',
        telephone: '', // Réinitialiser le champ téléphone
        sujet: '',
        message: ''
      });

      // Afficher le modal de confirmation au lieu de changer l'état submitted
      setShowConfirmationModal(true);
    } catch (error) {
      console.error('Erreur lors de l\'envoi du formulaire:', error);
      setFormError(
        error instanceof Error
          ? error.message
          : 'Une erreur inattendue est survenue lors de l\'envoi du message'
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleCloseModal = () => {
    setShowConfirmationModal(false);
    // Optionnel: changer l'état submitted comme auparavant
    // setSubmitted(true);
  };

  return (
    <div className="relative overflow-hidden">
      {/* Modal de confirmation */}
      <ConfirmationModal
        isOpen={showConfirmationModal}
        onClose={handleCloseModal}
        title="Message envoyé !"
        message="Nous avons bien reçu votre message et reviendrons vers vous rapidement."
        buttonText="Fermer"
      />

      {/* Éléments décoratifs pour l'ensemble de la page */}
      <div className="fixed inset-0 pointer-events-none opacity-30">
        <Grid className="opacity-5" />
      </div>

      <div className="gradient-blob blob-1" />
      <div className="gradient-blob blob-2" />

      <section className="py-20 px-4 bg-subtle-pattern relative">
        {/* Éléments décoratifs spécifiques à cette section */}
        <FloatingParticles count={12} className="opacity-30" />
        <Glow className="-top-20 -left-20" width={70} height={70} color="#188ce4" />

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
            <span className="gradient-heading">Contactez</span>-nous
          </motion.h1>
          <motion.p
            className="text-xl text-neutral-600 mb-10 max-w-3xl mx-auto"
            variants={fadeInUp}
          >
            Discutons de vos projets et voyons comment nous pouvons vous faire gagner du temps.
          </motion.p>
        </motion.div>
      </section>

      <SectionSeparator color="light" width="150px" />

      <section className="py-16 px-4 relative">
        {/* Points lumineux décoratifs */}
        <GlowingDot x={10} y={20} size={8} />
        <GlowingDot x={90} y={30} size={12} delay={1} />
        <GlowingDot x={85} y={70} size={10} delay={0.5} />

        <div className="max-w-3xl mx-auto relative">
          <div className="absolute -z-10 -top-10 -right-20 w-64 h-64 bg-blue-50 rounded-full opacity-40 blur-3xl" />

          {/* Le formulaire est toujours affiché, plus besoin de gérer submitted */}
          <RevealOnScroll>
            <form
              className="bg-white rounded-xl shadow-soft p-10 border border-blue-100 relative overflow-hidden"
              onSubmit={handleSubmit}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50/10 to-transparent pointer-events-none" />

              {formError && (
                <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg text-red-600">
                  {formError}
                </div>
              )}

              <div className="space-y-6 relative z-10">
                <div>
                  <label htmlFor="nom" className="text-sm font-medium text-neutral-700 mb-1 block">Nom</label>
                  <input
                    required
                    type="text"
                    name="nom"
                    id="nom"
                    value={formData.nom}
                    onChange={handleChange}
                    placeholder="Votre nom"
                    className="w-full rounded-lg border border-blue-200 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#188ce4] transition-all"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="text-sm font-medium text-neutral-700 mb-1 block">Email</label>
                  <input
                    required
                    type="email"
                    name="email"
                    id="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="votre@email.com"
                    className="w-full rounded-lg border border-blue-200 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#188ce4] transition-all"
                  />
                </div>

                {/* Nouveau champ téléphone */}
                <div>
                  <label htmlFor="telephone" className="text-sm font-medium text-neutral-700 mb-1 block">
                    Téléphone <span className="text-xs text-neutral-500">(Optionnel)</span>
                  </label>
                  <input
                    type="tel"
                    name="telephone"
                    id="telephone"
                    value={formData.telephone}
                    onChange={handleChange}
                    placeholder="06 12 34 56 78"
                    className="w-full rounded-lg border border-blue-200 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#188ce4] transition-all"
                  />
                </div>

                <div>
                  <label htmlFor="sujet" className="text-sm font-medium text-neutral-700 mb-1 block">Sujet</label>
                  <select
                    name="sujet"
                    id="sujet"
                    value={formData.sujet}
                    onChange={handleChange}
                    className="w-full rounded-lg border border-blue-200 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#188ce4] transition-all"
                  >
                    <option value="">Choisissez un sujet</option>
                    <option value="automatisation">Automatisation</option>
                    <option value="developpement">Développement d'outils</option>
                    <option value="site-web">Création de site web</option>
                    <option value="communication">Communication digitale</option>
                    <option value="autre">Autre</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="text-sm font-medium text-neutral-700 mb-1 block">Message</label>
                  <textarea
                    required
                    name="message"
                    id="message"
                    rows={6}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Décrivez votre projet ou votre besoin..."
                    className="w-full rounded-lg border border-blue-200 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#188ce4] transition-all"
                  />
                </div>

                <div className="relative">
                  <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[#188ce4] via-[#4fb3ef] to-[#1581cf] animate-border opacity-70 blur-sm"></div>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full prismia-button mt-4 relative ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
                  >
                    {isSubmitting ? 'Envoi en cours...' : 'Envoyer votre message'}
                  </button>
                </div>
              </div>
            </form>
          </RevealOnScroll>
        </div>
      </section>

      <SectionSeparator color="dark" width="100px" />
    </div>
  );
}
