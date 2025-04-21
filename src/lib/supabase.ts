import { createClient } from '@supabase/supabase-js';

// Ces valeurs doivent être remplacées par les vraies valeurs de l'environnement de production
// Pour le développement, elles sont définies directement ici
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://your-supabase-url.supabase.co';
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'your-supabase-anon-key';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Interface pour les contacts
export interface ContactFormData {
  id?: string;
  created_at?: Date;
  nom: string;
  email: string;
  sujet: string;
  message: string;
  status?: 'nouveau' | 'lu' | 'traité';
}

// Fonction pour sauvegarder un contact dans Supabase
export async function saveContact(contactData: ContactFormData): Promise<{ success: boolean; error?: any }> {
  try {
    const { data, error } = await supabase
      .from('contacts')
      .insert([{
        ...contactData,
        status: 'nouveau',
        created_at: new Date()
      }]);

    if (error) {
      console.error('Erreur lors de l\'enregistrement du contact:', error);
      return { success: false, error };
    }

    return { success: true, error: null };
  } catch (error) {
    console.error('Exception lors de l\'enregistrement du contact:', error);
    return { success: false, error };
  }
}

// Fonction pour envoyer un email de notification
export async function sendNotificationEmail(contactData: ContactFormData): Promise<{ success: boolean; error?: any }> {
  try {
    // Utiliser l'API Edge Function de Supabase pour envoyer un email
    // Cette fonction doit être configurée dans votre projet Supabase
    const { data, error } = await supabase.functions.invoke('send-notification-email', {
      body: JSON.stringify({
        to: 'contact@kyriel-services.fr', // Email de destination
        subject: `Nouvelle demande de devis: ${contactData.sujet}`,
        contactData
      })
    });

    if (error) {
      console.error('Erreur lors de l\'envoi de l\'email de notification:', error);
      return { success: false, error };
    }

    return { success: true, error: null };
  } catch (error) {
    console.error('Exception lors de l\'envoi de l\'email de notification:', error);
    return { success: false, error };
  }
}
