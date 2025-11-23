import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useLocation } from "wouter";
import { useToast } from "@/hooks/use-toast";
import { formatCurrency } from "@/lib/locations";

const PASSPORT_PRICING_NGN: Record<string, number> = {
  "5-32": 100000,
  "5-64": 200000,
  "10-32": 220000,
  "10-64": 300000,
};

const PASSPORT_FAST_TRACK_FEE_NGN = 71020;

export default function PassportBooking() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [duration, setDuration] = useState<"5" | "10" | "">("");
  const [pages, setPages] = useState<"32" | "64" | "">("");
  const [, setLocation] = useLocation();
  const { toast } = useToast();

  const getSelectedKey = () => {
    if (!duration || !pages) return null;
    return `${duration}-${pages}`;
  };

  const getPricing = () => {
    const key = getSelectedKey();
    if (!key) return { base: 0, total: 0 };
    const base = PASSPORT_PRICING_NGN[key] ?? 0;
    const total = base + PASSPORT_FAST_TRACK_FEE_NGN;
    return { base, total };
  };

  const handleContinue = () => {
    if (!fullName || !email || !phone || !dateOfBirth || !duration || !pages) {
      toast({
        title: "Missing Information",
        description: "Please fill all required fields before continuing to payment.",
        variant: "destructive",
      });
      return;
    }

    const { base, total } = getPricing();
    if (!base || !total) {
      toast({
        title: "Invalid Selection",
        description: "Please select a valid passport option.",
        variant: "destructive",
      });
      return;
    }

    const order = {
      fullName,
      email,
      phone,
      dateOfBirth,
      duration,
      pages,
      base,
      fastTrackFee: PASSPORT_FAST_TRACK_FEE_NGN,
      total,
    };

    sessionStorage.setItem("aircambridge-passport-order", JSON.stringify(order));
    setLocation("/passport-payment");
  };

  const { base, total } = getPricing();

  return (
    <div className="min-h-screen pt-20">
      <div className="max-w-3xl mx-auto px-4 md:px-6 lg:px-8 py-16 md:py-24">
        <div className="mb-10 text-center space-y-3">
          <p className="uppercase tracking-[0.3em] text-xs md:text-sm text-primary">Passport Express</p>
          <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold">
            Passport Booking Details
          </h1>
          <p className="text-sm md:text-base text-muted-foreground max-w-xl mx-auto">
            Provide your details and preferred passport type. On the next page, you'll complete payment securely via Flutterwave.
          </p>
        </div>

        <Card>
          <CardHeader>
            <CardTitle className="text-xl md:text-2xl">Applicant & Passport Details</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
              <div>
                <Label htmlFor="fullName">Full Name *</Label>
                <Input
                  id="fullName"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                />
              </div>
              <div>
                <Label htmlFor="email">Email Address *</Label>
                <Input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
              <div>
                <Label htmlFor="phone">Phone Number *</Label>
                <Input
                  id="phone"
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
              </div>
              <div>
                <Label htmlFor="dateOfBirth">Date of Birth *</Label>
                <Input
                  id="dateOfBirth"
                  type="date"
                  value={dateOfBirth}
                  onChange={(e) => setDateOfBirth(e.target.value)}
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
              <div>
                <Label htmlFor="duration">Passport Duration *</Label>
                <Select
                  value={duration}
                  onValueChange={(value) => setDuration(value as "5" | "10")}
                >
                  <SelectTrigger id="duration">
                    <SelectValue placeholder="Select duration" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="5">5 years</SelectItem>
                    <SelectItem value="10">10 years</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label htmlFor="pages">Passport Pages *</Label>
                <Select
                  value={pages}
                  onValueChange={(value) => setPages(value as "32" | "64")}
                >
                  <SelectTrigger id="pages">
                    <SelectValue placeholder="Select pages" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="32">32 pages</SelectItem>
                    <SelectItem value="64">64 pages</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="rounded-lg border p-4 bg-muted/40 text-sm space-y-1">
              {!base || !total ? (
                <p className="text-muted-foreground">
                  Select a passport duration and pages to see the total amount including fast tracking fee.
                </p>
              ) : (
                <>
                  <p>
                    <span className="font-medium">Base fee:</span> {formatCurrency(base, "NGN")}
                  </p>
                  <p>
                    <span className="font-medium">Fast tracking, registration, processing & logistics:</span>{" "}
                    {formatCurrency(PASSPORT_FAST_TRACK_FEE_NGN, "NGN")}
                  </p>
                  <p className="font-semibold text-primary text-base mt-1">
                    Total: {formatCurrency(total, "NGN")}
                  </p>
                </>
              )}
            </div>

            <Button
              type="button"
              size="lg"
              className="w-full md:w-auto"
              onClick={handleContinue}
            >
              Continue to Payment
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
