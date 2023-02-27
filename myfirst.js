const sharp = require('sharp');

async function convertToAvatar(inputImage, outputImage) {
  try {
    const image = sharp(inputImage);
    const resizedImage = await image.resize({ width: 200, height: 200, fit: 'cover' });
    await resizedImage.toFile(outputImage);
    console.log(`Successfully converted ${inputImage} to avatar ${outputImage}`);
  } catch (error) {
    console.error(`Error converting image: ${error}`);
  }
}

convertToAvatar('input.jpg', 'output.jpg');
