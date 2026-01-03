
import React, { useRef, useState } from 'react';
import { CAPABILITIES } from '../constants';
import { Capability } from '../types';

const CapabilityCard: React.FC<{ capability: Capability }> = ({ capability }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
    if (videoRef.current) {
      videoRef.current.play().catch(e => console.log("Video auto-play failed", e));
    }
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    if (videoRef.current) {
      videoRef.current.pause();
    }
  };

  return (
    <div 
      className="relative group h-[300px] rounded-2xl overflow-hidden bg-violet-950 cursor-pointer shadow-lg shadow-violet-100"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <video
        ref={videoRef}
        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${isHovered ? 'opacity-100' : 'opacity-40'}`}
        src={capability.videoUrl}
        loop
        muted
        playsInline
      />
      
      {/* Fallback/Initial Image Overlay */}
      {!isHovered && (
        <div className="absolute inset-0 bg-gradient-to-br from-violet-900/40 to-indigo-950/80"></div>
      )}

      <div className="relative h-full p-8 flex flex-col justify-end z-20">
        <h4 className="text-2xl font-bold text-white mb-2 transition-transform duration-300 group-hover:-translate-y-2">
          {capability.title}
        </h4>
        <p className={`text-violet-100 text-sm leading-relaxed transition-all duration-300 transform ${isHovered ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
          {capability.description}
        </p>
      </div>
      
      <div className={`absolute top-6 right-6 w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white transition-all duration-300 ${isHovered ? 'bg-white text-violet-600 border-white' : ''}`}>
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-plus">
          <path d="M5 12h14" /><path d="M12 5v14" />
        </svg>
      </div>
    </div>
  );
};

const Capabilities: React.FC = () => {
  return (
    <section id="capabilities" className="py-24 bg-violet-50/30">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16 text-center max-w-3xl mx-auto">
          <h2 className="text-xs font-bold uppercase tracking-widest text-violet-600 mb-4">Capabilities</h2>
          <h3 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">Built for the Next Decade.</h3>
          <p className="text-gray-600 text-lg">
            Our multi-disciplinary approach allows us to deploy intelligence across any medium, 
            from silicon chips to cinematic screens.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {CAPABILITIES.map((cap) => (
            <CapabilityCard key={cap.id} capability={cap} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Capabilities;
