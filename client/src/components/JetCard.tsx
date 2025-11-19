import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Users, Gauge, MapPin } from "lucide-react";

interface JetCardProps {
  id: string;
  name: string;
  category: string;
  capacity: number;
  range: string;
  speed: string;
  hourlyRate: number;
  image: string;
  currency?: 'USD' | 'NGN';
  onViewDetails?: (id: string) => void;
}

export default function JetCard({
  id,
  name,
  category,
  capacity,
  range,
  speed,
  hourlyRate,
  image,
  currency = 'USD',
  onViewDetails,
}: JetCardProps) {
  // Convert USD to NGN (approximate rate: 1 USD = 1600 NGN)
  const displayRate = currency === 'USD' ? hourlyRate : hourlyRate * 1600;
  const currencySymbol = currency === 'USD' ? '$' : '₦';
  return (
    <Card
      className="overflow-hidden hover-elevate active-elevate-2 transition-all cursor-pointer group h-full flex flex-col animate-in fade-in-50 slide-in-from-bottom-2 duration-500"
      data-testid={`card-jet-${id}`}
    >
      <div className="aspect-video overflow-hidden">
        <img src={image} alt={name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
      </div>
      <CardContent className="p-6 flex-1 flex flex-col">
        <div className="flex items-center gap-2 mb-2">
          <span className="text-xs font-medium text-primary bg-primary/10 px-2 py-1 rounded">
            {category}
          </span>
        </div>
        <h3 className="font-serif text-2xl font-bold mb-4 text-foreground">{name}</h3>
        <div className="grid grid-cols-3 gap-4 mb-4">
          <div className="text-center">
            <Users className="mx-auto mb-1 text-muted-foreground" size={18} />
            <p className="text-xs text-muted-foreground">Passengers</p>
            <p className="text-sm font-semibold">{capacity}</p>
          </div>
          <div className="text-center">
            <MapPin className="mx-auto mb-1 text-muted-foreground" size={18} />
            <p className="text-xs text-muted-foreground">Range</p>
            <p className="text-sm font-semibold">{range}</p>
          </div>
          <div className="text-center">
            <Gauge className="mx-auto mb-1 text-muted-foreground" size={18} />
            <p className="text-xs text-muted-foreground">Speed</p>
            <p className="text-sm font-semibold">{speed}</p>
          </div>
        </div>
        <div className="border-t pt-4 mt-auto">
          <p className="text-sm text-muted-foreground">Estimated Hourly Rate</p>
          <p className="text-2xl font-bold text-primary">{currencySymbol}{displayRate.toLocaleString()}</p>
        </div>
      </CardContent>
      <CardFooter className="pt-0 pb-6 px-6">
        <Button
          variant="outline"
          className="w-full"
          onClick={() => onViewDetails?.(id)}
          data-testid={`button-view-details-${id}`}
        >
          View Details
        </Button>
      </CardFooter>
    </Card>
  );
}
