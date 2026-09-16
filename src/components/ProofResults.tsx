import { ArrowRight, TrendingUp, ShieldCheck, DollarSign } from "lucide-react";
import AnimatedCounter from "./AnimatedCounter";

// PLACEHOLDER METRICS — replace every number here with a real, verifiable
// result before this goes live. Publishing invented stats as real client
// outcomes is misleading advertising, not just a copy detail.
const RESULTS = [
  {
    icon: TrendingUp,
    metric: "+240%",
    label: "Organic Lead Growth in 90 Days",
    client: "FinTech Client",
    accent: "#0891B2",
    bg: "#ECFEFF",
  },
  {
    icon: ShieldCheck,
    metric: "99.99%",
    label: "Uptime via AWS Cloud Migration",
    client: "Healthcare Provider",
    accent: "#0D9488",
    bg: "#F0FDFA",
  },
  {
    icon: DollarSign,
    metric: "$4.2M",
    label: "ARR Generated from Custom Web Platform",
    client: "E-commerce Brand",
    accent: "#475569",
    bg: "#F8FAFC",
  },
];

export default function ProofResults() {
  return (
    <section id="case-studies" className="py-20 md:py-28" style={{ background: "#F8FAFC" }}>
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-3">
            Engineered for Results, Measured by Revenue.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {RESULTS.map(({ icon: Icon, metric, label, client, accent, bg }) => (
            <div
              key={label}
              className="group relative rounded-2xl p-8 transition-all duration-300"
              style={{
                background: "#ffffff",
                border: "1px solid #E2E8F0",
                boxShadow: "0 1px 3px rgba(15,23,42,0.06)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = accent;
                e.currentTarget.style.boxShadow = "0 12px 28px -8px rgba(15,23,42,0.15)";
                e.currentTarget.style.transform = "translateY(-6px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "#E2E8F0";
                e.currentTarget.style.boxShadow = "0 1px 3px rgba(15,23,42,0.06)";
                e.currentTarget.style.transform = "translateY(0)";
              }}
            >
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center mb-5"
                style={{ background: bg }}
              >
                <Icon className="w-6 h-6" style={{ color: accent }} />
              </div>
              <div className="text-4xl font-extrabold text-slate-900 mb-2 tabular-nums">
                <AnimatedCounter value={metric} />
              </div>
              <p style={{ color: "#64748B" }} className="font-medium mb-4">
                {label}
              </p>
              <span
                className="inline-block text-xs font-bold uppercase tracking-wide px-2.5 py-1 rounded-full"
                style={{ background: bg, color: accent }}
              >
                {client}
              </span>
            </div>
          ))}
        </div>

        <div className="text-center">
          <a
            href="#"
            className="inline-flex items-center gap-2 font-bold hover:gap-3 transition-all"
            style={{ color: "#0D9488" }}
          >
            Read Full Case Studies <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
