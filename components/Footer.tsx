
import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#1e1b4b] text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          <div className="col-span-1 lg:col-span-1">
            <div className="flex items-center cursor-pointer mb-8">
              <span className="text-white font-extrabold text-2xl tracking-tighter">
                Enxt<span className="text-violet-400">AI</span>
              </span>
            </div>
            <p className="text-violet-200/60 text-sm leading-relaxed mb-6">
              Empowering the next generation of digital enterprise through custom AI architecture and cinematic storytelling.
            </p>
            <div className="flex gap-4">
              {['Twitter', 'LinkedIn', 'Github'].map((social) => (
                <a key={social} href="#" className="w-10 h-10 rounded-full border border-violet-800 flex items-center justify-center hover:bg-violet-600 hover:border-violet-600 transition-all text-xs font-bold uppercase tracking-widest">
                  {social[0]}
                </a>
              ))}
            </div>
          </div>
          
          <div>
            <h4 className="text-sm font-bold uppercase tracking-widest text-violet-400 mb-8">Navigation</h4>
            <ul className="space-y-4 text-violet-200/60 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">Home</a></li>
              <li><a href="#about" className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="#capabilities" className="hover:text-white transition-colors">Services</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Our Process</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-sm font-bold uppercase tracking-widest text-violet-400 mb-8">Services</h4>
            <ul className="space-y-4 text-violet-200/60 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">Generative AI Production</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Enterprise LLM Tuning</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Predictive Modeling</a></li>
              <li><a href="#" className="hover:text-white transition-colors">AI Consulting</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-sm font-bold uppercase tracking-widest text-violet-400 mb-8">Contact</h4>
            <ul className="space-y-4 text-violet-200/60 text-sm">
              <li>Innovation Center, SF</li>
              <li>hi@enxtai.com</li>
              <li>+1 (555) 000-0000</li>
              <li className="pt-4">
                <button className="bg-violet-600 text-white px-6 py-3 rounded-xl font-bold hover:bg-violet-700 transition-all shadow-lg shadow-black/20">
                  Join the Network
                </button>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="pt-10 border-t border-violet-900/50 flex flex-col sm:flex-row justify-between items-center gap-6 text-[10px] font-bold uppercase tracking-[0.2em] text-violet-400/50">
          <p>© 2024 ENXTAI DIGITAL SOLUTIONS. ALL RIGHTS RESERVED.</p>
          <div className="flex gap-8">
            <Link to="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
            <Link to="/cookies" className="hover:text-white transition-colors">Cookie Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
