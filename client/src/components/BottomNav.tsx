import { Home, Search, Heart, Download, User } from "lucide-react";
import { Button } from "@/components/ui/button";

export interface BottomNavProps {
  activeTab?: string;
  onTabChange?: (tab: string) => void;
}

const navItems = [
  { id: "home", label: "Início", icon: Home },
  { id: "search", label: "Buscar", icon: Search },
  { id: "favorites", label: "Favoritos", icon: Heart },
  { id: "downloads", label: "Salvos", icon: Download },
];

export default function BottomNav({ activeTab = "home", onTabChange }: BottomNavProps) {
  const handleTabClick = (tabId: string) => {
    onTabChange?.(tabId);
  };

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-card border-t border-border z-50">
      <div className="flex items-center justify-around px-2 py-2">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeTab === item.id;
          
          return (
            <Button
              key={item.id}
              variant="ghost"
              className={`flex flex-col items-center gap-1 h-auto py-2 px-3 hover-elevate ${
                isActive ? "text-primary" : "text-muted-foreground"
              }`}
              onClick={() => handleTabClick(item.id)}
              data-testid={`button-nav-${item.id}`}
            >
              <Icon className={`h-6 w-6 ${isActive ? "fill-primary" : ""}`} />
              <span className="text-xs font-medium">{item.label}</span>
            </Button>
          );
        })}
      </div>
    </nav>
  );
}
