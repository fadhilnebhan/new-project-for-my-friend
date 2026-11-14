"use client";

import React from "react";
import Image from "next/image";
import { Gamepad2, CheckCircle2, AlertCircle } from "lucide-react";
import { SUPPORTED_GAMES } from "@/data/games";
import { RegistrationFormData, SupportedGame } from "@/types/registration";

interface Step3Props {
  formData: RegistrationFormData;
  errors: Record<string, string>;
  onChange: (field: keyof RegistrationFormData, value: any) => void;
}

export const Step3GameSelection: React.FC<Step3Props> = ({ formData, errors, onChange }) => {
  const handleGameSelect = (gameName: SupportedGame) => {
    onChange("selectedGame", gameName);

    // If eFootball is chosen, auto set format to Solo
    if (gameName === "eFootball") {
      onChange("participationFormat", "Solo");
    }
  };

  return (
    <div className="space-y-6 animate-in fade-in duration-300">
      <div className="border-b border-wevi-border/60 pb-4">
        <h3 className="text-xl font-black uppercase tracking-tight text-white flex items-center gap-2">
          <span>Step 3: Game Selection</span>
        </h3>
        <p className="text-xs text-gray-400 mt-1">
          Choose the official tournament game you and your roster are registering to play.
        </p>
      </div>

      {errors.selectedGame && (
        <div className="p-3 rounded-xl bg-red-950/40 border border-red-500/40 flex items-center gap-2 text-xs text-red-300">
          <AlertCircle className="w-4 h-4 shrink-0 text-red-400" />
          <span>{errors.selectedGame}</span>
        </div>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {SUPPORTED_GAMES.map((game) => {
          const isSelected = formData.selectedGame === game.name;

          return (
            <div
              key={game.id}
              onClick={() => handleGameSelect(game.name)}
              className={`relative cursor-pointer rounded-2xl overflow-hidden border p-4 transition-all duration-300 group flex items-center gap-4 ${
                isSelected
                  ? "bg-purple-950/40 border-purple-500 shadow-neon-purple ring-2 ring-purple-500/50"
                  : "bg-wevi-darker/90 border-wevi-border hover:border-purple-500/40 hover:bg-wevi-card"
              }`}
            >
              {/* Thumbnail */}
              <div className="relative w-20 h-20 rounded-xl overflow-hidden shrink-0 bg-wevi-card border border-white/10">
                <Image
                  src={game.thumbnail}
                  alt={game.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform"
                />
              </div>

              {/* Game details */}
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between gap-1 mb-1">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-purple-400 truncate">
                    {game.category}
                  </span>
                  {isSelected && (
                    <CheckCircle2 className="w-4 h-4 text-wevi-neon-cyan shrink-0" />
                  )}
                </div>

                <h4 className="text-base font-black text-white uppercase tracking-tight group-hover:text-purple-300 transition-colors">
                  {game.name}
                </h4>

                <div className="flex items-center gap-1.5 mt-2">
                  {game.supportedFormats.map((fmt) => (
                    <span
                      key={fmt}
                      className="px-1.5 py-0.5 rounded text-[9px] font-bold uppercase bg-white/5 border border-white/10 text-gray-400"
                    >
                      {fmt}
                    </span>
                  ))}
                </div>
              </div>

              {/* Active Glow border strip */}
              {isSelected && (
                <div className="absolute top-0 bottom-0 left-0 w-1 bg-gradient-to-b from-purple-500 to-cyan-400" />
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};
