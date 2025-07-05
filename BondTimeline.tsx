import React from 'react';
import { Calendar, Heart, Star, Sparkles } from 'lucide-react';

interface BondTimelineProps {
  magicMode?: boolean;
}

const BondTimeline: React.FC<BondTimelineProps> = ({ magicMode = false }) => {
  const timelineEvents = [
    {
      icon: '🌟',
      title: 'First Meeting',
      description: 'The day our paths crossed and everything changed. A simple hello that would become the foundation of something beautiful.',
      emotion: 'Wonder & Curiosity'
    },
    {
      icon: '💫',
      title: 'Growing Friendship',
      description: 'Late night conversations, shared laughter, and the realization that we understood each other in ways that felt almost magical.',
      emotion: 'Joy & Connection'
    },
    {
      icon: '🌸',
      title: 'Deeper Understanding',
      description: 'The moment I realized your favorite color was lavender, and how every small detail about you became precious to me.',
      emotion: 'Appreciation & Care'
    },
    {
      icon: '💖',
      title: 'Unspoken Feelings',
      description: 'When friendship blossomed into something deeper, yet remained beautifully respectful and patient.',
      emotion: 'Love & Respect'
    },
    {
      icon: '✨',
      title: 'Today & Forever',
      description: 'Celebrating not just your birthday, but the incredible person you are and the beautiful bond we share.',
      emotion: 'Gratitude & Hope'
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
            Our Journey Together
          </h2>
          <div className="flex items-center justify-center gap-4 text-2xl">
            <Calendar className={`w-8 h-8 ${magicMode ? 'text-pink-400' : 'text-purple-600'} animate-pulse`} />
            <span className={`${magicMode ? 'text-purple-200' : 'text-purple-600'} font-medium`}>
              Moments That Shaped Our Beautiful Bond
            </span>
            <Calendar className={`w-8 h-8 ${magicMode ? 'text-pink-400' : 'text-purple-600'} animate-pulse`} />
          </div>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className={`absolute left-1/2 transform -translate-x-1/2 w-1 h-full ${
            magicMode ? 'bg-gradient-to-b from-cyan-400 to-pink-400' : 'bg-gradient-to-b from-purple-400 to-pink-400'
          } rounded-full`}></div>

          {/* Timeline Events */}
          <div className="space-y-16">
            {timelineEvents.map((event, index) => (
              <div key={index} className={`relative flex items-center ${
                index % 2 === 0 ? 'justify-start' : 'justify-end'
              }`}>
                {/* Timeline Dot */}
                <div className={`absolute left-1/2 transform -translate-x-1/2 w-16 h-16 rounded-full flex items-center justify-center text-2xl shadow-2xl ${
                  magicMode 
                    ? 'bg-gradient-to-r from-purple-600 to-pink-600' 
                    : 'bg-gradient-to-r from-purple-500 to-pink-500'
                } animate-pulse`}>
                  {event.icon}
                </div>

                {/* Event Card */}
                <div className={`w-5/12 ${index % 2 === 0 ? 'mr-auto pr-8' : 'ml-auto pl-8'}`}>
                  <div className={`p-8 rounded-3xl shadow-2xl backdrop-blur-sm border transition-all duration-500 hover:scale-105 ${
                    magicMode 
                      ? 'bg-purple-900/40 border-cyan-400/30 text-cyan-100' 
                      : 'bg-white/40 border-white/50 text-purple-800'
                  }`}>
                    <div className="flex items-center gap-3 mb-4">
                      <Star className={`w-6 h-6 ${magicMode ? 'text-yellow-400' : 'text-yellow-500'} animate-twinkle`} />
                      <h3 className="text-2xl font-bold">{event.title}</h3>
                    </div>
                    <p className="text-lg leading-relaxed mb-4">{event.description}</p>
                    <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium ${
                      magicMode 
                        ? 'bg-pink-600/30 text-pink-200' 
                        : 'bg-purple-200/50 text-purple-700'
                    }`}>
                      <Heart className="w-4 h-4 animate-pulse" />
                      {event.emotion}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Reflection Section */}
        <div className={`mt-20 p-12 rounded-3xl text-center shadow-2xl backdrop-blur-sm border ${
          magicMode 
            ? 'bg-gradient-to-r from-indigo-900/50 to-purple-900/50 border-purple-400/30' 
            : 'bg-gradient-to-r from-purple-100/50 to-pink-100/50 border-white/50'
        }`}>
          <div className="flex items-center justify-center gap-3 mb-6">
            <Sparkles className={`w-8 h-8 ${magicMode ? 'text-cyan-400' : 'text-purple-600'} animate-pulse`} />
            <h3 className={`text-3xl font-bold ${magicMode ? 'text-cyan-200' : 'text-purple-700'}`}>
              Looking Back with Gratitude
            </h3>
            <Sparkles className={`w-8 h-8 ${magicMode ? 'text-cyan-400' : 'text-purple-600'} animate-pulse`} />
          </div>
          <p className={`text-xl leading-relaxed ${magicMode ? 'text-purple-200' : 'text-purple-600'}`}>
            Every moment in our journey has been a treasure. From the first spark of friendship to the deep 
            connection we share today, each step has brought us closer and made our bond stronger. Thank you 
            for being such an incredible part of my story, Anchita.
          </p>
        </div>
      </div>
    </section>
  );
};

export default BondTimeline;