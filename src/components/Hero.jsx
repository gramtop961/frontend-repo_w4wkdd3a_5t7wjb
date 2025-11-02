import React from 'react';
import Spline from '@splinetool/react-spline';
import { ArrowRight, ShieldCheck } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative w-full min-h-[70vh] md:min-h-[80vh] lg:min-h-screen overflow-hidden bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white">
      {/* 3D Spline Scene */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/qQUip0dJPqrrPryE/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Soft radial glow overlays that don't block interactions */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-16 left-1/2 -translate-x-1/2 h-72 w-72 rounded-full bg-cyan-500/20 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-indigo-500/10 blur-3xl" />
      </div>

      {/* Content overlay */}
      <div className="relative max-w-7xl mx-auto px-4 pt-20 md:pt-28 lg:pt-36 pb-12 flex flex-col items-start">
        <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs md:text-sm backdrop-blur-md">
          <ShieldCheck className="h-4 w-4 text-cyan-400" />
          Bank‑grade security • Modern, mobile‑first
        </span>

        <h1 className="mt-4 text-3xl leading-tight font-semibold sm:text-4xl md:text-5xl lg:text-6xl tracking-tight">
          Control your cash flow
          <span className="block bg-gradient-to-r from-cyan-300 via-sky-400 to-indigo-400 bg-clip-text text-transparent">across every asset</span>
        </h1>

        <p className="mt-4 max-w-xl text-sm md:text-base text-slate-300">
          Register assets like Cash, Wallet, and Bank. Record income and expenses, transfer between categories, and export beautiful reports.
        </p>

        <div className="mt-6 flex flex-wrap items-center gap-3">
          <a
            href="#auth"
            className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-cyan-500 to-indigo-500 px-4 py-2 text-sm font-medium text-white shadow-lg shadow-cyan-500/20 hover:shadow-indigo-500/30 transition-shadow"
          >
            Get started
            <ArrowRight className="h-4 w-4" />
          </a>
          <a
            href="#features"
            className="inline-flex items-center gap-2 rounded-lg border border-white/15 bg-white/5 px-4 py-2 text-sm font-medium text-white/90 backdrop-blur-md hover:bg-white/10"
          >
            See features
          </a>
        </div>
      </div>
    </section>
  );
}
