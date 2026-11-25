"use client";

import React from "react";
import { MessageCircle, Instagram, Youtube, Twitter, ArrowUp } from "lucide-react";
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
    <footer className="bg-[#08080A] border-t border-[#1C1D22] pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-[#1C1D22]">
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-7 h-7 rounded-lg bg-[#F93822] flex items-center justify-center text-white font-black text-sm">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2L2 7l10 15 10-15-10-5zm0 4.5l6 3-6 9-6-9 6-3z" />
                </svg>
              </div>
              <span className="font-extrabold text-lg tracking-tight text-white">
                WEVI <span className="text-[#F93822]">INDIA</span>
              </span>
            </div>

            <p className="text-xs text-zinc-400 leading-relaxed max-w-sm">
              The home of esports tournaments. Compete in official circuits, climb the leaderboard, and win real rewards.
            </p>

            <div className="flex items-center gap-2 pt-2">
              <a
                href={PLATFORM_INFO.community.whatsappGroupUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg bg-[#141519] border border-[#23252B] flex items-center justify-center text-zinc-400 hover:text-[#F93822] hover:border-[#F93822]/40 transition-colors"
                title="WhatsApp"
              >
                <MessageCircle className="w-4 h-4" />
              </a>
              <a
                href={PLATFORM_INFO.community.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg bg-[#141519] border border-[#23252B] flex items-center justify-center text-zinc-400 hover:text-[#F93822] hover:border-[#F93822]/40 transition-colors"
                title="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href={PLATFORM_INFO.community.youtubeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg bg-[#141519] border border-[#23252B] flex items-center justify-center text-zinc-400 hover:text-[#F93822] hover:border-[#F93822]/40 transition-colors"
                title="YouTube"
              >
                <Youtube className="w-4 h-4" />
              </a>
              <a
                href={PLATFORM_INFO.community.twitterUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg bg-[#141519] border border-[#23252B] flex items-center justify-center text-zinc-400 hover:text-[#F93822] hover:border-[#F93822]/40 transition-colors"
                title="Twitter / X"
              >
                <Twitter className="w-4 h-4" />
              </a>
            </div>
          </div>

          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs text-zinc-400">
              <li>
                <a href="#hero" className="hover:text-white transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#tournaments" className="hover:text-white transition-colors">
                  Tournaments
                </a>
              </li>
              <li>
                <a href="#games" className="hover:text-white transition-colors">
                  Games
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-white transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#community" className="hover:text-white transition-colors">
                  Community
                </a>
              </li>
            </ul>
          </div>

          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Divisions
            </h4>
            <ul className="space-y-2 text-xs text-zinc-400">
              {SUPPORTED_GAMES.map((game) => (
                <li key={game.id}>
                  <button
                    onClick={() => onSelectGame(game.name)}
                    className="hover:text-[#F93822] transition-colors"
                  >
                    {game.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Legal & Rules
            </h4>
            <ul className="space-y-2 text-xs text-zinc-400">
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
                <span className="text-zinc-500">Anti-Cheat Code</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-500">
          <div>
            &copy; {new Date().getFullYear()} WEVI INDIA Esports. All rights reserved.
          </div>

          <div className="flex items-center gap-4">
            <button onClick={onOpenPrivacy} className="hover:text-zinc-300">
              Privacy
            </button>
            <span>•</span>
            <button onClick={onOpenTerms} className="hover:text-zinc-300">
              Terms
            </button>
            <button
              onClick={scrollToTop}
              className="ml-2 w-7 h-7 rounded-lg bg-[#141519] border border-[#23252B] flex items-center justify-center hover:text-white transition-colors"
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
