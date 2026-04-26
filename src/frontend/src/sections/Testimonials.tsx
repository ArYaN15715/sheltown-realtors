import { Star } from "lucide-react";
import { AnimatePresence, motion, useInView } from "motion/react";
import { useEffect, useRef, useState } from "react";

function FadeUp({
  children,
  delay = 0,
  className = "",
}: { children: React.ReactNode; delay?: number; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

const TESTIMONIALS = [
  {
    id: "t1",
    name: "Rajiv Mehta",
    role: "Software Entrepreneur",
    propertyType: "3BHK Buyer, Gurugram",
    text: "SheltOwn didn't just find me a flat — they found me an investment. Their market insight is unmatched. Got 18% appreciation in the first year alone.",
    rating: 5,
  },
  {
    id: "t2",
    name: "Priya Sharma",
    role: "Senior Executive",
    propertyType: "2BHK Buyer, New Delhi",
    text: "From shortlisting to loan approval, everything was seamless. The team's transparency and professionalism is genuinely rare in this industry.",
    rating: 5,
  },
  {
    id: "t3",
    name: "Anil & Sunita Kapoor",
    role: "Retired Couple",
    propertyType: "Villa Buyers, Noida",
    text: "We were nervous first-time buyers. SheltOwn held our hand through every step. Now we wake up every morning in our dream home.",
    rating: 5,
  },
  {
    id: "t4",
    name: "Deepak Verma",
    role: "Business Owner",
    propertyType: "Investment Portfolio, Delhi NCR",
    text: "Built a portfolio of 3 properties with SheltOwn's guidance. Every recommendation was backed by solid data and honest advice. Remarkable team.",
    rating: 5,
  },
];

export function Testimonials() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActive((v) => (v + 1) % TESTIMONIALS.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="testimonials"
      className="bg-muted/30 py-20 md:py-28 section-divider"
      data-ocid="testimonials.section"
    >
      <div className="container mx-auto px-4 md:px-8">
        <FadeUp className="text-center mb-14">
          <span className="text-label teal-text mb-3 block">
            Client Stories
          </span>
          <h2 className="text-heading text-foreground">What Our Clients Say</h2>
          <p className="text-muted-foreground mt-4 max-w-xl mx-auto leading-relaxed">
            Hundreds of families have trusted SheltOwn to guide their most
            important financial decisions. Here's what they say.
          </p>
        </FadeUp>

        <div className="max-w-3xl mx-auto">
          <AnimatePresence mode="wait">
            {TESTIMONIALS.map((t, i) =>
              i === active ? (
                <motion.div
                  key={t.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                  className="card-premium rounded-2xl p-8 md:p-12 text-center"
                  data-ocid={`testimonials.card.${i + 1}`}
                >
                  {/* Stars */}
                  <div className="flex justify-center gap-1 mb-6">
                    {Array.from({ length: t.rating }).map((_, idx) => (
                      <Star
                        key={`star-${t.id}-${idx}`}
                        size={18}
                        className="teal-text fill-current"
                        aria-hidden
                      />
                    ))}
                  </div>
                  {/* Quote */}
                  <p className="text-foreground text-lg md:text-xl leading-relaxed mb-8 italic font-body">
                    "{t.text}"
                  </p>
                  {/* Attribution */}
                  <div className="flex flex-col items-center gap-1">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center font-display font-bold teal-text text-sm mb-1">
                      {t.name.charAt(0)}
                    </div>
                    <span className="font-display font-semibold text-foreground">
                      {t.name}
                    </span>
                    <span className="text-sm text-muted-foreground">
                      {t.propertyType}
                    </span>
                  </div>
                </motion.div>
              ) : null,
            )}
          </AnimatePresence>

          {/* Dot navigation */}
          <div className="flex justify-center gap-2 mt-8">
            {TESTIMONIALS.map((t, i) => (
              <button
                key={`dot-${t.id}`}
                type="button"
                onClick={() => setActive(i)}
                aria-label={`Testimonial ${i + 1}`}
                className={`h-2 rounded-full transition-smooth ${i === active ? "btn-teal w-6" : "bg-muted-foreground/40 w-2"}`}
                data-ocid={`testimonials.dot.${i + 1}`}
              />
            ))}
          </div>

          {/* All cards preview on desktop */}
          <div className="hidden md:grid md:grid-cols-4 gap-4 mt-10">
            {TESTIMONIALS.map((t, i) => (
              <button
                key={`preview-${t.id}`}
                type="button"
                onClick={() => setActive(i)}
                className={`text-left p-4 rounded-xl border transition-smooth cursor-pointer ${i === active ? "border-primary/40 bg-card" : "border-border bg-card/50 hover:border-border/60"}`}
                data-ocid={`testimonials.item.${i + 1}`}
              >
                <div className="flex gap-0.5 mb-2">
                  {Array.from({ length: 5 }).map((_, idx) => (
                    <Star
                      key={`mini-star-${t.id}-${idx}`}
                      size={10}
                      className="teal-text fill-current"
                      aria-hidden
                    />
                  ))}
                </div>
                <p className="text-xs text-muted-foreground line-clamp-2 mb-2">
                  {t.text}
                </p>
                <p className="text-xs font-semibold text-foreground">
                  {t.name}
                </p>
                <p className="text-xs text-muted-foreground">
                  {t.propertyType}
                </p>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
