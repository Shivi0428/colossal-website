const CLIENT_LOGOS = ["FinServe Group", "MedTrust Health", "Nimbus SaaS", "Halcyon Bank", "Vertex Retail", "Northgate Capital"];
// Duplicated so the ticker can loop seamlessly (translateX(-50%) lands exactly
// back on the same visual position as the start).
const TICKER_LOGOS = [...CLIENT_LOGOS, ...CLIENT_LOGOS];

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden text-white" style={{ background: "#050a0c" }}>
      <style>{`
        @keyframes heroGlowBreathe {
          0%, 100% { opacity: 0.65; transform: translate(-50%, 0) scale(0.92); }
          50% { opacity: 1; transform: translate(-50%, 0) scale(1.08); }
        }
        .hero-glow-breathe { animation: heroGlowBreathe 6s ease-in-out infinite; }

        @keyframes heroCyanPulse {
          0%, 100% { opacity: 0.5; }
          50% { opacity: 0.9; }
        }
        .hero-cyan-pulse { animation: heroCyanPulse 5s ease-in-out infinite; }

        @keyframes heroLogoScroll { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }
        .hero-logo-scroll { animation: heroLogoScroll 28s linear infinite; }
      `}</style>
      {/* Subtle background grid */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.12]"
        style={{
          backgroundImage:
            "linear-gradient(to right, #22d3ee 1px, transparent 1px), linear-gradient(to bottom, #22d3ee 1px, transparent 1px)",
          backgroundSize: "48px 48px",
          maskImage: "radial-gradient(ellipse 80% 60% at 50% 0%, black 40%, transparent 100%)",
          WebkitMaskImage: "radial-gradient(ellipse 80% 60% at 50% 0%, black 40%, transparent 100%)",
        }}
      />

      {/* Soft ambient glow, top-right - cyan */}
      <div
        className="hero-cyan-pulse absolute top-0 right-0 w-[700px] h-[700px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(34,211,238,0.35) 0%, transparent 70%)" }}
      />

      {/* Soft ambient glow, left side - deep teal */}
      <div
        className="absolute top-1/3 -left-40 w-[550px] h-[550px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(13,148,136,0.35) 0%, transparent 70%)" }}
      />

      {/* Glowing radial gradient directly behind the headline - teal/cyan, slowly breathing */}
      <div
        className="hero-glow-breathe absolute top-24 left-1/2 w-[1100px] h-[600px] pointer-events-none"
        style={{ background: "radial-gradient(ellipse at center, rgba(45,212,191,0.45) 0%, rgba(34,211,238,0.2) 40%, transparent 70%)" }}
      />

      <div className="relative max-w-5xl mx-auto px-6 lg:px-8 pt-20 pb-24 text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-[1.1] tracking-tight mb-6">
          We Build Digital Products &amp; Marketing Engines That{" "}
          <span
            className="bg-clip-text text-transparent"
            style={{ backgroundImage: "linear-gradient(90deg, #2dd4bf, #22d3ee)", textShadow: "0 0 70px rgba(34,211,238,0.45)" }}
          >
            Scale Business Revenue.
          </span>
        </h1>

        <p className="text-lg md:text-xl max-w-3xl mx-auto mb-10 leading-relaxed" style={{ color: "#CBD5E1" }}>
          Custom software engineering, cloud transformation, and performance marketing designed for
          enterprise growth — backed by guaranteed SLA commitments.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4 mb-16">
          <a
            href="#lead-capture"
            className="px-8 py-4 rounded-xl font-bold text-base text-slate-900 transition-transform hover:scale-105"
            style={{
              background: "linear-gradient(135deg, #2dd4bf, #22d3ee)",
              boxShadow: "0 0 20px rgba(34,211,238,0.6), 0 0 60px rgba(45,212,191,0.4), 0 8px 30px rgba(0,0,0,0.5)",
            }}
          >
            Schedule Your Growth Audit
          </a>
          <a
            href="#case-studies"
            className="px-8 py-4 rounded-xl font-semibold text-base text-white transition-colors"
            style={{ border: "1px solid rgba(34,211,238,0.35)" }}
            onMouseEnter={(e) => (e.currentTarget.style.background = "rgba(34,211,238,0.1)")}
            onMouseLeave={(e) => (e.currentTarget.style.background = "transparent")}
          >
            View Our Recent Work
          </a>
        </div>

        {/* Trust bar - continuous scrolling ticker */}
        <div>
          <p className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-5">
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
                  className="text-slate-500 font-bold text-sm tracking-wide whitespace-nowrap transition-colors duration-300 cursor-default"
                  onMouseEnter={(e) => (e.currentTarget.style.color = "#22d3ee")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "")}
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
