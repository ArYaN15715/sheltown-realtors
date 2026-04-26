import { Bath, Bed, MapPin, Maximize } from "lucide-react";
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

const PROPERTIES = [
  {
    id: "p1",
    title: "Luxe 3BHK Apartment",
    location: "Vasant Vihar, New Delhi",
    price: "₹4.2 Cr",
    bedrooms: 3,
    bathrooms: 3,
    area: "1,850 sq ft",
    type: "Apartment",
    badge: "Hot Deal",
    image: "/assets/generated/property-card-apartment.dim_800x500.jpg",
  },
  {
    id: "p2",
    title: "Premium 2BHK Flat",
    location: "Sector 62, Noida",
    price: "₹88 L",
    bedrooms: 2,
    bathrooms: 2,
    area: "1,120 sq ft",
    type: "Apartment",
    badge: "New Launch",
    image: "/assets/generated/property-card-apartment.dim_800x500.jpg",
  },
  {
    id: "p3",
    title: "Spacious 4BHK Villa",
    location: "DLF Phase 2, Gurugram",
    price: "₹7.5 Cr",
    bedrooms: 4,
    bathrooms: 4,
    area: "3,200 sq ft",
    type: "Villa",
    badge: "Premium",
    image: "/assets/generated/property-card-apartment.dim_800x500.jpg",
  },
  {
    id: "p4",
    title: "Studio Investment Unit",
    location: "Dwarka Expressway, Gurugram",
    price: "₹52 L",
    bedrooms: 1,
    bathrooms: 1,
    area: "620 sq ft",
    type: "Studio",
    badge: "High ROI",
    image: "/assets/generated/property-card-apartment.dim_800x500.jpg",
  },
  {
    id: "p5",
    title: "Modern 3BHK Penthouse",
    location: "Greater Kailash, New Delhi",
    price: "₹5.8 Cr",
    bedrooms: 3,
    bathrooms: 3,
    area: "2,400 sq ft",
    type: "Penthouse",
    badge: "Exclusive",
    image: "/assets/generated/property-card-apartment.dim_800x500.jpg",
  },
  {
    id: "p6",
    title: "Builder Floor 2BHK",
    location: "South Extension, Delhi",
    price: "₹1.9 Cr",
    bedrooms: 2,
    bathrooms: 2,
    area: "1,050 sq ft",
    type: "Builder Floor",
    badge: "Ready to Move",
    image: "/assets/generated/property-card-apartment.dim_800x500.jpg",
  },
];

export function FeaturedProperties() {
  return (
    <section
      id="properties"
      className="bg-muted/30 py-20 md:py-28 section-divider"
      data-ocid="properties.section"
    >
      <div className="container mx-auto px-4 md:px-8">
        <FadeUp className="flex items-end justify-between mb-10 flex-wrap gap-4">
          <div>
            <span className="text-label teal-text mb-3 block">
              Featured Listings
            </span>
            <h2 className="text-heading text-foreground">
              Hand-Picked Properties
            </h2>
          </div>
          <button
            type="button"
            className="btn-outline-teal px-5 py-2.5 rounded-lg text-sm"
            data-ocid="properties.view_all_button"
          >
            View All
          </button>
        </FadeUp>

        {/* Mobile: horizontal scroll; Desktop: grid */}
        <div className="flex md:grid md:grid-cols-2 lg:grid-cols-3 gap-5 overflow-x-auto pb-4 md:pb-0 snap-x snap-mandatory -mx-4 px-4 md:mx-0 md:px-0">
          {PROPERTIES.map((prop, i) => (
            <FadeUp
              key={prop.id}
              delay={i * 0.07}
              className="shrink-0 w-72 md:w-auto snap-start"
            >
              <div
                className="card-premium rounded-2xl overflow-hidden h-full flex flex-col"
                data-ocid={`properties.card.${i + 1}`}
              >
                <div className="relative h-48 overflow-hidden bg-muted">
                  <img
                    src={prop.image}
                    alt={prop.title}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/20 to-transparent" />
                  {prop.badge && (
                    <span className="absolute top-3 left-3 bg-primary/90 text-primary-foreground text-xs font-semibold px-2.5 py-1 rounded-full">
                      {prop.badge}
                    </span>
                  )}
                  <div className="absolute bottom-3 left-3">
                    <div className="font-display font-bold text-foreground text-xl">
                      {prop.price}
                    </div>
                  </div>
                </div>
                <div className="p-4 flex-1 flex flex-col">
                  <h3 className="font-semibold text-foreground text-sm mb-1">
                    {prop.title}
                  </h3>
                  <div className="flex items-center gap-1 text-xs text-muted-foreground mb-3">
                    <MapPin size={11} aria-hidden />
                    {prop.location}
                  </div>
                  <div className="flex items-center gap-3 text-xs text-muted-foreground border-t border-border pt-3 mt-auto">
                    <span className="flex items-center gap-1">
                      <Bed size={12} aria-hidden />
                      {prop.bedrooms} BHK
                    </span>
                    <span className="flex items-center gap-1">
                      <Bath size={12} aria-hidden />
                      {prop.bathrooms}
                    </span>
                    <span className="flex items-center gap-1">
                      <Maximize size={12} aria-hidden />
                      {prop.area}
                    </span>
                  </div>
                </div>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}
