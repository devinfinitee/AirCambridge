import { cn } from "@/lib/utils";
import brandLogo from "@/assets/aircambridge-logo.svg";

interface AirCambridgeLogoProps {
  className?: string;
  showTagline?: boolean;
}

export default function AirCambridgeLogo({ className, showTagline = false }: AirCambridgeLogoProps) {
  return (
    <div className={cn("flex items-center gap-2 md:flex-col md:gap-2 flex-shrink-0", className)}>
      <img 
        src={brandLogo} 
        alt="AirCambridge" 
        className="h-8 w-auto md:h-12 object-contain max-w-[140px] md:max-w-none" 
      />
      {showTagline && (
        <span className="hidden md:block text-xs uppercase tracking-[0.35em] text-white/70 whitespace-nowrap">
          Seamless travel & mobility
        </span>
      )}
    </div>
  );
}

