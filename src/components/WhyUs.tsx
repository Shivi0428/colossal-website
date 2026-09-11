import { Users, BarChart3, Lock } from "lucide-react";

const DIFFERENTIATORS = [
  {
    icon: Users,
    title: "Dedicated Senior Team",
    copy: "Direct access to veteran engineers and strategists — no junior hand-offs.",
    accent: "#2dd4bf",
    soft: "#5eead4",
  },
  {
    icon: BarChart3,
    title: "Transparent Reporting",
    copy: "Live dashboard access to track every pipeline metric, code commit, and ad spend dollar in real time.",
    accent: "#22d3ee",
    soft: "#67e8f9",
  },
  {
    icon: Lock,
    title: "Built for Security",
    copy: "Bank-grade security standards, GDPR/HIPAA compliance, and robust data protection protocols.",
    accent: "#0891b2",
    soft: "#22d3ee",
  },
];

export default function WhyUs() {
  return (
    <section id="about" className="text-white py-20 md:py-28" style={{ background: "#0a1618" }}>
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-3">Why Work With Us</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {DIFFERENTIATORS.map(({ icon: Icon, title, copy, accent, soft }) => (
            <div key={title} className="flex flex-col items-start transition-transform duration-300 hover:-translate-y-1">
              <div
                className="w-12 h-12 rounded-lg flex items-center justify-center mb-5"
                style={{ background: `${accent}1c`, boxShadow: `0 0 25px ${accent}35` }}
              >
                <Icon className="w-6 h-6" style={{ color: soft }} />
              </div>
              <h3 className="text-lg font-bold mb-2">{title}</h3>
              <p style={{ color: "#CBD5E1" }} className="leading-relaxed">
                {copy}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
