"use client";

import React, { useState, useEffect } from "react";
import { Shield, Menu, X, Trophy, Flame, ChevronRight, FileSpreadsheet } from "lucide-react";

interface NavbarProps {
  onOpenRegistration: (preselectedGame?: string) => void;
  onOpenGoogleForm: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenRegistration, onOpenGoogleForm }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Home", href: "#hero" },
    { label: "About", href: "#about" },
    { label: "Games", href: "#games" },
    { label: "Tournaments", href: "#tournaments" },
    { label: "Why WEVI", href: "#why-choose-us" },
    { label: "Community", href: "#community" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? "bg-wevi-darker/90 backdrop-blur-md border-b border-wevi-border/70 py-3 shadow-2xl"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#hero" className="flex items-center gap-3 group">
            <div className="relative flex items-center justify-center w-11 h-11 rounded-xl bg-gradient-to-br from-purple-600 via-indigo-600 to-blue-600 p-[1.5px] transition-transform duration-300 group-hover:scale-105 shadow-neon-purple">
              <div className="w-full h-full bg-wevi-darker rounded-[10px] flex items-center justify-center">
                <span className="font-extrabold text-xl tracking-tighter bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-300 bg-clip-text text-transparent">
                  W
                </span>
              </div>
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-1.5">
                <span className="font-black text-xl tracking-wider text-white">
                  WEVI <span className="text-wevi-neon-blue">INDIA</span>
                </span>
                <span className="px-1.5 py-0.5 text-[9px] font-bold uppercase tracking-widest bg-purple-950/80 text-purple-300 border border-purple-800/60 rounded">
                  ESPORTS
                </span>
              </div>
              <span className="text-[10px] text-gray-400 tracking-wider font-medium uppercase">
                Competitive Gaming Hub
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-1 bg-wevi-card/50 border border-wevi-border/50 px-3 py-1.5 rounded-full backdrop-blur-sm">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wider text-gray-300 hover:text-white hover:bg-wevi-border/40 rounded-full transition-all duration-200"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Action CTAs */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              onClick={onOpenGoogleForm}
              className="inline-flex items-center gap-1.5 px-3 py-2 text-xs font-semibold text-gray-300 hover:text-white bg-wevi-card border border-wevi-border hover:border-wevi-borderHover rounded-lg transition-all"
              title="Open Official Google Forms"
            >
              <FileSpreadsheet className="w-3.5 h-3.5 text-purple-400" />
              <span>Google Form</span>
            </button>

            <button
              onClick={() => onOpenRegistration()}
              className="relative group overflow-hidden px-5 py-2.5 rounded-lg font-bold text-xs uppercase tracking-wider text-white bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 transition-all duration-300 shadow-neon-purple active:scale-95"
            >
              <div className="flex items-center gap-2">
                <Flame className="w-4 h-4 text-wevi-neon-cyan animate-pulse" />
                <span>Register Now</span>
              </div>
              <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center gap-2">
            <button
              onClick={() => onOpenRegistration()}
              className="sm:hidden px-3 py-1.5 text-xs font-bold uppercase rounded-lg text-white bg-purple-600 shadow-neon-purple"
            >
              Register
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg bg-wevi-card border border-wevi-border text-gray-300 hover:text-white focus:outline-none"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-wevi-darker/95 border-b border-wevi-border/80 px-4 pt-3 pb-6 space-y-3 backdrop-blur-xl animate-in slide-in-from-top-4 duration-200">
          <div className="grid grid-cols-2 gap-2 pb-3 border-b border-wevi-border/40">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 text-xs font-medium text-gray-300 hover:text-white hover:bg-wevi-card rounded-md transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="flex flex-col gap-2.5 pt-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenRegistration();
              }}
              className="w-full py-3 rounded-lg font-bold text-xs uppercase tracking-wider text-white bg-gradient-to-r from-purple-600 to-blue-600 flex items-center justify-center gap-2 shadow-neon-purple"
            >
              <Trophy className="w-4 h-4 text-cyan-300" />
              <span>Register Team / Solo</span>
            </button>

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenGoogleForm();
              }}
              className="w-full py-2.5 rounded-lg font-semibold text-xs text-gray-300 bg-wevi-card border border-wevi-border flex items-center justify-center gap-2"
            >
              <FileSpreadsheet className="w-4 h-4 text-purple-400" />
              <span>Direct Google Form Setup</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
