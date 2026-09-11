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
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        scrolled ? "bg-slate-900/95 backdrop-blur-md shadow-lg shadow-black/20" : "bg-slate-900"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8 h-18 flex items-center justify-between" style={{ height: 72 }}>
        {/* Logo */}
        <a href="#top" className="flex items-center gap-2.5 shrink-0">
          <div className="w-9 h-9 rounded-lg flex items-center justify-center font-extrabold text-slate-900" style={{ background: "#2dd4bf" }}>
            C
          </div>
          <span className="text-white font-bold text-lg tracking-tight">Colossal Info Solutions</span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase().replace(" ", "-")}`}
              className="text-slate-300 hover:text-white text-sm font-medium transition-colors"
            >
              {link}
            </a>
          ))}
        </nav>

        <div className="hidden lg:block">
          <a
            href="#lead-capture"
            className="px-5 py-2.5 rounded-lg font-bold text-sm text-slate-900 transition-transform hover:scale-105"
            style={{ background: "#2dd4bf" }}
          >
            Book a Strategy Call
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          className="lg:hidden text-white p-2"
          onClick={() => setMobileOpen((o) => !o)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-slate-900 border-t border-slate-800 px-6 py-4 flex flex-col gap-4">
          {NAV_LINKS.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase().replace(" ", "-")}`}
              className="text-slate-300 hover:text-white text-sm font-medium"
              onClick={() => setMobileOpen(false)}
            >
              {link}
            </a>
          ))}
          <a
            href="#lead-capture"
            className="mt-2 px-5 py-2.5 rounded-lg font-bold text-sm text-slate-900 text-center"
            style={{ background: "#2dd4bf" }}
            onClick={() => setMobileOpen(false)}
          >
            Book a Strategy Call
          </a>
        </div>
      )}
    </header>
  );
}
