import React, { useState, useEffect } from 'react';
import { Sparkles, Gift, Star, Zap } from 'lucide-react';

interface BirthdayMessageProps {
  magicMode?: boolean;
}

const BirthdayMessage: React.FC<BirthdayMessageProps> = ({ magicMode = false }) => {
  const [showFullMessage, setShowFullMessage] = useState(false);
  const [showSecretMessage, setShowSecretMessage] = useState(false);

  const handleSecretClick = () => {
    setShowSecretMessage(true);
    setTimeout(() => setShowSecretMessage(false), 5000);
  };

  return (
    <div className="text-center z-10 relative max-w-6xl mx-auto px-4">
      {/* Main Birthday Title with Enhanced Effects */}
      <div className="relative mb-8">
        <h1 className={`text-6xl md:text-9xl font-bold mb-8 transition-all duration-1000 ${
          magicMode 
            ? 'text-transparent bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text drop-shadow-2xl' 
            : 'text-purple-800'
        }`}>
          <span className={`${
            magicMode 
              ? 'bg-gradient-to-r from-cyan-300 via-purple-300 to-pink-300 bg-clip-text text-transparent' 
              : 'bg-gradient-to-r from-purple-600 via-pink-500 to-purple-600 bg-clip-text text-transparent'
          }`}>
            Happy Birthday
          </span>
        </h1>
        
        {/* Floating decorative elements around title */}
        <div className="absolute -top-4 -left-4 text-4xl animate-spin-slow">⭐</div>
        <div className="absolute -top-4 -right-4 text-4xl animate-spin-slow delay-1000">✨</div>
        <div className="absolute -bottom-4 -left-4 text-3xl delay-2000">🌟</div>
        <div className="absolute -bottom-4 -right-4 text-3xl delay-3000">💫</div>
      </div>

      {/* Name with Special Effects */}
      <div className="relative mb-12">
        <h2 className={`text-5xl md:text-8xl font-bold transition-all duration-1000 ${
          magicMode 
            ? 'text-transparent bg-gradient-to-r from-pink-300 via-purple-300 to-cyan-300 bg-clip-text animate-pulse drop-shadow-2xl' 
            : 'text-purple-700 animate-pulse-slow'
        }`}>
          <span className={`${
            magicMode 
              ? 'bg-gradient-to-r from-pink-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent' 
              : 'bg-gradient-to-r from-pink-500 via-purple-500 to-pink-500 bg-clip-text text-transparent'
          }`}>
            Anchita
          </span>
        </h2>
        
        {/* Secret clickable element */}
        <div 
          className="absolute -right-8 top-1/2 transform -translate-y-1/2 text-2xl cursor-pointer hover:scale-150 transition-all duration-300 opacity-50 hover:opacity-100"
          onClick={handleSecretClick}
          title="Click for a secret surprise!"
        >
          🔮
        </div>
      </div>
      
      {/* Secret Message Popup - Fixed styling */}
      {showSecretMessage && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black/50 backdrop-blur-sm">
          <div className={`p-8 rounded-3xl shadow-2xl text-white text-center max-w-md mx-4 transform transition-all duration-500 scale-100 ${
            magicMode 
              ? 'bg-gradient-to-br from-indigo-800 via-purple-800 to-pink-800 border-2 border-cyan-400/30' 
              : 'bg-gradient-to-br from-purple-700 via-indigo-700 to-purple-800 border-2 border-purple-300/30'
          }`}>
            <div className="text-6xl mb-4">🎊</div>
            <h3 className="text-2xl font-bold mb-4">Secret Surprise!</h3>
            <p className="text-lg">You found the hidden magic! Anchita, you're absolutely amazing and this day is all about celebrating YOU! 🌟✨</p>
          </div>
        </div>
      )}
      
      <div className={`mt-8 text-xl md:text-3xl font-medium transition-all duration-1000 ${
        magicMode ? 'text-cyan-200' : 'text-purple-600'
      }`}>
        <p className="animate-fade-in-up delay-1000 flex items-center justify-center gap-2">
          <Sparkles className="w-6 h-6" />
          Wishing you a day filled with magic 
          <Sparkles className="w-6 h-6" />
        </p>
        <p className="animate-fade-in-up delay-2000 mt-4 flex items-center justify-center gap-2">
          <Star className="w-6 h-6" />
          and all your dreams come true! 
          <Star className="w-6 h-6" />
        </p>
      </div>

      {/* Enhanced Toggle Button - Single Professional Button */}
      <div className="flex justify-center mt-12">
        <button
          onClick={handleSecretClick}
          className={`group relative px-12 py-6 font-bold rounded-full shadow-2xl transform transition-all duration-500 animate-fade-in-up delay-3000 flex items-center gap-3 overflow-hidden ${
            magicMode 
              ? 'bg-gradient-to-r from-pink-500 to-purple-600 text-white hover:from-pink-400 hover:to-purple-500' 
              : 'bg-gradient-to-r from-pink-600 to-purple-600 text-white hover:from-pink-500 hover:to-purple-500'
          } hover:scale-110 hover:rotate-1 hover:shadow-3xl`}
        >
          <div className="absolute inset-0 bg-white/20 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
          <Gift className="w-6 h-6 relative z-10 group-hover:animate-spin" />
          <span className="relative z-10 group-hover:text-shadow-glow text-lg">
            Discover Special Surprise
          </span>
          <Zap className="w-6 h-6 relative z-10 group-hover:animate-pulse" />
        </button>
      </div>

      {/* Enhanced Long Personal Message */}
      {showFullMessage && (
        <div className={`mt-12 p-10 rounded-3xl shadow-2xl border-2 animate-fade-in-up transform hover:scale-105 transition-all duration-500 ${
          magicMode 
            ? 'bg-gradient-to-br from-purple-900/80 to-pink-900/80 backdrop-blur-lg border-cyan-400/30 text-cyan-100' 
            : 'bg-white/20 backdrop-blur-sm border-white/30 text-purple-800'
        }`}>
          <div className="text-lg md:text-2xl leading-relaxed space-y-6 font-medium">
            <div className="flex items-center justify-center gap-3 text-3xl font-bold mb-8">
              <Sparkles className={`w-8 h-8 ${magicMode ? 'text-pink-400' : 'text-pink-500'}`} />
              <span className={magicMode ? 'text-cyan-300' : 'text-purple-700'}>Dear Amazing Anchita</span>
              <Sparkles className={`w-8 h-8 ${magicMode ? 'text-pink-400' : 'text-pink-500'}`} />
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <p className="text-center p-4 rounded-2xl bg-gradient-to-r from-purple-500/20 to-pink-500/20">
                  🌟 On this magical day, I want you to know how incredibly grateful I am to have you in my life. 
                  You bring so much joy, laughter, and light wherever you go!
                </p>
                
                <p className="text-center p-4 rounded-2xl bg-gradient-to-r from-pink-500/20 to-purple-500/20">
                  ✨ Your kindness touches everyone around you, your smile can brighten even the cloudiest days, 
                  and your friendship means the absolute world to me.
                </p>
              </div>
              
              <div className="space-y-6">
                <p className="text-center p-4 rounded-2xl bg-gradient-to-r from-cyan-500/20 to-purple-500/20">
                  🎈 As you blow out your candles today, I hope all your wishes come true. May this new year 
                  be filled with endless adventures, beautiful surprises, and dreams fulfilled!
                </p>
                
                <p className="text-center p-4 rounded-2xl bg-gradient-to-r from-purple-500/20 to-cyan-500/20">
                  💫 Thank you for being such an incredible friend, for all the late-night conversations, 
                  spontaneous adventures, and countless ways you've made my life better!
                </p>
              </div>
            </div>
            
            <div className="text-center mt-10 p-6 rounded-3xl bg-gradient-to-r from-purple-600/30 to-pink-600/30">
              <p className="text-2xl md:text-3xl font-bold mb-4">
                🎉 Happy Birthday, Beautiful Soul! 🎂
              </p>
              <p className="text-xl italic">
                With all my love, endless hugs, and magical wishes,<br />
                <span className="font-bold text-2xl">Your Forever Best Friend 💜✨</span>
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default BirthdayMessage;