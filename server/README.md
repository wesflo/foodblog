# Server

Independent Fastify service reserved for future backend responsibilities such as webhooks, protected write operations, external integrations, background processes, scheduled jobs, and endpoints that justify separate hosting.

The public website in `ui` currently reads public Sanity content directly in Next.js Server Components. Do not route public Sanity reads through this server.

## Setup

Local environment is stored in `server/.env`, which is ignored by Git. `server/.env.example` documents the same non-secret defaults.

```bash
pnpm dev:server
```

The server runs at `http://127.0.0.1:4000`.

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
