'use client';

import { motion, useScroll, useTransform, type MotionValue } from "framer-motion";
import { useRef, useState, useEffect } from "react";

export type TreasureMapMilestone = {
  id: string;
  position: number; // Entre 0 et 1, position relative sur la ligne
  side: 'left' | 'right'; // Côté où apparaît le contenu
  icon: React.ElementType;
  title: string;
  value: string;
  description: string;
};

type TreasureMapLineProps = {
  milestones: TreasureMapMilestone[];
  className?: string;
};

export const TreasureMapLine = ({ milestones, className = "" }: TreasureMapLineProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isClient, setIsClient] = useState(false);
  const [path, setPath] = useState("");

  // S'assurer que nous sommes côté client pour éviter les problèmes d'hydratation
  useEffect(() => {
    setIsClient(true);
    // Générer le chemin côté client uniquement
    setPath(generatePath());
  }, []);

  // Créer un chemin sinueux en zigzag
  // Cela donnera un effet "aventure" à la ligne
  const generatePath = () => {
    const amplitude = 30; // Amplitude des zigzags
    const segments = 10; // Nombre de segments pour rendre la ligne intéressante
    const height = 1000; // Hauteur du SVG

    let pathString = "M50,0";

    for (let i = 1; i <= segments; i++) {
      const y = (i * height) / segments;
      const x = 50 + (i % 2 === 0 ? amplitude : -amplitude);
      pathString += ` C${50},${y - 50} ${x},${y - 30} ${x},${y}`;
    }

    return pathString;
  };

  // Rendu côté serveur ou rendu initial côté client avant l'effet
  if (!isClient) {
    return <div className={`relative min-h-[150vh] ${className}`} ref={containerRef} />;
  }

  // Seulement après l'initialisation côté client, nous utilisons les hooks de Framer Motion
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end center"]
  });

  // La longueur du tracé sera contrôlée par le scroll
  const pathLength = useTransform(scrollYProgress, [0, 0.9], [0, 1]);

  return (
    <div ref={containerRef} className={`relative min-h-[150vh] ${className}`} suppressHydrationWarning>
      <div className="absolute left-1/2 transform -translate-x-1/2 h-full">
        <svg className="h-full" width="100" viewBox="0 0 100 1000" fill="none" preserveAspectRatio="xMidYMax meet" suppressHydrationWarning>
          {/* Fausse ligne complète en arrière-plan (plus claire) */}
          <path
            d={path}
            stroke="var(--primary-100)"
            strokeWidth="4"
            strokeDasharray="8 4"
            strokeLinecap="round"
            fill="none"
            opacity="0.3"
            suppressHydrationWarning
          />

          {/* Ligne animée au scroll */}
          <motion.path
            d={path}
            stroke="var(--primary-600)"
            strokeWidth="4"
            strokeDasharray="8 4"
            strokeLinecap="round"
            fill="none"
            style={{ pathLength }}
            suppressHydrationWarning
          />
        </svg>
      </div>

      {/* Croix et contenus - ne les rendre que côté client */}
      {isClient && milestones.map((milestone) => (
        <TreasureMilestone
          key={milestone.id}
          milestone={milestone}
          scrollYProgress={scrollYProgress}
        />
      ))}
    </div>
  );
};

// Composant pour chaque jalon (croix et texte)
const TreasureMilestone = ({
  milestone,
  scrollYProgress
}: {
  milestone: TreasureMapMilestone,
  scrollYProgress: MotionValue<number>
}) => {
  const { id, position, side, icon: Icon, title, value, description } = milestone;
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  const isInView = useTransform(
    scrollYProgress,
    // Définir la plage dans laquelle le milestone devient visible
    [position - 0.1, position + 0.05],
    [0, 1]
  );

  useEffect(() => {
    const unsubscribe = isInView.onChange(value => {
      if (value >= 0.7 && !isVisible) {
        setIsVisible(true);
      }
    });

    return () => unsubscribe();
  }, [isInView, isVisible]);

  // Position verticale basée sur la position relative
  const topPosition = `${position * 100}%`;

  // Variants pour les animations
  const xVariants = {
    hidden: { opacity: 0, x: side === 'left' ? -50 : 50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  const scaleVariants = {
    hidden: { opacity: 0, scale: 0 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: "easeOut" } }
  };

  return (
    <div
      ref={ref}
      className="absolute left-1/2 transform -translate-x-1/2 w-full"
      style={{ top: topPosition }}
      suppressHydrationWarning
    >
      {/* Croix (X) de la carte au trésor */}
      <motion.div
        className="absolute left-1/2 transform -translate-x-1/2 z-10"
        initial="hidden"
        animate={isVisible ? "visible" : "hidden"}
        variants={scaleVariants}
        suppressHydrationWarning
      >
        <div className="relative">
          <svg width="40" height="40" viewBox="0 0 40 40" fill="none" suppressHydrationWarning>
            <motion.path
              d="M10,10 L30,30"
              stroke="var(--accent)"
              strokeWidth="3"
              strokeLinecap="round"
              initial={{ pathLength: 0 }}
              animate={isVisible ? { pathLength: 1 } : { pathLength: 0 }}
              transition={{ duration: 0.3, delay: 0.2 }}
              suppressHydrationWarning
            />
            <motion.path
              d="M30,10 L10,30"
              stroke="var(--accent)"
              strokeWidth="3"
              strokeLinecap="round"
              initial={{ pathLength: 0 }}
              animate={isVisible ? { pathLength: 1 } : { pathLength: 0 }}
              transition={{ duration: 0.3, delay: 0.4 }}
              suppressHydrationWarning
            />
          </svg>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white rounded-full w-6 h-6 border-2 border-accent" />
        </div>
      </motion.div>

      {/* Contenu avec icône et texte */}
      <motion.div
        className={`absolute top-0 ${side === 'left' ? 'right-[52%] text-right' : 'left-[52%]'} w-[40%] md:w-[35%]`}
        initial="hidden"
        animate={isVisible ? "visible" : "hidden"}
        variants={xVariants}
        suppressHydrationWarning
      >
        <div className="bg-white rounded-lg p-6 shadow-soft border border-primary-100 transition-all duration-300 relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary-100 to-transparent rounded-bl-full opacity-20 transition-transform duration-300 group-hover:scale-110" />

          <div className="flex items-center gap-3 mb-3">
            <div className={`flex-shrink-0 rounded-full bg-primary-50 p-2 ${side === 'left' ? 'order-last' : ''}`}>
              <Icon className="w-6 h-6 text-primary-600" />
            </div>
            <h3 className="text-lg font-bold text-gray-800">{title}</h3>
          </div>

          <div className="text-3xl font-bold text-primary-600 mb-2">{value}</div>
          <p className="text-gray-600">{description}</p>
        </div>
      </motion.div>
    </div>
  );
};

export default TreasureMapLine;
