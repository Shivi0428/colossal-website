# Colossal Info Solutions — API

Express + `pg` backend for the lead-capture form and (optionally) the
services/case-studies content.

## Setup

1. Get a PostgreSQL database (Neon, Railway, Supabase, or local Postgres all work).
2. `cp .env.example .env` and fill in `DATABASE_URL`.
3. Install dependencies and apply the schema:
   ```bash
   npm install
   psql "$DATABASE_URL" -f schema.sql
   psql "$DATABASE_URL" -f seed.sql   # optional - seeds the services table
   ```
4. Run it:
   ```bash
   npm run dev     # auto-restarts on file changes
   # or
   npm start
   ```

The API listens on `http://localhost:4000` by default (override with `PORT`
in `.env`). The frontend's `LeadCTA` component points at
`VITE_API_BASE_URL` (defaults to `http://localhost:4000`) — set that env var
in the frontend's own `.env` if the API runs somewhere else.

## Endpoints

| Method | Path | Purpose |
|---|---|---|
| GET | `/api/health` | Liveness check |
| POST | `/api/leads` | Validates and inserts a "Request Free Consultation" submission; writes a matching `audit_log` row and returns both records |
| GET | `/api/services` | Active rows from `services` |
| GET | `/api/case-studies` | Only rows with `is_published = true` — a placeholder metric can never leak out through this endpoint |

## Schema

See `schema.sql`. Four tables: `leads`, `services`, `case_studies`,
`audit_log` — UUID primary keys, `created_at`/`updated_at` timestamps kept
current by a trigger, indexes on the columns actually queried (`work_email`,
`status`, `slug`, `is_active`, `is_published`, `industry`).
