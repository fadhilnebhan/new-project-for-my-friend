"use client";

import React, { useEffect } from "react";
import { Check, Shield, User } from "lucide-react";
import { RegistrationFormData, ParticipationFormat } from "@/types/registration";

interface Step4Props {
  formData: RegistrationFormData;
  errors: Record<string, string>;
  onChange: (field: keyof RegistrationFormData, value: any) => void;
}

export const Step4RosterDetails: React.FC<Step4Props> = ({ formData, errors, onChange }) => {
  useEffect(() => {
    if (!formData.player1?.ign && formData.captainIgn) {
      onChange("player1", {
        ign: formData.captainIgn,
        uid: formData.captainUid || "",
      });
    }
  }, [formData.captainIgn, formData.captainUid]);

  const formats: { id: ParticipationFormat; title: string; subtitle: string }[] = [
    { id: "Solo", title: "Solo / 1", subtitle: "1 Player" },
    { id: "Duo", title: "Duo / 2", subtitle: "2 Players" },
    { id: "Squad", title: "Squad / 4", subtitle: "4 Players" },
  ];

  const isEfootball = formData.selectedGame === "eFootball";

  const handlePlayerChange = (
    playerKey: "player1" | "player2" | "player3" | "player4",
    field: "ign" | "uid",
    value: string
  ) => {
    const current = formData[playerKey] || { ign: "", uid: "" };
    onChange(playerKey, {
      ...current,
      [field]: value,
    });
  };

  return (
    <div className="space-y-5 animate-in fade-in duration-200">
      <div className="border-b border-[#222222] pb-3">
        <h3 className="text-base font-bold text-white tracking-tight">
          Step 4: Format & Roster Details
        </h3>
        <p className="text-xs text-zinc-400 mt-0.5">
          Select your tournament format. Player fields will dynamically adapt.
        </p>
      </div>

      {/* Format Selector Pills */}
      <div>
        <label className="block text-xs font-semibold text-zinc-300 mb-2">
          Participation Format <span className="text-red-400">*</span>
        </label>

        <div className="grid grid-cols-3 gap-2.5">
          {formats.map((fmt) => {
            const isSelected = formData.participationFormat === fmt.id;
            const isDisabled = isEfootball && fmt.id !== "Solo";

            return (
              <div
                key={fmt.id}
                onClick={() => {
                  if (!isDisabled) {
                    onChange("participationFormat", fmt.id);
                  }
                }}
                className={`p-3 rounded-xl border text-center transition-all ${
                  isDisabled
                    ? "opacity-40 cursor-not-allowed bg-[#121212] border-[#222222]"
                    : isSelected
                    ? "bg-[#1C1C1C] border-[#FACC15] ring-1 ring-[#FACC15] cursor-pointer"
                    : "bg-[#141414] border-[#2A2A2A] hover:border-[#383838] cursor-pointer"
                }`}
              >
                <div className="text-xs font-bold text-white mb-0.5">{fmt.title}</div>
                <div className="text-[10px] text-zinc-400">{fmt.subtitle}</div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Dynamic Player Inputs */}
      <div className="space-y-4 pt-1">
        {/* Player 1 (Captain) */}
        <div className="p-3.5 rounded-xl bg-[#141414] border border-[#2A2A2A] space-y-3">
          <div className="flex items-center justify-between border-b border-[#222222] pb-2">
            <span className="text-xs font-bold text-white flex items-center gap-1.5">
              <Shield className="w-3.5 h-3.5 text-[#FACC15]" />
              <span>Player 1 (Team Captain)</span>
            </span>
            <span className="text-[10px] text-[#FACC15] font-semibold uppercase">Captain Slot</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="block text-[11px] font-semibold text-zinc-400 mb-1">
                IGN (In-Game Name) <span className="text-red-400">*</span>
              </label>
              <input
                type="text"
                value={formData.player1?.ign || ""}
                onChange={(e) => handlePlayerChange("player1", "ign", e.target.value)}
                placeholder="e.g. WEVI_CAPTAIN"
                className={`w-full px-3 py-2 rounded-lg bg-[#181818] border text-xs sm:text-sm text-white focus:outline-none ${
                  errors["player1.ign"] ? "border-red-500" : "border-[#2A2A2A] focus:border-[#FACC15]"
                }`}
              />
              {errors["player1.ign"] && (
                <p className="text-[10px] text-red-400 mt-1">{errors["player1.ign"]}</p>
              )}
            </div>

            <div>
              <label className="block text-[11px] font-semibold text-zinc-400 mb-1">
                UID / Game ID <span className="text-red-400">*</span>
              </label>
              <input
                type="text"
                value={formData.player1?.uid || ""}
                onChange={(e) => handlePlayerChange("player1", "uid", e.target.value)}
                placeholder="e.g. 5182947192"
                className={`w-full px-3 py-2 rounded-lg bg-[#181818] border text-xs sm:text-sm text-white focus:outline-none ${
                  errors["player1.uid"] ? "border-red-500" : "border-[#2A2A2A] focus:border-[#FACC15]"
                }`}
              />
              {errors["player1.uid"] && (
                <p className="text-[10px] text-red-400 mt-1">{errors["player1.uid"]}</p>
              )}
            </div>
          </div>
        </div>

        {/* Player 2 (Duo & Squad) */}
        {(formData.participationFormat === "Duo" || formData.participationFormat === "Squad") && (
          <div className="p-3.5 rounded-xl bg-[#141414] border border-[#2A2A2A] space-y-3">
            <div className="flex items-center justify-between border-b border-[#222222] pb-2">
              <span className="text-xs font-bold text-white flex items-center gap-1.5">
                <User className="w-3.5 h-3.5 text-zinc-400" />
                <span>Player 2</span>
              </span>
              <span className="text-[10px] text-zinc-400 font-semibold uppercase">Required</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-[11px] font-semibold text-zinc-400 mb-1">
                  IGN (In-Game Name) <span className="text-red-400">*</span>
                </label>
                <input
                  type="text"
                  value={formData.player2?.ign || ""}
                  onChange={(e) => handlePlayerChange("player2", "ign", e.target.value)}
                  placeholder="e.g. WEVI_BLASTER"
                  className={`w-full px-3 py-2 rounded-lg bg-[#181818] border text-xs sm:text-sm text-white focus:outline-none ${
                    errors["player2.ign"] ? "border-red-500" : "border-[#2A2A2A] focus:border-[#FACC15]"
                  }`}
                />
                {errors["player2.ign"] && (
                  <p className="text-[10px] text-red-400 mt-1">{errors["player2.ign"]}</p>
                )}
              </div>

              <div>
                <label className="block text-[11px] font-semibold text-zinc-400 mb-1">
                  UID / Game ID <span className="text-red-400">*</span>
                </label>
                <input
                  type="text"
                  value={formData.player2?.uid || ""}
                  onChange={(e) => handlePlayerChange("player2", "uid", e.target.value)}
                  placeholder="e.g. 5293817492"
                  className={`w-full px-3 py-2 rounded-lg bg-[#181818] border text-xs sm:text-sm text-white focus:outline-none ${
                    errors["player2.uid"] ? "border-red-500" : "border-[#2A2A2A] focus:border-[#FACC15]"
                  }`}
                />
                {errors["player2.uid"] && (
                  <p className="text-[10px] text-red-400 mt-1">{errors["player2.uid"]}</p>
                )}
              </div>
            </div>
          </div>
        )}

        {/* Players 3 & 4 (Squad only) */}
        {formData.participationFormat === "Squad" && (
          <>
            <div className="p-3.5 rounded-xl bg-[#141414] border border-[#2A2A2A] space-y-3">
              <div className="flex items-center justify-between border-b border-[#222222] pb-2">
                <span className="text-xs font-bold text-white flex items-center gap-1.5">
                  <User className="w-3.5 h-3.5 text-zinc-400" />
                  <span>Player 3</span>
                </span>
                <span className="text-[10px] text-zinc-400 font-semibold uppercase">Required</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-[11px] font-semibold text-zinc-400 mb-1">
                    IGN (In-Game Name) <span className="text-red-400">*</span>
                  </label>
                  <input
                    type="text"
                    value={formData.player3?.ign || ""}
                    onChange={(e) => handlePlayerChange("player3", "ign", e.target.value)}
                    placeholder="e.g. WEVI_SNIPER"
                    className={`w-full px-3 py-2 rounded-lg bg-[#181818] border text-xs sm:text-sm text-white focus:outline-none ${
                      errors["player3.ign"] ? "border-red-500" : "border-[#2A2A2A] focus:border-[#FACC15]"
                    }`}
                  />
                  {errors["player3.ign"] && (
                    <p className="text-[10px] text-red-400 mt-1">{errors["player3.ign"]}</p>
                  )}
                </div>

                <div>
                  <label className="block text-[11px] font-semibold text-zinc-400 mb-1">
                    UID / Game ID <span className="text-red-400">*</span>
                  </label>
                  <input
                    type="text"
                    value={formData.player3?.uid || ""}
                    onChange={(e) => handlePlayerChange("player3", "uid", e.target.value)}
                    placeholder="e.g. 5394827163"
                    className={`w-full px-3 py-2 rounded-lg bg-[#181818] border text-xs sm:text-sm text-white focus:outline-none ${
                      errors["player3.uid"] ? "border-red-500" : "border-[#2A2A2A] focus:border-[#FACC15]"
                    }`}
                  />
                  {errors["player3.uid"] && (
                    <p className="text-[10px] text-red-400 mt-1">{errors["player3.uid"]}</p>
                  )}
                </div>
              </div>
            </div>

            <div className="p-3.5 rounded-xl bg-[#141414] border border-[#2A2A2A] space-y-3">
              <div className="flex items-center justify-between border-b border-[#222222] pb-2">
                <span className="text-xs font-bold text-white flex items-center gap-1.5">
                  <User className="w-3.5 h-3.5 text-zinc-400" />
                  <span>Player 4</span>
                </span>
                <span className="text-[10px] text-zinc-400 font-semibold uppercase">Required</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-[11px] font-semibold text-zinc-400 mb-1">
                    IGN (In-Game Name) <span className="text-red-400">*</span>
                  </label>
                  <input
                    type="text"
                    value={formData.player4?.ign || ""}
                    onChange={(e) => handlePlayerChange("player4", "ign", e.target.value)}
                    placeholder="e.g. WEVI_RUSHER"
                    className={`w-full px-3 py-2 rounded-lg bg-[#181818] border text-xs sm:text-sm text-white focus:outline-none ${
                      errors["player4.ign"] ? "border-red-500" : "border-[#2A2A2A] focus:border-[#FACC15]"
                    }`}
                  />
                  {errors["player4.ign"] && (
                    <p className="text-[10px] text-red-400 mt-1">{errors["player4.ign"]}</p>
                  )}
                </div>

                <div>
                  <label className="block text-[11px] font-semibold text-zinc-400 mb-1">
                    UID / Game ID <span className="text-red-400">*</span>
                  </label>
                  <input
                    type="text"
                    value={formData.player4?.uid || ""}
                    onChange={(e) => handlePlayerChange("player4", "uid", e.target.value)}
                    placeholder="e.g. 5495837261"
                    className={`w-full px-3 py-2 rounded-lg bg-[#181818] border text-xs sm:text-sm text-white focus:outline-none ${
                      errors["player4.uid"] ? "border-red-500" : "border-[#2A2A2A] focus:border-[#FACC15]"
                    }`}
                  />
                  {errors["player4.uid"] && (
                    <p className="text-[10px] text-red-400 mt-1">{errors["player4.uid"]}</p>
                  )}
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};
