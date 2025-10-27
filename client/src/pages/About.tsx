import { useEffect, useRef } from "react";
import { Shield, Star, Lock, Lightbulb } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ownerImage from "@assets/stock_images/ogunsakin_timileyin.jpg.JPG";

gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const headerRef = useRef<HTMLDivElement>(null);
  const sectionRefs = useRef<(HTMLElement | null)[]>([]);

  useEffect(() => {
    if (headerRef.current) {
      const elements = Array.from(headerRef.current.children);
      gsap.fromTo(
        elements,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          stagger: 0.2,
          ease: "power3.out",
        }
      );
    }

    sectionRefs.current.forEach((section) => {
      if (section) {
        gsap.fromTo(
          section,
          { opacity: 0, y: 40 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power3.out",
            scrollTrigger: {
              trigger: section,
              start: "top 90%",
              end: "top 20%",
              toggleActions: "play none none none",
            },
          }
        );
      }
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <div className="min-h-screen pt-20">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-16 md:py-24">
        <section ref={headerRef} className="mb-20 md:mb-24">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Our Story: Precision, Passion, and Private Aviation
            </h1>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
              Founded on precision and passion, AirCambridge Jet redefines private aviation by merging
              world-class service with seamless travel experiences.
            </p>
          </div>
        </section>

        <section ref={(el) => (sectionRefs.current[0] = el)} className="mb-20 md:mb-24">
          <div className="bg-card rounded-lg p-8 md:p-12 hover-elevate transition-all">
            <h2 className="font-serif text-3xl md:text-4xl font-bold mb-6">Our Mission</h2>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
              To make luxury air travel as effortless and reliable as possible for every client. We believe
              that exceptional service, uncompromising safety, and personalized attention should be the
              standard, not the exception.
            </p>
          </div>
        </section>

        <section ref={(el) => (sectionRefs.current[1] = el)} className="mb-20 md:mb-24">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-center mb-12">Core Values</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            <div className="text-center hover-elevate p-6 rounded-lg transition-all">
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-foreground mb-4 transition-transform duration-300 hover:scale-110">
                <Shield className="text-primary" size={40} />
              </div>
              <h3 className="font-semibold text-xl mb-2">Safety</h3>
              <p className="text-muted-foreground text-sm">Uncompromising standards in every flight</p>
            </div>
            <div className="text-center hover-elevate p-6 rounded-lg transition-all">
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-foreground mb-4 transition-transform duration-300 hover:scale-110">
                <Star className="text-primary" size={40} />
              </div>
              <h3 className="font-semibold text-xl mb-2">Excellence</h3>
              <p className="text-muted-foreground text-sm">Exceptional service at every touchpoint</p>
            </div>
            <div className="text-center hover-elevate p-6 rounded-lg transition-all">
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-foreground mb-4 transition-transform duration-300 hover:scale-110">
                <Lock className="text-primary" size={40} />
              </div>
              <h3 className="font-semibold text-xl mb-2">Discretion</h3>
              <p className="text-muted-foreground text-sm">Privacy and confidentiality guaranteed</p>
            </div>
            <div className="text-center hover-elevate p-6 rounded-lg transition-all">
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-foreground mb-4 transition-transform duration-300 hover:scale-110">
                <Lightbulb className="text-primary" size={40} />
              </div>
              <h3 className="font-semibold text-xl mb-2">Innovation</h3>
              <p className="text-muted-foreground text-sm">Leading edge aviation technology</p>
            </div>
          </div>
        </section>

        <section ref={(el) => (sectionRefs.current[2] = el)} className="mb-20 md:mb-24">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-center mb-12">
            Our Leadership
          </h2>
          <div className="max-w-3xl mx-auto">
            <div className="bg-card rounded-lg overflow-hidden hover-elevate transition-all">
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={ownerImage}
                  alt="Company Owner"
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
              <div className="p-6 md:p-8 text-center">
                <h3 className="font-serif text-2xl md:text-3xl font-bold mb-2">Ogunsakin Timilehin</h3>
                <p className="text-primary font-medium mb-4">Founder & CEO</p>
                <p className="text-muted-foreground leading-relaxed">
                  Timilehin Ogunsakin is a visionary entrepreneur dedicated to redefining luxury air travel across Africa and beyond. 
                  With a passion for excellence and innovation, he founded AirCambridge Jet to provide seamless, world-class private 
                  aviation experiences. His commitment to safety, discretion, and personalized service has made AirCambridge Jet the 
                  preferred choice for discerning travelers seeking unparalleled comfort in the skies.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section ref={(el) => (sectionRefs.current[3] = el)}>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-center mb-12">
            Connecting the World, Exclusively
          </h2>
          <div className="bg-card rounded-lg p-8 md:p-12 hover-elevate transition-all">
            <div className="text-center">
              <p className="text-base md:text-lg text-muted-foreground mb-8">
                Our global network spans across continents, providing seamless service to over 5,000
                destinations worldwide. From Lagos to London, Dubai to New York, we ensure your journey is
                flawless from departure to arrival.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
                <div>
                  <h4 className="font-serif text-3xl md:text-4xl font-bold text-primary mb-2">5,000+</h4>
                  <p className="text-muted-foreground">Global Destinations</p>
                </div>
                <div>
                  <h4 className="font-serif text-3xl md:text-4xl font-bold text-primary mb-2">24/7</h4>
                  <p className="text-muted-foreground">Concierge Service</p>
                </div>
                <div>
                  <h4 className="font-serif text-3xl md:text-4xl font-bold text-primary mb-2">100%</h4>
                  <p className="text-muted-foreground">Safety Record</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
