import express from "express";
import cors from "cors";
import "dotenv/config";
import { pool } from "./db.js";

const app = express();
const PORT = process.env.PORT || 4000;

// Safety net: a bug in one request's async code should never take the whole
// server down for every other in-flight request. Log it loudly instead.
process.on("unhandledRejection", (err) => {
  console.error("[server] Unhandled promise rejection:", err);
});

app.use(cors());
app.use(express.json());

// ── Validation ──────────────────────────────────────────────────────────
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function validateLeadPayload(body) {
  const errors = [];
  const fullName = String(body.fullName || "").trim();
  const workEmail = String(body.workEmail || "").trim();
  const companyName = String(body.companyName || "").trim();
  const budgetRange = String(body.budgetRange || "").trim();

  if (!fullName) errors.push("fullName is required");
  if (!workEmail) errors.push("workEmail is required");
  else if (!EMAIL_RE.test(workEmail)) errors.push("workEmail must be a valid email address");
  if (!companyName) errors.push("companyName is required");
  if (!budgetRange) errors.push("budgetRange is required");

  return { errors, clean: { fullName, workEmail, companyName, budgetRange } };
}

// ── Routes ──────────────────────────────────────────────────────────────

app.get("/api/health", (_req, res) => res.json({ success: true, message: "ok" }));

// Accepts the "Request Free Consultation" form submission from the landing
// page, validates it, inserts into `leads`, writes an `audit_log` row for
// traceability, and returns both records.
app.post("/api/leads", async (req, res) => {
  const { errors, clean } = validateLeadPayload(req.body || {});
  if (errors.length > 0) {
    return res.status(400).json({ success: false, message: "Please check your details.", errors });
  }

  let client;
  try {
    client = await pool.connect();
    await client.query("BEGIN");

    const leadResult = await client.query(
      `INSERT INTO leads (full_name, work_email, company_name, budget_range)
       VALUES ($1, $2, $3, $4)
       RETURNING id, full_name, work_email, company_name, budget_range, status, created_at`,
      [clean.fullName, clean.workEmail, clean.companyName, clean.budgetRange],
    );
    const lead = leadResult.rows[0];

    const auditResult = await client.query(
      `INSERT INTO audit_log (action, entity_table, entity_id, payload, ip_address)
       VALUES ('lead.created', 'leads', $1, $2, $3)
       RETURNING id, action, created_at`,
      [lead.id, JSON.stringify(clean), req.ip],
    );
    const audit = auditResult.rows[0];

    await client.query("COMMIT");

    res.status(201).json({
      success: true,
      message: "Thanks! We'll be in touch within one business day.",
      lead,
      audit,
    });
  } catch (err) {
    if (client) await client.query("ROLLBACK").catch(() => {});
    console.error("[api/leads] insert failed:", err);
    res.status(500).json({ success: false, message: "Something went wrong. Please try again." });
  } finally {
    if (client) client.release();
  }
});

// Active services for the site's Value Props section, in case it's ever
// switched from hardcoded copy to DB-driven content.
app.get("/api/services", async (_req, res) => {
  try {
    const result = await pool.query(
      `SELECT id, service_name, slug, description, icon_name
       FROM services WHERE is_active = true ORDER BY created_at ASC`,
    );
    res.json({ success: true, services: result.rows });
  } catch (err) {
    console.error("[api/services] query failed:", err);
    res.status(500).json({ success: false, message: "Something went wrong." });
  }
});

// Only published, verified case studies are ever returned - is_published
// defaults to false in the schema specifically so a placeholder metric can
// never accidentally go live through this endpoint.
app.get("/api/case-studies", async (_req, res) => {
  try {
    const result = await pool.query(
      `SELECT id, title, client_name, industry, key_metric_label, key_metric_value, summary
       FROM case_studies WHERE is_published = true ORDER BY created_at DESC`,
    );
    res.json({ success: true, caseStudies: result.rows });
  } catch (err) {
    console.error("[api/case-studies] query failed:", err);
    res.status(500).json({ success: false, message: "Something went wrong." });
  }
});

app.listen(PORT, () => {
  console.log(`[server] Colossal Info Solutions API listening on http://localhost:${PORT}`);
});
