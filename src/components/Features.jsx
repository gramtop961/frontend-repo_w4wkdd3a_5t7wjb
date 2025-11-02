import React from 'react';
import { Wallet, Banknote, PieChart, BarChart3, FileDown, ArrowLeftRight, CalendarRange, Settings } from 'lucide-react';

const features = [
  {
    icon: Wallet,
    title: 'Dynamic asset categories',
    desc: 'Create and manage Cash, Wallet, Bank, and any custom category you need.'
  },
  {
    icon: Banknote,
    title: 'Record income & expenses',
    desc: 'Log transactions with source asset and keep everything reconciled.'
  },
  {
    icon: ArrowLeftRight,
    title: 'Transfer between assets',
    desc: 'Move balances between categories with instant updates to totals.'
  },
  {
    icon: CalendarRange,
    title: 'Multi‑period balances',
    desc: 'Totals per year, month, week, and day with one tap.'
  },
  {
    icon: BarChart3,
    title: 'Cash‑flow visualization',
    desc: 'Understand inflows and outflows across all assets.'
  },
  {
    icon: FileDown,
    title: 'Export reports',
    desc: 'Generate professional PDF and Excel statements for sharing.'
  },
  {
    icon: PieChart,
    title: 'Category insights',
    desc: 'See which categories drive spending and income.'
  },
  {
    icon: Settings,
    title: 'Profile editing',
    desc: 'Update your personal details and preferences anytime.'
  }
];

export default function Features() {
  return (
    <section id="features" className="py-12 md:py-16 bg-gradient-to-b from-slate-950 to-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="max-w-2xl">
          <h2 className="text-2xl md:text-3xl font-semibold">Everything you need to master your money</h2>
          <p className="mt-2 text-slate-300 text-sm md:text-base">
            A powerful, mobile‑first toolkit designed for modern personal finance and small businesses.
          </p>
        </div>

        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {features.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="rounded-xl border border-white/10 bg-white/5 p-4 backdrop-blur-xl hover:bg-white/10 transition-colors">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-lg bg-gradient-to-br from-cyan-500 to-indigo-500 flex items-center justify-center shadow-md">
                  <Icon className="h-5 w-5 text-white" />
                </div>
                <h3 className="font-medium">{title}</h3>
              </div>
              <p className="mt-2 text-sm text-slate-300">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
