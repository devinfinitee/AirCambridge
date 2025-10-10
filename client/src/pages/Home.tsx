import HeroSlider from "@/components/HeroSlider";
import QuickBookingWidget from "@/components/QuickBookingWidget";
import FeatureCard from "@/components/FeatureCard";
import JetCard from "@/components/JetCard";
import TestimonialCard from "@/components/TestimonialCard";
import { Globe, Clock, Shield, Sparkles } from "lucide-react";
import jet1 from "@assets/stock_images/luxury_private_jet_e_68c499e9.jpg";
import jet2 from "@assets/stock_images/luxury_private_jet_e_9a9496d7.jpg";
import interior1 from "@assets/stock_images/luxury_private_jet_i_bec10afb.jpg";

//todo: remove mock data
const featuredJets = [
  {
    id: "1",
    name: "Gulfstream G700",
    category: "Heavy Jet",
    capacity: 19,
    range: "7,500 nm",
    speed: "Mach 0.925",
    hourlyRate: 12500,
    image: jet1,
  },
  {
    id: "2",
    name: "Bombardier Global 7500",
    category: "Ultra Long Range",
    capacity: 17,
    range: "7,700 nm",
    speed: "Mach 0.925",
    hourlyRate: 13000,
    image: jet2,
  },
  {
    id: "3",
    name: "Cessna Citation X",
    category: "Midsize Jet",
    capacity: 12,
    range: "3,460 nm",
    speed: "Mach 0.935",
    hourlyRate: 8500,
    image: interior1,
  },
];

//todo: remove mock data
const testimonials = [
  {
    quote: "AirCambridge Jet provides an unmatched level of service. Every detail is perfect, making business travel a true pleasure.",
    author: "Sarah Johnson",
    role: "CEO, Tech Innovations Inc.",
    rating: 5,
  },
  {
    quote: "The seamless booking process and exceptional in-flight experience make AirCambridge our go-to choice for executive travel.",
    author: "Michael Chen",
    role: "CFO, Global Ventures",
    rating: 5,
  },
  {
    quote: "Punctual, professional, and luxurious. AirCambridge Jet has redefined what private aviation means to our organization.",
    author: "Emma Williams",
    role: "Director, Prestige Events",
    rating: 5,
  },
];

export default function Home() {
  return (
    <div className="min-h-screen">
      <HeroSlider />

      <div className="px-4 md:px-6 lg:px-8 pb-16 md:pb-24">
        <QuickBookingWidget />

        <section className="max-w-7xl mx-auto mt-24">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-center mb-4">
            Why Fly AirCambridge
          </h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Experience the pinnacle of private aviation with uncompromising service and global reach
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <FeatureCard
              icon={Globe}
              title="Global Coverage"
              description="Access to over 5,000 destinations worldwide with seamless coordination"
            />
            <FeatureCard
              icon={Clock}
              title="24/7 Concierge"
              description="Round-the-clock support ensuring every aspect of your journey is perfect"
            />
            <FeatureCard
              icon={Shield}
              title="Safety First"
              description="Rigorous safety standards and experienced crew for peace of mind"
            />
            <FeatureCard
              icon={Sparkles}
              title="Luxury Comfort"
              description="Premium amenities and personalized service tailored to your needs"
            />
          </div>
        </section>

        <section className="max-w-7xl mx-auto mt-24">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-center mb-4">
            Featured Fleet
          </h2>
          <p className="text-center text-muted-foreground mb-12">
            Discover our handpicked selection of world-class aircraft
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredJets.map((jet) => (
              <JetCard key={jet.id} {...jet} />
            ))}
          </div>
        </section>

        <section className="max-w-7xl mx-auto mt-24">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-center mb-4">
            Client Testimonials
          </h2>
          <p className="text-center text-muted-foreground mb-12">
            Trusted by executives and discerning travelers worldwide
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard key={index} {...testimonial} />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
