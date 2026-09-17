import { Users, BarChart3, Lock } from "lucide-react";

const DIFFERENTIATORS = [
  {
    icon: Users,
    title: "Dedicated Senior Team",
    copy: "Direct access to veteran engineers and strategists — no junior hand-offs.",
    accent: "#0D9488",
    bg: "#F0FDFA",
  },
  {
    icon: BarChart3,
    title: "Transparent Reporting",
    copy: "Live dashboard access to track every pipeline metric, code commit, and ad spend dollar in real time.",
    accent: "#0891B2",
    bg: "#ECFEFF",
  },
  {
    icon: Lock,
    title: "Built for Security",
    copy: "Bank-grade security standards, GDPR/HIPAA compliance, and robust data protection protocols.",
    accent: "#475569",
    bg: "#F8FAFC",
  },
];

export default function WhyUs() {
  return (
    <section className="py-20 md:py-28" style={{ background: "#ffffff" }}>
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-3">Why Work With Us</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {DIFFERENTIATORS.map(({ icon: Icon, title, copy, accent, bg }) => (
            <div key={title} className="flex flex-col items-start transition-transform duration-300 hover:-translate-y-1">
              <div
                className="w-12 h-12 rounded-lg flex items-center justify-center mb-5"
                style={{ background: bg }}
              >
                <Icon className="w-6 h-6" style={{ color: accent }} />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">{title}</h3>
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
