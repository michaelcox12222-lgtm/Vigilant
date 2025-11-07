# Vigilant Landing Page

> Real-time safety intelligence for your entire workforce.

A modern, responsive landing page for **Vigilant** - a safety intelligence platform that delivers command center intelligence directly to every employee's pocket.

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ or later
- npm, pnpm, or yarn

### Installation

```bash
# Install dependencies
npm install
# or
pnpm install

# Start development server
npm run dev
# or
pnpm dev
```

The app will be available at `http://localhost:3000`

### Build for Production

```bash
npm run build
npm run start
```

## 📋 Project Status

✅ **Fully Refactored & Ready for Development**

This project was auto-generated from Figma and has been completely refactored for production use:

- ✅ All TypeScript errors fixed (69 → 0)
- ✅ Proper React imports added
- ✅ Asset management configured
- ✅ TypeScript configuration added
- ✅ Clean code structure
- ✅ Type-safe components

See `REFACTORING_SUMMARY.md` for detailed changes.

## 🛠️ Tech Stack

- **React 18.3.1** - UI Framework
- **TypeScript 5.5.3** - Type Safety
- **Vite 6.3.5** - Build Tool & Dev Server
- **TailwindCSS** - Styling
- **shadcn/ui** - Component Library (Radix UI)
- **Lucide React** - Icons
- **Sonner** - Toast Notifications

## 📁 Project Structure

```
vigilant-landing-page/
├── src/
│   ├── assets/          # Images and static files
│   ├── components/      # React components
│   │   ├── ui/         # shadcn/ui components
│   │   ├── figma/      # Figma-specific utilities
│   │   └── *.tsx       # Page & section components
│   ├── styles/         # Global styles
│   ├── types/          # TypeScript declarations
│   ├── App.tsx         # Main app component
│   └── main.tsx        # Entry point
├── public/             # Static assets
├── tsconfig.json       # TypeScript configuration
├── vite.config.ts      # Vite configuration
└── package.json        # Dependencies
```

## 🎨 Design System

- **Primary Color**: Teal Green `#1a9d8f`
- **Theme**: Dark mode with glassmorphism effects
- **Typography**: Work Sans (headings), Inter (body)
- **Style**: Modern, tech-focused with animated elements

## 📄 Pages

- **Home** - Hero, Problems, Benefits, How It Works, Testimonials, FAQ
- **About** - Company story, mission, leadership team
- **Features** - Detailed feature showcase with images
- **Pricing** - Pricing plans and comparison
- **Beta** - Beta tester signup form
- **Contact** - Contact form
- **Terms & Privacy** - Legal pages

## 🎯 Key Features

- ✨ Animated bokeh background
- ✨ Animated tech lines with data flow
- ✨ Glassmorphism UI effects
- ✨ Fully responsive design
- ✨ Smooth page transitions
- ✨ Modern card-based layouts
- ✨ Interactive FAQ accordion
- ✨ Form validation and toasts

## 🔧 Development

### Scripts

```bash
# Development
npm run dev       # Start dev server

# Production
npm run build     # Build for production
npm run start     # Preview production build
```

### Linting

TypeScript strict mode is enabled. The project uses:

- ESLint (via Vite)
- TypeScript compiler for type checking

## 📝 Configuration

### Environment Variables

Create a `.env` file if needed for API endpoints:

```env
VITE_API_URL=https://api.example.com
```

### Asset Management

Figma assets are mapped via Vite aliases in `vite.config.ts`. Update paths as needed for custom images.

## 🤝 Contributing

This is a private commercial project. For questions or issues, contact the development team.

## 📄 License

Proprietary - All rights reserved by Vigilant

## 🔗 Links

- **Figma Design**: https://www.figma.com/design/We1WcU6zmEf4wVqtFOAu34/Vigilant-Landing-Page-Design
- **Demo Video**: https://www.loom.com/share/b897560895234780b53e1319c053104e

---

**Built with ❤️ by the Vigilant Team**
