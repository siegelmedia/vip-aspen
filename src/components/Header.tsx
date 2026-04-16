import { useState, useEffect, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X, ChevronDown, Phone } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { COMPANY } from "@/data/constants";
import logo from "@/assets/vip-aspen-logo.webp";

interface DropdownItem {
  label: string;
  href?: string;
  separator?: boolean;
}

interface NavItem {
  label: string;
  href?: string;
  children?: DropdownItem[];
}

const navItems: NavItem[] = [
  {
    label: "Services",
    children: [
      { label: "Black Car Service", href: "/black-car-service" },
      { label: "Hourly Chauffeur", href: "/hourly-chauffeur" },
      { label: "Security Drivers", href: "/security-driver" },
      { label: "Executive Protection", href: "/executive-protection" },
      { label: "Property Security Watch", href: "/property-watch" },
      { label: "VIP Club Access", href: "/aspen-clubs" },
      { label: "Private Entertainment", href: "/private-entertainment" },
      { label: "Promotional Services", href: "/promotional-services" },
    ],
  },
  {
    label: "Fleet",
    children: [
      { label: "Rolls Royce Cullinan", href: "/rolls-royce-cullinan" },
      { label: "Cadillac Escalade", href: "/cadillac-escalade" },
      { label: "Executive Sprinter", href: "/executive-sprinter" },
    ],
  },
  { label: "About", href: "/about" },
  { label: "Membership", href: "/membership" },
  { label: "Contact", href: "/contact" },
];

/* ───────── Desktop dropdown ───────── */
const DesktopDropdown = ({ item }: { item: NavItem }) => {
  const [open, setOpen] = useState(false);
  const timeout = useRef<ReturnType<typeof setTimeout>>();

  const enter = () => {
    clearTimeout(timeout.current);
    setOpen(true);
  };
  const leave = () => {
    timeout.current = setTimeout(() => setOpen(false), 150);
  };

  if (!item.children) {
    return (
      <Link
        to={item.href!}
        className="text-foreground/80 hover:text-primary transition-colors duration-300 text-sm uppercase tracking-widest font-medium"
      >
        {item.label}
      </Link>
    );
  }

  return (
    <div className="relative" onMouseEnter={enter} onMouseLeave={leave}>
      <button
        className="flex items-center gap-1 text-foreground/80 hover:text-primary transition-colors duration-300 text-sm uppercase tracking-widest font-medium"
        onClick={() => setOpen((o) => !o)}
      >
        {item.label}
        <ChevronDown
          className={`w-3.5 h-3.5 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
        />
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 8 }}
            transition={{ duration: 0.2 }}
            className="absolute top-full left-0 mt-3 min-w-[220px] bg-background/95 backdrop-blur-xl border border-border/50 rounded-md shadow-xl overflow-hidden"
          >
            {item.children.map((child) =>
              child.separator ? (
                <div key={child.label} className="px-5 pt-3 pb-1 text-xs uppercase tracking-wider text-primary/60 font-medium border-t border-border/30 first:border-t-0 first:pt-2">
                  {child.label}
                </div>
              ) : (
              <Link
                key={child.href}
                to={child.href!}
                onClick={() => setOpen(false)}
                className="block px-5 py-2.5 text-sm text-foreground/70 hover:text-primary hover:bg-primary/5 transition-colors"
              >
                {child.label}
              </Link>
              )
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

/* ───────── Mobile accordion group ───────── */
const MobileNavGroup = ({
  item,
  onClose,
}: {
  item: NavItem;
  onClose: () => void;
}) => {
  const [expanded, setExpanded] = useState(false);

  if (!item.children) {
    return (
      <Link
        to={item.href!}
        onClick={onClose}
        className="text-foreground/80 hover:text-primary transition-colors duration-300 text-sm uppercase tracking-widest font-medium py-2"
      >
        {item.label}
      </Link>
    );
  }

  return (
    <div>
      <button
        onClick={() => setExpanded((e) => !e)}
        className="w-full flex items-center justify-between text-foreground/80 hover:text-primary transition-colors duration-300 text-sm uppercase tracking-widest font-medium py-2"
      >
        {item.label}
        <ChevronDown
          className={`w-4 h-4 transition-transform duration-200 ${expanded ? "rotate-180" : ""}`}
        />
      </button>
      <AnimatePresence>
        {expanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden pl-4"
          >
            {item.children.map((child) =>
              child.separator ? (
                <div key={child.label} className="pt-3 pb-1 text-xs uppercase tracking-wider text-primary/60 font-medium border-t border-border/30 first:border-t-0 first:pt-1">
                  {child.label}
                </div>
              ) : (
              <Link
                key={child.href}
                to={child.href!}
                onClick={onClose}
                className="block py-2 text-sm text-foreground/60 hover:text-primary transition-colors"
              >
                {child.label}
              </Link>
              )
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

/* ───────── Header ───────── */
const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-[100] isolate transition-all duration-500 ${
        isScrolled
          ? "bg-background/95 backdrop-blur-lg border-b border-border/50"
          : "bg-background/70 backdrop-blur-md"
      }`}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 9999,
        display: "block",
        visibility: "visible",
        opacity: 1,
      }}
    >
      <div className="container mx-auto px-6 py-4">
        <nav className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img
              src={logo}
              alt="VIP Aspen - Luxury Services in Aspen Colorado"
              className="h-14 md:h-16 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-7" data-testid="desktop-nav">
            {navItems.map((item) => (
              <DesktopDropdown key={item.label} item={item} />
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden lg:block">
            <Button variant="luxury" size="lg" asChild>
              <Link to="/membership">Become a Member</Link>
            </Button>
          </div>

          {/* Mobile: Call button + hamburger */}
          <div className="flex lg:hidden items-center gap-2">
            <Button variant="luxury" size="sm" asChild>
              <a href={`tel:${COMPANY.phoneRaw}`} className="flex items-center gap-1.5">
                <Phone className="w-3.5 h-3.5" />
                Call
              </a>
            </Button>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-foreground p-2 rounded-md border border-border/50 bg-background/30 backdrop-blur"
              aria-label="Toggle menu"
              title="Menu"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </nav>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden overflow-hidden"
            >
              <div className="py-6 flex flex-col gap-2">
                {navItems.map((item) => (
                  <MobileNavGroup
                    key={item.label}
                    item={item}
                    onClose={() => setIsMobileMenuOpen(false)}
                  />
                ))}
                <div className="flex flex-col gap-3 mt-4 pt-4 border-t border-border/30">
                  <Button variant="luxury" size="lg" asChild>
                    <a href={`tel:${COMPANY.phoneRaw}`} className="flex items-center justify-center gap-2">
                      <Phone className="w-4 h-4" />
                      Call {COMPANY.phoneDisplay}
                    </a>
                  </Button>
                  <Button variant="outline" size="lg" asChild>
                    <Link to="/contact" onClick={() => setIsMobileMenuOpen(false)}>Contact Us</Link>
                  </Button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
};

export default Header;
