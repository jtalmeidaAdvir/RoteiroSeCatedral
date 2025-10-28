import { Heart, Clock, MapPin } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export interface RouteCardProps {
  id: string;
  title: string;
  image: string;
  duration: string;
  activities: number;
  category: string;
  isDownloaded?: boolean;
  isFavorite?: boolean;
  onFavoriteToggle?: (id: string) => void;
  onClick?: (id: string) => void;
}

export default function RouteCard({
  id,
  title,
  image,
  duration,
  activities,
  category,
  isDownloaded = false,
  isFavorite = false,
  onFavoriteToggle,
  onClick,
}: RouteCardProps) {
  const [favorite, setFavorite] = useState(isFavorite);

  const handleFavoriteClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    setFavorite(!favorite);
    onFavoriteToggle?.(id);
  };

  const handleCardClick = () => {
    onClick?.(id);
  };

  return (
    <Card
      className="overflow-hidden hover-elevate active-elevate-2 cursor-pointer border-0 shadow-md"
      onClick={handleCardClick}
      data-testid={`card-route-${id}`}
    >
      <div className="relative aspect-[16/9] overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
        
        <Button
          size="icon"
          variant="ghost"
          className="absolute top-3 right-3 bg-black/20 backdrop-blur-sm hover:bg-black/40"
          onClick={handleFavoriteClick}
          data-testid={`button-favorite-${id}`}
        >
          <Heart
            className={`h-5 w-5 ${favorite ? "fill-red-500 text-red-500" : "text-white"}`}
          />
        </Button>

        {isDownloaded && (
          <Badge
            className="absolute top-3 left-3 bg-green-500 text-white border-0"
            data-testid={`badge-downloaded-${id}`}
          >
            Offline
          </Badge>
        )}

        <div className="absolute bottom-0 left-0 right-0 p-4">
          <h3 className="text-xl font-bold text-white mb-2" data-testid={`text-title-${id}`}>
            {title}
          </h3>
          <div className="flex items-center gap-3 text-white/90 text-sm">
            <div className="flex items-center gap-1" data-testid={`text-duration-${id}`}>
              <Clock className="h-4 w-4" />
              <span>{duration}</span>
            </div>
            <div className="flex items-center gap-1" data-testid={`text-activities-${id}`}>
              <MapPin className="h-4 w-4" />
              <span>{activities} atividades</span>
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
}
