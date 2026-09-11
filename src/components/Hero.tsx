const CLIENT_LOGOS = ["FinServe Group", "MedTrust Health", "Nimbus SaaS", "Halcyon Bank", "Vertex Retail", "Northgate Capital"];

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden text-white" style={{ background: "#132420" }}>
      {/* Subtle background grid */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.1]"
        style={{
          backgroundImage:
            "linear-gradient(to right, #4ade80 1px, transparent 1px), linear-gradient(to bottom, #4ade80 1px, transparent 1px)",
          backgroundSize: "48px 48px",
          maskImage: "radial-gradient(ellipse 80% 60% at 50% 0%, black 40%, transparent 100%)",
          WebkitMaskImage: "radial-gradient(ellipse 80% 60% at 50% 0%, black 40%, transparent 100%)",
        }}
      />

      {/* Soft ambient glow, top-right - emerald */}
      <div
        className="absolute top-0 right-0 w-[650px] h-[650px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(52,211,153,0.3) 0%, transparent 70%)" }}
      />

      {/* Soft ambient glow, left side - green */}
      <div
        className="absolute top-1/3 -left-40 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(74,222,128,0.22) 0%, transparent 70%)" }}
      />

      {/* Glowing radial gradient directly behind the headline - teal */}
      <div
        className="absolute top-24 left-1/2 -translate-x-1/2 w-[1000px] h-[550px] pointer-events-none"
        style={{ background: "radial-gradient(ellipse at center, rgba(45,212,191,0.35) 0%, transparent 65%)" }}
      />

      <div className="relative max-w-5xl mx-auto px-6 lg:px-8 pt-20 pb-24 text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-[1.1] tracking-tight mb-6">
          We Build Digital Products &amp; Marketing Engines That{" "}
          <span
            className="bg-clip-text text-transparent"
            style={{ backgroundImage: "linear-gradient(90deg, #4ade80, #2dd4bf)", textShadow: "0 0 60px rgba(45,212,191,0.4)" }}
          >
            Scale Business Revenue.
          </span>
        </h1>

        <p className="text-lg md:text-xl text-slate-300 max-w-3xl mx-auto mb-10 leading-relaxed">
          Custom software engineering, cloud transformation, and performance marketing designed for
          enterprise growth — backed by guaranteed SLA commitments.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4 mb-16">
          <a
            href="#lead-capture"
            className="px-8 py-4 rounded-xl font-bold text-base text-slate-900 transition-transform hover:scale-105"
            style={{ background: "linear-gradient(135deg, #4ade80, #2dd4bf)", boxShadow: "0 0 40px rgba(45,212,191,0.5)" }}
          >
            Schedule Your Growth Audit
          </a>
          <a
            href="#case-studies"
            className="px-8 py-4 rounded-xl font-semibold text-base text-white transition-colors"
            style={{ border: "1px solid rgba(74,222,128,0.35)" }}
            onMouseEnter={(e) => (e.currentTarget.style.background = "rgba(74,222,128,0.1)")}
            onMouseLeave={(e) => (e.currentTarget.style.background = "transparent")}
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
