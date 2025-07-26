import mongoose from 'mongoose';

// Définition du schéma de contact
const contactSchema = new mongoose.Schema({
  nom: {
    type: String,
    required: [true, 'Le nom est requis'],
    trim: true
  },
  email: {
    type: String,
    required: [true, 'L\'email est requis'],
    trim: true,
    lowercase: true,
    match: [
      /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
      'Veuillez fournir une adresse email valide'
    ]
  },
  telephone: {
    type: String,
    trim: true,
    required: false,
    // Validation optionnelle pour le format de téléphone français
    validate: {
      validator: function(v) {
        // Cette expression régulière accepte différents formats de numéros de téléphone
        // français avec ou sans espaces, tirets, etc.
        return !v || /^(\+33|0)[1-9]( *[0-9]{2}){4}$/.test(v);
      },
      message: props => `${props.value} n'est pas un numéro de téléphone valide`
    }
  },
  sujet: {
    type: String,
    required: [true, 'Le sujet est requis'],
    enum: {
      values: ['', 'automatisation', 'developpement', 'site-web', 'communication', 'autre'],
      message: 'Le sujet doit être l\'une des valeurs suivantes: automatisation, developpement, site-web, communication, autre'
    }
  },
  message: {
    type: String,
    required: [true, 'Le message est requis'],
    trim: true
  },
  status: {
    type: String,
    enum: ['nouveau', 'lu', 'traité'],
    default: 'nouveau'
  },
  created_at: {
    type: Date,
    default: Date.now
  }
});

// Export du modèle Contact
// Vérifie si le modèle existe déjà pour éviter les erreurs de compilation hot reload
export const Contact = mongoose.models.Contact || mongoose.model('Contact', contactSchema);
