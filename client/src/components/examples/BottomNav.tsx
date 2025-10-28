import BottomNav from "../BottomNav";
import { useState } from "react";

export default function BottomNavExample() {
  const [activeTab, setActiveTab] = useState("home");

  return (
    <div className="relative h-24 bg-background">
      <BottomNav
        activeTab={activeTab}
        onTabChange={(tab) => {
          console.log("Tab changed:", tab);
          setActiveTab(tab);
        }}
      />
    </div>
  );
}
