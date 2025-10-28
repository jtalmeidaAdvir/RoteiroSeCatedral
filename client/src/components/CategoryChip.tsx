import { Badge } from "@/components/ui/badge";
import { LucideIcon } from "lucide-react";

export interface CategoryChipProps {
  id: string;
  label: string;
  icon: LucideIcon;
  isActive?: boolean;
  onClick?: (id: string) => void;
}

export default function CategoryChip({
  id,
  label,
  icon: Icon,
  isActive = false,
  onClick,
}: CategoryChipProps) {
  const handleClick = () => {
    onClick?.(id);
  };

  return (
    <Badge
      variant={isActive ? "default" : "secondary"}
      className={`cursor-pointer px-4 py-2 text-sm font-medium whitespace-nowrap hover-elevate active-elevate-2 ${
        isActive ? "bg-primary text-primary-foreground" : ""
      }`}
      onClick={handleClick}
      data-testid={`chip-category-${id}`}
    >
      <Icon className="h-4 w-4 mr-2" />
      {label}
    </Badge>
  );
}
