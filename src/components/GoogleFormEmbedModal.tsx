"use client";

import React, { useState } from "react";
import { X, ExternalLink, FileSpreadsheet, Copy, Check, Code } from "lucide-react";

interface GoogleFormEmbedModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenWebRegistration: () => void;
}

export const GoogleFormEmbedModal: React.FC<GoogleFormEmbedModalProps> = ({
  isOpen,
  onClose,
  onOpenWebRegistration,
}) => {
  const [activeTab, setActiveTab] = useState<"form" | "script">("form");
  const [copiedScript, setCopiedScript] = useState(false);

  const defaultFormUrl =
    process.env.NEXT_PUBLIC_GOOGLE_FORM_URL ||
    "https://docs.google.com/forms/d/e/1FAIpQLSfWEVI_INDIA_REGISTRATION_PLACEHOLDER/viewform";

  const [formUrl, setFormUrl] = useState(defaultFormUrl);

  const appsScriptCode = `/**
 * WEVI INDIA — Tournament Registration Google Form Generator
 * Automatically creates the branded Google Form with conditional section branching
 * (Solo -> Solo Roster, Duo -> Duo Roster, Squad -> Squad Roster) and links to Google Sheets.
 */
function createWeviRegistrationForm() {
  var form = FormApp.create('WEVI INDIA — Tournament Registration')
    .setDescription('Official Esports Tournament & Team Registration Platform for Free Fire, BGMI, Call of Duty, and eFootball.\\n\\nPlease provide accurate details. Captain is responsible for all team communications.')
    .setConfirmationMessage('Registration received! Welcome to WEVI INDIA. Please join the official WhatsApp Captain Desk for room credentials and bracket updates.')
    .setAllowResponseEdits(false)
    .setAcceptingResponses(true);

  // Step 1: Basic Information
  var emailItem = form.addTextItem().setTitle('Email Address').setRequired(true);
  var teamNameItem = form.addTextItem().setTitle('Team Name (Required for all formats, including Solo)').setRequired(true);

  // Step 2: Captain Information
  var capRealName = form.addTextItem().setTitle("Captain's Real Name").setRequired(true);
  var capIgn = form.addTextItem().setTitle("Captain's In-Game Name (IGN)").setRequired(true);
  var capUid = form.addTextItem().setTitle("Captain's UID / Game ID").setRequired(true);
  var capPhone = form.addTextItem().setTitle("Captain's Phone Number (+91 Indian Mobile)").setRequired(true);
  var capWhatsapp = form.addTextItem().setTitle("Captain's WhatsApp Number").setRequired(true);
  var viceCapWhatsapp = form.addTextItem().setTitle("Vice Captain's WhatsApp Number (Optional)").setRequired(false);

  // Step 3: Game Selection
  var gameItem = form.addMultipleChoiceItem()
    .setTitle('Selected Tournament Game')
    .setChoiceValues(['Free Fire', 'Call of Duty', 'BGMI', 'eFootball'])
    .setRequired(true);

  // Step 5 Declaration Section
  var declarationSection = form.addPageBreakItem().setTitle('Declaration & Agreement');
  var declarationItem = form.addMultipleChoiceItem()
    .setTitle('I, the Team Captain, hereby declare that all the information provided is true and accurate. I understand that any incorrect information may result in team rejection, and I have no objections to participating with WEVI Leagues.')
    .setChoiceValues(['Yes, I agree', "No, I don't agree"])
    .setRequired(true);

  // Step 4 Branching Sections
  // 4A: Solo Section
  var soloSection = form.addPageBreakItem().setTitle('Solo Player Details');
  form.addTextItem().setTitle('Player 1 / Captain In-Game Name').setRequired(true);
  form.addTextItem().setTitle('Player 1 UID / Game ID').setRequired(true);
  soloSection.setGoToPage(declarationSection);

  // 4B: Duo Section
  var duoSection = form.addPageBreakItem().setTitle('Duo Players Details');
  form.addTextItem().setTitle('Player 1 / Captain In-Game Name').setRequired(true);
  form.addTextItem().setTitle('Player 1 UID / Game ID').setRequired(true);
  form.addTextItem().setTitle('Player 2 In-Game Name').setRequired(true);
  form.addTextItem().setTitle('Player 2 UID / Game ID').setRequired(true);
  duoSection.setGoToPage(declarationSection);

  // 4C: Squad Section
  var squadSection = form.addPageBreakItem().setTitle('Squad Players Details');
  form.addTextItem().setTitle('Player 1 / Captain In-Game Name').setRequired(true);
  form.addTextItem().setTitle('Player 1 UID / Game ID').setRequired(true);
  form.addTextItem().setTitle('Player 2 In-Game Name').setRequired(true);
  form.addTextItem().setTitle('Player 2 UID / Game ID').setRequired(true);
  form.addTextItem().setTitle('Player 3 In-Game Name').setRequired(true);
  form.addTextItem().setTitle('Player 3 UID / Game ID').setRequired(true);
  form.addTextItem().setTitle('Player 4 In-Game Name').setRequired(true);
  form.addTextItem().setTitle('Player 4 UID / Game ID').setRequired(true);
  squadSection.setGoToPage(declarationSection);

  // Branching Format Selector
  var formatSection = form.addPageBreakItem().setTitle('Participation Format');
  var formatItem = form.addMultipleChoiceItem()
    .setTitle('Select Participation Format')
    .setRequired(true);

  formatItem.setChoices([
    formatItem.createChoice('Solo / 1', soloSection),
    formatItem.createChoice('Duo / 2', duoSection),
    formatItem.createChoice('Squad / 4', squadSection)
  ]);

  // Create Linked Google Sheet
  var ss = SpreadsheetApp.create('WEVI INDIA — Tournament Registrations Database');
  form.setDestination(FormApp.DestinationType.SPREADSHEET, ss.getId());

  Logger.log('Google Form Published URL: ' + form.getPublishedUrl());
  Logger.log('Linked Google Sheet URL: ' + ss.getUrl());
}`;

  const handleCopyScript = () => {
    navigator.clipboard.writeText(appsScriptCode);
    setCopiedScript(true);
    setTimeout(() => setCopiedScript(false), 2000);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/85 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 animate-in fade-in duration-150">
      <div className="relative w-full max-w-2xl bg-[#0E0F12] border border-[#23252B] rounded-2xl shadow-2xl overflow-hidden flex flex-col my-auto max-h-[92vh]">
        {/* Header Bar */}
        <div className="px-6 py-4 border-b border-[#1E2026] flex items-center justify-between bg-[#121316] shrink-0">
          <div className="flex items-center gap-2.5">
            <div className="w-7 h-7 rounded-lg bg-[#181A20] border border-[#2B2E38] flex items-center justify-center text-[#F93822]">
              <FileSpreadsheet className="w-4 h-4" />
            </div>
            <div>
              <span className="font-extrabold text-sm tracking-tight text-white">
                Google Forms & Sheets
              </span>
              <div className="text-[10px] text-zinc-400 font-medium">
                Official Google Workspace Integration
              </div>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-lg bg-[#181A20] hover:bg-[#23252E] text-zinc-400 hover:text-white transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Tab Switcher */}
        <div className="flex border-b border-[#1E2026] bg-[#101115] px-6 pt-3 gap-2 shrink-0">
          <button
            onClick={() => setActiveTab("form")}
            className={`pb-3 px-3 text-xs font-bold transition-colors border-b-2 flex items-center gap-1.5 ${
              activeTab === "form"
                ? "border-[#F93822] text-[#F93822]"
                : "border-transparent text-zinc-400 hover:text-white"
            }`}
          >
            <ExternalLink className="w-3.5 h-3.5" />
            <span>Launch Google Form</span>
          </button>

          <button
            onClick={() => setActiveTab("script")}
            className={`pb-3 px-3 text-xs font-bold transition-colors border-b-2 flex items-center gap-1.5 ${
              activeTab === "script"
                ? "border-[#F93822] text-[#F93822]"
                : "border-transparent text-zinc-400 hover:text-white"
            }`}
          >
            <Code className="w-3.5 h-3.5" />
            <span>Google Apps Script</span>
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 overflow-y-auto flex-1 space-y-5">
          {activeTab === "form" ? (
            <div className="space-y-5">
              <p className="text-xs text-zinc-300 leading-relaxed">
                WEVI INDIA supports both our interactive web registration wizard (with instant validation & pass generation) and the official Google Form with conditional branching.
              </p>

              <div className="p-4 rounded-xl bg-[#121316] border border-[#23252B] space-y-3">
                <label className="block text-xs font-semibold text-zinc-300">
                  Google Form URL
                </label>
                <div className="flex gap-2">
                  <input
                    type="url"
                    value={formUrl}
                    onChange={(e) => setFormUrl(e.target.value)}
                    placeholder="https://docs.google.com/forms/d/e/.../viewform"
                    className="flex-1 px-4 py-2 rounded-xl bg-[#181A20] border border-[#23252B] text-xs text-white focus:outline-none focus:border-[#F93822] font-mono"
                  />
                  <a
                    href={formUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-coral px-4 py-2 text-xs font-bold shrink-0"
                  >
                    <span>Open</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>

              <div className="pt-2 flex justify-end">
                <button
                  onClick={() => {
                    onClose();
                    onOpenWebRegistration();
                  }}
                  className="btn-dark px-4 py-2 text-xs font-semibold"
                >
                  Switch to Web Wizard
                </button>
              </div>
            </div>
          ) : (
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-white">
                    Google Apps Script Generator
                  </h4>
                  <p className="text-xs text-zinc-400">
                    Creates the exact form with branching and linked Google Sheet.
                  </p>
                </div>
                <button
                  onClick={handleCopyScript}
                  className="btn-coral px-3 py-1.5 text-xs font-bold"
                >
                  {copiedScript ? (
                    <>
                      <Check className="w-3.5 h-3.5" />
                      <span>Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy Code</span>
                    </>
                  )}
                </button>
              </div>

              <pre className="p-4 rounded-xl bg-black border border-[#1E2026] text-zinc-300 font-mono text-[11px] overflow-x-auto max-h-56 leading-relaxed">
                <code>{appsScriptCode}</code>
              </pre>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
