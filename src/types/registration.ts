export type SupportedGame = "Free Fire" | "Call of Duty" | "BGMI" | "eFootball";

export type ParticipationFormat = "Solo" | "Duo" | "Squad";

export interface PlayerDetails {
  ign: string;
  uid: string;
}

export interface RegistrationFormData {
  // Step 1: Basic Information
  email: string;
  teamName: string;

  // Step 2: Team Captain Information
  captainRealName: string;
  captainIgn: string;
  captainUid: string;
  captainPhone: string;
  captainWhatsapp: string;
  viceCaptainWhatsapp?: string;

  // Step 3: Game Selection
  selectedGame: SupportedGame | "";

  // Step 4: Participation Format & Roster Details
  participationFormat: ParticipationFormat;
  player1: PlayerDetails; // Captain / Player 1
  player2?: PlayerDetails; // Duo & Squad
  player3?: PlayerDetails; // Squad only
  player4?: PlayerDetails; // Squad only

  // Step 5: Declaration & Agreement
  declarationAgreed: boolean; // Must be true ("Yes, I agree")
}

export interface RegistrationSubmission extends RegistrationFormData {
  registrationId: string;
  submittedAt: string;
  status: "confirmed" | "pending_review";
}

export interface StepValidationResult {
  isValid: boolean;
  errors: Record<string, string>;
}
