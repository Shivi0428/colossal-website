import type { VercelRequest, VercelResponse } from "@vercel/node";
import { Resend } from "resend";

// Database-free lead capture: instead of writing to Postgres, this just
// emails the lead straight to the admin inbox. No DB, no server to keep
// running, works as a Vercel serverless function at /api/leads.
//
// Requires two env vars set in the Vercel project settings:
//   RESEND_API_KEY  - from resend.com
//   ADMIN_EMAIL     - where new leads should land
// Falls back to logging to the function's console if either is missing,
// so the form still responds sensibly in local/dev without them set.

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function validate(body: any) {
  const errors: string[] = [];
  const fullName = String(body?.fullName || "").trim();
  const workEmail = String(body?.workEmail || "").trim();
  const companyName = String(body?.companyName || "").trim();
  const budgetRange = String(body?.budgetRange || "").trim();

  if (!fullName) errors.push("fullName is required");
  if (!workEmail) errors.push("workEmail is required");
  else if (!EMAIL_RE.test(workEmail)) errors.push("workEmail must be a valid email address");
  if (!companyName) errors.push("companyName is required");
  if (!budgetRange) errors.push("budgetRange is required");

  return { errors, clean: { fullName, workEmail, companyName, budgetRange } };
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== "POST") {
    return res.status(405).json({ success: false, message: "Method not allowed" });
  }

  const { errors, clean } = validate(req.body);
  if (errors.length > 0) {
    return res.status(400).json({ success: false, message: "Please check your details.", errors });
  }

  const apiKey = process.env.RESEND_API_KEY;
  const adminEmail = process.env.ADMIN_EMAIL;

  if (!apiKey || !adminEmail) {
    // Don't fail the visitor's request just because email isn't configured
    // yet - log it so it's not silently lost, and tell them honestly.
    console.warn("[api/leads] RESEND_API_KEY or ADMIN_EMAIL not set - lead was not emailed:", clean);
    return res.status(201).json({
      success: true,
      message: "Request received (email delivery is not configured yet, but your details were logged).",
    });
  }

  try {
    const resend = new Resend(apiKey);
    await resend.emails.send({
      from: "Colossal Info Solutions <onboarding@resend.dev>",
      to: adminEmail,
      subject: `New consultation request from ${clean.fullName} (${clean.companyName})`,
      html: `
        <h2>New lead from the website</h2>
        <table cellpadding="6" style="border-collapse:collapse">
          <tr><td><strong>Name</strong></td><td>${clean.fullName}</td></tr>
          <tr><td><strong>Email</strong></td><td>${clean.workEmail}</td></tr>
          <tr><td><strong>Company</strong></td><td>${clean.companyName}</td></tr>
          <tr><td><strong>Budget</strong></td><td>${clean.budgetRange}</td></tr>
        </table>
      `,
    });

    res.status(201).json({ success: true, message: "Thanks! We'll be in touch within one business day." });
  } catch (err) {
    console.error("[api/leads] Resend send failed:", err);
    res.status(500).json({ success: false, message: "Something went wrong. Please try again." });
  }
}
