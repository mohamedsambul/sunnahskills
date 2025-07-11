# Sunnah Skills Youth Programs Application

## Overview

This is a full-stack web application for Sunnah Skills, a youth martial arts and outdoor education program. The application serves as a marketing website with registration capabilities, built using React with TypeScript on the frontend and Express.js on the backend, with PostgreSQL for data persistence.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite for fast development and optimized builds
- **Routing**: Wouter for lightweight client-side routing
- **State Management**: TanStack Query (React Query) for server state management
- **Styling**: Tailwind CSS with custom design system
- **UI Components**: Radix UI primitives with shadcn/ui component library
- **Forms**: React Hook Form with Zod validation

### Backend Architecture
- **Framework**: Express.js with TypeScript
- **Database**: PostgreSQL with Drizzle ORM
- **Database Provider**: Neon serverless PostgreSQL
- **Validation**: Zod schemas shared between frontend and backend
- **Session Management**: Express sessions with PostgreSQL store
- **Development**: Hot reloading with custom Vite integration

## Key Components

### Frontend Structure
- **Pages**: Home, Programs, Schedule, Registration, Testimonials, Contact
- **Components**: Reusable UI components using shadcn/ui
- **Navigation**: Responsive navigation with mobile menu
- **Forms**: Registration and contact forms with validation
- **Styling**: Custom color scheme with earth tones (green, brown, beige)

### Backend Structure
- **API Routes**: RESTful endpoints for registrations and contacts
- **Storage Layer**: Abstracted storage interface with in-memory fallback
- **Database Schema**: Two main tables (registrations, contacts)
- **Error Handling**: Centralized error handling with proper HTTP status codes
- **Development Tools**: Request logging and error overlay

### Database Schema
- **Registrations Table**: Stores program registration data including child info, parent contact, program selection, and waiver acceptance
- **Contacts Table**: Stores general contact form submissions with name, email, subject, and message

## Data Flow

1. **User Registration Flow**:
   - User fills out registration form on frontend
   - Form data validated using Zod schemas
   - Data sent to `/api/registrations` endpoint
   - Backend validates and stores in database
   - Success/error response sent back to frontend

2. **Contact Form Flow**:
   - User submits contact form
   - Similar validation and API flow as registration
   - Data stored in contacts table

3. **Data Persistence**:
   - Production uses PostgreSQL via Neon
   - Development can fall back to in-memory storage
   - Drizzle ORM handles database operations

## External Dependencies

### Frontend Dependencies
- **React Ecosystem**: React, React DOM, React Hook Form
- **UI Libraries**: Radix UI components, Lucide React icons
- **State Management**: TanStack Query for API state
- **Styling**: Tailwind CSS, class-variance-authority for component variants
- **Validation**: Zod for schema validation
- **Date Handling**: date-fns for date operations

### Backend Dependencies
- **Server**: Express.js with TypeScript support
- **Database**: Drizzle ORM with PostgreSQL dialect
- **Session**: connect-pg-simple for PostgreSQL session store
- **Validation**: Zod for request validation
- **Development**: tsx for TypeScript execution

### Development Tools
- **Build**: Vite with React plugin
- **Database**: Drizzle Kit for migrations and schema management
- **TypeScript**: Strict configuration with path mapping
- **Replit Integration**: Custom plugins for development environment

## Deployment Strategy

### Build Process
1. **Frontend Build**: Vite builds React app to `dist/public`
2. **Backend Build**: esbuild bundles server code to `dist/index.js`
3. **Database**: Drizzle migrations applied via `db:push` command

### Environment Configuration
- **Database**: PostgreSQL connection via `DATABASE_URL` environment variable
- **Development**: Hot reloading with Vite middleware
- **Production**: Serves static files and API routes from Express server

### File Structure
- **Client**: React application in `client/` directory
- **Server**: Express API in `server/` directory  
- **Shared**: Common schemas and types in `shared/` directory
- **Configuration**: Build tools and database config in root

The application follows a monorepo structure with clear separation between frontend, backend, and shared code, making it easy to maintain and deploy as a single unit while keeping concerns separated.