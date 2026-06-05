# Food Blog

A production-oriented TypeScript monorepo for a public, content-driven food blog.

## Architecture

This workspace uses pnpm workspaces and Turborepo. The repository has three application directories:

- `cms`: Sanity Studio for editing food blog content.
- `ui`: Next.js public website that renders published content from Sanity server-side.
- `api`: Standalone Fastify API reserved for future backend or BFF responsibilities.

The Next.js app fetches public Sanity content directly on the server using tokenless queries. The `api` application is independent and is not part of the current content-rendering path.

## Prerequisites

- Node.js 22 or newer supported LTS
- pnpm through Corepack

Enable pnpm if needed:

```bash
corepack enable
corepack prepare pnpm@11.5.2 --activate
```

## Installation

```bash
pnpm install
```

## Sanity Project Configuration

Create or select a Sanity project outside this repository, then copy each `.env.example` file to a local `.env` file and fill in the project ID and dataset. Do not commit real `.env` files.

The CMS uses:

```dotenv
SANITY_STUDIO_PROJECT_ID=
SANITY_STUDIO_DATASET=production
```

The UI uses:

```dotenv
NEXT_PUBLIC_SANITY_PROJECT_ID=
NEXT_PUBLIC_SANITY_DATASET=production
SANITY_API_VERSION=2026-06-05
```

No Sanity API token is required for the initial public published-content flow.

## Commands

- `pnpm dev`: start CMS, UI, and API concurrently.
- `pnpm dev:cms`: start Sanity Studio at `http://localhost:3333`.
- `pnpm dev:ui`: start Next.js at `http://localhost:3000`.
- `pnpm dev:api`: start Fastify at `http://localhost:4000`.
- `pnpm build`: build all applications.
- `pnpm lint`: lint the complete repository.
- `pnpm lint:fix`: lint and fix supported issues.
- `pnpm typecheck`: run TypeScript checks.
- `pnpm test`: run tests once.
- `pnpm test:watch`: run tests in watch mode.
- `pnpm format`: format the repository.
- `pnpm format:check`: check formatting.
- `pnpm clean`: remove generated outputs.

## Local URLs

- UI: `http://localhost:3000`
- CMS: `http://localhost:3333`
- API health check: `http://localhost:4000/health`

## Build And Test

```bash
pnpm format:check
pnpm lint
pnpm typecheck
pnpm test
pnpm build
```

The UI production build needs valid public Sanity project configuration so the server-rendered homepage can query published posts.

## Security

This repository is intended to be public. Secrets must only be stored in local or deployment environment variables. `.env.example` files document required variable names and safe defaults only. Real `.env` files must never be committed.

Never commit passwords, API tokens, Sanity tokens, deployment tokens, private keys, webhook secrets, session secrets, credentialed connection strings, personal email addresses, private URLs, or internal hostnames. Sanity write tokens must never be exposed through `NEXT_PUBLIC_*` variables.
