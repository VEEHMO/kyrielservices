/**
 * Interface pour les formulaires de contact
 */
export interface ContactFormData {
  id?: string;
  created_at?: Date;
  nom: string;
  email: string;
  telephone?: string; // Champ optionnel pour le numéro de téléphone
  sujet: string;
  message: string;
  status?: 'nouveau' | 'lu' | 'traité';
}
