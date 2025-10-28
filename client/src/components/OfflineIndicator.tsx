import { WifiOff, Wifi } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export interface OfflineIndicatorProps {
  isOffline: boolean;
}

export default function OfflineIndicator({ isOffline }: OfflineIndicatorProps) {
  if (!isOffline) {
    return null;
  }

  return (
    <div className="fixed top-0 left-0 right-0 z-50 bg-yellow-500 text-black px-4 py-2">
      <div className="flex items-center justify-center gap-2 text-sm font-medium">
        <WifiOff className="h-4 w-4" />
        <span>Modo Offline - Mostrando roteiros salvos</span>
      </div>
    </div>
  );
}
