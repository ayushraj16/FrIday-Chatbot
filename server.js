// Multilingual Chatbot using Google AI Studio API
// This code demonstrates how to build a chatbot that can detect languages and respond in kind

const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');
const dotenv = require('dotenv');
const { GoogleGenerativeAI } = require('@google/generative-ai');

// Load environment variables
dotenv.config();

// Set up Express
const app = express();
app.use(express.static('public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Initialize Google AI
const genAI = new GoogleGenerativeAI(process.env.GOOGLE_AI_API_KEY);

// Language detection function using Google AI
async function detectLanguage(text) {
  try {
    const model = genAI.getGenerativeModel({ model: "gemini-pro" });
    const prompt = `Detect the language of the following text and return ONLY the ISO language code (like 'en', 'hi', 'ta', etc). Text: "${text}"`;
    
    const result = await model.generateContent(prompt);
    const response = await result.response;
    return response.text().trim();
  } catch (error) {
    console.error('Language detection error:', error);
    return 'en'; // Default to English on error
  }
}

// Process user message and generate response in the same language
async function processMessage(message, languageCode) {
  try {
    const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash-preview-05-20" });
    
    // Use detected language code to inform the model about response language
    const prompt = `You are a helpful assistant. The user is writing in ${languageCode} language. 
    Please respond to the following message in the same language (${languageCode}): "${message}"`;
    
    const result = await model.generateContent(prompt);
    const response = await result.response;
    return response.text();
  } catch (error) {
    console.error('Error generating response:', error);
    return 'An error occurred while generating a response. Please try again.';
  }
}

// API endpoint for chat
app.post('/api/chat', async (req, res) => {
  try {
    const userMessage = req.body.message;
    
    // Detect language of user message
    const languageCode = await detectLanguage(userMessage);
    
    // Process message and get response in the same language
    const response = await processMessage(userMessage, languageCode);
    
    res.json({
      response: response,
      detectedLanguage: languageCode
    });
  } catch (error) {
    console.error('Chat API error:', error);
    res.status(500).json({
      response: 'Sorry, an error occurred. Please try again.',
      detectedLanguage: 'en'
    });
  }
});

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`FrIday chatbot server running on port ${PORT}`);
});