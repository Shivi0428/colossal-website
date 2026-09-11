import { Users, BarChart3, Lock } from "lucide-react";

const DIFFERENTIATORS = [
  {
    icon: Users,
    title: "Dedicated Senior Team",
    copy: "Direct access to veteran engineers and strategists — no junior hand-offs.",
  },
  {
    icon: BarChart3,
    title: "Transparent Reporting",
    copy: "Live dashboard access to track every pipeline metric, code commit, and ad spend dollar in real time.",
  },
  {
    icon: Lock,
    title: "Built for Security",
    copy: "Bank-grade security standards, GDPR/HIPAA compliance, and robust data protection protocols.",
  },
];

export default function WhyUs() {
  return (
    <section id="about" className="bg-slate-900 text-white py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-3">Why Work With Us</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {DIFFERENTIATORS.map(({ icon: Icon, title, copy }) => (
            <div key={title} className="flex flex-col items-start">
              <div
                className="w-12 h-12 rounded-lg flex items-center justify-center mb-5"
                style={{ background: "rgba(45,212,191,0.15)" }}
              >
                <Icon className="w-6 h-6" style={{ color: "#2dd4bf" }} />
              </div>
              <h3 className="text-lg font-bold mb-2">{title}</h3>
              <p className="text-slate-400 leading-relaxed">{copy}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
