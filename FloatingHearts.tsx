import React from 'react';

interface GeometricShape {
  id: number;
  left: number;
  animationDelay: number;
  size: number;
  color: string;
  shape: 'star' | 'diamond' | 'circle' | 'triangle';
}

const FloatingHearts: React.FC = () => {
  const colors = ['text-purple-300', 'text-pink-300', 'text-white', 'text-purple-200'];
  const shapes = ['star', 'diamond', 'circle', 'triangle'] as const;
  
  const geometricShapes: GeometricShape[] = Array.from({ length: 12 }, (_, i) => ({
    id: i,
    left: Math.random() * 100,
    animationDelay: Math.random() * 5,
    size: Math.random() * 8 + 8,
    color: colors[Math.floor(Math.random() * colors.length)],
    shape: shapes[Math.floor(Math.random() * shapes.length)],
  }));

  const getShapeElement = (shape: string, color: string, size: number) => {
    const baseClass = `inline-block opacity-70`;
    
    switch (shape) {
      case 'star':
        return <div className={`${color} ${baseClass}`} style={{ fontSize: `${size}px` }}>✦</div>;
      case 'diamond':
        return <div className={`w-3 h-3 ${color.replace('text-', 'bg-')} transform rotate-45 ${baseClass}`}></div>;
      case 'circle':
        return <div className={`w-2 h-2 ${color.replace('text-', 'bg-')} rounded-full ${baseClass}`}></div>;
      case 'triangle':
        return <div className={`${color} ${baseClass}`} style={{ fontSize: `${size}px` }}>▲</div>;
      default:
        return <div className={`${color} ${baseClass}`} style={{ fontSize: `${size}px` }}>✦</div>;
    }
  };

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {geometricShapes.map((shape) => (
        <div
          key={shape.id}
          className="absolute animate-float-hearts"
          style={{
            left: `${shape.left}%`,
            animationDelay: `${shape.animationDelay}s`,
          }}
        >
          {getShapeElement(shape.shape, shape.color, shape.size)}
        </div>
      ))}
    </div>
  );
};

export default FloatingHearts;