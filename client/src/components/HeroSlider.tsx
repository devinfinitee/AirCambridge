import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import gsap from "gsap";

import jet1 from "@assets/stock_images/luxury_private_jet_e_68c499e9.jpg";
import jet2 from "@assets/stock_images/luxury_private_jet_e_9a9496d7.jpg";
import jet3 from "@assets/stock_images/luxury_private_jet_e_6f06c902.jpg";
import jet4 from "@assets/stock_images/luxury_private_jet_e_fcb5c50d.jpg";
import jet5 from "@assets/stock_images/luxury_private_jet_e_e886b84a.jpg";

const images = [jet1, jet2, jet3, jet4, jet5];

const heroServices = [
  "Domestic & International Flights",
  "Private Jet & Helicopter Charter",
  "Immigration & Visa Advisory",
  "Passport Express (3hrs)",
  "Airplane Sales & Deals",
  "Travel Risk & Compliance",
];

export default function HeroSlider() {
  const sliderRef = useRef<HTMLDivElement>(null);
  const currentIndex = useRef(0);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const preloadImages = async () => {
      const promises = images.map((src) => {
        return new Promise((resolve) => {
          const img = new Image();
          img.src = src;
          img.onload = resolve;
          img.onerror = resolve; // Resolve even on error to not block the UI
        });
      });
      await Promise.all(promises);
      setIsLoaded(true);
    };

    preloadImages();
  }, []);

  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider || !isLoaded) return;

    const imageElements = slider.querySelectorAll(".hero-image");

    gsap.set(imageElements[0], { opacity: 1, scale: 1 });

    const animateSlider = () => {
      const current = imageElements[currentIndex.current];
      const next = imageElements[(currentIndex.current + 1) % images.length];

      const tl = gsap.timeline();

      tl.to(current, {
        opacity: 0,
        scale: 1.1,
        duration: 2,
        ease: "power2.inOut",
      });

      tl.fromTo(
        next,
        { opacity: 0, scale: 1 },
        {
          opacity: 1,
          scale: 1,
          duration: 2,
          ease: "power2.inOut",
        },
        "-=1.5"
      );

      currentIndex.current = (currentIndex.current + 1) % images.length;
    };

    const interval = setInterval(animateSlider, 5000);

    return () => clearInterval(interval);
  }, [isLoaded]);

  useEffect(() => {
    if (!isLoaded) return;

    const heroContent = document.querySelector(".hero-content");
    if (!heroContent) return;

    try {
      gsap.fromTo(
        heroContent,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 1.2,
          ease: "power3.out",
          delay: 0.3,
        }
      );
    } catch (error) {
      // Fallback: show content immediately if GSAP fails
      console.warn("GSAP animation failed, showing content directly:", error);
      (heroContent as HTMLElement).style.opacity = "1";
      (heroContent as HTMLElement).style.transform = "translateY(0)";
    }
  }, [isLoaded]);

  return (
    <div className="relative min-h-screen h-[100dvh] w-full overflow-hidden" ref={sliderRef}>
      {images.map((img, index) => (
        <div
          key={index}
          className={`hero-image absolute inset-0 ${index === 0 ? "opacity-100" : "opacity-0"}`}
        >
          <img
            src={img}
            alt={`Luxury private jet ${index + 1}`}
            className="w-full h-full object-cover object-center"
            loading={index === 0 ? "eager" : "lazy"}
            decoding="async"
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.style.display = 'none';
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70 z-10" />
        </div>
      ))}

      <div className="absolute inset-0 flex items-center justify-center z-20 px-4 py-16 md:py-20">
        <div className="hero-content text-center text-white w-full max-w-5xl mx-auto" style={{ opacity: isLoaded ? 1 : 0 }}>
          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-3 md:mb-4 lg:mb-6 tracking-tight leading-tight" data-testid="text-hero-title">
            Seamless Travel, Airtight Logistics.
          </h1>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl mb-3 md:mb-4 text-white/90 max-w-3xl mx-auto font-light leading-relaxed">
            AirCambridge operates from MM2, Ikeja Airport Lagos 🇳🇬 delivering rapid flight bookings, rotorcraft transfers,
            and concierge paperwork for every mission.
          </p>
          <p className="text-xs sm:text-sm md:text-base lg:text-lg mb-6 md:mb-8 lg:mb-10 text-white/80 max-w-2xl mx-auto leading-relaxed">
            Fast service, premium experience, trusted support — including Nigeria international passport delivery within 3 hours of capturing.
          </p>
          <div className="flex flex-wrap justify-center gap-2 md:gap-3 mb-6 md:mb-8 lg:mb-10">
            {heroServices.map((service) => (
              <span
                key={service}
                className="px-3 py-1.5 md:px-4 md:py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/30 text-xs sm:text-sm font-semibold tracking-tight"
              >
                {service}
              </span>
            ))}
          </div>
          <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center items-center">
            <Button size="lg" variant="default" asChild data-testid="button-book-jet-hero" className="min-w-[160px] sm:min-w-[180px] w-full sm:w-auto">
              <Link href="/booking">Request Concierge</Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white/20 min-w-[160px] w-full sm:w-auto"
              asChild
              data-testid="button-explore-fleet"
            >
              <Link href="/about">Explore Services</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
