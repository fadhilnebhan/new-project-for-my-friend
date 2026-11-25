"use client";

import React, { useState, useEffect } from "react";
import { X, ArrowRight, ArrowLeft, Loader2, Sparkles, RefreshCw } from "lucide-react";
import {
  RegistrationFormData,
  RegistrationSubmission,
  SupportedGame,
} from "@/types/registration";
import {
  initialRegistrationState,
  loadDraftRegistration,
  saveDraftRegistration,
  clearDraftRegistration,
  saveSubmission,
  isDuplicateSubmission,
} from "@/lib/storage";
import { validateEmail, validateIndianPhone } from "@/lib/utils";
import { StepIndicator } from "./MultiStepForm/StepIndicator";
import { Step1BasicInfo } from "./MultiStepForm/Step1BasicInfo";
import { Step2CaptainInfo } from "./MultiStepForm/Step2CaptainInfo";
import { Step3GameSelection } from "./MultiStepForm/Step3GameSelection";
import { Step4RosterDetails } from "./MultiStepForm/Step4RosterDetails";
import { Step5Declaration } from "./MultiStepForm/Step5Declaration";
import { Step6ReviewSubmit } from "./MultiStepForm/Step6ReviewSubmit";
import { RegistrationSuccess } from "./MultiStepForm/RegistrationSuccess";

interface RegistrationModalProps {
  isOpen: boolean;
  onClose: () => void;
  preselectedGame?: string;
}

