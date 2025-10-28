import CategoryChip from "../CategoryChip";
import { Waves } from "lucide-react";

export default function CategoryChipExample() {
  return (
    <div className="flex gap-2">
      <CategoryChip
        id="beaches"
        label="Praias"
        icon={Waves}
        isActive={true}
        onClick={(id) => console.log("Category clicked:", id)}
      />
      <CategoryChip
        id="mountains"
        label="Montanhas"
        icon={Waves}
        isActive={false}
        onClick={(id) => console.log("Category clicked:", id)}
      />
    </div>
  );
}
