"use client";

import { useEffect, useState } from "react";

export default function ClientBody({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isClient, setIsClient] = useState(false);

  // Éviter les modifications du DOM pendant l'hydratation
  useEffect(() => {
    // On marque qu'on est côté client
    setIsClient(true);

    // Ce délai garantit que les modifications du DOM sont faites après l'hydratation complète
    const timer = setTimeout(() => {
      document.body.className = "antialiased";
    }, 0);

    return () => clearTimeout(timer);
  }, []);

  // Fallback non-interactif côté serveur
  if (!isClient) {
    return (
      <body className="antialiased" suppressHydrationWarning data-client-rendered="false">
        {children}
      </body>
    );
  }

  return (
    <body
      className="antialiased"
      suppressHydrationWarning
      data-client-rendered="true"
    >
      {children}
    </body>
  );
}
