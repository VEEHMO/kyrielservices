import nodemailer from 'nodemailer';
import type { ContactFormData } from '@/lib/types';

// Récupération des variables d'environnement
const {
  SMTP_HOST = 'ssl0.ovh.net',
  SMTP_PORT = '587',
  SMTP_USER = 'contact@kyrielservices.fr',
  SMTP_PASS,
  MAIL_FROM = 'no-reply@kyrielservices.fr',
  MAIL_TO = 'contact@kyrielservices.fr'
} = process.env;

// Vérification des variables essentielles
if (!SMTP_PASS) {
  console.warn('⚠️ SMTP_PASS non défini - Le service d\'email pourrait ne pas fonctionner correctement');
}

// Création du transporteur Nodemailer
const transporter = nodemailer.createTransport({
  host: SMTP_HOST,
  port: Number(SMTP_PORT),
  secure: false, // true pour 465, false pour les autres ports
  auth: {
    user: SMTP_USER,
    pass: SMTP_PASS
  },
  tls: {
    // Ne pas échouer sur les certificats invalides
    rejectUnauthorized: false
  }
});

/**
 * Fonction pour formater le contenu du message
 */
function formatEmailContent(data: ContactFormData): string {
  return `
    <div style="font-family: Arial, sans-serif; color: #333;">
      <h2 style="color: #188ce4;">Nouvelle demande de contact</h2>
      <p><strong>De:</strong> ${data.nom} (${data.email})</p>
      ${data.telephone ? `<p><strong>Téléphone:</strong> ${data.telephone}</p>` : ''}
      <p><strong>Sujet:</strong> ${formatSubject(data.sujet)}</p>
      <p><strong>Message:</strong></p>
      <div style="background-color: #f5f5f5; padding: 15px; border-radius: 5px; margin-top: 10px;">
        ${data.message.replace(/\n/g, '<br>')}
      </div>
      <p style="margin-top: 20px; font-size: 12px; color: #666;">
        Message envoyé depuis le formulaire de contact du site web Kyriel Services.
      </p>
    </div>
  `;
}

/**
 * Fonction pour obtenir le libellé du sujet
 */
function formatSubject(sujet: string): string {
  const subjects: Record<string, string> = {
    'automatisation': 'Automatisation',
    'developpement': 'Développement d\'outils',
    'site-web': 'Création de site web',
    'communication': 'Communication digitale',
    'autre': 'Autre demande'
  };

  return subjects[sujet] || sujet;
}

/**
 * Fonction pour envoyer un email de notification
 */
export async function sendNotificationEmail(data: ContactFormData): Promise<{ success: boolean; error?: any }> {
  try {
    // Configuration de l'email
    const mailOptions = {
      from: `"Kyriel Services" <${MAIL_FROM}>`,
      to: MAIL_TO,
      subject: `Nouvelle demande: ${formatSubject(data.sujet)}`,
      html: formatEmailContent(data),
      replyTo: data.email
    };

    // Envoi de l'email
    const info = await transporter.sendMail(mailOptions);
    console.log('📧 Email envoyé:', info.messageId);

    return { success: true };
  } catch (error) {
    console.error('❌ Erreur lors de l\'envoi de l\'email:', error);
    return { success: false, error };
  }
}
