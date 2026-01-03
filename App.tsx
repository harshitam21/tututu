
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Aboutpage from './components/Aboutpage';
import Capabilities from './components/Capabilities';
import Process from './components/Process';
import Insights from './components/Insights';
import Clients from './components/Clients';
import Footer from './components/Footer';
import Terms from './components/Terms';
import Privacy from './components/Privacy';
import Cookie from './components/Cookie';

function Home() {
  return (
    <div className="min-h-screen bg-white">
      <main>
        <Hero />
        <About />
        <Capabilities />
        <Process />
        <Insights />
        <Clients />
      </main>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-white">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/aboutpage" element={<Aboutpage />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/cookies" element={<Cookie />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
