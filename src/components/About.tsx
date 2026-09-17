const WHAT_WE_DO = [
  "Software Development",
  "Mobile App Development (iOS, Android, React Native)",
  "Digital Marketing",
  "Consulting Services",
  "ERP Solutions",
  "Cloud Transformation",
];

export default function About() {
  return (
    <section id="about" className="py-20 md:py-28" style={{ background: "#F8FAFC" }}>
      <div className="max-w-6xl mx-auto px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-5 gap-12 items-start">
        <div className="lg:col-span-3">
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-6">About Colossal Info Solutions</h2>
          <p style={{ color: "#475569" }} className="leading-relaxed mb-5">
            Colossal Info Solutions is a UK-based technology company delivering software development, mobile app
            development, ERP solutions, cloud transformation, and digital marketing to businesses of every size. With
            10+ years of hands-on experience across our team, we've built a reputation as a dependable, full-spectrum
            technology partner for clients who care more about the quality of the work than the size of the invoice.
          </p>
          <p style={{ color: "#475569" }} className="leading-relaxed">
            We work to a straightforward process rather than one-size-fits-all packages: understand your goals,
            recommend the right solution, and deliver it end to end, from planning and design through to build,
            testing, deployment, and ongoing support. That approach, paired with genuinely budget-friendly plans, is
            what has kept clients coming back to us project after project.
          </p>
        </div>

        <div className="lg:col-span-2">
          <div
            className="rounded-2xl p-8"
            style={{ background: "#ffffff", border: "1px solid #E2E8F0", boxShadow: "0 1px 3px rgba(15,23,42,0.06)" }}
          >
            <h3 className="text-sm font-bold uppercase tracking-wide mb-5" style={{ color: "#0D9488" }}>
              What We Do
            </h3>
            <ul className="space-y-3">
              {WHAT_WE_DO.map((item) => (
                <li key={item} className="flex items-start gap-2.5 text-slate-700 text-sm leading-relaxed">
                  <span
                    className="mt-1.5 w-1.5 h-1.5 rounded-full shrink-0"
                    style={{ background: "linear-gradient(135deg, #0d9488, #0891b2)" }}
                  />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
