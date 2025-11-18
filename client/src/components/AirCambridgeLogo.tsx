import { cn } from "@/lib/utils";
import brandLogo from "@/assets/aircambridge-logo.svg";

interface AirCambridgeLogoProps {
  className?: string;
  showTagline?: boolean;
}

export default function AirCambridgeLogo({ className, showTagline = false }: AirCambridgeLogoProps) {
  return (
    <div className={cn("flex flex-col gap-2", className)}>
      <img src={brandLogo} alt="AirCambridge" className="h-12 w-auto object-contain" />
      {showTagline && (
        <span className="text-xs uppercase tracking-[0.35em] text-white/70">
          Seamless travel & mobility
        </span>
      )}
    </div>
  );
}

