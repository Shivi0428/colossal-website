import { useState } from "react";

const BUDGET_OPTIONS = ["Under £10k", "£10k – £50k", "£50k – £150k", "£150k+", "Not sure yet"];

// Backend runs separately (server/) - see README for how to start it.
// Falls back gracefully with an error message if it's not running.
const API_BASE = import.meta.env.VITE_API_BASE_URL || "http://localhost:4000";

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
      const res = await fetch(`${API_BASE}/api/leads`, {
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
    <section id="lead-capture" className="py-20 md:py-28" style={{ background: "#0d1a17" }}>
      <div className="max-w-3xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">
            Ready to Scale Your Digital Architecture?
          </h2>
          <p className="text-lg text-slate-400 max-w-xl mx-auto leading-relaxed">
            Book a free 30-minute technical and marketing audit with a principal partner. No hard
            sales pitch — just actionable steps.
          </p>
        </div>

        <div
          className="rounded-2xl p-8 md:p-10"
          style={{ background: "rgba(15,28,25,0.6)", backdropFilter: "blur(12px)", border: "1px solid rgba(45,212,191,0.2)", boxShadow: "0 0 40px rgba(45,212,191,0.1)" }}
        >
          {submitted ? (
            <div className="text-center py-8">
              <div
                className="w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl"
                style={{ background: "rgba(74,222,128,0.15)", color: "#4ade80", boxShadow: "0 0 24px rgba(74,222,128,0.3)" }}
              >
                ✓
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Request received</h3>
              <p className="text-slate-400">We'll be in touch within one business day to schedule your audit.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-slate-300 mb-1.5">Full Name</label>
                  <input
                    required
                    type="text"
                    placeholder="Jane Smith"
                    value={form.fullName}
                    onChange={update("fullName")}
                    className="w-full px-4 py-3 rounded-lg text-white placeholder:text-slate-500 focus:outline-none focus:ring-2"
                    style={{ background: "rgba(13,26,23,0.7)", border: "1px solid rgba(74,222,128,0.25)", "--tw-ring-color": "#4ade80" } as React.CSSProperties}
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-slate-300 mb-1.5">Work Email</label>
                  <input
                    required
                    type="email"
                    placeholder="jane@company.com"
                    value={form.workEmail}
                    onChange={update("workEmail")}
                    className="w-full px-4 py-3 rounded-lg text-white placeholder:text-slate-500 focus:outline-none focus:ring-2"
                    style={{ background: "rgba(13,26,23,0.7)", border: "1px solid rgba(74,222,128,0.25)", "--tw-ring-color": "#4ade80" } as React.CSSProperties}
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-slate-300 mb-1.5">Company Name</label>
                <input
                  required
                  type="text"
                  placeholder="Acme Corp"
                  value={form.companyName}
                  onChange={update("companyName")}
                  className="w-full px-4 py-3 rounded-lg text-white placeholder:text-slate-500 focus:outline-none focus:ring-2"
                  style={{ background: "rgba(13,26,23,0.7)", border: "1px solid rgba(74,222,128,0.25)", "--tw-ring-color": "#4ade80" } as React.CSSProperties}
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-slate-300 mb-1.5">Project Budget</label>
                <select
                  required
                  value={form.budgetRange}
                  onChange={update("budgetRange")}
                  className="w-full px-4 py-3 rounded-lg text-white focus:outline-none focus:ring-2"
                  style={{ background: "rgba(13,26,23,0.7)", border: "1px solid rgba(74,222,128,0.25)", "--tw-ring-color": "#4ade80" } as React.CSSProperties}
                >
                  <option value="" disabled className="bg-slate-900">
                    Select a range
                  </option>
                  {BUDGET_OPTIONS.map((b) => (
                    <option key={b} value={b} className="bg-slate-900">
                      {b}
                    </option>
                  ))}
                </select>
              </div>

              {error && (
                <p className="text-sm rounded-lg px-4 py-2.5" style={{ background: "rgba(248,113,113,0.1)", color: "#fca5a5", border: "1px solid rgba(248,113,113,0.25)" }}>
                  {error}
                </p>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 rounded-lg font-bold text-slate-900 transition-transform hover:scale-[1.02] disabled:opacity-60"
                style={{ background: "linear-gradient(135deg, #4ade80, #2dd4bf)", boxShadow: "0 0 30px rgba(45,212,191,0.5)" }}
              >
                {isSubmitting ? "Sending…" : "Request Free Consultation"}
              </button>

              <p className="text-xs text-slate-500 text-center pt-1">
                No spam. We respect your privacy and enter into NDAs prior to consultations.
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
