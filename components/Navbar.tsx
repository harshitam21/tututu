
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/80 backdrop-blur-md shadow-sm py-4' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <div className="flex gap-8 items-center">
          <div className="flex items-center cursor-pointer group">
            <span className="text-gray-900 font-extrabold text-2xl tracking-tighter transition-colors duration-300">
              Enxt<span className="text-[#a855f7]">AI</span>
            </span>
          </div>
          <div className="hidden md:flex gap-8 text-sm font-medium">
            <Link to="/" className="hover:text-purple-600 transition-colors">Home</Link>
            <Link to="/aboutpage" className="hover:text-purple-600 transition-colors">About</Link>
          </div>
        </div>
        
        <div className="flex items-center gap-6">
          <button className="hidden sm:block text-sm font-semibold text-purple-600 hover:text-purple-800 transition-colors">
            Our Work
          </button>
          <button className="bg-purple-600 text-white px-5 py-2.5 rounded-full text-sm font-bold shadow-lg shadow-purple-200 hover:bg-purple-700 hover:shadow-purple-300 transition-all">
            Get in Touch
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
