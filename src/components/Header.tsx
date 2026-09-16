import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const NAV_LINKS = ["Services", "Case Studies", "About", "Insights"];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className="sticky top-0 z-50 w-full transition-all duration-300 backdrop-blur-md"
      style={{
        background: scrolled ? "rgba(255,255,255,0.92)" : "#ffffff",
        boxShadow: scrolled ? "0 4px 20px rgba(15,23,42,0.06)" : "none",
        borderBottom: "1px solid #E2E8F0",
      }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8 h-18 flex items-center justify-between" style={{ height: 72 }}>
        {/* Logo */}
        <a href="#top" className="flex items-center gap-2.5 shrink-0">
          <div className="w-9 h-9 rounded-lg flex items-center justify-center font-extrabold text-white" style={{ background: "linear-gradient(135deg, #0d9488, #0891b2)" }}>
            C
          </div>
          <span className="text-slate-900 font-bold text-lg tracking-tight">Colossal Info Solutions</span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase().replace(" ", "-")}`}
              className="text-slate-600 hover:text-slate-900 text-sm font-medium transition-colors"
            >
              {link}
            </a>
          ))}
        </nav>

        <div className="hidden lg:block">
          <a
            href="#lead-capture"
            className="px-5 py-2.5 rounded-lg font-bold text-sm transition-all"
            style={{ border: "1px solid #CBD5E1", background: "transparent", color: "#0F172A" }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "#F0FDFA";
              e.currentTarget.style.borderColor = "#0D9488";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "transparent";
              e.currentTarget.style.borderColor = "#CBD5E1";
            }}
          >
            Book a Strategy Call
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          className="lg:hidden text-slate-900 p-2"
          onClick={() => setMobileOpen((o) => !o)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden px-6 py-4 flex flex-col gap-4" style={{ background: "#ffffff", borderTop: "1px solid #E2E8F0" }}>
          {NAV_LINKS.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase().replace(" ", "-")}`}
              className="text-slate-600 hover:text-slate-900 text-sm font-medium"
              onClick={() => setMobileOpen(false)}
            >
              {link}
            </a>
          ))}
          <a
            href="#lead-capture"
            className="mt-2 px-5 py-2.5 rounded-lg font-bold text-sm text-center"
            style={{ border: "1px solid #CBD5E1", color: "#0F172A" }}
            onClick={() => setMobileOpen(false)}
          >
            Book a Strategy Call
          </a>
        </div>
      )}
    </header>
  );
}
