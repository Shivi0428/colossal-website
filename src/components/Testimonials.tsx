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
    <section className="py-20 md:py-28" style={{ background: "#132420" }}>
      <div className="max-w-3xl mx-auto px-6 lg:px-8">
        <div
          className="rounded-2xl p-10 md:p-14 text-center"
          style={{
            background: "rgba(15,28,25,0.6)",
            backdropFilter: "blur(12px)",
            border: "1px solid rgba(45,212,191,0.2)",
            boxShadow: "0 0 40px rgba(45,212,191,0.12)",
          }}
        >
          <div
            className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6"
            style={{ background: "linear-gradient(135deg, rgba(74,222,128,0.2), rgba(45,212,191,0.2))", boxShadow: "0 0 40px rgba(45,212,191,0.4)" }}
          >
            <Quote className="w-7 h-7" style={{ color: "#86efac" }} />
          </div>
          <p key={index} className="text-xl md:text-2xl font-medium text-white leading-relaxed mb-8 tracking-tight">
            &ldquo;{t.quote}&rdquo;
          </p>
          <div className="flex items-center justify-center gap-3">
            <div
              className="w-11 h-11 rounded-full flex items-center justify-center font-bold text-slate-900 shrink-0"
              style={{ background: "linear-gradient(135deg, #4ade80, #2dd4bf)", boxShadow: "0 0 20px rgba(45,212,191,0.4)" }}
            >
              {t.name.split(" ").map((p) => p[0]).join("")}
            </div>
            <div className="text-left">
              <div className="font-bold text-white text-sm">{t.name}</div>
              <div className="text-sm" style={{ color: "#CBD5E1" }}>
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
                  background: i === index ? "#2dd4bf" : "rgba(148,163,184,0.3)",
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
