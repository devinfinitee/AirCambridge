import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { AVAILABLE_LOCATIONS } from "@/lib/locations";
import { useLocation } from "wouter";
import { useToast } from "@/hooks/use-toast";
import gsap from "gsap";

export default function QuickBookingWidget() {
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const widgetRef = useRef<HTMLDivElement>(null);
  const { toast } = useToast();

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

  const [, setLocation] = useLocation();

  const handleBookNow = () => {
    if (!from || !to) {
      toast({
        title: "Missing Information",
        description: "Please select both departure and destination cities.",
        variant: "destructive",
      });
      return;
    }
    
    if (from === to) {
      toast({
        title: "Invalid Selection",
        description: "Departure and destination cities cannot be the same.",
        variant: "destructive",
      });
      return;
    }
    
    setLocation('/booking');
  };

  return (
    <div ref={widgetRef} className="bg-white rounded-lg shadow-2xl p-6 md:p-8 max-w-6xl mx-auto -mt-16 md:-mt-20 relative z-10 opacity-0">
      <h3 className="font-serif text-2xl md:text-3xl font-bold text-foreground mb-6 text-center">
        Book Your Private Journey
      </h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <div>
          <Select value={from} onValueChange={setFrom}>
            <SelectTrigger data-testid="input-from">
              <SelectValue placeholder="From" />
            </SelectTrigger>
            <SelectContent>
              {AVAILABLE_LOCATIONS.map((location) => (
                <SelectItem key={location.value} value={location.value}>
                  {location.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <div>
          <Select value={to} onValueChange={setTo}>
            <SelectTrigger data-testid="input-to">
              <SelectValue placeholder="To" />
            </SelectTrigger>
            <SelectContent>
              {AVAILABLE_LOCATIONS.map((location) => (
                <SelectItem 
                  key={location.value} 
                  value={location.value}
                  disabled={location.value === from}
                >
                  {location.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <Button className="w-full" onClick={handleBookNow} data-testid="button-book-now">
          Book Now
        </Button>
      </div>
    </div>
  );
}
