"use client";

import React, { useState } from "react";
import { MessageCircle, MessageSquare, Check, Copy, ExternalLink, ShieldCheck } from "lucide-react";
import { PLATFORM_INFO } from "@/data/platform";

export const Community: React.FC = () => {
  const [copiedLink, setCopiedLink] = useState(false);

  const handleCopyLink = () => {
    navigator.clipboard.writeText(PLATFORM_INFO.community.whatsappGroupUrl);
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 2000);
  };

  return (
    <section id="community" className="py-20 bg-[#0B0B0B] border-t border-[#1C1C1C]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left Text */}
          <div className="lg:col-span-6 space-y-5">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#FACC15]">
              Official Community Channels
            </span>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Connect Directly with <br />
              Officials and Players
            </h2>

            <p className="text-sm text-zinc-400 leading-relaxed">
              Never miss match fixture announcements, custom room passwords, bracket schedules, or rule updates. Connect directly with WEVI tournament staff and team captains across India.
            </p>

            <div className="p-4 rounded-xl bg-[#121212] border border-[#222222] flex items-start gap-3">
              <ShieldCheck className="w-5 h-5 text-[#FACC15] shrink-0 mt-0.5" />
              <div>
                <div className="text-xs font-bold text-white uppercase tracking-wider">
                  Captain WhatsApp Helpdesk Active
                </div>
                <p className="text-xs text-zinc-400 mt-0.5 leading-relaxed">
                  Verified captains receive custom room credentials directly on matchday 15 minutes before the first drop.
                </p>
              </div>
            </div>
          </div>

          {/* Right Action Cards */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* WhatsApp Community Card */}
            <div className="surface-card p-6 flex flex-col justify-between space-y-6 hover:border-[#3A3A3A] transition-all">
              <div>
                <div className="w-10 h-10 rounded-xl bg-[#1A1A1A] border border-[#2A2A2A] flex items-center justify-center mb-4 text-[#FACC15]">
                  <MessageCircle className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-white mb-1">
                  WhatsApp Community
                </h3>
                <p className="text-xs text-zinc-400 leading-relaxed">
                  Room IDs, scrim alerts, slot confirmations, and direct communication with admins.
                </p>
              </div>

              <div className="space-y-2">
                <a
                  href={PLATFORM_INFO.community.whatsappGroupUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary w-full py-2.5 text-xs font-bold"
                >
                  <span>Join WhatsApp</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>

                <button
                  onClick={handleCopyLink}
                  className="btn-secondary w-full py-2 text-[11px] font-medium"
                >
                  {copiedLink ? (
                    <>
                      <Check className="w-3 h-3 text-[#FACC15]" />
                      <span>Invite Link Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3 h-3 text-zinc-400" />
                      <span>Copy Group Link</span>
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* Discord Server Card */}
            <div className="surface-card p-6 flex flex-col justify-between space-y-6 hover:border-[#3A3A3A] transition-all">
              <div>
                <div className="w-10 h-10 rounded-xl bg-[#1A1A1A] border border-[#2A2A2A] flex items-center justify-center mb-4 text-[#FACC15]">
                  <MessageSquare className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-white mb-1">
                  Discord Server
                </h3>
                <p className="text-xs text-zinc-400 leading-relaxed">
                  Voice comms, scrim matchmaking, clip showcases, team recruitment, and live tournament voice lobbies.
                </p>
              </div>

              <div>
                <a
                  href={PLATFORM_INFO.community.discordUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary w-full py-2.5 text-xs font-semibold hover:border-zinc-500"
                >
                  <span>Join Discord</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
