import React from 'react';
import Hero from './components/Hero';
import AuthPanel from './components/AuthPanel';
import Features from './components/Features';
import DashboardPreview from './components/DashboardPreview';

function App() {
  return (
    <div className="min-h-screen bg-slate-950">
      <Hero />
      <AuthPanel />
      <Features />
      <DashboardPreview />

      <footer className="border-t border-white/10 bg-gradient-to-b from-slate-950 to-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 py-8 text-sm text-slate-400 flex flex-col md:flex-row items-center justify-between gap-3">
          <p>© {new Date().getFullYear()} Flux Ledger. All rights reserved.</p>
          <div className="flex items-center gap-3">
            <a href="#features" className="hover:text-white">Features</a>
            <a href="#auth" className="hover:text-white">Sign in</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
