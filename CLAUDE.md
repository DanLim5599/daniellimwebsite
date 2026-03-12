# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

- `npm run dev` - Start dev server at localhost:3000
- `npm run build` - Static export to `out/` directory (configured with `output: 'export'`)
- `npm run lint` - Run ESLint
- `npm test` - Run all Jest tests
- `npm test -- src/__tests__/Hero.test.tsx` - Run a single test file
- `firebase deploy` - Deploy `out/` to Firebase Hosting

## Validation Loop

After making changes, always run this sequence before committing:

1. `npm run lint` - Check for linting errors
2. `npm test` - Verify all 55 tests pass across 9 test suites
3. `npm run build` - Confirm static export builds successfully
4. Review `git diff` to ensure no sensitive data (API keys, tokens) is staged

If any step fails, fix the issue before proceeding.

## Architecture

Single-page portfolio website built with Next.js 14 App Router + TypeScript + Tailwind CSS. Statically exported and hosted on Firebase Hosting at daniellim.net.

### Key Decisions

- **Static export only** - `next.config.mjs` sets `output: 'export'` and `images: { unoptimized: true }`. No SSR, no API routes. Everything is pre-rendered to `out/`.
- **Single page with scroll sections** - `src/app/page.tsx` composes all section components in order. Navigation uses anchor links (`#about`, `#experience`, etc.) with CSS `scroll-behavior: smooth`.
- **All components are client components** (`"use client"`) - They use `useEffect` with `IntersectionObserver` for fade-in-on-scroll animations. The CSS classes `fade-in` and `visible` in `globals.css` drive these animations.
- **Resume PDF** is in `public/` and displayed via a browser-native `<iframe>`, not react-pdf.
- **Contact form** uses Formspree (the form ID in `Contact.tsx` needs to be replaced with a real Formspree ID).
- **Firebase Analytics** is loaded client-side via `src/app/lib/firebase.ts`, initialized lazily through the `Analytics` component. Config is pulled from environment variables (`NEXT_PUBLIC_FIREBASE_*` in `.env.local`).

### Firebase Hosting

- Config: `firebase.json` points to `out/` directory
- Project: `daniellim-website` (defined in `.firebaserc`)
- Custom domain: `daniellim.net` (DNS via Squarespace)

### Security

- Firebase config values are stored in `.env.local` (gitignored), not hardcoded
- `.env.example` provides the template for required environment variables
- Never commit `.env.local` or files containing API keys
