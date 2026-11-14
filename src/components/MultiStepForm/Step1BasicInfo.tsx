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
    <div className="space-y-6 animate-in fade-in duration-300">
      <div className="border-b border-wevi-border/60 pb-4">
        <h3 className="text-xl font-black uppercase tracking-tight text-white flex items-center gap-2">
          <span>Step 1: Basic Information</span>
        </h3>
        <p className="text-xs text-gray-400 mt-1">
          Provide your primary contact email and the official roster or clan name for the tournament.
        </p>
      </div>

      <div className="space-y-5">
        {/* Email Address */}
        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-gray-300 mb-1.5 flex items-center justify-between">
            <span className="flex items-center gap-1.5">
              <Mail className="w-3.5 h-3.5 text-purple-400" />
              <span>Email Address</span>
              <span className="text-red-400">*</span>
            </span>
            <span className="text-[10px] text-gray-500 font-normal">Official communication</span>
          </label>
          <div className="relative">
            <input
              type="email"
              value={formData.email}
              onChange={(e) => onChange("email", e.target.value)}
              placeholder="e.g. captain@gmail.com"
              className={`w-full px-4 py-3 rounded-xl bg-wevi-darker border text-sm text-white placeholder-gray-500 focus:outline-none transition-all ${
                errors.email
                  ? "border-red-500 focus:ring-1 focus:ring-red-500"
                  : "border-wevi-border focus:border-purple-500 focus:ring-1 focus:ring-purple-500"
              }`}
            />
          </div>
          {errors.email ? (
            <p className="text-xs text-red-400 mt-1.5 flex items-center gap-1 font-medium">
              <AlertCircle className="w-3.5 h-3.5" />
              <span>{errors.email}</span>
            </p>
          ) : (
            <p className="text-[11px] text-gray-400 mt-1">
              Match schedule, room credentials, and notifications will be linked to this email.
            </p>
          )}
        </div>

        {/* Team Name */}
        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-gray-300 mb-1.5 flex items-center justify-between">
            <span className="flex items-center gap-1.5">
              <Users className="w-3.5 h-3.5 text-blue-400" />
              <span>Team Name</span>
              <span className="text-red-400">*</span>
            </span>
            <span className="text-[10px] text-yellow-400 font-medium">Required for all formats</span>
          </label>
          <div className="relative">
            <input
              type="text"
              value={formData.teamName}
              onChange={(e) => onChange("teamName", e.target.value)}
              placeholder="e.g. Team Phoenix / Hydra Clan / Solo Warrior"
              className={`w-full px-4 py-3 rounded-xl bg-wevi-darker border text-sm text-white placeholder-gray-500 focus:outline-none transition-all ${
                errors.teamName
                  ? "border-red-500 focus:ring-1 focus:ring-red-500"
                  : "border-wevi-border focus:border-purple-500 focus:ring-1 focus:ring-purple-500"
              }`}
            />
          </div>
          {errors.teamName ? (
            <p className="text-xs text-red-400 mt-1.5 flex items-center gap-1 font-medium">
              <AlertCircle className="w-3.5 h-3.5" />
              <span>{errors.teamName}</span>
            </p>
          ) : (
            <div className="p-3 rounded-lg bg-blue-950/30 border border-blue-900/40 mt-2 flex items-start gap-2">
              <Info className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
              <p className="text-[11px] text-blue-200/90 leading-relaxed">
                <strong>Important:</strong> The team name must be entered even if the user participates solo (e.g. your player handle or clan tag).
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
