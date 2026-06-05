# Food Blog

A production-oriented TypeScript monorepo for a public, content-driven food blog.

## Architecture

This workspace uses pnpm workspaces and Turborepo. It contains exactly three application directories:

- `studio`: Sanity Studio for managing content.
- `ui`: Public website, currently implemented with Next.js and React.
- `server`: Independent Fastify service for future backend responsibilities.

The current public content flow is:

```text
Sanity Content Lake
        ↓
Next.js Server Component in ui
        ↓
Rendered HTML
        ↓
Browser
```

The `ui` application communicates directly with Sanity for public content reads. The `server` application is not currently part of the public rendering path. Next.js server-side rendering does not make `server` redundant; `server` should only gain responsibilities that justify an independent service and deployment, such as webhooks, protected write operations, external integrations, background processes, scheduled jobs, or independent backend endpoints.

## Applications

- `studio` (`@wesflo/foodblog-studio`): Sanity Studio configuration, content schemas, editor UI, and Sanity deployment configuration.
- `ui` (`@wesflo/foodblog-ui`): Public website with Next.js App Router, React Server Components, server-side Sanity queries, and Portable Text rendering.
- `server` (`@wesflo/foodblog-server`): Fastify service for future standalone backend responsibilities.

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

- Project ID: `ios1w7iv`
- Dataset: `production`

These are public configuration values, not authentication secrets. No Sanity API token is required for the initial published-content flow.

## Environment Setup

Local env files are required for running the apps locally and are ignored by Git:

- `studio/.env`
- `ui/.env.local`
- `server/.env`

The matching `.env.example` files remain trackable and document the required variables.

## Commands

- `pnpm dev`: start studio, ui, and server concurrently.
- `pnpm dev:studio`: start Sanity Studio at `http://localhost:3333`.
- `pnpm dev:ui`: start Next.js UI at `http://localhost:3000`.
- `pnpm dev:server`: start Fastify server at `http://127.0.0.1:4000`.
- `pnpm build`: build all applications.
- `pnpm build:studio`: build Sanity Studio.
- `pnpm build:ui`: build Next.js UI.
- `pnpm build:server`: build Fastify server.
- `pnpm deploy:studio`: deploy Sanity Studio.
- `pnpm lint`: lint the complete repository.
- `pnpm lint:fix`: lint and fix supported issues.
- `pnpm typecheck`: run TypeScript checks.
- `pnpm test`: run tests once.
- `pnpm test:watch`: run tests in watch mode.
- `pnpm format`: format the repository.
- `pnpm format:check`: check formatting.
- `pnpm clean`: remove generated outputs.

## Local URLs

- Next.js UI: `http://localhost:3000`
- Sanity Studio: `http://localhost:3333`
- Fastify server health check: `http://127.0.0.1:4000/health`
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

1. Run `pnpm dev:studio`.
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
