"use client";

import React from "react";
import { AlertCircle, FileCheck, CheckCircle2, XCircle } from "lucide-react";
import { RegistrationFormData } from "@/types/registration";
import { PLATFORM_INFO } from "@/data/platform";

interface Step5Props {
  formData: RegistrationFormData;
  errors: Record<string, string>;
  onChange: (field: keyof RegistrationFormData, value: any) => void;
}

export const Step5Declaration: React.FC<Step5Props> = ({ formData, errors, onChange }) => {
  return (
    <div className="space-y-5 animate-in fade-in duration-200">
      <div className="border-b border-[#222222] pb-3">
        <h3 className="text-base font-bold text-white tracking-tight">
          Step 5: Declaration & Agreement
        </h3>
        <p className="text-xs text-zinc-400 mt-0.5">
          Agreement with official WEVI tournament regulations is required to submit.
        </p>
      </div>

      <div className="p-5 rounded-2xl bg-[#141414] border border-[#2A2A2A] space-y-4">
        <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#FACC15]">
          <FileCheck className="w-4 h-4" />
          <span>Captain Declaration</span>
        </div>

        <blockquote className="text-xs sm:text-sm text-zinc-300 leading-relaxed font-medium p-4 rounded-xl bg-[#0E0E0E] border-l-2 border-l-[#FACC15] italic">
          &ldquo;{PLATFORM_INFO.declarationText}&rdquo;
        </blockquote>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
          {/* Yes, I agree */}
          <div
            onClick={() => onChange("declarationAgreed", true)}
            className={`p-3.5 rounded-xl border cursor-pointer transition-all flex items-center gap-3 ${
              formData.declarationAgreed
                ? "bg-[#1C1C1C] border-[#FACC15] ring-1 ring-[#FACC15]"
                : "bg-[#121212] border-[#2A2A2A] hover:border-[#3A3A3A]"
            }`}
          >
            <div
              className={`w-4 h-4 rounded-full border-2 flex items-center justify-center shrink-0 ${
                formData.declarationAgreed
                  ? "border-[#FACC15] bg-[#FACC15]"
                  : "border-zinc-500 bg-transparent"
              }`}
            >
              {formData.declarationAgreed && <div className="w-1.5 h-1.5 rounded-full bg-black" />}
            </div>
            <div>
              <div className="text-xs font-bold text-white flex items-center gap-1.5">
                <span>Yes, I agree</span>
                <CheckCircle2 className="w-3.5 h-3.5 text-[#FACC15]" />
              </div>
              <div className="text-[10px] text-zinc-400">All entered information is true & accurate</div>
            </div>
          </div>

          {/* No, I don't agree */}
          <div
            onClick={() => onChange("declarationAgreed", false)}
            className={`p-3.5 rounded-xl border cursor-pointer transition-all flex items-center gap-3 ${
              !formData.declarationAgreed
                ? "bg-red-950/20 border-red-500/60"
                : "bg-[#121212] border-[#2A2A2A] hover:border-[#3A3A3A]"
            }`}
          >
            <div
              className={`w-4 h-4 rounded-full border-2 flex items-center justify-center shrink-0 ${
                !formData.declarationAgreed
                  ? "border-red-400 bg-red-600 text-white"
                  : "border-zinc-500 bg-transparent"
              }`}
            >
              {!formData.declarationAgreed && <div className="w-1.5 h-1.5 rounded-full bg-white" />}
            </div>
            <div>
              <div className="text-xs font-bold text-zinc-300 flex items-center gap-1.5">
                <span>No, I don&apos;t agree</span>
                <XCircle className="w-3.5 h-3.5 text-red-400" />
              </div>
              <div className="text-[10px] text-zinc-500">Registration cannot be submitted without agreeing</div>
            </div>
          </div>
        </div>

        {errors.declarationAgreed && (
          <div className="p-3 rounded-xl bg-red-950/40 border border-red-500/40 flex items-center gap-2 text-xs text-red-300">
            <AlertCircle className="w-4 h-4 shrink-0 text-red-400" />
            <span>{errors.declarationAgreed}</span>
          </div>
        )}
      </div>
    </div>
  );
};
