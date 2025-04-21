'use client';

import { useState, useEffect } from "react";
import { CodeBlock } from "@/components/ui/Decorations";
import PowerBIDashboard from "@/components/ui/PowerBIDashboard";

const DashboardAnimations = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return (
      <div className="dashboard-animations min-h-[300px] flex items-center justify-center bg-white/5 rounded-lg">
        <div className="text-gray-400">Chargement du dashboard...</div>
      </div>
    );
  }

  return (
    <div className="dashboard-animations" aria-hidden="true">
      <div className="animation-container">
        <CodeBlock className="z-10 relative animate-float" />
      </div>
      <div className="animation-container">
        <PowerBIDashboard className="z-10 relative animate-float" />
      </div>
    </div>
  );
};

export default DashboardAnimations;
