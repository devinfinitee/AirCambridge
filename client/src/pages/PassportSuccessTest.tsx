import { useState } from "react";
import { useLocation } from "wouter";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function PassportSuccessTest() {
  const [, setLocation] = useLocation();
  const [fullName, setFullName] = useState("Test User");
  const [email, setEmail] = useState("test@example.com");
  const [phone, setPhone] = useState("08012345678");
  const [dateOfBirth, setDateOfBirth] = useState("2000-01-01");
  const [duration, setDuration] = useState<"5" | "10">("10");
  const [pages, setPages] = useState<"32" | "64">("64");
  const [base, setBase] = useState(300000);
  const [fastTrackFee, setFastTrackFee] = useState(71020);

  const handleSimulate = (e: React.FormEvent) => {
    e.preventDefault();
    const total = base + fastTrackFee;

    const order = {
      fullName,
      email,
      phone,
      dateOfBirth,
      duration,
      pages,
      base,
      fastTrackFee,
      total,
    };

    sessionStorage.setItem("aircambridge-passport-order", JSON.stringify(order));
    const txRef = `TEST-PASS-${Date.now()}`;
    setLocation(`/passport-success?tx_ref=${encodeURIComponent(txRef)}`);
  };

  return (
    <div className="min-h-screen pt-20">
      <div className="max-w-xl mx-auto px-4 md:px-6 lg:px-8 py-16 md:py-24">
        <Card>
          <CardHeader>
            <CardTitle className="text-xl md:text-2xl">Test Passport Receipt</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSimulate} className="space-y-4 text-sm">
              <p className="text-muted-foreground text-xs md:text-sm">
                This page is for testing only. It will save a fake passport order and redirect you to the
                success page so you can verify the receipt layout, image download, and PDF download.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="fullName">Full Name</Label>
                  <Input id="fullName" value={fullName} onChange={(e) => setFullName(e.target.value)} />
                </div>
                <div>
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="phone">Phone</Label>
                  <Input id="phone" value={phone} onChange={(e) => setPhone(e.target.value)} />
                </div>
                <div>
                  <Label htmlFor="dob">Date of Birth</Label>
                  <Input id="dob" type="date" value={dateOfBirth} onChange={(e) => setDateOfBirth(e.target.value)} />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="duration">Duration (years)</Label>
                  <Input
                    id="duration"
                    value={duration}
                    onChange={(e) => setDuration((e.target.value === "5" ? "5" : "10"))}
                  />
                </div>
                <div>
                  <Label htmlFor="pages">Pages</Label>
                  <Input
                    id="pages"
                    value={pages}
                    onChange={(e) => setPages((e.target.value === "32" ? "32" : "64"))}
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="base">Base fee (NGN)</Label>
                  <Input
                    id="base"
                    type="number"
                    value={base}
                    onChange={(e) => setBase(Number(e.target.value) || 0)}
                  />
                </div>
                <div>
                  <Label htmlFor="fast">Fast track & fees (NGN)</Label>
                  <Input
                    id="fast"
                    type="number"
                    value={fastTrackFee}
                    onChange={(e) => setFastTrackFee(Number(e.target.value) || 0)}
                  />
                </div>
              </div>

              <Button type="submit" className="w-full mt-2">
                Simulate Successful Payment
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
