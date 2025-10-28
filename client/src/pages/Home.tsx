import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import ThemeToggle from "@/components/ThemeToggle";
import OfflineIndicator from "@/components/OfflineIndicator";
import { 
  ChevronRight, 
  Clock, 
  MapPin, 
  CheckCircle2,
  Church,
  Download,
  WifiOff
} from "lucide-react";

import cathedralExterior from "@assets/generated_images/Sé_Cathedral_Braga_exterior_f731ae2a.png";
import cathedralInterior from "@assets/generated_images/Cathedral_interior_baroque_altar_73a97039.png";
import cloisterImage from "@assets/generated_images/Cathedral_cloister_courtyard_c812ad2f.png";
import treasuryImage from "@assets/generated_images/Cathedral_treasury_museum_830a6e80.png";

// TODO: remove mock functionality
const tourSteps = [
  {
    id: 1,
    title: "Entrada e Fachada Principal",
    duration: "10 min",
    image: cathedralExterior,
    description: "Inicie a sua visita pela imponente fachada românica da Sé de Braga, construída no século XII. Esta é uma das mais antigas catedrais de Portugal.",
    details: [
      "Observe a arquitetura românica com seus característicos arcos de volta perfeita",
      "Note as esculturas medievais que decoram o portal principal",
      "A torre sineira à esquerda foi adicionada no século XVIII",
      "O brasão de armas acima da entrada principal representa os arcebispos de Braga"
    ],
    tips: "Melhor luz para fotografias pela manhã. Evite visitar durante missas."
  },
  {
    id: 2,
    title: "Nave Central",
    duration: "15 min",
    image: cathedralInterior,
    description: "Entre pela porta principal e percorra a nave central da catedral, admirando os altares laterais e a grandiosidade do espaço.",
    details: [
      "A nave tem 58 metros de comprimento e impressiona pela altura",
      "São 8 altares laterais de diferentes épocas e estilos",
      "O altar-mor ao fundo é revestido em talha dourada barroca",
      "As colunas maciças sustentam as abóbadas de berço",
      "Repare nos vitrais que iluminam suavemente o interior"
    ],
    tips: "Mantenha silêncio e respeite os momentos de oração dos fiéis. Fotografia sem flash permitida."
  },
  {
    id: 3,
    title: "Capela dos Reis",
    duration: "15 min",
    image: cathedralInterior,
    description: "Visite a Capela dos Reis, local sagrado onde repousam D. Henrique e D. Teresa, pais do primeiro rei de Portugal.",
    details: [
      "D. Henrique de Borgonha (1066-1112) - Conde de Portugal",
      "D. Teresa de Leão (1080-1130) - Rainha de Portugal",
      "Foram os pais de D. Afonso Henriques, primeiro rei de Portugal",
      "Os túmulos góticos são do século XIV",
      "A capela tem decoração manuelina do século XVI",
      "Local de grande importância histórica para Portugal"
    ],
    tips: "Este é um local de grande reverência. Mantenha o respeito apropriado."
  },
  {
    id: 4,
    title: "Coro Alto e Órgão Barroco",
    duration: "10 min",
    image: cathedralInterior,
    description: "Suba ao coro alto para admirar de perto o magnífico órgão barroco de 1737, um dos mais importantes de Portugal.",
    details: [
      "O órgão foi construído em 1737 pelo organeiro Simão Fontanes",
      "Possui 3.000 tubos e 2 teclados manuais",
      "A caixa barroca é ricamente decorada com talha dourada",
      "Ainda é utilizado em concertos e celebrações especiais",
      "Daqui tem-se uma vista privilegiada de toda a catedral"
    ],
    tips: "Acesso por escada - pode não ser adequado para pessoas com mobilidade reduzida."
  },
  {
    id: 5,
    title: "Claustros Góticos",
    duration: "15 min",
    image: cloisterImage,
    description: "Desça aos tranquilos claustros góticos do século XIV, um oásis de paz e contemplação no coração da cidade.",
    details: [
      "Construídos entre 1350-1380 em estilo gótico",
      "Quatro galerias com arcos ogivais decorados",
      "Os capitéis têm esculturas de figuras humanas e animais",
      "O jardim central mantém espécies tradicionais medievais",
      "Local perfeito para pausa e reflexão",
      "Repare nas gárgulas nas caleiras do telhado"
    ],
    tips: "Excelente local para fotografias. Bancos disponíveis para descanso."
  },
  {
    id: 6,
    title: "Capela de São Geraldo",
    duration: "10 min",
    image: cathedralInterior,
    description: "Visite a Capela de São Geraldo, dedicada ao santo padroeiro da cidade de Braga.",
    details: [
      "São Geraldo foi arcebispo de Braga no século XII",
      "Responsável por importantes reformas na diocese",
      "A capela foi reconstruída no século XVIII em estilo barroco",
      "Possui altar em talha dourada com imagem do santo",
      "Local de devoção muito visitado pelos bracarenses"
    ],
    tips: "Velas votivas podem ser acesas em homenagem ao santo."
  },
  {
    id: 7,
    title: "Tesouro-Museu da Sé",
    duration: "20 min",
    image: treasuryImage,
    description: "Finalize a visita no Tesouro-Museu, uma das mais ricas coleções de arte sacra de Portugal.",
    details: [
      "Cálices de ouro e prata dos séculos XIV a XVIII",
      "Cruz processional manuelina em prata dourada",
      "Custódia barroca com pedras preciosas",
      "Paramentos litúrgicos bordados a fio de ouro",
      "Relicários com relíquias de santos",
      "Manuscritos iluminados medievais",
      "Imagens sacras em madeira, marfim e pedra"
    ],
    tips: "Fotografia proibida no museu. Temperatura controlada - pode estar fresco."
  },
  {
    id: 8,
    title: "Capela da Glória",
    duration: "10 min",
    image: cathedralInterior,
    description: "Última parada na Capela da Glória, obra-prima da talha dourada portuguesa do século XVIII.",
    details: [
      "Construída no século XVIII pelo arcebispo D. Rodrigo de Moura Teles",
      "Completamente revestida em talha dourada barroca",
      "Considerada uma das capelas mais ricas de Portugal",
      "Os painéis de azulejos contam histórias bíblicas",
      "O teto possui pinturas em perspectiva ilusionista"
    ],
    tips: "Esta capela representa o auge do barroco português. Dedique tempo para observar os detalhes."
  }
];

