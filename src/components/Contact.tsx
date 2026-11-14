"use client";

import React, { useState } from "react";
import { Mail, MessageCircle, MapPin, Send, CheckCircle2, Clock } from "lucide-react";
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
    <section id="contact" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-950/60 border border-purple-800/40 text-purple-300 text-xs font-bold uppercase tracking-wider">
            <Mail className="w-3.5 h-3.5 text-purple-400" />
            <span>Support & Inquiries</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tight text-white">
            GET IN <span className="bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-300 bg-clip-text text-transparent">TOUCH</span>
          </h2>

          <p className="text-sm sm:text-base text-gray-400">
            Have questions regarding tournament schedules, team verification, or custom room disputes? Our management team is ready to assist.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Contact Details */}
          <div className="lg:col-span-5 space-y-4">
            <div className="glass-panel p-6 rounded-2xl border border-white/5 space-y-6">
              <h3 className="text-lg font-bold text-white uppercase tracking-tight">
                Official Support Channels
              </h3>

              <div className="space-y-4">
                <a
                  href={`mailto:${PLATFORM_INFO.community.supportEmail}`}
                  className="flex items-center gap-4 p-3.5 rounded-xl bg-wevi-darker/60 border border-white/5 hover:border-purple-500/40 transition-all group"
                >
                  <div className="w-10 h-10 rounded-lg bg-purple-950 border border-purple-700/50 flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5 text-purple-300" />
                  </div>
                  <div>
                    <div className="text-[11px] font-bold text-gray-400 uppercase tracking-wider">
                      Official Email
                    </div>
                    <div className="text-sm font-semibold text-white group-hover:text-purple-300 transition-colors">
                      {PLATFORM_INFO.community.supportEmail}
                    </div>
                  </div>
                </a>

                <a
                  href={PLATFORM_INFO.community.captainHelpdesk}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-3.5 rounded-xl bg-wevi-darker/60 border border-white/5 hover:border-emerald-500/40 transition-all group"
                >
                  <div className="w-10 h-10 rounded-lg bg-emerald-950 border border-emerald-700/50 flex items-center justify-center shrink-0">
                    <MessageCircle className="w-5 h-5 text-emerald-400" />
                  </div>
                  <div>
                    <div className="text-[11px] font-bold text-gray-400 uppercase tracking-wider">
                      WhatsApp Captain Desk
                    </div>
                    <div className="text-sm font-semibold text-white group-hover:text-emerald-300 transition-colors">
                      {PLATFORM_INFO.community.whatsappNumber}
                    </div>
                  </div>
                </a>

                <div className="flex items-center gap-4 p-3.5 rounded-xl bg-wevi-darker/60 border border-white/5">
                  <div className="w-10 h-10 rounded-lg bg-blue-950 border border-blue-700/50 flex items-center justify-center shrink-0">
                    <Clock className="w-5 h-5 text-blue-400" />
                  </div>
                  <div>
                    <div className="text-[11px] font-bold text-gray-400 uppercase tracking-wider">
                      Operational Hours
                    </div>
                    <div className="text-sm font-semibold text-white">
                      Matchdays: 10:00 AM – 11:30 PM IST
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Contact Form */}
          <div className="lg:col-span-7">
            <div className="glass-panel p-6 sm:p-8 rounded-2xl border border-white/5">
              <h3 className="text-lg font-bold text-white uppercase tracking-tight mb-6">
                Send Direct Message
              </h3>

              {formSubmitted ? (
                <div className="p-8 rounded-xl bg-emerald-950/40 border border-emerald-500/40 text-center space-y-3">
                  <CheckCircle2 className="w-10 h-10 text-emerald-400 mx-auto" />
                  <div className="text-lg font-bold text-white">Message Dispatched!</div>
                  <p className="text-xs text-gray-300">
                    A WEVI tournament coordinator will review your inquiry and reply via email or WhatsApp shortly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-gray-300 uppercase tracking-wider mb-1.5">
                        Your Name / IGN
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Captain Shadow"
                        className="w-full px-4 py-2.5 rounded-xl bg-wevi-darker/80 border border-wevi-border focus:border-purple-500 focus:outline-none text-sm text-white placeholder-gray-500"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-gray-300 uppercase tracking-wider mb-1.5">
                        Email Address
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="captain@example.com"
                        className="w-full px-4 py-2.5 rounded-xl bg-wevi-darker/80 border border-wevi-border focus:border-purple-500 focus:outline-none text-sm text-white placeholder-gray-500"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-gray-300 uppercase tracking-wider mb-1.5">
                      Subject
                    </label>
                    <select
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-wevi-darker/80 border border-wevi-border focus:border-purple-500 focus:outline-none text-sm text-white"
                    >
                      <option value="Tournament Query">Tournament Registration Query</option>
                      <option value="Anti-Cheat Dispute">Match Result / Anti-Cheat Dispute</option>
                      <option value="Partnership / Sponsorship">Sponsorship & Creator Collab</option>
                      <option value="Other">General Question</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-gray-300 uppercase tracking-wider mb-1.5">
                      Message
                    </label>
                    <textarea
                      rows={4}
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Include your team name, game title, and details..."
                      className="w-full px-4 py-2.5 rounded-xl bg-wevi-darker/80 border border-wevi-border focus:border-purple-500 focus:outline-none text-sm text-white placeholder-gray-500 resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3 px-6 rounded-xl font-bold text-xs uppercase tracking-wider text-white bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 transition-all duration-300 shadow-neon-purple flex items-center justify-center gap-2"
                  >
                    <Send className="w-4 h-4 text-cyan-300" />
                    <span>Send Message</span>
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
