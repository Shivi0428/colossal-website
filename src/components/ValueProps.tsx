import { Cloud, LineChart, Network, Globe, Smartphone, Zap } from "lucide-react";

const VALUE_PROPS = [
  {
    icon: Globe,
    title: "Website Development",
    copy: "Fast, modern, SEO-ready websites built on a real codebase — not a page builder — so they scale with your business.",
    accent: "#0D9488", // teal
    bg: "#F0FDFA",
  },
  {
    icon: Smartphone,
    title: "Mobile App Development",
    copy: "Native-feeling iOS and Android apps from a single codebase, built for real-world usage and App Store approval.",
    accent: "#0891B2", // cyan
    bg: "#ECFEFF",
  },
  {
    icon: Zap,
    title: "Workflow Automation",
    copy: "We automate the repetitive parts of your operations — data entry, reporting, approvals — so your team spends time on what matters.",
    accent: "#475569", // grey
    bg: "#F8FAFC",
  },
  {
    icon: Cloud,
    title: "Software & Cloud Engineering",
    copy: "Scalable, secure custom software and cloud infrastructure built to handle enterprise workloads with zero downtime.",
    accent: "#0D9488",
    bg: "#F0FDFA",
  },
  {
    icon: LineChart,
    title: "Performance Digital Marketing",
    copy: "Data-driven SEO, PPC, and funnel optimization that consistently deliver measurable ROI and qualified sales leads.",
    accent: "#0891B2",
    bg: "#ECFEFF",
  },
  {
    icon: Network,
    title: "Strategic Tech Consulting",
    copy: "Senior tech architecture and ERP integration to streamline operations and eliminate technical debt.",
    accent: "#475569",
    bg: "#F8FAFC",
  },
];

export default function ValueProps() {
  return (
    <section id="services" className="py-20 md:py-28" style={{ background: "#ffffff" }}>
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-3">What We Do</h2>
          <p style={{ color: "#475569" }} className="max-w-2xl mx-auto">
            Six core services, one senior team, from the first line of code to the campaign that brings customers to it.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {VALUE_PROPS.map(({ icon: Icon, title, copy, accent, bg }) => (
            <div
              key={title}
              className="group relative p-8 rounded-2xl transition-all duration-300"
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
                className="w-14 h-14 rounded-xl flex items-center justify-center mb-6 transition-transform group-hover:scale-110"
                style={{ background: bg }}
              >
                <Icon className="w-7 h-7" style={{ color: accent }} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">{title}</h3>
              <p style={{ color: "#64748B" }} className="leading-relaxed">
                {copy}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
