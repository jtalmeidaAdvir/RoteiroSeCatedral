import { X, Clock, MapPin, Calendar, TrendingUp, Download, Share2, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useState } from "react";

export interface RouteDetailProps {
  id: string;
  title: string;
  images: string[];
  duration: string;
  activities: number;
  category: string;
  season: string;
  difficulty: string;
  overview: string;
  highlights: string[];
  itinerary: { day: number; title: string; description: string }[];
  tips: string[];
  isDownloaded?: boolean;
  onClose?: () => void;
  onDownload?: (id: string) => void;
  onShare?: (id: string) => void;
}

export default function RouteDetail({
  id,
  title,
  images,
  duration,
  activities,
  category,
  season,
  difficulty,
  overview,
  highlights,
  itinerary,
  tips,
  isDownloaded = false,
  onClose,
  onDownload,
  onShare,
}: RouteDetailProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [downloaded, setDownloaded] = useState(isDownloaded);

  const handleDownload = () => {
    setDownloaded(true);
    onDownload?.(id);
  };

  return (
    <div className="fixed inset-0 bg-background z-50 overflow-hidden flex flex-col">
      <div className="relative">
        <div className="aspect-[16/9] overflow-hidden">
          <img
            src={images[currentImageIndex]}
            alt={title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
        </div>

        <Button
          size="icon"
          variant="ghost"
          className="absolute top-4 left-4 bg-black/40 backdrop-blur-sm text-white hover:bg-black/60"
          onClick={onClose}
          data-testid="button-close-detail"
        >
          <X className="h-6 w-6" />
        </Button>

        {images.length > 1 && (
          <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
            {images.map((_, index) => (
              <button
                key={index}
                className={`h-2 rounded-full transition-all ${
                  index === currentImageIndex
                    ? "w-8 bg-white"
                    : "w-2 bg-white/50"
                }`}
                onClick={() => setCurrentImageIndex(index)}
                data-testid={`button-image-${index}`}
              />
            ))}
          </div>
        )}
      </div>

      <ScrollArea className="flex-1">
        <div className="p-4 pb-24">
          <div className="mb-4">
            <h1 className="text-3xl font-bold mb-2" data-testid="text-detail-title">
              {title}
            </h1>
            <Badge variant="secondary" data-testid="text-detail-category">
              {category}
            </Badge>
          </div>

          <div className="grid grid-cols-2 gap-3 mb-6">
            <Card className="p-4">
              <div className="flex items-center gap-2 text-muted-foreground mb-1">
                <Clock className="h-4 w-4" />
                <span className="text-sm">Duração</span>
              </div>
              <p className="font-semibold" data-testid="text-detail-duration">{duration}</p>
            </Card>
            <Card className="p-4">
              <div className="flex items-center gap-2 text-muted-foreground mb-1">
                <MapPin className="h-4 w-4" />
                <span className="text-sm">Atividades</span>
              </div>
              <p className="font-semibold" data-testid="text-detail-activities">{activities}</p>
            </Card>
            <Card className="p-4">
              <div className="flex items-center gap-2 text-muted-foreground mb-1">
                <Calendar className="h-4 w-4" />
                <span className="text-sm">Melhor época</span>
              </div>
              <p className="font-semibold" data-testid="text-detail-season">{season}</p>
            </Card>
            <Card className="p-4">
              <div className="flex items-center gap-2 text-muted-foreground mb-1">
                <TrendingUp className="h-4 w-4" />
                <span className="text-sm">Dificuldade</span>
              </div>
              <p className="font-semibold" data-testid="text-detail-difficulty">{difficulty}</p>
            </Card>
          </div>

          <section className="mb-6">
            <h2 className="text-xl font-bold mb-3">Sobre este roteiro</h2>
            <p className="text-muted-foreground leading-relaxed" data-testid="text-detail-overview">
              {overview}
            </p>
          </section>

          <section className="mb-6">
            <h2 className="text-xl font-bold mb-3">Destaques</h2>
            <div className="space-y-2">
              {highlights.map((highlight, index) => (
                <div key={index} className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <p className="text-muted-foreground" data-testid={`text-highlight-${index}`}>
                    {highlight}
                  </p>
                </div>
              ))}
            </div>
          </section>

          <section className="mb-6">
            <h2 className="text-xl font-bold mb-3">Roteiro Dia a Dia</h2>
            <div className="space-y-4">
              {itinerary.map((day, index) => (
                <Card key={index} className="p-4">
                  <h3 className="font-semibold mb-2" data-testid={`text-day-${day.day}-title`}>
                    Dia {day.day}: {day.title}
                  </h3>
                  <p className="text-sm text-muted-foreground" data-testid={`text-day-${day.day}-description`}>
                    {day.description}
                  </p>
                </Card>
              ))}
            </div>
          </section>

          <section className="mb-6">
            <h2 className="text-xl font-bold mb-3">Dicas Práticas</h2>
            <div className="space-y-2">
              {tips.map((tip, index) => (
                <Card key={index} className="p-3">
                  <p className="text-sm text-muted-foreground" data-testid={`text-tip-${index}`}>
                    {tip}
                  </p>
                </Card>
              ))}
            </div>
          </section>
        </div>
      </ScrollArea>

      <div className="fixed bottom-0 left-0 right-0 bg-card border-t border-border p-4">
        <div className="flex gap-2">
          <Button
            variant="outline"
            size="icon"
            onClick={() => onShare?.(id)}
            data-testid="button-share"
          >
            <Share2 className="h-5 w-5" />
          </Button>
          <Button
            className="flex-1"
            onClick={handleDownload}
            disabled={downloaded}
            data-testid="button-download"
          >
            {downloaded ? (
              <>
                <Check className="h-5 w-5 mr-2" />
                Salvo para Offline
              </>
            ) : (
              <>
                <Download className="h-5 w-5 mr-2" />
                Baixar para Offline
              </>
            )}
          </Button>
        </div>
      </div>
    </div>
  );
}
