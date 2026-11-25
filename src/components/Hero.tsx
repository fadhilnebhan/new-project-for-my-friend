"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { ArrowRight, Trophy, Users, Gift, Play, Pause, Volume2, VolumeX } from "lucide-react";

interface HeroProps {
  onOpenRegistration: () => void;
  onBrowseTournaments?: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenRegistration, onBrowseTournaments }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);

  const slides = [
    {
      id: 0,
      tagline: "P L A Y   /   C O M P E T E   /   W I N",
      headlinePrefix: "The Home of",
      headlineAccent: "Esports",
      headlineSuffix: "Tournaments",
      subtitle:
        "Compete in official tournaments, climb the leaderboard, and win real rewards across BGMI, Free Fire, Call of Duty, and eFootball.",
      image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=1600&auto=format&fit=crop",
      statPlayers: "25K+",
      statTournaments: "1,200+",
      statRewards: "₹10L+",
    },
    {
      id: 1,
      tagline: "B G M I   /   F R E E   F I R E   /   C O D",
      headlinePrefix: "Compete in",
      headlineAccent: "Live Pro",
      headlineSuffix: "Circuits",
      subtitle:
        "Step into verified custom room brackets with real-time point tables, live stream broadcasts, and automated prize payouts.",
      image: "https://images.unsplash.com/photo-1538481199705-c710c4e965fc?q=80&w=1600&auto=format&fit=crop",
      statPlayers: "10K+ Teams",
      statTournaments: "48 Daily Rooms",
      statRewards: "₹50,000 Cup",
    },
    {
      id: 2,
      tagline: "F A I R   P L A Y   /   Z E R O   C H E A T",
      headlinePrefix: "Organize & Join",
      headlineAccent: "Custom",
      headlineSuffix: "Leagues",
      subtitle:
        "Run tournaments for your clan, university, or brand with referee verification, automated slot assignments, and WhatsApp room delivery.",
      image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=1600&auto=format&fit=crop",
      statPlayers: "100% Anti-Cheat",
      statTournaments: "Instant Passes",
      statRewards: "Verified KYC",
    },
  ];

  // Auto-advance slides when playing
  useEffect(() => {
    if (!isPlaying) return;
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [isPlaying, slides.length]);

  const active = slides[currentSlide];

  return (
    <section id="hero" className="relative min-h-[92vh] flex flex-col justify-between pt-32 pb-10 overflow-hidden bg-[#08080A]">
      {/* Background Cinematic Slide Imagery with Smooth Fade Transition */}
      <div className="absolute inset-0 z-0">
        {slides.map((slide, idx) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              currentSlide === idx ? "opacity-40" : "opacity-0"
            }`}
          >
            <Image
              src={slide.image}
              alt="Esports Arena Background"
              fill
              priority={idx === 0}
              className="object-cover object-center filter brightness-50 contrast-125"
            />
          </div>
        ))}

        {/* Cinematic Vignette Overlay */}
        <div className="hero-vignette absolute inset-0 z-10 pointer-events-none" />
      </div>

      {/* Main Content Area */}
      <div className="relative z-20 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center justify-center my-auto">
        {/* Pre-title Tagline with Slashes */}
        <div className="inline-block text-xs font-semibold tracking-[0.3em] text-zinc-400 uppercase mb-5">
          {active.tagline}
        </div>

        {/* Master Headline matching reference */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-white tracking-tight leading-[1.05] mb-6">
          <span>{active.headlinePrefix} </span>
          <span className="text-[#F93822] italic font-black font-sans">{active.headlineAccent} </span>
          <br className="hidden sm:inline" />
          <span>{active.headlineSuffix}</span>
        </h1>

        {/* Subtitle */}
        <p className="text-sm sm:text-base md:text-lg text-zinc-300 max-w-2xl mx-auto mb-9 font-normal leading-relaxed">
          {active.subtitle}
        </p>

        {/* CTAs matching reference */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-14">
          <a
            href="#tournaments"
            onClick={onBrowseTournaments}
            className="btn-coral px-7 py-3.5 text-sm font-bold shadow-lg"
          >
            <span>Browse Tournaments</span>
            <ArrowRight className="w-4 h-4 stroke-[2.5]" />
          </a>

          <button
            onClick={onOpenRegistration}
            className="btn-dark px-7 py-3.5 text-sm font-semibold hover:border-zinc-500"
          >
            <span>Host a Tournament</span>
          </button>
        </div>

        {/* Metrics Row matching reference */}
        <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-14 text-left">
          <div className="flex items-center gap-3">
            <Users className="w-5 h-5 text-[#F93822] shrink-0" />
            <div>
              <div className="text-lg sm:text-xl font-bold text-white tracking-tight">
                {active.statPlayers}
              </div>
              <div className="text-[11px] text-zinc-400 font-medium">Players</div>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <Trophy className="w-5 h-5 text-[#F93822] shrink-0" />
            <div>
              <div className="text-lg sm:text-xl font-bold text-white tracking-tight">
                {active.statTournaments}
              </div>
              <div className="text-[11px] text-zinc-400 font-medium">Tournaments</div>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <Gift className="w-5 h-5 text-[#F93822] shrink-0" />
            <div>
              <div className="text-lg sm:text-xl font-bold text-white tracking-tight">
                {active.statRewards}
              </div>
              <div className="text-[11px] text-zinc-400 font-medium">Rewards</div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Slider / Pagination Bar matching the design image */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-8">
        <div className="flex items-center justify-between">
          {/* Left: Video / Watch Pill */}
          <button
            onClick={() => setIsPlaying(!isPlaying)}
            className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#121316]/80 hover:bg-[#1E1F24] border border-[#23252B] text-zinc-300 hover:text-white text-xs font-medium transition-colors backdrop-blur-md"
          >
            {isPlaying ? (
              <Pause className="w-3.5 h-3.5 text-[#F93822]" />
            ) : (
              <Play className="w-3.5 h-3.5 text-[#F93822]" />
            )}
            <span className="hidden sm:inline">Watch Full Video</span>
          </button>

          {/* Center: Interactive Slide Page Progress Bars */}
          <div className="flex items-center gap-2.5">
            {slides.map((_, idx) => {
              const isCurrent = currentSlide === idx;
              return (
                <button
                  key={idx}
                  onClick={() => setCurrentSlide(idx)}
                  className={`h-1 rounded-full transition-all duration-300 ${
                    isCurrent
                      ? "w-10 sm:w-14 bg-white"
                      : "w-6 sm:w-8 bg-[#33353D] hover:bg-zinc-500"
                  }`}
                  aria-label={`Slide ${idx + 1}`}
                />
              );
            })}
          </div>

          {/* Right: Audio Mute Toggle */}
          <button
            onClick={() => setIsMuted(!isMuted)}
            className="w-8 h-8 rounded-full bg-[#121316]/80 hover:bg-[#1E1F24] border border-[#23252B] flex items-center justify-center text-zinc-400 hover:text-white transition-colors backdrop-blur-md"
            aria-label="Toggle Sound"
          >
            {isMuted ? <VolumeX className="w-3.5 h-3.5" /> : <Volume2 className="w-3.5 h-3.5 text-[#F93822]" />}
          </button>
        </div>
      </div>
    </section>
  );
};
