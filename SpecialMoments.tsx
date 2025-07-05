import React from 'react';
import { Sparkles, Heart, Star, Gift } from 'lucide-react';

interface SpecialMomentsProps {
  magicMode?: boolean;
}

const SpecialMoments: React.FC<SpecialMomentsProps> = ({ magicMode = false }) => {
  const specialMoments = [
    {
      title: 'The Day I Learned Your Favorite Color',
      icon: '💜',
      story: 'When you mentioned that lavender was your favorite color, something clicked. It wasn\'t just a color preference - it was a window into your soul. Soft, calming, beautiful, and unique - just like you. From that moment, every lavender sunset reminded me of your gentle spirit.',
      significance: 'This taught me that the smallest details about someone you care for become the most precious treasures.'
    },
    {
      title: 'Our First Deep Conversation',
      icon: '🌙',
      story: 'That night when we talked until dawn, sharing our dreams, fears, and everything in between. Time seemed to stop as we discovered how deeply we understood each other. It was the moment I realized our connection was something truly special.',
      significance: 'This was when friendship transformed into something deeper - a bond that transcends ordinary relationships.'
    },
    {
      title: 'When You Comforted Me',
      icon: '🤗',
      story: 'During one of my difficult moments, you didn\'t try to fix everything or offer empty words. You simply sat with me, your presence speaking louder than any advice could. Your empathy and understanding showed me what true compassion looks like.',
      significance: 'You taught me that sometimes the greatest gift is simply being there for someone.'
    },
    {
      title: 'Your Infectious Laughter',
      icon: '😊',
      story: 'The first time I made you laugh - really laugh - your whole face lit up and your eyes sparkled with pure joy. That sound became my favorite melody, and making you smile became one of my greatest pleasures in life.',
      significance: 'Your happiness became intertwined with mine, showing me how love makes another person\'s joy your own.'
    }
  ];

  return (
    <section className={`relative py-20 px-4 transition-all duration-1000 ${
      magicMode 
        ? 'bg-gradient-to-b from-indigo-900/20 to-purple-900/20' 
        : 'bg-gradient-to-b from-purple-100/30 to-white/30'
    }`}>
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className={`text-5xl md:text-7xl font-bold mb-6 transition-all duration-1000 ${
            magicMode 
              ? 'text-transparent bg-gradient-to-r from-pink-400 via-purple-400 to-cyan-400 bg-clip-text' 
              : 'text-purple-800'
          }`}>
            Special Moments
          </h2>
          <div className="flex items-center justify-center gap-4 text-2xl">
            <Gift className={`w-8 h-8 ${magicMode ? 'text-pink-400' : 'text-purple-600'} animate-pulse`} />
            <span className={`${magicMode ? 'text-purple-200' : 'text-purple-600'} font-medium`}>
              Defining Moments That Shaped Our Bond
            </span>
            <Gift className={`w-8 h-8 ${magicMode ? 'text-pink-400' : 'text-purple-600'} animate-pulse`} />
          </div>
        </div>

        {/* Special Moments Cards */}
        <div className="space-y-12">
          {specialMoments.map((moment, index) => (
            <div key={index} className={`relative ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} flex flex-col md:flex gap-8 items-center`}>
              {/* Moment Card */}
              <div className={`flex-1 p-8 rounded-3xl shadow-2xl backdrop-blur-sm border transition-all duration-500 hover:scale-105 ${
                magicMode 
                  ? 'bg-purple-900/40 border-cyan-400/30 text-cyan-100' 
                  : 'bg-white/40 border-white/50 text-purple-800'
              }`}>
                <div className="flex items-center gap-4 mb-6">
                  <div className="text-4xl">{moment.icon}</div>
                  <h3 className="text-2xl font-bold">{moment.title}</h3>
                </div>
                <p className="text-lg leading-relaxed mb-6">{moment.story}</p>
                <div className={`p-4 rounded-2xl border-l-4 ${
                  magicMode 
                    ? 'bg-purple-800/30 border-pink-400' 
                    : 'bg-purple-100/30 border-purple-400'
                }`}>
                  <p className="text-sm italic font-medium">{moment.significance}</p>
                </div>
              </div>

              {/* Decorative Element */}
              <div className="flex-shrink-0 w-32 h-32 flex items-center justify-center">
                <div className={`w-24 h-24 rounded-full flex items-center justify-center text-3xl shadow-2xl animate-pulse ${
                  magicMode 
                    ? 'bg-gradient-to-r from-cyan-500 to-purple-600' 
                    : 'bg-gradient-to-r from-purple-500 to-pink-500'
                }`}>
                  {moment.icon}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Reflection on Special Moments */}
        <div className={`mt-20 p-12 rounded-3xl text-center shadow-2xl backdrop-blur-sm border ${
          magicMode 
            ? 'bg-gradient-to-r from-purple-900/50 to-pink-900/50 border-purple-400/30' 
            : 'bg-gradient-to-r from-purple-100/50 to-pink-100/50 border-white/50'
        }`}>
          <div className="flex items-center justify-center gap-3 mb-8">
            <Sparkles className={`w-8 h-8 ${magicMode ? 'text-cyan-400' : 'text-purple-600'} animate-pulse`} />
            <h3 className={`text-3xl font-bold ${magicMode ? 'text-cyan-200' : 'text-purple-700'}`}>
              The Magic in Ordinary Moments
            </h3>
            <Sparkles className={`w-8 h-8 ${magicMode ? 'text-cyan-400' : 'text-purple-600'} animate-pulse`} />
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 text-left mb-8">
            <div>
              <p className={`text-lg leading-relaxed ${magicMode ? 'text-purple-200' : 'text-purple-600'}`}>
                What makes these moments truly special isn't their grandeur, but their authenticity. 
                They're the quiet revelations, the gentle discoveries, and the simple exchanges that 
                revealed the depth of our connection. Each one was a stepping stone that led us to 
                where we are today.
              </p>
            </div>
            <div>
              <p className={`text-lg leading-relaxed ${magicMode ? 'text-purple-200' : 'text-purple-600'}`}>
                In a world that often rushes past the small things, you taught me to pause and 
                appreciate the beauty in everyday interactions. Your ability to find meaning in 
                simple moments has enriched my life in ways I'm still discovering.
              </p>
            </div>
          </div>

          <div className={`p-8 rounded-3xl ${
            magicMode 
              ? 'bg-gradient-to-r from-pink-600/30 to-purple-600/30' 
              : 'bg-gradient-to-r from-purple-200/50 to-pink-200/50'
          }`}>
            <div className="flex items-center justify-center gap-3 mb-4">
              <Heart className={`w-6 h-6 ${magicMode ? 'text-pink-400' : 'text-pink-500'} animate-pulse`} />
              <Star className={`w-6 h-6 ${magicMode ? 'text-yellow-400' : 'text-yellow-500'} animate-twinkle`} />
              <Heart className={`w-6 h-6 ${magicMode ? 'text-pink-400' : 'text-pink-500'} animate-pulse`} />
            </div>
            <p className={`text-xl font-bold italic ${magicMode ? 'text-cyan-200' : 'text-purple-700'}`}>
              "These special moments aren't just memories - they're the foundation of something beautiful, 
              the proof that some connections are truly meant to be treasured forever."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SpecialMoments;