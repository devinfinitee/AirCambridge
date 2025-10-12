import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";
import { whatsappConfig } from "@/lib/emailjs";
import { useState } from "react";

export default function Footer() {
  const [email, setEmail] = useState("");

  const handleNewsletterSignup = () => {
    console.log("Newsletter signup:", email);
    setEmail("");
  };

  return (
    <footer className="bg-foreground text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 className="font-serif text-2xl font-bold mb-4 text-primary">AirCambridge Jet</h3>
            <p className="text-white/80 text-sm mb-4">
              Redefining private aviation with world-class service and seamless travel experiences.
            </p>
            <div className="flex gap-3">
              <button className="hover-elevate active-elevate-2 p-2 rounded" data-testid="button-social-facebook">
                <Facebook size={20} />
              </button>
              <button className="hover-elevate active-elevate-2 p-2 rounded" data-testid="button-social-twitter">
                <Twitter size={20} />
              </button>
              <button className="hover-elevate active-elevate-2 p-2 rounded" data-testid="button-social-instagram">
                <Instagram size={20} />
              </button>
              <button className="hover-elevate active-elevate-2 p-2 rounded" data-testid="button-social-linkedin">
                <Linkedin size={20} />
              </button>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="text-white/80 hover:text-primary transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-white/80 hover:text-primary transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/booking" className="text-white/80 hover:text-primary transition-colors">
                  Book Now
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-white/80 hover:text-primary transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-4">Contact Info</h4>
            <ul className="space-y-2 text-sm text-white/80">
              <li>📍 Abuja | Lagos | Ghana | Kenya</li>
              <li>📞 {whatsappConfig.phoneNumber}</li>
              <li>📧 info@aircambridgejet.com</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-4">Newsletter</h4>
            <p className="text-sm text-white/80 mb-4">
              Stay updated with exclusive offers and aviation news.
            </p>
            <div className="flex gap-2">
              <Input
                placeholder="Your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-white/10 border-white/20 text-white placeholder:text-white/50"
                data-testid="input-newsletter-email"
              />
              <Button variant="default" onClick={handleNewsletterSignup} data-testid="button-newsletter-submit">
                Sign Up
              </Button>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 text-center text-sm text-white/60">
          <p>&copy; 2025 AirCambridge Jet. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
