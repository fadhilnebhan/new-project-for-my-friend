"use client";

import React, { useState } from "react";
import { MessageSquare, MessageCircle, Send, Check, Copy, ExternalLink, ShieldAlert } from "lucide-react";
import { PLATFORM_INFO } from "@/data/platform";

export const Community: React.FC = () => {
  const [copiedLink, setCopiedLink] = useState(false);

  const handleCopyLink = () => {
    navigator.clipboard.writeText(PLATFORM_INFO.community.whatsappGroupUrl);
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 2500);
  };

  return (
    <section id="community" className="py-24 relative overflow-hidden bg-wevi-darker/60">
      {/* Background radial */}
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-emerald-950/20 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Text */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-950/60 border border-emerald-800/40 text-emerald-300 text-xs font-bold uppercase tracking-wider">
              <MessageCircle className="w-3.5 h-3.5 text-emerald-400" />
              <span>Official Community Channels</span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tight text-white leading-tight">
              JOIN THE <br />
              <span className="bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent">
                WEVI ESPORTS HUB
              </span>
            </h2>

            <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
              Never miss match announcements, custom room passwords, bracket schedules, or rule updates. Connect directly with tournament officials and team captains across India.
            </p>

            <div className="p-4 rounded-xl bg-wevi-card/70 border border-white/5 space-y-2">
              <div className="flex items-center gap-2 text-xs font-semibold text-emerald-400 uppercase tracking-wider">
                <Check className="w-4 h-4" />
                <span>Captain WhatsApp Helpdesk Active</span>
              </div>
              <p className="text-xs text-gray-400">
                Team captains receive automated room details and match confirmations via WhatsApp prior to kickoff.
              </p>
            </div>
          </div>

          {/* Right Action Cards */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* WhatsApp Community Card */}
            <div className="glass-panel p-6 rounded-2xl border border-emerald-500/30 hover:border-emerald-500/60 transition-all duration-300 flex flex-col justify-between group shadow-xl">
              <div>
                <div className="w-12 h-12 rounded-xl bg-emerald-950/80 border border-emerald-500/40 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <MessageCircle className="w-6 h-6 text-emerald-400" />
                </div>
                <h3 className="text-lg font-bold text-white mb-1">
                  WhatsApp Community
                </h3>
                <p className="text-xs text-gray-400 leading-relaxed mb-6">
                  Instant room IDs, scrim alerts, slot confirmations, and direct communication with WEVI admins.
                </p>
              </div>

              <div className="space-y-2">
                <a
                  href={PLATFORM_INFO.community.whatsappGroupUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-2.5 px-4 rounded-xl font-bold text-xs uppercase tracking-wider text-white bg-emerald-600 hover:bg-emerald-500 flex items-center justify-center gap-2 transition-all shadow-lg shadow-emerald-900/30"
                >
                  <span>Join WhatsApp Group</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>

                <button
                  onClick={handleCopyLink}
                  className="w-full py-2 px-3 rounded-lg text-[11px] font-semibold text-gray-400 hover:text-white bg-wevi-card border border-wevi-border flex items-center justify-center gap-1.5 transition-colors"
                >
                  {copiedLink ? (
                    <>
                      <Check className="w-3 h-3 text-emerald-400" />
                      <span>Invite Link Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3 h-3 text-gray-400" />
                      <span>Copy Group Link</span>
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* Discord Server Card */}
            <div className="glass-panel p-6 rounded-2xl border border-indigo-500/30 hover:border-indigo-500/60 transition-all duration-300 flex flex-col justify-between group shadow-xl">
              <div>
                <div className="w-12 h-12 rounded-xl bg-indigo-950/80 border border-indigo-500/40 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <MessageSquare className="w-6 h-6 text-indigo-400" />
                </div>
                <h3 className="text-lg font-bold text-white mb-1">
                  Discord Server
                </h3>
                <p className="text-xs text-gray-400 leading-relaxed mb-6">
                  Voice comms, scrim matchmaking, clip showcases, team recruitment, and live tournament voice lobbies.
                </p>
              </div>

              <div>
                <a
                  href={PLATFORM_INFO.community.discordUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-2.5 px-4 rounded-xl font-bold text-xs uppercase tracking-wider text-white bg-indigo-600 hover:bg-indigo-500 flex items-center justify-center gap-2 transition-all shadow-lg shadow-indigo-900/30"
                >
                  <span>Join Discord Arena</span>
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
