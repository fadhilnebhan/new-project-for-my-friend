"use client";

import React from "react";
import { Check } from "lucide-react";

interface StepIndicatorProps {
  currentStep: number;
  totalSteps: number;
  steps: { number: number; title: string; shortTitle: string }[];
  onStepClick: (stepNumber: number) => void;
}

export const StepIndicator: React.FC<StepIndicatorProps> = ({
  currentStep,
  steps,
  onStepClick,
}) => {
  return (
    <div className="w-full mb-6">
      {/* Mobile bar */}
      <div className="sm:hidden mb-3">
        <div className="flex items-center justify-between text-xs font-bold text-zinc-400 mb-1.5">
          <span className="text-[#FACC15] uppercase tracking-wider">
            Step {currentStep} of {steps.length}
          </span>
          <span className="text-white font-medium">
            {steps[currentStep - 1]?.title}
          </span>
        </div>
        <div className="w-full h-1 bg-[#1A1A1A] rounded-full overflow-hidden">
          <div
            className="h-full bg-[#FACC15] transition-all duration-300"
            style={{ width: `${(currentStep / steps.length) * 100}%` }}
          />
        </div>
      </div>

      {/* Desktop step list matching clean BracketHub UI */}
      <div className="hidden sm:flex items-center justify-between relative">
        <div className="absolute top-1/2 left-0 right-0 h-[1px] bg-[#222222] -translate-y-1/2 z-0" />
        <div
          className="absolute top-1/2 left-0 h-[1px] bg-[#FACC15] -translate-y-1/2 z-0 transition-all duration-300"
          style={{ width: `${((currentStep - 1) / (steps.length - 1)) * 100}%` }}
        />

        {steps.map((step) => {
          const isCompleted = currentStep > step.number;
          const isCurrent = currentStep === step.number;
          const isClickable = isCompleted;

          return (
            <div
              key={step.number}
              onClick={() => isClickable && onStepClick(step.number)}
              className={`relative z-10 flex flex-col items-center ${
                isClickable ? "cursor-pointer" : "cursor-default"
              }`}
            >
              <div
                className={`w-7 h-7 rounded-full flex items-center justify-center font-bold text-xs transition-all duration-200 ${
                  isCompleted
                    ? "bg-[#FACC15] text-black"
                    : isCurrent
                    ? "bg-[#0B0B0B] text-[#FACC15] border-2 border-[#FACC15] ring-2 ring-[#FACC15]/20"
                    : "bg-[#141414] text-zinc-500 border border-[#262626]"
                }`}
              >
                {isCompleted ? <Check className="w-3.5 h-3.5 stroke-[3]" /> : step.number}
              </div>

              <span
                className={`text-[10px] font-semibold tracking-wider uppercase mt-1.5 transition-colors ${
                  isCurrent
                    ? "text-white font-bold"
                    : isCompleted
                    ? "text-zinc-400"
                    : "text-zinc-600"
                }`}
              >
                {step.shortTitle}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
};
