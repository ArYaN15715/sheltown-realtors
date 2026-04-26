import { Clock } from "lucide-react";
import { motion, useInView } from "motion/react";
import { useRef } from "react";

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

const STATS = [
  { value: "₹500Cr+", label: "In Transactions", sub: "Since 2015" },
  { value: "2000+", label: "Families Settled", sub: "Across Delhi NCR" },
  { value: "15+", label: "Expert Advisors", sub: "On Call" },
  { value: "98%", label: "Client Satisfaction", sub: "Verified Reviews" },
];

export function AboutSection() {
  const scrollTo = (id: string) => {
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="about"
      className="bg-muted/20 py-20 md:py-28 section-divider"
      data-ocid="about.section"
    >
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* Left — copy */}
          <FadeUp>
            <span className="text-label teal-text mb-4 block">
              About SheltOwn
            </span>
            <h2 className="text-heading text-foreground mb-3">
              More Than Realtors
            </h2>
            <p className="text-subheading teal-text mb-6">
              We're Your Investment Partners
            </p>
            <p className="text-muted-foreground leading-relaxed mb-5">
              SheltOwn Realtors is Delhi NCR's most trusted property and finance
              consultancy. We combine deep local market expertise with financial
              advisory capabilities to deliver outcomes that most brokerages
              simply can't match.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Every client gets a dedicated advisor, verified listings,
              transparent pricing, and the peace of mind that comes from knowing
              your interests are fully protected — from first consultation to
              final handover.
            </p>
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <button
                type="button"
                onClick={() => scrollTo("#contact")}
                className="btn-teal px-8 py-3.5 rounded-lg text-sm font-semibold"
                data-ocid="about.cta_button"
              >
                Start Your Journey
              </button>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Clock size={15} className="teal-text shrink-0" aria-hidden />
                <span>Response within 2 hours</span>
              </div>
            </div>
          </FadeUp>

          {/* Right — stats card */}
          <FadeUp delay={0.15}>
            <div
              className="card-premium rounded-2xl p-7 md:p-9"
              data-ocid="about.stats_card"
            >
              <p className="text-label teal-text mb-6 block">
                Our Track Record
              </p>
              <div className="grid grid-cols-2 gap-5">
                {STATS.map((stat, i) => (
                  <div
                    key={stat.label}
                    className="flex flex-col gap-1"
                    data-ocid={`about.stat.${i + 1}`}
                  >
                    <span className="font-display font-bold text-3xl text-foreground leading-none">
                      {stat.value}
                    </span>
                    <span className="text-sm font-medium text-foreground/80">
                      {stat.label}
                    </span>
                    <span className="text-xs text-muted-foreground">
                      {stat.sub}
                    </span>
                  </div>
                ))}
              </div>
              <div className="mt-7 pt-6 border-t border-border">
                <p className="text-sm text-muted-foreground leading-relaxed">
                  "We don't just close deals — we open doors to generational
                  wealth. SheltOwn's mission is to be the last real estate
                  advisor you'll ever need."
                </p>
                <p className="text-xs teal-text font-semibold mt-3">
                  — Founding Team, SheltOwn Realtors
                </p>
              </div>
            </div>
          </FadeUp>
        </div>
      </div>
    </section>
  );
}
