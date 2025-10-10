import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Phone, Mail, Send } from "lucide-react";
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
      const elements = Array.from(contentRef.current.children);
      gsap.fromTo(
        elements,
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
    <div className="min-h-screen pt-20 bg-gradient-to-b from-background to-muted/20">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-16 md:py-24">
        <div ref={contentRef}>
          <div className="text-center mb-16">
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold mb-4">Get In Touch</h1>
            <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
              Have questions about our services? Our dedicated team is here to help you 24/7
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 md:gap-12">
            <div className="lg:col-span-3">
              <Card className="hover-elevate transition-all border-2">
                <CardContent className="p-8 md:p-10">
                  <div className="flex items-center gap-3 mb-8">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                      <Send className="text-primary" size={24} />
                    </div>
                    <h2 className="font-serif text-2xl md:text-3xl font-bold">Send us a message</h2>
                  </div>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <Label htmlFor="name" className="text-base font-medium mb-2 block">Your Name</Label>
                      <Input
                        id="name"
                        name="name"
                        placeholder="John Doe"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="h-12 text-base"
                        data-testid="input-contact-name"
                      />
                    </div>
                    <div>
                      <Label htmlFor="email" className="text-base font-medium mb-2 block">Email Address</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="john@example.com"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="h-12 text-base"
                        data-testid="input-contact-email"
                      />
                    </div>
                    <div>
                      <Label htmlFor="message" className="text-base font-medium mb-2 block">Your Message</Label>
                      <Textarea
                        id="message"
                        name="message"
                        placeholder="Tell us how we can help you..."
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={6}
                        className="text-base resize-none"
                        data-testid="textarea-contact-message"
                      />
                    </div>
                    <Button type="submit" size="lg" className="w-full h-12 text-base font-semibold" data-testid="button-send-message">
                      <Send className="mr-2" size={18} />
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            <div className="lg:col-span-2 space-y-6">
              <Card className="hover-elevate transition-all border-2">
                <CardContent className="p-6">
                  <h3 className="font-serif text-xl font-bold mb-6">Contact Information</h3>
                  <div className="space-y-4">
                    <div className="flex gap-4 items-start">
                      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <Phone className="text-primary" size={20} />
                      </div>
                      <div>
                        <p className="font-semibold text-base">+1 (555) 123-4567</p>
                        <p className="text-sm text-muted-foreground">24/7 Hotline</p>
                      </div>
                    </div>
                    <div className="flex gap-4 items-start">
                      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <Mail className="text-primary" size={20} />
                      </div>
                      <div>
                        <p className="font-semibold text-base">info@aircambridgejet.com</p>
                        <p className="text-sm text-muted-foreground">General Inquiries</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="hover-elevate transition-all border-2">
                <CardContent className="p-6">
                  <h3 className="font-serif text-xl font-bold mb-6">Global Offices</h3>
                  <div className="space-y-4">
                    <div className="flex gap-3 items-start">
                      <MapPin className="text-primary flex-shrink-0 mt-1" size={20} />
                      <div>
                        <p className="font-semibold text-sm">Lagos, Nigeria</p>
                        <p className="text-xs text-muted-foreground">Victoria Island</p>
                      </div>
                    </div>
                    <div className="flex gap-3 items-start">
                      <MapPin className="text-primary flex-shrink-0 mt-1" size={20} />
                      <div>
                        <p className="font-semibold text-sm">London, UK</p>
                        <p className="text-xs text-muted-foreground">Mayfair</p>
                      </div>
                    </div>
                    <div className="flex gap-3 items-start">
                      <MapPin className="text-primary flex-shrink-0 mt-1" size={20} />
                      <div>
                        <p className="font-semibold text-sm">Dubai, UAE</p>
                        <p className="text-xs text-muted-foreground">Business Bay</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-primary/5 hover-elevate transition-all border-2 border-primary/20">
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-3">Available 24/7</h3>
                  <p className="text-sm text-muted-foreground">
                    Our dedicated concierge team is ready to assist you around the clock
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
