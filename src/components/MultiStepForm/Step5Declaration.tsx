"use client";

import React from "react";
import { ShieldCheck, AlertCircle, FileCheck, CheckCircle2, XCircle } from "lucide-react";
import { RegistrationFormData } from "@/types/registration";
import { PLATFORM_INFO } from "@/data/platform";

interface Step5Props {
  formData: RegistrationFormData;
  errors: Record<string, string>;
  onChange: (field: keyof RegistrationFormData, value: any) => void;
}

export const Step5Declaration: React.FC<Step5Props> = ({ formData, errors, onChange }) => {
  return (
    <div className="space-y-6 animate-in fade-in duration-300">
      <div className="border-b border-wevi-border/60 pb-4">
        <h3 className="text-xl font-black uppercase tracking-tight text-white flex items-center gap-2">
          <span>Step 5: Declaration & Agreement</span>
        </h3>
        <p className="text-xs text-gray-400 mt-1">
          Review the official tournament declaration. Agreement is mandatory to participate in WEVI leagues.
        </p>
      </div>

      {/* Official Declaration Card */}
      <div className="p-5 sm:p-6 rounded-2xl bg-wevi-card/80 border border-purple-500/30 shadow-xl space-y-4">
        <div className="flex items-center gap-2.5 text-xs font-bold uppercase tracking-wider text-purple-300">
          <FileCheck className="w-4 h-4 text-purple-400" />
          <span>Official Captain Declaration</span>
        </div>

        <blockquote className="text-sm sm:text-base text-gray-200 leading-relaxed font-medium p-4 rounded-xl bg-wevi-darker/80 border-l-4 border-l-purple-500 italic">
          &ldquo;{PLATFORM_INFO.declarationText}&rdquo;
        </blockquote>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
          {/* Option: Yes, I agree */}
          <div
            onClick={() => onChange("declarationAgreed", true)}
            className={`p-4 rounded-xl border cursor-pointer transition-all duration-200 flex items-center gap-3 ${
              formData.declarationAgreed
                ? "bg-purple-950/60 border-purple-500 shadow-neon-purple ring-2 ring-purple-500/40"
                : "bg-wevi-darker/90 border-wevi-border hover:border-purple-500/40 hover:bg-wevi-card"
            }`}
          >
            <div
              className={`w-5 h-5 rounded-full border-2 flex items-center justify-center shrink-0 ${
                formData.declarationAgreed
                  ? "border-purple-400 bg-purple-600 text-white"
                  : "border-gray-500 bg-transparent"
              }`}
            >
              {formData.declarationAgreed && (
                <div className="w-2 h-2 rounded-full bg-white" />
              )}
            </div>
            <div>
              <div className="text-xs font-bold text-white uppercase tracking-wider flex items-center gap-1.5">
                <span>Yes, I agree</span>
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
              </div>
              <div className="text-[10px] text-gray-400">I confirm all entered details are accurate</div>
            </div>
          </div>

          {/* Option: No, I don't agree */}
          <div
            onClick={() => onChange("declarationAgreed", false)}
            className={`p-4 rounded-xl border cursor-pointer transition-all duration-200 flex items-center gap-3 ${
              !formData.declarationAgreed
                ? "bg-red-950/20 border-red-500/60"
                : "bg-wevi-darker/90 border-wevi-border hover:border-red-500/40 hover:bg-wevi-card"
            }`}
          >
            <div
              className={`w-5 h-5 rounded-full border-2 flex items-center justify-center shrink-0 ${
                !formData.declarationAgreed
                  ? "border-red-400 bg-red-600 text-white"
                  : "border-gray-500 bg-transparent"
              }`}
            >
              {!formData.declarationAgreed && (
                <div className="w-2 h-2 rounded-full bg-white" />
              )}
            </div>
            <div>
              <div className="text-xs font-bold text-gray-300 uppercase tracking-wider flex items-center gap-1.5">
                <span>No, I don&apos;t agree</span>
                <XCircle className="w-3.5 h-3.5 text-red-400" />
              </div>
              <div className="text-[10px] text-gray-500">Registration cannot be submitted without agreeing</div>
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

      <div className="p-4 rounded-xl bg-wevi-card border border-white/5 space-y-1.5">
        <div className="text-xs font-bold uppercase tracking-wider text-gray-300 flex items-center gap-1.5">
          <ShieldCheck className="w-4 h-4 text-cyan-400" />
          <span>Esports Integrity Policy</span>
        </div>
        <p className="text-[11px] text-gray-400 leading-relaxed">
          Submitting fraudulent UIDs, smurf accounts, or incorrect contact information will lead to immediate disqualification from current and future WEVI events.
        </p>
      </div>
    </div>
  );
};