export default function Home() {
  const [completedSteps, setCompletedSteps] = useState<number[]>([]);
  const [expandedStep, setExpandedStep] = useState<number | null>(1);
  const [isOffline] = useState(false); // TODO: remove mock functionality - detect real network status
  const [isDownloaded] = useState(true); // TODO: remove mock functionality

  const toggleStep = (stepId: number) => {
    setExpandedStep(expandedStep === stepId ? null : stepId);
  };

  const markStepComplete = (stepId: number) => {
    if (completedSteps.includes(stepId)) {
      setCompletedSteps(completedSteps.filter(id => id !== stepId));
    } else {
      setCompletedSteps([...completedSteps, stepId]);
    }
  };

  const totalDuration = tourSteps.reduce((acc, step) => {
    const minutes = parseInt(step.duration);
    return acc + minutes;
  }, 0);

  const completionPercentage = (completedSteps.length / tourSteps.length) * 100;

  return (
    <div className="min-h-screen bg-background">
      <OfflineIndicator isOffline={isOffline} />

      <header className="sticky top-0 z-40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80 border-b border-border">
        <div className="px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-1">
                <Church className="h-6 w-6 text-primary" />
                <h1 className="text-2xl font-bold">Tour Sé de Braga</h1>
              </div>
              <p className="text-sm text-muted-foreground">Guia Completo Offline</p>
            </div>
            <ThemeToggle />
          </div>
        </div>
      </header>

      <div className="sticky top-[97px] z-30 bg-card/95 backdrop-blur border-b border-border">
        <div className="px-4 py-4">
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center gap-4 text-sm">
              <div className="flex items-center gap-1">
                <Clock className="h-4 w-4 text-muted-foreground" />
                <span className="font-medium">{totalDuration} min</span>
              </div>
              <div className="flex items-center gap-1">
                <MapPin className="h-4 w-4 text-muted-foreground" />
                <span className="font-medium">{tourSteps.length} etapas</span>
              </div>
            </div>
            {isDownloaded && (
              <Badge variant="secondary" className="bg-green-500/10 text-green-700 dark:text-green-400 border-green-500/20">
                <WifiOff className="h-3 w-3 mr-1" />
                Offline
              </Badge>
            )}
          </div>
          
          {completedSteps.length > 0 && (
            <div>
              <div className="flex items-center justify-between text-xs text-muted-foreground mb-1">
                <span>Progresso</span>
                <span>{completedSteps.length}/{tourSteps.length} concluídas</span>
              </div>
              <div className="h-2 bg-muted rounded-full overflow-hidden">
                <div 
                  className="h-full bg-primary transition-all duration-300"
                  style={{ width: `${completionPercentage}%` }}
                />
              </div>
            </div>
          )}
        </div>
      </div>

      <main className="px-4 py-6 pb-8">
        <div className="max-w-3xl mx-auto space-y-3">
          {tourSteps.map((step) => {
            const isExpanded = expandedStep === step.id;
            const isCompleted = completedSteps.includes(step.id);

            return (
              <Card 
                key={step.id}
                className={`overflow-hidden transition-all ${isCompleted ? 'opacity-75' : ''}`}
              >
                <button
                  onClick={() => toggleStep(step.id)}
                  className="w-full text-left"
                  data-testid={`button-step-${step.id}`}
                >
                  <div className="p-4">
                    <div className="flex items-start gap-3">
                      <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm ${
                        isCompleted 
                          ? 'bg-green-500 text-white' 
                          : 'bg-primary text-primary-foreground'
                      }`}>
                        {isCompleted ? <CheckCircle2 className="h-5 w-5" /> : step.id}
                      </div>
                      
                      <div className="flex-1 min-w-0">
                        <div className="flex items-start justify-between gap-2 mb-1">
                          <h3 className="font-semibold text-lg" data-testid={`text-step-${step.id}-title`}>
                            {step.title}
                          </h3>
                          <ChevronRight 
                            className={`h-5 w-5 text-muted-foreground flex-shrink-0 transition-transform ${
                              isExpanded ? 'rotate-90' : ''
                            }`}
                          />
                        </div>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <Clock className="h-3 w-3" />
                          <span>{step.duration}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </button>

                {isExpanded && (
                  <div className="border-t border-border">
                    <div className="aspect-video overflow-hidden">
                      <img 
                        src={step.image} 
                        alt={step.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    
                    <div className="p-4 space-y-4">
                      <p className="text-muted-foreground leading-relaxed" data-testid={`text-step-${step.id}-description`}>
                        {step.description}
                      </p>

                      <div>
                        <h4 className="font-semibold mb-2">O que observar:</h4>
                        <ul className="space-y-2">
                          {step.details.map((detail, idx) => (
                            <li key={idx} className="flex items-start gap-2 text-sm">
                              <div className="h-1.5 w-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                              <span className="text-muted-foreground" data-testid={`text-step-${step.id}-detail-${idx}`}>
                                {detail}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <Card className="bg-muted/50 p-3">
                        <p className="text-sm">
                          <span className="font-semibold">💡 Dica: </span>
                          <span className="text-muted-foreground" data-testid={`text-step-${step.id}-tip`}>
                            {step.tips}
                          </span>
                        </p>
                      </Card>

                      <Button
                        onClick={(e) => {
                          e.stopPropagation();
                          markStepComplete(step.id);
                        }}
                        variant={isCompleted ? "outline" : "default"}
                        className="w-full"
                        data-testid={`button-complete-${step.id}`}
                      >
                        {isCompleted ? (
                          <>
                            <CheckCircle2 className="h-4 w-4 mr-2" />
                            Concluída
                          </>
                        ) : (
                          'Marcar como Concluída'
                        )}
                      </Button>
                    </div>
                  </div>
                )}
              </Card>
            );
          })}
        </div>

        {completedSteps.length === tourSteps.length && (
          <Card className="max-w-3xl mx-auto mt-6 p-6 text-center bg-primary/5 border-primary/20">
            <CheckCircle2 className="h-12 w-12 text-primary mx-auto mb-3" />
            <h3 className="text-xl font-bold mb-2">Tour Completo! 🎉</h3>
            <p className="text-muted-foreground">
              Parabéns! Você completou todas as etapas do tour pela Sé de Braga.
            </p>
          </Card>
        )}
      </main>
    </div>
  );
}
