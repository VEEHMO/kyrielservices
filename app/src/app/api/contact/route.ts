import { NextResponse } from 'next/server';
import { handleContactSubmission } from '@/lib/services/contact';
import type { ContactFormData } from '@/lib/types';

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

    // Utilisation du service de contact pour gérer la soumission
    const result = await handleContactSubmission(formData);

    // Gestion de la réponse en fonction du résultat
    if (!result.success) {
      console.error('Erreur lors du traitement du formulaire:', result.error);
      return NextResponse.json(
        { success: false, message: result.message },
        { status: 500 }
      );
    }

    // Retour du succès
    return NextResponse.json({
      success: true,
      message: result.message
    });

  } catch (error) {
    console.error('Erreur lors du traitement du formulaire de contact:', error);
    return NextResponse.json(
      { success: false, message: 'Une erreur est survenue lors du traitement de votre demande' },
      { status: 500 }
    );
  }
}
