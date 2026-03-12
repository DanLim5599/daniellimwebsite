# Design Document: Daniel Lim Portfolio Website

## Overview

A professional portfolio website for Daniel Lim, showcasing experience, projects, skills, and a downloadable resume. The site serves as a central hub for recruiters and professional contacts.

## Tech Stack Rationale

### Next.js 14 with App Router

Next.js was chosen over plain React because it provides built in routing, SEO metadata management, font optimization, and static export all in one framework. The App Router (over Pages Router) gives us React Server Components by default, though this project uses client components for interactivity. The static export capability (`output: 'export'`) means we get all the developer experience benefits of Next.js without needing a Node.js server in production.

### TypeScript

TypeScript adds compile time type safety that catches errors before they reach production. For a portfolio site that will be maintained over time, having typed component props and data structures prevents regressions when updating content.

### Tailwind CSS

Tailwind was chosen over CSS Modules or styled components because it keeps styles colocated with markup, eliminates the need for naming conventions, and produces a small CSS bundle through automatic purging of unused styles. For a single page site with many sections, utility classes keep the codebase concise without creating a separate stylesheet per component.

### Firebase Hosting

Firebase Hosting serves pre built static files from a global CDN with automatic SSL. It was chosen over alternatives because Daniel already uses Firebase for other projects (Productivity Calendar), making deployment and domain management consistent across projects. The free tier is sufficient for portfolio traffic.

### Browser Native PDF Viewer

The resume is displayed using a simple `<iframe>` pointing to the PDF file in `public/`. This was chosen over `react-pdf` (which requires a large PDF.js dependency and canvas rendering) because all modern browsers have built in PDF rendering. This keeps the bundle small and avoids complexity.

### Formspree for Contact Form

Formspree handles form submissions without requiring a backend. This aligns with the static site approach and avoids maintaining server infrastructure for a simple contact form. The alternative (EmailJS) was considered but Formspree has a simpler integration pattern.

## Architecture Decisions

### Single Page with Scroll Sections

The site is structured as a single page with anchor navigation rather than multiple routes. This was chosen because portfolio sites benefit from a continuous scroll experience where visitors can quickly scan all content. It also simplifies the static export since there is only one HTML page.

### Client Components with IntersectionObserver

Each section component uses `"use client"` with `IntersectionObserver` to trigger fade in animations when sections scroll into view. This provides visual polish without a heavy animation library. The `fade-in` and `visible` CSS classes in `globals.css` handle the transitions.

### Environment Variables for Firebase Config

Firebase configuration is stored in `.env.local` and accessed via `NEXT_PUBLIC_*` environment variables. Although Firebase web API keys are designed to be client facing and restricted through Firebase Security Rules, storing them in environment variables follows the principle of keeping configuration separate from code and prevents accidental exposure in version control.

### No Server Side Rendering

The entire site is statically exported. There is no dynamic content that requires server side rendering. All data (experience, projects, skills) is hardcoded in component files. This means the site loads instantly from the CDN with no server round trips.

## Component Structure

All section components follow a consistent pattern:
1. Section with a unique `id` for anchor navigation
2. `useRef` and `IntersectionObserver` for scroll animations
3. Content hardcoded in the component or in a data array at the top of the file
4. Tailwind classes for responsive layout (mobile first with `sm:` and `md:` breakpoints)

## Testing Strategy

Tests use Jest with React Testing Library and cover all 9 components with 55 total tests. Tests verify:
1. Content renders correctly (headings, text, links)
2. Links point to correct destinations
3. Interactive elements work (mobile menu toggle, form submission)
4. Section IDs exist for anchor navigation
5. External links open in new tabs
