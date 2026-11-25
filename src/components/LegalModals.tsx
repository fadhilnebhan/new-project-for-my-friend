"use client";

import React from "react";
import { X, ShieldCheck, FileText } from "lucide-react";

interface LegalModalProps {
  isOpen: boolean;
  type: "privacy" | "terms";
  onClose: () => void;
}

export const LegalModal: React.FC<LegalModalProps> = ({ isOpen, type, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/85 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 animate-in fade-in duration-150">
      <div className="relative w-full max-w-2xl bg-[#0E0E0E] border border-[#2A2A2A] rounded-2xl shadow-2xl overflow-hidden flex flex-col my-auto max-h-[90vh]">
        {/* Header */}
        <div className="px-6 py-4 border-b border-[#222222] flex items-center justify-between bg-[#121212] shrink-0">
          <div className="flex items-center gap-2.5">
            <div className="w-7 h-7 rounded-lg bg-[#1C1C1C] border border-[#333333] flex items-center justify-center text-[#FACC15]">
              {type === "privacy" ? <ShieldCheck className="w-4 h-4" /> : <FileText className="w-4 h-4" />}
            </div>
            <div>
              <span className="font-extrabold text-sm tracking-tight text-white">
                {type === "privacy" ? "Privacy & Data Policy" : "Tournament Terms & Conditions"}
              </span>
              <div className="text-[10px] text-zinc-400 font-medium">
                Official Competitive Rules
              </div>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-lg bg-[#181818] hover:bg-[#222222] text-zinc-400 hover:text-white transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto text-xs text-zinc-300 space-y-4 leading-relaxed">
          {type === "privacy" ? (
            <>
              <p>
                WEVI INDIA is dedicated to securing the personal data of our registered players, team captains, and community members.
              </p>

              <h4 className="font-bold text-xs uppercase tracking-wider text-[#FACC15] pt-1">
                1. Information Collected
              </h4>
              <p>
                Email address, team name, captain&apos;s real name, in-game name (IGN), game UID, and phone numbers are collected exclusively for tournament matchmaking, slot assignment, and prize payouts.
              </p>

              <h4 className="font-bold text-xs uppercase tracking-wider text-[#FACC15] pt-1">
                2. Privacy & Confidentiality
              </h4>
              <p>
                Personal contact numbers and legal real names are never exposed on public stream overlays or match point tables. Only Team Names and Player IGNs are shown publicly.
              </p>
            </>
          ) : (
            <>
              <p>
                By enrolling in any WEVI INDIA tournament, team captains and players agree to the official regulations:
              </p>

              <h4 className="font-bold text-xs uppercase tracking-wider text-[#FACC15] pt-1">
                1. Accurate Information
              </h4>
              <p>
                The captain confirms that all player UIDs and IGNs are authentic. Falsified identities or smurfing will result in disqualification.
              </p>

              <h4 className="font-bold text-xs uppercase tracking-wider text-[#FACC15] pt-1">
                2. Anti-Cheat & Sportsmanship
              </h4>
              <p>
                Third-party scripts, hacks, or unauthorized emulator modifications are strictly banned. Referees may request POV recordings when needed.
              </p>

              <h4 className="font-bold text-xs uppercase tracking-wider text-[#FACC15] pt-1">
                3. Room Credentials Protocol
              </h4>
              <p>
                Custom room IDs and passwords are provided on WhatsApp 15 minutes before match kickoff. Teams failing to join on time forfeit their slot.
              </p>
            </>
          )}
        </div>

        {/* Footer */}
        <div className="px-6 py-3 border-t border-[#222222] bg-[#121212] flex items-center justify-end">
          <button
            onClick={onClose}
            className="btn-primary px-4 py-2 text-xs font-bold"
          >
            Acknowledge & Close
          </button>
        </div>
      </div>
    </div>
  );
};
