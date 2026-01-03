
import React, { useState } from 'react';
import { CLIENTS } from '../constants';

const Clients: React.FC = () => {
  const [activeClient, setActiveClient] = useState<string | null>(null);

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16 text-center">
          <h2 className="text-xs font-bold uppercase tracking-widest text-purple-600 mb-4">Clients & Projects</h2>
          <h3 className="text-4xl md:text-5xl font-black text-gray-900">Trusted by Global Visionaries.</h3>
        </div>

        <div className="relative">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 border-t border-gray-100">
            {CLIENTS.map((client) => (
              <div 
                key={client.id}
                onMouseEnter={() => setActiveClient(client.id)}
                onMouseLeave={() => setActiveClient(null)}
                className={`relative h-40 flex flex-col items-center justify-center border-b border-r border-gray-100 group transition-all duration-500 cursor-pointer overflow-hidden ${activeClient === client.id ? 'bg-purple-600 text-white' : 'hover:bg-gray-50'}`}
              >
                {/* Visual Reveal Background on Hover */}
                <div className={`absolute inset-0 transition-opacity duration-700 opacity-0 pointer-events-none ${activeClient === client.id ? 'opacity-10' : ''}`}>
                  <img src={`https://picsum.photos/seed/${client.name}/400/300`} className="w-full h-full object-cover grayscale" />
                </div>
                
                <div className="relative z-10 text-3xl font-black opacity-30 group-hover:opacity-100 transition-opacity mb-2">
                  {client.logo}
                </div>
                <div className={`relative z-10 text-sm font-bold uppercase tracking-widest ${activeClient === client.id ? 'text-white' : 'text-gray-400'}`}>
                  {client.name}
                </div>
                <div className={`relative z-10 text-[10px] mt-1 tracking-tighter transition-all duration-300 transform ${activeClient === client.id ? 'translate-y-0 opacity-100' : 'translate-y-2 opacity-0'}`}>
                  {client.industry} Specialist
                </div>
              </div>
            ))}
          </div>

          {/* Interactive Showcase Box for Desktop */}
          {activeClient && (
            <div className="hidden lg:block absolute -top-12 -right-12 w-64 h-64 pointer-events-none transition-all duration-500 animate-fade-in">
               <div className="w-full h-full rounded-2xl bg-purple-600/10 backdrop-blur-3xl border border-white/20 p-6 flex flex-col justify-end">
                  <p className="text-purple-600 font-black text-4xl mb-2">0{CLIENTS.findIndex(c => c.id === activeClient) + 1}</p>
                  <p className="text-gray-900 font-bold uppercase text-xs tracking-widest">Selected Project Highlight</p>
               </div>
            </div>
          )}
        </div>
      </div>
      
      <style>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translate(10px, -10px); }
          to { opacity: 1; transform: translate(0, 0); }
        }
        .animate-fade-in { animation: fade-in 0.4s forwards ease-out; }
      `}</style>
    </section>
  );
};

export default Clients;
