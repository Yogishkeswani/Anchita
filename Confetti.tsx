import React from 'react';

interface ConfettiPiece {
  id: number;
  left: number;
  animationDelay: number;
  color: string;
  shape: 'circle' | 'square' | 'triangle';
}

const Confetti: React.FC = () => {
  const colors = ['bg-purple-300', 'bg-pink-200', 'bg-white', 'bg-purple-200', 'bg-pink-100'];
  const shapes = ['circle', 'square', 'triangle'] as const;
  
  const confettiPieces: ConfettiPiece[] = Array.from({ length: 30 }, (_, i) => ({
    id: i,
    left: Math.random() * 100,
    animationDelay: Math.random() * 3,
    color: colors[Math.floor(Math.random() * colors.length)],
    shape: shapes[Math.floor(Math.random() * shapes.length)],
  }));

  const getShapeClass = (shape: string) => {
    switch (shape) {
      case 'circle':
        return 'rounded-full';
      case 'square':
        return 'rounded-sm';
      case 'triangle':
        return 'rounded-sm transform rotate-45';
      default:
        return 'rounded-full';
    }
  };

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {confettiPieces.map((piece) => (
        <div
          key={piece.id}
          className="absolute animate-confetti-fall"
          style={{
            left: `${piece.left}%`,
            animationDelay: `${piece.animationDelay}s`,
          }}
        >
          <div className={`w-3 h-3 ${piece.color} ${getShapeClass(piece.shape)} shadow-sm`}></div>
        </div>
      ))}
    </div>
  );
};

export default Confetti;