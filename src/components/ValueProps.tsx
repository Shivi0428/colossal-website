import { Cloud, LineChart, Network } from "lucide-react";

const VALUE_PROPS = [
  {
    icon: Cloud,
    title: "Software & Cloud Engineering",
    copy: "Scalable, secure custom software and cloud infrastructure built to handle enterprise workloads with zero downtime.",
  },
  {
    icon: LineChart,
    title: "Performance Digital Marketing",
    copy: "Data-driven SEO, PPC, and funnel optimization that consistently deliver measurable ROI and qualified sales leads.",
  },
  {
    icon: Network,
    title: "Strategic Tech Consulting",
    copy: "Senior tech architecture and ERP integration to streamline operations and eliminate technical debt.",
  },
];

export default function ValueProps() {
  return (
    <section id="services" className="bg-slate-900 py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {VALUE_PROPS.map(({ icon: Icon, title, copy }) => (
            <div
              key={title}
              className="group p-8 rounded-2xl transition-all duration-300"
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
              <div
                className="w-14 h-14 rounded-xl flex items-center justify-center mb-6 transition-transform group-hover:scale-110"
                style={{ background: "rgba(45,212,191,0.12)" }}
              >
                <Icon className="w-7 h-7" style={{ color: "#2dd4bf" }} />
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
