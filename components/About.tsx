
import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* Single Cohesive Container */}
        <div className="bg-violet-50/40 rounded-[2.5rem] border border-violet-100 overflow-hidden shadow-sm">
          <div className="grid grid-cols-1 md:grid-cols-2 items-stretch">
            
            {/* Mission Side (Left) */}
            <div className="p-8 md:p-16 lg:p-20 flex flex-col justify-center border-b md:border-b-0 md:border-r border-violet-100/50">
              <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-violet-600 mb-6 flex items-center gap-3">
                <span className="w-8 h-px bg-violet-600"></span>
                Our Mission
              </h2>
              
              <h3 className="text-4xl md:text-5xl font-black text-gray-900 mb-6 leading-tight">
                Empowering India's Next <span className="text-violet-600">Unicorns</span>.
              </h3>

              {/* Main Description - Improvised from user prompt */}
              <p className="text-xl text-gray-800 font-semibold mb-8 leading-relaxed">
                We engineer architecturally sophisticated AI ecosystems designed to <span className="text-violet-700">revolutionize industrial operations</span>, augment workforce productivity, and catalyze unprecedented growth within the competitive digital landscape.
              </p>
              
              {/* Mission Text - From the provided image/previous correct version */}
              <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
                <p>
                  Our mission is to empower <span className="font-semibold text-gray-900">Indian entrepreneurs and startups</span> with world-class business solutions, advanced technology, and strategic guidance.
                </p>
                <p className="text-violet-700 font-medium italic border-l-4 border-violet-300 pl-4 py-2 bg-violet-100/30 rounded-r-lg">
                  "We believe India's next unicorns are being built today."
                </p>
              </div>
            </div>
            
            {/* Visual Side (The Innovation Lab - Right) */}
            <div className="relative min-h-[400px] md:min-h-full overflow-hidden group">
              <img 
                src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1200" 
                alt="Enxt AI Innovation Lab" 
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
              />
              {/* Thematic Purple Gradient Overlays */}
              <div className="absolute inset-0 bg-gradient-to-r from-violet-900/10 to-transparent"></div>
              <div className="absolute inset-0 bg-violet-900/10 mix-blend-overlay"></div>
              
              {/* Artistic Badge (Bottom Right) */}
              <div className="absolute bottom-8 right-8 bg-white/10 backdrop-blur-md border border-white/20 p-4 rounded-2xl hidden lg:block">
                <p className="text-[10px] font-bold text-white uppercase tracking-widest opacity-80">Research Unit</p>
                <p className="text-white font-bold text-sm">Strategic Innovation Lab</p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
