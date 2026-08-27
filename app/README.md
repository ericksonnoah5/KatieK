# Katie Kanaan — Portfolio

Single-page portfolio site for Katie Kanaan, MD Class of 2029 at the University
of Iowa Carver College of Medicine.

Built with Next.js 16 (App Router, Turbopack), React 18, Tailwind CSS 3, and
shadcn-style UI primitives.

## Getting started

```bash
npm install
npm run dev      # http://localhost:3000
```

## Scripts

| Script          | Description                |
| --------------- | -------------------------- |
| `npm run dev`   | Start the dev server       |
| `npm run build` | Production build           |
| `npm start`     | Serve the production build |
| `npm run lint`  | ESLint over `src/`         |

## Structure

```
src/
  app/
    page.tsx          # the portfolio page (route: /)
    layout.tsx        # root layout, fonts, metadata
    globals.css       # Tailwind + design tokens
    error.tsx         # error boundary
    loading.tsx       # loading boundary
    not-found.tsx     # 404
  components/
    boundary-message.tsx
    ui/               # button, spinner
  lib/utils.ts        # cn() helper
public/
  katie/              # CV pdf + photos
```
