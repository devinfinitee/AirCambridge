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
  const [serviceType, setServiceType] = useState("");
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
    
    sessionStorage.setItem(
      "aircambridge-last-search",
      JSON.stringify({ from, to, serviceType })
    );

    if (serviceType === "passport") {
      setLocation("/passport-booking");
    } else {
      setLocation("/booking");
    }
  };

  return (
    <div
      ref={widgetRef}
      className="bg-gradient-to-br from-black via-black to-[#111] text-white rounded-2xl md:rounded-3xl shadow-2xl p-4 sm:p-6 md:p-8 max-w-6xl mx-auto -mt-12 sm:-mt-16 md:-mt-20 relative z-10 opacity-0 border border-white/10"
    >
      <h3 className="font-serif text-xl sm:text-2xl md:text-3xl font-bold mb-2 sm:mb-3 text-center leading-tight">
        Concierge requests from MM2, Ikeja Airport — Lagos 🇳🇬
      </h3>
      <p className="text-center text-white/70 text-xs sm:text-sm md:text-base mb-4 sm:mb-6 leading-relaxed px-2">
        Combine domestic or international flights, helicopter lifts, visa processing, passport express, or aircraft deals in one request.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
        <div>
          <Select value={from} onValueChange={setFrom}>
            <SelectTrigger data-testid="input-from" className="bg-white text-black h-12">
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
            <SelectTrigger data-testid="input-to" className="bg-white text-black h-12">
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
        <div>
          <Select value={serviceType} onValueChange={setServiceType}>
            <SelectTrigger className="bg-white text-black h-12" data-testid="input-service-type">
              <SelectValue placeholder="Service focus" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="domestic">Domestic Flight Booking</SelectItem>
              <SelectItem value="international">International Flight Booking</SelectItem>
              <SelectItem value="private-jet">Private Jet Charter</SelectItem>
              <SelectItem value="helicopter">Helicopter Charter</SelectItem>
              <SelectItem value="visa">Immigration & Visa Support</SelectItem>
              <SelectItem value="passport">Passport Express (3hrs)</SelectItem>
              <SelectItem value="sales">Airplane Sales & Deals</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <Button
          className="w-full h-12 text-base font-semibold"
          onClick={handleBookNow}
          data-testid="button-book-now"
        >
          Submit Request
        </Button>
      </div>
      <p className="text-xs text-white/60 mt-4 text-center">
        Need help? Our operations desk responds instantly via WhatsApp.
      </p>
    </div>
  );
}
