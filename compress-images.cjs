#!/usr/bin/env node

const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const inputDir = path.join(__dirname, 'src', 'assets', 'images');
const outputDir = path.join(__dirname, 'src', 'assets', 'images', 'compressed');

// Create output directory if it doesn't exist
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

async function compressImage(inputPath, outputPath) {
  try {
    const stats = fs.statSync(inputPath);
    const inputSizeKB = Math.round(stats.size / 1024);
    
    await sharp(inputPath)
      .rotate() // Auto-rotate based on EXIF, then remove EXIF to prevent double rotation
      .jpeg({
        quality: 70, // Reduce quality for mobile
        progressive: true,
        mozjpeg: true
      })
      .resize(800, 1200, {
        fit: 'inside',
        withoutEnlargement: true
      })
      .withMetadata(false) // Remove EXIF data to prevent rotation issues
      .toFile(outputPath);
    
    const outputStats = fs.statSync(outputPath);
    const outputSizeKB = Math.round(outputStats.size / 1024);
    const compressionRatio = Math.round((1 - outputSizeKB / inputSizeKB) * 100);
    
    console.log(`✓ ${path.basename(inputPath)}: ${inputSizeKB}KB → ${outputSizeKB}KB (${compressionRatio}% reduction)`);
  } catch (error) {
    console.error(`✗ Error compressing ${path.basename(inputPath)}:`, error.message);
  }
}

async function compressAllImages() {
  const files = fs.readdirSync(inputDir);
  const imageFiles = files.filter(file => /\.(jpg|jpeg|png)$/i.test(file));
  
  console.log(`🗜️  Compressing ${imageFiles.length} images...`);
  
  for (const file of imageFiles) {
    const inputPath = path.join(inputDir, file);
    const outputPath = path.join(outputDir, file);
    await compressImage(inputPath, outputPath);
  }
  
  console.log('✨ Image compression complete!');
  console.log(`📁 Compressed images saved to: ${outputDir}`);
}

compressAllImages().catch(console.error);
