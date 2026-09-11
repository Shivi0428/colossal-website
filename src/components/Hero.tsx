const CLIENT_LOGOS = ["FinServe Group", "MedTrust Health", "Nimbus SaaS", "Halcyon Bank", "Vertex Retail", "Northgate Capital"];

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-slate-900 text-white">
      {/* Subtle background grid */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.07]"
        style={{
          backgroundImage:
            "linear-gradient(to right, #94a3b8 1px, transparent 1px), linear-gradient(to bottom, #94a3b8 1px, transparent 1px)",
          backgroundSize: "48px 48px",
          maskImage: "radial-gradient(ellipse 80% 60% at 50% 0%, black 40%, transparent 100%)",
          WebkitMaskImage: "radial-gradient(ellipse 80% 60% at 50% 0%, black 40%, transparent 100%)",
        }}
      />

      {/* Soft ambient glow, top-right */}
      <div
        className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(45,212,191,0.18) 0%, transparent 70%)" }}
      />

      {/* Glowing radial gradient directly behind the headline */}
      <div
        className="absolute top-24 left-1/2 -translate-x-1/2 w-[900px] h-[500px] pointer-events-none"
        style={{ background: "radial-gradient(ellipse at center, rgba(45,212,191,0.22) 0%, transparent 65%)" }}
      />

      <div className="relative max-w-5xl mx-auto px-6 lg:px-8 pt-20 pb-24 text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-[1.1] tracking-tight mb-6">
          We Build Digital Products &amp; Marketing Engines That{" "}
          <span style={{ color: "#2dd4bf" }}>Scale Business Revenue.</span>
        </h1>

        <p className="text-lg md:text-xl text-slate-300 max-w-3xl mx-auto mb-10 leading-relaxed">
          Custom software engineering, cloud transformation, and performance marketing designed for
          enterprise growth — backed by guaranteed SLA commitments.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4 mb-16">
          <a
            href="#lead-capture"
            className="px-8 py-4 rounded-xl font-bold text-base text-slate-900 shadow-xl transition-transform hover:scale-105"
            style={{ background: "#2dd4bf" }}
          >
            Schedule Your Growth Audit
          </a>
          <a
            href="#case-studies"
            className="px-8 py-4 rounded-xl font-semibold text-base text-white border border-white/25 hover:bg-white/10 transition-colors"
          >
            View Our Recent Work
          </a>
        </div>

        {/* Trust bar */}
        <div>
          <p className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-5">
            Trusted by industry leaders in Finance, Healthcare, and SaaS
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-4">
            {CLIENT_LOGOS.map((name) => (
              <span key={name} className="text-slate-500 font-bold text-sm tracking-wide">
                {name}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
