import { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import gsap from "gsap";

import jet1 from "@assets/stock_images/luxury_private_jet_e_68c499e9.jpg";
import jet2 from "@assets/stock_images/luxury_private_jet_e_9a9496d7.jpg";
import jet3 from "@assets/stock_images/luxury_private_jet_e_6f06c902.jpg";
import jet4 from "@assets/stock_images/luxury_private_jet_e_fcb5c50d.jpg";
import jet5 from "@assets/stock_images/luxury_private_jet_e_e886b84a.jpg";

const images = [jet1, jet2, jet3, jet4, jet5];

export default function HeroSlider() {
  const sliderRef = useRef<HTMLDivElement>(null);
  const currentIndex = useRef(0);

  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return;

    const imageElements = slider.querySelectorAll(".hero-image");

    const animateSlider = () => {
      const current = imageElements[currentIndex.current];
      const next = imageElements[(currentIndex.current + 1) % images.length];

      gsap.to(current, {
        opacity: 0,
        duration: 1.5,
        ease: "power2.inOut",
      });

      gsap.fromTo(
        next,
        { opacity: 0 },
        {
          opacity: 1,
          duration: 1.5,
          ease: "power2.inOut",
        }
      );

      currentIndex.current = (currentIndex.current + 1) % images.length;
    };

    const interval = setInterval(animateSlider, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative h-screen w-full overflow-hidden" ref={sliderRef}>
      {images.map((img, index) => (
        <div
          key={index}
          className={`hero-image absolute inset-0 ${index === 0 ? "opacity-100" : "opacity-0"}`}
        >
          <img
            src={img}
            alt={`Luxury private jet ${index + 1}`}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/60" />
        </div>
      ))}

      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center text-white px-4 max-w-5xl mx-auto">
          <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl font-bold mb-4 md:mb-6" data-testid="text-hero-title">
            Your Journey. Redefined.
          </h1>
          <p className="text-lg md:text-xl mb-8 md:mb-12 text-white/90 max-w-2xl mx-auto">
            Experience unparalleled luxury and comfort with AirCambridge Jet's exclusive private aviation services
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" variant="default" asChild data-testid="button-book-jet-hero">
              <Link href="/booking">Book a Jet</Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white/20"
              asChild
              data-testid="button-explore-fleet"
            >
              <Link href="/fleet">Explore Our Fleet</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
