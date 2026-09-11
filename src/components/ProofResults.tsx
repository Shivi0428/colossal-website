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
    accent: "#4ade80",
    soft: "#86efac",
  },
  {
    icon: ShieldCheck,
    metric: "99.99%",
    label: "Uptime via AWS Cloud Migration",
    client: "Healthcare Provider",
    accent: "#2dd4bf",
    soft: "#5eead4",
  },
  {
    icon: DollarSign,
    metric: "$4.2M",
    label: "ARR Generated from Custom Web Platform",
    client: "E-commerce Brand",
    accent: "#34d399",
    soft: "#6ee7b7",
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
          {RESULTS.map(({ icon: Icon, metric, label, client, accent, soft }) => (
            <div
              key={label}
              className="group relative rounded-2xl p-8 transition-all duration-300 overflow-hidden"
              style={{
                background: "rgba(19,36,32,0.6)",
                backdropFilter: "blur(12px)",
                border: `1px solid ${accent}25`,
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = `${accent}60`;
                e.currentTarget.style.boxShadow = `0 12px 40px -8px ${accent}35`;
                e.currentTarget.style.transform = "translateY(-6px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = `${accent}25`;
                e.currentTarget.style.boxShadow = "none";
                e.currentTarget.style.transform = "translateY(0)";
              }}
            >
              <div
                className="absolute inset-0 pointer-events-none"
                style={{ background: `linear-gradient(135deg, ${accent}0d 0%, transparent 50%)` }}
              />
              {/* Glowing accent marker */}
              <div
                className="absolute -top-3 -left-3 w-8 h-8 rounded-full"
                style={{ background: accent, boxShadow: `0 0 24px ${accent}, 0 0 48px ${accent}80` }}
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
                  style={{ background: `${accent}18`, color: soft, border: `1px solid ${accent}30` }}
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
            style={{ color: "#4ade80" }}
          >
            Read Full Case Studies <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
