import React from 'react';
import { TrendingUp, TrendingDown, Download } from 'lucide-react';

export default function DashboardPreview() {
  return (
    <section className="py-12 md:py-16 bg-gradient-to-b from-slate-900 to-slate-950 text-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between gap-3 mb-6">
          <h2 className="text-xl md:text-2xl font-semibold">Live cash‑flow snapshot</h2>
          <div className="flex items-center gap-2">
            <button className="text-xs md:text-sm rounded-lg border border-white/15 bg-white/5 px-3 py-1.5 hover:bg-white/10">Day</button>
            <button className="text-xs md:text-sm rounded-lg border border-white/15 bg-white/5 px-3 py-1.5 hover:bg-white/10">Week</button>
            <button className="text-xs md:text-sm rounded-lg border border-white/15 bg-white/5 px-3 py-1.5 hover:bg-white/10">Month</button>
            <button className="text-xs md:text-sm rounded-lg border border-white/15 bg-white/5 px-3 py-1.5 hover:bg-white/10">Year</button>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {[
            { name: 'Cash', amount: 1240.25 },
            { name: 'Wallet', amount: 320.0 },
            { name: 'Bank', amount: 8420.91 },
            { name: 'Savings', amount: 5300.0 }
          ].map((a) => (
            <div key={a.name} className="rounded-xl border border-white/10 bg-white/5 p-4 backdrop-blur-xl">
              <div className="text-slate-300 text-xs">{a.name}</div>
              <div className="text-lg md:text-xl font-semibold">${a.amount.toLocaleString()}</div>
            </div>
          ))}
        </div>

        <div className="mt-6 grid lg:grid-cols-3 gap-4 md:gap-6">
          {/* Chart mock */}
          <div className="lg:col-span-2 rounded-2xl border border-white/10 bg-white/5 p-4 md:p-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-cyan-500 to-indigo-500 flex items-center justify-center shadow-md">
                  <TrendingUp className="h-4 w-4 text-white" />
                </div>
                <h3 className="font-medium">Cash‑flow by category</h3>
              </div>
              <button className="text-xs md:text-sm inline-flex items-center gap-2 rounded-lg border border-white/15 bg-white/5 px-3 py-1.5 hover:bg-white/10">
                <Download className="h-4 w-4" /> Export
              </button>
            </div>
            <div className="mt-4 h-40 md:h-56 grid grid-cols-12 items-end gap-1 md:gap-2">
              {[8, 6, 10, 5, 9, 7, 11, 4, 6, 8, 10, 9].map((h, i) => (
                <div key={i} className="relative">
                  <div className="w-full rounded-t-md bg-gradient-to-t from-indigo-500 to-cyan-400" style={{ height: `${h * 8}px` }} />
                </div>
              ))}
            </div>
            <div className="mt-2 flex justify-between text-[10px] text-slate-400">
              {['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'].map((m) => (
                <span key={m}>{m}</span>
              ))}
            </div>
          </div>

          {/* Inflow/Outflow */}
          <div className="rounded-2xl border border-white/10 bg-white/5 p-4 md:p-6">
            <h3 className="font-medium">This month</h3>
            <div className="mt-4 space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-emerald-400">
                  <TrendingUp className="h-4 w-4" /> Inflows
                </div>
                <div className="font-semibold">$3,420.00</div>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-rose-400">
                  <TrendingDown className="h-4 w-4" /> Outflows
                </div>
                <div className="font-semibold">$2,180.55</div>
              </div>
            </div>
            <div className="mt-4">
              <div className="h-2 w-full rounded-full bg-white/10 overflow-hidden">
                <div className="h-full bg-gradient-to-r from-emerald-400 to-cyan-400" style={{ width: '61%' }} />
              </div>
              <div className="mt-2 text-xs text-slate-400">Net +$1,239.45</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
