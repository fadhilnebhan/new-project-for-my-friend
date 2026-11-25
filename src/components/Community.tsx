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
    <section id="community" className="py-20 bg-[#08080A] border-t border-[#1C1D22]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-6 space-y-5">
            <div className="text-[11px] font-mono tracking-[0.2em] text-[#F93822] uppercase font-bold">
              /// COMMUNITY
            </div>

            <h2 className="text-3xl sm:text-4xl font-black text-white italic tracking-tight">
              Connect Directly with Referees and Rosters
            </h2>

            <p className="text-sm text-zinc-400 leading-relaxed">
              Never miss match fixture drops, custom room passwords, bracket schedules, or rule announcements. Connect directly with WEVI tournament admins and team captains across India.
            </p>

            <div className="p-4 rounded-xl bg-[#121316] border border-[#23252B] flex items-start gap-3">
              <ShieldCheck className="w-5 h-5 text-[#F93822] shrink-0 mt-0.5" />
              <div>
                <div className="text-xs font-bold text-white uppercase tracking-wider">
                  Captain WhatsApp Helpdesk Active
                </div>
                <p className="text-xs text-zinc-400 mt-0.5 leading-relaxed">
                  Verified captains receive room credentials directly on matchday 15 minutes before the first drop.
                </p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="esports-card p-6 flex flex-col justify-between space-y-6">
              <div>
                <div className="w-10 h-10 rounded-xl bg-[#1D1F25] border border-[#2B2E37] flex items-center justify-center mb-4 text-[#F93822]">
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
                  className="btn-coral w-full py-2.5 text-xs font-bold"
                >
                  <span>Join WhatsApp</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>

                <button
                  onClick={handleCopyLink}
                  className="btn-dark w-full py-2 text-[11px] font-medium"
                >
                  {copiedLink ? (
                    <>
                      <Check className="w-3 h-3 text-[#F93822]" />
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

            <div className="esports-card p-6 flex flex-col justify-between space-y-6">
              <div>
                <div className="w-10 h-10 rounded-xl bg-[#1D1F25] border border-[#2B2E37] flex items-center justify-center mb-4 text-[#F93822]">
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
                  className="btn-dark w-full py-2.5 text-xs font-semibold hover:border-zinc-500"
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
