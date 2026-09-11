import pg from "pg";
import "dotenv/config";

const { Pool } = pg;

if (!process.env.DATABASE_URL) {
  console.warn(
    "[db] DATABASE_URL is not set - the API will start but every DB query will fail. " +
      "Copy server/.env.example to server/.env and fill it in.",
  );
}

export const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  // Most managed Postgres providers (Neon, Railway, RDS) require SSL but ship
  // a cert chain that Node doesn't trust by default in dev - this matches the
  // common "?sslmode=require" connection string pattern without needing the
  // full CA bundle. Safe to leave in production against those providers too.
  ssl: process.env.DATABASE_URL?.includes("sslmode=require") ? { rejectUnauthorized: false } : undefined,
});

pool.on("error", (err) => {
  // A connection can die in the background pool between requests - log it,
  // don't crash the process for a single dropped connection.
  console.error("[db] Unexpected error on idle client", err);
});
