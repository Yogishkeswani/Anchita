import React, { useState, useEffect } from 'react';
import SparkleBackground from './components/SparkleBackground';
import FloatingBalloons from './components/FloatingBalloons';
import Confetti from './components/Confetti';
import Fireworks from './components/Fireworks';
import BirthdayMessage from './components/BirthdayMessage';
import MagicPortal from './components/MagicPortal';
import FloatingHearts from './components/FloatingHearts';
import InteractiveStars from './components/InteractiveStars';
import SurpriseReveal from './components/SurpriseReveal';
import StorySection from './components/StorySection';
import MemoriesGallery from './components/MemoriesGallery';
import WishesSection from './components/WishesSection';
import BondTimeline from './components/BondTimeline';
import SpecialMoments from './components/SpecialMoments';

function App() {
  const [showSurprise, setShowSurprise] = useState(false);
  const [magicMode, setMagicMode] = useState(false);

  useEffect(() => {
    // Auto-trigger surprise after 3 seconds
    const timer = setTimeout(() => {
      setShowSurprise(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`min-h-screen transition-all duration-1000 overflow-x-hidden relative ${
      magicMode 
        ? 'bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900' 
        : 'bg-gradient-to-br from-purple-100 via-lavender-50 to-purple-200'
    }`}>
      {/* Dynamic background overlay */}
      <div className={`fixed inset-0 transition-all duration-1000 ${
        magicMode 
          ? 'bg-gradient-to-t from-purple-900/50 via-transparent to-indigo-900/30' 
          : 'bg-gradient-to-t from-purple-50/30 via-transparent to-purple-100/20'
      }`}></div>
      
      {/* Animated background elements */}
      <SparkleBackground magicMode={magicMode} />
      <FloatingBalloons />
      <Confetti />
      <Fireworks />
      <FloatingHearts />
      <InteractiveStars />
      
      {/* Magic Portal */}
      <MagicPortal onMagicToggle={setMagicMode} magicMode={magicMode} />
      
      {/* Hero Section */}
      <section className="relative z-10 min-h-screen flex flex-col items-center justify-center px-4">
        <BirthdayMessage magicMode={magicMode} />
        
        {/* Surprise Reveal Component */}
        {showSurprise && <SurpriseReveal />}
        
        {/* Enhanced magical elements with interactions - More Professional */}
        <div className="absolute top-10 left-10 text-4xl delay-1000 cursor-pointer hover:scale-125 transition-transform duration-300 opacity-60" 
             onClick={() => setMagicMode(!magicMode)}>✨</div>
        <div className="absolute top-20 right-10 text-3xl delay-2000 cursor-pointer hover:scale-125 transition-transform duration-300 opacity-60">⭐</div>
        <div className="absolute bottom-20 left-20 text-3xl delay-3000 cursor-pointer hover:scale-125 transition-transform duration-300 opacity-60">🌟</div>
        <div className="absolute bottom-10 right-20 text-4xl delay-4000 cursor-pointer hover:scale-125 transition-transform duration-300 opacity-60">✦</div>
        
        {/* Enhanced scroll indicator - Fixed styling */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <div className={`text-center transition-all duration-1000 ${magicMode ? 'text-cyan-200' : 'text-purple-600'}`}>
            <div className="text-3xl mb-3 animate-pulse">✨</div>
            <div className="px-8 py-4 rounded-2xl backdrop-blur-md border-2 transition-all duration-500 hover:scale-110 hover:shadow-2xl cursor-pointer"
                 style={{ 
                   background: 'linear-gradient(135deg, #FF6A88, #FFB86F)',
                   borderColor: 'rgba(255, 255, 255, 0.3)'
                 }}>
              <p className="text-xl font-bold mb-2 text-white">Discover Our Journey</p>
              <p className="text-sm opacity-90 font-medium text-white">Scroll to explore magical moments</p>
            </div>
          </div>
        </div>
      </section>

      {/* Story Sections */}
      <StorySection magicMode={magicMode} />
      <BondTimeline magicMode={magicMode} />
      <MemoriesGallery magicMode={magicMode} />
      <SpecialMoments magicMode={magicMode} />
      <WishesSection magicMode={magicMode} />
      
      {/* Enhanced bottom decorative elements */}
      <div className={`relative w-full h-32 transition-all duration-1000 ${
        magicMode 
          ? 'bg-gradient-to-t from-purple-900/40 to-transparent' 
          : 'bg-gradient-to-t from-purple-200/20 to-transparent'
      }`}></div>
      
      {/* Professional floating action button */}
      <button
        onClick={() => setShowSurprise(!showSurprise)}
        className="fixed bottom-8 right-8 w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full shadow-2xl hover:shadow-purple-500/50 transform hover:scale-110 transition-all duration-300 flex items-center justify-center text-2xl z-50"
      >
        🎁
      </button>
    </div>
  );
}

export default App;