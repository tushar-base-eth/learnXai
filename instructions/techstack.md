
---

### [techstack.md](#techstackmd)

```markdown
# TechStack

## 🖥 Frontend (User Interface)

- ✅ **Next.js v14.1.0** – Fast, SEO-friendly, and has built-in routing.
- ✅ **React v18.2.0** – For building reusable UI components.
- ✅ **Tailwind CSS v3.4.1** – For easy and beautiful styling without writing much CSS.
- ✅ **ShadCN/UI v0.8.0** – Pre-styled modern components (buttons, cards, modals).
- ✅ **TypeScript v5.3.3** – For type-safe development.
- ✅ **ESLint v8.56.0** – For code quality and consistency.
- ✅ **PostCSS v8.4.33** – For modern CSS processing.
- ✅ **Responsive design** for all devices.

> Note: All packages are maintained at their latest stable versions with guaranteed compatibility between dependencies.

For all UI designs, have them be beautiful, not cookie cutter. Make webpages that are fully featured and worthy for production. Do not install other packages for UI themes, icons, etc unless absolutely necessary or I request them. Use stock photos from Unsplash where appropriate, only valid URLs you know exist. Do not download the images, only link to them in image tags.

## 🛠 Supabase as Backend + Database

- ✅ **Database (PostgreSQL-based)** – Store and retrieve data easily.
- ✅ **Authentication** – User sign-up, login, OAuth (Google, GitHub, etc.).
- ✅ **APIs (Auto-generated)** – REST & GraphQL APIs for data fetching.
- ✅ **Realtime Database** – Listen for live updates without extra setup.
- ✅ **File Storage** – Upload images, PDFs, or any files.
- ✅ **Edge Functions (Serverless Backend)** – Write backend logic like an API.

## 🚀 Deployment (Make Your Web App Live)

- ✅ **Vercel** – Best for deploying Next.js apps, super easy.

## 🔹 How My Web App Will Work?

1️⃣ **Frontend** → Built with Next.js + Tailwind CSS.
2️⃣ **Backend** → Supabase auto-generates APIs for database operations.
3️⃣ **Database** → Supabase uses PostgreSQL (powerful & scalable).
4️⃣ **Authentication** → Supabase handles user login & security.
5️⃣ **Deployment** → Vercel for frontend + Supabase for backend.

✅ Just connect Next.js to Supabase, and you're ready to build!

## 🔒 Type Safety & Development Tools

- ✅ **Database Types** 
  - Purpose: Ensure type safety between database and application
  - Tools: 
    - Supabase CLI for type generation
    - Custom type definitions for all database tables
    - Why: Prevents runtime errors and provides better IDE support

- ✅ **Next.js App Structure**
  - Required files:
    - layout.tsx with proper metadata
    - page.tsx for each route
    - providers for global state/context
  - Why: Ensures proper app structure and SEO optimization

- ✅ **State Management**
  - Auth state handling
  - Real-time database subscriptions
  - Global context providers
  - Why: Maintains consistent application state and user session

## 🔍 Development Best Practices

- ✅ **Type Definitions**
  - Create complete type definitions for all database tables
  - Include Row, Insert, and Update types for each table
  - Define shared types in dedicated /types directory
  - Why: Prevents type errors and improves code maintainability

- ✅ **Context Setup**
  - Proper provider structure
  - Type-safe context creation
  - Error boundaries and fallbacks
  - Why: Ensures reliable state management across components

## 🏗 Project Structure & Types

- ✅ **Type Definitions**
  - Location: `/types/supabase.ts`
  - Custom JSON type definition
  - Complete database schema types
  - Why: Essential for type safety with Supabase

- ✅ **Provider Setup**
  - Location: `/components/providers/`
  - Auth state management
  - Global context providers
  - Why: Centralized state management

- ✅ **Project Configuration**
  - tsconfig.json with proper path aliases
  - Proper file structure for Next.js
  - Why: Ensures correct module resolution

## 🚀 Development Prerequisites

- ✅ **Required Files**
  - Database types (`/types/supabase.ts`)
  - Auth provider (`/components/providers/supabase-provider.tsx`)
  - Global styles (`/styles/globals.css`)
  - Why: These files must be created before starting feature development