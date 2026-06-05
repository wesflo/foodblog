# Studio

Sanity Studio for managing food blog content.

## Project

- Project ID: `ios1w7iv`
- Dataset: `production`

These values are public configuration, not authentication secrets.

## Setup

Local environment is stored in `studio/.env`, which is ignored by Git. `studio/.env.example` documents the same non-secret variables.

```bash
pnpm dev:studio
```

Studio runs at `http://localhost:3333`.

## Deployment

```bash
pnpm deploy:studio
```

## Test Page

Create a `Page` document with title `Test Page`, slug `test-page`, and rich text content containing a heading, at least two paragraphs, a bullet list, a link, bold text, and italic text. Publish it, then verify it through the UI at `/test-page`.
