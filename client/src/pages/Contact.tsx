import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Phone, Mail } from "lucide-react";
import gsap from "gsap";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (contentRef.current) {
      gsap.fromTo(
        contentRef.current.children,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.15,
          ease: "power3.out",
        }
      );
    }
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Contact form submitted:", formData);
    setFormData({ name: "", email: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen pt-20">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-16 md:py-24">
        <div ref={contentRef}>
          <div className="text-center mb-12 opacity-0">
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold mb-4">Get In Touch</h1>
            <p className="text-base md:text-lg text-muted-foreground">
              Our team is ready to assist you 24/7 with any inquiries
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
            <div className="opacity-0">
              <Card className="hover-elevate transition-all">
                <CardContent className="p-6 md:p-8">
                  <h2 className="font-serif text-2xl md:text-3xl font-bold mb-6">Send us a message</h2>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <Label htmlFor="name">Name *</Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        data-testid="input-contact-name"
                      />
                    </div>
                    <div>
                      <Label htmlFor="email">Email *</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        data-testid="input-contact-email"
                      />
                    </div>
                    <div>
                      <Label htmlFor="message">Message *</Label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={6}
                        data-testid="textarea-contact-message"
                      />
                    </div>
                    <Button type="submit" className="w-full" data-testid="button-send-message">
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            <div className="space-y-8 opacity-0">
              <div>
                <h2 className="font-serif text-2xl md:text-3xl font-bold mb-6">Our Global Offices</h2>
                <div className="space-y-6">
                  <div className="flex gap-4 hover-elevate p-4 rounded-lg transition-all">
                    <MapPin className="text-primary flex-shrink-0" size={24} />
                    <div>
                      <h3 className="font-semibold mb-1">Lagos Office</h3>
                      <p className="text-muted-foreground text-sm">
                        Victoria Island, Lagos, Nigeria
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4 hover-elevate p-4 rounded-lg transition-all">
                    <MapPin className="text-primary flex-shrink-0" size={24} />
                    <div>
                      <h3 className="font-semibold mb-1">London Office</h3>
                      <p className="text-muted-foreground text-sm">
                        Mayfair, London, United Kingdom
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4 hover-elevate p-4 rounded-lg transition-all">
                    <MapPin className="text-primary flex-shrink-0" size={24} />
                    <div>
                      <h3 className="font-semibold mb-1">Dubai Office</h3>
                      <p className="text-muted-foreground text-sm">
                        Business Bay, Dubai, UAE
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h2 className="font-serif text-2xl md:text-3xl font-bold mb-6">Contact Information</h2>
                <div className="space-y-4">
                  <div className="flex gap-4 items-center hover-elevate p-4 rounded-lg transition-all">
                    <Phone className="text-primary" size={24} />
                    <div>
                      <p className="font-semibold">+1 (555) 123-4567</p>
                      <p className="text-sm text-muted-foreground">24/7 Hotline</p>
                    </div>
                  </div>
                  <div className="flex gap-4 items-center hover-elevate p-4 rounded-lg transition-all">
                    <Mail className="text-primary" size={24} />
                    <div>
                      <p className="font-semibold">info@aircambridgejet.com</p>
                      <p className="text-sm text-muted-foreground">General Inquiries</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-card rounded-lg p-6 hover-elevate transition-all">
                <h3 className="font-semibold mb-4">Business Hours</h3>
                <p className="text-muted-foreground text-sm mb-2">
                  Our concierge team is available 24/7 for your convenience
                </p>
                <p className="text-sm">
                  <strong>24/7</strong> - Round-the-clock service
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
