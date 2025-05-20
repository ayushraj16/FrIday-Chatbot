# FrIday-Chatbot

# 🧠 FrIday – MultiLingo Chatbot

FrIday is a **multilingual AI chatbot** that allows users to type in any language and receive responses in the same language. It uses **Google Gemini (Generative AI)** under the hood to detect the input language and respond intelligently — all within a clean, responsive web interface.

---

## 🌍 Features

- 🧠 AI-powered responses using Gemini Pro
- 🌐 Language detection & auto-reply in the same language
- 💬 Clean chat UI with typing indicator and language tags
- 📱 Responsive design (mobile-friendly)
- 🌈 Supports many global languages (e.g., English, Hindi, Tamil, Spanish, Arabic, Japanese, etc.)

---

## 🚀 Demo

> Try it live: (http://localhost:3000/)
---

## 📁 Project Structure
FrIday/
├── public/
│ └── index.html # Main frontend HTML file
├── server.js # Express backend server
├── .env # Environment variables
├── package.json # Node.js project metadata
└── README.md # You’re here!

---

## 🧪 Tech Stack

| Frontend     | Backend     | AI Engine          |
|--------------|-------------|--------------------|
| HTML + CSS   | Node.js     | Google Generative AI (Gemini) |
| Vanilla JS   | Express.js  | gemini-pro / gemini-2.5-flash |

---

## 🔐 Environment Setup

Create a `.env` file in the root directory with the following:

```env
GOOGLE_API_KEY=your_google_generative_ai_key


git clone https://github.com/yourusername/friday-chatbot.git
cd friday-chatbot
npm install
node server.js
Access the chat app

Visit: http://localhost:3000

🧠 How It Works
User types a message in any language.

Message is sent to /api/chat endpoint.

Gemini detects the language.

A separate Gemini model generates a response in that same language.

The UI shows both the user message and the bot response with language tags.

🌐 Supported Languages (Sample)
English (en)

Hindi (hi)

Telugu (te)

Tamil (ta)

Kannada (kn)

Malayalam (ml)

Bengali (bn)

Punjabi (pa)

Gujarati (gu)

Spanish (es)

French (fr)

Chinese (zh)

Japanese (ja)

Arabic (ar)

Russian (ru)

📦 Dependencies
@google/generative-ai

express

dotenv

nodemon (for development, optional)

🔒 To-Do / Improvements
 Add voice input/output using Web Speech API

 Persist chat history using a database (e.g., MongoDB)

 Implement better error logging

 Deploy to Vercel + Railway

📄 License
MIT License

