import { LucideIcon } from "lucide-react";

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

export default function FeatureCard({ icon: Icon, title, description }: FeatureCardProps) {
  return (
    <div className="text-center p-6 hover-elevate active-elevate-2 rounded-lg transition-all">
      <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
        <Icon className="text-primary" size={32} />
      </div>
      <h4 className="font-semibold text-lg mb-2 text-foreground">{title}</h4>
      <p className="text-muted-foreground text-sm">{description}</p>
    </div>
  );
}
