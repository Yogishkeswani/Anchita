import React from 'react';

interface Firework {
  id: number;
  left: number;
  top: number;
  animationDelay: number;
  color: string;
}

const Fireworks: React.FC = () => {
  const colors = ['text-purple-300', 'text-pink-200', 'text-white', 'text-purple-200'];
  
  const fireworks: Firework[] = Array.from({ length: 8 }, (_, i) => ({
    id: i,
    left: Math.random() * 80 + 10,
    top: Math.random() * 40 + 10,
    animationDelay: Math.random() * 4,
    color: colors[Math.floor(Math.random() * colors.length)],
  }));

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {fireworks.map((firework) => (
        <div
          key={firework.id}
          className="absolute animate-firework"
          style={{
            left: `${firework.left}%`,
            top: `${firework.top}%`,
            animationDelay: `${firework.animationDelay}s`,
          }}
        >
          <div className={`text-2xl ${firework.color}`}>✨</div>
        </div>
      ))}
    </div>
  );
};

export default Fireworks;