import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Calendar, MapPin, Users } from "lucide-react";
import gsap from "gsap";

export default function QuickBookingWidget() {
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [date, setDate] = useState("");
  const [passengers, setPassengers] = useState("");
  const widgetRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!widgetRef.current) return;

    gsap.fromTo(
      widgetRef.current,
      { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.out",
        delay: 0.5,
      }
    );
  }, []);

  const handleBookNow = () => {
    console.log("Quick booking:", { from, to, date, passengers });
  };

  return (
    <div ref={widgetRef} className="bg-white rounded-lg shadow-2xl p-6 md:p-8 max-w-6xl mx-auto -mt-16 md:-mt-20 relative z-10 opacity-0">
      <h3 className="font-serif text-2xl md:text-3xl font-bold text-foreground mb-6 text-center">
        Book Your Private Journey
      </h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
        <div className="relative">
          <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground pointer-events-none" size={18} />
          <Input
            placeholder="From"
            value={from}
            onChange={(e) => setFrom(e.target.value)}
            className="pl-10"
            data-testid="input-from"
          />
        </div>
        <div className="relative">
          <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground pointer-events-none" size={18} />
          <Input
            placeholder="To"
            value={to}
            onChange={(e) => setTo(e.target.value)}
            className="pl-10"
            data-testid="input-to"
          />
        </div>
        <div className="relative">
          <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground pointer-events-none" size={18} />
          <Input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className="pl-10"
            data-testid="input-date"
          />
        </div>
        <div className="relative">
          <Users className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground pointer-events-none" size={18} />
          <Input
            type="number"
            placeholder="Passengers"
            value={passengers}
            onChange={(e) => setPassengers(e.target.value)}
            className="pl-10"
            min="1"
            data-testid="input-passengers"
          />
        </div>
        <Button className="w-full" onClick={handleBookNow} data-testid="button-book-now">
          Book Now
        </Button>
      </div>
    </div>
  );
}
