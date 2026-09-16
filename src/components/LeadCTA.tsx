import { useState } from "react";

const BUDGET_OPTIONS = ["Under £10k", "£10k – £50k", "£50k – £150k", "£150k+", "Not sure yet"];

// On Vercel, /api/leads is a serverless function living right next to this
// site (see /api/leads.ts) - same-origin, no separate backend or database
// needed. Sends an email instead of writing to a table.
export default function LeadCTA() {
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [form, setForm] = useState({ fullName: "", workEmail: "", companyName: "", budgetRange: "" });

  const update = (field: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) =>
    setForm((f) => ({ ...f, [field]: e.target.value }));

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);
    try {
      const res = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (!res.ok || !data.success) {
        throw new Error(data.message || "Something went wrong. Please try again.");
      }
      setSubmitted(true);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="lead-capture" className="py-20 md:py-28" style={{ background: "#ffffff" }}>
      <div className="max-w-3xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4">
            Ready to Scale Your Digital Architecture?
          </h2>
          <p className="text-lg max-w-xl mx-auto leading-relaxed" style={{ color: "#475569" }}>
            Book a free 30-minute technical and marketing audit with a principal partner. No hard
            sales pitch — just actionable steps.
          </p>
        </div>

        <div
          className="rounded-2xl p-8 md:p-10"
          style={{ background: "#F8FAFC", border: "1px solid #E2E8F0" }}
        >
          {submitted ? (
            <div className="text-center py-8">
              <div
                className="w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl"
                style={{ background: "#F0FDFA", color: "#0D9488" }}
              >
                ✓
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Request received</h3>
              <p style={{ color: "#64748B" }}>We'll be in touch within one business day to schedule your audit.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="relative group">
                  <label className="block text-sm font-semibold text-slate-700 mb-1.5">Full Name</label>
                  <input
                    required
                    type="text"
                    placeholder="Jane Smith"
                    value={form.fullName}
                    onChange={update("fullName")}
                    className="w-full px-4 py-3 rounded-lg text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2"
                    style={{ background: "#ffffff", border: "1px solid #CBD5E1", "--tw-ring-color": "#0891B2" } as React.CSSProperties}
                  />
                  <span
                    className="absolute left-0 -bottom-0.5 h-0.5 w-full origin-left scale-x-0 group-focus-within:scale-x-100 transition-transform duration-300 rounded-full"
                    style={{ background: "linear-gradient(90deg, #0d9488, #0891b2)" }}
                  />
                </div>
                <div className="relative group">
                  <label className="block text-sm font-semibold text-slate-700 mb-1.5">Work Email</label>
                  <input
                    required
                    type="email"
                    placeholder="jane@company.com"
                    value={form.workEmail}
                    onChange={update("workEmail")}
                    className="w-full px-4 py-3 rounded-lg text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2"
                    style={{ background: "#ffffff", border: "1px solid #CBD5E1", "--tw-ring-color": "#0891B2" } as React.CSSProperties}
                  />
                  <span
                    className="absolute left-0 -bottom-0.5 h-0.5 w-full origin-left scale-x-0 group-focus-within:scale-x-100 transition-transform duration-300 rounded-full"
                    style={{ background: "linear-gradient(90deg, #0d9488, #0891b2)" }}
                  />
                </div>
              </div>

              <div className="relative group">
                <label className="block text-sm font-semibold text-slate-700 mb-1.5">Company Name</label>
                <input
                  required
                  type="text"
                  placeholder="Acme Corp"
                  value={form.companyName}
                  onChange={update("companyName")}
                  className="w-full px-4 py-3 rounded-lg text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2"
                  style={{ background: "#ffffff", border: "1px solid #CBD5E1", "--tw-ring-color": "#0891B2" } as React.CSSProperties}
                />
                <span
                  className="absolute left-0 -bottom-0.5 h-0.5 w-full origin-left scale-x-0 group-focus-within:scale-x-100 transition-transform duration-300 rounded-full"
                  style={{ background: "linear-gradient(90deg, #0d9488, #0891b2)" }}
                />
              </div>

              <div className="relative group">
                <label className="block text-sm font-semibold text-slate-700 mb-1.5">Project Budget</label>
                <select
                  required
                  value={form.budgetRange}
                  onChange={update("budgetRange")}
                  className="w-full px-4 py-3 rounded-lg text-slate-900 focus:outline-none focus:ring-2"
                  style={{ background: "#ffffff", border: "1px solid #CBD5E1", "--tw-ring-color": "#0891B2" } as React.CSSProperties}
                >
                  <option value="" disabled>
                    Select a range
                  </option>
                  {BUDGET_OPTIONS.map((b) => (
                    <option key={b} value={b}>
                      {b}
                    </option>
                  ))}
                </select>
                <span
                  className="absolute left-0 -bottom-0.5 h-0.5 w-full origin-left scale-x-0 group-focus-within:scale-x-100 transition-transform duration-300 rounded-full"
                  style={{ background: "linear-gradient(90deg, #0d9488, #0891b2)" }}
                />
              </div>

              {error && (
                <p className="text-sm rounded-lg px-4 py-2.5" style={{ background: "#FEF2F2", color: "#B91C1C", border: "1px solid #FECACA" }}>
                  {error}
                </p>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 rounded-lg font-bold text-white transition-transform hover:scale-[1.02] disabled:opacity-60"
                style={{ background: "linear-gradient(135deg, #0d9488, #0891b2)", boxShadow: "0 8px 24px rgba(8,145,178,0.3)" }}
              >
                {isSubmitting ? "Sending…" : "Request Free Consultation"}
              </button>

              <p className="text-xs text-center pt-1" style={{ color: "#94A3B8" }}>
                No spam. We respect your privacy and enter into NDAs prior to consultations.
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
