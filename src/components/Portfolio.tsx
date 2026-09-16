// PLACEHOLDER PORTFOLIO — the old site had 7 real project thumbnails here.
// These are generic, freely-licensed stock photos (Unsplash, free for
// commercial use, no attribution required) standing in for real project
// screenshots until Amit provides actual client work to show. Do not
// present these as real client projects; swap in actual screenshots first.
const PROJECTS = [
  {
    title: "SaaS Analytics Dashboard",
    category: "Web App",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "E-commerce Platform Rebuild",
    category: "Website",
    image: "https://images.unsplash.com/photo-1522199755839-a2bacb67c546?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Field Services Mobile App",
    category: "Mobile App",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Cloud Migration & DevOps",
    category: "Cloud Engineering",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&q=80",
  },
];

export default function Portfolio() {
  return (
    <section className="py-20 md:py-28" style={{ background: "#F8FAFC" }}>
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-3">Recent Work</h2>
          <p style={{ color: "#475569" }} className="max-w-2xl mx-auto">
            A sample of the kind of projects we build. Real case studies with client permission coming soon.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {PROJECTS.map((p) => (
            <div
              key={p.title}
              className="group rounded-2xl overflow-hidden transition-all duration-300"
              style={{ background: "#ffffff", border: "1px solid #E2E8F0", boxShadow: "0 1px 3px rgba(15,23,42,0.06)" }}
              onMouseEnter={(e) => (e.currentTarget.style.boxShadow = "0 12px 28px -8px rgba(15,23,42,0.15)")}
              onMouseLeave={(e) => (e.currentTarget.style.boxShadow = "0 1px 3px rgba(15,23,42,0.06)")}
            >
              <div className="aspect-[16/10] overflow-hidden">
                <img
                  src={p.image}
                  alt={p.title}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-5">
                <span
                  className="inline-block text-[10px] font-bold uppercase tracking-wide px-2 py-1 rounded-full mb-2"
                  style={{ background: "#F0FDFA", color: "#0D9488" }}
                >
                  {p.category}
                </span>
                <h3 className="text-lg font-bold text-slate-900">{p.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
