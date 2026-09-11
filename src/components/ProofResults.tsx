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
    color: "#4ade80", // green
  },
  {
    icon: ShieldCheck,
    metric: "99.99%",
    label: "Uptime via AWS Cloud Migration",
    client: "Healthcare Provider",
    color: "#2dd4bf", // teal
  },
  {
    icon: DollarSign,
    metric: "$4.2M",
    label: "ARR Generated from Custom Web Platform",
    client: "E-commerce Brand",
    color: "#34d399", // emerald
  },
];

export default function ProofResults() {
  return (
    <section id="case-studies" className="py-20 md:py-28" style={{ background: "#0d1a17" }}>
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-3">
            Engineered for Results, Measured by Revenue.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {RESULTS.map(({ icon: Icon, metric, label, client, color }) => (
            <div
              key={label}
              className="group relative rounded-2xl p-8 transition-all duration-300"
              style={{
                background: "rgba(19,36,32,0.6)",
                backdropFilter: "blur(12px)",
                border: `1px solid ${color}30`,
                boxShadow: `0 0 26px ${color}22`,
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = color;
                e.currentTarget.style.boxShadow = `0 0 50px ${color}40`;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = `${color}30`;
                e.currentTarget.style.boxShadow = `0 0 26px ${color}22`;
              }}
            >
              {/* Glowing accent marker */}
              <div
                className="absolute -top-3 -left-3 w-8 h-8 rounded-full"
                style={{ background: color, boxShadow: `0 0 24px ${color}, 0 0 48px ${color}80` }}
              />
              <Icon className="w-8 h-8 mb-5" style={{ color }} />
              <div className="text-4xl font-extrabold text-white mb-2 tabular-nums">
                <AnimatedCounter value={metric} />
              </div>
              <p className="text-slate-400 font-medium mb-4">{label}</p>
              <span
                className="inline-block text-xs font-bold uppercase tracking-wide px-2.5 py-1 rounded-full"
                style={{ background: `${color}18`, color, border: `1px solid ${color}35` }}
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
            style={{ color: "#4ade80" }}
          >
            Read Full Case Studies <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
