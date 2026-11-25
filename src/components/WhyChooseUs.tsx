"use client";

import React from "react";
import { ShieldCheck, Trophy, Users, Zap, Sparkles } from "lucide-react";
import { PLATFORM_INFO } from "@/data/platform";

export const WhyChooseUs: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "ShieldCheck":
        return <ShieldCheck className="w-5 h-5 text-[#FACC15]" />;
      case "Trophy":
        return <Trophy className="w-5 h-5 text-[#FACC15]" />;
      case "Users":
        return <Users className="w-5 h-5 text-[#FACC15]" />;
      case "Zap":
        return <Zap className="w-5 h-5 text-[#FACC15]" />;
      case "Sparkles":
        return <Sparkles className="w-5 h-5 text-[#FACC15]" />;
      default:
        return <ShieldCheck className="w-5 h-5 text-[#FACC15]" />;
    }
  };

  return (
    <section id="why-choose-us" className="py-20 bg-[#0B0B0B] border-t border-[#1C1C1C]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div>
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#FACC15]">
              Core Advantages
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight mt-1">
              Why Choose WEVI INDIA
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-zinc-400 max-w-md">
            Engineered for esports competitive integrity, transparent governance, and an unforgettable tournament journey.
          </p>
        </div>

        {/* 5 Benefits Grid + CTA card */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {PLATFORM_INFO.whyChooseUs.map((benefit, idx) => (
            <div
              key={idx}
              className="surface-card p-6 flex flex-col justify-between group hover:border-[#3A3A3A] transition-all"
            >
              <div>
                <div className="w-10 h-10 rounded-xl bg-[#1A1A1A] border border-[#2A2A2A] flex items-center justify-center mb-5 group-hover:scale-105 transition-transform">
                  {getIcon(benefit.icon)}
                </div>

                <h3 className="text-base font-bold text-white group-hover:text-[#FACC15] transition-colors mb-2">
                  {benefit.title}
                </h3>

                <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                  {benefit.description}
                </p>
              </div>

              <div className="pt-6 text-right">
                <span className="text-2xl font-black text-zinc-800 group-hover:text-zinc-700 transition-colors">
                  0{idx + 1}
                </span>
              </div>
            </div>
          ))}

          {/* Quick Call to Action card */}
          <div className="surface-card p-6 border-[#333333] bg-[#141414] flex flex-col justify-between">
            <div className="space-y-3">
              <div className="w-10 h-10 rounded-xl bg-[#FACC15]/10 border border-[#FACC15]/20 flex items-center justify-center text-[#FACC15]">
                <Trophy className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-white">
                Ready to Prove Your Squad?
              </h3>
              <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                Registration is quick, organized, and provides instant access to official brackets and prize money.
              </p>
            </div>

            <div className="pt-6">
              <a
                href="#tournaments"
                className="btn-primary w-full py-2.5 text-xs uppercase tracking-wider font-bold"
              >
                Explore Active Cups
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
