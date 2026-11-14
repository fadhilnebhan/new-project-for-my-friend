"use client";

import React from "react";
import { ArrowRight, Trophy, ShieldCheck, Zap, Sparkles, Users, Crosshair } from "lucide-react";
import { PLATFORM_INFO } from "@/data/platform";

interface HeroProps {
  onOpenRegistration: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenRegistration }) => {
  return (
    <section
      id="hero"
      className="relative min-h-[92vh] flex items-center justify-center pt-24 pb-16 overflow-hidden"
    >
      {/* Background Cyber Grid & Radial Glow */}
      <div className="absolute inset-0 bg-cyber-grid bg-[size:40px_40px] opacity-25" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-gradient-to-tr from-purple-700/20 via-blue-600/20 to-cyan-500/10 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute -bottom-20 left-10 w-96 h-96 bg-purple-900/15 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute -top-10 right-10 w-96 h-96 bg-blue-900/15 rounded-full blur-[120px] pointer-events-none" />

      {/* Decorative Diagonal Esports Lines */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden opacity-30">
        <div className="absolute -top-[50%] -left-[10%] w-[120%] h-[200%] border-t border-purple-500/10 rotate-12" />
        <div className="absolute -top-[40%] -left-[10%] w-[120%] h-[200%] border-t border-blue-500/10 rotate-12" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        {/* Live Esports Announcement Badge */}
        <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-wevi-card/80 border border-purple-500/30 text-purple-200 text-xs font-semibold uppercase tracking-wider mb-8 backdrop-blur-md shadow-lg shadow-purple-900/20 animate-fade-in">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
          </span>
          <span className="text-gray-300 font-medium">WEVI LEAGUES SEASON 2026</span>
          <span className="text-purple-400">|</span>
          <span className="text-wevi-neon-blue font-bold">REGISTRATION ACTIVE</span>
        </div>

        {/* Hero Title */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black uppercase tracking-tight text-white max-w-5xl leading-[1.05] mb-6">
          ENTER THE <span className="bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-300 bg-clip-text text-transparent glow-purple">ARENA</span>.
          <br />
          PROVE YOUR <span className="text-white relative inline-block">
            SKILLS
            <span className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-purple-600 via-blue-500 to-cyan-400 rounded-full" />
          </span>.
        </h1>

        {/* Supporting Description */}
        <p className="text-base sm:text-lg md:text-xl text-gray-300/90 max-w-3xl mb-10 leading-relaxed font-normal">
          {PLATFORM_INFO.subtitle}
        </p>

        {/* Action CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto mb-16">
          <button
            onClick={onOpenRegistration}
            className="w-full sm:w-auto group relative inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl font-bold text-sm uppercase tracking-wider text-white bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 transition-all duration-300 shadow-neon-purple active:scale-95 border border-purple-400/30"
          >
            <span>Register Now</span>
            <ArrowRight className="w-4 h-4 text-cyan-300 transition-transform duration-300 group-hover:translate-x-1" />
          </button>

          <a
            href="#tournaments"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl font-semibold text-sm uppercase tracking-wider text-gray-200 bg-wevi-card/80 hover:bg-wevi-cardHover hover:text-white border border-wevi-border hover:border-wevi-borderHover transition-all duration-300 backdrop-blur-md"
          >
            <Trophy className="w-4 h-4 text-yellow-400" />
            <span>Explore Tournaments</span>
          </a>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 w-full max-w-4xl">
          {PLATFORM_INFO.stats.map((stat, idx) => (
            <div
              key={idx}
              className="glass-panel p-5 rounded-2xl border border-white/5 relative overflow-hidden group hover:border-purple-500/30 transition-all duration-300"
            >
              <div className="text-2xl sm:text-3xl font-black bg-gradient-to-r from-white via-gray-100 to-gray-300 bg-clip-text text-transparent mb-1">
                {stat.value}
              </div>
              <div className="text-xs uppercase tracking-wider font-semibold text-gray-400">
                {stat.label}
              </div>
              <div className="absolute -bottom-8 -right-8 w-16 h-16 bg-purple-500/10 rounded-full blur-xl group-hover:bg-purple-500/20 transition-all" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
