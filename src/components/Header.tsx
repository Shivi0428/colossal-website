import { useEffect, useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";

const NAV_LINKS = ["Case Studies", "About", "Insights"];

const SERVICE_LINKS = [
  { label: "Software Development", href: "#service-software-development" },
  { label: "Mobile App Development", href: "#service-mobile-app-development" },
  { label: "Digital Marketing", href: "#service-digital-marketing" },
  { label: "Consulting Services", href: "#service-consulting-services" },
  { label: "ERP Solutions", href: "#service-erp-solutions" },
  { label: "Cloud Transformation", href: "#service-cloud-transformation" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);

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
          <div
            className="relative"
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}
          >
            <a
              href="#services"
              className="flex items-center gap-1 text-slate-600 hover:text-slate-900 text-sm font-medium transition-colors"
            >
              Services
              <ChevronDown className="w-3.5 h-3.5" />
            </a>
            {servicesOpen && (
              <div
                className="absolute top-full left-0 pt-3 w-64"
                onMouseEnter={() => setServicesOpen(true)}
                onMouseLeave={() => setServicesOpen(false)}
              >
                <div
                  className="rounded-xl overflow-hidden py-2"
                  style={{ background: "#ffffff", border: "1px solid #E2E8F0", boxShadow: "0 12px 28px -8px rgba(15,23,42,0.15)" }}
                >
                  {SERVICE_LINKS.map((s) => (
                    <a
                      key={s.label}
                      href={s.href}
                      className="block px-4 py-2.5 text-sm text-slate-600 hover:text-slate-900 transition-colors"
                      onMouseEnter={(e) => (e.currentTarget.style.background = "#F0FDFA")}
                      onMouseLeave={(e) => (e.currentTarget.style.background = "transparent")}
                    >
                      {s.label}
                    </a>
                  ))}
                </div>
              </div>
            )}
          </div>
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
        <div className="lg:hidden px-6 py-4 flex flex-col gap-1 text-left" style={{ background: "#ffffff", borderTop: "1px solid #E2E8F0" }}>
          <button
            className="flex items-center justify-between py-2.5 text-slate-600 text-sm font-medium"
            onClick={() => setMobileServicesOpen((o) => !o)}
          >
            Services
            <ChevronDown className={`w-4 h-4 transition-transform ${mobileServicesOpen ? "rotate-180" : ""}`} />
          </button>
          {mobileServicesOpen && (
            <div className="flex flex-col pl-4 pb-2 gap-2.5">
              {SERVICE_LINKS.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  className="text-slate-500 text-sm"
                  onClick={() => {
                    setMobileOpen(false);
                    setMobileServicesOpen(false);
                  }}
                >
                  {s.label}
                </a>
              ))}
            </div>
          )}
          {NAV_LINKS.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase().replace(" ", "-")}`}
              className="py-2.5 text-slate-600 hover:text-slate-900 text-sm font-medium"
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
