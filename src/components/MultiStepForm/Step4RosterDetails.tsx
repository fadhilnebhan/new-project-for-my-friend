"use client";

import React, { useEffect } from "react";
import { Users, User, Hash, AlertCircle, Shield, Sparkles, Check } from "lucide-react";
import { RegistrationFormData, ParticipationFormat, PlayerDetails } from "@/types/registration";

interface Step4Props {
  formData: RegistrationFormData;
  errors: Record<string, string>;
  onChange: (field: keyof RegistrationFormData, value: any) => void;
}

export const Step4RosterDetails: React.FC<Step4Props> = ({ formData, errors, onChange }) => {
  // Ensure Player 1 is synchronized with Captain IGN & UID if blank
  useEffect(() => {
    if (!formData.player1?.ign && formData.captainIgn) {
      onChange("player1", {
        ign: formData.captainIgn,
        uid: formData.captainUid || "",
      });
    }
  }, [formData.captainIgn, formData.captainUid]);

  const formats: { id: ParticipationFormat; title: string; subtitle: string; icon: string }[] = [
    { id: "Solo", title: "Solo / 1", subtitle: "Single Player Showdown", icon: "1 Player" },
    { id: "Duo", title: "Duo / 2", subtitle: "2-Player Tactical Pair", icon: "2 Players" },
    { id: "Squad", title: "Squad / 4", subtitle: "4-Player Standard Roster", icon: "4 Players" },
  ];

  // If game is eFootball, format is strictly Solo
  const isEfootball = formData.selectedGame === "eFootball";

  const handlePlayerChange = (playerKey: "player1" | "player2" | "player3" | "player4", field: "ign" | "uid", value: string) => {
    const current = formData[playerKey] || { ign: "", uid: "" };
    onChange(playerKey, {
      ...current,
      [field]: value,
    });
  };

  return (
    <div className="space-y-6 animate-in fade-in duration-300">
      <div className="border-b border-wevi-border/60 pb-4">
        <h3 className="text-xl font-black uppercase tracking-tight text-white flex items-center gap-2">
          <span>Step 4: Format & Roster Details</span>
        </h3>
        <p className="text-xs text-gray-400 mt-1">
          Select your tournament participation format. The roster input fields will dynamically adapt.
        </p>
      </div>

      {/* Format Selection Cards */}
      <div>
        <label className="block text-xs font-bold uppercase tracking-wider text-gray-300 mb-2">
          Select Participation Format <span className="text-red-400">*</span>
        </label>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
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
                className={`p-4 rounded-xl border transition-all duration-200 relative ${
                  isDisabled
                    ? "opacity-40 cursor-not-allowed bg-wevi-darker border-wevi-border/50"
                    : isSelected
                    ? "bg-purple-950/50 border-purple-500 shadow-neon-purple ring-2 ring-purple-500/40 cursor-pointer"
                    : "bg-wevi-darker/90 border-wevi-border hover:border-purple-500/40 cursor-pointer"
                }`}
              >
                <div className="flex items-center justify-between mb-1">
                  <span className="text-xs font-black uppercase tracking-wider text-white">
                    {fmt.title}
                  </span>
                  {isSelected && <Check className="w-4 h-4 text-wevi-neon-cyan" />}
                </div>
                <div className="text-[11px] text-gray-400">{fmt.subtitle}</div>
                {isDisabled && (
                  <div className="text-[10px] text-yellow-400 mt-1 font-semibold">
                    (Solo only for eFootball)
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* Dynamic Player Fields based on Format */}
      <div className="space-y-5 pt-2">
        <div className="flex items-center justify-between">
          <div className="text-xs font-bold uppercase tracking-wider text-purple-400 flex items-center gap-2">
            <Sparkles className="w-3.5 h-3.5" />
            <span>
              Required Players for {formData.participationFormat} ({formData.participationFormat === "Solo" ? 1 : formData.participationFormat === "Duo" ? 2 : 4} Players)
            </span>
          </div>
          <span className="text-[10px] text-gray-400">All player details must be verified</span>
        </div>

        {/* Player 1 (Team Captain) - Always visible */}
        <div className="p-4 rounded-xl bg-wevi-darker border border-wevi-border/70 space-y-3">
          <div className="flex items-center justify-between border-b border-white/5 pb-2">
            <span className="text-xs font-bold uppercase text-white flex items-center gap-1.5">
              <Shield className="w-3.5 h-3.5 text-purple-400" />
              <span>Player 1 / Team Captain</span>
            </span>
            <span className="text-[10px] text-emerald-400 font-semibold uppercase">Captain Slot</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="block text-[11px] font-semibold text-gray-400 mb-1">
                Player 1 In-Game Name (IGN) <span className="text-red-400">*</span>
              </label>
              <input
                type="text"
                value={formData.player1?.ign || ""}
                onChange={(e) => handlePlayerChange("player1", "ign", e.target.value)}
                placeholder="e.g. WEVI_CAPTAIN"
                className={`w-full px-3.5 py-2.5 rounded-lg bg-wevi-card border text-sm text-white focus:outline-none ${
                  errors["player1.ign"]
                    ? "border-red-500"
                    : "border-wevi-border focus:border-purple-500"
                }`}
              />
              {errors["player1.ign"] && (
                <p className="text-[11px] text-red-400 mt-1">{errors["player1.ign"]}</p>
              )}
            </div>

            <div>
              <label className="block text-[11px] font-semibold text-gray-400 mb-1">
                Player 1 UID / ID <span className="text-red-400">*</span>
              </label>
              <input
                type="text"
                value={formData.player1?.uid || ""}
                onChange={(e) => handlePlayerChange("player1", "uid", e.target.value)}
                placeholder="e.g. 5182947192"
                className={`w-full px-3.5 py-2.5 rounded-lg bg-wevi-card border text-sm text-white focus:outline-none ${
                  errors["player1.uid"]
                    ? "border-red-500"
                    : "border-wevi-border focus:border-purple-500"
                }`}
              />
              {errors["player1.uid"] && (
                <p className="text-[11px] text-red-400 mt-1">{errors["player1.uid"]}</p>
              )}
            </div>
          </div>
        </div>

        {/* Player 2 - Visible for Duo and Squad */}
        {(formData.participationFormat === "Duo" || formData.participationFormat === "Squad") && (
          <div className="p-4 rounded-xl bg-wevi-darker border border-wevi-border/70 space-y-3 animate-in fade-in duration-200">
            <div className="flex items-center justify-between border-b border-white/5 pb-2">
              <span className="text-xs font-bold uppercase text-white flex items-center gap-1.5">
                <User className="w-3.5 h-3.5 text-blue-400" />
                <span>Player 2</span>
              </span>
              <span className="text-[10px] text-blue-400 font-semibold uppercase">Required</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-[11px] font-semibold text-gray-400 mb-1">
                  Player 2 In-Game Name (IGN) <span className="text-red-400">*</span>
                </label>
                <input
                  type="text"
                  value={formData.player2?.ign || ""}
                  onChange={(e) => handlePlayerChange("player2", "ign", e.target.value)}
                  placeholder="e.g. WEVI_BLASTER"
                  className={`w-full px-3.5 py-2.5 rounded-lg bg-wevi-card border text-sm text-white focus:outline-none ${
                    errors["player2.ign"]
                      ? "border-red-500"
                      : "border-wevi-border focus:border-purple-500"
                  }`}
                />
                {errors["player2.ign"] && (
                  <p className="text-[11px] text-red-400 mt-1">{errors["player2.ign"]}</p>
                )}
              </div>

              <div>
                <label className="block text-[11px] font-semibold text-gray-400 mb-1">
                  Player 2 UID / ID <span className="text-red-400">*</span>
                </label>
                <input
                  type="text"
                  value={formData.player2?.uid || ""}
                  onChange={(e) => handlePlayerChange("player2", "uid", e.target.value)}
                  placeholder="e.g. 5293817492"
                  className={`w-full px-3.5 py-2.5 rounded-lg bg-wevi-card border text-sm text-white focus:outline-none ${
                    errors["player2.uid"]
                      ? "border-red-500"
                      : "border-wevi-border focus:border-purple-500"
                  }`}
                />
                {errors["player2.uid"] && (
                  <p className="text-[11px] text-red-400 mt-1">{errors["player2.uid"]}</p>
                )}
              </div>
            </div>
          </div>
        )}

        {/* Player 3 & Player 4 - Visible for Squad only */}
        {formData.participationFormat === "Squad" && (
          <>
            {/* Player 3 */}
            <div className="p-4 rounded-xl bg-wevi-darker border border-wevi-border/70 space-y-3 animate-in fade-in duration-200">
              <div className="flex items-center justify-between border-b border-white/5 pb-2">
                <span className="text-xs font-bold uppercase text-white flex items-center gap-1.5">
                  <User className="w-3.5 h-3.5 text-cyan-400" />
                  <span>Player 3</span>
                </span>
                <span className="text-[10px] text-cyan-400 font-semibold uppercase">Required</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-[11px] font-semibold text-gray-400 mb-1">
                    Player 3 In-Game Name (IGN) <span className="text-red-400">*</span>
                  </label>
                  <input
                    type="text"
                    value={formData.player3?.ign || ""}
                    onChange={(e) => handlePlayerChange("player3", "ign", e.target.value)}
                    placeholder="e.g. WEVI_SNIPER"
                    className={`w-full px-3.5 py-2.5 rounded-lg bg-wevi-card border text-sm text-white focus:outline-none ${
                      errors["player3.ign"]
                        ? "border-red-500"
                        : "border-wevi-border focus:border-purple-500"
                    }`}
                  />
                  {errors["player3.ign"] && (
                    <p className="text-[11px] text-red-400 mt-1">{errors["player3.ign"]}</p>
                  )}
                </div>

                <div>
                  <label className="block text-[11px] font-semibold text-gray-400 mb-1">
                    Player 3 UID / ID <span className="text-red-400">*</span>
                  </label>
                  <input
                    type="text"
                    value={formData.player3?.uid || ""}
                    onChange={(e) => handlePlayerChange("player3", "uid", e.target.value)}
                    placeholder="e.g. 5394827163"
                    className={`w-full px-3.5 py-2.5 rounded-lg bg-wevi-card border text-sm text-white focus:outline-none ${
                      errors["player3.uid"]
                        ? "border-red-500"
                        : "border-wevi-border focus:border-purple-500"
                    }`}
                  />
                  {errors["player3.uid"] && (
                    <p className="text-[11px] text-red-400 mt-1">{errors["player3.uid"]}</p>
                  )}
                </div>
              </div>
            </div>

            {/* Player 4 */}
            <div className="p-4 rounded-xl bg-wevi-darker border border-wevi-border/70 space-y-3 animate-in fade-in duration-200">
              <div className="flex items-center justify-between border-b border-white/5 pb-2">
                <span className="text-xs font-bold uppercase text-white flex items-center gap-1.5">
                  <User className="w-3.5 h-3.5 text-pink-400" />
                  <span>Player 4</span>
                </span>
                <span className="text-[10px] text-pink-400 font-semibold uppercase">Required</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-[11px] font-semibold text-gray-400 mb-1">
                    Player 4 In-Game Name (IGN) <span className="text-red-400">*</span>
                  </label>
                  <input
                    type="text"
                    value={formData.player4?.ign || ""}
                    onChange={(e) => handlePlayerChange("player4", "ign", e.target.value)}
                    placeholder="e.g. WEVI_RUSHER"
                    className={`w-full px-3.5 py-2.5 rounded-lg bg-wevi-card border text-sm text-white focus:outline-none ${
                      errors["player4.ign"]
                        ? "border-red-500"
                        : "border-wevi-border focus:border-purple-500"
                    }`}
                  />
                  {errors["player4.ign"] && (
                    <p className="text-[11px] text-red-400 mt-1">{errors["player4.ign"]}</p>
                  )}
                </div>

                <div>
                  <label className="block text-[11px] font-semibold text-gray-400 mb-1">
                    Player 4 UID / ID <span className="text-red-400">*</span>
                  </label>
                  <input
                    type="text"
                    value={formData.player4?.uid || ""}
                    onChange={(e) => handlePlayerChange("player4", "uid", e.target.value)}
                    placeholder="e.g. 5495837261"
                    className={`w-full px-3.5 py-2.5 rounded-lg bg-wevi-card border text-sm text-white focus:outline-none ${
                      errors["player4.uid"]
                        ? "border-red-500"
                        : "border-wevi-border focus:border-purple-500"
                    }`}
                  />
                  {errors["player4.uid"] && (
                    <p className="text-[11px] text-red-400 mt-1">{errors["player4.uid"]}</p>
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
