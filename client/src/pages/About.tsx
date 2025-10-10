import { Shield, Star, Lock, Lightbulb } from "lucide-react";
import ownerImage from "@assets/stock_images/professional_busines_0ffbe441.jpg";

export default function About() {
  return (
    <div className="min-h-screen pt-20">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-16 md:py-24">
        <section className="mb-24">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="font-serif text-4xl md:text-5xl font-bold mb-6">
              Our Story: Precision, Passion, and Private Aviation
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Founded on precision and passion, AirCambridge Jet redefines private aviation by merging
              world-class service with seamless travel experiences.
            </p>
          </div>
        </section>

        <section className="mb-24">
          <div className="bg-card rounded-lg p-8 md:p-12">
            <h2 className="font-serif text-3xl md:text-4xl font-bold mb-6">Our Mission</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              To make luxury air travel as effortless and reliable as possible for every client. We believe
              that exceptional service, uncompromising safety, and personalized attention should be the
              standard, not the exception.
            </p>
          </div>
        </section>

        <section className="mb-24">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-center mb-12">Core Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-foreground mb-4">
                <Shield className="text-primary" size={40} />
              </div>
              <h3 className="font-semibold text-xl mb-2">Safety</h3>
              <p className="text-muted-foreground text-sm">Uncompromising standards in every flight</p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-foreground mb-4">
                <Star className="text-primary" size={40} />
              </div>
              <h3 className="font-semibold text-xl mb-2">Excellence</h3>
              <p className="text-muted-foreground text-sm">Exceptional service at every touchpoint</p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-foreground mb-4">
                <Lock className="text-primary" size={40} />
              </div>
              <h3 className="font-semibold text-xl mb-2">Discretion</h3>
              <p className="text-muted-foreground text-sm">Privacy and confidentiality guaranteed</p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-foreground mb-4">
                <Lightbulb className="text-primary" size={40} />
              </div>
              <h3 className="font-semibold text-xl mb-2">Innovation</h3>
              <p className="text-muted-foreground text-sm">Leading edge aviation technology</p>
            </div>
          </div>
        </section>

        <section className="mb-24">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-center mb-12">
            Our Leadership
          </h2>
          <div className="max-w-2xl mx-auto">
            <div className="bg-card rounded-lg overflow-hidden">
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={ownerImage}
                  alt="Company Owner"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-8 text-center">
                <h3 className="font-serif text-2xl font-bold mb-2">Jonathan Cambridge</h3>
                <p className="text-primary font-medium mb-4">Founder & CEO</p>
                <p className="text-muted-foreground leading-relaxed">
                  With over 20 years of experience in aviation and luxury hospitality, Jonathan founded
                  AirCambridge Jet to revolutionize private air travel. His vision combines cutting-edge
                  technology with timeless service excellence.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-center mb-12">
            Connecting the World, Exclusively
          </h2>
          <div className="bg-card rounded-lg p-8 md:p-12">
            <div className="text-center">
              <p className="text-lg text-muted-foreground mb-8">
                Our global network spans across continents, providing seamless service to over 5,000
                destinations worldwide. From Lagos to London, Dubai to New York, we ensure your journey is
                flawless from departure to arrival.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
                <div>
                  <h4 className="font-serif text-3xl font-bold text-primary mb-2">5,000+</h4>
                  <p className="text-muted-foreground">Global Destinations</p>
                </div>
                <div>
                  <h4 className="font-serif text-3xl font-bold text-primary mb-2">24/7</h4>
                  <p className="text-muted-foreground">Concierge Service</p>
                </div>
                <div>
                  <h4 className="font-serif text-3xl font-bold text-primary mb-2">100%</h4>
                  <p className="text-muted-foreground">Safety Record</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
