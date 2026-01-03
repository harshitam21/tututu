
import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden mesh-gradient">
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-violet-300/20 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
        <div className="absolute top-1/3 right-1/4 w-[450px] h-[450px] bg-purple-300/20 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-1/4 left-1/3 w-[600px] h-[600px] bg-fuchsia-200/20 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-4000"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
        <h1 
          className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-gray-900 tracking-tight mb-8 animate-fade-in-up transition-all text-balance" 
          style={{ 
            animationDelay: '0.1s',
            fontFamily: "'Crimson Text', serif" 
          }}
        >
          AI Services That <span className="text-violet-900 bg-clip-text text-transparent bg-gradient-to-r from-violet-900 to-purple-800">Transform</span>
        </h1>
        
        <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto mb-10 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          From custom architectural strategy to full-scale cinematic AI deployment. 
          We bridge complexity and creativity with precision engineering.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
          <button className="bg-violet-600 text-white px-8 py-4 rounded-full text-lg font-bold shadow-xl shadow-violet-200 hover:bg-violet-700 hover:-translate-y-1 transition-all flex items-center group">
            Get in Touch
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>

      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce opacity-40">
        <div className="w-6 h-10 rounded-full border-2 border-violet-300 flex justify-center py-2">
          <div className="w-1.5 h-1.5 bg-violet-400 rounded-full"></div>
        </div>
      </div>

      <style>{`
        @keyframes blob {
          0% { transform: scale(1); }
          33% { transform: scale(1.1) translate(30px, -50px); }
          66% { transform: scale(0.9) translate(-20px, 20px); }
          100% { transform: scale(1); }
        }
        @keyframes fade-in-up {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-blob { animation: blob 10s infinite; }
        .animation-delay-2000 { animation-delay: 2s; }
        .animation-delay-4000 { animation-delay: 4s; }
        .animate-fade-in-up { animation: fade-in-up 1s forwards ease-out; }
      `}</style>
    </section>
  );
};

export default Hero;
