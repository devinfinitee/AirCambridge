import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Check } from "lucide-react";
import gsap from "gsap";

export default function Booking() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    departureCity: "",
    destination: "",
    departureDate: "",
    returnDate: "",
    passengers: "",
    preferredJetType: "",
    additionalNotes: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const formRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (formRef.current) {
      const elements = Array.from(formRef.current.children);
      gsap.fromTo(
        elements,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.15,
          ease: "power3.out",
        }
      );
    }
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Booking submitted:", formData);
    setIsSubmitted(true);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen pt-20 flex items-center justify-center px-4">
        <Card className="max-w-md w-full">
          <CardContent className="pt-6 text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-green-100 mb-4">
              <Check className="text-green-600" size={40} />
            </div>
            <h2 className="font-serif text-2xl md:text-3xl font-bold mb-2">Thank you, {formData.fullName}!</h2>
            <p className="text-muted-foreground mb-6">
              Your AirCambridge Jet concierge will contact you shortly to finalize your booking.
            </p>
            <Button
              onClick={() => {
                setIsSubmitted(false);
                setFormData({
                  fullName: "",
                  email: "",
                  phone: "",
                  departureCity: "",
                  destination: "",
                  departureDate: "",
                  returnDate: "",
                  passengers: "",
                  preferredJetType: "",
                  additionalNotes: "",
                });
              }}
              data-testid="button-new-booking"
            >
              Make Another Booking
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-20">
      <div className="max-w-4xl mx-auto px-4 md:px-6 lg:px-8 py-16 md:py-24">
        <div ref={formRef}>
          <div className="text-center mb-12">
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold mb-4">Book Your Private Journey</h1>
            <p className="text-base md:text-lg text-muted-foreground">
              Complete the form below and our team will create a personalized itinerary for you
            </p>
          </div>

          <Card>
            <CardHeader>
              <CardTitle className="text-xl md:text-2xl">Flight Details</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                  <div>
                    <Label htmlFor="fullName">Full Name *</Label>
                    <Input
                      id="fullName"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      required
                      data-testid="input-full-name"
                    />
                  </div>
                  <div>
                    <Label htmlFor="email">Email Address *</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      data-testid="input-email"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                  <div>
                    <Label htmlFor="phone">Phone Number *</Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      data-testid="input-phone"
                    />
                  </div>
                  <div>
                    <Label htmlFor="passengers">Number of Passengers *</Label>
                    <Input
                      id="passengers"
                      name="passengers"
                      type="number"
                      min="1"
                      value={formData.passengers}
                      onChange={handleChange}
                      required
                      data-testid="input-passengers-booking"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                  <div>
                    <Label htmlFor="departureCity">Departure City *</Label>
                    <Input
                      id="departureCity"
                      name="departureCity"
                      value={formData.departureCity}
                      onChange={handleChange}
                      required
                      data-testid="input-departure"
                    />
                  </div>
                  <div>
                    <Label htmlFor="destination">Destination *</Label>
                    <Input
                      id="destination"
                      name="destination"
                      value={formData.destination}
                      onChange={handleChange}
                      required
                      data-testid="input-destination"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                  <div>
                    <Label htmlFor="departureDate">Departure Date *</Label>
                    <Input
                      id="departureDate"
                      name="departureDate"
                      type="date"
                      value={formData.departureDate}
                      onChange={handleChange}
                      required
                      data-testid="input-departure-date"
                    />
                  </div>
                  <div>
                    <Label htmlFor="returnDate">Return Date (Optional)</Label>
                    <Input
                      id="returnDate"
                      name="returnDate"
                      type="date"
                      value={formData.returnDate}
                      onChange={handleChange}
                      data-testid="input-return-date"
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="preferredJetType">Preferred Jet Type (Optional)</Label>
                  <Input
                    id="preferredJetType"
                    name="preferredJetType"
                    placeholder="e.g., Gulfstream G700, Midsize Jet"
                    value={formData.preferredJetType}
                    onChange={handleChange}
                    data-testid="input-jet-type"
                  />
                </div>

                <div>
                  <Label htmlFor="additionalNotes">Additional Notes / Requests (Optional)</Label>
                  <Textarea
                    id="additionalNotes"
                    name="additionalNotes"
                    placeholder="Special requests, dietary requirements, etc."
                    value={formData.additionalNotes}
                    onChange={handleChange}
                    rows={4}
                    data-testid="textarea-notes"
                  />
                </div>

                <Button type="submit" className="w-full" size="lg" data-testid="button-submit-booking">
                  Submit Booking Request
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
