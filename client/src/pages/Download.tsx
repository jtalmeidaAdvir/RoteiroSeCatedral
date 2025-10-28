import { useState, useEffect } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Download, 
  Church,
  CheckCircle2,
  WifiOff,
  Zap,
  ArrowLeft,
  Smartphone
} from "lucide-react";
import { Link } from "wouter";

interface BeforeInstallPromptEvent extends Event {
  prompt: () => Promise<void>;
  userChoice: Promise<{ outcome: 'accepted' | 'dismissed' }>;
}

export default function DownloadPage() {
  const [deferredPrompt, setDeferredPrompt] = useState<BeforeInstallPromptEvent | null>(null);
  const [isInstalled, setIsInstalled] = useState(false);

  useEffect(() => {
    // Detectar se já está instalada
    if (window.matchMedia('(display-mode: standalone)').matches) {
      setIsInstalled(true);
    }

    // Capturar o evento de instalação
    const handler = (e: Event) => {
      e.preventDefault();
      setDeferredPrompt(e as BeforeInstallPromptEvent);
    };

    window.addEventListener('beforeinstallprompt', handler);

    return () => {
      window.removeEventListener('beforeinstallprompt', handler);
    };
  }, []);

  const handleInstallClick = async () => {
    if (!deferredPrompt) {
      return;
    }

    deferredPrompt.prompt();
    
    const { outcome } = await deferredPrompt.userChoice;
    
    if (outcome === 'accepted') {
      setIsInstalled(true);
    }
    
    setDeferredPrompt(null);
  };

  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80 border-b border-border">
        <div className="px-4 py-4">
          <div className="flex items-center gap-4">
            <Link href="/">
              <Button variant="ghost" size="icon" data-testid="button-back">
                <ArrowLeft className="h-5 w-5" />
              </Button>
            </Link>
            <div className="flex-1">
              <div className="flex items-center gap-2">
                <Church className="h-6 w-6 text-primary" />
                <h1 className="text-2xl font-bold">Descarregar App</h1>
              </div>
            </div>
          </div>
        </div>
      </header>

      <main className="px-4 py-8">
        <div className="max-w-2xl mx-auto space-y-6">
          {isInstalled ? (
            <Card className="p-8 text-center bg-green-500/5 border-green-500/20">
              <CheckCircle2 className="h-16 w-16 text-green-600 dark:text-green-400 mx-auto mb-4" />
              <h2 className="text-2xl font-bold mb-2">Aplicação Instalada! ✅</h2>
              <p className="text-muted-foreground mb-6">
                A aplicação já está instalada no seu dispositivo.
                Pode acedê-la a partir do ecrã inicial.
              </p>
              <Link href="/">
                <Button size="lg" data-testid="button-start-tour">
                  Iniciar Tour
                </Button>
              </Link>
            </Card>
          ) : (
            <>
              <div className="text-center space-y-4">
                <div className="inline-block p-4 bg-primary/10 rounded-full">
                  <Download className="h-12 w-12 text-primary" />
                </div>
                <h2 className="text-3xl font-bold">Instale a Aplicação</h2>
                <p className="text-lg text-muted-foreground">
                  Descarregue e use offline, como uma aplicação nativa
                </p>
              </div>

              <div className="grid gap-4">
                <Card className="p-4">
                  <div className="flex items-start gap-3">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <WifiOff className="h-5 w-5 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold mb-1">Funciona Offline</h3>
                      <p className="text-sm text-muted-foreground">
                        Explore a catedral sem ligação à internet
                      </p>
                    </div>
                  </div>
                </Card>

                <Card className="p-4">
                  <div className="flex items-start gap-3">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <Zap className="h-5 w-5 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold mb-1">Acesso Rápido</h3>
                      <p className="text-sm text-muted-foreground">
                        Ícone no ecrã inicial para acesso instantâneo
                      </p>
                    </div>
                  </div>
                </Card>

                <Card className="p-4">
                  <div className="flex items-start gap-3">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <Smartphone className="h-5 w-5 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold mb-1">Experiência Nativa</h3>
                      <p className="text-sm text-muted-foreground">
                        Ecrã completo, sem barras do navegador
                      </p>
                    </div>
                  </div>
                </Card>
              </div>

              {deferredPrompt ? (
                <Button 
                  size="lg" 
                  className="w-full text-lg py-6"
                  onClick={handleInstallClick}
                  data-testid="button-install-pwa"
                >
                  <Download className="h-5 w-5 mr-2" />
                  Descarregar Aplicação
                </Button>
              ) : (
                <Card className="p-6 text-center">
                  <p className="text-muted-foreground mb-4">
                    Para instalar esta aplicação, procure o botão de instalação na barra de endereço do seu navegador
                  </p>
                  <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
                    <Download className="h-4 w-4" />
                    <span>Disponível no Chrome, Edge e Safari</span>
                  </div>
                </Card>
              )}
            </>
          )}
        </div>
      </main>
    </div>
  );
}
