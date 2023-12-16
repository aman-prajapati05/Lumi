const Tesseract = require('tesseract.js');
const axios = require('axios');

const imagePath = '/vite.svg';
const targetLanguage = 'fr'; // Change this to your desired target language code

// Function to perform OCR on the image
async function performOCR(imagePath) {
  const result = await Tesseract.recognize(
    imagePath,
    'eng', // Set the language code for English OCR
    {
      logger: (info) => console.log(info),
    }
  );

  return result.data.text;
}

// Function to translate the text using Hugging Face's MarianMT model
async function translateText(text, targetLanguage) {
  const translationEndpoint = 'https://api-inference.huggingface.co/models/transformers/marianmt';
  
  try {
    const response = await axios.post(
      translationEndpoint,
      {
        inputs: text,
        parameters: {
          target_language: targetLanguage,
        },
      },
      {
        headers: {
          'Authorization': 'Bearer YOUR_HUGGING_FACE_API_KEY', // Replace with your Hugging Face API key
        },
      }
    );

    return response.data;
  } catch (error) {
    console.error('Translation failed:', error.message);
    throw error;
  }
}

// Main function to perform image to text conversion and translation
async function imageToTextAndTranslate(imagePath, targetLanguage) {
  try {
    // Perform OCR on the image
    const textFromImage = await performOCR(imagePath);
    console.log('Text from image:', textFromImage);

    // Translate the text
    const translatedText = await translateText(textFromImage, targetLanguage);
    console.log(`Translated text (${targetLanguage}):`, translatedText);
  } catch (error) {
    console.error('Error:', error.message);
  }
}

// Call the main function
imageToTextAndTranslate(imagePath, targetLanguage);
