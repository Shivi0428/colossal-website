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
      <div className="max-w-6xl mx-auto px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-5 gap-12 items-center">
        <div className="lg:col-span-2 relative">
          <div
            className="absolute -top-4 -left-4 w-full h-full rounded-2xl"
            style={{ background: "linear-gradient(135deg, #0d9488, #0891b2)", opacity: 0.15 }}
          />
          <img
            src="https://images.unsplash.com/photo-1582005450386-52b25f82d9bb?auto=format&fit=crop&w=900&q=80"
            alt="The Colossal Info Solutions team at work"
            loading="lazy"
            className="relative w-full aspect-[4/5] object-cover rounded-2xl"
            style={{ border: "1px solid #E2E8F0", boxShadow: "0 12px 28px -8px rgba(15,23,42,0.15)" }}
          />
        </div>

        <div className="lg:col-span-3">
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-6">About Colossal Info Solutions</h2>
          <p style={{ color: "#475569" }} className="leading-relaxed mb-5">
            Colossal Info Solutions is a UK-based technology company delivering software development, mobile app
            development, ERP solutions, cloud transformation, and digital marketing to businesses of every size. With
            10+ years of hands-on experience across our team, we've built a reputation as a dependable, full-spectrum
            technology partner for clients who care more about the quality of the work than the size of the invoice.
          </p>
          <p style={{ color: "#475569" }} className="leading-relaxed mb-8">
            We work to a straightforward process rather than one-size-fits-all packages: understand your goals,
            recommend the right solution, and deliver it end to end, from planning and design through to build,
            testing, deployment, and ongoing support. That approach, paired with genuinely budget-friendly plans, is
            what has kept clients coming back to us project after project.
          </p>

          <h3 className="text-sm font-bold uppercase tracking-wide mb-4" style={{ color: "#0D9488" }}>
            What We Do
          </h3>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3">
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
    </section>
  );
}
