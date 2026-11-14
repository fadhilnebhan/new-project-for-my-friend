import { RegistrationFormData, RegistrationSubmission } from "@/types/registration";

const DRAFT_KEY = "wevi_registration_draft";
const SUBMISSIONS_KEY = "wevi_registration_history";

export const initialRegistrationState: RegistrationFormData = {
  email: "",
  teamName: "",
  captainRealName: "",
  captainIgn: "",
  captainUid: "",
  captainPhone: "",
  captainWhatsapp: "",
  viceCaptainWhatsapp: "",
  selectedGame: "",
  participationFormat: "Squad",
  player1: { ign: "", uid: "" },
  player2: { ign: "", uid: "" },
  player3: { ign: "", uid: "" },
  player4: { ign: "", uid: "" },
  declarationAgreed: false,
};

export function saveDraftRegistration(data: Partial<RegistrationFormData>): void {
  if (typeof window === "undefined") return;
  try {
    localStorage.setItem(DRAFT_KEY, JSON.stringify(data));
  } catch (err) {
    console.error("Failed to save registration draft:", err);
  }
}

export function loadDraftRegistration(): Partial<RegistrationFormData> | null {
  if (typeof window === "undefined") return null;
  try {
    const raw = localStorage.getItem(DRAFT_KEY);
    return raw ? JSON.parse(raw) : null;
  } catch (err) {
    console.error("Failed to load registration draft:", err);
    return null;
  }
}

export function clearDraftRegistration(): void {
  if (typeof window === "undefined") return;
  try {
    localStorage.removeItem(DRAFT_KEY);
  } catch (err) {
    console.error("Failed to clear registration draft:", err);
  }
}

export function saveSubmission(submission: RegistrationSubmission): void {
  if (typeof window === "undefined") return;
  try {
    const history: RegistrationSubmission[] = getStoredSubmissions();
    history.unshift(submission);
    localStorage.setItem(SUBMISSIONS_KEY, JSON.stringify(history));
  } catch (err) {
    console.error("Failed to save submission history:", err);
  }
}

export function getStoredSubmissions(): RegistrationSubmission[] {
  if (typeof window === "undefined") return [];
  try {
    const raw = localStorage.getItem(SUBMISSIONS_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch (err) {
    console.error("Failed to get stored submissions:", err);
    return [];
  }
}

export function isDuplicateSubmission(email: string, teamName: string, selectedGame: string): boolean {
  const existing = getStoredSubmissions();
  return existing.some(
    (item) =>
      item.selectedGame === selectedGame &&
      (item.email.toLowerCase() === email.toLowerCase() ||
        item.teamName.trim().toLowerCase() === teamName.trim().toLowerCase())
  );
}
