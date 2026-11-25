"use client";

import React, { useState } from "react";
import { Mail, MessageCircle, Clock, Send, CheckCircle2 } from "lucide-react";
import { PLATFORM_INFO } from "@/data/platform";

export const Contact: React.FC = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "Tournament Query",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    setFormSubmitted(true);
    setTimeout(() => {
      setFormSubmitted(false);
      setFormData({ name: "", email: "", subject: "Tournament Query", message: "" });
    }, 4000);
  };

  return (
    <section id="contact" className="py-20 bg-[#0B0B0B] border-t border-[#1C1C1C]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div>
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#FACC15]">
              Direct Inquiries
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight mt-1">
              Contact & Support
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-zinc-400 max-w-md">
            Questions regarding slot assignment, tournament schedules, or match disputes? Reach out directly.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Contact Channels */}
          <div className="lg:col-span-5 surface-card p-6 space-y-6">
            <h3 className="text-base font-bold text-white uppercase tracking-wider">
              Official Channels
            </h3>

            <div className="space-y-3">
              <a
                href={`mailto:${PLATFORM_INFO.community.supportEmail}`}
                className="flex items-center gap-3.5 p-3.5 rounded-xl bg-[#161616] border border-[#222222] hover:border-[#383838] transition-all group"
              >
                <div className="w-9 h-9 rounded-lg bg-[#1F1F1F] flex items-center justify-center text-[#FACC15] shrink-0">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[10px] font-bold text-zinc-400 uppercase tracking-wider">
                    Official Email
                  </div>
                  <div className="text-xs sm:text-sm font-semibold text-white group-hover:text-[#FACC15] transition-colors">
                    {PLATFORM_INFO.community.supportEmail}
                  </div>
                </div>
              </a>

              <a
                href={PLATFORM_INFO.community.captainHelpdesk}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3.5 p-3.5 rounded-xl bg-[#161616] border border-[#222222] hover:border-[#383838] transition-all group"
              >
                <div className="w-9 h-9 rounded-lg bg-[#1F1F1F] flex items-center justify-center text-[#FACC15] shrink-0">
                  <MessageCircle className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[10px] font-bold text-zinc-400 uppercase tracking-wider">
                    Captain Desk (WhatsApp)
                  </div>
                  <div className="text-xs sm:text-sm font-semibold text-white group-hover:text-[#FACC15] transition-colors">
                    {PLATFORM_INFO.community.whatsappNumber}
                  </div>
                </div>
              </a>

              <div className="flex items-center gap-3.5 p-3.5 rounded-xl bg-[#161616] border border-[#222222]">
                <div className="w-9 h-9 rounded-lg bg-[#1F1F1F] flex items-center justify-center text-zinc-400 shrink-0">
                  <Clock className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[10px] font-bold text-zinc-400 uppercase tracking-wider">
                    Operational Hours
                  </div>
                  <div className="text-xs sm:text-sm font-semibold text-zinc-200">
                    Matchdays: 10:00 AM – 11:30 PM IST
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Form */}
          <div className="lg:col-span-7 surface-card p-6 sm:p-8">
            <h3 className="text-base font-bold text-white uppercase tracking-wider mb-6">
              Send a Message
            </h3>

            {formSubmitted ? (
              <div className="p-8 rounded-xl bg-[#161616] border border-[#FACC15]/40 text-center space-y-3">
                <CheckCircle2 className="w-8 h-8 text-[#FACC15] mx-auto" />
                <div className="text-base font-bold text-white">Message Dispatched!</div>
                <p className="text-xs text-zinc-400">
                  A tournament referee will review your message and reply via WhatsApp or email shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[11px] font-semibold text-zinc-400 uppercase tracking-wider mb-1.5">
                      Your Name / IGN
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Captain Shadow"
                      className="w-full px-4 py-2.5 rounded-xl bg-[#161616] border border-[#2A2A2A] focus:border-[#FACC15] focus:outline-none text-xs sm:text-sm text-white placeholder-zinc-600"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-semibold text-zinc-400 uppercase tracking-wider mb-1.5">
                      Email Address
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="captain@example.com"
                      className="w-full px-4 py-2.5 rounded-xl bg-[#161616] border border-[#2A2A2A] focus:border-[#FACC15] focus:outline-none text-xs sm:text-sm text-white placeholder-zinc-600"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[11px] font-semibold text-zinc-400 uppercase tracking-wider mb-1.5">
                    Subject
                  </label>
                  <select
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-[#161616] border border-[#2A2A2A] focus:border-[#FACC15] focus:outline-none text-xs sm:text-sm text-white"
                  >
                    <option value="Tournament Query">Tournament Registration Query</option>
                    <option value="Anti-Cheat Dispute">Match Result / Anti-Cheat Dispute</option>
                    <option value="Partnership">Partnership & Creator Sponsorship</option>
                    <option value="Other">General Query</option>
                  </select>
                </div>

                <div>
                  <label className="block text-[11px] font-semibold text-zinc-400 uppercase tracking-wider mb-1.5">
                    Message
                  </label>
                  <textarea
                    rows={4}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Include team name, game title, and question..."
                    className="w-full px-4 py-2.5 rounded-xl bg-[#161616] border border-[#2A2A2A] focus:border-[#FACC15] focus:outline-none text-xs sm:text-sm text-white placeholder-zinc-600 resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="btn-primary w-full py-3 text-xs font-bold uppercase tracking-wider"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Send Message</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
