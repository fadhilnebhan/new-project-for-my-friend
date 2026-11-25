"use client";

import React, { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Tournaments } from "@/components/Tournaments";
import { SupportedGames } from "@/components/SupportedGames";
import { About } from "@/components/About";
import { WhyChooseUs } from "@/components/WhyChooseUs";
import { Community } from "@/components/Community";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { PlayerDashboard } from "@/components/PlayerDashboard";
import { RegistrationModal } from "@/components/RegistrationModal";
import { GoogleFormEmbedModal } from "@/components/GoogleFormEmbedModal";
import { LegalModal } from "@/components/LegalModals";
import { SupportedGame } from "@/types/registration";

export default function HomePage() {
  const [isRegistrationOpen, setIsRegistrationOpen] = useState(false);
  const [preselectedGame, setPreselectedGame] = useState<string | undefined>(undefined);
  const [isGoogleFormOpen, setIsGoogleFormOpen] = useState(false);
  const [legalModalType, setLegalModalType] = useState<"privacy" | "terms" | null>(null);
  const [showDashboard, setShowDashboard] = useState(false);

  const handleOpenRegistration = (game?: string) => {
    setPreselectedGame(game);
    setIsRegistrationOpen(true);
  };

  const handleSelectGame = (game: SupportedGame) => {
    handleOpenRegistration(game);
  };

  return (
    <main className="min-h-screen bg-[#0B0B0B] text-white flex flex-col selection:bg-[#FACC15] selection:text-black">
      {/* Sticky Header */}
      <Navbar
        onOpenRegistration={() => handleOpenRegistration()}
        onOpenGoogleForm={() => setIsGoogleFormOpen(true)}
        onToggleDashboard={() => setShowDashboard(!showDashboard)}
        showDashboard={showDashboard}
      />

      {showDashboard ? (
        /* Player View Dashboard matching the right side of the uploaded design */
        <PlayerDashboard
          onClose={() => setShowDashboard(false)}
          onOpenRegister={() => handleOpenRegistration()}
        />
      ) : (
        /* Main Public Platform Landing matching the left side of the uploaded design */
        <>
          {/* Hero Section */}
          <Hero
            onOpenRegistration={() => handleOpenRegistration()}
            onBrowseTournaments={() => {}}
          />

          {/* Live Tournaments Grid + Organize Banner */}
          <Tournaments onRegisterTournament={handleSelectGame} />

          {/* Supported Games */}
          <SupportedGames onSelectGame={handleSelectGame} />

          {/* About WEVI INDIA */}
          <About />

          {/* Why Choose WEVI */}
          <WhyChooseUs />

          {/* Community Section */}
          <Community />

          {/* Support & Contact */}
          <Contact />
        </>
      )}

      {/* Footer */}
      <Footer
        onOpenPrivacy={() => setLegalModalType("privacy")}
        onOpenTerms={() => setLegalModalType("terms")}
        onSelectGame={handleSelectGame}
      />

      {/* Team Registration Multi-Step Modal */}
      <RegistrationModal
        isOpen={isRegistrationOpen}
        onClose={() => setIsRegistrationOpen(false)}
        preselectedGame={preselectedGame}
      />

      {/* Google Form & Apps Script Modal */}
      <GoogleFormEmbedModal
        isOpen={isGoogleFormOpen}
        onClose={() => setIsGoogleFormOpen(false)}
        onOpenWebRegistration={() => handleOpenRegistration()}
      />

      {/* Legal Compliance Modals */}
      <LegalModal
        isOpen={legalModalType !== null}
        type={legalModalType || "privacy"}
        onClose={() => setLegalModalType(null)}
      />
    </main>
  );
}
