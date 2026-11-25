"use client";

import React from "react";
import { Mail, Users, AlertCircle, Info } from "lucide-react";
import { RegistrationFormData } from "@/types/registration";

interface Step1Props {
  formData: RegistrationFormData;
  errors: Record<string, string>;
  onChange: (field: keyof RegistrationFormData, value: any) => void;
}

export const Step1BasicInfo: React.FC<Step1Props> = ({ formData, errors, onChange }) => {
  return (
    <div className="space-y-5 animate-in fade-in duration-200">
      <div className="border-b border-[#222222] pb-3">
        <h3 className="text-base font-bold text-white tracking-tight">
          Step 1: Basic Information
        </h3>
        <p className="text-xs text-zinc-400 mt-0.5">
          Provide your team contact email and official roster clan name.
        </p>
      </div>

      <div className="space-y-4">
        {/* Email */}
        <div>
          <label className="block text-xs font-semibold text-zinc-300 mb-1.5 flex items-center justify-between">
            <span className="flex items-center gap-1.5">
              <span>Email Address</span>
              <span className="text-red-400">*</span>
            </span>
            <span className="text-[10px] text-zinc-500 font-normal">Official communication</span>
          </label>
          <input
            type="email"
            value={formData.email}
            onChange={(e) => onChange("email", e.target.value)}
            placeholder="captain@gmail.com"
            className={`w-full px-4 py-2.5 rounded-xl bg-[#141414] border text-xs sm:text-sm text-white placeholder-zinc-600 focus:outline-none transition-all ${
              errors.email
                ? "border-red-500 focus:border-red-500"
                : "border-[#2A2A2A] focus:border-[#FACC15]"
            }`}
          />
          {errors.email && (
            <p className="text-xs text-red-400 mt-1 flex items-center gap-1">
              <AlertCircle className="w-3.5 h-3.5" />
              <span>{errors.email}</span>
            </p>
          )}
        </div>

        {/* Team Name */}
        <div>
          <label className="block text-xs font-semibold text-zinc-300 mb-1.5 flex items-center justify-between">
            <span className="flex items-center gap-1.5">
              <span>Team Name</span>
              <span className="text-red-400">*</span>
            </span>
            <span className="text-[10px] text-[#FACC15]">Required even for solo</span>
          </label>
          <input
            type="text"
            value={formData.teamName}
            onChange={(e) => onChange("teamName", e.target.value)}
            placeholder="e.g. Void Esports / Phoenix / Solo Player Tag"
            className={`w-full px-4 py-2.5 rounded-xl bg-[#141414] border text-xs sm:text-sm text-white placeholder-zinc-600 focus:outline-none transition-all ${
              errors.teamName
                ? "border-red-500 focus:border-red-500"
                : "border-[#2A2A2A] focus:border-[#FACC15]"
            }`}
          />
          {errors.teamName ? (
            <p className="text-xs text-red-400 mt-1 flex items-center gap-1">
              <AlertCircle className="w-3.5 h-3.5" />
              <span>{errors.teamName}</span>
            </p>
          ) : (
            <div className="p-3 rounded-xl bg-[#161616] border border-[#222222] mt-2 flex items-start gap-2">
              <Info className="w-3.5 h-3.5 text-[#FACC15] shrink-0 mt-0.5" />
              <p className="text-[11px] text-zinc-400 leading-relaxed">
                The team name must be entered even if you participate solo (enter your handle or clan tag).
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
