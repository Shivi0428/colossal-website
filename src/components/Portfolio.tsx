// PLACEHOLDER PORTFOLIO — the old site had 7 real project thumbnails here.
// These are generic, freely-licensed stock photos (Unsplash, free for
// commercial use, no attribution required) standing in for real project
// screenshots until Amit provides actual client work to show. Do not
// present these as real client projects; swap in actual screenshots first.
const PROJECTS = [
  {
    title: "SaaS Analytics Dashboard",
    category: "Software Development",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Field Services Mobile App",
    category: "Mobile App Development",
    image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Multi-Channel Growth Campaign",
    category: "Digital Marketing",
    image: "https://images.unsplash.com/photo-1557838923-2985c318be48?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Enterprise Tech Roadmap",
    category: "Consulting Services",
    image: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Multi-Site Inventory ERP",
    category: "ERP Solutions",
    image: "https://images.unsplash.com/photo-1553413077-190dd305871c?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Cloud Migration & DevOps",
    category: "Cloud Transformation",
    image: "https://images.unsplash.com/photo-1667984390538-3dea7a3fe33d?auto=format&fit=crop&w=800&q=80",
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

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
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
