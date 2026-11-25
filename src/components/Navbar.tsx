"use client";

import React, { useState, useEffect } from "react";
import { Menu, X, ArrowRight, LayoutDashboard, Flame } from "lucide-react";

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

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Home", href: "#hero" },
    { label: "Tournaments", href: "#tournaments" },
    { label: "Games", href: "#games" },
    { label: "Community", href: "#community" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-200 ${
        isScrolled
          ? "bg-[#0B0B0B]/95 backdrop-blur-md border-b border-[#2A2A2A] py-3.5"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo matching BracketHub sharp yellow geometric aesthetic */}
          <a href="#hero" className="flex items-center gap-2.5 group">
            <div className="w-8 h-8 rounded-lg bg-[#FACC15] flex items-center justify-center text-black font-black text-lg transition-transform duration-200 group-hover:scale-105 shadow-sm">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M4 4h4v6h8V4h4v16h-4v-6H8v6H4V4z" />
              </svg>
            </div>
            <div className="flex items-baseline gap-1.5">
              <span className="font-extrabold text-lg tracking-tight text-white">
                WEVI <span className="text-[#FACC15]">INDIA</span>
              </span>
              <span className="text-[10px] font-semibold text-zinc-500 uppercase tracking-widest hidden sm:inline">
                ESPORTS
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-7">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-zinc-400 hover:text-white transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Header Action Buttons matching the design */}
          <div className="hidden sm:flex items-center gap-3">
            {onToggleDashboard && (
              <button
                onClick={onToggleDashboard}
                className={`px-4 py-2 text-xs font-semibold rounded-xl border transition-all flex items-center gap-1.5 ${
                  showDashboard
                    ? "bg-[#FACC15] text-black border-[#FACC15]"
                    : "bg-[#161616] text-zinc-300 border-[#2A2A2A] hover:border-zinc-500 hover:text-white"
                }`}
                title="Toggle Player View Dashboard"
              >
                <LayoutDashboard className="w-3.5 h-3.5" />
                <span>{showDashboard ? "Exit Dashboard" : "Player Dashboard"}</span>
              </button>
            )}

            <button
              onClick={onOpenGoogleForm}
              className="px-3.5 py-2 text-xs font-medium text-zinc-400 hover:text-white bg-[#161616] hover:bg-[#1E1E1E] border border-[#2A2A2A] rounded-xl transition-all"
            >
              Google Form
            </button>

            <button
              onClick={() => onOpenRegistration()}
              className="btn-primary px-5 py-2 text-xs uppercase tracking-wider font-bold shadow-sm"
            >
              <span>Get Started</span>
              <ArrowRight className="w-3.5 h-3.5 stroke-[2.5]" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-2">
            <button
              onClick={() => onOpenRegistration()}
              className="btn-primary px-3 py-1.5 text-xs font-bold"
            >
              Register
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl bg-[#161616] border border-[#2A2A2A] text-zinc-300 hover:text-white"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#0B0B0B] border-b border-[#2A2A2A] px-4 pt-3 pb-6 space-y-3">
          <div className="flex flex-col gap-1 pb-3 border-b border-[#2A2A2A]">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 text-sm font-medium text-zinc-300 hover:text-white hover:bg-[#161616] rounded-lg transition-colors"
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
                className="w-full py-2.5 rounded-xl text-xs font-semibold bg-[#161616] text-white border border-[#2A2A2A] flex items-center justify-center gap-2"
              >
                <LayoutDashboard className="w-4 h-4 text-[#FACC15]" />
                <span>{showDashboard ? "Close Dashboard" : "Open Player Dashboard"}</span>
              </button>
            )}

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenRegistration();
              }}
              className="btn-primary w-full py-3 text-xs font-bold"
            >
              <span>Register Team / Solo</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
