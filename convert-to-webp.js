// convert-to-webp.js
const fs = require("fs");
const path = require("path");
const sharp = require("sharp");

const inputDir = path.join(__dirname, "src", "assets");
const outputDir = path.join(__dirname, "src", "assets-webp");

const supportedExtensions = [".jpg", ".jpeg", ".png", ".svg"];

function ensureDirSync(dirPath) {
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true });
  }
}

function convertImage(inputPath, outputPath, ext) {
  const image = sharp(inputPath);

  if (ext === ".svg") {
    // SVGs need dimensions to rasterize
    image.resize(200, 200);
  }

  image
    .webp({ quality: 80 })
    .toFile(outputPath)
    .then(() => {
      console.log("✅ Converted:", outputPath);
    })
    .catch((err) => {
      console.error("❌ Error converting", inputPath, err);
    });
}

function walkAndConvert(currentPath, basePath = inputDir) {
  fs.readdirSync(currentPath).forEach((file) => {
    const fullPath = path.join(currentPath, file);
    const stat = fs.statSync(fullPath);

    if (stat.isDirectory()) {
      walkAndConvert(fullPath, basePath);
    } else {
      const ext = path.extname(file).toLowerCase();
      if (supportedExtensions.includes(ext)) {
        const relative = path.relative(basePath, fullPath);
        const newFileName = relative.replace(ext, ".webp");
        const outputPath = path.join(outputDir, newFileName);

        ensureDirSync(path.dirname(outputPath));
        convertImage(fullPath, outputPath, ext);
      }
    }
  });
}

ensureDirSync(outputDir);
walkAndConvert(inputDir);
