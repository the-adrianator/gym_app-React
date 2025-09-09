# Gymanji — Fitness Landing Page

A modern, responsive gym/fitness landing page built with React and Tailwind CSS. It showcases a brand hero, program highlights, pricing tiers, testimonials slider, FAQ accordion, and a conversion-focused join section. Smooth scroll animations and a mobile-first header deliver a polished UX across devices.

## Features
- **Responsive layout**: Mobile‑first design with fluid scaling up to 1440px
- **Animated sections**: AOS fade/slide animations on scroll
- **Workouts/programs**: Visual grid and sliders for training categories
- **Pricing plans**: Tiered cards with feature lists and CTA
- **Community/testimonials**: Image-backed quotes in a carousel
- **FAQ accordion**: Common questions with collapsible answers
- **Accessible navigation**: Desktop nav and mobile menu with toggle

## Tech Stack
- **React 18** (Create React App)
- **Tailwind CSS 3** (with PostCSS and Autoprefixer)
- **AOS** (Animate On Scroll)
- **Swiper** (carousel/slider)
- **React Icons**
- **Testing Library** (Jest DOM, React, User Event)
- **Web Vitals**

## Getting Started
### Prerequisites
- Node.js 16+ and npm

### Installation
```bash
npm install
```

### Development
```bash
npm start
```
Starts the app in development mode at `http://localhost:3000`.

### Production Build
```bash
npm run build
```
Creates an optimized production build in the `build` directory.

## Project Structure (high-level)
```
src/
  App.js                # Page composition + AOS init
  index.js, index.css   # App bootstrap and global styles (Tailwind)
  data.js               # Centralized content (logo, copy, plans, faq, etc.)
  components/           # UI sections and widgets (Header, Banner, Workouts, ...)
  assets/               # Images and icons
```

## Customization
- **Branding & copy**: Update text, images, and links in `src/data.js`.
- **Theme**: Adjust Tailwind config in `tailwind.config.js` and global styles in `src/index.css`.
- **Components**: Edit or extend sections in `src/components/`.

## Available Scripts
- `npm start` — run the development server
- `npm run build` — create a production build
- `npm test` — run tests (if/when added)
- `npm run eject` — CRA eject (irreversible)

## Notes
- Images and icons included are for demo purposes.
- Animations are configured in `App.js` via `Aos.init({ duration, delay })`.

---
Made with ❤️ for modern fitness brands.
