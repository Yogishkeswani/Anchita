import React from 'react';
import { Heart, Sparkles, Star } from 'lucide-react';

interface StorySectionProps {
  magicMode?: boolean;
}

const StorySection: React.FC<StorySectionProps> = ({ magicMode = false }) => {
  return (
    <section className={`relative py-20 px-4 transition-all duration-1000 ${
      magicMode 
        ? 'bg-gradient-to-b from-purple-900/20 to-indigo-900/20' 
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
            Our Beautiful Story
          </h2>
          <div className="flex items-center justify-center gap-4 text-2xl">
            <Sparkles className={`w-8 h-8 ${magicMode ? 'text-cyan-400' : 'text-purple-600'} animate-pulse`} />
            <span className={`${magicMode ? 'text-cyan-200' : 'text-purple-600'} font-medium`}>
              A Journey of Friendship, Trust & Love
            </span>
            <Sparkles className={`w-8 h-8 ${magicMode ? 'text-cyan-400' : 'text-purple-600'} animate-pulse`} />
          </div>
        </div>

        {/* Story Content */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Column - Main Story */}
          <div className="space-y-8">
            <div className={`p-8 rounded-3xl shadow-2xl backdrop-blur-sm border transition-all duration-500 hover:scale-105 ${
              magicMode 
                ? 'bg-purple-900/40 border-cyan-400/30 text-cyan-100' 
                : 'bg-white/40 border-white/50 text-purple-800'
            }`}>
              <div className="flex items-center gap-3 mb-6">
                <Heart className={`w-8 h-8 ${magicMode ? 'text-pink-400' : 'text-pink-500'} animate-pulse`} />
                <h3 className="text-2xl font-bold">The Beginning of Something Beautiful</h3>
              </div>
              <p className="text-lg leading-relaxed">
                From the very first moment we met, there was something magical about our connection. 
                You brought a warmth and light into my life that I never knew I was missing. Your 
                laughter became my favorite sound, and your smile became the brightest part of my days.
              </p>
            </div>

            <div className={`p-8 rounded-3xl shadow-2xl backdrop-blur-sm border transition-all duration-500 hover:scale-105 ${
              magicMode 
                ? 'bg-indigo-900/40 border-purple-400/30 text-purple-100' 
                : 'bg-white/40 border-white/50 text-purple-800'
            }`}>
              <div className="flex items-center gap-3 mb-6">
                <Star className={`w-8 h-8 ${magicMode ? 'text-yellow-400' : 'text-yellow-500'} animate-twinkle`} />
                <h3 className="text-2xl font-bold">Growing Closer Every Day</h3>
              </div>
              <p className="text-lg leading-relaxed">
                As days turned into weeks and weeks into months, our bond grew stronger. Every conversation 
                revealed new depths to your beautiful soul. Your kindness, your wisdom, your incredible 
                ability to see the good in everything - these qualities made me realize how truly special you are.
              </p>
            </div>
          </div>

          {/* Right Column - Emotional Journey */}
          <div className="space-y-8">
            <div className={`p-8 rounded-3xl shadow-2xl backdrop-blur-sm border transition-all duration-500 hover:scale-105 ${
              magicMode 
                ? 'bg-pink-900/40 border-pink-400/30 text-pink-100' 
                : 'bg-white/40 border-white/50 text-purple-800'
            }`}>
              <div className="flex items-center gap-3 mb-6">
                <Sparkles className={`w-8 h-8 ${magicMode ? 'text-cyan-400' : 'text-purple-500'} animate-pulse`} />
                <h3 className="text-2xl font-bold">The Depth of Our Connection</h3>
              </div>
              <p className="text-lg leading-relaxed">
                What we share goes beyond ordinary friendship. It's built on trust, understanding, and 
                countless moments of pure joy. You've seen me at my best and my worst, and through it all, 
                you've remained a constant source of support and love.
              </p>
            </div>

            <div className={`p-8 rounded-3xl shadow-2xl backdrop-blur-sm border transition-all duration-500 hover:scale-105 ${
              magicMode 
                ? 'bg-purple-900/40 border-cyan-400/30 text-cyan-100' 
                : 'bg-white/40 border-white/50 text-purple-800'
            }`}>
              <div className="flex items-center gap-3 mb-6">
                <Heart className={`w-8 h-8 ${magicMode ? 'text-pink-400' : 'text-pink-500'} animate-pulse`} />
                <h3 className="text-2xl font-bold">A Love That Transcends Words</h3>
              </div>
              <p className="text-lg leading-relaxed">
                While I may carry feelings that run deeper than friendship, what matters most is your 
                happiness and comfort. The love I have for you is patient, respectful, and unconditional. 
                It's a love that celebrates who you are and supports your dreams.
              </p>
            </div>
          </div>
        </div>

        {/* Quote Section */}
        <div className={`mt-16 p-12 rounded-3xl text-center shadow-2xl backdrop-blur-sm border ${
          magicMode 
            ? 'bg-gradient-to-r from-purple-900/50 to-pink-900/50 border-cyan-400/30' 
            : 'bg-gradient-to-r from-purple-100/50 to-pink-100/50 border-white/50'
        }`}>
          <blockquote className={`text-2xl md:text-3xl font-bold italic mb-6 ${
            magicMode ? 'text-cyan-200' : 'text-purple-700'
          }`}>
            "In you, I found not just a friend, but a piece of my soul that I never knew was missing. 
            Your presence in my life is a gift I treasure every single day."
          </blockquote>
          <div className="flex items-center justify-center gap-2">
            <Heart className={`w-6 h-6 ${magicMode ? 'text-pink-400' : 'text-pink-500'} animate-pulse`} />
            <span className={`text-lg font-medium ${magicMode ? 'text-purple-300' : 'text-purple-600'}`}>
              With all my love
            </span>
            <Heart className={`w-6 h-6 ${magicMode ? 'text-pink-400' : 'text-pink-500'} animate-pulse`} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default StorySection;