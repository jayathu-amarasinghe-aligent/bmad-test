#!/usr/bin/env node

/**
 * Image Metadata Generator
 *
 * Automatically extracts EXIF metadata from images and generates images.json
 *
 * Usage:
 *   node scripts/generate-image-metadata.js
 *   npm run generate-metadata
 *
 * This script:
 * 1. Scans public/images/color and public/images/bw directories
 * 2. Extracts EXIF data (camera, ISO, aperture, shutter, lens, GPS)
 * 3. Generates public/data/images.json with all metadata
 */

const fs = require('fs').promises;
const path = require('path');
const exifr = require('exifr');

// Configuration
const IMAGE_DIRS = {
  color: path.join(process.cwd(), 'public/images/color'),
  bw: path.join(process.cwd(), 'public/images/bw'),
};

const OUTPUT_FILE = path.join(process.cwd(), 'public/data/images.json');

// Supported image formats
const IMAGE_EXTENSIONS = ['.jpg', '.jpeg', '.png', '.webp', '.avif'];

/**
 * Get all image files from a directory
 */
async function getImageFiles(directory) {
  try {
    const files = await fs.readdir(directory);
    return files
      .filter(file => {
        const ext = path.extname(file).toLowerCase();
        return IMAGE_EXTENSIONS.includes(ext);
      })
      .map(file => path.join(directory, file));
  } catch (error) {
    if (error.code === 'ENOENT') {
      console.warn(`Directory not found: ${directory}`);
      return [];
    }
    throw error;
  }
}

/**
 * Extract EXIF metadata from an image
 */
async function extractMetadata(filePath) {
  try {
    const exif = await exifr.parse(filePath, {
      tiff: true,
      exif: true,
      gps: true,
      ifd0: true,
      ifd1: true,
    });

    if (!exif) {
      console.warn(`No EXIF data found for: ${path.basename(filePath)}`);
      return null;
    }

    // Extract camera settings
    const metadata = {
      camera: exif.Make && exif.Model ? `${exif.Make} ${exif.Model}`.trim() : null,
      iso: exif.ISO || null,
      aperture: exif.FNumber ? `f/${exif.FNumber}` : null,
      shutter: exif.ExposureTime
        ? exif.ExposureTime < 1
          ? `1/${Math.round(1 / exif.ExposureTime)}s`
          : `${exif.ExposureTime}s`
        : null,
      lens: exif.LensModel || exif.LensInfo || null,
      focalLength: exif.FocalLength ? `${Math.round(exif.FocalLength)}mm` : null,
      dateTaken: exif.DateTimeOriginal || exif.DateTime || null,
      location: null, // Will be populated from GPS or manual override
    };

    // Extract GPS coordinates if available
    if (exif.latitude && exif.longitude) {
      metadata.gps = {
        latitude: exif.latitude,
        longitude: exif.longitude,
      };
    }

    return metadata;
  } catch (error) {
    console.error(`Error extracting EXIF from ${path.basename(filePath)}:`, error.message);
    return null;
  }
}

/**
 * Get image dimensions
 */
async function getImageDimensions(filePath) {
  try {
    const sharp = require('sharp');
    const metadata = await sharp(filePath).metadata();
    return {
      width: metadata.width,
      height: metadata.height,
    };
  } catch (error) {
    console.warn(`Could not get dimensions for ${path.basename(filePath)}`);
    return { width: null, height: null };
  }
}

/**
 * Generate image entry for images.json
 */
async function generateImageEntry(filePath, category) {
  const filename = path.basename(filePath);
  const metadata = await extractMetadata(filePath);
  const dimensions = await getImageDimensions(filePath);

  // Generate ID from filename
  const id = path.parse(filename).name;

  // Generate alt text from filename (convert hyphens/underscores to spaces)
  const altText = id
    .replace(/[-_]/g, ' ')
    .replace(/\b\w/g, char => char.toUpperCase());

  return {
    id,
    filename,
    category,
    url: `/images/${category}/${filename}`,
    width: dimensions.width,
    height: dimensions.height,
    alt: altText,
    metadata: metadata || {
      camera: null,
      iso: null,
      aperture: null,
      shutter: null,
      lens: null,
      focalLength: null,
      location: null,
      dateTaken: null,
    },
    createdAt: new Date().toISOString(),
  };
}

/**
 * Main function
 */
async function generateMetadata() {
  console.log('🔍 Scanning for images...\n');

  const images = [];

  // Process color images
  console.log('📸 Processing color images...');
  const colorFiles = await getImageFiles(IMAGE_DIRS.color);
  for (const filePath of colorFiles) {
    const entry = await generateImageEntry(filePath, 'color');
    images.push(entry);
    console.log(`  ✓ ${entry.filename}`);
    if (entry.metadata.camera) {
      console.log(`    📷 ${entry.metadata.camera}`);
    }
    if (entry.metadata.iso) {
      console.log(`    ⚙️  ISO ${entry.metadata.iso} • ${entry.metadata.aperture} • ${entry.metadata.shutter}`);
    }
  }

  console.log('');

  // Process B&W images
  console.log('📸 Processing black & white images...');
  const bwFiles = await getImageFiles(IMAGE_DIRS.bw);
  for (const filePath of bwFiles) {
    const entry = await generateImageEntry(filePath, 'bw');
    images.push(entry);
    console.log(`  ✓ ${entry.filename}`);
    if (entry.metadata.camera) {
      console.log(`    📷 ${entry.metadata.camera}`);
    }
    if (entry.metadata.iso) {
      console.log(`    ⚙️  ISO ${entry.metadata.iso} • ${entry.metadata.aperture} • ${entry.metadata.shutter}`);
    }
  }

  console.log('');

  // Ensure output directory exists
  const outputDir = path.dirname(OUTPUT_FILE);
  await fs.mkdir(outputDir, { recursive: true });

  // Write images.json
  const output = {
    images,
    generatedAt: new Date().toISOString(),
    totalImages: images.length,
    categories: {
      color: images.filter(img => img.category === 'color').length,
      bw: images.filter(img => img.category === 'bw').length,
    },
  };

  await fs.writeFile(OUTPUT_FILE, JSON.stringify(output, null, 2));

  console.log('✅ Metadata generated successfully!\n');
  console.log(`📁 Output: ${OUTPUT_FILE}`);
  console.log(`📊 Total images: ${output.totalImages}`);
  console.log(`   • Color: ${output.categories.color}`);
  console.log(`   • B&W: ${output.categories.bw}`);
  console.log('');
  console.log('💡 Tip: You can manually edit public/data/images.json to add:');
  console.log('   • location (e.g., "Serengeti National Park, Tanzania")');
  console.log('   • story (behind-the-lens narrative)');
  console.log('   • timeOfDay (dawn/midday/dusk/night)');
}

// Run the script
generateMetadata().catch(error => {
  console.error('❌ Error generating metadata:', error);
  process.exit(1);
});
