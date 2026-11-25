"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  Trophy,
  Users,
  Award,
  Wallet,
  Settings,
  User,
  LogOut,
  Calendar,
  Clock,
  ArrowRight,
  Bell,
  CheckCircle2,
  ExternalLink,
  Shield,
  X,
} from "lucide-react";
import { getStoredSubmissions } from "@/lib/storage";

interface PlayerDashboardProps {
  onClose?: () => void;
  onOpenRegister?: () => void;
}

export const PlayerDashboard: React.FC<PlayerDashboardProps> = ({ onClose, onOpenRegister }) => {
  const [activeTab, setActiveTab] = useState<string>("dashboard");
  const storedSubmissions = getStoredSubmissions();
  const latestSub = storedSubmissions[0];

  const captainName = latestSub?.captainRealName || "Fadil";
  const teamName = latestSub?.teamName || "Void Esports";
  const selectedGame = latestSub?.selectedGame || "BGMI";

  return (
    <section className="min-h-screen bg-[#0B0B0B] text-white pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb / Top Bar */}
        <div className="flex items-center justify-between pb-6 border-b border-[#1F1F1F] mb-8">
          <div className="flex items-center gap-3">
            <span className="px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider bg-[#FACC15]/10 text-[#FACC15] border border-[#FACC15]/20">
              Player Hub
            </span>
            <span className="text-zinc-500">•</span>
            <span className="text-sm text-zinc-400">Competitive Dashboard</span>
          </div>

          {onClose && (
            <button
              onClick={onClose}
              className="px-4 py-2 text-xs font-semibold rounded-xl bg-[#161616] border border-[#2A2A2A] text-zinc-300 hover:text-white flex items-center gap-1.5 transition-all"
            >
              <span>Back to Landing Page</span>
              <X className="w-4 h-4" />
            </button>
          )}
        </div>

        {/* Dashboard Shell matching design */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Sidebar */}
          <div className="lg:col-span-3 surface-card p-5 space-y-6">
            {/* User Profile Mini Card */}
            <div className="flex items-center gap-3 pb-5 border-b border-[#222222]">
              <div className="w-11 h-11 rounded-xl bg-[#1C1C1C] border border-[#333333] flex items-center justify-center text-[#FACC15] font-black text-base">
                {captainName.slice(0, 2).toUpperCase()}
              </div>
              <div className="min-w-0 flex-1">
                <div className="text-sm font-bold text-white truncate">{captainName}</div>
                <div className="text-xs text-zinc-400 truncate font-mono">Captain · {teamName}</div>
              </div>
            </div>

            {/* Sidebar Navigation */}
            <nav className="space-y-1">
              {[
                { id: "dashboard", label: "Dashboard", icon: Trophy, active: true },
                { id: "tournaments", label: "My Tournaments", icon: Calendar },
                { id: "team", label: "My Team", icon: Users },
                { id: "wallet", label: "Wallet & Prizes", icon: Wallet },
                { id: "profile", label: "Profile", icon: User },
                { id: "settings", label: "Settings", icon: Settings },
              ].map((item) => {
                const Icon = item.icon;
                const isActive = activeTab === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => setActiveTab(item.id)}
                    className={`w-full flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-xs font-semibold transition-all ${
                      isActive
                        ? "bg-[#1E1E1E] text-[#FACC15] border-l-2 border-[#FACC15]"
                        : "text-zinc-400 hover:text-white hover:bg-[#161616]"
                    }`}
                  >
                    <Icon className="w-4 h-4 shrink-0" />
                    <span>{item.label}</span>
                  </button>
                );
              })}
            </nav>

            <div className="pt-4 border-t border-[#222222]">
              <button
                onClick={onClose}
                className="w-full flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-xs font-semibold text-zinc-500 hover:text-red-400 transition-colors"
              >
                <LogOut className="w-4 h-4 shrink-0" />
                <span>Exit Player View</span>
              </button>
            </div>
          </div>

          {/* Right Main Dashboard Area */}
          <div className="lg:col-span-9 space-y-6">
            {/* Welcome Header */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-2">
              <div>
                <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight flex items-center gap-2">
                  <span>Welcome back, {captainName}</span>
                  <span>👋</span>
                </h1>
                <p className="text-xs sm:text-sm text-zinc-400 mt-1">
                  Here&apos;s your current tournament activity and upcoming fixtures.
                </p>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-[#161616] border border-[#2A2A2A] flex items-center justify-center text-zinc-400 hover:text-white cursor-pointer transition-colors relative">
                  <Bell className="w-4 h-4" />
                  <span className="w-2 h-2 rounded-full bg-[#FACC15] absolute top-2 right-2" />
                </div>
                {onOpenRegister && (
                  <button
                    onClick={onOpenRegister}
                    className="btn-primary px-4 py-2 text-xs font-bold"
                  >
                    <span>Register New Roster</span>
                  </button>
                )}
              </div>
            </div>

            {/* 4 Stat Cards matching design */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              <div className="surface-card p-4">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-8 h-8 rounded-lg bg-[#FACC15]/10 flex items-center justify-center text-[#FACC15]">
                    <Trophy className="w-4 h-4" />
                  </div>
                  <div className="text-2xl font-black text-white">3</div>
                </div>
                <div className="text-xs text-zinc-400 font-medium">Tournaments</div>
              </div>

              <div className="surface-card p-4">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-8 h-8 rounded-lg bg-zinc-800 flex items-center justify-center text-zinc-300">
                    <Users className="w-4 h-4" />
                  </div>
                  <div className="text-2xl font-black text-white">2</div>
                </div>
                <div className="text-xs text-zinc-400 font-medium">Teams</div>
              </div>

              <div className="surface-card p-4">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-8 h-8 rounded-lg bg-[#FACC15]/10 flex items-center justify-center text-[#FACC15]">
                    <Award className="w-4 h-4" />
                  </div>
                  <div className="text-2xl font-black text-white">1</div>
                </div>
                <div className="text-xs text-zinc-400 font-medium">Wins</div>
              </div>

              <div className="surface-card p-4">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-8 h-8 rounded-lg bg-emerald-950/60 flex items-center justify-center text-emerald-400">
                    <Wallet className="w-4 h-4" />
                  </div>
                  <div className="text-2xl font-black text-white">₹2,500</div>
                </div>
                <div className="text-xs text-zinc-400 font-medium">Earnings</div>
              </div>
            </div>

            {/* Upcoming Matches Section matching design */}
            <div className="surface-card p-6 space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="text-base font-bold text-white tracking-tight">Upcoming Matches</h3>
                <span className="text-xs font-semibold text-zinc-400 hover:text-white cursor-pointer transition-colors">
                  View All &rarr;
                </span>
              </div>

              <div className="p-4 sm:p-5 rounded-xl bg-[#161616] border border-[#222222] flex flex-col md:flex-row items-center justify-between gap-4">
                <div className="space-y-1.5 text-center md:text-left">
                  <div className="flex items-center justify-center md:justify-start gap-2">
                    <span className="text-xs font-bold text-white uppercase">{selectedGame} Cup #12</span>
                    <span className="text-[10px] font-semibold px-2 py-0.5 rounded bg-zinc-800 text-zinc-300">
                      Semi Final
                    </span>
                  </div>

                  <div className="flex items-center gap-4 pt-1">
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 rounded-md bg-[#FACC15] flex items-center justify-center text-black font-black text-[10px]">
                        V
                      </div>
                      <span className="text-sm font-bold text-white">{teamName}</span>
                    </div>

                    <span className="text-xs font-bold text-zinc-500 uppercase">VS</span>

                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 rounded-md bg-red-600 flex items-center justify-center text-white font-black text-[10px]">
                        A
                      </div>
                      <span className="text-sm font-bold text-zinc-300">Astra Elite</span>
                    </div>
                  </div>
                </div>

                <div className="text-center md:text-right px-4 py-2.5 rounded-xl bg-[#121212] border border-[#2A2A2A] shrink-0">
                  <div className="text-xs font-bold text-white">Today 8:00 PM</div>
                  <div className="text-[10px] text-zinc-400 font-medium">Room ID in WhatsApp</div>
                </div>
              </div>
            </div>

            {/* My Tournaments List matching design */}
            <div className="surface-card p-6 space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="text-base font-bold text-white tracking-tight">My Tournaments</h3>
                <span className="text-xs font-semibold text-zinc-400 hover:text-white cursor-pointer transition-colors">
                  View All &rarr;
                </span>
              </div>

              <div className="p-4 rounded-xl bg-[#161616] border border-[#222222] flex items-center justify-between gap-4">
                <div className="flex items-center gap-4">
                  <div className="relative w-16 h-14 rounded-lg overflow-hidden bg-black shrink-0">
                    <Image
                      src="https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=300&auto=format&fit=crop"
                      alt="Tournament Thumbnail"
                      fill
                      className="object-cover"
                    />
                  </div>

                  <div>
                    <h4 className="text-sm font-bold text-white">{selectedGame} Cup #12</h4>
                    <p className="text-xs text-zinc-400 mt-0.5">Squad · 64 Teams</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <span className="badge-live">
                    <span className="badge-live-dot" />
                    <span>Live</span>
                  </span>

                  <button
                    onClick={onClose}
                    className="btn-secondary px-3.5 py-1.5 text-xs font-semibold"
                  >
                    <span>View</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
