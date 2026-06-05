# Food Blog

A production-oriented TypeScript monorepo for a public, content-driven food blog.

## Architecture

This workspace uses pnpm workspaces and Turborepo. It contains exactly three application directories:

- `cms`: Sanity Studio for editing generic editorial pages.
- `ui`: Next.js public website that renders Sanity pages server-side.
- `api`: Standalone Fastify API reserved for future backend or BFF responsibilities.

The current content flow is:

```text
Sanity Content Lake
        ↓
Next.js Server Component
        ↓
Rendered HTML
        ↓
Browser
```

The `api` application is independent and is not part of the Sanity content-rendering path.

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

This repository is configured for:

- Project ID: `###`
- Dataset: `production`

These are public configuration values, not authentication secrets. No Sanity API token is required for the initial published-content flow.

## Environment Setup

Local env files are required for running the apps locally and are ignored by Git:

- `cms/.env`
- `ui/.env.local`
- `api/.env`

The matching `.env.example` files remain trackable and document the required variables.

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
- Sanity test page route: `http://localhost:3000/test-page`

## Build And Test

```bash
pnpm format:check
pnpm lint
pnpm typecheck
pnpm test
pnpm build
```

## Manual Test Page

Create the first Sanity test page through Studio:

1. Run `pnpm dev:cms`.
2. Open `http://localhost:3333`.
3. Sign in to Sanity if prompted.
4. Create a new `Page` document.
5. Set the title to `Test Page`.
6. Generate the slug `test-page`.
7. Add content with one heading, at least two paragraphs, one unordered list, one link, one bold text fragment, and one italic text fragment.
8. Publish the document.
9. Visit `http://localhost:3000/test-page`.

Do not create Sanity API tokens for this setup.

## Security

This repository is intended to be public. Secrets must only be stored in local or deployment environment variables. Real `.env` files must never be committed.

Never commit passwords, API tokens, Sanity read tokens, Sanity write tokens, deployment tokens, private keys, webhook secrets, session secrets, credentialed connection strings, private URLs, or internal-only hostnames. Sanity write tokens must never be exposed through `NEXT_PUBLIC_*` variables.
