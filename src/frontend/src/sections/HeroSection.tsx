import { MapPin } from "lucide-react";
import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef, useState } from "react";
import type { SearchFilters, SearchType } from "../types";

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

function SearchBar() {
  const [activeType, setActiveType] = useState<SearchType>("Buy");
  const [filters, setFilters] = useState<SearchFilters>({
    type: "Buy",
    location: "",
    budget: "",
  });
  const types: SearchType[] = ["Buy", "Invest", "Finance"];

  return (
    <div
      className="bg-card/80 backdrop-blur-md border border-border rounded-2xl p-4 md:p-6 shadow-elevated"
      data-ocid="hero.search_bar"
    >
      <div className="flex gap-1 bg-muted/50 p-1 rounded-xl mb-4 w-fit">
        {types.map((t) => (
          <button
            key={t}
            type="button"
            onClick={() => {
              setActiveType(t);
              setFilters((f) => ({ ...f, type: t }));
            }}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-smooth ${
              activeType === t
                ? "btn-teal"
                : "text-muted-foreground hover:text-foreground"
            }`}
            data-ocid={`hero.search_type_${t.toLowerCase()}`}
          >
            {t}
          </button>
        ))}
      </div>
      <div className="flex flex-col md:flex-row gap-3">
        <div className="flex-1 relative">
          <MapPin
            size={16}
            className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground"
            aria-hidden
          />
          <input
            id="search-location"
            type="text"
            placeholder="Location — Delhi, Noida, Gurugram..."
            value={filters.location}
            onChange={(e) =>
              setFilters((f) => ({ ...f, location: e.target.value }))
            }
            className="w-full bg-muted/40 border border-border rounded-lg pl-9 pr-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary transition-smooth"
            data-ocid="hero.search_location_input"
            aria-label="Search location"
          />
        </div>
        <div className="flex-1">
          <select
            id="search-budget"
            value={filters.budget}
            onChange={(e) =>
              setFilters((f) => ({ ...f, budget: e.target.value }))
            }
            className="w-full bg-muted/40 border border-border rounded-lg px-4 py-3 text-sm text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary transition-smooth appearance-none"
            data-ocid="hero.search_budget_select"
            aria-label="Select budget range"
          >
            <option value="">Budget – Range</option>
            <option value="50l">Under ₹50 Lakh</option>
            <option value="1cr">₹50L – ₹1 Cr</option>
            <option value="3cr">₹1 Cr – ₹3 Cr</option>
            <option value="5cr">₹3 Cr – ₹5 Cr</option>
            <option value="5cr+">Above ₹5 Cr</option>
          </select>
        </div>
        <button
          type="button"
          className="btn-teal px-8 py-3 rounded-lg text-sm whitespace-nowrap"
          data-ocid="hero.search_button"
        >
          Search
        </button>
      </div>
    </div>
  );
}

interface HeroSectionProps {
  onScrollTo: (id: string) => void;
}

export function HeroSection({ onScrollTo }: HeroSectionProps) {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      data-ocid="hero.section"
    >
      <div className="absolute inset-0">
        <img
          src="/assets/generated/delhi-skyline-hero.dim_1600x900.jpg"
          alt="Delhi Skyline"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/70 via-transparent to-background/30" />
      </div>

      <div className="relative container mx-auto px-4 md:px-8 pt-24 pb-16 w-full">
        <div className="max-w-2xl mb-10">
          <FadeUp delay={0}>
            <span className="text-label teal-text mb-4 block">
              Delhi NCR's Premier Real Estate Consultancy
            </span>
          </FadeUp>
          <FadeUp delay={0.1}>
            <h1 className="text-hero text-foreground mb-6">
              Own Smarter.
              <br />
              <span className="teal-text">Invest Better.</span>
            </h1>
          </FadeUp>
          <FadeUp delay={0.2}>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8 max-w-xl">
              SheltOwn brings you verified properties, expert investment
              advisory, and seamless home loan solutions — all under one roof.
            </p>
          </FadeUp>
          <FadeUp delay={0.3}>
            <div className="flex flex-col sm:flex-row gap-3">
              <button
                type="button"
                onClick={() => onScrollTo("#contact")}
                className="btn-teal px-8 py-3.5 rounded-lg text-sm font-semibold"
                data-ocid="hero.primary_cta_button"
              >
                Get Free Callback
              </button>
              <button
                type="button"
                onClick={() => onScrollTo("#properties")}
                className="btn-outline-teal px-8 py-3.5 rounded-lg text-sm font-semibold"
                data-ocid="hero.view_properties_button"
              >
                View Properties
              </button>
            </div>
          </FadeUp>
        </div>

        <FadeUp delay={0.4}>
          <SearchBar />
        </FadeUp>
      </div>
    </section>
  );
}
