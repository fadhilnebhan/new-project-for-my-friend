"use client";

import React from "react";
import { ShieldCheck, Trophy, Users, Zap, Sparkles, CheckCircle } from "lucide-react";
import { PLATFORM_INFO } from "@/data/platform";

export const WhyChooseUs: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "ShieldCheck":
        return <ShieldCheck className="w-6 h-6 text-cyan-400" />;
      case "Trophy":
        return <Trophy className="w-6 h-6 text-yellow-400" />;
      case "Users":
        return <Users className="w-6 h-6 text-blue-400" />;
      case "Zap":
        return <Zap className="w-6 h-6 text-purple-400" />;
      case "Sparkles":
        return <Sparkles className="w-6 h-6 text-pink-400" />;
      default:
        return <ShieldCheck className="w-6 h-6 text-cyan-400" />;
    }
  };

  return (
    <section id="why-choose-us" className="py-24 relative overflow-hidden">
      {/* Background radial */}
      <div className="absolute top-1/2 right-1/4 w-[600px] h-[300px] bg-purple-900/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-950/60 border border-cyan-800/40 text-cyan-300 text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
            <span>Platform Advantages</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tight text-white">
            WHY CHOOSE <span className="bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-300 bg-clip-text text-transparent">WEVI INDIA</span>
          </h2>

          <p className="text-sm sm:text-base text-gray-400">
            Engineered from ground up for competitive integrity, transparent esports governance, and an unforgettable tournament journey.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PLATFORM_INFO.whyChooseUs.map((benefit, idx) => (
            <div
              key={idx}
              className="glass-panel p-6 rounded-2xl border border-white/5 hover:border-purple-500/40 transition-all duration-300 group hover:-translate-y-1 shadow-lg relative overflow-hidden"
            >
              <div className="w-12 h-12 rounded-xl bg-wevi-darker border border-white/10 flex items-center justify-center mb-5 group-hover:scale-110 group-hover:border-purple-500/50 transition-all shadow-inner">
                {getIcon(benefit.icon)}
              </div>

              <h3 className="text-lg font-bold text-white mb-2 group-hover:text-purple-300 transition-colors">
                {benefit.title}
              </h3>

              <p className="text-xs sm:text-sm text-gray-400 leading-relaxed">
                {benefit.description}
              </p>

              <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-15 transition-opacity pointer-events-none">
                <span className="text-6xl font-black text-white">0{idx + 1}</span>
              </div>
            </div>
          ))}

          {/* Call to action card */}
          <div className="glass-panel p-6 rounded-2xl border border-purple-500/30 bg-gradient-to-br from-purple-950/40 via-wevi-card to-blue-950/40 flex flex-col justify-between group">
            <div>
              <div className="w-12 h-12 rounded-xl bg-purple-900/60 border border-purple-500/40 flex items-center justify-center mb-5">
                <Trophy className="w-6 h-6 text-yellow-400" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">
                Ready to Prove Your Team?
              </h3>
              <p className="text-xs sm:text-sm text-gray-300 leading-relaxed mb-6">
                Registration is quick, free, and opens direct access to verified competitive scrims and prize brackets.
              </p>
            </div>
            <a
              href="#games"
              className="inline-flex items-center justify-center gap-2 py-3 px-5 rounded-xl font-bold text-xs uppercase tracking-wider text-white bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 transition-all shadow-neon-purple text-center"
            >
              Select Your Game
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
