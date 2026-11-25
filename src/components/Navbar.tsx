"use client";

import React, { useState, useEffect } from "react";
import { Search, Menu, X, LayoutDashboard } from "lucide-react";

interface NavbarProps {
  onOpenRegistration: (preselectedGame?: string) => void;
  onOpenGoogleForm: () => void;
  onToggleDashboard?: () => void;
  showDashboard?: boolean;
}

export const Navbar: React.FC<NavbarProps> = ({
  onOpenRegistration,
  onOpenGoogleForm,
  onToggleDashboard,
  showDashboard = false,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("Home");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Home", href: "#hero" },
    { label: "Tournaments", href: "#tournaments" },
    { label: "Leaderboard", href: "#about" },
    { label: "Community", href: "#community" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-200 ${
        isScrolled
          ? "bg-[#08080A]/95 backdrop-blur-md border-b border-[#23252B] py-3.5"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo matching the red crest in the image */}
          <a href="#hero" className="flex items-center gap-2.5 group">
            <div className="w-8 h-8 rounded-lg bg-[#F93822] flex items-center justify-center text-white font-black transition-transform duration-200 group-hover:scale-105 shadow-sm">
              {/* Sharp Crest Vector */}
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2L2 7l10 15 10-15-10-5zm0 4.5l6 3-6 9-6-9 6-3z" />
              </svg>
            </div>
            <div className="flex items-baseline gap-1.5">
              <span className="font-extrabold text-lg tracking-tight text-white">
                WEVI <span className="text-[#F93822]">INDIA</span>
              </span>
              <span className="text-[10px] font-semibold text-zinc-500 uppercase tracking-widest hidden sm:inline">
                BRACKETHUB
              </span>
            </div>
          </a>

          {/* Desktop Nav Links matching reference */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => {
              const isActive = activeTab === link.label;
              return (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setActiveTab(link.label)}
                  className={`text-sm font-medium transition-colors relative py-1 ${
                    isActive ? "text-white" : "text-zinc-400 hover:text-white"
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#F93822] rounded-full" />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Right Action Controls: Search, Log in, Get Started */}
          <div className="hidden sm:flex items-center gap-3">
            {/* Search Icon button */}
            <button
              onClick={() => {
                const el = document.getElementById("tournaments");
                el?.scrollIntoView({ behavior: "smooth" });
              }}
              className="w-9 h-9 rounded-xl bg-transparent hover:bg-[#16171B] text-zinc-400 hover:text-white flex items-center justify-center transition-colors"
              title="Search Tournaments"
            >
              <Search className="w-4 h-4" />
            </button>

            {/* Dashboard / Log in button */}
            {onToggleDashboard && (
              <button
                onClick={onToggleDashboard}
                className={`px-4 py-2 text-xs font-semibold rounded-xl border transition-all flex items-center gap-1.5 ${
                  showDashboard
                    ? "bg-[#F93822] text-white border-[#F93822]"
                    : "bg-transparent text-zinc-300 border-[#2E3036] hover:bg-[#16171B] hover:text-white"
                }`}
              >
                <LayoutDashboard className="w-3.5 h-3.5" />
                <span>{showDashboard ? "Exit Dashboard" : "Log in"}</span>
              </button>
            )}

            {/* Primary Coral CTA */}
            <button
              onClick={() => onOpenRegistration()}
              className="btn-coral px-5 py-2 text-xs font-bold shadow-sm"
            >
              <span>Get Started</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-2">
            <button
              onClick={() => onOpenRegistration()}
              className="btn-coral px-3.5 py-1.5 text-xs font-bold"
            >
              Register
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl bg-[#16171B] border border-[#2E3036] text-zinc-300 hover:text-white"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#08080A] border-b border-[#23252B] px-4 pt-3 pb-6 space-y-3">
          <div className="flex flex-col gap-1 pb-3 border-b border-[#23252B]">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 text-sm font-medium text-zinc-300 hover:text-white hover:bg-[#121316] rounded-lg transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="flex flex-col gap-2 pt-2">
            {onToggleDashboard && (
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onToggleDashboard();
                }}
                className="w-full py-2.5 rounded-xl text-xs font-semibold bg-[#121316] text-white border border-[#23252B] flex items-center justify-center gap-2"
              >
                <LayoutDashboard className="w-4 h-4 text-[#F93822]" />
                <span>{showDashboard ? "Close Dashboard" : "Player Dashboard"}</span>
              </button>
            )}

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenRegistration();
              }}
              className="btn-coral w-full py-3 text-xs font-bold"
            >
              <span>Register Team</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
