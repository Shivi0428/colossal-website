const CORE_SERVICES = [
  "Website Development",
  "Mobile App Development",
  "Workflow Automation",
  "Software & Cloud Engineering",
  "Digital Marketing",
  "Strategic Tech Consulting",
];

const QUICK_LINKS = ["Services", "Case Studies", "About", "Insights"];

const LEGAL_LINKS = ["GDPR", "Privacy Policy", "Terms of Service"];

export default function Footer() {
  return (
    <footer className="pt-16 pb-8" style={{ background: "#1E293B", color: "#94A3B8" }}>
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Company info */}
          <div>
            <div className="flex items-center gap-2.5 mb-4">
              <div
                className="w-8 h-8 rounded-lg flex items-center justify-center font-extrabold text-white"
                style={{ background: "linear-gradient(135deg, #0d9488, #0891b2)" }}
              >
                C
              </div>
              <span className="text-white font-bold">Colossal Info Solutions</span>
            </div>
            <p className="text-sm leading-relaxed mb-1">107-111 Fleet Street</p>
            <p className="text-sm leading-relaxed mb-1">London, United Kingdom, EC4A 2AB</p>
            <p className="text-sm leading-relaxed mb-1">
              <a href="mailto:sales@colossalinfosolutions.co.uk" className="hover:text-white transition-colors">
                sales@colossalinfosolutions.co.uk
              </a>
            </p>
            <p className="text-sm leading-relaxed">
              <a href="tel:+447769027935" className="hover:text-white transition-colors">
                +44 7769 027935
              </a>
            </p>
          </div>

          {/* Core services */}
          <div>
            <h4 className="text-white font-bold text-sm uppercase tracking-wide mb-4">Core Services</h4>
            <ul className="space-y-2.5 text-sm">
              {CORE_SERVICES.map((s) => (
                <li key={s}>
                  <a href="#services" className="hover:text-white transition-colors">
                    {s}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="text-white font-bold text-sm uppercase tracking-wide mb-4">Quick Links</h4>
            <ul className="space-y-2.5 text-sm">
              {QUICK_LINKS.map((l) => (
                <li key={l}>
                  <a href={`#${l.toLowerCase().replace(" ", "-")}`} className="hover:text-white transition-colors">
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal & compliance */}
          <div>
            <h4 className="text-white font-bold text-sm uppercase tracking-wide mb-4">Legal &amp; Compliance</h4>
            <ul className="space-y-2.5 text-sm mb-6">
              {LEGAL_LINKS.map((l) => (
                <li key={l}>
                  <a href="#" className="hover:text-white transition-colors">
                    {l}
                  </a>
                </li>
              ))}
            </ul>
            {/* Certification badges - placeholders until real partner/cert status is confirmed */}
            <div className="flex flex-wrap gap-2">
              {["AWS Partner", "ISO 27001", "Google Partner"].map((badge) => (
                <span
                  key={badge}
                  className="text-[10px] font-bold uppercase tracking-wide px-2.5 py-1 rounded text-slate-300"
                  style={{ border: "1px solid #334155" }}
                >
                  {badge}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="pt-6 text-center text-xs" style={{ borderTop: "1px solid #334155", color: "#64748B" }}>
          © {new Date().getFullYear()} Colossal Info Solutions. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
