"use client";

import React, { useEffect, useState } from "react";
import confetti from "canvas-confetti";
import { CheckCircle2, Copy, Check, MessageCircle, ExternalLink, Download, Trophy, ShieldCheck } from "lucide-react";
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
    // Launch festive esports confetti
    try {
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
        colors: ["#9333EA", "#3B82F6", "#06B6D4", "#F59E0B"],
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
Join Official Captain Desk: ${PLATFORM_INFO.community.whatsappGroupUrl}`;
  };

  const handleCopyReceipt = () => {
    navigator.clipboard.writeText(getReceiptText());
    setCopiedReceipt(true);
    setTimeout(() => setCopiedReceipt(false), 2500);
  };

  return (
    <div className="text-center space-y-6 py-2 animate-in zoom-in-95 duration-300">
      {/* Success Icon */}
      <div className="relative inline-flex items-center justify-center">
        <div className="w-20 h-20 rounded-full bg-emerald-950/80 border-2 border-emerald-500/80 flex items-center justify-center shadow-lg shadow-emerald-900/30">
          <CheckCircle2 className="w-10 h-10 text-emerald-400" />
        </div>
        <div className="absolute -bottom-1 -right-1 p-1 rounded-full bg-purple-600 text-white">
          <Trophy className="w-4 h-4" />
        </div>
      </div>

      {/* Headings */}
      <div>
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-950/60 border border-emerald-800/40 text-emerald-300 text-xs font-bold uppercase tracking-wider mb-2">
          <span>Registration Confirmed</span>
        </div>
        <h3 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-white">
          WELCOME TO THE ARENA!
        </h3>
        <p className="text-xs sm:text-sm text-gray-300 max-w-md mx-auto mt-2">
          Your team <strong className="text-white font-bold">{submission.teamName}</strong> has been successfully registered for <span className="text-cyan-400 font-bold">{submission.selectedGame}</span>.
        </p>
      </div>

      {/* Registration Receipt Card */}
      <div className="text-left p-5 rounded-2xl bg-wevi-darker border border-wevi-border/80 shadow-2xl space-y-3 font-mono text-xs">
        <div className="flex items-center justify-between border-b border-white/5 pb-2">
          <span className="text-gray-400 font-sans uppercase text-[10px] font-bold">
            Official Tournament Pass
          </span>
          <span className="text-purple-400 font-bold">{submission.registrationId}</span>
        </div>

        <div className="grid grid-cols-2 gap-2 text-gray-300">
          <div>
            <span className="text-gray-500 block text-[10px]">TOURNAMENT</span>
            <span className="font-sans font-bold text-white">{submission.selectedGame}</span>
          </div>
          <div>
            <span className="text-gray-500 block text-[10px]">FORMAT</span>
            <span className="font-sans font-bold text-white">{submission.participationFormat}</span>
          </div>
          <div>
            <span className="text-gray-500 block text-[10px]">CAPTAIN IGN</span>
            <span className="text-cyan-300 font-bold">{submission.captainIgn}</span>
          </div>
          <div>
            <span className="text-gray-500 block text-[10px]">CAPTAIN UID</span>
            <span className="text-gray-200">{submission.captainUid}</span>
          </div>
        </div>

        <div className="pt-2 border-t border-white/5 flex items-center justify-between">
          <span className="text-[10px] text-emerald-400 flex items-center gap-1">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Synced to WEVI League Database</span>
          </span>
          <button
            onClick={handleCopyReceipt}
            className="text-[11px] text-purple-400 hover:text-purple-300 flex items-center gap-1 font-sans"
          >
            {copiedReceipt ? (
              <>
                <Check className="w-3 h-3 text-emerald-400" />
                <span>Copied</span>
              </>
            ) : (
              <>
                <Copy className="w-3 h-3" />
                <span>Copy Receipt</span>
              </>
            )}
          </button>
        </div>
      </div>

      {/* Urgent Next Step: WhatsApp Captain Group */}
      <div className="p-4 rounded-xl bg-gradient-to-r from-emerald-950/60 to-wevi-card border border-emerald-500/40 text-left flex flex-col sm:flex-row items-center justify-between gap-4">
        <div>
          <div className="text-xs font-bold uppercase tracking-wider text-emerald-300 flex items-center gap-1.5 mb-1">
            <MessageCircle className="w-4 h-4 text-emerald-400" />
            <span>Next Step for Team Captain</span>
          </div>
          <p className="text-[11px] text-gray-300">
            Join the official WEVI WhatsApp Captain Desk to receive custom room IDs, password drops, and referee updates.
          </p>
        </div>
        <a
          href={PLATFORM_INFO.community.whatsappGroupUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="shrink-0 px-4 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider text-white bg-emerald-600 hover:bg-emerald-500 flex items-center gap-1.5 transition-all shadow-md shadow-emerald-900/30"
        >
          <span>Join Captain Desk</span>
          <ExternalLink className="w-3.5 h-3.5" />
        </a>
      </div>

      {/* Modal Actions */}
      <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
        <button
          onClick={onClose}
          className="w-full sm:w-auto px-6 py-3 rounded-xl font-bold text-xs uppercase tracking-wider text-white bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 transition-all shadow-neon-purple"
        >
          Return to Arena
        </button>

        <button
          onClick={onNewRegistration}
          className="w-full sm:w-auto px-5 py-3 rounded-xl font-semibold text-xs uppercase tracking-wider text-gray-400 hover:text-white bg-wevi-card border border-wevi-border hover:border-wevi-borderHover transition-all"
        >
          Register Another Squad
        </button>
      </div>
    </div>
  );
};
