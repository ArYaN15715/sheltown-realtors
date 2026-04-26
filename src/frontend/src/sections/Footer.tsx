import { Mail, MapPin, Phone } from "lucide-react";

const NAV_LINKS = {
  company: [
    { label: "About", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Process", href: "#process" },
    { label: "Contact", href: "#contact" },
  ],
  services: [
    { label: "Property Buying", href: "#services" },
    { label: "Investment Advisory", href: "#services" },
    { label: "Home Loans", href: "#services" },
    { label: "Property Selling", href: "#services" },
  ],
};

const CONTACT_DETAILS = [
  { icon: Phone, text: "+91 98765 43210" },
  { icon: Mail, text: "hello@sheltown.in" },
  { icon: MapPin, text: "Connaught Place, New Delhi – 110001" },
];

export function Footer() {
  const year = new Date().getFullYear();
  const hostname =
    typeof window !== "undefined" ? window.location.hostname : "";
  const caffeineUrl = `https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(hostname)}`;

  const scrollTo = (href: string) => {
    if (href.startsWith("#")) {
      document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer
      className="bg-card border-t border-border pt-16 pb-8"
      data-ocid="footer.section"
    >
      <div className="container mx-auto px-4 md:px-8">
        {/* Top grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg btn-teal flex items-center justify-center font-display font-bold text-sm">
                S
              </div>
              <span className="font-display font-bold text-foreground text-lg leading-none">
                SheltOwn
                <br />
                <span className="text-xs font-normal text-muted-foreground">
                  Realtors
                </span>
              </span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed max-w-xs">
              Delhi NCR's most trusted property and finance consultancy. Own
              smarter. Invest better.
            </p>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-label text-muted-foreground mb-5">Company</h4>
            <ul className="space-y-3">
              {NAV_LINKS.company.map((link) => (
                <li key={link.label}>
                  <button
                    type="button"
                    onClick={() => scrollTo(link.href)}
                    className="text-sm text-muted-foreground hover:text-foreground transition-smooth"
                    data-ocid={`footer.company_${link.label.toLowerCase()}_link`}
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-label text-muted-foreground mb-5">Services</h4>
            <ul className="space-y-3">
              {NAV_LINKS.services.map((link) => (
                <li key={link.label}>
                  <button
                    type="button"
                    onClick={() => scrollTo(link.href)}
                    className="text-sm text-muted-foreground hover:text-foreground transition-smooth"
                    data-ocid={`footer.service_${link.label.toLowerCase().replace(/\s+/g, "_")}_link`}
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-label text-muted-foreground mb-5">Contact</h4>
            <ul className="space-y-3">
              {CONTACT_DETAILS.map(({ icon: Icon, text }) => (
                <li
                  key={text}
                  className="flex items-start gap-2.5 text-sm text-muted-foreground"
                >
                  <Icon
                    size={14}
                    className="teal-text shrink-0 mt-0.5"
                    aria-hidden
                  />
                  <span className="leading-snug">{text}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="section-divider pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-muted-foreground">
            © {year} SheltOwn Realtors. All rights reserved.
          </p>
          <p className="text-xs text-muted-foreground">
            Built with love using{" "}
            <a
              href={caffeineUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="teal-text hover:underline"
            >
              caffeine.ai
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
