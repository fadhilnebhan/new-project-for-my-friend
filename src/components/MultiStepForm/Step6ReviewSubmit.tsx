"use client";

import React from "react";
import { Edit2, Shield, Users, Mail, Phone, Hash, Trophy, CheckCircle2, AlertCircle } from "lucide-react";
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
    <div className="space-y-6 animate-in fade-in duration-300">
      <div className="border-b border-wevi-border/60 pb-4">
        <h3 className="text-xl font-black uppercase tracking-tight text-white flex items-center gap-2">
          <span>Step 6: Review & Final Confirmation</span>
        </h3>
        <p className="text-xs text-gray-400 mt-1">
          Carefully verify all tournament registration details. You can click Edit to modify any section.
        </p>
      </div>

      {submissionError && (
        <div className="p-4 rounded-xl bg-red-950/40 border border-red-500/50 flex items-center gap-3 text-xs text-red-300">
          <AlertCircle className="w-5 h-5 text-red-400 shrink-0" />
          <span>{submissionError}</span>
        </div>
      )}

      {/* Summary Cards */}
      <div className="space-y-4">
        {/* Section 1: Team & Game Info */}
        <div className="p-4 rounded-xl bg-wevi-darker border border-wevi-border/70 space-y-3">
          <div className="flex items-center justify-between border-b border-white/5 pb-2">
            <span className="text-xs font-bold uppercase tracking-wider text-purple-400 flex items-center gap-1.5">
              <Trophy className="w-3.5 h-3.5" />
              <span>Tournament & Team</span>
            </span>
            <button
              type="button"
              onClick={() => onEditStep(1)}
              className="text-[11px] font-semibold text-purple-400 hover:text-purple-300 flex items-center gap-1 transition-colors"
            >
              <Edit2 className="w-3 h-3" />
              <span>Edit</span>
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
            <div>
              <div className="text-[10px] text-gray-500 uppercase font-semibold">Team Name</div>
              <div className="text-white font-bold text-sm mt-0.5">{formData.teamName}</div>
            </div>
            <div>
              <div className="text-[10px] text-gray-500 uppercase font-semibold">Selected Game</div>
              <div className="text-white font-bold text-sm mt-0.5 text-cyan-300">
                {formData.selectedGame}
              </div>
            </div>
            <div>
              <div className="text-[10px] text-gray-500 uppercase font-semibold">Format</div>
              <div className="text-white font-bold text-sm mt-0.5">
                {formData.participationFormat}
              </div>
            </div>
          </div>
        </div>

        {/* Section 2: Captain Information */}
        <div className="p-4 rounded-xl bg-wevi-darker border border-wevi-border/70 space-y-3">
          <div className="flex items-center justify-between border-b border-white/5 pb-2">
            <span className="text-xs font-bold uppercase tracking-wider text-blue-400 flex items-center gap-1.5">
              <Shield className="w-3.5 h-3.5" />
              <span>Team Captain Details</span>
            </span>
            <button
              type="button"
              onClick={() => onEditStep(2)}
              className="text-[11px] font-semibold text-purple-400 hover:text-purple-300 flex items-center gap-1 transition-colors"
            >
              <Edit2 className="w-3 h-3" />
              <span>Edit</span>
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
            <div>
              <div className="text-[10px] text-gray-500 uppercase font-semibold">Real Name</div>
              <div className="text-white font-medium mt-0.5">{formData.captainRealName}</div>
            </div>
            <div>
              <div className="text-[10px] text-gray-500 uppercase font-semibold">In-Game Name (IGN)</div>
              <div className="text-white font-bold mt-0.5 text-purple-300">{formData.captainIgn}</div>
            </div>
            <div>
              <div className="text-[10px] text-gray-500 uppercase font-semibold">UID / Game ID</div>
              <div className="text-white font-mono mt-0.5">{formData.captainUid}</div>
            </div>
            <div>
              <div className="text-[10px] text-gray-500 uppercase font-semibold">Contact Email</div>
              <div className="text-white font-medium mt-0.5">{formData.email}</div>
            </div>
            <div>
              <div className="text-[10px] text-gray-500 uppercase font-semibold">Phone Number</div>
              <div className="text-white font-medium mt-0.5">+91 {formData.captainPhone}</div>
            </div>
            <div>
              <div className="text-[10px] text-gray-500 uppercase font-semibold">WhatsApp Number</div>
              <div className="text-white font-medium mt-0.5 text-emerald-400">
                +91 {formData.captainWhatsapp}
              </div>
            </div>
            {formData.viceCaptainWhatsapp && (
              <div className="col-span-1 sm:col-span-2">
                <div className="text-[10px] text-gray-500 uppercase font-semibold">
                  Vice Captain WhatsApp (Optional)
                </div>
                <div className="text-gray-300 font-medium mt-0.5">
                  +91 {formData.viceCaptainWhatsapp}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Section 3: Registered Roster */}
        <div className="p-4 rounded-xl bg-wevi-darker border border-wevi-border/70 space-y-3">
          <div className="flex items-center justify-between border-b border-white/5 pb-2">
            <span className="text-xs font-bold uppercase tracking-wider text-cyan-400 flex items-center gap-1.5">
              <Users className="w-3.5 h-3.5" />
              <span>Active Roster ({formData.participationFormat})</span>
            </span>
            <button
              type="button"
              onClick={() => onEditStep(4)}
              className="text-[11px] font-semibold text-purple-400 hover:text-purple-300 flex items-center gap-1 transition-colors"
            >
              <Edit2 className="w-3 h-3" />
              <span>Edit</span>
            </button>
          </div>

          <div className="space-y-2 text-xs">
            {/* Player 1 */}
            <div className="flex items-center justify-between p-2.5 rounded-lg bg-wevi-card border border-white/5">
              <span className="font-semibold text-gray-300 flex items-center gap-2">
                <span className="text-[10px] px-1.5 py-0.5 rounded bg-purple-950 text-purple-300 border border-purple-800">
                  P1 / CPT
                </span>
                <span>{formData.player1?.ign}</span>
              </span>
              <span className="font-mono text-gray-400">UID: {formData.player1?.uid}</span>
            </div>

            {/* Player 2 */}
            {(formData.participationFormat === "Duo" || formData.participationFormat === "Squad") && (
              <div className="flex items-center justify-between p-2.5 rounded-lg bg-wevi-card border border-white/5">
                <span className="font-semibold text-gray-300 flex items-center gap-2">
                  <span className="text-[10px] px-1.5 py-0.5 rounded bg-blue-950 text-blue-300 border border-blue-800">
                    P2
                  </span>
                  <span>{formData.player2?.ign}</span>
                </span>
                <span className="font-mono text-gray-400">UID: {formData.player2?.uid}</span>
              </div>
            )}

            {/* Player 3 & 4 */}
            {formData.participationFormat === "Squad" && (
              <>
                <div className="flex items-center justify-between p-2.5 rounded-lg bg-wevi-card border border-white/5">
                  <span className="font-semibold text-gray-300 flex items-center gap-2">
                    <span className="text-[10px] px-1.5 py-0.5 rounded bg-cyan-950 text-cyan-300 border border-cyan-800">
                      P3
                    </span>
                    <span>{formData.player3?.ign}</span>
                  </span>
                  <span className="font-mono text-gray-400">UID: {formData.player3?.uid}</span>
                </div>

                <div className="flex items-center justify-between p-2.5 rounded-lg bg-wevi-card border border-white/5">
                  <span className="font-semibold text-gray-300 flex items-center gap-2">
                    <span className="text-[10px] px-1.5 py-0.5 rounded bg-pink-950 text-pink-300 border border-pink-800">
                      P4
                    </span>
                    <span>{formData.player4?.ign}</span>
                  </span>
                  <span className="font-mono text-gray-400">UID: {formData.player4?.uid}</span>
                </div>
              </>
            )}
          </div>
        </div>

        {/* Section 4: Declaration Agreement */}
        <div className="p-3.5 rounded-xl bg-emerald-950/20 border border-emerald-500/30 flex items-center justify-between">
          <div className="flex items-center gap-2 text-xs text-emerald-300 font-semibold">
            <CheckCircle2 className="w-4 h-4 text-emerald-400" />
            <span>Captain Declaration Accepted (&ldquo;Yes, I agree&rdquo;)</span>
          </div>
          <button
            type="button"
            onClick={() => onEditStep(5)}
            className="text-[11px] text-purple-400 hover:text-purple-300 underline"
          >
            Review
          </button>
        </div>
      </div>
    </div>
  );
};
