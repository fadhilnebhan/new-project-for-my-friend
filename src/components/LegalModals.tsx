"use client";

import React from "react";
import { X, ShieldCheck, FileText, CheckCircle } from "lucide-react";
import { PLATFORM_INFO } from "@/data/platform";

interface LegalModalProps {
  isOpen: boolean;
  type: "privacy" | "terms";
  onClose: () => void;
}

export const LegalModal: React.FC<LegalModalProps> = ({ isOpen, type, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/80 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 animate-in fade-in duration-200">
      <div className="relative w-full max-w-2xl bg-wevi-card border border-wevi-border/90 rounded-2xl sm:rounded-3xl shadow-2xl shadow-purple-950/40 overflow-hidden flex flex-col my-auto max-h-[90vh]">
        {/* Header */}
        <div className="px-6 py-4 border-b border-wevi-border/70 flex items-center justify-between bg-wevi-darker/80 shrink-0">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-purple-950 border border-purple-500/50 flex items-center justify-center font-bold text-sm text-purple-400">
              {type === "privacy" ? <ShieldCheck className="w-4 h-4" /> : <FileText className="w-4 h-4" />}
            </div>
            <div>
              <span className="font-black text-sm tracking-wider text-white uppercase">
                {type === "privacy" ? "Privacy & Data Policy" : "Tournament Terms & Conditions"}
              </span>
              <div className="text-[10px] text-gray-400 font-medium">
                WEVI INDIA Official Competitive Governance
              </div>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto text-xs text-gray-300 space-y-4 leading-relaxed">
          {type === "privacy" ? (
            <>
              <p>
                WEVI INDIA is committed to safeguarding the privacy and personal data of our registered players, team captains, and community members.
              </p>

              <h4 className="font-bold text-sm text-white uppercase tracking-wider text-purple-400 pt-2">
                1. Data Collected During Registration
              </h4>
              <p>
                We collect your email address, team name, captain&apos;s real name, in-game name (IGN), game UID, and WhatsApp/phone numbers exclusively for tournament matchmaking, slot assignment, room credential distribution, and prize dispatch.
              </p>

              <h4 className="font-bold text-sm text-white uppercase tracking-wider text-purple-400 pt-2">
                2. Data Protection & Non-Public Records
              </h4>
              <p>
                In accordance with our strict data management policy, personal phone numbers, captain real names, and email addresses are never made publicly accessible. Match schedules display only Team Names and Player In-Game Names (IGNs).
              </p>

              <h4 className="font-bold text-sm text-white uppercase tracking-wider text-purple-400 pt-2">
                3. Retention & Google Workspace Storage
              </h4>
              <p>
                Registration records are securely managed through Google Sheets and encrypted webhooks restricted to authorized WEVI tournament administrators.
              </p>
            </>
          ) : (
            <>
              <p>
                By registering for any WEVI INDIA tournament (Free Fire, BGMI, Call of Duty, or eFootball), all participating teams, captains, and players agree to abide by the following official regulations:
              </p>

              <h4 className="font-bold text-sm text-white uppercase tracking-wider text-purple-400 pt-2">
                1. Captain Responsibility & Declaration
              </h4>
              <p>
                The team captain warrants that all submitted player UIDs and IGNs are accurate. Any falsified identity, smurfing, or unauthorized account sharing will result in disqualification.
              </p>

              <h4 className="font-bold text-sm text-white uppercase tracking-wider text-purple-400 pt-2">
                2. Fair Play & Anti-Cheat Zero Tolerance
              </h4>
              <p>
                The use of third-party scripts, hacks, unauthorized emulator modifications, or macros is strictly prohibited. Tournament referees reserve the right to request screen recordings or in-game POV checks.
              </p>

              <h4 className="font-bold text-sm text-white uppercase tracking-wider text-purple-400 pt-2">
                3. Matchday Protocol & Room Credentials
              </h4>
              <p>
                Custom room IDs and passwords are distributed via the official WhatsApp Captain Desk 15 minutes prior to match kickoff. Teams that fail to join their designated lobby slot within 10 minutes forfeit their match.
              </p>

              <h4 className="font-bold text-sm text-white uppercase tracking-wider text-purple-400 pt-2">
                4. Referee Authority
              </h4>
              <p>
                Decisions made by official WEVI match referees concerning point disputes, rematches, or disciplinary measures are final.
              </p>
            </>
          )}
        </div>

        {/* Footer */}
        <div className="px-6 py-3 border-t border-wevi-border/70 bg-wevi-darker/80 flex items-center justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2 rounded-xl font-bold text-xs uppercase tracking-wider text-white bg-purple-600 hover:bg-purple-500 transition-all shadow-neon-purple"
          >
            Acknowledge & Close
          </button>
        </div>
      </div>
    </div>
  );
};
