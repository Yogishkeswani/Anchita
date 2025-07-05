import React, { useState } from 'react';
import { Camera, Heart, Smile, Star } from 'lucide-react';

interface MemoriesGalleryProps {
  magicMode?: boolean;
}

const MemoriesGallery: React.FC<MemoriesGalleryProps> = ({ magicMode = false }) => {
  const [selectedMemory, setSelectedMemory] = useState<number | null>(null);

  const memories = [
    {
      title: 'Late Night Conversations',
      description: 'Those endless talks that stretched into the early hours, where we shared our dreams, fears, and everything in between.',
      emotion: '🌙',
      details: 'Remember how we would lose track of time, talking about life, the universe, and our deepest thoughts? Those conversations shaped who we are today.'
    },
    {
      title: 'Spontaneous Adventures',
      description: 'The unplanned moments that became our most cherished memories - from random walks to impromptu celebrations.',
      emotion: '🌟',
      details: 'Every adventure with you felt like discovering a new world. Your enthusiasm and joy made even the simplest moments magical.'
    },
    {
      title: 'Quiet Comfort',
      description: 'The peaceful moments when words weren\'t needed - just being in each other\'s presence was enough.',
      emotion: '🕊️',
      details: 'In a world full of noise, you became my sanctuary. Your presence brought a peace I never knew I needed.'
    },
    {
      title: 'Shared Laughter',
      description: 'The inside jokes, silly moments, and uncontrollable laughter that bonded us in the most beautiful way.',
      emotion: '😊',
      details: 'Your laughter is music to my soul. The way your eyes light up when you smile could brighten the darkest days.'
    },
    {
      title: 'Supporting Each Other',
      description: 'Being there through ups and downs, celebrating victories and offering comfort during difficult times.',
      emotion: '🤝',
      details: 'You taught me what true friendship means - being there without judgment, offering strength when needed, and celebrating each other\'s growth.'
    },
    {
      title: 'Little Gestures',
      description: 'The small acts of kindness that spoke volumes - remembering details, thoughtful surprises, and caring touches.',
      emotion: '💝',
      details: 'It\'s the little things you do that mean the most - remembering my favorite things, checking in when I\'m quiet, and making me feel valued.'
    }
  ];

  return (
    <section className={`relative py-20 px-4 transition-all duration-1000 ${
      magicMode 
        ? 'bg-gradient-to-b from-purple-900/20 to-pink-900/20' 
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
            Treasured Memories
          </h2>
          <div className="flex items-center justify-center gap-4 text-2xl">
            <Camera className={`w-8 h-8 ${magicMode ? 'text-cyan-400' : 'text-purple-600'} animate-pulse`} />
            <span className={`${magicMode ? 'text-cyan-200' : 'text-purple-600'} font-medium`}>
              Moments That Live Forever in My Heart
            </span>
            <Camera className={`w-8 h-8 ${magicMode ? 'text-cyan-400' : 'text-purple-600'} animate-pulse`} />
          </div>
        </div>

        {/* Memories Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {memories.map((memory, index) => (
            <div
              key={index}
              onClick={() => setSelectedMemory(selectedMemory === index ? null : index)}
              className={`p-6 rounded-3xl shadow-2xl backdrop-blur-sm border cursor-pointer transition-all duration-500 hover:scale-105 ${
                magicMode 
                  ? 'bg-purple-900/40 border-cyan-400/30 text-cyan-100 hover:bg-purple-800/50' 
                  : 'bg-white/40 border-white/50 text-purple-800 hover:bg-white/60'
              } ${selectedMemory === index ? 'ring-4 ring-pink-400/50' : ''}`}
            >
              <div className="text-center mb-4">
                <div className="text-4xl mb-3">{memory.emotion}</div>
                <h3 className="text-xl font-bold mb-2">{memory.title}</h3>
              </div>
              <p className="text-sm leading-relaxed">{memory.description}</p>
              
              {selectedMemory === index && (
                <div className={`mt-4 p-4 rounded-2xl border-t transition-all duration-300 ${
                  magicMode 
                    ? 'bg-purple-800/30 border-cyan-400/20' 
                    : 'bg-purple-100/30 border-purple-200/50'
                }`}>
                  <p className="text-sm italic">{memory.details}</p>
                </div>
              )}
              
              <div className="text-center mt-4">
                <span className="text-xs opacity-70">Click to expand</span>
              </div>
            </div>
          ))}
        </div>

        {/* Memory Reflection */}
        <div className={`p-12 rounded-3xl shadow-2xl backdrop-blur-sm border ${
          magicMode 
            ? 'bg-gradient-to-r from-pink-900/50 to-purple-900/50 border-pink-400/30' 
            : 'bg-gradient-to-r from-pink-100/50 to-purple-100/50 border-white/50'
        }`}>
          <div className="text-center">
            <div className="flex items-center justify-center gap-3 mb-6">
              <Heart className={`w-8 h-8 ${magicMode ? 'text-pink-400' : 'text-pink-500'} animate-pulse`} />
              <h3 className={`text-3xl font-bold ${magicMode ? 'text-pink-200' : 'text-purple-700'}`}>
                A Collection of Beautiful Moments
              </h3>
              <Heart className={`w-8 h-8 ${magicMode ? 'text-pink-400' : 'text-pink-500'} animate-pulse`} />
            </div>
            <div className="grid md:grid-cols-2 gap-8 text-left">
              <div>
                <p className={`text-lg leading-relaxed mb-4 ${magicMode ? 'text-purple-200' : 'text-purple-600'}`}>
                  Each memory we've created together is like a precious gem in the treasure chest of my heart. 
                  From the spontaneous moments of joy to the quiet times of understanding, every experience 
                  has woven itself into the beautiful tapestry of our friendship.
                </p>
              </div>
              <div>
                <p className={`text-lg leading-relaxed ${magicMode ? 'text-purple-200' : 'text-purple-600'}`}>
                  What makes these memories so special isn't just what we did, but how you made me feel - 
                  valued, understood, and genuinely cared for. Your ability to find magic in ordinary moments 
                  has taught me to see the world through more beautiful eyes.
                </p>
              </div>
            </div>
            <div className={`mt-8 p-6 rounded-2xl ${
              magicMode ? 'bg-purple-800/30' : 'bg-white/30'
            }`}>
              <p className={`text-xl font-medium italic ${magicMode ? 'text-cyan-200' : 'text-purple-700'}`}>
                "The best memories are made with the people who matter most, and Anchita, 
                you matter more than words could ever express."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MemoriesGallery;