import { Cloud, LineChart, Network } from "lucide-react";

const VALUE_PROPS = [
  {
    icon: Cloud,
    title: "Software & Cloud Engineering",
    copy: "Scalable, secure custom software and cloud infrastructure built to handle enterprise workloads with zero downtime.",
    color: "#2dd4bf", // teal
    glow: "rgba(45,212,191,0.18)",
  },
  {
    icon: LineChart,
    title: "Performance Digital Marketing",
    copy: "Data-driven SEO, PPC, and funnel optimization that consistently deliver measurable ROI and qualified sales leads.",
    color: "#34d399", // emerald
    glow: "rgba(52,211,153,0.18)",
  },
  {
    icon: Network,
    title: "Strategic Tech Consulting",
    copy: "Senior tech architecture and ERP integration to streamline operations and eliminate technical debt.",
    color: "#4ade80", // green
    glow: "rgba(74,222,128,0.18)",
  },
];

export default function ValueProps() {
  return (
    <section id="services" className="py-20 md:py-28" style={{ background: "#132420" }}>
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {VALUE_PROPS.map(({ icon: Icon, title, copy, color, glow }) => (
            <div
              key={title}
              className="group p-8 rounded-2xl transition-all duration-300"
              style={{
                background: "rgba(15,28,25,0.6)",
                backdropFilter: "blur(12px)",
                border: `1px solid ${color}30`,
                boxShadow: `0 0 24px ${glow}`,
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = color;
                e.currentTarget.style.boxShadow = `0 0 45px ${glow.replace("0.18", "0.35")}`;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = `${color}30`;
                e.currentTarget.style.boxShadow = `0 0 24px ${glow}`;
              }}
            >
              <div
                className="w-14 h-14 rounded-xl flex items-center justify-center mb-6 transition-transform group-hover:scale-110"
                style={{ background: `${color}22`, boxShadow: `0 0 20px ${glow}` }}
              >
                <Icon className="w-7 h-7" style={{ color }} />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{title}</h3>
              <p className="text-slate-400 leading-relaxed">{copy}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
