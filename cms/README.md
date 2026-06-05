# CMS

Sanity Studio for editing generic food blog pages.

## Project

- Project ID: `###`
- Dataset: `###`

These values are public configuration, not authentication secrets.

## Setup

Local environment is stored in `.env`, which is ignored by Git. `.env.example` documents the same non-secret variables.

```bash
pnpm dev:cms
```

Studio runs at `http://localhost:3333`.

## Test Page

Create a `Page` document with title `Test Page`, slug `test-page`, and rich text content containing a heading, at least two paragraphs, a bullet list, a link, bold text, and italic text. Publish it, then verify it through the UI at `/test-page`.
