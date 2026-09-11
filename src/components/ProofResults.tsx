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
    accent: "#22d3ee", // cyan
    soft: "#67e8f9",
  },
  {
    icon: ShieldCheck,
    metric: "99.99%",
    label: "Uptime via AWS Cloud Migration",
    client: "Healthcare Provider",
    accent: "#2dd4bf", // teal
    soft: "#5eead4",
  },
  {
    icon: DollarSign,
    metric: "$4.2M",
    label: "ARR Generated from Custom Web Platform",
    client: "E-commerce Brand",
    accent: "#0891b2", // deep cyan
    soft: "#22d3ee",
  },
];

export default function ProofResults() {
  return (
    <section id="case-studies" className="py-20 md:py-28" style={{ background: "#020505" }}>
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-3">
            Engineered for Results, Measured by Revenue.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {RESULTS.map(({ icon: Icon, metric, label, client, accent, soft }) => (
            <div
              key={label}
              className="group relative rounded-2xl p-8 transition-all duration-300 overflow-hidden"
              style={{
                background: "rgba(6,15,17,0.8)",
                backdropFilter: "blur(12px)",
                border: `1px solid ${accent}30`,
                boxShadow: "0 4px 20px rgba(0,0,0,0.5)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = `${accent}80`;
                e.currentTarget.style.boxShadow = `0 20px 50px -12px rgba(0,0,0,0.7), 0 0 55px ${accent}45`;
                e.currentTarget.style.transform = "translateY(-6px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = `${accent}30`;
                e.currentTarget.style.boxShadow = "0 4px 20px rgba(0,0,0,0.5)";
                e.currentTarget.style.transform = "translateY(0)";
              }}
            >
              <div
                className="absolute inset-0 pointer-events-none"
                style={{ background: `linear-gradient(135deg, ${accent}14 0%, transparent 55%)` }}
              />
              {/* Glowing accent marker */}
              <div
                className="absolute -top-3 -left-3 w-8 h-8 rounded-full"
                style={{ background: accent, boxShadow: `0 0 24px ${accent}, 0 0 55px ${accent}90` }}
              />
              <div className="relative">
                <Icon className="w-8 h-8 mb-5" style={{ color: soft }} />
                <div className="text-4xl font-extrabold text-white mb-2 tabular-nums">
                  <AnimatedCounter value={metric} />
                </div>
                <p style={{ color: "#CBD5E1" }} className="font-medium mb-4">
                  {label}
                </p>
                <span
                  className="inline-block text-xs font-bold uppercase tracking-wide px-2.5 py-1 rounded-full"
                  style={{ background: `${accent}18`, color: soft, border: `1px solid ${accent}35` }}
                >
                  {client}
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <a
            href="#"
            className="inline-flex items-center gap-2 font-bold hover:gap-3 transition-all"
            style={{ color: "#22d3ee" }}
          >
            Read Full Case Studies <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
