'use client';

import Image from "next/image";
import { useState, useEffect } from "react";

const AnimatedLogo = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return (
      <div className="flex justify-center mb-6">
        <div className="w-20 h-20 bg-gray-100 rounded-full"></div>
      </div>
    );
  }

  return (
    <div className="flex justify-center mb-6">
      <Image
        src="/images/Kyriel_Services_Gemini_-_Logo_seul_-_900px.png"
        alt="Kyriel Services Logo"
        width={80}
        height={80}
        className="animate-float"
      />
    </div>
  );
};

export default AnimatedLogo;
