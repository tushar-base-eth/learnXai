# Plan

A comprehensive plan tailored for the MVP:

## 1️⃣ Core Product Definition

### 🔹 Target Audience:
- Young Professionals & Students seeking practical skills in tech, business, or creative fields.

### 🔹 Learning Domain:
- Business Strategy, Coding Basics, or Soft Skills like communication.
- Start with one focused area (e.g., Business Strategy) for simplicity.

### 🔹 Learning Style:
- Multiple-Choice Questions (MCQs) with contextual feedback.
- Optional scenario-based text inputs for more interaction.

### 🔹 Personalization:
- Use basic rule-based personalization initially (e.g., beginner, intermediate, advanced).
- Adapt simulation difficulty based on user responses.

## 2️⃣ Feature Prioritization for MVP

### 🚀 MVP Core Features:
- ✅ **Interactive AI-Powered Simulations** – Users play through real-world scenarios and make choices.
- ✅ **AI-Driven Feedback & Reactions** – AI reacts to their choices dynamically (not static responses).
- ✅ **Simple Progress Tracking** – Show users how they’re improving (e.g., completion %).
- ✅ **Basic Gamification (XP & Achievements)** – Small dopamine boosts to keep users engaged.
- ✅ **Minimal Personalization (Pick a Learning Goal)** – Let users select a goal, and AI adapts the experience slightly.
- ✅ **Responsive UI & Beautiful UX** – Must look and feel premium from day one, as an immersive, game-like experience rather than just a course platform.
- ✅ **Simplify AI**: start with simpler AI systems for feedback: Initially, opt for rule-based AI feedback systems to simplify development and ensure reliability.

### ⚡ Features for Later Versions:

#### 🔥 More Gamification Features:
- Streaks & Leaderboards – Daily streaks, top learners leaderboard.
- AI Rival Mode – Compete against an AI that learns from your mistakes.
- Team-Based Challenges – Learn together with others.

#### 🔥 More Advanced AI & Personalization:
- AI-Generated Learning Paths – Fully dynamic, personalized course roadmap.
- Adaptive Difficulty – AI adjusts complexity based on user skills.

#### 🔥 More Social & Community Features:
- User-to-User Challenges – Compete in learning games with friends.
- Live Simulations – Real-time, multiplayer decision-making.
- Discussion Forums – Learn from others’ experiences.

#### 🔥 Expanded Simulation Types:
- Role-Playing Mode – Users create avatars and play in career-based RPG-style simulations.
- Industry-Specific Simulations – Focused experiences for business, tech, marketing, etc.

## 3️⃣ AI & Simulation Logic

### 🔹 AI Model:
- Use OpenRouter API for generating feedback and suggestions.
- Simple rule-based logic for branching scenarios.

### 🔹 Simulation Flow:
- Start with linear scenarios that branch into 2-3 options.
- Provide immediate feedback after each choice.

### 🔹 Feedback System:
- Display positive reinforcement (“Great choice!”) or constructive feedback (“Consider this approach…”).
- Offer resource links or additional reading suggestions.

### 🔹 Content Quality:
- Ensure each simulation not only entertains but educates deeply. Quality over quantity in scenario development.

## 4️⃣ UI/UX Details

### 🔹 Wireframe/Mockup:
- Use a clean, minimalist design with Tailwind CSS and ShadCN/UI.
- Focus on ease of navigation with clear buttons and prompts.

### 🔹 Design Tone:
- Casual but friendly and playful; use calming colors like blues and greens.

### 🔹 Features:
- Responsive design for mobile, tablet, and desktop.
- Light mode as default, dark mode as optional (add later).

## 5️⃣ Tech & Deployment

### 🔹 Refer [techstack.md](#techstackmd) for more details.

### 🔹 Supabase Setup:
- Tables for Users, Simulations, User Progress, Feedback Logs.
- Real-time listeners for progress updates.

### 🔹 Authentication Methods:
- Email/Password and Google OAuth.
- Optional GitHub OAuth for tech-focused users.

### 🔹 Storage Needs:
- Store user-generated content (e.g., notes) and badges.
- Use Unsplash links for stock images (no file uploads in MVP).

### 🔹 Hosting Domain:
- Deploy on Vercel with a custom domain like LearnX.ai (if available).

## 6️⃣ Success Metrics & Testing

### 🔹 Success Metrics:
- User Retention Rate → % of users returning for more simulations.
- Average Session Duration → Time spent per session.
- Simulation Completion Rate → % of users completing simulations.

### 🔹 User Feedback:
- Simple in-app feedback form after each simulation.
- Basic Google Analytics for tracking user behavior.

### 🔹 Analytics:
- Monitor not only engagement metrics but also learning outcomes to assess educational effectiveness.

### 🔹 Beta Testing:
- Go public right away.

## Design Consideration

Adding more simulations should be super easy. Here’s how we can make it scalable and flexible from the start.

### 🔥 How to Make Adding Simulations Easy

1️⃣ **Store Simulations in a Database**
   - Use Supabase (PostgreSQL) to store simulation scenarios.
   - Create a “Simulations” table with:
     - `id`: unique identifier
     - `title`: name of the simulation
     - `description`: short intro
     - `scenario`: JSON object with choices & outcomes
     - `difficulty`: beginner, intermediate, advanced
     - `category`: e.g., business, tech, soft skills
     - `ai_prompt`: base prompt for AI feedback
     - `created_at`: timestamp

2️⃣ **JSON-Based Scenario Logic**
   - Define simulations as JSON objects, so new ones can be added dynamically.
   - Example of a simple scenario:

```json
{
  "id": 1,
  "title": "Startup Crisis",
  "description": "Your startup is running out of funds. What do you do?",
  "choices": [
    { "option": "Seek investors", "next": 2 },
    { "option": "Cut expenses", "next": 3 },
    { "option": "Do nothing", "next": "fail" }
  ]
}
```

This allows adding new simulations without coding—just updating the database!

3️⃣ AI-Driven Feedback for Dynamic Learning

Use OpenRouter API to generate custom feedback based on user actions.

Example AI prompt:

Copy
User is in a startup crisis. They chose to seek investors.
Provide feedback explaining the risks and benefits of this choice.
This keeps the content fresh & interactive without writing static responses.

4️⃣ Admin Panel for Easy Simulation Management (Later Feature)

A simple admin dashboard (Next.js + Supabase) where you can:

✅ Add new simulations without touching code

✅ Edit existing scenarios dynamically

✅ Track simulation engagement

🚀 Result: Scalable & Dynamic Simulations
✅ Easily add new simulations via database updates

✅ No hardcoding needed—just insert new data

✅ AI handles dynamic responses, reducing manual content creation

✅ Smooth user experience, as simulations can be personalized