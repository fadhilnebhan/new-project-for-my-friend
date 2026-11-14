"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Trophy, Calendar, Users, Shield, ArrowRight, Sparkles, Filter } from "lucide-react";
import { FEATURED_TOURNAMENTS } from "@/data/tournaments";
import { SupportedGame } from "@/types/registration";

interface TournamentsProps {
  onRegisterTournament: (game: SupportedGame) => void;
}

export const Tournaments: React.FC<TournamentsProps> = ({ onRegisterTournament }) => {
  const [activeFilter, setActiveFilter] = useState<string>("All");

  const filterOptions = ["All", "Free Fire", "BGMI", "Call of Duty", "eFootball"];

  const filteredTournaments =
    activeFilter === "All"
      ? FEATURED_TOURNAMENTS
      : FEATURED_TOURNAMENTS.filter((t) => t.game === activeFilter);

  return (
    <section id="tournaments" className="py-24 relative overflow-hidden bg-wevi-darker/70">
      {/* Background glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[500px] h-[300px] bg-blue-900/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-yellow-950/60 border border-yellow-800/40 text-yellow-300 text-xs font-bold uppercase tracking-wider">
              <Trophy className="w-3.5 h-3.5 text-yellow-400" />
              <span>Competitive Circuits</span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tight text-white">
              TOURNAMENT <span className="bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-300 bg-clip-text text-transparent">SHOWCASE</span>
            </h2>

            <p className="text-sm sm:text-base text-gray-400 max-w-xl">
              Compete in official WEVI brackets. Dates, schedules, and verified prize pool pools are announced in our community for each season.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap gap-2">
            {filterOptions.map((opt) => (
              <button
                key={opt}
                onClick={() => setActiveFilter(opt)}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-bold uppercase tracking-wider transition-all duration-200 ${
                  activeFilter === opt
                    ? "bg-purple-600 text-white shadow-neon-purple border border-purple-400/40"
                    : "bg-wevi-card text-gray-400 hover:text-white border border-wevi-border hover:border-wevi-borderHover"
                }`}
              >
                {opt}
              </button>
            ))}
          </div>
        </div>

        {/* Tournaments Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredTournaments.map((tournament) => (
            <div
              key={tournament.id}
              className="glass-panel rounded-2xl overflow-hidden border border-white/5 hover:border-blue-500/40 transition-all duration-300 flex flex-col group hover:-translate-y-1 shadow-xl"
            >
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  {/* Status & Game Header */}
                  <div className="flex items-center justify-between mb-3 gap-2">
                    <span className="px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider bg-emerald-950/80 text-emerald-400 border border-emerald-800/50 flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                      {tournament.status}
                    </span>

                    <span className="px-2.5 py-0.5 rounded text-[11px] font-bold uppercase tracking-wider bg-wevi-card text-purple-300 border border-purple-800/40">
                      {tournament.game} • {tournament.format}
                    </span>
                  </div>

                  {/* Tournament Title */}
                  <h3 className="text-xl sm:text-2xl font-black text-white tracking-tight mb-4 group-hover:text-blue-300 transition-colors">
                    {tournament.title}
                  </h3>

                  {/* Meta Grid */}
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-6 p-4 rounded-xl bg-wevi-darker/60 border border-white/5">
                    <div>
                      <div className="text-[10px] uppercase tracking-wider font-semibold text-gray-500 mb-0.5">
                        Schedule Date
                      </div>
                      <div className="text-xs font-bold text-gray-200">
                        {tournament.date}
                      </div>
                    </div>

                    <div>
                      <div className="text-[10px] uppercase tracking-wider font-semibold text-gray-500 mb-0.5">
                        Format
                      </div>
                      <div className="text-xs font-bold text-gray-200">
                        {tournament.format} Match
                      </div>
                    </div>

                    <div className="col-span-2 sm:col-span-1">
                      <div className="text-[10px] uppercase tracking-wider font-semibold text-gray-500 mb-0.5">
                        Prize Pool
                      </div>
                      <div className="text-xs font-bold text-yellow-400">
                        {tournament.prizePool}
                      </div>
                    </div>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {tournament.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="text-[10px] font-semibold text-gray-400 px-2 py-0.5 rounded bg-white/5 border border-white/5"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Footer Action */}
                <div className="pt-4 border-t border-white/5 flex items-center justify-between gap-4">
                  <div className="text-xs text-gray-400">
                    <span className="text-white font-bold">{tournament.entryFee}</span>
                  </div>

                  <button
                    onClick={() => onRegisterTournament(tournament.game)}
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-bold text-xs uppercase tracking-wider text-white bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 transition-all duration-300 shadow-neon-purple active:scale-95"
                  >
                    <span>Register Team</span>
                    <ArrowRight className="w-3.5 h-3.5 text-cyan-300" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
