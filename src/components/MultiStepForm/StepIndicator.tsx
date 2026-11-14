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
    <div className="w-full mb-8">
      {/* Mobile progress bar */}
      <div className="sm:hidden mb-4">
        <div className="flex items-center justify-between text-xs font-bold text-gray-400 mb-2">
          <span className="text-purple-400 uppercase tracking-wider">
            Step {currentStep} of {steps.length}
          </span>
          <span className="text-white font-medium">
            {steps[currentStep - 1]?.title}
          </span>
        </div>
        <div className="w-full h-1.5 bg-wevi-darker rounded-full overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-purple-600 to-blue-500 transition-all duration-300"
            style={{ width: `${(currentStep / steps.length) * 100}%` }}
          />
        </div>
      </div>

      {/* Desktop step list */}
      <div className="hidden sm:flex items-center justify-between relative">
        <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-wevi-border -translate-y-1/2 z-0" />
        <div
          className="absolute top-1/2 left-0 h-0.5 bg-gradient-to-r from-purple-600 to-blue-500 -translate-y-1/2 z-0 transition-all duration-500"
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
              className={`relative z-10 flex flex-col items-center group ${
                isClickable ? "cursor-pointer" : "cursor-default"
              }`}
            >
              <div
                className={`w-9 h-9 rounded-xl flex items-center justify-center font-bold text-xs transition-all duration-300 ${
                  isCompleted
                    ? "bg-purple-600 text-white shadow-neon-purple"
                    : isCurrent
                    ? "bg-wevi-darker text-white border-2 border-purple-500 shadow-neon-purple ring-4 ring-purple-950/50"
                    : "bg-wevi-darker text-gray-500 border border-wevi-border"
                }`}
              >
                {isCompleted ? <Check className="w-4 h-4 stroke-[3]" /> : step.number}
              </div>

              <span
                className={`text-[11px] font-semibold tracking-wider uppercase mt-2 transition-colors ${
                  isCurrent
                    ? "text-purple-300 font-bold"
                    : isCompleted
                    ? "text-gray-300 group-hover:text-purple-400"
                    : "text-gray-500"
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
