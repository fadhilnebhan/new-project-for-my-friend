"use client";

import React from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { SUPPORTED_GAMES } from "@/data/games";
import { SupportedGame } from "@/types/registration";

interface SupportedGamesProps {
  onSelectGame: (game: SupportedGame) => void;
}

export const SupportedGames: React.FC<SupportedGamesProps> = ({ onSelectGame }) => {
  return (
    <section id="games" className="py-20 bg-[#08080A] border-t border-[#1C1D22]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div>
            <div className="text-[11px] font-mono tracking-[0.2em] text-[#F93822] uppercase font-bold mb-1">
              /// DIVISIONS
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-white italic tracking-tight">
              Supported Game Titles
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-zinc-400 max-w-md">
            Register your roster for official competitive leagues across India&apos;s leading mobile and tactical titles.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {SUPPORTED_GAMES.map((game) => (
            <div
              key={game.id}
              className="esports-card group overflow-hidden flex flex-col justify-between"
            >
              <div className="relative h-44 w-full bg-[#121316] overflow-hidden">
                <Image
                  src={game.bannerImage}
                  alt={game.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105 filter brightness-75 contrast-115"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#15161A] via-transparent to-transparent" />

                <div className="absolute top-3 left-3 px-2.5 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider bg-black/75 backdrop-blur-md text-[#F93822] border border-white/10">
                  {game.badge}
                </div>
              </div>

              <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                <div>
                  <div className="text-[10px] font-bold uppercase tracking-wider text-zinc-500 mb-1">
                    {game.category}
                  </div>
                  <h3 className="text-lg font-bold text-white tracking-tight group-hover:text-[#F93822] transition-colors">
                    {game.name}
                  </h3>
                  <p className="text-xs text-zinc-400 line-clamp-2 mt-1 leading-relaxed">
                    {game.shortDescription}
                  </p>
                </div>

                <div className="pt-3 border-t border-[#23252B] flex items-center justify-between">
                  <div className="flex gap-1">
                    {game.supportedFormats.map((fmt) => (
                      <span
                        key={fmt}
                        className="px-2 py-0.5 rounded text-[10px] font-semibold bg-[#1D1F25] text-zinc-400 border border-[#2B2E37]"
                      >
                        {fmt}
                      </span>
                    ))}
                  </div>

                  <button
                    onClick={() => onSelectGame(game.name)}
                    className="text-xs font-bold text-[#F93822] hover:text-white flex items-center gap-1 transition-colors"
                  >
                    <span>Register</span>
                    <ArrowRight className="w-3.5 h-3.5" />
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
