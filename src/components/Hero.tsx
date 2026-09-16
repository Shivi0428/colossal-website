const CLIENT_LOGOS = ["FinServe Group", "MedTrust Health", "Nimbus SaaS", "Halcyon Bank", "Vertex Retail", "Northgate Capital"];
// Duplicated so the ticker can loop seamlessly (translateX(-50%) lands exactly
// back on the same visual position as the start).
const TICKER_LOGOS = [...CLIENT_LOGOS, ...CLIENT_LOGOS];

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden" style={{ background: "#F8FAFC" }}>
      <style>{`
        @keyframes heroGlowBreathe {
          0%, 100% { opacity: 0.5; transform: translate(-50%, 0) scale(0.94); }
          50% { opacity: 0.85; transform: translate(-50%, 0) scale(1.06); }
        }
        .hero-glow-breathe { animation: heroGlowBreathe 6s ease-in-out infinite; }

        @keyframes heroTextBreathe {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.025); }
        }
        .hero-text-breathe { animation: heroTextBreathe 6s ease-in-out infinite; display: inline-block; }

        @keyframes heroLogoScroll { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }
        .hero-logo-scroll { animation: heroLogoScroll 28s linear infinite; }
      `}</style>
      {/* Subtle background grid */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.05]"
        style={{
          backgroundImage:
            "linear-gradient(to right, #0891b2 1px, transparent 1px), linear-gradient(to bottom, #0891b2 1px, transparent 1px)",
          backgroundSize: "48px 48px",
          maskImage: "radial-gradient(ellipse 80% 60% at 50% 0%, black 40%, transparent 100%)",
          WebkitMaskImage: "radial-gradient(ellipse 80% 60% at 50% 0%, black 40%, transparent 100%)",
        }}
      />

      {/* Soft ambient glow, top-right - light cyan */}
      <div
        className="absolute top-0 right-0 w-[650px] h-[650px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(103,232,249,0.35) 0%, transparent 70%)" }}
      />

      {/* Soft ambient glow, left side - light teal */}
      <div
        className="absolute top-1/3 -left-40 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(94,234,212,0.35) 0%, transparent 70%)" }}
      />

      {/* Glowing radial gradient directly behind the headline - teal/cyan, slowly breathing */}
      <div
        className="hero-glow-breathe absolute top-24 left-1/2 w-[1000px] h-[550px] pointer-events-none"
        style={{ background: "radial-gradient(ellipse at center, rgba(94,234,212,0.4) 0%, rgba(103,232,249,0.25) 40%, transparent 70%)" }}
      />

      <div className="relative max-w-5xl mx-auto px-6 lg:px-8 pt-20 pb-24 text-center">
        <h1 className="hero-text-breathe text-4xl md:text-5xl lg:text-6xl font-extrabold leading-[1.1] tracking-tight mb-6 text-slate-900">
          We Build Digital Products &amp; Marketing Engines That{" "}
          <span
            className="bg-clip-text text-transparent"
            style={{ backgroundImage: "linear-gradient(90deg, #0d9488, #0891b2)" }}
          >
            Scale Business Revenue.
          </span>
        </h1>

        <p className="text-lg md:text-xl max-w-3xl mx-auto mb-10 leading-relaxed" style={{ color: "#475569" }}>
          Custom software engineering, cloud transformation, and performance marketing designed for
          enterprise growth — backed by guaranteed SLA commitments.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4 mb-16">
          <a
            href="#lead-capture"
            className="px-8 py-4 rounded-xl font-bold text-base text-white transition-transform hover:scale-105"
            style={{
              background: "linear-gradient(135deg, #0d9488, #0891b2)",
              boxShadow: "0 8px 24px rgba(8,145,178,0.35)",
            }}
          >
            Schedule Your Growth Audit
          </a>
          <a
            href="#case-studies"
            className="px-8 py-4 rounded-xl font-semibold text-base transition-colors"
            style={{ border: "1px solid #CBD5E1", color: "#0F172A" }}
            onMouseEnter={(e) => (e.currentTarget.style.background = "#F0FDFA")}
            onMouseLeave={(e) => (e.currentTarget.style.background = "transparent")}
          >
            View Our Recent Work
          </a>
        </div>

        {/* Trust bar - continuous scrolling ticker */}
        <div>
          <p className="text-xs font-semibold uppercase tracking-wider mb-5" style={{ color: "#94A3B8" }}>
            Trusted by industry leaders in Finance, Healthcare, and SaaS
          </p>
          <div
            className="relative overflow-hidden mx-auto"
            style={{
              maxWidth: 900,
              maskImage: "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
              WebkitMaskImage: "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
            }}
          >
            <div className="hero-logo-scroll flex items-center gap-14 w-max">
              {TICKER_LOGOS.map((name, i) => (
                <span
                  key={`${name}-${i}`}
                  className="font-bold text-sm tracking-wide whitespace-nowrap transition-colors duration-300 cursor-default"
                  style={{ color: "#94A3B8" }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "#0891b2")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "#94A3B8")}
                >
                  {name}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
