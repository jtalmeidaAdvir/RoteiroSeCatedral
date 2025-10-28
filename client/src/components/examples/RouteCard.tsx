import RouteCard from "../RouteCard";
import beachImage from "@assets/generated_images/Tropical_beach_destination_photo_be76f544.png";

export default function RouteCardExample() {
  return (
    <div className="max-w-sm">
      <RouteCard
        id="1"
        title="Praias Paradisíacas"
        image={beachImage}
        duration="5 dias"
        activities={12}
        category="Praias"
        isDownloaded={true}
        isFavorite={false}
        onFavoriteToggle={(id) => console.log("Favorite toggled:", id)}
        onClick={(id) => console.log("Route clicked:", id)}
      />
    </div>
  );
}
