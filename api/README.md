# API

Standalone Fastify API for future backend or BFF responsibilities. It is not used by the Next.js content-rendering path yet.

## Setup

Local environment is stored in `.env`, which is ignored by Git. `.env.example` documents the same non-secret defaults.

```bash
pnpm dev:api
```

The API runs at `http://localhost:4000`.

## Health Check

```http
GET /health
```

Returns:

```json
{
    "status": "ok"
}
```
