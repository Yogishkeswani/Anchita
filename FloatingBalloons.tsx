import React from 'react';

interface FloatingElement {
  id: number;
  color: string;
  left: number;
  animationDelay: number;
  animationDuration: number;
  type: 'circle' | 'diamond' | 'hexagon';
}

const FloatingBalloons: React.FC = () => {
  const elements: FloatingElement[] = [
    { id: 1, color: 'bg-gradient-to-br from-purple-300 to-purple-400', left: 10, animationDelay: 0, animationDuration: 6, type: 'circle' },
    { id: 2, color: 'bg-gradient-to-br from-pink-200 to-pink-300', left: 20, animationDelay: 1, animationDuration: 8, type: 'diamond' },
    { id: 3, color: 'bg-gradient-to-br from-purple-200 to-purple-300', left: 80, animationDelay: 2, animationDuration: 7, type: 'hexagon' },
    { id: 4, color: 'bg-gradient-to-br from-white to-purple-100', left: 85, animationDelay: 0.5, animationDuration: 9, type: 'circle' },
    { id: 5, color: 'bg-gradient-to-br from-purple-100 to-purple-200', left: 15, animationDelay: 3, animationDuration: 6.5, type: 'diamond' },
    { id: 6, color: 'bg-gradient-to-br from-pink-100 to-pink-200', left: 75, animationDelay: 1.5, animationDuration: 8.5, type: 'hexagon' },
  ];

  const getShapeClass = (type: string) => {
    switch (type) {
      case 'circle':
        return 'rounded-full';
      case 'diamond':
        return 'transform rotate-45';
      case 'hexagon':
        return 'rounded-lg transform rotate-12';
      default:
        return 'rounded-full';
    }
  };

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {elements.map((element) => (
        <div
          key={element.id}
          className="absolute animate-float opacity-60"
          style={{
            left: `${element.left}%`,
            animationDelay: `${element.animationDelay}s`,
            animationDuration: `${element.animationDuration}s`,
          }}
        >
          <div className="relative">
            <div className={`w-12 h-12 ${element.color} ${getShapeClass(element.type)} shadow-lg backdrop-blur-sm border border-white/20`}>
              <div className="absolute inset-1 bg-white/20 rounded-full"></div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FloatingBalloons;