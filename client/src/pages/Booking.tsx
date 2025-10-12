import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Check, DollarSign, MessageCircle } from "lucide-react";
import { AVAILABLE_LOCATIONS, PRICING, formatCurrency, isWithinNigeria } from "@/lib/locations";
import { openWhatsApp, emailJsConfig } from "@/lib/emailjs";
import { useToast } from "@/hooks/use-toast";
import emailjs from "@emailjs/browser";
import gsap from "gsap";

export default function Booking() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    departureCity: "",
    destination: "",
    additionalNotes: "",
  });
  const [currency, setCurrency] = useState<'USD' | 'NGN'>('USD');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const formRef = useRef<HTMLDivElement>(null);
  const { toast } = useToast();

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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (formData.departureCity === formData.destination) {
      toast({
        title: "Invalid Selection",
        description: "Departure and destination cities cannot be the same.",
        variant: "destructive",
      });
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      const fromLabel = AVAILABLE_LOCATIONS.find(l => l.value === formData.departureCity)?.label;
      const toLabel = AVAILABLE_LOCATIONS.find(l => l.value === formData.destination)?.label;
      
      await emailjs.send(
        emailJsConfig.serviceId,
        emailJsConfig.templateId,
        {
          from_name: formData.fullName,
          from_email: formData.email,
          message: `Booking Request:

Name: ${formData.fullName}
Email: ${formData.email}
Phone: ${formData.phone}
From: ${fromLabel}
To: ${toLabel}
Additional Notes: ${formData.additionalNotes || 'None'}`,
          to_name: 'AirCambridge Jet Team',
        },
        emailJsConfig.publicKey
      );
      
      setIsSubmitted(true);
      toast({
        title: "Booking Request Sent!",
        description: "We'll contact you shortly to finalize your booking.",
      });
    } catch (error) {
      console.error("Error sending booking:", error);
      toast({
        title: "Error",
        description: "Failed to send booking. Please try WhatsApp or contact us directly.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSelectChange = (name: string, value: string) => {
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleWhatsAppBooking = () => {
    if (!formData.fullName || !formData.email || !formData.phone || !formData.departureCity || !formData.destination) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields.",
        variant: "destructive",
      });
      return;
    }
    
    if (formData.departureCity === formData.destination) {
      toast({
        title: "Invalid Selection",
        description: "Departure and destination cities cannot be the same.",
        variant: "destructive",
      });
      return;
    }
    
    const fromLabel = AVAILABLE_LOCATIONS.find(l => l.value === formData.departureCity)?.label;
    const toLabel = AVAILABLE_LOCATIONS.find(l => l.value === formData.destination)?.label;
    
    const message = `Hello, I would like to book a private jet flight:

Name: ${formData.fullName}
Email: ${formData.email}
Phone: ${formData.phone}
From: ${fromLabel}
To: ${toLabel}
Additional Notes: ${formData.additionalNotes || 'None'}`;
    
    openWhatsApp(message);
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
            <p className="text-base md:text-lg text-muted-foreground mb-6">
              Complete the form below and our team will create a personalized itinerary for you
            </p>
            <div className="flex justify-center gap-2">
              <Button
                type="button"
                variant={currency === 'USD' ? 'default' : 'outline'}
                size="sm"
                onClick={() => setCurrency('USD')}
              >
                USD ($)
              </Button>
              <Button
                type="button"
                variant={currency === 'NGN' ? 'default' : 'outline'}
                size="sm"
                onClick={() => setCurrency('NGN')}
              >
                NGN (₦)
              </Button>
            </div>
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

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                  <div>
                    <Label htmlFor="departureCity">Departure City *</Label>
                    <Select
                      value={formData.departureCity}
                      onValueChange={(value) => handleSelectChange('departureCity', value)}
                    >
                      <SelectTrigger id="departureCity" data-testid="input-departure">
                        <SelectValue placeholder="Select departure city" />
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
                    <Label htmlFor="destination">Destination *</Label>
                    <Select
                      value={formData.destination}
                      onValueChange={(value) => handleSelectChange('destination', value)}
                    >
                      <SelectTrigger id="destination" data-testid="input-destination">
                        <SelectValue placeholder="Select destination" />
                      </SelectTrigger>
                      <SelectContent>
                        {AVAILABLE_LOCATIONS.map((location) => (
                          <SelectItem 
                            key={location.value} 
                            value={location.value}
                            disabled={location.value === formData.departureCity}
                          >
                            {location.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
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

                <div className="space-y-3">
                  <Button 
                    type="submit" 
                    className="w-full" 
                    size="lg" 
                    data-testid="button-submit-booking"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Sending..." : "Submit Booking Request"}
                  </Button>
                  <Button 
                    type="button" 
                    variant="outline" 
                    className="w-full" 
                    size="lg"
                    onClick={handleWhatsAppBooking}
                    disabled={isSubmitting}
                  >
                    <MessageCircle className="mr-2" size={20} />
                    Book via WhatsApp
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>

          <Card className="mt-8">
            <CardHeader>
              <CardTitle className="text-xl md:text-2xl flex items-center gap-2">
                <DollarSign size={24} />
                Pricing Guide
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="border rounded-lg p-6 hover:border-primary transition-colors">
                  <h3 className="font-semibold text-lg mb-2">Within Nigeria</h3>
                  <p className="text-sm text-muted-foreground mb-3">{PRICING.withinNigeria.description}</p>
                  <div className="space-y-1">
                    <p className="text-2xl font-bold text-primary">
                      {formatCurrency(currency === 'USD' ? PRICING.withinNigeria.priceUSD : PRICING.withinNigeria.priceNGN, currency)}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      {currency === 'USD' 
                        ? `≈ ${formatCurrency(PRICING.withinNigeria.priceNGN, 'NGN')}`
                        : `≈ ${formatCurrency(PRICING.withinNigeria.priceUSD, 'USD')}`
                      }
                    </p>
                  </div>
                </div>
                <div className="border rounded-lg p-6 hover:border-primary transition-colors bg-gradient-to-br from-primary/5 to-primary/10">
                  <h3 className="font-semibold text-lg mb-2">International Flights</h3>
                  <p className="text-sm text-muted-foreground mb-3">{PRICING.international.description}</p>
                  <div className="space-y-2">
                    <p className="text-lg font-semibold text-primary">
                      Custom Pricing
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {PRICING.international.note}
                    </p>
                    <Button 
                      variant="outline" 
                      size="sm" 
                      className="mt-2"
                      onClick={() => openWhatsApp('Hello, I would like to inquire about international flight pricing.')}
                    >
                      <MessageCircle className="mr-2" size={16} />
                      Get Quote
                    </Button>
                  </div>
                </div>
              </div>
              <p className="text-sm text-muted-foreground mt-6 text-center">
                * Prices are estimates per hour and may vary based on route, availability, and additional services.
                Final pricing will be confirmed by our team via WhatsApp or email.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
