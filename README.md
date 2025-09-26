# 🧳 AI Trip Planner

AI Trip Planner is a web app built with **Next.js 15**, **React 19**, and **Tailwind CSS 4**.  
It uses AI, Mapbox, and Clerk authentication to help users plan trips easily.

---

## 🚀 Features
- AI-powered trip planning (OpenAI)
- Interactive maps (Mapbox)
- Authentication (Clerk)
- Secure rate-limiting (Arcjet)
- Modern UI with Tailwind + Framer Motion

---

## ⚡ Quick Start

```bash
# 1. Clone repo
git clone https://github.com/akkiyash45/AI-Trip-Planner.git
cd AI-Trip-Planner

# 2. Install dependencies
npm install

# 3. Add environment variables in .env.local
ARCJET_KEY=your_arcjet_key
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
CLERK_SECRET_KEY=your_clerk_secret_key
OPENAI_API_KEY=your_openai_key
MAPBOX_ACCESS_TOKEN=your_mapbox_token

# 4. Run dev server
npm run dev
