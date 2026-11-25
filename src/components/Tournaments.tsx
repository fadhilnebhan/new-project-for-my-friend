"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ArrowRight, Trophy, Sparkles } from "lucide-react";
import { FEATURED_TOURNAMENTS } from "@/data/tournaments";
import { SupportedGame } from "@/types/registration";

interface TournamentsProps {
  onRegisterTournament: (game: SupportedGame) => void;
}

export const Tournaments: React.FC<TournamentsProps> = ({ onRegisterTournament }) => {
  const [activeFilter, setActiveFilter] = useState<string>("All");

  const filterOptions = ["All", "BGMI", "Call of Duty", "Free Fire", "eFootball"];

  const filteredTournaments =
    activeFilter === "All"
      ? FEATURED_TOURNAMENTS
      : FEATURED_TOURNAMENTS.filter((t) => t.game === activeFilter);

  return (
    <section id="tournaments" className="py-20 bg-[#0B0B0B] border-t border-[#1C1C1C]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Section Header matching design */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              Live Tournaments
            </h2>
            <div className="hidden sm:flex items-center gap-2">
              {filterOptions.map((opt) => (
                <button
                  key={opt}
                  onClick={() => setActiveFilter(opt)}
                  className={`px-3 py-1 text-xs font-medium rounded-lg transition-all ${
                    activeFilter === opt
                      ? "bg-[#1E1E1E] text-white border border-[#333333]"
                      : "text-zinc-500 hover:text-zinc-300"
                  }`}
                >
                  {opt}
                </button>
              ))}
            </div>
          </div>

          <button
            onClick={() => setActiveFilter("All")}
            className="text-xs font-semibold text-zinc-400 hover:text-white flex items-center gap-1 transition-colors"
          >
            <span>View All</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* 3-4 Column Tournament Cards Grid exactly as pictured */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {filteredTournaments.map((t) => {
            const isLive = t.status === "Live Now";
            const isOpen = t.status === "Registration Open";

            return (
              <div
                key={t.id}
                onClick={() => onRegisterTournament(t.game)}
                className="surface-card group relative cursor-pointer overflow-hidden p-4 flex flex-col justify-between min-h-[260px] hover:border-[#383838]"
              >
                {/* Background Image with Cinematic Dark Gradient */}
                <div className="absolute inset-0 z-0">
                  <Image
                    src={t.bannerImage}
                    alt={t.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105 filter brightness-50 contrast-125"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0E0E0E] via-[#0E0E0E]/80 to-transparent" />
                </div>

                {/* Top Row: Game Badge */}
                <div className="relative z-10 flex items-center justify-between">
                  <span className="px-2.5 py-1 rounded-md text-[10px] font-bold uppercase tracking-wider bg-black/60 backdrop-blur-md text-zinc-200 border border-white/10">
                    {t.game}
                  </span>

                  <span className="text-[11px] font-semibold text-zinc-400">
                    {t.prizePool}
                  </span>
                </div>

                {/* Bottom Content matching design */}
                <div className="relative z-10 space-y-3 pt-12">
                  <div>
                    <h3 className="text-lg font-bold text-white tracking-tight group-hover:text-[#FACC15] transition-colors">
                      {t.title}
                    </h3>
                    <p className="text-xs text-zinc-400 mt-0.5">
                      {t.tags[0] || `${t.format} · ${t.slotsTotal} Teams`}
                    </p>
                  </div>

                  {/* Status Indicator Pill */}
                  <div className="flex items-center justify-between pt-1">
                    {isLive ? (
                      <span className="badge-live">
                        <span className="badge-live-dot" />
                        <span>Live</span>
                      </span>
                    ) : isOpen ? (
                      <span className="px-3 py-1 rounded-full text-[11px] font-semibold bg-[#161616] text-zinc-300 border border-[#2A2A2A]">
                        Registrations Open
                      </span>
                    ) : (
                      <span className="px-3 py-1 rounded-full text-[11px] font-semibold bg-[#161616] text-zinc-400 border border-[#222222]">
                        {t.date}
                      </span>
                    )}

                    <span className="text-xs font-semibold text-[#FACC15] opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-1">
                      <span>Join</span>
                      <ArrowRight className="w-3 h-3" />
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Organize Your Own Tournament Banner matching the design image */}
        <div className="relative rounded-2xl bg-[#121212] border border-[#2A2A2A] overflow-hidden p-8 sm:p-10 flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Subtle Yellow Ambient Ray Accent */}
          <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-[#FACC15]/10 via-[#FACC15]/5 to-transparent pointer-events-none" />
          <div className="absolute -bottom-10 right-28 w-40 h-40 bg-[#FACC15]/15 rounded-full blur-3xl pointer-events-none" />

          <div className="space-y-4 max-w-xl relative z-10">
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              Organize Your Own Tournament
            </h3>
            <p className="text-sm text-zinc-400 leading-relaxed font-normal">
              Run custom tournaments for your community, team, or brand — with full control over custom room IDs, automated brackets, and referee management.
            </p>
            <div className="pt-2">
              <button
                onClick={() => onRegisterTournament("BGMI")}
                className="btn-primary px-6 py-3 text-xs uppercase tracking-wider font-bold shadow-sm"
              >
                <span>Create Tournament</span>
                <ArrowRight className="w-4 h-4 stroke-[2.5]" />
              </button>
            </div>
          </div>

          {/* 3D Trophy Showcase Graphic with Gold Geometry */}
          <div className="relative z-10 shrink-0 w-48 h-48 sm:w-56 sm:h-56 flex items-center justify-center">
            <div className="relative w-full h-full flex items-center justify-center">
              {/* Sharp Yellow Angular Accents */}
              <div className="absolute -bottom-2 w-32 h-2 bg-[#FACC15] rounded-full blur-md opacity-80" />
              <div className="w-36 h-36 rounded-2xl bg-[#1A1A1A] border border-[#333333] flex items-center justify-center shadow-2xl relative overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-tr from-[#FACC15]/20 to-transparent" />
                <Trophy className="w-16 h-16 text-[#FACC15] drop-shadow-[0_10px_20px_rgba(250,204,21,0.3)]" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
