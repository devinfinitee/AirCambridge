import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Calendar, MapPin, Users } from "lucide-react";

export default function QuickBookingWidget() {
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [date, setDate] = useState("");
  const [passengers, setPassengers] = useState("");

  const handleBookNow = () => {
    console.log("Quick booking:", { from, to, date, passengers });
  };

  return (
    <div className="bg-white rounded-lg shadow-xl p-6 md:p-8 max-w-6xl mx-auto -mt-16 md:-mt-20 relative z-10">
      <h3 className="font-serif text-2xl md:text-3xl font-bold text-foreground mb-6 text-center">
        Book Your Private Journey
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
        <div className="relative">
          <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" size={18} />
          <Input
            placeholder="From"
            value={from}
            onChange={(e) => setFrom(e.target.value)}
            className="pl-10"
            data-testid="input-from"
          />
        </div>
        <div className="relative">
          <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" size={18} />
          <Input
            placeholder="To"
            value={to}
            onChange={(e) => setTo(e.target.value)}
            className="pl-10"
            data-testid="input-to"
          />
        </div>
        <div className="relative">
          <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" size={18} />
          <Input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className="pl-10"
            data-testid="input-date"
          />
        </div>
        <div className="relative">
          <Users className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" size={18} />
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
