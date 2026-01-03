import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import { Link } from 'react-router-dom';

const Privacy: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main className="max-w-4xl mx-auto px-6 py-20">
        <div className="prose prose-invert text-slate-700">
          <h1 className="text-4xl font-extrabold mb-6">Privacy Policy</h1>
          <p className="mb-4">This Privacy Policy explains how EnxtAI collects, uses, and protects your information.</p>

          <h2 className="text-2xl font-bold mt-8">Information We Collect</h2>
          <p className="mb-4">We may collect personal information when you contact us or use our services.</p>

          <h2 className="text-2xl font-bold mt-8">How We Use Information</h2>
          <p className="mb-4">We use information to provide and improve our services.</p>

          <h2 className="text-2xl font-bold mt-8">Contact</h2>
          <p className="mb-6">Questions about this policy? Email us at hi@enxtai.com.</p>

          <Link to="/" className="inline-block bg-violet-600 text-white px-5 py-3 rounded-xl font-bold hover:bg-violet-700 transition-all">Back to Home</Link>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Privacy;
