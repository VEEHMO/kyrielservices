import mongoose from 'mongoose';

// Vérification de l'existence de l'URL MongoDB
const MONGODB_URI = process.env.MONGODB_URI;

if (!MONGODB_URI) {
  console.warn('⚠️ MONGODB_URI manquant - Utilisation d\'un mode de stockage alternatif');
}

/**
 * Interface pour le type global de mongoose
 */
interface GlobalMongoose {
  conn: typeof mongoose | null;
  promise: Promise<typeof mongoose> | null;
}

/**
 * Variables globales pour maintenir la connexion
 * à la base de données à travers les rechargements.
 */
declare global {
  // eslint-disable-next-line no-var
  var mongodbConnection: GlobalMongoose;
}

// Initialisation des variables globales
const globalAny = global as any;
globalAny.mongodbConnection = globalAny.mongodbConnection || {
  conn: null,
  promise: null,
};

/**
 * Mode de secours si MongoDB n'est pas disponible
 * Stockage temporaire en mémoire
 */
const fallbackStore: any[] = [];

/**
 * Fonction pour se connecter à MongoDB
 * Réutilise la connexion existante si disponible
 */
export async function connectToDatabase(): Promise<typeof mongoose | null> {
  // Si une connexion existe déjà, on la retourne
  if (globalAny.mongodbConnection.conn) {
    return globalAny.mongodbConnection.conn;
  }

  // Si MongoDB n'est pas configuré, on retourne null
  if (!MONGODB_URI) {
    console.warn('⚠️ Aucune connexion MongoDB disponible - Mode de secours activé');
    return null;
  }

  // Si une promesse de connexion est en cours, on attend sa résolution
  if (!globalAny.mongodbConnection.promise) {
    // Options de connexion pour MongoDB
    const opts: mongoose.ConnectOptions = {
      bufferCommands: false,
      retryWrites: true,
      w: 'majority',
      maxPoolSize: 10,
      serverSelectionTimeoutMS: 5000,
      socketTimeoutMS: 45000,
    };

    // Création d'une nouvelle promesse de connexion
    globalAny.mongodbConnection.promise = mongoose
      .connect(MONGODB_URI, opts)
      .then((mongooseInstance) => {
        console.log('✅ Connexion à MongoDB établie');
        return mongooseInstance;
      })
      .catch((error) => {
        console.error('❌ Erreur de connexion à MongoDB:', error);
        // Retourner null au lieu de propager l'erreur pour permettre le fallback
        return null;
      });
  }

  try {
    // Attente de la résolution de la promesse
    globalAny.mongodbConnection.conn = await globalAny.mongodbConnection.promise;
    return globalAny.mongodbConnection.conn;
  } catch (e) {
    console.error('❌ Erreur lors de la connexion à MongoDB:', e);
    globalAny.mongodbConnection.promise = null;
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
