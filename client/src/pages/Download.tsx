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
  Smartphone,
  Share,
  Plus
} from "lucide-react";
import { Link } from "wouter";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

interface BeforeInstallPromptEvent extends Event {
  prompt: () => Promise<void>;
  userChoice: Promise<{ outcome: 'accepted' | 'dismissed' }>;
}

export default function DownloadPage() {
  const [deferredPrompt, setDeferredPrompt] = useState<BeforeInstallPromptEvent | null>(null);
  const [isInstalled, setIsInstalled] = useState(false);
  const [isInstalling, setIsInstalling] = useState(false);
  const [isIOS, setIsIOS] = useState(false);
  const [showIOSModal, setShowIOSModal] = useState(false);

  useEffect(() => {
    // Detectar se já está instalada
    const checkInstalled = () => {
      if (window.matchMedia('(display-mode: standalone)').matches) {
        return true;
      }
      // @ts-ignore - standalone é específico do iOS
      if (window.navigator.standalone === true) {
        return true;
      }
      return false;
    };
    
    setIsInstalled(checkInstalled());

    // Detectar iOS
    const iOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !(window as any).MSStream;
    setIsIOS(iOS);

    // Capturar o evento de instalação
    const handleBeforeInstall = (e: Event) => {
      e.preventDefault();
      setDeferredPrompt(e as BeforeInstallPromptEvent);
    };

    // Escutar quando a app é instalada
    const handleAppInstalled = () => {
      setIsInstalled(true);
      setDeferredPrompt(null);
    };

    window.addEventListener('beforeinstallprompt', handleBeforeInstall);
    window.addEventListener('appinstalled', handleAppInstalled);

    return () => {
      window.removeEventListener('beforeinstallprompt', handleBeforeInstall);
      window.removeEventListener('appinstalled', handleAppInstalled);
    };
  }, []);

  const handleInstallClick = async () => {
    // Se é iOS, mostrar modal com instruções
    if (isIOS) {
      setShowIOSModal(true);
      return;
    }

    // Se não temos o prompt, não podemos fazer nada
    if (!deferredPrompt) {
      return;
    }

    setIsInstalling(true);
    
    try {
      // Mostrar o prompt de instalação nativo
      await deferredPrompt.prompt();
      
      // Esperar pela escolha do utilizador
      const { outcome } = await deferredPrompt.userChoice;
      
      if (outcome === 'accepted') {
        setIsInstalled(true);
      }
      
      setDeferredPrompt(null);
    } catch (error) {
      console.error('Erro ao instalar:', error);
    } finally {
      setIsInstalling(false);
    }
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

              <Button 
                size="lg" 
                className="w-full text-lg py-6"
                onClick={handleInstallClick}
                disabled={isInstalling || (!deferredPrompt && !isIOS)}
                data-testid="button-install-pwa"
              >
                {isInstalling ? (
                  <>
                    <div className="h-5 w-5 mr-2 animate-spin rounded-full border-2 border-current border-t-transparent" />
                    A instalar...
                  </>
                ) : (
                  <>
                    <Download className="h-5 w-5 mr-2" />
                    Instalar Aplicação
                  </>
                )}
              </Button>

              {!deferredPrompt && !isIOS && (
                <Card className="p-4 bg-blue-500/5 border-blue-500/20">
                  <p className="text-sm text-center text-muted-foreground">
                    💡 Se o botão não funcionar, procure o ícone de instalação{" "}
                    <Download className="inline h-4 w-4" /> na barra de endereço do navegador
                  </p>
                </Card>
              )}
            </>
          )}
        </div>
      </main>

      {/* Modal para instruções iOS */}
      <Dialog open={showIOSModal} onOpenChange={setShowIOSModal}>
        <DialogContent className="max-w-md">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2">
              <Smartphone className="h-5 w-5 text-primary" />
              Como Instalar no iPhone/iPad
            </DialogTitle>
            <DialogDescription asChild>
              <div className="space-y-4 pt-4">
                <p className="text-sm">
                  Para instalar esta aplicação no seu dispositivo iOS, siga estes passos:
                </p>
                
                <ol className="space-y-3">
                  <li className="flex gap-3 text-sm">
                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xs font-bold">
                      1
                    </span>
                    <div className="flex-1">
                      <p className="font-medium text-foreground mb-1">Abra o menu Partilhar</p>
                      <p className="text-muted-foreground">
                        Toque no botão <Share className="inline h-4 w-4" /> (Partilhar) na barra inferior do Safari
                      </p>
                    </div>
                  </li>
                  
                  <li className="flex gap-3 text-sm">
                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xs font-bold">
                      2
                    </span>
                    <div className="flex-1">
                      <p className="font-medium text-foreground mb-1">Adicionar ao Ecrã Principal</p>
                      <p className="text-muted-foreground">
                        Deslize e selecione "Adicionar ao Ecrã Principal" <Plus className="inline h-4 w-4" />
                      </p>
                    </div>
                  </li>
                  
                  <li className="flex gap-3 text-sm">
                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xs font-bold">
                      3
                    </span>
                    <div className="flex-1">
                      <p className="font-medium text-foreground mb-1">Confirmar</p>
                      <p className="text-muted-foreground">
                        Toque em "Adicionar" no canto superior direito
                      </p>
                    </div>
                  </li>
                </ol>

                <div className="pt-4">
                  <Button 
                    onClick={() => setShowIOSModal(false)}
                    className="w-full"
                    data-testid="button-close-ios-modal"
                  >
                    Entendi
                  </Button>
                </div>
              </div>
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  );
}
