# CMS

Sanity Studio for editing food blog posts.

## Setup

Copy `.env.example` to a local `.env` file and fill in the Sanity project ID and dataset. Keep local `.env` files out of Git.

```bash
pnpm dev:cms
```

Studio runs at `http://localhost:3333`.

If a Sanity project has not been created yet, create or select one with the Sanity CLI, then use its project ID in the local environment file. Do not create or commit API tokens for this initial setup.
