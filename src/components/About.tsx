"use client";

import React from "react";
import { ShieldCheck, Target, Award, Users2, CheckCircle2 } from "lucide-react";
import { PLATFORM_INFO } from "@/data/platform";

export const About: React.FC = () => {
  const highlights = [
    {
      icon: ShieldCheck,
      title: "Fair & Certified Brackets",
      description: "Strict anti-cheat monitoring, manual room verification, and zero tolerance for unsportsmanlike behavior.",
    },
    {
      icon: Target,
      title: "Equal Opportunity",
      description: "Grassroots tournaments where underground squads compete on equal footing with verified rosters.",
    },
    {
      icon: Award,
      title: "Prompt Management",
      description: "Timely custom room distribution via WhatsApp, instant point tables, and transparent prize distribution.",
    },
    {
      icon: Users2,
      title: "Vibrant Community",
      description: "Direct access to thousands of competitive Indian esports players, team captains, and organizers.",
    },
  ];

  return (
    <section id="about" className="py-20 bg-[#0B0B0B] border-t border-[#1C1C1C]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Brand Story & Mission */}
          <div className="lg:col-span-7 space-y-6">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#FACC15]">
              About WEVI INDIA
            </span>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
              A New Standard for <br />
              Competitive Esports in India
            </h2>

            {/* Official Position Quote */}
            <div className="p-6 rounded-2xl bg-[#121212] border-l-4 border-l-[#FACC15] border border-[#222222]">
              <p className="text-sm sm:text-base text-zinc-200 leading-relaxed font-medium italic">
                &ldquo;{PLATFORM_INFO.aboutPositioning}&rdquo;
              </p>
            </div>

            <p className="text-sm text-zinc-400 leading-relaxed font-normal">
              From intense battle royale drops in BGMI and Free Fire to tactical search-and-destroy showdowns in Call of Duty and head-to-head precision in eFootball, WEVI INDIA bridges the gap between passionate gamers and professional competitive circuits.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              {[
                "Strict Anti-Cheat & Fair Play Verification",
                "Automated Roster Registration System",
                "Dedicated WhatsApp Captain Helpdesk",
                "Transparent Point Tables & Fast Payouts",
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-2.5 text-xs text-zinc-300 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-[#FACC15] shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Key Feature Cards */}
          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
            {highlights.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="surface-card p-5 group hover:border-[#3A3A3A] transition-all"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-[#1A1A1A] border border-[#2A2A2A] flex items-center justify-center shrink-0 text-[#FACC15] group-hover:scale-105 transition-transform">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-sm font-bold text-white group-hover:text-[#FACC15] transition-colors">
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
