# UI

Next.js public website for the food blog.

The homepage is intentionally minimal. Dynamic pages are fetched from Sanity in React Server Components and rendered with Portable Text.

## Setup

Local environment is stored in `.env.local`, which is ignored by Git. `.env.example` documents the same non-secret variables.

```bash
pnpm dev:ui
```

The site runs at `http://localhost:3000`.

## Routes

- `/`: minimal Hello World setup page.
- `/:slug`: renders a published Sanity `page` document by slug.

No Sanity token is used for the initial public published-content flow. Do not add Sanity tokens to `NEXT_PUBLIC_*` variables.
