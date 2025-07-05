import React, { useState, useEffect } from 'react';

const SurpriseReveal: React.FC = () => {
  const [currentSurprise, setCurrentSurprise] = useState(0);
  const [showSurprise, setShowSurprise] = useState(true);

  const surprises = [
    {
      icon: '🎁',
      title: 'Surprise #1',
      message: 'You are absolutely amazing, Anchita!',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: '🌟',
      title: 'Surprise #2', 
      message: 'Your smile lights up every room you enter!',
      color: 'from-cyan-500 to-purple-500'
    },
    {
      icon: '💖',
      title: 'Surprise #3',
      message: 'You bring such peace and warmth to everyone around you!',
      color: 'from-pink-500 to-red-500'
    },
    {
      icon: '✨',
      title: 'Final Surprise',
      message: 'May all your birthday wishes come true today and always!',
      color: 'from-yellow-400 to-pink-500'
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSurprise(prev => (prev + 1) % surprises.length);
    }, 4000);

    return () => clearInterval(timer);
  }, []);

  if (!showSurprise) return null;

  return (
    <div className="fixed bottom-8 left-8 z-50">
      <div className={`bg-gradient-to-r ${surprises[currentSurprise].color} p-6 rounded-2xl shadow-2xl max-w-sm transform animate-slide-in-left`}>
        <button
          onClick={() => setShowSurprise(false)}
          className="absolute top-2 right-2 text-white hover:text-gray-200 text-xl"
        >
          ×
        </button>
        
        <div className="text-center text-white">
          <div className="text-4xl mb-3">{surprises[currentSurprise].icon}</div>
          <h3 className="text-xl font-bold mb-2">{surprises[currentSurprise].title}</h3>
          <p className="text-sm leading-relaxed">{surprises[currentSurprise].message}</p>
        </div>
        
        {/* Progress dots */}
        <div className="flex justify-center mt-4 space-x-2">
          {surprises.map((_, index) => (
            <div
              key={index}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === currentSurprise ? 'bg-white' : 'bg-white/50'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SurpriseReveal;