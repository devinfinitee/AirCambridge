import { useEffect, useRef } from "react";
import HeroSlider from "@/components/HeroSlider";
import QuickBookingWidget from "@/components/QuickBookingWidget";
import FeatureCard from "@/components/FeatureCard";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Globe, Clock, Shield, Sparkles, MessageCircle, Mail } from "lucide-react";
import { openWhatsApp } from "@/lib/emailjs";
import { useLocation } from "wouter";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);


export default function Home() {
  const sectionRefs = useRef<(HTMLElement | null)[]>([]);
  const [, setLocation] = useLocation();

  useEffect(() => {
    sectionRefs.current.forEach((section, index) => {
      if (section) {
        gsap.fromTo(
          section.querySelector("h2"),
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power3.out",
            scrollTrigger: {
              trigger: section,
              start: "top 80%",
              toggleActions: "play none none none",
            },
          }
        );
      }
    });
  }, []);

  return (
    <div className="min-h-screen">
      <HeroSlider />

      <div className="px-4 md:px-6 lg:px-8 pb-16 md:pb-24">
        <QuickBookingWidget />

        <section ref={(el) => (sectionRefs.current[0] = el)} className="max-w-7xl mx-auto mt-20 md:mt-24">
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-4 opacity-0">
            Why Fly AirCambridge
          </h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Experience the pinnacle of private aviation with uncompromising service and global reach
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            <FeatureCard
              icon={Globe}
              title="Global Coverage"
              description="Access to over 5,000 destinations worldwide with seamless coordination"
            />
            <FeatureCard
              icon={Clock}
              title="24/7 Concierge"
              description="Round-the-clock support ensuring every aspect of your journey is perfect"
            />
            <FeatureCard
              icon={Shield}
              title="Safety First"
              description="Rigorous safety standards and experienced crew for peace of mind"
            />
            <FeatureCard
              icon={Sparkles}
              title="Luxury Comfort"
              description="Premium amenities and personalized service tailored to your needs"
            />
          </div>
        </section>

        <section ref={(el) => (sectionRefs.current[1] = el)} className="max-w-4xl mx-auto mt-20 md:mt-24">
          <Card className="bg-gradient-to-br from-primary/10 to-primary/5 border-2 border-primary/20">
            <CardContent className="p-8 md:p-12 text-center">
              <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4">
                Ready to Book Your Flight?
              </h2>
              <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
                Contact us directly via WhatsApp or email for personalized service and instant booking assistance.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  size="lg" 
                  className="gap-2"
                  onClick={() => openWhatsApp('Hello, I would like to book a private jet flight.')}
                >
                  <MessageCircle size={20} />
                  Contact via WhatsApp
                </Button>
                <Button 
                  size="lg" 
                  variant="outline"
                  className="gap-2"
                  onClick={() => setLocation('/contact')}
                >
                  <Mail size={20} />
                  Send Email
                </Button>
              </div>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  );
}
