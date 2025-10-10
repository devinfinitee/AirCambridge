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

    gsap.fromTo(
      ".hero-content",
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 1.2,
        ease: "power3.out",
        delay: 0.3,
      }
    );
  }, [isLoaded]);

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
            loading={index === 0 ? "eager" : "lazy"}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/60" />
        </div>
      ))}

      <div className="absolute inset-0 flex items-center justify-center">
        <div className="hero-content text-center text-white px-4 max-w-5xl mx-auto opacity-0">
          <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl font-bold mb-4 md:mb-6 tracking-tight" data-testid="text-hero-title">
            Your Journey. Redefined.
          </h1>
          <p className="text-base md:text-xl mb-8 md:mb-12 text-white/90 max-w-2xl mx-auto font-light">
            Experience unparalleled luxury and comfort with AirCambridge Jet's exclusive private aviation services
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" variant="default" asChild data-testid="button-book-jet-hero" className="min-w-[160px]">
              <Link href="/booking">Book a Jet</Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white/20 min-w-[160px]"
              asChild
              data-testid="button-explore-fleet"
            >
              <Link href="/fleet">Explore Fleet</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
