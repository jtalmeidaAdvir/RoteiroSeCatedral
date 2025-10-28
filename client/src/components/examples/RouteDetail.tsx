import RouteDetail from "../RouteDetail";
import beachImage from "@assets/generated_images/Tropical_beach_destination_photo_be76f544.png";
import mountainImage from "@assets/generated_images/Mountain_hiking_destination_photo_d2dd73fa.png";

export default function RouteDetailExample() {
  return (
    <RouteDetail
      id="1"
      title="Praias Paradisíacas"
      images={[beachImage, mountainImage]}
      duration="5 dias"
      activities={12}
      category="Praias"
      season="Nov - Mar"
      difficulty="Fácil"
      overview="Descubra as praias mais incríveis do litoral, com águas cristalinas e areias brancas. Este roteiro foi cuidadosamente planejado para você aproveitar o melhor que a costa tem a oferecer."
      highlights={[
        "Visita a 5 praias paradisíacas",
        "Passeio de barco com snorkeling",
        "Pôr do sol em mirante exclusivo",
        "Gastronomia local à beira-mar",
      ]}
      itinerary={[
        {
          day: 1,
          title: "Chegada e Praia Principal",
          description: "Chegada ao destino, check-in e tarde relaxante na praia principal com águas calmas.",
        },
        {
          day: 2,
          title: "Passeio de Barco",
          description: "Dia completo de passeio de barco visitando ilhas próximas e fazendo snorkeling.",
        },
        {
          day: 3,
          title: "Praias Secretas",
          description: "Exploração de praias menos conhecidas e trilha leve até mirante.",
        },
      ]}
      tips={[
        "Leve protetor solar fator 50+",
        "Use roupas leves e confortáveis",
        "Não esqueça máscara de snorkeling",
      ]}
      onClose={() => console.log("Close clicked")}
      onDownload={(id) => console.log("Download clicked:", id)}
      onShare={(id) => console.log("Share clicked:", id)}
    />
  );
}
