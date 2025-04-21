/**
 * Script pour convertir les images JPG en WebP pour une meilleure performance et qualité visuelle
 * Utilise la bibliothèque sharp pour optimiser les images
 */

import sharp from 'sharp';
import fs from 'fs/promises';
import path from 'path';

// Chemins des répertoires d'images (relatifs à la racine du projet)
const imageDirectories = [
  'kyrielservices/public/assets/images',
  'kyrielservices/public/images'
];

// Extensions d'images à convertir
const supportedExtensions = ['.jpg', '.jpeg', '.png'];

// Qualité WebP (0-100)
const webpQuality = 80;

/**
 * Convertit une image en format WebP
 * @param {string} imagePath Chemin de l'image source
 */
async function convertToWebP(imagePath) {
  try {
    const dir = path.dirname(imagePath);
    const fileNameWithoutExt = path.basename(imagePath, path.extname(imagePath));
    const outputPath = path.join(dir, `${fileNameWithoutExt}.webp`);

    console.log(`🔄 Conversion: ${imagePath} -> ${outputPath}`);

    await sharp(imagePath)
      .webp({ quality: webpQuality })
      .toFile(outputPath);

    // Obtenir la taille des deux fichiers pour comparer
    const originalStats = await fs.stat(imagePath);
    const webpStats = await fs.stat(outputPath);

    const originalSize = originalStats.size / 1024; // KB
    const webpSize = webpStats.size / 1024; // KB
    const reduction = 100 - (webpSize / originalSize * 100);

    console.log(`✅ ${outputPath} généré (${originalSize.toFixed(1)}KB → ${webpSize.toFixed(1)}KB, ${reduction.toFixed(1)}% plus petit)`);
  } catch (error) {
    console.error(`❌ Erreur lors de la conversion de ${imagePath}:`, error);
  }
}

/**
 * Recherche récursivement les images dans un répertoire
 * @param {string} directory Chemin du répertoire à explorer
 */
async function processDirectory(directory) {
  try {
    const entries = await fs.readdir(directory, { withFileTypes: true });

    for (const entry of entries) {
      const fullPath = path.join(directory, entry.name);

      if (entry.isDirectory()) {
        await processDirectory(fullPath);
      } else if (entry.isFile()) {
        const ext = path.extname(entry.name).toLowerCase();
        if (supportedExtensions.includes(ext)) {
          await convertToWebP(fullPath);
        }
      }
    }
  } catch (error) {
    console.error(`❌ Erreur lors du traitement du répertoire ${directory}:`, error);
  }
}

/**
 * Fonction principale
 */
async function main() {
  console.log('🚀 Démarrage de la conversion des images en WebP...');

  for (const directory of imageDirectories) {
    try {
      await fs.access(directory);
      console.log(`📂 Traitement du répertoire: ${directory}`);
      await processDirectory(directory);
    } catch (error) {
      console.warn(`⚠️ Le répertoire ${directory} n'existe pas ou n'est pas accessible.`);
    }
  }

  console.log('✨ Conversion terminée !');
}

// Exécuter le script
main().catch(error => {
  console.error('Erreur fatale:', error);
  process.exit(1);
});
