
import React from 'react';
import { PROCESS_STEPS } from '../constants';

const Process: React.FC = () => {
  // Define a set of purple shades for each step
  const stepColors = ['bg-violet-400', 'bg-violet-500', 'bg-violet-600', 'bg-violet-700'];
  const textColors = ['text-violet-600', 'text-violet-700', 'text-violet-800', 'text-violet-900'];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-20">
          <h2 className="text-xs font-bold uppercase tracking-widest text-violet-600 mb-4">Our Process</h2>
          <h3 className="text-4xl md:text-5xl font-black text-gray-900">How we engineer excellence.</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 relative">
          {/* Connecting Line (Desktop) */}
          <div className="hidden lg:block absolute top-10 left-0 w-full h-px bg-violet-50 z-0"></div>
          
          {PROCESS_STEPS.map((step, idx) => (
            <div key={idx} className="relative z-10 group">
              <div className={`w-20 h-20 rounded-2xl bg-white border border-violet-100 shadow-sm flex items-center justify-center text-3xl font-black ${textColors[idx]} mb-8 transition-all duration-300 group-hover:${stepColors[idx]} group-hover:text-white group-hover:shadow-xl group-hover:shadow-violet-200 group-hover:-translate-y-2`}>
                {step.number}
              </div>
              <h4 className={`text-xl font-bold text-gray-900 mb-4 group-hover:${textColors[idx]} transition-colors`}>{step.title}</h4>
              <p className="text-gray-600 leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
