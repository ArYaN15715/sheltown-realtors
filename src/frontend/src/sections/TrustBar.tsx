import { Award, MapPin, Shield, Users } from "lucide-react";
import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";

function FadeUp({
  children,
  delay = 0,
  className = "",
}: { children: React.ReactNode; delay?: number; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

const STATS = [
  { icon: Award, value: "₹100Cr+", label: "Deals Closed" },
  { icon: Users, value: "300+", label: "Happy Clients" },
  { icon: Shield, value: "End-to-End", label: "Support" },
  { icon: MapPin, value: "Delhi-NCR", label: "Focus" },
];

export function TrustBar() {
  return (
    <section
      id="trust"
      className="bg-card border-y border-border py-10"
      data-ocid="trust.section"
    >
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-10">
          {STATS.map((stat, i) => {
            const Icon = stat.icon;
            return (
              <FadeUp
                key={stat.label}
                delay={i * 0.08}
                className="flex items-center gap-3"
              >
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                  <Icon size={20} className="teal-text" />
                </div>
                <div>
                  <div className="font-display font-bold text-xl text-foreground">
                    {stat.value}
                  </div>
                  <div className="text-xs text-muted-foreground">
                    {stat.label}
                  </div>
                </div>
              </FadeUp>
            );
          })}
        </div>
      </div>
    </section>
  );
}
