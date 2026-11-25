"use client";

import React from "react";
import Image from "next/image";
import { ArrowRight, Trophy, Users, Gift, Gamepad2 } from "lucide-react";
import { PLATFORM_INFO } from "@/data/platform";

interface HeroProps {
  onOpenRegistration: () => void;
  onBrowseTournaments?: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenRegistration, onBrowseTournaments }) => {
  return (
    <section
      id="hero"
      className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-[#0B0B0B]"
    >
      {/* Subtle Yellow Angular Geometric Backdrop Accent from design */}
      <div className="hero-angular-accent" />
      <div className="absolute top-1/3 right-10 w-[500px] h-[500px] bg-[#FACC15]/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Typography, CTAs, Metrics */}
          <div className="lg:col-span-7 space-y-6">
            {/* Tagline */}
            <div className="inline-block text-xs font-bold tracking-[0.25em] text-[#FACC15] uppercase">
              {PLATFORM_INFO.tagline}
            </div>

            {/* Bold Headline matching the design exactly */}
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-white tracking-tight leading-[1.08]">
              All-in-One <br />
              Gaming Tournament <br />
              <span className="text-white">Platform</span>
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-zinc-400 max-w-xl font-normal leading-relaxed">
              {PLATFORM_INFO.subtitle}
            </p>

            {/* Action Buttons matching the design */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href="#tournaments"
                onClick={onBrowseTournaments}
                className="btn-primary px-6 py-3.5 text-sm font-bold shadow-sm"
              >
                <Gamepad2 className="w-4 h-4 stroke-[2.5]" />
                <span>Browse Tournaments</span>
                <ArrowRight className="w-4 h-4 stroke-[2.5]" />
              </a>

              <button
                onClick={onOpenRegistration}
                className="btn-secondary px-6 py-3.5 text-sm font-semibold"
              >
                <span>Register Team</span>
              </button>
            </div>

            {/* Metrics Row matching the design */}
            <div className="pt-8 border-t border-[#1F1F1F] grid grid-cols-3 gap-6 max-w-lg">
              <div className="flex items-start gap-3">
                <Users className="w-5 h-5 text-zinc-400 mt-0.5 shrink-0" />
                <div>
                  <div className="text-xl sm:text-2xl font-bold text-white tracking-tight">25K+</div>
                  <div className="text-xs text-zinc-400 font-medium">Registered Players</div>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Trophy className="w-5 h-5 text-[#FACC15] mt-0.5 shrink-0" />
                <div>
                  <div className="text-xl sm:text-2xl font-bold text-white tracking-tight">1,200+</div>
                  <div className="text-xs text-zinc-400 font-medium">Tournaments Hosted</div>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Gift className="w-5 h-5 text-[#FACC15] mt-0.5 shrink-0" />
                <div>
                  <div className="text-xl sm:text-2xl font-bold text-white tracking-tight">₹10L+</div>
                  <div className="text-xs text-zinc-400 font-medium">Total Rewards</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Gamer Imagery with Yellow Geometric Angular Motif */}
          <div className="lg:col-span-5 relative flex items-center justify-center">
            <div className="relative w-full max-w-[460px] aspect-[4/5] rounded-3xl overflow-hidden bg-[#121212] border border-[#222222] shadow-2xl">
              {/* Sharp Yellow Geometric polygon inside the image container */}
              <div className="absolute -top-12 -right-12 w-48 h-48 bg-[#FACC15] rounded-none rotate-45 pointer-events-none opacity-90 z-0" />
              <div className="absolute top-1/2 -right-6 w-32 h-64 bg-[#FACC15] -rotate-12 pointer-events-none opacity-80 z-0" />

              <Image
                src="https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=1000&auto=format&fit=crop"
                alt="Competitive Esports Player"
                fill
                priority
                className="object-cover object-center filter grayscale contrast-125 z-10 opacity-90 mix-blend-luminosity"
              />

              {/* Gradient overlay for smooth transition to dark */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0B] via-transparent to-transparent z-20" />
              <div className="absolute inset-0 bg-gradient-to-r from-[#0B0B0B]/80 via-transparent to-transparent z-20" />

              {/* Floating Live Badge inside visual */}
              <div className="absolute bottom-6 left-6 z-30 flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-[#121212]/90 border border-[#2A2A2A] backdrop-blur-md">
                <span className="w-2 h-2 rounded-full bg-[#EF4444] animate-ping" />
                <span className="text-xs font-semibold text-white">Live Tournament Season</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
