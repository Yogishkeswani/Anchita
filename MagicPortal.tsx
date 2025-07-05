import React, { useState } from 'react';
import { Zap, Sparkles } from 'lucide-react';

interface MagicPortalProps {
  onMagicToggle: (magic: boolean) => void;
  magicMode: boolean;
}

const MagicPortal: React.FC<MagicPortalProps> = ({ onMagicToggle, magicMode }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="fixed top-8 left-8 z-50">
      {/* Enhanced Mode Indicator - Always Visible */}
      <div className="absolute -right-24 top-1/2 transform -translate-y-1/2 flex items-center">
        <div className={`px-6 py-3 rounded-full backdrop-blur-sm border-2 transition-all duration-500 hover:scale-110 ${
          magicMode
            ? 'bg-gradient-to-r from-cyan-500/20 to-purple-600/20 border-cyan-400/50 text-cyan-200'
            : 'bg-white/30 border-white/50 text-purple-700'
        }`}>
          <div className="flex items-center gap-3">
            <Sparkles className="w-5 h-5" />
            <span className="text-sm font-bold">
              {magicMode ? 'Magic Mode ON' : 'Magic Mode OFF'}
            </span>
          </div>
        </div>
        <div className={`text-2xl ml-3 transition-all duration-300 ${
          magicMode ? 'text-cyan-400' : 'text-purple-600'
        }`}>
          ←
        </div>
      </div>

      <button
        onClick={() => onMagicToggle(!magicMode)}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className={`relative w-20 h-20 rounded-full shadow-2xl transform transition-all duration-500 hover:scale-125 ${
          magicMode 
            ? 'bg-gradient-to-r from-cyan-500 via-purple-600 to-pink-500' 
            : 'bg-gradient-to-r from-purple-500 to-pink-500'
        }`}
      >
        <div className="absolute inset-2 bg-white/20 rounded-full backdrop-blur-sm flex items-center justify-center">
          {magicMode ? (
            <Zap className="w-8 h-8 text-cyan-200" />
          ) : (
            <Sparkles className="w-8 h-8 text-white" />
          )}
        </div>
        
        {/* Magical particles around the portal */}
        <div className="absolute -inset-4 pointer-events-none">
          <div className={`absolute top-0 left-1/2 w-2 h-2 bg-purple-400 rounded-full transition-opacity duration-300 ${isHovered ? 'opacity-100 animate-ping' : 'opacity-0'}`}></div>
          <div className={`absolute bottom-0 right-0 w-2 h-2 bg-pink-400 rounded-full transition-opacity duration-300 delay-300 ${isHovered ? 'opacity-100 animate-ping' : 'opacity-0'}`}></div>
          <div className={`absolute left-0 top-1/2 w-2 h-2 bg-cyan-400 rounded-full transition-opacity duration-300 delay-700 ${isHovered ? 'opacity-100 animate-ping' : 'opacity-0'}`}></div>
        </div>
      </button>
      
      {/* Enhanced Tooltip */}
      {isHovered && (
        <div className={`absolute top-24 left-0 px-4 py-3 rounded-xl text-sm whitespace-nowrap shadow-2xl backdrop-blur-sm border transition-all duration-300 ${
          magicMode 
            ? 'bg-purple-900/80 text-cyan-200 border-cyan-400/30' 
            : 'bg-white/80 text-purple-700 border-white/50'
        }`}>
          <div className="flex items-center gap-2">
            {magicMode ? (
              <>
                <Zap className="w-4 h-4" />
                <span className="font-medium">Exit Magic Mode</span>
              </>
            ) : (
              <>
                <Sparkles className="w-4 h-4" />
                <span className="font-medium">Enter Magic Mode</span>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default MagicPortal;