import { Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";

const NAV_LINKS = [
  { label: "Services", href: "#services" },
  { label: "Properties", href: "#properties" },
  { label: "Process", href: "#process" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNav = (href: string) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? "glass shadow-subtle" : "bg-transparent"}`}
      data-ocid="navbar"
    >
      <div className="container mx-auto px-4 md:px-8">
        <nav className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <button
            type="button"
            onClick={() => handleNav("#hero")}
            className="flex items-center gap-2 group"
            data-ocid="navbar.logo_link"
          >
            <div className="w-8 h-8 rounded-lg btn-teal flex items-center justify-center text-sm font-bold shrink-0">
              S
            </div>
            <div className="leading-none text-left">
              <div className="font-display font-bold text-foreground text-base tracking-tight group-hover:teal-text transition-colors duration-200">
                SheltOwn
              </div>
              <div className="text-xs text-muted-foreground font-body">
                Realtors
              </div>
            </div>
          </button>

          {/* Desktop links */}
          <ul className="hidden md:flex items-center gap-6">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <button
                  type="button"
                  onClick={() => handleNav(link.href)}
                  className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors duration-200"
                  data-ocid={`navbar.${link.label.toLowerCase()}_link`}
                >
                  {link.label}
                </button>
              </li>
            ))}
          </ul>

          {/* CTA */}
          <div className="hidden md:block">
            <button
              type="button"
              onClick={() => handleNav("#contact")}
              className="btn-teal px-5 py-2.5 rounded-lg text-sm"
              data-ocid="navbar.get_callback_button"
            >
              Get Callback
            </button>
          </div>

          {/* Mobile hamburger */}
          <button
            type="button"
            className="md:hidden text-foreground p-2"
            onClick={() => setMenuOpen((v) => !v)}
            aria-label="Toggle menu"
            data-ocid="navbar.menu_toggle"
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </nav>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="glass md:hidden overflow-hidden"
            data-ocid="navbar.mobile_menu"
          >
            <ul className="container mx-auto px-4 py-4 flex flex-col gap-1">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <button
                    type="button"
                    onClick={() => handleNav(link.href)}
                    className="block w-full text-left py-3 px-3 text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-muted/40 rounded-lg transition-colors duration-200"
                    data-ocid={`navbar.mobile_${link.label.toLowerCase()}_link`}
                  >
                    {link.label}
                  </button>
                </li>
              ))}
              <li className="pt-2">
                <button
                  type="button"
                  onClick={() => handleNav("#contact")}
                  className="btn-teal w-full py-3 rounded-lg text-sm"
                  data-ocid="navbar.mobile_get_callback_button"
                >
                  Get Callback
                </button>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
