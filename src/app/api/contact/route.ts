import { NextResponse } from 'next/server';
import { saveContact, sendNotificationEmail, type ContactFormData } from '@/lib/supabase';

export async function POST(request: Request) {
  try {
    // Récupérer les données du formulaire
    const formData: ContactFormData = await request.json();

    // Validation basique des données
    if (!formData.nom || !formData.email || !formData.message) {
      return NextResponse.json(
        { success: false, message: 'Veuillez remplir tous les champs obligatoires' },
        { status: 400 }
      );
    }

    // Sauvegarder le contact dans Supabase
    const saveResult = await saveContact(formData);

    if (!saveResult.success) {
      console.error('Erreur lors de l\'enregistrement du contact:', saveResult.error);
      return NextResponse.json(
        { success: false, message: 'Erreur lors de l\'enregistrement de votre message' },
        { status: 500 }
      );
    }

    // Envoyer un email de notification
    const emailResult = await sendNotificationEmail(formData);

    if (!emailResult.success) {
      console.warn('Email de notification non envoyé:', emailResult.error);
      // Continuer malgré l'échec d'envoi d'email
    }

    return NextResponse.json({
      success: true,
      message: 'Votre message a été envoyé avec succès'
    });

  } catch (error) {
    console.error('Erreur lors du traitement du formulaire de contact:', error);
    return NextResponse.json(
      { success: false, message: 'Une erreur est survenue lors du traitement de votre demande' },
      { status: 500 }
    );
  }
}
