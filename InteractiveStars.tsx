import React, { useState, useEffect } from 'react';

interface Star {
  id: number;
  x: number;
  y: number;
  clicked: boolean;
}

const InteractiveStars: React.FC = () => {
  const [stars, setStars] = useState<Star[]>([]);
  const [clickCount, setClickCount] = useState(0);

  useEffect(() => {
    const initialStars: Star[] = Array.from({ length: 20 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      clicked: false,
    }));
    setStars(initialStars);
  }, []);

  const handleStarClick = (id: number) => {
    setStars(prev => prev.map(star => 
      star.id === id ? { ...star, clicked: true } : star
    ));
    setClickCount(prev => prev + 1);
  };

  return (
    <>
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        {stars.map((star) => (
          <div
            key={star.id}
            className="absolute cursor-pointer pointer-events-auto"
            style={{
              left: `${star.x}%`,
              top: `${star.y}%`,
            }}
            onClick={() => handleStarClick(star.id)}
          >
            <div className={`text-2xl transition-all duration-500 hover:scale-150 ${
              star.clicked 
                ? 'text-yellow-400 animate-spin' 
                : 'text-purple-300 animate-twinkle hover:text-yellow-300'
            }`}>
              {star.clicked ? '🌟' : '⭐'}
            </div>
          </div>
        ))}
      </div>
      
      {/* Star Counter */}
      {clickCount > 0 && (
        <div className="fixed top-8 right-8 bg-purple-600 text-white px-4 py-2 rounded-full shadow-lg z-50">
          Stars Collected: {clickCount}/20
        </div>
      )}
      
      {/* Completion Message */}
      {clickCount === 20 && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black/50 backdrop-blur-sm pointer-events-none">
          <div className="bg-gradient-to-r from-yellow-400 to-orange-500 p-8 rounded-3xl shadow-2xl text-center animate-bounce">
            <div className="text-6xl mb-4">🌟</div>
            <h3 className="text-2xl font-bold text-white mb-2">Magical Achievement!</h3>
            <p className="text-white">You collected all the stars! Anchita, you're a star collector! ✨</p>
          </div>
        </div>
      )}
    </>
  );
};

export default InteractiveStars;