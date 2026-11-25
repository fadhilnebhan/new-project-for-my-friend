"use client";

import React from "react";
import { Edit2, Shield, Users, Trophy, CheckCircle2, AlertCircle } from "lucide-react";
import { RegistrationFormData } from "@/types/registration";

interface Step6Props {
  formData: RegistrationFormData;
  onEditStep: (stepNumber: number) => void;
  submissionError?: string | null;
}

export const Step6ReviewSubmit: React.FC<Step6Props> = ({
  formData,
  onEditStep,
  submissionError,
}) => {
  return (
    <div className="space-y-5 animate-in fade-in duration-200">
      <div className="border-b border-[#222222] pb-3">
        <h3 className="text-base font-bold text-white tracking-tight">
          Step 6: Review & Final Confirmation
        </h3>
        <p className="text-xs text-zinc-400 mt-0.5">
          Verify your team roster details before final submission. Click Edit on any card to update.
        </p>
      </div>

      {submissionError && (
        <div className="p-3.5 rounded-xl bg-red-950/40 border border-red-500/50 flex items-center gap-3 text-xs text-red-300">
          <AlertCircle className="w-4 h-4 text-red-400 shrink-0" />
          <span>{submissionError}</span>
        </div>
      )}

      {/* Summary Cards */}
      <div className="space-y-3">
        {/* Team & Game */}
        <div className="p-4 rounded-xl bg-[#141414] border border-[#2A2A2A] space-y-3">
          <div className="flex items-center justify-between border-b border-[#222222] pb-2">
            <span className="text-xs font-bold uppercase tracking-wider text-[#FACC15] flex items-center gap-1.5">
              <Trophy className="w-3.5 h-3.5" />
              <span>Tournament & Team</span>
            </span>
            <button
              type="button"
              onClick={() => onEditStep(1)}
              className="text-[11px] font-semibold text-zinc-400 hover:text-white flex items-center gap-1 transition-colors"
            >
              <Edit2 className="w-3 h-3" />
              <span>Edit</span>
            </button>
          </div>

          <div className="grid grid-cols-3 gap-3 text-xs">
            <div>
              <div className="text-[10px] text-zinc-500 uppercase font-semibold">Team Name</div>
              <div className="text-white font-bold text-sm mt-0.5">{formData.teamName}</div>
            </div>
            <div>
              <div className="text-[10px] text-zinc-500 uppercase font-semibold">Game</div>
              <div className="text-[#FACC15] font-bold text-sm mt-0.5">{formData.selectedGame}</div>
            </div>
            <div>
              <div className="text-[10px] text-zinc-500 uppercase font-semibold">Format</div>
              <div className="text-white font-bold text-sm mt-0.5">{formData.participationFormat}</div>
            </div>
          </div>
        </div>

        {/* Captain Details */}
        <div className="p-4 rounded-xl bg-[#141414] border border-[#2A2A2A] space-y-3">
          <div className="flex items-center justify-between border-b border-[#222222] pb-2">
            <span className="text-xs font-bold uppercase tracking-wider text-zinc-300 flex items-center gap-1.5">
              <Shield className="w-3.5 h-3.5 text-[#FACC15]" />
              <span>Team Captain</span>
            </span>
            <button
              type="button"
              onClick={() => onEditStep(2)}
              className="text-[11px] font-semibold text-zinc-400 hover:text-white flex items-center gap-1 transition-colors"
            >
              <Edit2 className="w-3 h-3" />
              <span>Edit</span>
            </button>
          </div>

          <div className="grid grid-cols-2 gap-3 text-xs">
            <div>
              <div className="text-[10px] text-zinc-500 uppercase font-semibold">Real Name</div>
              <div className="text-white font-medium mt-0.5">{formData.captainRealName}</div>
            </div>
            <div>
              <div className="text-[10px] text-zinc-500 uppercase font-semibold">IGN</div>
              <div className="text-white font-bold mt-0.5">{formData.captainIgn}</div>
            </div>
            <div>
              <div className="text-[10px] text-zinc-500 uppercase font-semibold">UID / Game ID</div>
              <div className="text-zinc-300 font-mono mt-0.5">{formData.captainUid}</div>
            </div>
            <div>
              <div className="text-[10px] text-zinc-500 uppercase font-semibold">WhatsApp</div>
              <div className="text-[#FACC15] font-mono mt-0.5">+91 {formData.captainWhatsapp}</div>
            </div>
          </div>
        </div>

        {/* Roster */}
        <div className="p-4 rounded-xl bg-[#141414] border border-[#2A2A2A] space-y-3">
          <div className="flex items-center justify-between border-b border-[#222222] pb-2">
            <span className="text-xs font-bold uppercase tracking-wider text-zinc-300 flex items-center gap-1.5">
              <Users className="w-3.5 h-3.5 text-[#FACC15]" />
              <span>Roster ({formData.participationFormat})</span>
            </span>
            <button
              type="button"
              onClick={() => onEditStep(4)}
              className="text-[11px] font-semibold text-zinc-400 hover:text-white flex items-center gap-1 transition-colors"
            >
              <Edit2 className="w-3 h-3" />
              <span>Edit</span>
            </button>
          </div>

          <div className="space-y-1.5 text-xs">
            <div className="flex items-center justify-between p-2 rounded-lg bg-[#181818]">
              <span className="font-semibold text-white">P1: {formData.player1?.ign}</span>
              <span className="font-mono text-zinc-400 text-[11px]">UID: {formData.player1?.uid}</span>
            </div>

            {(formData.participationFormat === "Duo" || formData.participationFormat === "Squad") && (
              <div className="flex items-center justify-between p-2 rounded-lg bg-[#181818]">
                <span className="font-semibold text-white">P2: {formData.player2?.ign}</span>
                <span className="font-mono text-zinc-400 text-[11px]">UID: {formData.player2?.uid}</span>
              </div>
            )}

            {formData.participationFormat === "Squad" && (
              <>
                <div className="flex items-center justify-between p-2 rounded-lg bg-[#181818]">
                  <span className="font-semibold text-white">P3: {formData.player3?.ign}</span>
                  <span className="font-mono text-zinc-400 text-[11px]">UID: {formData.player3?.uid}</span>
                </div>
                <div className="flex items-center justify-between p-2 rounded-lg bg-[#181818]">
                  <span className="font-semibold text-white">P4: {formData.player4?.ign}</span>
                  <span className="font-mono text-zinc-400 text-[11px]">UID: {formData.player4?.uid}</span>
                </div>
              </>
            )}
          </div>
        </div>

        {/* Declaration */}
        <div className="p-3 rounded-xl bg-[#161616] border border-[#2A2A2A] flex items-center justify-between">
          <div className="flex items-center gap-2 text-xs text-white font-semibold">
            <CheckCircle2 className="w-4 h-4 text-[#FACC15]" />
            <span>Declaration Accepted (&ldquo;Yes, I agree&rdquo;)</span>
          </div>
          <button
            type="button"
            onClick={() => onEditStep(5)}
            className="text-[11px] text-zinc-400 hover:text-white underline"
          >
            Review
          </button>
        </div>
      </div>
    </div>
  );
};
