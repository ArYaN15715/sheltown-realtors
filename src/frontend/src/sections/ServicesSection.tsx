import {
  ArrowRight,
  Building2,
  CreditCard,
  Home,
  TrendingUp,
} from "lucide-react";
import { motion } from "motion/react";
import { useInView } from "motion/react";
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

const SERVICES = [
  {
    id: "buying",
    icon: Home,
    title: "Property Buying",
    description:
      "Verified residential and commercial listings curated to match your goals and budget — zero surprises.",
  },
  {
    id: "investment",
    icon: TrendingUp,
    title: "Investment Advisory",
    description:
      "Data-backed market insights, ROI projections, and portfolio strategies for smart investors.",
  },
  {
    id: "finance",
    icon: CreditCard,
    title: "Home Loans & Finance",
    description:
      "End-to-end home loan assistance — best rates, fast approvals, hassle-free paperwork.",
  },
  {
    id: "selling",
    icon: Building2,
    title: "Property Selling",
    description:
      "Maximum visibility, pre-qualified buyers, and transparent deals to close at the right price.",
  },
];

export function ServicesSection() {
  return (
    <section
      id="services"
      className="bg-background py-20 md:py-28"
      data-ocid="services.section"
    >
      <div className="container mx-auto px-4 md:px-8">
        <FadeUp className="text-center mb-14">
          <span className="text-label teal-text mb-3 block">What We Do</span>
          <h2 className="text-heading text-foreground">
            One Platform.
            <br />
            Every Real Estate Need.
          </h2>
        </FadeUp>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {SERVICES.map((svc, i) => {
            const Icon = svc.icon;
            return (
              <FadeUp key={svc.id} delay={i * 0.1} className="h-full">
                <div
                  className="card-premium rounded-2xl p-6 h-full flex flex-col"
                  data-ocid={`services.card.${i + 1}`}
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5">
                    <Icon size={22} className="teal-text" />
                  </div>
                  <h3 className="font-display font-semibold text-foreground text-lg mb-3">
                    {svc.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed flex-1">
                    {svc.description}
                  </p>
                  <button
                    type="button"
                    className="mt-5 text-sm teal-text font-medium flex items-center gap-1 hover:gap-2 transition-all duration-200"
                    data-ocid={`services.learn_more.${i + 1}`}
                  >
                    Learn more <ArrowRight size={14} />
                  </button>
                </div>
              </FadeUp>
            );
          })}
        </div>
      </div>
    </section>
  );
}
