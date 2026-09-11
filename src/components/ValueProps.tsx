import { Cloud, LineChart, Network } from "lucide-react";

const VALUE_PROPS = [
  {
    icon: Cloud,
    title: "Software & Cloud Engineering",
    copy: "Scalable, secure custom software and cloud infrastructure built to handle enterprise workloads with zero downtime.",
    accent: "#2dd4bf", // used sparingly - border/glow only
    soft: "#5eead4", // softer tint for the icon glyph itself
  },
  {
    icon: LineChart,
    title: "Performance Digital Marketing",
    copy: "Data-driven SEO, PPC, and funnel optimization that consistently deliver measurable ROI and qualified sales leads.",
    accent: "#34d399",
    soft: "#6ee7b7",
  },
  {
    icon: Network,
    title: "Strategic Tech Consulting",
    copy: "Senior tech architecture and ERP integration to streamline operations and eliminate technical debt.",
    accent: "#4ade80",
    soft: "#86efac",
  },
];

export default function ValueProps() {
  return (
    <section id="services" className="py-20 md:py-28" style={{ background: "#132420" }}>
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {VALUE_PROPS.map(({ icon: Icon, title, copy, accent, soft }) => (
            <div
              key={title}
              className="group relative p-8 rounded-2xl transition-all duration-300 overflow-hidden"
              style={{
                background: "rgba(15,28,25,0.6)",
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
              {/* Subtle gradient overlay for depth */}
              <div
                className="absolute inset-0 pointer-events-none"
                style={{ background: `linear-gradient(135deg, ${accent}0d 0%, transparent 50%)` }}
              />
              <div className="relative">
                <div
                  className="w-14 h-14 rounded-xl flex items-center justify-center mb-6 transition-transform group-hover:scale-110"
                  style={{ background: `${accent}18` }}
                >
                  <Icon className="w-7 h-7" style={{ color: soft }} />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{title}</h3>
                <p style={{ color: "#CBD5E1" }} className="leading-relaxed">
                  {copy}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
