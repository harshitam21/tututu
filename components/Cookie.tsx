import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import { Link } from 'react-router-dom';

const Cookie: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main className="max-w-4xl mx-auto px-6 py-20">
        <div className="prose prose-invert text-slate-700">
          <h1 className="text-4xl font-extrabold mb-6">Cookie Policy</h1>
          <p className="mb-4">Our website uses cookies to improve your experience. This Cookie Policy explains how cookies are used.</p>

          <h2 className="text-2xl font-bold mt-8">What are Cookies?</h2>
          <p className="mb-4">Cookies are small data files stored on your device.</p>

          <h2 className="text-2xl font-bold mt-8">Managing Cookies</h2>
          <p className="mb-4">You can control cookie preferences through your browser settings.</p>

          <h2 className="text-2xl font-bold mt-8">Contact</h2>
          <p className="mb-6">Questions? Email hi@enxtai.com.</p>

          <Link to="/" className="inline-block bg-violet-600 text-white px-5 py-3 rounded-xl font-bold hover:bg-violet-700 transition-all">Back to Home</Link>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Cookie;
