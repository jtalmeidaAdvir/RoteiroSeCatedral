# Tour Sé de Braga - Offline Cathedral Guide PWA

## Overview

Tour Sé de Braga is a Progressive Web App (PWA) designed to provide an offline-capable, guided tour experience of the Sé Cathedral in Braga, Portugal. The application features 8 guided tour stages, progress tracking, and a mobile-first design optimized for on-site tourism use. Built with React, TypeScript, and Express, the app leverages service workers for offline functionality and can be installed directly on mobile devices like a native app.

The application prioritizes offline-first operation, allowing tourists to navigate the cathedral without internet connectivity once installed.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

**Framework Stack**
- React 18 with TypeScript for type-safe component development
- Vite as the build tool and development server
- Wouter for lightweight client-side routing
- TanStack Query (React Query) for server state management
- Tailwind CSS for utility-first styling
- Radix UI component primitives for accessible UI components

**UI Component System**
- Shadcn/ui component library with "new-york" style variant
- Custom design system inspired by Airbnb and Google Travel interfaces
- Mobile-first responsive design with Tailwind breakpoints
- Dark/light theme support with CSS custom properties
- Inter font family from Google Fonts

**PWA Configuration**
- Service Worker for offline caching and asset management
- Web App Manifest for installability on mobile devices
- Cache-first strategy for static assets
- Viewport optimized for mobile devices with user-scalable disabled

**State Management**
- Local state using React hooks (useState, useEffect)
- Browser localStorage for theme persistence and tour progress
- Service Worker registration in main.tsx for PWA capabilities

### Backend Architecture

**Server Framework**
- Express.js HTTP server with TypeScript
- Development mode uses Vite middleware for HMR (Hot Module Replacement)
- Production mode serves pre-built static assets
- Custom logging middleware for API request tracking

**Storage Interface**
- Abstract IStorage interface for data operations
- In-memory storage implementation (MemStorage) as default
- Designed for future database integration via Drizzle ORM
- User schema defined with Drizzle and Zod validation

**Build Process**
- Client built with Vite to dist/public
- Server bundled with esbuild to ESM format
- Separate development and production configurations
- NODE_ENV environment variable controls build mode

### PWA & Offline Capabilities

**Service Worker Strategy**
- Cache name versioning: 'se-braga-tour-v1'
- Automatic cache cleanup on activation
- Cache-first with network fallback strategy
- Pre-caches critical assets: manifest, icons, index page
- Dynamic caching for successful GET requests

**Manifest Configuration**
- Standalone display mode for app-like experience
- Portrait-primary orientation lock
- Theme color: #8B4513 (brown, cathedral-themed)
- 192x192 and 512x512 icons with maskable support
- Portuguese (pt-PT) language and left-to-right text direction

**Offline Features**
- Complete tour content viewable without internet
- Progress tracking persisted locally
- Theme preferences saved in localStorage
- Visual offline indicator when connection unavailable

### Design System

**Typography**
- Primary font: Inter with weights 400, 500, 600, 700
- Scale: text-xs to text-4xl with responsive variants
- Line heights: 1.2-1.5 based on content type

**Spacing System**
- Tailwind spacing units: 2, 4, 8, 12, 16
- Container max-width: 7xl with horizontal padding
- Component internal spacing: p-4, gap-2 pattern
- Card padding: p-4 on mobile, p-6 on desktop

**Color System**
- CSS custom properties for theme variables
- Separate light/dark mode color definitions
- Semantic color naming: primary, secondary, muted, accent, destructive
- Background elevation layers: --elevate-1, --elevate-2

**Interaction Patterns**
- hover-elevate and active-elevate-2 utility classes
- Touch-friendly button sizing (min-h-9 default)
- Focus-visible rings for keyboard navigation
- Disabled states with reduced opacity

## External Dependencies

### UI & Styling Libraries
- **Radix UI**: Complete set of accessible UI primitives (accordion, dialog, dropdown, popover, etc.)
- **Tailwind CSS**: Utility-first CSS framework with PostCSS and Autoprefixer
- **class-variance-authority**: Type-safe variant management for components
- **clsx & tailwind-merge**: Conditional className utilities
- **Lucide React**: Icon library
- **cmdk**: Command palette component
- **embla-carousel-react**: Touch-friendly carousel component

### Data & Forms
- **TanStack React Query**: Server state management and caching
- **React Hook Form**: Form state management
- **@hookform/resolvers**: Validation resolvers for React Hook Form
- **Zod**: Schema validation library
- **drizzle-zod**: Zod schema generation from Drizzle schemas

### Database & ORM
- **Drizzle ORM**: TypeScript ORM configured for PostgreSQL
- **@neondatabase/serverless**: Serverless PostgreSQL driver (Neon-compatible)
- **drizzle-kit**: Migration and schema management tool
- Database schema defined in shared/schema.ts with user table

### Build & Development Tools
- **Vite**: Frontend build tool and dev server
- **@vitejs/plugin-react**: React plugin for Vite
- **esbuild**: JavaScript bundler for server code
- **tsx**: TypeScript execution for development
- **TypeScript**: Type system with strict mode enabled

### Replit-Specific Tools
- **@replit/vite-plugin-runtime-error-modal**: Development error overlay
- **@replit/vite-plugin-cartographer**: Project navigation tool (dev only)
- **@replit/vite-plugin-dev-banner**: Development mode banner (dev only)

### Session & Storage
- **express-session**: Session middleware (configured but not actively used)
- **connect-pg-simple**: PostgreSQL session store
- **nanoid**: Unique ID generation

### Date & Time
- **date-fns**: Date manipulation and formatting utilities

### Assets
- Generated images stored in attached_assets/generated_images/
- Cathedral imagery: exterior, interior, cloister, treasury views
- PNG format with descriptive filenames