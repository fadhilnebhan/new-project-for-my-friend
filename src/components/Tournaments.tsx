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

  const tournaments = [
    {
      id: "bgmi-pro-cup-12",
      badge: "BGMI",
      title: "BGMI Pro Cup #12",
      format: "Squad · 64 Teams",
      game: "BGMI" as SupportedGame,
      status: "live",
      statusLabel: "Live",
      bannerImage: "https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=800&auto=format&fit=crop",
    },
    {
      id: "valorant-clash",
      badge: "VALORANT",
      title: "Valorant Clash",
      format: "5v5 · 32 Teams",
      game: "Call of Duty" as SupportedGame,
      status: "open",
      statusLabel: "Registrations Open",
      bannerImage: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=800&auto=format&fit=crop",
    },
    {
      id: "free-fire-showdown",
      badge: "FREE FIRE",
      title: "Free Fire Showdown",
      format: "Squad · 128 Teams",
      game: "Free Fire" as SupportedGame,
      status: "upcoming",
      statusLabel: "Starts in 2d 6h",
      bannerImage: "https://images.unsplash.com/photo-1538481199705-c710c4e965fc?q=80&w=800&auto=format&fit=crop",
    },
    {
      id: "cs2-arena-cup",
      badge: "CS2",
      title: "CS2 Arena Cup",
      format: "5v5 · 16 Teams",
      game: "eFootball" as SupportedGame,
      status: "coming_soon",
      statusLabel: "Coming Soon",
      bannerImage: "https://images.unsplash.com/photo-1579952363873-27f3bade9f55?q=80&w=800&auto=format&fit=crop",
    },
  ];

  return (
    <section id="tournaments" className="py-16 bg-[#08080A] border-t border-[#1C1D22]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        {/* Section Header matching exact reference */}
        <div className="flex items-end justify-between">
          <div>
            <div className="text-[11px] font-mono tracking-[0.2em] text-[#F93822] uppercase font-bold mb-1">
              /// LIVE NOW
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-white italic tracking-tight">
              Ongoing Tournaments
            </h2>
          </div>

          <button
            onClick={() => {}}
            className="text-xs font-semibold text-zinc-400 hover:text-white flex items-center gap-1.5 transition-colors"
          >
            <span>View All</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* 4 Clean Cards matching the reference layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {tournaments.map((t) => {
            return (
              <div
                key={t.id}
                onClick={() => onRegisterTournament(t.game)}
                className="esports-card group relative cursor-pointer overflow-hidden p-4 flex flex-col justify-between min-h-[250px]"
              >
                {/* Background Artwork with Cinematic Dark Treatment */}
                <div className="absolute inset-0 z-0">
                  <Image
                    src={t.bannerImage}
                    alt={t.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105 filter brightness-50 contrast-125"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0E0F12] via-[#0E0F12]/80 to-transparent" />
                </div>

                {/* Top Badge: Game Name / Monogram */}
                <div className="relative z-10">
                  <span className="inline-block px-2.5 py-1 rounded-md text-[10px] font-black uppercase tracking-wider bg-black/70 backdrop-blur-md text-white border border-white/10">
                    {t.badge}
                  </span>
                </div>

                {/* Bottom Content Area */}
                <div className="relative z-10 space-y-3 pt-12">
                  <div>
                    <h3 className="text-base sm:text-lg font-bold text-white tracking-tight group-hover:text-[#F93822] transition-colors">
                      {t.title}
                    </h3>
                    <p className="text-xs text-zinc-400 mt-0.5 font-medium">
                      {t.format}
                    </p>
                  </div>

                  {/* Status Pills matching reference */}
                  <div className="flex items-center justify-between pt-1">
                    {t.status === "live" ? (
                      <span className="badge-live-red">
                        <span className="badge-live-red-dot" />
                        <span>Live</span>
                      </span>
                    ) : t.status === "open" ? (
                      <span className="px-3 py-1 rounded-full text-[10px] font-semibold bg-[#18191E] text-zinc-300 border border-[#2B2D36]">
                        {t.statusLabel}
                      </span>
                    ) : t.status === "upcoming" ? (
                      <span className="px-3 py-1 rounded-full text-[10px] font-semibold bg-[#18191E] text-zinc-400 border border-[#25272F]">
                        {t.statusLabel}
                      </span>
                    ) : (
                      <span className="px-3 py-1 rounded-full text-[10px] font-semibold bg-[#141518] text-zinc-500 border border-[#202126]">
                        {t.statusLabel}
                      </span>
                    )}

                    <span className="text-xs font-bold text-[#F93822] opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-1">
                      <span>Join</span>
                      <ArrowRight className="w-3 h-3" />
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Minimalist Organizer Banner */}
        <div className="esports-surface p-7 sm:p-9 flex flex-col md:flex-row items-center justify-between gap-6 relative overflow-hidden">
          <div className="space-y-2 max-w-xl z-10">
            <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
              Host Your Own Esports Championship
            </h3>
            <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed font-normal">
              Manage custom room IDs, real-time automated points calculations, and stream overlays with WEVI INDIA&apos;s referee tools.
            </p>
          </div>

          <div className="z-10 shrink-0">
            <button
              onClick={() => onRegisterTournament("BGMI")}
              className="btn-coral px-6 py-3 text-xs font-bold uppercase tracking-wider"
            >
              <span>Create Tournament</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
