import { connectToDatabase, fallbackDb } from '../db/mongodb';
import { Contact } from '../db/models';
import { sendNotificationEmail } from '../email/service';
import type { ContactFormData } from '../types';

/**
 * Sauvegarde un nouveau contact dans MongoDB
 * Utilise le mode de secours si MongoDB n'est pas disponible
 */
export async function saveContact(contactData: ContactFormData): Promise<{ success: boolean; error?: any }> {
  try {
    // Connexion à la base de données
    const db = await connectToDatabase();

    // Si la connexion à MongoDB a échoué, utiliser le mode de secours
    if (!db) {
      // Sauvegarder localement et retourner un succès
      fallbackDb.saveContact(contactData);
      console.log('📝 Contact sauvegardé en mode de secours');
      return { success: true };
    }

    // Sinon, utiliser MongoDB normalement
    // Création d'un nouveau document Contact
    const newContact = new Contact({
      nom: contactData.nom,
      email: contactData.email,
      telephone: contactData.telephone || '', // Ajout du téléphone s'il existe
      sujet: contactData.sujet,
      message: contactData.message,
      status: 'nouveau',
      created_at: new Date()
    });

    // Sauvegarde dans la base de données
    await newContact.save();
    console.log('📝 Contact sauvegardé dans MongoDB');

    return { success: true };
  } catch (error) {
    console.error('❌ Erreur lors de l\'enregistrement du contact:', error);

    // En cas d'erreur avec MongoDB, utiliser le mode de secours
    try {
      fallbackDb.saveContact(contactData);
      console.log('📝 Contact sauvegardé en mode de secours (après échec MongoDB)');
      return { success: true };
    } catch (fallbackError) {
      console.error('❌ Erreur lors de l\'enregistrement du contact (mode de secours):', fallbackError);
      return { success: false, error: fallbackError };
    }
  }
}

/**
 * Fonction principale pour gérer la soumission de formulaire de contact
 */
export async function handleContactSubmission(
  contactData: ContactFormData
): Promise<{ success: boolean; message: string; error?: any }> {
  try {
    // 1. Sauvegarde des données de contact
    const saveResult = await saveContact(contactData);

    if (!saveResult.success) {
      console.error('❌ Erreur lors de l\'enregistrement du contact:', saveResult.error);
      return {
        success: false,
        message: 'Erreur lors de l\'enregistrement de votre message',
        error: saveResult.error
      };
    }

    // 2. Envoi de notification par email
    const emailResult = await sendNotificationEmail(contactData);

    if (!emailResult.success) {
      console.warn('⚠️ Email de notification non envoyé:', emailResult.error);
      // Continuer malgré l'échec d'envoi d'email
    }

    return {
      success: true,
      message: 'Votre message a été envoyé avec succès'
    };
  } catch (error) {
    console.error('❌ Erreur lors du traitement de la soumission de contact:', error);
    return {
      success: false,
      message: 'Une erreur est survenue lors du traitement de votre demande',
      error
    };
  }
}
