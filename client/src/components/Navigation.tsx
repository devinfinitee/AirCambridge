import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

export default function Navigation() {
  const [location] = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About" },
    { path: "/fleet", label: "Fleet" },
    { path: "/booking", label: "Booking" },
    { path: "/contact", label: "Contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-foreground/95 backdrop-blur-sm" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <Link href="/" data-testid="link-home">
            <h1 className={`font-serif text-2xl md:text-3xl font-bold transition-colors ${
              isScrolled ? "text-white" : "text-white"
            }`}>
              AirCambridge Jet
            </h1>
          </Link>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link key={link.path} href={link.path} data-testid={`link-${link.label.toLowerCase()}`}>
                <span
                  className={`text-sm font-medium transition-colors cursor-pointer ${
                    location === link.path
                      ? "text-primary"
                      : isScrolled
                      ? "text-white hover:text-primary"
                      : "text-white hover:text-primary"
                  }`}
                >
                  {link.label}
                </span>
              </Link>
            ))}
          </div>

          <Button
            variant="default"
            className="hidden md:inline-flex"
            data-testid="button-book-jet"
            asChild
          >
            <Link href="/booking">Book a Jet</Link>
          </Button>

          <button
            className="md:hidden text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            data-testid="button-mobile-menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden bg-foreground/98 backdrop-blur-sm border-t border-white/10">
          <div className="px-4 py-4 space-y-3">
            {navLinks.map((link) => (
              <Link key={link.path} href={link.path}>
                <div
                  className={`block py-2 text-sm font-medium transition-colors ${
                    location === link.path ? "text-primary" : "text-white hover:text-primary"
                  }`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.label}
                </div>
              </Link>
            ))}
            <Button variant="default" className="w-full" asChild>
              <Link href="/booking" onClick={() => setIsMobileMenuOpen(false)}>
                Book a Jet
              </Link>
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
}
