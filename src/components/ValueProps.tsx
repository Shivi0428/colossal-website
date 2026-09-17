import { Code2, LineChart, Users, Smartphone, Database, Cloud } from "lucide-react";

export const VALUE_PROPS = [
  {
    id: "service-software-development",
    icon: Code2,
    title: "Software Development",
    copy: "Enterprise software built end to end — planning, UI/UX, development, QA, and deployment — on a real codebase, not a page builder.",
    subServices: ["Enterprise Software Development", "UI/UX Creation", "QA & Software Testing"],
    accent: "#0D9488", // teal
    bg: "#F0FDFA",
  },
  {
    id: "service-mobile-app-development",
    icon: Smartphone,
    title: "Mobile App Development",
    copy: "iOS, Android, and React Native apps from a team with 10+ years in mobile, built for real-world usage and App Store approval.",
    subServices: ["iPad & iPhone App Development", "Android, iOS & React Native Development"],
    accent: "#0891B2", // cyan
    bg: "#ECFEFF",
  },
  {
    id: "service-digital-marketing",
    icon: LineChart,
    title: "Digital Marketing",
    copy: "Data-driven PPC and funnel optimization that consistently deliver measurable ROI and qualified sales leads.",
    subServices: ["PPC & Paid Campaigns", "Conversion Funnel Optimization", "Analytics & Reporting"],
    accent: "#475569", // grey
    bg: "#F8FAFC",
  },
  {
    id: "service-consulting-services",
    icon: Users,
    title: "Consulting Services",
    copy: "Enterprise IT consulting for teams weighing build, buy, or modernize decisions — architecture reviews, technology roadmaps, and hands-on delivery support.",
    subServices: ["Architecture Reviews", "Technology Roadmaps", "Delivery Support"],
    accent: "#0D9488",
    bg: "#F0FDFA",
  },
  {
    id: "service-erp-solutions",
    icon: Database,
    title: "ERP Solutions",
    copy: "Multi-company, multi-user ERP systems that give you real-time control over inventory, sales, and operations, built for a fast, cost-effective rollout.",
    subServices: ["Multi-Company, Multi-User Setup", "Inventory & Operations Management", "Fast, Cost-Effective Rollout"],
    accent: "#0891B2",
    bg: "#ECFEFF",
  },
  {
    id: "service-cloud-transformation",
    icon: Cloud,
    title: "Cloud Transformation",
    copy: "Enterprise structure advisory and software portfolio reviews that plan and execute your move to modern cloud infrastructure.",
    subServices: ["Enterprise Structure Advisory", "Digital Transformation Consulting", "Software Portfolio Advisory"],
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
          {VALUE_PROPS.map(({ id, icon: Icon, title, copy, subServices, accent, bg }) => (
            <div
              key={title}
              id={id}
              className="group relative p-8 rounded-2xl transition-all duration-300"
              style={{
                background: "#ffffff",
                border: "1px solid #E2E8F0",
                boxShadow: "0 1px 3px rgba(15,23,42,0.06)",
                scrollMarginTop: "96px",
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
              <p style={{ color: "#64748B" }} className="leading-relaxed mb-4">
                {copy}
              </p>
              <ul className="space-y-1.5">
                {subServices.map((s) => (
                  <li key={s} className="flex items-start gap-2 text-sm" style={{ color: "#64748B" }}>
                    <span className="mt-1.5 w-1 h-1 rounded-full shrink-0" style={{ background: accent }} />
                    {s}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
