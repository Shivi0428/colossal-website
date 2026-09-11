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
  },
  {
    icon: ShieldCheck,
    metric: "99.99%",
    label: "Uptime via AWS Cloud Migration",
    client: "Healthcare Provider",
  },
  {
    icon: DollarSign,
    metric: "$4.2M",
    label: "ARR Generated from Custom Web Platform",
    client: "E-commerce Brand",
  },
];

export default function ProofResults() {
  return (
    <section id="case-studies" className="bg-slate-950 py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-3">
            Engineered for Results, Measured by Revenue.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {RESULTS.map(({ icon: Icon, metric, label, client }) => (
            <div
              key={label}
              className="group relative rounded-2xl p-8 transition-all duration-300"
              style={{
                background: "rgba(17,24,39,0.6)",
                backdropFilter: "blur(12px)",
                border: "1px solid rgba(148,163,184,0.15)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "rgba(45,212,191,0.5)";
                e.currentTarget.style.boxShadow = "0 0 30px rgba(45,212,191,0.15)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "rgba(148,163,184,0.15)";
                e.currentTarget.style.boxShadow = "none";
              }}
            >
              {/* Glowing accent marker */}
              <div
                className="absolute -top-3 -left-3 w-8 h-8 rounded-full"
                style={{ background: "#2dd4bf", boxShadow: "0 0 16px rgba(45,212,191,0.7)", opacity: 0.9 }}
              />
              <Icon className="w-8 h-8 mb-5" style={{ color: "#2dd4bf" }} />
              <div className="text-4xl font-extrabold text-white mb-2 tabular-nums">
                <AnimatedCounter value={metric} />
              </div>
              <p className="text-slate-400 font-medium mb-4">{label}</p>
              <span
                className="inline-block text-xs font-bold uppercase tracking-wide px-2.5 py-1 rounded-full"
                style={{ background: "rgba(148,163,184,0.12)", color: "#94a3b8", border: "1px solid rgba(148,163,184,0.2)" }}
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
            style={{ color: "#2dd4bf" }}
          >
            Read Full Case Studies <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
