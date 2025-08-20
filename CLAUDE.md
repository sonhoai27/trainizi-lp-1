# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a React-based landing page for Trainizi, an AI-powered educational platform. The project uses Vite as the build tool, React 18, and Tailwind CSS for styling.

## Development Commands

- `npm run dev` or `yarn dev` - Start development server with hot reload on localhost:5173
- `npm run build` or `yarn build` - Build for production
- `npm run preview` or `yarn preview` - Preview production build locally

## Architecture

### Component Structure
The application follows a standard React component-based architecture:

- `src/App.jsx` - Main application component that composes the entire landing page
- `src/main.jsx` - React entry point with StrictMode wrapper
- `src/components/` - Reusable UI components:
  - `Header.jsx` - Navigation header with responsive mobile menu
  - `Hero.jsx` - Main hero section with call-to-action
  - `Features.jsx` - Product features showcase
  - `Media.jsx` - Media/testimonials section
  - `CTA.jsx` - Call-to-action section
  - `Footer.jsx` - Site footer

### Styling System
- Uses Tailwind CSS for utility-first styling
- Custom color scheme with `izi-` prefixed colors (izi-50, izi-100, izi-200, izi-800)
- Responsive design with mobile-first approach
- Inter font family from Google Fonts

### Build Configuration
- Vite configured for E2B compatibility with specific host settings
- Server runs on host `0.0.0.0:5173` with HMR disabled for sandbox environments
- Tailwind configured to scan HTML and JSX files in src directory

## Key Design Patterns

- Functional components with React hooks (useState for state management)
- Component-based architecture with clear separation of concerns
- Each section of the landing page is a separate component
- Responsive design using Tailwind's utility classes
- Sticky header with backdrop blur effect