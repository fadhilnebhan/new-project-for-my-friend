"use client";

import React, { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { SupportedGames } from "@/components/SupportedGames";
import { Tournaments } from "@/components/Tournaments";
import { WhyChooseUs } from "@/components/WhyChooseUs";
import { Community } from "@/components/Community";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { RegistrationModal } from "@/components/RegistrationModal";
import { GoogleFormEmbedModal } from "@/components/GoogleFormEmbedModal";
import { LegalModal } from "@/components/LegalModals";
import { SupportedGame } from "@/types/registration";

export default function HomePage() {
  const [isRegistrationOpen, setIsRegistrationOpen] = useState(false);
  const [preselectedGame, setPreselectedGame] = useState<string | undefined>(undefined);
  const [isGoogleFormOpen, setIsGoogleFormOpen] = useState(false);
  const [legalModalType, setLegalModalType] = useState<"privacy" | "terms" | null>(null);

  const handleOpenRegistration = (game?: string) => {
    setPreselectedGame(game);
    setIsRegistrationOpen(true);
  };

  const handleSelectGame = (game: SupportedGame) => {
    handleOpenRegistration(game);
  };

  return (
    <main className="min-h-screen bg-wevi-darker text-gray-100 flex flex-col selection:bg-purple-600 selection:text-white">
      {/* Sticky Navigation Bar */}
      <Navbar
        onOpenRegistration={() => handleOpenRegistration()}
        onOpenGoogleForm={() => setIsGoogleFormOpen(true)}
      />

      {/* Hero Section */}
      <Hero onOpenRegistration={() => handleOpenRegistration()} />

      {/* About WEVI INDIA */}
      <About />

      {/* Supported Games */}
      <SupportedGames onSelectGame={handleSelectGame} />

      {/* Tournaments Showcase */}
      <Tournaments onRegisterTournament={handleSelectGame} />

      {/* Why Choose WEVI */}
      <WhyChooseUs />

      {/* Community Section */}
      <Community />

      {/* Contact Section */}
      <Contact />

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

      {/* Legal & Compliance Modals */}
      <LegalModal
        isOpen={legalModalType !== null}
        type={legalModalType || "privacy"}
        onClose={() => setLegalModalType(null)}
      />
    </main>
  );
}
