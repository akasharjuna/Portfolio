# Modern Antigravity Portfolio

A modern, dynamic, and professional personal portfolio website designed for an IT student with skills in Software Development and Cybersecurity. This portfolio features a highly polished **Antigravity** aesthetic with glassmorphism, interactive particles, and deep space glows.

## 🌟 Key Features
- **Antigravity UI & Glassmorphism:** Sleek frosted glass components (`.glass`) that float seamlessly over a dark, glowing background.
- **Interactive Snowflakes:** A continuous, reactive snowfall effect built with `tsparticles` that smoothly repulses away from your cursor.
- **Cinematic Glows:** Slowly pulsing aurora/deep space background gradients.
- **Dynamic Projects:** GitHub API integration ready, with categorical filtering and modal popups.
- **Fully Responsive:** Tailored for mobile, tablet, and desktop views.
- **Contact Form Validation:** Client-side validation for seamless communication.

## 🛠️ Tech Stack
- React.js (Vite)
- Tailwind CSS
- Framer Motion (for modal popups, scroll reveals, and micro-animations)
- React Icons
- Typewriter-effect
- tsparticles (for interactive particles)

## 🚀 Getting Started

1. **Install Dependencies:**
   Make sure you have Node.js (v20+) installed. Open the terminal in the project directory and run:
   ```bash
   npm install
   ```

2. **Run the Development Server:**
   ```bash
   npm run dev
   ```
   *Your portfolio will securely host on `http://localhost:5173`.*

3. **Build for Production:**
   ```bash
   npm run build
   ```

## ⚙️ Customization Guide
- **Resume:** Place your resume PDF in the `public` folder and name it `resume.pdf`.
- **Projects/Experience:** Edit the static arrays in `src/components/Projects.jsx` and `src/components/Experience.jsx`.
- **GitHub Integration:** Update the mocked username `octocat` in `Projects.jsx` to your own GitHub username.
- **Particles:** You can modify the snowflake behavior (speed, density, interactivity) in `src/components/BackgroundParticles.jsx`.
