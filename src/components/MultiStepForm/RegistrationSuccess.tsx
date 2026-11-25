"use client";

import React, { useEffect, useState } from "react";
import confetti from "canvas-confetti";
import { CheckCircle2, Copy, Check, MessageCircle, ExternalLink, Trophy } from "lucide-react";
import { RegistrationSubmission } from "@/types/registration";
import { PLATFORM_INFO } from "@/data/platform";

interface RegistrationSuccessProps {
  submission: RegistrationSubmission;
  onClose: () => void;
  onNewRegistration: () => void;
}

export const RegistrationSuccess: React.FC<RegistrationSuccessProps> = ({
  submission,
  onClose,
  onNewRegistration,
}) => {
  const [copiedReceipt, setCopiedReceipt] = useState(false);

  useEffect(() => {
    try {
      confetti({
        particleCount: 80,
        spread: 60,
        origin: { y: 0.6 },
        colors: ["#FACC15", "#FFFFFF", "#EAB308", "#71717A"],
      });
    } catch (e) {
      // ignore
    }
  }, []);

  const getReceiptText = () => {
    return `🏆 WEVI INDIA TOURNAMENT REGISTRATION RECEIPT 🏆
---------------------------------------------
Reg ID: ${submission.registrationId}
Team: ${submission.teamName}
Game: ${submission.selectedGame}
Format: ${submission.participationFormat}
Captain: ${submission.captainRealName} (${submission.captainIgn})
Captain UID: ${submission.captainUid}
Captain WhatsApp: +91 ${submission.captainWhatsapp}
Status: Verified & Confirmed
Submitted: ${new Date(submission.submittedAt).toLocaleString("en-IN")}
---------------------------------------------
Captain Desk: ${PLATFORM_INFO.community.whatsappGroupUrl}`;
  };

  const handleCopyReceipt = () => {
    navigator.clipboard.writeText(getReceiptText());
    setCopiedReceipt(true);
    setTimeout(() => setCopiedReceipt(false), 2000);
  };

  return (
    <div className="text-center space-y-6 py-2 animate-in zoom-in-95 duration-200">
      {/* Success Badge */}
      <div className="relative inline-flex items-center justify-center">
        <div className="w-16 h-16 rounded-2xl bg-[#1A1A1A] border border-[#FACC15] flex items-center justify-center text-[#FACC15]">
          <CheckCircle2 className="w-8 h-8" />
        </div>
      </div>

      <div>
        <h3 className="text-2xl font-extrabold text-white tracking-tight">
          Registration Confirmed!
        </h3>
        <p className="text-xs sm:text-sm text-zinc-400 mt-1">
          Team <strong className="text-white font-bold">{submission.teamName}</strong> has been enrolled for{" "}
          <strong className="text-[#FACC15] font-bold">{submission.selectedGame}</strong>.
        </p>
      </div>

      {/* Receipt Card */}
      <div className="text-left p-4 rounded-xl bg-[#141414] border border-[#2A2A2A] space-y-3 font-mono text-xs">
        <div className="flex items-center justify-between border-b border-[#222222] pb-2 font-sans">
          <span className="text-zinc-500 text-[10px] uppercase font-bold">
            Tournament Pass ID
          </span>
          <span className="text-[#FACC15] font-bold">{submission.registrationId}</span>
        </div>

        <div className="grid grid-cols-2 gap-2 text-zinc-300 font-sans">
          <div>
            <span className="text-zinc-500 block text-[10px]">GAME & FORMAT</span>
            <span className="font-bold text-white">{submission.selectedGame} · {submission.participationFormat}</span>
          </div>
          <div>
            <span className="text-zinc-500 block text-[10px]">CAPTAIN IGN</span>
            <span className="font-bold text-[#FACC15]">{submission.captainIgn}</span>
          </div>
        </div>

        <div className="pt-2 border-t border-[#222222] flex items-center justify-between font-sans">
          <span className="text-[10px] text-zinc-400">Status: Registered in Database</span>
          <button
            onClick={handleCopyReceipt}
            className="text-[11px] text-[#FACC15] hover:underline flex items-center gap-1"
          >
            {copiedReceipt ? (
              <>
                <Check className="w-3 h-3" />
                <span>Copied</span>
              </>
            ) : (
              <>
                <Copy className="w-3 h-3" />
                <span>Copy Pass</span>
              </>
            )}
          </button>
        </div>
      </div>

      {/* WhatsApp Captain Desk Action */}
      <div className="p-4 rounded-xl bg-[#161616] border border-[#2A2A2A] text-left flex flex-col sm:flex-row items-center justify-between gap-3">
        <div>
          <div className="text-xs font-bold text-white flex items-center gap-1.5 mb-0.5">
            <MessageCircle className="w-4 h-4 text-[#FACC15]" />
            <span>Join WhatsApp Captain Desk</span>
          </div>
          <p className="text-[11px] text-zinc-400">
            Room credentials and slot passwords are sent via WhatsApp 15 minutes before kickoff.
          </p>
        </div>
        <a
          href={PLATFORM_INFO.community.whatsappGroupUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary shrink-0 px-4 py-2 text-xs font-bold"
        >
          <span>Join Desk</span>
          <ExternalLink className="w-3.5 h-3.5" />
        </a>
      </div>

      {/* Actions */}
      <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
        <button
          onClick={onClose}
          className="btn-primary w-full sm:w-auto px-6 py-2.5 text-xs font-bold"
        >
          Return to Arena
        </button>

        <button
          onClick={onNewRegistration}
          className="btn-secondary w-full sm:w-auto px-5 py-2.5 text-xs font-semibold"
        >
          Register Another Team
        </button>
      </div>
    </div>
  );
};
