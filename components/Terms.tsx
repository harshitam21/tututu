import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import { Link } from 'react-router-dom';

const Terms: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main className="max-w-4xl mx-auto px-6 py-20">
        <div className="prose prose-invert text-slate-700">
          <h1 className="text-4xl font-extrabold mb-6">Terms of Service</h1>
          <p className="mb-4">Welcome to EnxtAI. These Terms of Service govern your use of our website and services. Please read them carefully.</p>

          <h2 className="text-2xl font-bold mt-8">1. Acceptance</h2>
          <p className="mb-4">By accessing or using our services, you agree to be bound by these terms.</p>

          <h2 className="text-2xl font-bold mt-8">2. Use of Services</h2>
          <p className="mb-4">You agree to use the services only for lawful purposes and in accordance with these terms.</p>

          <h2 className="text-2xl font-bold mt-8">3. Intellectual Property</h2>
          <p className="mb-4">All content on the site is the property of EnxtAI or its licensors.</p>

          <h2 className="text-2xl font-bold mt-8">4. Limitation of Liability</h2>
          <p className="mb-4">To the extent permitted by law, EnxtAI will not be liable for any indirect damages arising from the use of the site.</p>

          <h2 className="text-2xl font-bold mt-8">Contact</h2>
          <p className="mb-6">If you have questions about these Terms, please contact us at hi@enxtai.com.</p>

          <Link to="/" className="inline-block bg-violet-600 text-white px-5 py-3 rounded-xl font-bold hover:bg-violet-700 transition-all">Back to Home</Link>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Terms;
