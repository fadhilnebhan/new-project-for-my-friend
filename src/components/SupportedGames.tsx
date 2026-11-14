"use client";

import React from "react";
import Image from "next/image";
import { Gamepad2, Users, ArrowUpRight, ShieldCheck, Flame } from "lucide-react";
import { SUPPORTED_GAMES } from "@/data/games";
import { SupportedGame } from "@/types/registration";

interface SupportedGamesProps {
  onSelectGame: (game: SupportedGame) => void;
}

export const SupportedGames: React.FC<SupportedGamesProps> = ({ onSelectGame }) => {
  return (
    <section id="games" className="py-24 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-1/3 right-10 w-96 h-96 bg-purple-900/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-950/60 border border-blue-800/40 text-blue-300 text-xs font-bold uppercase tracking-wider">
            <Gamepad2 className="w-3.5 h-3.5 text-blue-400" />
            <span>Competitive Titles</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tight text-white">
            SUPPORTED <span className="bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-300 bg-clip-text text-transparent">GAMES</span>
          </h2>

          <p className="text-sm sm:text-base text-gray-400">
            Official competitive divisions managed by WEVI INDIA. Choose your battleground, assemble your squad, and register your team for upcoming tournaments.
          </p>
        </div>

        {/* Game Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {SUPPORTED_GAMES.map((game) => (
            <div
              key={game.id}
              className="group glass-panel rounded-2xl overflow-hidden border border-white/5 hover:border-purple-500/50 transition-all duration-300 flex flex-col hover:-translate-y-1.5 shadow-xl hover:shadow-neon-purple/20"
            >
              {/* Game Banner Image */}
              <div className="relative h-48 w-full overflow-hidden bg-wevi-card">
                <Image
                  src={game.bannerImage}
                  alt={game.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105 filter brightness-90 contrast-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-wevi-darker via-wevi-darker/50 to-transparent" />

                {/* Badge */}
                <div className="absolute top-3 left-3 px-2.5 py-1 rounded-md text-[10px] font-bold uppercase tracking-wider bg-wevi-darker/80 backdrop-blur-md text-cyan-300 border border-cyan-500/30 flex items-center gap-1">
                  <Flame className="w-3 h-3 text-cyan-400" />
                  <span>{game.badge}</span>
                </div>

                {/* Formats Pill */}
                <div className="absolute bottom-3 right-3 flex gap-1">
                  {game.supportedFormats.map((fmt) => (
                    <span
                      key={fmt}
                      className="px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider bg-black/60 backdrop-blur-md text-gray-300 border border-white/10"
                    >
                      {fmt}
                    </span>
                  ))}
                </div>
              </div>

              {/* Game Info */}
              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <div className="text-[11px] font-bold uppercase tracking-wider text-purple-400 mb-1">
                    {game.category}
                  </div>
                  <h3 className="text-xl font-black text-white uppercase tracking-tight mb-2 group-hover:text-purple-300 transition-colors">
                    {game.name}
                  </h3>
                  <p className="text-xs text-gray-400 leading-relaxed mb-4 line-clamp-3">
                    {game.shortDescription}
                  </p>
                </div>

                {/* Card Action */}
                <div className="pt-3 border-t border-white/5">
                  <button
                    onClick={() => onSelectGame(game.name)}
                    className="w-full py-2.5 px-4 rounded-xl font-bold text-xs uppercase tracking-wider text-white bg-wevi-card hover:bg-gradient-to-r hover:from-purple-600 hover:to-blue-600 border border-wevi-border hover:border-transparent flex items-center justify-center gap-2 transition-all duration-300 group-hover:shadow-neon-purple/40"
                  >
                    <span>Register for {game.name}</span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-cyan-300" />
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
