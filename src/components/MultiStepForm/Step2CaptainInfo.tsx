"use client";

import React from "react";
import { User, Phone, MessageSquare, Hash, ShieldCheck, AlertCircle, Info, Copy } from "lucide-react";
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
    <div className="space-y-6 animate-in fade-in duration-300">
      <div className="border-b border-wevi-border/60 pb-4">
        <h3 className="text-xl font-black uppercase tracking-tight text-white flex items-center gap-2">
          <span>Step 2: Team Captain Information</span>
        </h3>
        <p className="text-xs text-gray-400 mt-1">
          The team captain is responsible for team communications, lobby check-ins, and prize distribution.
        </p>
      </div>

      <div className="space-y-4">
        {/* Real Name vs In-Game Name Alert */}
        <div className="p-3.5 rounded-xl bg-purple-950/40 border border-purple-800/40 flex items-start gap-2.5">
          <Info className="w-4 h-4 text-purple-400 shrink-0 mt-0.5" />
          <p className="text-xs text-purple-200 leading-relaxed">
            <strong>Verification Notice:</strong> Captain&apos;s Real Name (as per Govt ID / Bank) must not be confused with the In-Game Name (IGN).
          </p>
        </div>

        {/* 1. Real Name & 2. In-Game Name */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-gray-300 mb-1.5 flex items-center justify-between">
              <span className="flex items-center gap-1.5">
                <User className="w-3.5 h-3.5 text-purple-400" />
                <span>Captain&apos;s Real Name</span>
                <span className="text-red-400">*</span>
              </span>
            </label>
            <input
              type="text"
              value={formData.captainRealName}
              onChange={(e) => onChange("captainRealName", e.target.value)}
              placeholder="e.g. Rahul Sharma"
              className={`w-full px-4 py-3 rounded-xl bg-wevi-darker border text-sm text-white placeholder-gray-500 focus:outline-none transition-all ${
                errors.captainRealName
                  ? "border-red-500 focus:ring-1 focus:ring-red-500"
                  : "border-wevi-border focus:border-purple-500 focus:ring-1 focus:ring-purple-500"
              }`}
            />
            {errors.captainRealName && (
              <p className="text-xs text-red-400 mt-1 flex items-center gap-1">
                <AlertCircle className="w-3 h-3" />
                <span>{errors.captainRealName}</span>
              </p>
            )}
            <p className="text-[10px] text-gray-500 mt-1">Official real identity</p>
          </div>

          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-gray-300 mb-1.5 flex items-center justify-between">
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-blue-400" />
                <span>Captain&apos;s In-Game Name (IGN)</span>
                <span className="text-red-400">*</span>
              </span>
            </label>
            <input
              type="text"
              value={formData.captainIgn}
              onChange={(e) => {
                const val = e.target.value;
                onChange("captainIgn", val);
                // Also sync to player1 IGN
                onChange("player1", { ...formData.player1, ign: val });
              }}
              placeholder="e.g. WEVI_SHADOW"
              className={`w-full px-4 py-3 rounded-xl bg-wevi-darker border text-sm text-white placeholder-gray-500 focus:outline-none transition-all ${
                errors.captainIgn
                  ? "border-red-500 focus:ring-1 focus:ring-red-500"
                  : "border-wevi-border focus:border-purple-500 focus:ring-1 focus:ring-purple-500"
              }`}
            />
            {errors.captainIgn && (
              <p className="text-xs text-red-400 mt-1 flex items-center gap-1">
                <AlertCircle className="w-3 h-3" />
                <span>{errors.captainIgn}</span>
              </p>
            )}
            <p className="text-[10px] text-gray-500 mt-1">Exact name as shown in the game client</p>
          </div>
        </div>

        {/* 3. Captain UID */}
        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-gray-300 mb-1.5 flex items-center justify-between">
            <span className="flex items-center gap-1.5">
              <Hash className="w-3.5 h-3.5 text-cyan-400" />
              <span>Captain&apos;s UID / Game ID</span>
              <span className="text-red-400">*</span>
            </span>
          </label>
          <input
            type="text"
            value={formData.captainUid}
            onChange={(e) => {
              const val = e.target.value;
              onChange("captainUid", val);
              // Also sync to player1 UID
              onChange("player1", { ...formData.player1, uid: val });
            }}
            placeholder="e.g. 5182947192"
            className={`w-full px-4 py-3 rounded-xl bg-wevi-darker border text-sm text-white placeholder-gray-500 focus:outline-none transition-all ${
              errors.captainUid
                ? "border-red-500 focus:ring-1 focus:ring-red-500"
                : "border-wevi-border focus:border-purple-500 focus:ring-1 focus:ring-purple-500"
            }`}
          />
          {errors.captainUid ? (
            <p className="text-xs text-red-400 mt-1 flex items-center gap-1">
              <AlertCircle className="w-3 h-3" />
              <span>{errors.captainUid}</span>
            </p>
          ) : (
            <p className="text-[10px] text-gray-500 mt-1">Unique numeric or character character ID from profile</p>
          )}
        </div>

        {/* 4. Phone & 5. WhatsApp Numbers */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-gray-300 mb-1.5 flex items-center justify-between">
              <span className="flex items-center gap-1.5">
                <Phone className="w-3.5 h-3.5 text-emerald-400" />
                <span>Captain&apos;s Phone Number</span>
                <span className="text-red-400">*</span>
              </span>
            </label>
            <div className="relative">
              <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-xs font-bold text-gray-400">
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
                className={`w-full pl-12 pr-4 py-3 rounded-xl bg-wevi-darker border text-sm text-white placeholder-gray-500 focus:outline-none transition-all ${
                  errors.captainPhone
                    ? "border-red-500 focus:ring-1 focus:ring-red-500"
                    : "border-wevi-border focus:border-purple-500 focus:ring-1 focus:ring-purple-500"
                }`}
              />
            </div>
            {errors.captainPhone ? (
              <p className="text-xs text-red-400 mt-1 flex items-center gap-1">
                <AlertCircle className="w-3 h-3" />
                <span>{errors.captainPhone}</span>
              </p>
            ) : (
              <p className="text-[10px] text-gray-500 mt-1">Indian 10-digit mobile number</p>
            )}
          </div>

          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-gray-300 mb-1.5 flex items-center justify-between">
              <span className="flex items-center gap-1.5">
                <MessageSquare className="w-3.5 h-3.5 text-emerald-400" />
                <span>Captain&apos;s WhatsApp Number</span>
                <span className="text-red-400">*</span>
              </span>
              {formData.captainPhone && (
                <button
                  type="button"
                  onClick={handleCopyPhoneToWhatsapp}
                  className="text-[10px] text-purple-400 hover:text-purple-300 underline flex items-center gap-1"
                >
                  <Copy className="w-2.5 h-2.5" />
                  <span>Same as Phone</span>
                </button>
              )}
            </label>
            <div className="relative">
              <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-xs font-bold text-gray-400">
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
                className={`w-full pl-12 pr-4 py-3 rounded-xl bg-wevi-darker border text-sm text-white placeholder-gray-500 focus:outline-none transition-all ${
                  errors.captainWhatsapp
                    ? "border-red-500 focus:ring-1 focus:ring-red-500"
                    : "border-wevi-border focus:border-purple-500 focus:ring-1 focus:ring-purple-500"
                }`}
              />
            </div>
            {errors.captainWhatsapp ? (
              <p className="text-xs text-red-400 mt-1 flex items-center gap-1">
                <AlertCircle className="w-3 h-3" />
                <span>{errors.captainWhatsapp}</span>
              </p>
            ) : (
              <p className="text-[10px] text-gray-500 mt-1">For custom room credentials & slot links</p>
            )}
          </div>
        </div>

        {/* 6. Vice Captain's WhatsApp (Optional) */}
        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-gray-300 mb-1.5 flex items-center justify-between">
            <span className="flex items-center gap-1.5">
              <MessageSquare className="w-3.5 h-3.5 text-gray-400" />
              <span>Vice Captain&apos;s WhatsApp Number</span>
              <span className="text-xs text-gray-500 font-normal lowercase">(optional)</span>
            </span>
          </label>
          <div className="relative">
            <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-xs font-bold text-gray-400">
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
              className={`w-full pl-12 pr-4 py-3 rounded-xl bg-wevi-darker border text-sm text-white placeholder-gray-500 focus:outline-none transition-all ${
                errors.viceCaptainWhatsapp
                  ? "border-red-500 focus:ring-1 focus:ring-red-500"
                  : "border-wevi-border focus:border-purple-500 focus:ring-1 focus:ring-purple-500"
              }`}
            />
          </div>
          {errors.viceCaptainWhatsapp ? (
            <p className="text-xs text-red-400 mt-1 flex items-center gap-1">
              <AlertCircle className="w-3 h-3" />
              <span>{errors.viceCaptainWhatsapp}</span>
            </p>
          ) : (
            <p className="text-[10px] text-gray-500 mt-1">Backup contact if captain is unreachable on matchday</p>
          )}
        </div>
      </div>
    </div>
  );
};
