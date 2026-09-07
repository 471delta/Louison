# Louison

A modern, responsive web application built with Next.js and Tailwind CSS.

## Getting Started

### Prerequisites
- Node.js 18+
- npm or yarn

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
├── app/              # Next.js app directory
│   ├── page.js       # Home page
│   ├── layout.js     # Root layout
│   └── globals.css   # Global styles
├── components/       # React components
│   ├── Nav.jsx
│   ├── Hero.jsx
│   ├── About.jsx
│   ├── Marquee.jsx
│   ├── RevealOnScroll.jsx
│   └── Footer.jsx
├── public/           # Static assets
├── package.json      # Dependencies
└── README.md         # This file
```

## Features

- Server-side rendering with Next.js
- Tailwind CSS for styling
- Responsive design
- Smooth scroll animations
- Modern component architecture

## Deployment

The application is ready to deploy on platforms like Vercel, Netlify, or any Node.js hosting service.

### Deploy on Vercel

1. Push your code to GitHub
2. Import your repository in Vercel
3. Vercel will auto-detect Next.js and configure build settings
4. Deploy with one click

## License

MIT
