import { CheckCircle, CreditCard, Shield, TrendingUp } from "lucide-react";
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

const WHY_CARDS = [
  {
    icon: TrendingUp,
    title: "Smart Investment Guidance",
    description:
      "We analyze micro-markets, developer track records, and appreciation trends so you invest with confidence and clarity.",
  },
  {
    icon: Shield,
    title: "Verified Listings Only",
    description:
      "Every property undergoes title verification and a thorough site inspection before we recommend it to you.",
  },
  {
    icon: CreditCard,
    title: "Financial Expertise",
    description:
      "Our in-house finance team secures the best loan rates and structures your deal for maximum tax efficiency.",
  },
  {
    icon: CheckCircle,
    title: "Transparent Deals",
    description:
      "No hidden charges, no surprises. We document every step and keep you fully informed throughout the process.",
  },
];

export function WhySheltOwn() {
  const scrollTo = (id: string) => {
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="why"
      className="bg-background py-20 md:py-28 section-divider"
      data-ocid="why.section"
    >
      <div className="container mx-auto px-4 md:px-8">
        <FadeUp className="text-center mb-14">
          <span className="text-label teal-text mb-3 block">Why Us</span>
          <h2 className="text-heading text-foreground">Why Choose SheltOwn</h2>
          <p className="text-muted-foreground mt-4 max-w-xl mx-auto leading-relaxed">
            Most brokers show you properties. We show you opportunities — where
            real estate expertise meets financial intelligence.
          </p>
        </FadeUp>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 max-w-3xl mx-auto">
          {WHY_CARDS.map((card, i) => {
            const Icon = card.icon;
            return (
              <FadeUp key={card.title} delay={i * 0.1}>
                <div
                  className="card-premium rounded-2xl p-6 h-full flex flex-col"
                  data-ocid={`why.card.${i + 1}`}
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 shrink-0">
                    <Icon size={22} className="teal-text" aria-hidden />
                  </div>
                  <h3 className="font-display font-semibold text-foreground text-base mb-2">
                    {card.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed flex-1">
                    {card.description}
                  </p>
                </div>
              </FadeUp>
            );
          })}
        </div>

        <FadeUp delay={0.4} className="text-center mt-12">
          <button
            type="button"
            onClick={() => scrollTo("#contact")}
            className="btn-teal px-8 py-3.5 rounded-lg text-sm font-semibold"
            data-ocid="why.cta_button"
          >
            Talk to an Advisor
          </button>
        </FadeUp>
      </div>
    </section>
  );
}
