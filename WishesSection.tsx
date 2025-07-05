import React from 'react';
import { Star, Heart, Sparkles, Gift } from 'lucide-react';

interface WishesSectionProps {
  magicMode?: boolean;
}

const WishesSection: React.FC<WishesSectionProps> = ({ magicMode = false }) => {
  const wishes = [
    {
      icon: '🌟',
      title: 'Dreams Come True',
      wish: 'May every dream you\'ve ever whispered to the stars find its way to reality. You deserve all the magic this world has to offer.'
    },
    {
      icon: '💖',
      title: 'Endless Happiness',
      wish: 'May your days be filled with the same joy and laughter you bring to everyone around you. Your happiness is a gift to the world.'
    },
    {
      icon: '🌸',
      title: 'Beautiful Adventures',
      wish: 'May life surprise you with wonderful adventures, new discoveries, and moments that take your breath away.'
    },
    {
      icon: '✨',
      title: 'Love & Peace',
      wish: 'May you always feel loved, valued, and at peace with yourself. You are more amazing than you know.'
    },
    {
      icon: '🦋',
      title: 'Growth & Success',
      wish: 'May you continue to grow into the incredible person you\'re becoming, achieving everything your heart desires.'
    },
    {
      icon: '🌈',
      title: 'Bright Future',
      wish: 'May your future be as bright and beautiful as the light you bring into the lives of those who know you.'
    }
  ];

  return (
    <section className={`relative py-20 px-4 transition-all duration-1000 ${
      magicMode 
        ? 'bg-gradient-to-b from-pink-900/20 to-purple-900/20' 
        : 'bg-gradient-to-b from-white/30 to-purple-100/30'
    }`}>
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className={`text-5xl md:text-7xl font-bold mb-6 transition-all duration-1000 ${
            magicMode 
              ? 'text-transparent bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text' 
              : 'text-purple-800'
          }`}>
            Birthday Wishes
          </h2>
          <div className="flex items-center justify-center gap-4 text-2xl">
            <Star className={`w-8 h-8 ${magicMode ? 'text-yellow-400' : 'text-purple-600'} animate-twinkle`} />
            <span className={`${magicMode ? 'text-cyan-200' : 'text-purple-600'} font-medium`}>
              From My Heart to Yours, Dear Anchita
            </span>
            <Star className={`w-8 h-8 ${magicMode ? 'text-yellow-400' : 'text-purple-600'} animate-twinkle`} />
          </div>
        </div>

        {/* Wishes Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {wishes.map((wish, index) => (
            <div
              key={index}
              className={`p-6 rounded-3xl shadow-2xl backdrop-blur-sm border transition-all duration-500 hover:scale-105 hover:rotate-1 ${
                magicMode 
                  ? 'bg-purple-900/40 border-cyan-400/30 text-cyan-100' 
                  : 'bg-white/40 border-white/50 text-purple-800'
              }`}
            >
              <div className="text-center mb-4">
                <div className="text-4xl mb-3 animate-bounce">{wish.icon}</div>
                <h3 className="text-xl font-bold mb-4">{wish.title}</h3>
              </div>
              <p className="text-sm leading-relaxed text-center">{wish.wish}</p>
            </div>
          ))}
        </div>

        {/* Personal Birthday Message */}
        <div className={`p-12 rounded-3xl shadow-2xl backdrop-blur-sm border ${
          magicMode 
            ? 'bg-gradient-to-r from-purple-900/50 to-pink-900/50 border-pink-400/30' 
            : 'bg-gradient-to-r from-purple-100/50 to-pink-100/50 border-white/50'
        }`}>
          <div className="text-center">
            <div className="flex items-center justify-center gap-3 mb-8">
              <Heart className={`w-10 h-10 ${magicMode ? 'text-pink-400' : 'text-pink-500'} animate-pulse`} />
              <h3 className={`text-4xl font-bold ${magicMode ? 'text-pink-200' : 'text-purple-700'}`}>
                A Special Message for You
              </h3>
              <Heart className={`w-10 h-10 ${magicMode ? 'text-pink-400' : 'text-pink-500'} animate-pulse`} />
            </div>
            
            <div className="space-y-6 text-lg leading-relaxed">
              <p className={`${magicMode ? 'text-purple-200' : 'text-purple-600'}`}>
                Dearest Anchita, as you celebrate another year of your beautiful existence, I want you to know 
                how grateful I am that our paths crossed. You've brought so much light, laughter, and love 
                into my life that I can't imagine my world without you in it.
              </p>
              
              <p className={`${magicMode ? 'text-purple-200' : 'text-purple-600'}`}>
                Your kindness touches everyone you meet, your wisdom guides those who seek your counsel, 
                and your friendship has been one of the greatest gifts I've ever received. You have this 
                incredible ability to make people feel seen, heard, and valued - and that's a rare and 
                beautiful gift.
              </p>
              
              <p className={`${magicMode ? 'text-purple-200' : 'text-purple-600'}`}>
                On this special day, I wish for you all the happiness your heart can hold, all the love 
                you so freely give to others, and all the dreams you dare to dream. May this new year 
                of your life be filled with magical moments, beautiful surprises, and endless reasons to smile.
              </p>
            </div>

            <div className={`mt-10 p-8 rounded-3xl ${
              magicMode 
                ? 'bg-gradient-to-r from-cyan-600/30 to-purple-600/30' 
                : 'bg-gradient-to-r from-purple-200/50 to-pink-200/50'
            }`}>
              <div className="flex items-center justify-center gap-3 mb-4">
                <Sparkles className={`w-6 h-6 ${magicMode ? 'text-cyan-400' : 'text-purple-600'} animate-pulse`} />
                <Gift className={`w-6 h-6 ${magicMode ? 'text-pink-400' : 'text-pink-500'} animate-bounce`} />
                <Sparkles className={`w-6 h-6 ${magicMode ? 'text-cyan-400' : 'text-purple-600'} animate-pulse`} />
              </div>
              <p className={`text-2xl font-bold italic ${magicMode ? 'text-cyan-200' : 'text-purple-700'}`}>
                "Happy Birthday, beautiful soul! May your special day be as wonderful as you are, 
                and may the year ahead bring you everything your heart desires and more."
              </p>
              <p className={`mt-4 text-lg font-medium ${magicMode ? 'text-purple-300' : 'text-purple-600'}`}>
                With all my love, endless hugs, and warmest wishes,<br />
                <span className="text-xl font-bold">Your Forever Friend 💜✨</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WishesSection;