# 🥜 Fralon Peanuts – Frontend

A responsive and user-friendly frontend for **Fralon Peanuts**, a small family-run business selling peanut butter and groundnut-based products.

This web application allows users to browse products, log in or sign up, manage their cart, and place orders. Built with a scalable frontend architecture and mobile-first UI.

---

## 🚀 Live Demo

🌐 [Visit the site](https://fralon-peanuts.netlify.app)

---

## 🧰 Tech Stack

- **React (Vite)**
- **TypeScript**
- **Tailwind CSS**
- **TanStack Query**
- **React Router**
- **Framer Motion**

---

## 🔧 Features

- 🛍 Product listing with filtering
- 🔐 Authentication and protected routes
- 🛒 Add-to-cart and checkout flow
- 📱 Responsive design
- ♻️ Optimistic UI updates using TanStack Query
- 🧱 Modular file and component structure

---

## 📁 Folder Structure

```bash
src/
├── api/           # API functions
├── services/      # Data logic (fetching, caching)
├── hooks/         # Custom hooks intergrated with tanstack query hooks (e.g., useCart)
├── pages/    # Page-level components
├── types/    # Global types
├── utils/    # Helper functions
├── layouts/    # Layout screens (e.g., AuthLayout)
├── lib/    # Libraries configurations
├── components/    # Reusable UI components
├── assets/        # Images, icons & static assets
├── routes/        # App routing
└── main.tsx       # Entry point

🏁 Getting Started

1. Clone the repo
git clone https://github.com/alphy1027/fralon-peanuts-app.git
cd fralon-peanuts-app

2. Install dependencies
npm install

3. Set up environment variables
Create a .env file in the root:
VITE_API_URL=https://your-backend-url.com/api

4. Start the development server
npm run dev

The app will be running at http://localhost:5173
