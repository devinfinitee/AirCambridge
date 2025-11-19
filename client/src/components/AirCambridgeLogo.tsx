import { cn } from "@/lib/utils";
import brandLogo from "@/assets/aircambridge-logo.svg";

interface AirCambridgeLogoProps {
  className?: string;
  showTagline?: boolean;
}

export default function AirCambridgeLogo({ className, showTagline = false }: AirCambridgeLogoProps) {
  return (
    <div className={cn("flex items-center md:flex-col md:items-center gap-0 md:gap-2 flex-shrink max-w-full", className)}>
      <img 
        src={brandLogo} 
        alt="AirCambridge" 
        className="h-7 sm:h-8 md:h-12 w-auto object-contain max-w-[70vw] sm:max-w-[160px] md:max-w-none" 
      />
      {showTagline && (
        <span className="hidden md:block text-xs uppercase tracking-[0.35em] text-white/70 whitespace-nowrap">
          Seamless travel & mobility
        </span>
      )}
    </div>
  );
}

