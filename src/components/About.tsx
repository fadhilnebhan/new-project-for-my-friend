"use client";

import React from "react";
import { ShieldCheck, Target, Award, Users2, CheckCircle2 } from "lucide-react";
import { PLATFORM_INFO } from "@/data/platform";

export const About: React.FC = () => {
  const highlights = [
    {
      icon: ShieldCheck,
      title: "Fair & Certified Brackets",
      description: "Strict anti-cheat protocols, room ID validation, and zero tolerance for unsportsmanlike behavior.",
    },
    {
      icon: Target,
      title: "Equal Opportunity",
      description: "Grassroots tournaments where underground squads compete on equal footing with verified rosters.",
    },
    {
      icon: Award,
      title: "Prompt Management",
      description: "Timely custom room distribution via WhatsApp, instant point tables, and transparent payouts.",
    },
    {
      icon: Users2,
      title: "Active Community",
      description: "Direct connectivity to thousands of competitive Indian esports players, captains, and officials.",
    },
  ];

  return (
    <section id="about" className="py-20 bg-[#08080A] border-t border-[#1C1D22]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-6">
            <div className="text-[11px] font-mono tracking-[0.2em] text-[#F93822] uppercase font-bold">
              /// ABOUT WEVI INDIA
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white italic tracking-tight leading-tight">
              A Modern Benchmark for Competitive Indian Esports
            </h2>

            <div className="p-6 rounded-2xl bg-[#121316] border-l-4 border-l-[#F93822] border border-[#23252B]">
              <p className="text-sm sm:text-base text-zinc-200 leading-relaxed font-medium italic">
                &ldquo;{PLATFORM_INFO.aboutPositioning}&rdquo;
              </p>
            </div>

            <p className="text-sm text-zinc-400 leading-relaxed font-normal">
              From intense battle royale drops in BGMI and Free Fire to tactical Search & Destroy showdowns in Call of Duty and head-to-head precision in eFootball, WEVI INDIA bridges the gap between passionate gamers and professional competitive circuits.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              {[
                "Strict Anti-Cheat & Fair Play Verification",
                "Automated Roster Registration System",
                "Dedicated WhatsApp Captain Helpdesk",
                "Transparent Point Tables & Fast Payouts",
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-2.5 text-xs text-zinc-300 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-[#F93822] shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
            {highlights.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="esports-surface p-5 group hover:border-[#353842] transition-all"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-[#18191E] border border-[#262830] flex items-center justify-center shrink-0 text-[#F93822] group-hover:scale-105 transition-transform">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-sm font-bold text-white group-hover:text-[#F93822] transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-xs text-zinc-400 mt-1 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
