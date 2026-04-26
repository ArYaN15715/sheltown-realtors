import { CheckCircle, MapPin, MessageCircle, Phone } from "lucide-react";
import { motion, useInView } from "motion/react";
import { useRef, useState } from "react";
import { useAddContact } from "../hooks/useBackend";

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

const CONTACT_INFO = [
  { icon: Phone, text: "+91 98765 43210", label: "Call us" },
  { icon: MessageCircle, text: "WhatsApp: +91 98765 43210", label: "WhatsApp" },
  {
    icon: MapPin,
    text: "Connaught Place, New Delhi — 110001",
    label: "Office",
  },
];

function ContactForm() {
  const mutation = useAddContact();
  const [form, setForm] = useState({
    name: "",
    phone: "",
    requirement: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.phone) return;
    try {
      await mutation.mutateAsync({
        name: form.name,
        phone: form.phone,
        requirement: form.requirement,
      });
      setSubmitted(true);
      setForm({ name: "", phone: "", requirement: "" });
    } catch (_err) {
      /* handled via mutation.isError */
    }
  };

  if (submitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.92 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
        className="flex flex-col items-center justify-center py-12 text-center gap-4"
        data-ocid="contact.success_state"
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{
            delay: 0.1,
            type: "spring",
            stiffness: 220,
            damping: 16,
          }}
          className="w-16 h-16 rounded-full btn-teal flex items-center justify-center teal-glow"
        >
          <CheckCircle size={32} aria-hidden />
        </motion.div>
        <h3 className="font-display font-bold text-2xl text-foreground">
          Thank you!
        </h3>
        <p className="text-muted-foreground max-w-xs text-sm leading-relaxed">
          We'll call you back shortly. Our advisor will reach you within 2
          hours.
        </p>
        <button
          type="button"
          onClick={() => setSubmitted(false)}
          className="btn-outline-teal px-6 py-2.5 rounded-lg text-sm mt-2"
          data-ocid="contact.reset_button"
        >
          Submit Another
        </button>
      </motion.div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-5"
      data-ocid="contact.form"
    >
      <div>
        <label
          htmlFor="lead-name"
          className="text-label text-muted-foreground block mb-2"
        >
          Your Name *
        </label>
        <input
          id="lead-name"
          type="text"
          required
          placeholder="e.g. Rajiv Mehta"
          value={form.name}
          onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
          className="w-full bg-muted/40 border border-border rounded-lg px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary transition-smooth"
          data-ocid="contact.name_input"
        />
      </div>

      <div>
        <label
          htmlFor="lead-phone"
          className="text-label text-muted-foreground block mb-2"
        >
          Phone Number * (Indian format)
        </label>
        <input
          id="lead-phone"
          type="tel"
          required
          placeholder="+91 98765 43210"
          value={form.phone}
          onChange={(e) => setForm((f) => ({ ...f, phone: e.target.value }))}
          className="w-full bg-muted/40 border border-border rounded-lg px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary transition-smooth"
          data-ocid="contact.phone_input"
        />
      </div>

      <div>
        <label
          htmlFor="lead-requirement"
          className="text-label text-muted-foreground block mb-2"
        >
          What are you looking for?
        </label>
        <select
          id="lead-requirement"
          value={form.requirement}
          onChange={(e) =>
            setForm((f) => ({ ...f, requirement: e.target.value }))
          }
          className="w-full bg-muted/40 border border-border rounded-lg px-4 py-3 text-sm text-foreground focus:outline-none focus:ring-1 focus:ring-primary transition-smooth"
          data-ocid="contact.requirement_select"
        >
          <option value="">Select requirement</option>
          <option value="buy">Buy Property</option>
          <option value="sell">Sell Property</option>
          <option value="invest">Investment Advisory</option>
          <option value="loan">Home Loan</option>
        </select>
      </div>

      {mutation.isError && (
        <p className="text-destructive text-xs" data-ocid="contact.error_state">
          Something went wrong. Please try again.
        </p>
      )}

      <button
        type="submit"
        disabled={mutation.isPending}
        className="btn-teal w-full py-4 rounded-lg text-sm font-semibold disabled:opacity-60 disabled:cursor-not-allowed"
        data-ocid="contact.submit_button"
      >
        {mutation.isPending ? (
          <span
            className="flex items-center justify-center gap-2"
            data-ocid="contact.loading_state"
          >
            <span className="w-4 h-4 rounded-full border-2 border-current border-t-transparent animate-spin" />
            Sending...
          </span>
        ) : (
          "Get Callback →"
        )}
      </button>
    </form>
  );
}

export function LeadCapture() {
  return (
    <section
      id="contact"
      className="bg-background py-20 md:py-28 section-divider"
      data-ocid="contact.section"
    >
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-start max-w-5xl mx-auto">
          {/* Left — headline + contact info */}
          <FadeUp>
            <span className="text-label teal-text mb-3 block">
              Get In Touch
            </span>
            <h2 className="text-heading text-foreground mb-4">
              Let's Find Your
              <br />
              <span className="teal-text">Next Property</span>
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Tell us what you're looking for and we'll get back within 2 hours.
              A senior advisor will call you — absolutely free, no obligation.
            </p>

            <div className="space-y-4">
              {CONTACT_INFO.map(({ icon: Icon, text, label }) => (
                <div
                  key={label}
                  className="flex items-center gap-3 text-sm text-muted-foreground"
                >
                  <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                    <Icon size={15} className="teal-text" aria-hidden />
                  </div>
                  {text}
                </div>
              ))}
            </div>
          </FadeUp>

          {/* Right — form card */}
          <FadeUp delay={0.12}>
            <div className="card-premium rounded-2xl p-7 md:p-9">
              <h3 className="font-display font-bold text-foreground text-xl mb-1">
                Get a Free Callback
              </h3>
              <p className="text-sm text-muted-foreground mb-7">
                We'll reach you within 2 hours.
              </p>
              <ContactForm />
            </div>
          </FadeUp>
        </div>
      </div>
    </section>
  );
}
