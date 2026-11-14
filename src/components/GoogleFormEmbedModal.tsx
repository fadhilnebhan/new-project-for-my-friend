"use client";

import React, { useState } from "react";
import { X, ExternalLink, FileSpreadsheet, Copy, Check, Code, Sparkles, BookOpen } from "lucide-react";

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

  // Default placeholder link or env variable
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

  // Step 5 Declaration Section (created earlier to target navigation)
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

  // Branching Format Selector in Section 1
  var formatPageBreak = form.addPageBreakItem().setTitle('Participation Format');
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
  Logger.log('Google Form Edit URL: ' + form.getEditUrl());
  Logger.log('Linked Google Sheet URL: ' + ss.getUrl());
}`;

  const handleCopyScript = () => {
    navigator.clipboard.writeText(appsScriptCode);
    setCopiedScript(true);
    setTimeout(() => setCopiedScript(false), 2500);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/80 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 animate-in fade-in duration-200">
      <div className="relative w-full max-w-3xl bg-wevi-card border border-wevi-border/90 rounded-2xl sm:rounded-3xl shadow-2xl shadow-purple-950/40 overflow-hidden flex flex-col my-auto max-h-[92vh]">
        {/* Header Bar */}
        <div className="px-6 py-4 border-b border-wevi-border/70 flex items-center justify-between bg-wevi-darker/80 shrink-0">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-emerald-950 border border-emerald-500/50 flex items-center justify-center font-bold text-sm text-emerald-400">
              <FileSpreadsheet className="w-4 h-4" />
            </div>
            <div>
              <span className="font-black text-sm tracking-wider text-white uppercase">
                Google Forms <span className="text-emerald-400">& Sheets Integration</span>
              </span>
              <div className="text-[10px] text-gray-400 font-medium">
                Official Google Workspace Integration for WEVI INDIA
              </div>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab Switcher */}
        <div className="flex border-b border-wevi-border/70 bg-wevi-darker/40 px-6 pt-3 gap-2 shrink-0">
          <button
            onClick={() => setActiveTab("form")}
            className={`pb-3 px-3 text-xs font-bold uppercase tracking-wider transition-colors border-b-2 flex items-center gap-1.5 ${
              activeTab === "form"
                ? "border-purple-500 text-purple-300"
                : "border-transparent text-gray-400 hover:text-white"
            }`}
          >
            <ExternalLink className="w-3.5 h-3.5" />
            <span>Launch Google Form</span>
          </button>

          <button
            onClick={() => setActiveTab("script")}
            className={`pb-3 px-3 text-xs font-bold uppercase tracking-wider transition-colors border-b-2 flex items-center gap-1.5 ${
              activeTab === "script"
                ? "border-emerald-500 text-emerald-300"
                : "border-transparent text-gray-400 hover:text-white"
            }`}
          >
            <Code className="w-3.5 h-3.5" />
            <span>Google Apps Script Generator</span>
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 overflow-y-auto flex-1 space-y-6">
          {activeTab === "form" ? (
            <div className="space-y-6">
              <div className="p-4 rounded-xl bg-purple-950/30 border border-purple-800/40 space-y-2">
                <div className="text-xs font-bold uppercase tracking-wider text-purple-300 flex items-center gap-2">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Dual Registration Mode</span>
                </div>
                <p className="text-xs text-gray-300 leading-relaxed">
                  WEVI INDIA supports both our interactive web registration wizard (with instant validation and receipt generation) and the official Google Form with conditional branching.
                </p>
              </div>

              {/* Form URL Link Box */}
              <div className="p-5 rounded-2xl bg-wevi-darker border border-wevi-border space-y-4">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-gray-300 mb-1.5">
                    Official Google Form URL
                  </label>
                  <div className="flex gap-2">
                    <input
                      type="url"
                      value={formUrl}
                      onChange={(e) => setFormUrl(e.target.value)}
                      placeholder="https://docs.google.com/forms/d/e/.../viewform"
                      className="flex-1 px-4 py-2.5 rounded-xl bg-wevi-card border border-wevi-border text-xs text-white focus:outline-none focus:border-purple-500 font-mono"
                    />
                    <a
                      href={formUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-5 py-2.5 rounded-xl font-bold text-xs uppercase tracking-wider text-white bg-emerald-600 hover:bg-emerald-500 flex items-center gap-2 transition-all shrink-0"
                    >
                      <span>Open Form</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>
                  <p className="text-[10px] text-gray-500 mt-1.5">
                    Organisation admins can customize this URL via the <code className="text-purple-400">NEXT_PUBLIC_GOOGLE_FORM_URL</code> environment variable.
                  </p>
                </div>

                <div className="pt-4 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-3">
                  <div className="text-xs text-gray-400">
                    Prefer registering directly on the platform?
                  </div>
                  <button
                    onClick={() => {
                      onClose();
                      onOpenWebRegistration();
                    }}
                    className="w-full sm:w-auto px-5 py-2.5 rounded-xl font-bold text-xs uppercase tracking-wider text-white bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 transition-all shadow-neon-purple"
                  >
                    Use Web Registration Wizard
                  </button>
                </div>
              </div>
            </div>
          ) : (
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="text-sm font-bold uppercase tracking-wider text-white">
                    One-Click Google Apps Script Generator
                  </h4>
                  <p className="text-xs text-gray-400">
                    Runs in Google Apps Script to create the exact form with branching and linked Google Sheet.
                  </p>
                </div>
                <button
                  onClick={handleCopyScript}
                  className="px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider text-white bg-emerald-600 hover:bg-emerald-500 flex items-center gap-1.5 transition-all shadow"
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

              <div className="p-3.5 rounded-xl bg-wevi-darker border border-wevi-border/70 text-xs text-gray-300 space-y-1.5">
                <div className="font-bold text-emerald-400">Setup Instructions (30 seconds):</div>
                <ol className="list-decimal list-inside space-y-1 text-gray-400 text-[11px]">
                  <li>Go to <a href="https://script.google.com" target="_blank" rel="noreferrer" className="text-purple-400 underline">script.google.com</a> and click &ldquo;New Project&rdquo;.</li>
                  <li>Paste the script below, replace existing code, and click Save.</li>
                  <li>Click &ldquo;Run&rdquo; &rarr; &ldquo;createWeviRegistrationForm&rdquo;.</li>
                  <li>Check the execution log for your new Google Form URL and linked Google Sheet!</li>
                </ol>
              </div>

              <pre className="p-4 rounded-xl bg-black/80 border border-white/10 text-gray-300 font-mono text-[11px] overflow-x-auto max-h-60 leading-relaxed">
                <code>{appsScriptCode}</code>
              </pre>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
