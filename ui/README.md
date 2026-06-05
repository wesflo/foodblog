# UI

Next.js public website for the food blog.

## Setup

Copy `.env.example` to a local `.env` file and fill in the public Sanity project ID and dataset. These values identify the public content API; they are not authentication secrets.

Do not add Sanity tokens to `NEXT_PUBLIC_*` variables.

```bash
pnpm dev:ui
```

The site runs at `http://localhost:3000` and fetches published posts from Sanity on the server.
