"use client";

import React from "react";
import Image from "next/image";
import { CheckCircle2, AlertCircle } from "lucide-react";
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
    if (gameName === "eFootball") {
      onChange("participationFormat", "Solo");
    }
  };

  return (
    <div className="space-y-5 animate-in fade-in duration-200">
      <div className="border-b border-[#222222] pb-3">
        <h3 className="text-base font-bold text-white tracking-tight">
          Step 3: Game Selection
        </h3>
        <p className="text-xs text-zinc-400 mt-0.5">
          Select the tournament game you and your team are registering to compete in.
        </p>
      </div>

      {errors.selectedGame && (
        <div className="p-3 rounded-xl bg-red-950/40 border border-red-500/40 flex items-center gap-2 text-xs text-red-300">
          <AlertCircle className="w-4 h-4 shrink-0 text-red-400" />
          <span>{errors.selectedGame}</span>
        </div>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {SUPPORTED_GAMES.map((game) => {
          const isSelected = formData.selectedGame === game.name;

          return (
            <div
              key={game.id}
              onClick={() => handleGameSelect(game.name)}
              className={`relative cursor-pointer rounded-xl overflow-hidden border p-3.5 transition-all flex items-center gap-3.5 ${
                isSelected
                  ? "bg-[#1C1C1C] border-[#FACC15] ring-1 ring-[#FACC15]"
                  : "bg-[#141414] border-[#2A2A2A] hover:border-[#3A3A3A] hover:bg-[#181818]"
              }`}
            >
              {/* Thumbnail */}
              <div className="relative w-14 h-14 rounded-lg overflow-hidden shrink-0 bg-black border border-[#2A2A2A]">
                <Image
                  src={game.thumbnail}
                  alt={game.name}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Game details */}
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between gap-1 mb-0.5">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-zinc-500 truncate">
                    {game.category}
                  </span>
                  {isSelected && (
                    <CheckCircle2 className="w-4 h-4 text-[#FACC15] shrink-0" />
                  )}
                </div>

                <h4 className="text-sm font-bold text-white tracking-tight">
                  {game.name}
                </h4>

                <div className="flex items-center gap-1 mt-1">
                  {game.supportedFormats.map((fmt) => (
                    <span
                      key={fmt}
                      className="px-1.5 py-0.5 rounded text-[9px] font-semibold bg-[#222222] text-zinc-400"
                    >
                      {fmt}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