export const RegistrationModal: React.FC<RegistrationModalProps> = ({
  isOpen,
  onClose,
  preselectedGame,
}) => {
  const [currentStep, setCurrentStep] = useState<number>(1);
  const [formData, setFormData] = useState<RegistrationFormData>(initialRegistrationState);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionResult, setSubmissionResult] = useState<RegistrationSubmission | null>(null);
  const [serverError, setServerError] = useState<string | null>(null);

  useEffect(() => {
    if (isOpen) {
      const draft = loadDraftRegistration();
      if (draft) {
        setFormData((prev) => ({
          ...prev,
          ...draft,
          selectedGame: (preselectedGame as SupportedGame) || draft.selectedGame || "",
        }));
      } else if (preselectedGame) {
        setFormData((prev) => ({
          ...prev,
          selectedGame: preselectedGame as SupportedGame,
        }));
      }
    }
  }, [isOpen, preselectedGame]);

  const handleFieldChange = (field: keyof RegistrationFormData, value: any) => {
    setFormData((prev) => {
      const updated = { ...prev, [field]: value };
      saveDraftRegistration(updated);
      return updated;
    });

    if (errors[field]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[field];
        return next;
      });
    }
  };

  const steps = [
    { number: 1, title: "Basic Information", shortTitle: "Basic Info" },
    { number: 2, title: "Team Captain", shortTitle: "Captain" },
    { number: 3, title: "Game Selection", shortTitle: "Game" },
    { number: 4, title: "Roster Details", shortTitle: "Roster" },
    { number: 5, title: "Declaration", shortTitle: "Agreement" },
    { number: 6, title: "Review & Submit", shortTitle: "Review" },
  ];

  const validateStep = (step: number): boolean => {
    const newErrors: Record<string, string> = {};

    if (step === 1) {
      if (!formData.email.trim()) {
        newErrors.email = "Email address is required.";
      } else if (!validateEmail(formData.email.trim())) {
        newErrors.email = "Please enter a valid email address.";
      }

      if (!formData.teamName.trim()) {
        newErrors.teamName = "Team name is required (even if participating solo).";
      }
    }

    if (step === 2) {
      if (!formData.captainRealName.trim()) {
        newErrors.captainRealName = "Captain's real name is required.";
      }
      if (!formData.captainIgn.trim()) {
        newErrors.captainIgn = "Captain's in-game name is required.";
      }
      if (!formData.captainUid.trim()) {
        newErrors.captainUid = "Captain's UID / Game ID is required.";
      }
      if (!formData.captainPhone.trim()) {
        newErrors.captainPhone = "Captain's phone number is required.";
      } else if (!validateIndianPhone(formData.captainPhone.trim())) {
        newErrors.captainPhone = "Please enter a valid 10-digit Indian mobile number.";
      }
      if (!formData.captainWhatsapp.trim()) {
        newErrors.captainWhatsapp = "Captain's WhatsApp number is required.";
      } else if (!validateIndianPhone(formData.captainWhatsapp.trim())) {
        newErrors.captainWhatsapp = "Please enter a valid 10-digit Indian WhatsApp number.";
      }
    }

    if (step === 3) {
      if (!formData.selectedGame) {
        newErrors.selectedGame = "Please select a tournament game.";
      }
    }

    if (step === 4) {
      if (!formData.player1?.ign?.trim()) {
        newErrors["player1.ign"] = "Player 1 IGN is required.";
      }
      if (!formData.player1?.uid?.trim()) {
        newErrors["player1.uid"] = "Player 1 UID is required.";
      }

      if (formData.participationFormat === "Duo" || formData.participationFormat === "Squad") {
        if (!formData.player2?.ign?.trim()) {
          newErrors["player2.ign"] = "Player 2 IGN is required.";
        }
        if (!formData.player2?.uid?.trim()) {
          newErrors["player2.uid"] = "Player 2 UID is required.";
        }
      }

      if (formData.participationFormat === "Squad") {
        if (!formData.player3?.ign?.trim()) {
          newErrors["player3.ign"] = "Player 3 IGN is required.";
        }
        if (!formData.player3?.uid?.trim()) {
          newErrors["player3.uid"] = "Player 3 UID is required.";
        }
        if (!formData.player4?.ign?.trim()) {
          newErrors["player4.ign"] = "Player 4 IGN is required.";
        }
        if (!formData.player4?.uid?.trim()) {
          newErrors["player4.uid"] = "Player 4 UID is required.";
        }
      }
    }

    if (step === 5) {
      if (!formData.declarationAgreed) {
        newErrors.declarationAgreed = "You must select 'Yes, I agree' to proceed.";
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    if (validateStep(currentStep)) {
      setServerError(null);
      setCurrentStep((prev) => Math.min(prev + 1, steps.length));
    }
  };

  const handleBack = () => {
    setServerError(null);
    setCurrentStep((prev) => Math.max(prev - 1, 1));
  };

  const handleStepJump = (stepNumber: number) => {
    if (stepNumber < currentStep) {
      setCurrentStep(stepNumber);
    }
  };

  const handleSubmit = async () => {
    for (let s = 1; s <= 5; s++) {
      if (!validateStep(s)) {
        setCurrentStep(s);
        return;
      }
    }

    if (isDuplicateSubmission(formData.email, formData.teamName, formData.selectedGame)) {
      setServerError(
        `A registration for ${formData.teamName} or email ${formData.email} in ${formData.selectedGame} is already recorded.`
      );
      return;
    }

    setIsSubmitting(true);
    setServerError(null);

    try {
      const res = await fetch("/api/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const json = await res.json();
      if (!res.ok || !json.success) {
        throw new Error(json.message || "Registration failed. Please try again.");
      }

      const finalRecord: RegistrationSubmission = json.data;
      saveSubmission(finalRecord);
      clearDraftRegistration();
      setSubmissionResult(finalRecord);
    } catch (err: any) {
      setServerError(err.message || "Failed to submit registration. Please verify connection.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleReset = () => {
    clearDraftRegistration();
    setFormData(initialRegistrationState);
    setCurrentStep(1);
    setSubmissionResult(null);
    setServerError(null);
    setErrors({});
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/85 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 animate-in fade-in duration-150">
      <div className="relative w-full max-w-2xl bg-[#0E0E0E] border border-[#2A2A2A] rounded-2xl shadow-2xl overflow-hidden flex flex-col my-auto max-h-[92vh]">
        {/* Header Bar */}
        <div className="px-6 py-4 border-b border-[#222222] flex items-center justify-between bg-[#121212] shrink-0">
          <div className="flex items-center gap-2.5">
            <div className="w-7 h-7 rounded-lg bg-[#FACC15] flex items-center justify-center font-black text-xs text-black">
              W
            </div>
            <div>
              <span className="font-extrabold text-sm tracking-tight text-white">
                Tournament Registration
              </span>
              <div className="text-[10px] text-zinc-400 font-medium">
                Official Roster Verification
              </div>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-lg bg-[#181818] hover:bg-[#222222] text-zinc-400 hover:text-white transition-colors"
            aria-label="Close"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 overflow-y-auto flex-1">
          {submissionResult ? (
            <RegistrationSuccess
              submission={submissionResult}
              onClose={onClose}
              onNewRegistration={handleReset}
            />
          ) : (
            <>
              <StepIndicator
                currentStep={currentStep}
                totalSteps={steps.length}
                steps={steps}
                onStepClick={handleStepJump}
              />

              {currentStep === 1 && (
                <Step1BasicInfo
                  formData={formData}
                  errors={errors}
                  onChange={handleFieldChange}
                />
              )}
              {currentStep === 2 && (
                <Step2CaptainInfo
                  formData={formData}
                  errors={errors}
                  onChange={handleFieldChange}
                />
              )}
              {currentStep === 3 && (
                <Step3GameSelection
                  formData={formData}
                  errors={errors}
                  onChange={handleFieldChange}
                />
              )}
              {currentStep === 4 && (
                <Step4RosterDetails
                  formData={formData}
                  errors={errors}
                  onChange={handleFieldChange}
                />
              )}
              {currentStep === 5 && (
                <Step5Declaration
                  formData={formData}
                  errors={errors}
                  onChange={handleFieldChange}
                />
              )}
              {currentStep === 6 && (
                <Step6ReviewSubmit
                  formData={formData}
                  onEditStep={(step) => setCurrentStep(step)}
                  submissionError={serverError}
                />
              )}
            </>
          )}
        </div>

        {/* Footer Navigation */}
        {!submissionResult && (
          <div className="px-6 py-4 border-t border-[#222222] bg-[#121212] flex items-center justify-between gap-3 shrink-0">
            <div>
              {currentStep > 1 ? (
                <button
                  type="button"
                  onClick={handleBack}
                  className="btn-secondary px-4 py-2 text-xs font-semibold"
                >
                  <ArrowLeft className="w-3.5 h-3.5" />
                  <span>Back</span>
                </button>
              ) : (
                <button
                  type="button"
                  onClick={handleReset}
                  className="text-[11px] text-zinc-500 hover:text-zinc-300 flex items-center gap-1"
                >
                  <RefreshCw className="w-3 h-3" />
                  <span>Reset</span>
                </button>
              )}
            </div>

            <div className="flex items-center gap-2">
              {currentStep < steps.length ? (
                <button
                  type="button"
                  onClick={handleNext}
                  className="btn-primary px-6 py-2 text-xs font-bold"
                >
                  <span>Continue</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              ) : (
                <button
                  type="button"
                  disabled={isSubmitting}
                  onClick={handleSubmit}
                  className="btn-primary px-7 py-2.5 text-xs font-bold disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      <span>Transmitting...</span>
                    </>
                  ) : (
                    <span>Confirm & Submit</span>
                  )}
                </button>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
