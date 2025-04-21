import mongoose from 'mongoose';

// Vérification de l'existence de l'URL MongoDB
const MONGODB_URI = process.env.MONGODB_URI;

if (!MONGODB_URI) {
  console.warn('⚠️ MONGODB_URI manquant - Utilisation d\'un mode de stockage alternatif');
}

/**
 * Variables globales pour maintenir la connexion
 * à la base de données à travers les rechargements.
 */
declare global {
  var mongoose: {
    conn: typeof mongoose | null;
    promise: Promise<typeof mongoose> | null;
  };
}

// Initialisation des variables globales
if (!global.mongoose) {
  global.mongoose = {
    conn: null,
    promise: null,
  };
}

/**
 * Mode de secours si MongoDB n'est pas disponible
 * Stockage temporaire en mémoire
 */
const fallbackStore: any[] = [];

/**
 * Fonction pour se connecter à MongoDB
 * Réutilise la connexion existante si disponible
 */
export async function connectToDatabase() {
  // Si une connexion existe déjà, on la retourne
  if (global.mongoose.conn) {
    return global.mongoose.conn;
  }

  // Si MongoDB n'est pas configuré, on retourne null
  if (!MONGODB_URI) {
    console.warn('⚠️ Aucune connexion MongoDB disponible - Mode de secours activé');
    return null;
  }

  // Si une promesse de connexion est en cours, on attend sa résolution
  if (!global.mongoose.promise) {
    // Options de connexion pour MongoDB
    const opts = {
      bufferCommands: false,
      retryWrites: true,
      w: 'majority',
      maxPoolSize: 10,
      serverSelectionTimeoutMS: 5000,
      socketTimeoutMS: 45000,
    };

    // Création d'une nouvelle promesse de connexion
    global.mongoose.promise = mongoose
      .connect(MONGODB_URI, opts)
      .then((mongoose) => {
        console.log('✅ Connexion à MongoDB établie');
        return mongoose;
      })
      .catch((error) => {
        console.error('❌ Erreur de connexion à MongoDB:', error);
        // Retourner null au lieu de propager l'erreur pour permettre le fallback
        return null;
      });
  }

  try {
    // Attente de la résolution de la promesse
    global.mongoose.conn = await global.mongoose.promise;
    return global.mongoose.conn;
  } catch (e) {
    console.error('❌ Erreur lors de la connexion à MongoDB:', e);
    global.mongoose.promise = null;
    return null;
  }
}

/**
 * Méthodes pour le mode de secours (sans MongoDB)
 */
export const fallbackDb = {
  saveContact: (data: any) => {
    const contact = { ...data, id: Date.now().toString(), created_at: new Date() };
    fallbackStore.push(contact);
    console.log('📝 Contact sauvegardé en mémoire (mode de secours):', contact);
    return contact;
  },

  getContacts: () => fallbackStore,
};
