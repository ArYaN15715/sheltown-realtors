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

const STEPS = [
  {
    step: 1,
    title: "Understand Your Goals",
    description:
      "We begin with a deep-dive consultation to understand your investment horizon, lifestyle needs, and financial profile.",
  },
  {
    step: 2,
    title: "Curate Best Options",
    description:
      "Our experts hand-pick verified properties that match your exact criteria — no filler, no noise, just precision.",
  },
  {
    step: 3,
    title: "Financial Planning",
    description:
      "We align the best home loan options, tax benefits, and payment structures to maximize your investment value.",
  },
  {
    step: 4,
    title: "Close Smoothly",
    description:
      "End-to-end legal support, negotiation, and documentation — we handle it all until the keys are in your hands.",
  },
];

export function ProcessSection() {
  return (
    <section
      id="process"
      className="bg-card py-20 md:py-28 section-divider"
      data-ocid="process.section"
    >
      <div className="container mx-auto px-4 md:px-8">
        <FadeUp className="text-center mb-16">
          <span className="text-label teal-text mb-3 block">How It Works</span>
          <h2 className="text-heading text-foreground">
            Your Journey to Ownership
          </h2>
          <p className="text-muted-foreground mt-4 max-w-xl mx-auto leading-relaxed">
            A seamless, guided process from first conversation to final handover
            — designed to remove every obstacle between you and your property.
          </p>
        </FadeUp>

        <div className="relative">
          {/* Connector line — desktop only */}
          <div
            className="hidden md:block absolute top-8 left-[12.5%] right-[12.5%] h-px process-connector"
            aria-hidden
          />

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-6">
            {STEPS.map((step, i) => (
              <FadeUp key={step.step} delay={i * 0.12}>
                <div
                  className="flex flex-col items-center text-center relative"
                  data-ocid={`process.step.${i + 1}`}
                >
                  {/* Mobile connector */}
                  {i < STEPS.length - 1 && (
                    <div
                      className="md:hidden absolute left-1/2 -translate-x-1/2 top-16 w-px h-8 bg-border"
                      aria-hidden
                    />
                  )}

                  <div className="w-16 h-16 rounded-2xl btn-teal flex items-center justify-center font-display font-bold text-xl mb-5 relative z-10 teal-glow shrink-0">
                    {step.step}
                  </div>
                  <h3 className="font-display font-semibold text-foreground mb-2 text-base">
                    {step.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
