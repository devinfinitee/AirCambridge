import { LucideIcon } from "lucide-react";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

export default function FeatureCard({ icon: Icon, title, description }: FeatureCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!cardRef.current) return;

    gsap.fromTo(
      cardRef.current,
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: cardRef.current,
          start: "top 85%",
          toggleActions: "play none none none",
        },
      }
    );
  }, []);

  return (
    <div ref={cardRef} className="text-center p-6 hover-elevate active-elevate-2 rounded-lg transition-all opacity-0">
      <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4 transition-transform duration-300 group-hover:scale-110">
        <Icon className="text-primary" size={32} />
      </div>
      <h4 className="font-semibold text-lg mb-2 text-foreground">{title}</h4>
      <p className="text-muted-foreground text-sm">{description}</p>
    </div>
  );
}
