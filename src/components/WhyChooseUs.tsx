"use client";

import React from "react";
import { ShieldCheck, Trophy, Users, Zap, Sparkles } from "lucide-react";
import { PLATFORM_INFO } from "@/data/platform";

export const WhyChooseUs: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "ShieldCheck":
        return <ShieldCheck className="w-5 h-5 text-[#F93822]" />;
      case "Trophy":
        return <Trophy className="w-5 h-5 text-[#F93822]" />;
      case "Users":
        return <Users className="w-5 h-5 text-[#F93822]" />;
      case "Zap":
        return <Zap className="w-5 h-5 text-[#F93822]" />;
      case "Sparkles":
        return <Sparkles className="w-5 h-5 text-[#F93822]" />;
      default:
        return <ShieldCheck className="w-5 h-5 text-[#F93822]" />;
    }
  };

  return (
    <section id="why-choose-us" className="py-20 bg-[#08080A] border-t border-[#1C1D22]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div>
            <div className="text-[11px] font-mono tracking-[0.2em] text-[#F93822] uppercase font-bold mb-1">
              /// WHY WEVI
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-white italic tracking-tight">
              Competitive Platform Integrity
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-zinc-400 max-w-md">
            Engineered from ground up for esports competitive integrity, transparent governance, and seamless matchdays.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {PLATFORM_INFO.whyChooseUs.map((benefit, idx) => (
            <div
              key={idx}
              className="esports-card p-6 flex flex-col justify-between group"
            >
              <div>
                <div className="w-10 h-10 rounded-xl bg-[#1D1F25] border border-[#2B2E37] flex items-center justify-center mb-5 group-hover:scale-105 transition-transform">
                  {getIcon(benefit.icon)}
                </div>

                <h3 className="text-base font-bold text-white group-hover:text-[#F93822] transition-colors mb-2">
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

          <div className="esports-card p-6 border-[#F93822]/40 bg-[#141519] flex flex-col justify-between">
            <div className="space-y-3">
              <div className="w-10 h-10 rounded-xl bg-[#F93822]/10 border border-[#F93822]/20 flex items-center justify-center text-[#F93822]">
                <Trophy className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-white">
                Ready to Prove Your Squad?
              </h3>
              <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                Registration takes under 2 minutes. Receive direct access to official brackets and live match rooms.
              </p>
            </div>

            <div className="pt-6">
              <a
                href="#tournaments"
                className="btn-coral w-full py-2.5 text-xs uppercase tracking-wider font-bold"
              >
                Join Ongoing Tournaments
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
