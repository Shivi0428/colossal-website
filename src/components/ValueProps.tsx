import { Cloud, LineChart, Network, Globe, Smartphone, Zap } from "lucide-react";

const VALUE_PROPS = [
  {
    icon: Globe,
    title: "Website Development",
    copy: "Fast, modern, SEO-ready websites built on a real codebase — not a page builder — so they scale with your business.",
    accent: "#2dd4bf", // teal
    soft: "#5eead4",
  },
  {
    icon: Smartphone,
    title: "Mobile App Development",
    copy: "Native-feeling iOS and Android apps from a single codebase, built for real-world usage and App Store approval.",
    accent: "#22d3ee", // cyan
    soft: "#67e8f9",
  },
  {
    icon: Zap,
    title: "Workflow Automation",
    copy: "We automate the repetitive parts of your operations — data entry, reporting, approvals — so your team spends time on what matters.",
    accent: "#0891b2", // deep cyan
    soft: "#22d3ee",
  },
  {
    icon: Cloud,
    title: "Software & Cloud Engineering",
    copy: "Scalable, secure custom software and cloud infrastructure built to handle enterprise workloads with zero downtime.",
    accent: "#2dd4bf",
    soft: "#5eead4",
  },
  {
    icon: LineChart,
    title: "Performance Digital Marketing",
    copy: "Data-driven SEO, PPC, and funnel optimization that consistently deliver measurable ROI and qualified sales leads.",
    accent: "#22d3ee",
    soft: "#67e8f9",
  },
  {
    icon: Network,
    title: "Strategic Tech Consulting",
    copy: "Senior tech architecture and ERP integration to streamline operations and eliminate technical debt.",
    accent: "#0891b2",
    soft: "#22d3ee",
  },
];

export default function ValueProps() {
  return (
    <section id="services" className="py-20 md:py-28" style={{ background: "#0a1618" }}>
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-3">What We Do</h2>
          <p style={{ color: "#CBD5E1" }} className="max-w-2xl mx-auto">
            Six core services, one senior team — from the first line of code to the campaign that brings customers to it.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {VALUE_PROPS.map(({ icon: Icon, title, copy, accent, soft }) => (
            <div
              key={title}
              className="group relative p-8 rounded-2xl transition-all duration-300 overflow-hidden"
              style={{
                background: "rgba(15,30,33,0.8)",
                backdropFilter: "blur(12px)",
                border: `1px solid ${accent}30`,
                boxShadow: `0 4px 20px rgba(0,0,0,0.4)`,
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = `${accent}80`;
                e.currentTarget.style.boxShadow = `0 20px 50px -12px rgba(0,0,0,0.6), 0 0 50px ${accent}45`;
                e.currentTarget.style.transform = "translateY(-6px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = `${accent}30`;
                e.currentTarget.style.boxShadow = `0 4px 20px rgba(0,0,0,0.4)`;
                e.currentTarget.style.transform = "translateY(0)";
              }}
            >
              {/* Subtle gradient overlay for depth */}
              <div
                className="absolute inset-0 pointer-events-none"
                style={{ background: `linear-gradient(135deg, ${accent}14 0%, transparent 55%)` }}
              />
              <div className="relative">
                <div
                  className="w-14 h-14 rounded-xl flex items-center justify-center mb-6 transition-transform group-hover:scale-110"
                  style={{ background: `${accent}1c`, boxShadow: `0 0 25px ${accent}35` }}
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
