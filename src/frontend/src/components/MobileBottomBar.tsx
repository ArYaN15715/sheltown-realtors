import { CalendarCheck, MessageCircle, Phone } from "lucide-react";

const ACTIONS = [
  {
    id: "call",
    label: "Call",
    icon: Phone,
    href: "tel:+919999999999",
    ocid: "mobile_bar.call_button",
  },
  {
    id: "whatsapp",
    label: "WhatsApp",
    icon: MessageCircle,
    href: "https://wa.me/919999999999?text=Hi%2C%20I%27m%20interested%20in%20a%20property",
    ocid: "mobile_bar.whatsapp_button",
  },
  {
    id: "enquire",
    label: "Enquire",
    icon: CalendarCheck,
    href: "#contact",
    ocid: "mobile_bar.enquire_button",
    isInternal: true,
  },
];

export function MobileBottomBar() {
  const handleClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    isInternal?: boolean,
    href?: string,
  ) => {
    if (isInternal && href) {
      e.preventDefault();
      const el = document.querySelector(href);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav
      className="fixed bottom-0 left-0 right-0 z-50 md:hidden glass border-t border-border"
      aria-label="Quick actions"
      data-ocid="mobile_bar"
    >
      <div className="flex">
        {ACTIONS.map((action, idx) => {
          const Icon = action.icon;
          const isTeal = idx === 1; // WhatsApp gets teal treatment
          return (
            <a
              key={action.id}
              href={action.href}
              target={action.isInternal ? undefined : "_blank"}
              rel={action.isInternal ? undefined : "noopener noreferrer"}
              onClick={(e) => handleClick(e, action.isInternal, action.href)}
              className={`flex-1 flex flex-col items-center justify-center gap-1 py-3 text-xs font-medium transition-all duration-200 active:scale-95 ${
                isTeal
                  ? "teal-text"
                  : "text-muted-foreground hover:text-foreground"
              }`}
              data-ocid={action.ocid}
            >
              <Icon size={20} strokeWidth={1.8} />
              <span>{action.label}</span>
            </a>
          );
        })}
      </div>
    </nav>
  );
}
