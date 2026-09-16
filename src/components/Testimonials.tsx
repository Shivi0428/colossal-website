import { useEffect, useState } from "react";
import { Quote } from "lucide-react";

// PLACEHOLDER TESTIMONIALS — swap in real client quotes (with permission)
// before launch. Initials are used instead of stock headshots so nothing
// here implies a specific real person who hasn't actually said this.
const TESTIMONIALS = [
  {
    quote:
      "Their engineering team delivered our core application 3 weeks ahead of schedule, and the digital campaign paid for itself within month one.",
    name: "J. Whitfield",
    title: "CTO",
    company: "a FinTech client",
  },
  {
    quote:
      "We finally have a technical partner who explains trade-offs instead of just billing hours. The cloud migration was seamless.",
    name: "R. Achebe",
    title: "Chief Growth Officer",
    company: "a Healthcare provider",
  },
  {
    quote:
      "Clear reporting, senior engineers on every call, and a marketing funnel that actually moved our pipeline numbers.",
    name: "S. Delacroix",
    title: "VP Operations",
    company: "an E-commerce brand",
  },
];

export default function Testimonials() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setIndex((i) => (i + 1) % TESTIMONIALS.length), 7000);
    return () => clearInterval(id);
  }, []);

  const t = TESTIMONIALS[index];

  return (
    <section className="py-20 md:py-28" style={{ background: "#F8FAFC" }}>
      <div className="max-w-3xl mx-auto px-6 lg:px-8">
        <div
          className="rounded-2xl p-10 md:p-14 text-center"
          style={{
            background: "#ffffff",
            border: "1px solid #E2E8F0",
            boxShadow: "0 4px 20px rgba(15,23,42,0.06)",
          }}
        >
          <div
            className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6"
            style={{ background: "linear-gradient(135deg, #F0FDFA, #ECFEFF)" }}
          >
            <Quote className="w-7 h-7" style={{ color: "#0891B2" }} />
          </div>
          <p key={index} className="text-xl md:text-2xl font-medium text-slate-900 leading-relaxed mb-8 tracking-tight">
            &ldquo;{t.quote}&rdquo;
          </p>
          <div className="flex items-center justify-center gap-3">
            <div
              className="w-11 h-11 rounded-full flex items-center justify-center font-bold text-white shrink-0"
              style={{ background: "linear-gradient(135deg, #0d9488, #0891b2)" }}
            >
              {t.name.split(" ").map((p) => p[0]).join("")}
            </div>
            <div className="text-left">
              <div className="font-bold text-slate-900 text-sm">{t.name}</div>
              <div className="text-sm" style={{ color: "#64748B" }}>
                {t.title}, {t.company}
              </div>
            </div>
          </div>

          <div className="flex items-center justify-center gap-2 mt-8">
            {TESTIMONIALS.map((item, i) => (
              <button
                key={item.name}
                onClick={() => setIndex(i)}
                aria-label={`Show testimonial ${i + 1}`}
                className="rounded-full transition-all duration-300"
                style={{
                  width: i === index ? 20 : 8,
                  height: 8,
                  background: i === index ? "#0891B2" : "#E2E8F0",
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
