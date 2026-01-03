
import React from 'react';
import { INSIGHTS } from '../constants';

const Insights: React.FC = () => {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <h2 className="text-xs font-bold uppercase tracking-widest text-purple-600 mb-4">Insights</h2>
            <h3 className="text-4xl md:text-5xl font-black text-gray-900">Latest from our lab.</h3>
          </div>
          <button className="text-purple-600 font-bold hover:translate-x-1 transition-transform inline-flex items-center">
            View All Posts
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-2">
              <path d="M5 12h14" /><path d="m12 5 7 7-7 7" />
            </svg>
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 auto-rows-[250px] md:auto-rows-[300px]">
          {/* Main Article (Featured) */}
          <div className="md:col-span-8 md:row-span-2 group relative rounded-3xl overflow-hidden bg-gray-200">
            <img 
              src={INSIGHTS[0].thumbnail} 
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
              alt={INSIGHTS[0].title}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
            <div className="absolute bottom-0 left-0 p-8 md:p-12 w-full">
              <span className="inline-block px-3 py-1 rounded-full bg-purple-600 text-white text-xs font-bold mb-4">
                {INSIGHTS[0].category}
              </span>
              <h4 className="text-3xl md:text-4xl font-black text-white mb-4 group-hover:text-purple-300 transition-colors">
                {INSIGHTS[0].title}
              </h4>
              <a href={INSIGHTS[0].link} className="text-white/80 font-bold flex items-center hover:text-white transition-colors">
                Read Full Story
                <span className="ml-2 w-6 h-[2px] bg-purple-500"></span>
              </a>
            </div>
          </div>

          {/* Secondary Article */}
          <div className="md:col-span-4 md:row-span-1 group relative rounded-3xl overflow-hidden bg-gray-200">
            <img 
              src={INSIGHTS[1].thumbnail} 
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
              alt={INSIGHTS[1].title}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
            <div className="absolute bottom-0 left-0 p-6 w-full">
              <span className="text-purple-400 text-xs font-bold mb-2 block">{INSIGHTS[1].category}</span>
              <h4 className="text-xl font-bold text-white group-hover:text-purple-300 transition-colors">
                {INSIGHTS[1].title}
              </h4>
            </div>
          </div>

          {/* Tertiary Article */}
          <div className="md:col-span-4 md:row-span-1 group relative rounded-3xl overflow-hidden bg-gray-200">
            <img 
              src={INSIGHTS[2].thumbnail} 
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
              alt={INSIGHTS[2].title}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
            <div className="absolute bottom-0 left-0 p-6 w-full">
              <span className="text-purple-400 text-xs font-bold mb-2 block">{INSIGHTS[2].category}</span>
              <h4 className="text-xl font-bold text-white group-hover:text-purple-300 transition-colors">
                {INSIGHTS[2].title}
              </h4>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Insights;
