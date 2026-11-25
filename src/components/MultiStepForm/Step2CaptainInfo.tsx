"use client";

import React from "react";
import { AlertCircle, Info, Copy } from "lucide-react";
import { RegistrationFormData } from "@/types/registration";

interface Step2Props {
  formData: RegistrationFormData;
  errors: Record<string, string>;
  onChange: (field: keyof RegistrationFormData, value: any) => void;
}

export const Step2CaptainInfo: React.FC<Step2Props> = ({ formData, errors, onChange }) => {
  const handleCopyPhoneToWhatsapp = () => {
    if (formData.captainPhone) {
      onChange("captainWhatsapp", formData.captainPhone);
    }
  };

  return (
    <div className="space-y-5 animate-in fade-in duration-200">
      <div className="border-b border-[#222222] pb-3">
        <h3 className="text-base font-bold text-white tracking-tight">
          Step 2: Team Captain Information
        </h3>
        <p className="text-xs text-zinc-400 mt-0.5">
          Captain is the primary contact for room credentials, referee calls, and prize distribution.
        </p>
      </div>

      <div className="p-3 rounded-xl bg-[#161616] border border-[#262626] flex items-start gap-2.5">
        <Info className="w-4 h-4 text-[#FACC15] shrink-0 mt-0.5" />
        <p className="text-xs text-zinc-300 leading-relaxed">
          <strong className="text-white">Notice:</strong> Captain&apos;s Real Name (as per ID/Bank) must not be confused with the In-Game Name (IGN).
        </p>
      </div>

      <div className="space-y-4">
        {/* Real Name & IGN */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-semibold text-zinc-300 mb-1.5">
              Captain&apos;s Real Name <span className="text-red-400">*</span>
            </label>
            <input
              type="text"
              value={formData.captainRealName}
              onChange={(e) => onChange("captainRealName", e.target.value)}
              placeholder="e.g. Rahul Sharma"
              className={`w-full px-4 py-2.5 rounded-xl bg-[#141414] border text-xs sm:text-sm text-white placeholder-zinc-600 focus:outline-none transition-all ${
                errors.captainRealName
                  ? "border-red-500 focus:border-red-500"
                  : "border-[#2A2A2A] focus:border-[#FACC15]"
              }`}
            />
            {errors.captainRealName && (
              <p className="text-xs text-red-400 mt-1 flex items-center gap-1">
                <AlertCircle className="w-3 h-3" />
                <span>{errors.captainRealName}</span>
              </p>
            )}
          </div>

          <div>
            <label className="block text-xs font-semibold text-zinc-300 mb-1.5">
              Captain&apos;s In-Game Name (IGN) <span className="text-red-400">*</span>
            </label>
            <input
              type="text"
              value={formData.captainIgn}
              onChange={(e) => {
                const val = e.target.value;
                onChange("captainIgn", val);
                onChange("player1", { ...formData.player1, ign: val });
              }}
              placeholder="e.g. WEVI_SHADOW"
              className={`w-full px-4 py-2.5 rounded-xl bg-[#141414] border text-xs sm:text-sm text-white placeholder-zinc-600 focus:outline-none transition-all ${
                errors.captainIgn
                  ? "border-red-500 focus:border-red-500"
                  : "border-[#2A2A2A] focus:border-[#FACC15]"
              }`}
            />
            {errors.captainIgn && (
              <p className="text-xs text-red-400 mt-1 flex items-center gap-1">
                <AlertCircle className="w-3 h-3" />
                <span>{errors.captainIgn}</span>
              </p>
            )}
          </div>
        </div>

        {/* UID */}
        <div>
          <label className="block text-xs font-semibold text-zinc-300 mb-1.5">
            Captain&apos;s UID / Game ID <span className="text-red-400">*</span>
          </label>
          <input
            type="text"
            value={formData.captainUid}
            onChange={(e) => {
              const val = e.target.value;
              onChange("captainUid", val);
              onChange("player1", { ...formData.player1, uid: val });
            }}
            placeholder="e.g. 5182947192"
            className={`w-full px-4 py-2.5 rounded-xl bg-[#141414] border text-xs sm:text-sm text-white placeholder-zinc-600 focus:outline-none transition-all ${
              errors.captainUid
                ? "border-red-500 focus:border-red-500"
                : "border-[#2A2A2A] focus:border-[#FACC15]"
            }`}
          />
          {errors.captainUid && (
            <p className="text-xs text-red-400 mt-1 flex items-center gap-1">
              <AlertCircle className="w-3 h-3" />
              <span>{errors.captainUid}</span>
            </p>
          )}
        </div>

        {/* Phone & WhatsApp */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-semibold text-zinc-300 mb-1.5">
              Captain&apos;s Phone Number <span className="text-red-400">*</span>
            </label>
            <div className="relative">
              <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-xs font-bold text-zinc-500">
                +91
              </span>
              <input
                type="tel"
                value={formData.captainPhone}
                onChange={(e) => {
                  const cleaned = e.target.value.replace(/\D/g, "").slice(0, 10);
                  onChange("captainPhone", cleaned);
                }}
                placeholder="9876543210"
                className={`w-full pl-12 pr-4 py-2.5 rounded-xl bg-[#141414] border text-xs sm:text-sm text-white placeholder-zinc-600 focus:outline-none transition-all ${
                  errors.captainPhone
                    ? "border-red-500 focus:border-red-500"
                    : "border-[#2A2A2A] focus:border-[#FACC15]"
                }`}
              />
            </div>
            {errors.captainPhone && (
              <p className="text-xs text-red-400 mt-1">{errors.captainPhone}</p>
            )}
          </div>

          <div>
            <label className="block text-xs font-semibold text-zinc-300 mb-1.5 flex items-center justify-between">
              <span>Captain&apos;s WhatsApp Number <span className="text-red-400">*</span></span>
              {formData.captainPhone && (
                <button
                  type="button"
                  onClick={handleCopyPhoneToWhatsapp}
                  className="text-[10px] text-[#FACC15] hover:underline flex items-center gap-1"
                >
                  <Copy className="w-2.5 h-2.5" />
                  <span>Same as Phone</span>
                </button>
              )}
            </label>
            <div className="relative">
              <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-xs font-bold text-zinc-500">
                +91
              </span>
              <input
                type="tel"
                value={formData.captainWhatsapp}
                onChange={(e) => {
                  const cleaned = e.target.value.replace(/\D/g, "").slice(0, 10);
                  onChange("captainWhatsapp", cleaned);
                }}
                placeholder="9876543210"
                className={`w-full pl-12 pr-4 py-2.5 rounded-xl bg-[#141414] border text-xs sm:text-sm text-white placeholder-zinc-600 focus:outline-none transition-all ${
                  errors.captainWhatsapp
                    ? "border-red-500 focus:border-red-500"
                    : "border-[#2A2A2A] focus:border-[#FACC15]"
                }`}
              />
            </div>
            {errors.captainWhatsapp && (
              <p className="text-xs text-red-400 mt-1">{errors.captainWhatsapp}</p>
            )}
          </div>
        </div>

        {/* Vice Captain WhatsApp */}
        <div>
          <label className="block text-xs font-semibold text-zinc-300 mb-1.5 flex items-center justify-between">
            <span>Vice Captain&apos;s WhatsApp Number</span>
            <span className="text-[10px] text-zinc-500">(Optional backup)</span>
          </label>
          <div className="relative">
            <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-xs font-bold text-zinc-500">
              +91
            </span>
            <input
              type="tel"
              value={formData.viceCaptainWhatsapp || ""}
              onChange={(e) => {
                const cleaned = e.target.value.replace(/\D/g, "").slice(0, 10);
                onChange("viceCaptainWhatsapp", cleaned);
              }}
              placeholder="9876543210"
              className="w-full pl-12 pr-4 py-2.5 rounded-xl bg-[#141414] border border-[#2A2A2A] focus:border-[#FACC15] focus:outline-none text-xs sm:text-sm text-white placeholder-zinc-600"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
