"use client";

import React from "react";
import { ShieldCheck, Target, Award, Users2, Sparkles, CheckCircle2 } from "lucide-react";
import { PLATFORM_INFO } from "@/data/platform";

export const About: React.FC = () => {
  const highlights = [
    {
      icon: ShieldCheck,
      title: "Fair & Certified Brackets",
      description: "Zero tolerance for modded clients, emulators where restricted, or unsportsmanlike conduct.",
    },
    {
      icon: Target,
      title: "Equal Opportunity",
      description: "Grassroots tournaments where underground squads compete on equal footing with invited rosters.",
    },
    {
      icon: Award,
      title: "Prompt Management",
      description: "Timely custom room distribution, point table publication, and transparent league tracking.",
    },
    {
      icon: Users2,
      title: "Vibrant Community",
      description: "Active WhatsApp and Discord channels connecting thousands of competitive Indian gamers.",
    },
  ];

  return (
    <section id="about" className="py-24 relative overflow-hidden bg-wevi-darker/60">
      {/* Glow backgrounds */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-purple-900/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-blue-900/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Brand Story & Mission */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-950/60 border border-purple-800/40 text-purple-300 text-xs font-bold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5 text-purple-400" />
              <span>About WEVI INDIA</span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tight text-white leading-tight">
              A NEW STANDARD FOR <br />
              <span className="bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-300 bg-clip-text text-transparent">
                INDIAN ESPORTS EXCELLENCE
              </span>
            </h2>

            {/* Official Position Quote */}
            <div className="p-6 rounded-2xl bg-wevi-card/70 border-l-4 border-l-purple-500 border border-white/5 shadow-xl backdrop-blur-sm">
              <p className="text-base sm:text-lg text-gray-200 leading-relaxed font-medium italic">
                &ldquo;{PLATFORM_INFO.aboutPositioning}&rdquo;
              </p>
            </div>

            <p className="text-sm sm:text-base text-gray-400 leading-relaxed">
              From intense battle royale drops in Free Fire and BGMI to high-stakes tactical plays in Call of Duty and precision sports tactics in eFootball, WEVI INDIA bridges the gap between casual passion and professional competitive esports.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              {[
                "Strict Anti-Cheat & Fair Play Verification",
                "Automated & Logical Roster Registration",
                "Dedicated WhatsApp Captain Helpdesk",
                "Official Certificate & Prize Distribution",
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-2.5 text-xs sm:text-sm text-gray-300 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-wevi-neon-cyan shrink-0" />
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
                  className="glass-panel p-5 rounded-2xl border border-white/5 hover:border-purple-500/40 transition-all duration-300 group"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-11 h-11 rounded-xl bg-purple-950/70 border border-purple-700/50 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                      <Icon className="w-5 h-5 text-purple-300" />
                    </div>
                    <div>
                      <h3 className="text-base font-bold text-white mb-1 group-hover:text-purple-300 transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-xs text-gray-400 leading-relaxed">
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
