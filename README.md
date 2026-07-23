# 🚀 PromptPilot AI

### AI Copilot for Better Prompts

PromptPilot AI is an AI-powered web application that helps students, developers, writers, and content creators create better prompts for AI models. It analyzes prompts, improves them, provides personalized feedback, and teaches prompt engineering through an AI Tutor.

---

# 📌 Problem Statement

Many people struggle to write clear and effective prompts for AI tools, resulting in poor responses and wasted time.

PromptPilot AI solves this problem by helping users evaluate, improve, and learn prompt engineering using Google's Gemini AI.

---

# 🌍 Live Demo

https://promptpilot-ai-y9kj.vercel.app

---

# 💻 GitHub Repository

https://github.com/Sidra-khan-906/Promptpilot-ai

---

# ✨ Features

- Modern Landing Page
- User Authentication (Login & Signup)
- Interactive Dashboard
- AI Prompt Doctor
- Prompt Quality Scoring
- Prompt Diagnosis
- AI Prompt Optimization
- Personalized Improvement Tips
- AI Tutor
- Prompt Library
- Analytics Dashboard
- User Profile
- Settings
- Responsive Design

---

# 🤖 AI Features

## 1. Prompt Doctor

Prompt Doctor analyzes a user's prompt and provides:

- Prompt Quality Score
- Diagnosis of weaknesses
- Optimized Prompt
- Actionable Improvement Tips

### Prompt Doctor Instructions

```text
You are Prompt Doctor AI.

Analyze the following prompt.

Return ONLY valid JSON in this format:

{
  "score": 0,
  "diagnosis": [],
  "optimizedPrompt": "",
  "tips": []
}
```

---

## 2. AI Tutor

AI Tutor helps users understand prompt engineering by answering their questions in simple language.

### AI Tutor Instructions

```text
You are an AI Tutor.

Explain the answer clearly for a student.
```

---

# 🛠 Technologies Used

### Frontend

- Next.js 16
- React 19
- TypeScript
- Tailwind CSS

### AI

- Google Gemini API
- Gemini Flash Model

### Deployment

- Vercel

### Version Control

- GitHub

---

# 📸 Screenshots

## Landing Page

![Landing Page](screenshots/Screenshot%202026-07-22%20202810.png)

## Login Page

![Login Page](screenshots/Screenshot%202026-07-22%20202601.png)

## Dashboard

![Dashboard](screenshots/Screenshot%202026-07-22%20202534.png)

## Prompt Library

![Prompt Library](screenshots/Screenshot%202026-07-22%20202623.png)

## Prompt Doctor

![Prompt Doctor](screenshots/Screenshot%202026-07-23%20193339.png)

---

# 🚀 Running the Project

Clone the repository

```bash
git clone https://github.com/Sidra-khan-906/Promptpilot-ai.git
```

Install dependencies

```bash
npm install
```

Create a `.env.local` file

```env
GEMINI_API_KEY=YOUR_API_KEY
```

Run the development server

```bash
npm run dev
```

Open:

```
http://localhost:3000
```

---

# 📂 Project Structure

```
app/
components/
lib/
public/
```

---

# 🔒 Environment Variables

| Variable | Description |
|----------|-------------|
| GEMINI_API_KEY | Google Gemini API Key |

---

# 👩‍💻 Author

**Sidra Khan**

---

# 📄 License

This project was developed as an individual educational project for the ACT AI Final Project.
