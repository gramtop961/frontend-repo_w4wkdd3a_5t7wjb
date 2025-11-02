import React, { useState } from 'react';
import { Eye, EyeOff, Mail, Lock, User } from 'lucide-react';

export default function AuthPanel() {
  const [mode, setMode] = useState('signin');
  const [showPassword, setShowPassword] = useState(false);

  return (
    <section id="auth" className="relative -mt-10 md:-mt-20 z-10">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-6">
          {/* Card */}
          <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-6 md:p-8 text-white shadow-2xl">
            <div className="flex items-center gap-3 mb-6">
              <div className="h-9 w-9 rounded-lg bg-gradient-to-br from-cyan-500 to-indigo-500 flex items-center justify-center shadow-md">
                <User className="h-5 w-5 text-white" />
              </div>
              <div>
                <h3 className="text-lg font-semibold">{mode === 'signin' ? 'Welcome back' : 'Create your account'}</h3>
                <p className="text-slate-300 text-sm">Secure access to your finance workspace</p>
              </div>
            </div>

            <div className="flex rounded-lg overflow-hidden border border-white/10 bg-white/10 w-full md:w-max">
              <button
                className={`px-4 py-2 text-sm ${mode === 'signin' ? 'bg-white/20' : 'bg-transparent'} transition-colors`}
                onClick={() => setMode('signin')}
              >
                Sign in
              </button>
              <button
                className={`px-4 py-2 text-sm ${mode === 'signup' ? 'bg-white/20' : 'bg-transparent'} transition-colors`}
                onClick={() => setMode('signup')}
              >
                Sign up
              </button>
            </div>

            <form
              className="mt-6 grid gap-4"
              onSubmit={(e) => {
                e.preventDefault();
                // Hook up to backend later
                alert(`${mode === 'signin' ? 'Signed in' : 'Account created'} (UI only)`);
              }}
            >
              {mode === 'signup' && (
                <div className="grid gap-1.5">
                  <label className="text-sm text-slate-300">Full name</label>
                  <div className="flex items-center gap-2 rounded-lg border border-white/10 bg-white/10 px-3 py-2">
                    <User className="h-4 w-4 text-slate-300" />
                    <input className="bg-transparent outline-none w-full placeholder:text-slate-400" placeholder="Jane Doe" required />
                  </div>
                </div>
              )}

              <div className="grid gap-1.5">
                <label className="text-sm text-slate-300">Email</label>
                <div className="flex items-center gap-2 rounded-lg border border-white/10 bg-white/10 px-3 py-2">
                  <Mail className="h-4 w-4 text-slate-300" />
                  <input type="email" className="bg-transparent outline-none w-full placeholder:text-slate-400" placeholder="you@domain.com" required />
                </div>
              </div>

              <div className="grid gap-1.5">
                <label className="text-sm text-slate-300">Password</label>
                <div className="flex items-center gap-2 rounded-lg border border-white/10 bg-white/10 px-3 py-2">
                  <Lock className="h-4 w-4 text-slate-300" />
                  <input type={showPassword ? 'text' : 'password'} className="bg-transparent outline-none w-full placeholder:text-slate-400" placeholder="••••••••" required />
                  <button type="button" onClick={() => setShowPassword((s) => !s)} className="text-slate-300">
                    {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                  </button>
                </div>
              </div>

              <button
                type="submit"
                className="mt-2 inline-flex justify-center items-center gap-2 rounded-lg bg-gradient-to-r from-cyan-500 to-indigo-500 px-4 py-2 text-sm font-medium text-white shadow-lg shadow-cyan-500/20 hover:shadow-indigo-500/30 transition-shadow"
              >
                {mode === 'signin' ? 'Sign in' : 'Create account'}
              </button>

              <p className="text-xs text-slate-400">By continuing you agree to our Terms and Privacy Policy.</p>
            </form>
          </div>

          {/* Secondary copy */}
          <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl p-6 md:p-8 text-white">
            <h3 className="text-lg font-semibold mb-3">All your money, one place</h3>
            <p className="text-slate-200 text-sm">
              Create custom asset categories like Cash, Wallet, or Bank. Record income and expenses, transfer balances, and get real‑time totals per day, week, month, and year.
            </p>
            <ul className="mt-4 space-y-2 text-sm text-slate-300 list-disc list-inside">
              <li>Secure authentication with profile editing</li>
              <li>Dynamic asset categories</li>
              <li>Income, expenses, and transfers</li>
              <li>Export to PDF and Excel</li>
              <li>Insightful cash‑flow visualizations</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
