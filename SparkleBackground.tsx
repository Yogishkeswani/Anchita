import React from 'react';

interface Sparkle {
  id: number;
  left: number;
  animationDelay: number;
  size: number;
}

interface SparkleBackgroundProps {
  magicMode?: boolean;
}

const SparkleBackground: React.FC<SparkleBackgroundProps> = ({ magicMode = false }) => {
  const sparkles: Sparkle[] = Array.from({ length: magicMode ? 80 : 50 }, (_, i) => ({
    id: i,
    left: Math.random() * 100,
    animationDelay: Math.random() * 3,
    size: Math.random() * (magicMode ? 6 : 4) + 2,
  }));

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {sparkles.map((sparkle) => (
        <div
          key={sparkle.id}
          className={`absolute opacity-0 ${
            magicMode ? 'animate-sparkle-magic' : 'animate-sparkle'
          }`}
          style={{
            left: `${sparkle.left}%`,
            animationDelay: `${sparkle.animationDelay}s`,
            width: `${sparkle.size}px`,
            height: `${sparkle.size}px`,
          }}
        >
          <div className={`w-full h-full rounded-full shadow-lg ${
            magicMode 
              ? 'bg-gradient-to-r from-cyan-300 to-purple-300 shadow-cyan-200/50' 
              : 'bg-white shadow-purple-200/50'
          }`}></div>
        </div>
      ))}
    </div>
  );
};

export default SparkleBackground;