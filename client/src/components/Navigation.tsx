import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

export default function Navigation() {
  const [location, setLocation] = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setIsMobileMenuOpen(false);
  }, [location]);

  const navLinks = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About" },
    { path: "/booking", label: "Booking" },
    { path: "/contact", label: "Contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled 
          ? "bg-foreground shadow-2xl" 
          : "bg-foreground/90 backdrop-blur-md"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <Link href="/" data-testid="link-home">
            <h1 className="font-serif text-2xl md:text-3xl font-bold text-white cursor-pointer transition-all hover:text-primary">
              AirCambridge Jet
            </h1>
          </Link>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link key={link.path} href={link.path} data-testid={`link-${link.label.toLowerCase()}`}>
                <span
                  className={`text-sm font-semibold transition-all cursor-pointer relative group ${
                    location === link.path
                      ? "text-primary"
                      : "text-white hover:text-primary"
                  }`}
                >
                  {link.label}
                  <span className={`absolute -bottom-1 left-0 h-0.5 bg-primary transition-all ${
                    location === link.path ? 'w-full' : 'w-0 group-hover:w-full'
                  }`}></span>
                </span>
              </Link>
            ))}
          </div>

          <Button
            variant="default"
            className="hidden md:inline-flex font-semibold"
            data-testid="button-book-jet"
            asChild
          >
            <Link href="/booking">Book a Jet</Link>
          </Button>

          <button
            className="md:hidden text-white hover:text-primary transition-colors p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            data-testid="button-mobile-menu"
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden bg-foreground border-t border-white/10 shadow-2xl animate-in slide-in-from-top duration-300">
          <div className="px-4 py-6 space-y-4">
            {navLinks.map((link) => (
              <Link key={link.path} href={link.path}>
                <div
                  className={`block py-3 px-4 rounded-lg text-sm font-semibold transition-all ${
                    location === link.path 
                      ? "text-primary bg-primary/10" 
                      : "text-white hover:text-primary hover:bg-white/5"
                  }`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.label}
                </div>
              </Link>
            ))}
            <Button variant="default" className="w-full font-semibold" size="lg" asChild>
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
