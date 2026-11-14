"use client";

import React from "react";
import { Shield, MessageCircle, Instagram, Youtube, Twitter, Heart, ArrowUp } from "lucide-react";
import { PLATFORM_INFO } from "@/data/platform";
import { SUPPORTED_GAMES } from "@/data/games";

interface FooterProps {
  onOpenPrivacy: () => void;
  onOpenTerms: () => void;
  onSelectGame: (gameName: any) => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenPrivacy, onOpenTerms, onSelectGame }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-wevi-darker border-t border-wevi-border/70 pt-16 pb-12 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-wevi-border/40">
          {/* Brand Info */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className="relative flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-purple-600 to-blue-600 p-[1.5px] shadow-neon-purple">
                <div className="w-full h-full bg-wevi-darker rounded-[10px] flex items-center justify-center font-extrabold text-lg text-white">
                  W
                </div>
              </div>
              <span className="font-black text-xl tracking-wider text-white">
                WEVI <span className="text-wevi-neon-blue">INDIA</span>
              </span>
            </div>

            <p className="text-xs text-gray-400 leading-relaxed max-w-sm">
              India&apos;s premier competitive esports platform dedicated to fair play, organized bracket management, and grassroots talent elevation.
            </p>

            {/* Social Channels */}
            <div className="flex items-center gap-2 pt-2">
              <a
                href={PLATFORM_INFO.community.whatsappGroupUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg bg-wevi-card border border-white/10 flex items-center justify-center text-gray-400 hover:text-emerald-400 hover:border-emerald-500/50 transition-colors"
                title="WhatsApp Group"
              >
                <MessageCircle className="w-4 h-4" />
              </a>
              <a
                href={PLATFORM_INFO.community.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg bg-wevi-card border border-white/10 flex items-center justify-center text-gray-400 hover:text-pink-400 hover:border-pink-500/50 transition-colors"
                title="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href={PLATFORM_INFO.community.youtubeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg bg-wevi-card border border-white/10 flex items-center justify-center text-gray-400 hover:text-red-400 hover:border-red-500/50 transition-colors"
                title="YouTube"
              >
                <Youtube className="w-4 h-4" />
              </a>
              <a
                href={PLATFORM_INFO.community.twitterUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg bg-wevi-card border border-white/10 flex items-center justify-center text-gray-400 hover:text-cyan-400 hover:border-cyan-500/50 transition-colors"
                title="Twitter / X"
              >
                <Twitter className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs text-gray-400">
              <li>
                <a href="#hero" className="hover:text-white transition-colors">
                  Home Arena
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-white transition-colors">
                  About WEVI
                </a>
              </li>
              <li>
                <a href="#games" className="hover:text-white transition-colors">
                  Supported Games
                </a>
              </li>
              <li>
                <a href="#tournaments" className="hover:text-white transition-colors">
                  Tournaments
                </a>
              </li>
              <li>
                <a href="#community" className="hover:text-white transition-colors">
                  Community Hub
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-white transition-colors">
                  Contact Support
                </a>
              </li>
            </ul>
          </div>

          {/* Supported Games */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Official Divisions
            </h4>
            <ul className="space-y-2 text-xs text-gray-400">
              {SUPPORTED_GAMES.map((game) => (
                <li key={game.id}>
                  <button
                    onClick={() => onSelectGame(game.name)}
                    className="hover:text-purple-300 transition-colors flex items-center gap-1.5"
                  >
                    <span>{game.name}</span>
                    <span className="text-[10px] text-gray-600 font-mono">({game.category})</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal & Operations */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Integrity & Rules
            </h4>
            <ul className="space-y-2 text-xs text-gray-400">
              <li>
                <button
                  onClick={onOpenTerms}
                  className="hover:text-white transition-colors text-left"
                >
                  Tournament Terms & Conditions
                </button>
              </li>
              <li>
                <button
                  onClick={onOpenPrivacy}
                  className="hover:text-white transition-colors text-left"
                >
                  Privacy & Data Policy
                </button>
              </li>
              <li>
                <span className="text-gray-500">
                  Anti-Cheat & Fair Play Code
                </span>
              </li>
              <li>
                <span className="text-gray-500">
                  Captain Code of Conduct
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-500">
          <div>
            &copy; {new Date().getFullYear()} WEVI INDIA Esports. All rights reserved.
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={onOpenPrivacy}
              className="hover:text-gray-300 transition-colors"
            >
              Privacy Policy
            </button>
            <span>•</span>
            <button
              onClick={onOpenTerms}
              className="hover:text-gray-300 transition-colors"
            >
              Terms & Conditions
            </button>
            <button
              onClick={scrollToTop}
              className="ml-2 w-8 h-8 rounded-lg bg-wevi-card border border-white/10 flex items-center justify-center hover:text-white hover:bg-wevi-border transition-colors"
              title="Back to top"
            >
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
