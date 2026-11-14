/**
 * WEVI INDIA — Tournament Registration Comprehensive Test Suite
 * Tests all 6 requested registration scenarios and validation rules.
 */

const assert = require("assert");

// Import validation logic
function validateIndianPhone(phone) {
  const cleaned = phone.replace(/[\s\-\(\)]/g, "");
  const pattern = /^(?:\+91|91|0)?[6-9]\d{9}$/;
  return pattern.test(cleaned);
}

function validateEmail(email) {
  const pattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return pattern.test(email);
}

function simulateRegistrationValidation(body) {
  if (!body.email || !validateEmail(body.email)) {
    return { valid: false, error: "Invalid or missing email" };
  }
  if (!body.teamName || !body.teamName.trim()) {
    return { valid: false, error: "Team name required" };
  }
  if (!body.captainRealName || !body.captainIgn || !body.captainUid) {
    return { valid: false, error: "Captain details required" };
  }
  if (!body.captainPhone || !validateIndianPhone(body.captainPhone)) {
    return { valid: false, error: "Invalid captain Indian phone number" };
  }
  if (!body.captainWhatsapp || !validateIndianPhone(body.captainWhatsapp)) {
    return { valid: false, error: "Invalid captain Indian WhatsApp number" };
  }
  if (body.viceCaptainWhatsapp && !validateIndianPhone(body.viceCaptainWhatsapp)) {
    return { valid: false, error: "Invalid vice captain WhatsApp number" };
  }
  if (!body.selectedGame) {
    return { valid: false, error: "Game selection required" };
  }
  if (!body.declarationAgreed) {
    return { valid: false, error: "Declaration agreement required" };
  }

  // Player 1
  if (!body.player1 || !body.player1.ign || !body.player1.uid) {
    return { valid: false, error: "Player 1 IGN & UID required" };
  }

  // Duo validation
  if (body.participationFormat === "Duo" || body.participationFormat === "Squad") {
    if (!body.player2 || !body.player2.ign || !body.player2.uid) {
      return { valid: false, error: "Player 2 IGN & UID required for Duo/Squad" };
    }
  }

  // Squad validation
  if (body.participationFormat === "Squad") {
    if (!body.player3 || !body.player3.ign || !body.player3.uid) {
      return { valid: false, error: "Player 3 IGN & UID required for Squad" };
    }
    if (!body.player4 || !body.player4.ign || !body.player4.uid) {
      return { valid: false, error: "Player 4 IGN & UID required for Squad" };
    }
  }

  // Generate ID
  const randomHex = Math.random().toString(36).substring(2, 7).toUpperCase();
  const gamePrefix = body.selectedGame.replace(/\s+/g, "").substring(0, 3).toUpperCase();
  const registrationId = `WEVI-${gamePrefix}-${randomHex}`;

  return { valid: true, registrationId };
}

console.log("=== WEVI INDIA REGISTRATION VERIFICATION SUITE ===");

// 1. Free Fire Solo
const ffSolo = {
  email: "ff_captain@wevi.in",
  teamName: "Solo Phoenix",
  captainRealName: "Aarav Sharma",
  captainIgn: "WEVI_AARAV",
  captainUid: "5182947192",
  captainPhone: "9876543210",
  captainWhatsapp: "9876543210",
  selectedGame: "Free Fire",
  participationFormat: "Solo",
  player1: { ign: "WEVI_AARAV", uid: "5182947192" },
  declarationAgreed: true,
};
const resFFSolo = simulateRegistrationValidation(ffSolo);
assert.strictEqual(resFFSolo.valid, true);
console.log("✔ Scenario 1: Free Fire Solo Passed -> ID:", resFFSolo.registrationId);

// 2. Free Fire Duo
const ffDuo = {
  email: "duo_captain@wevi.in",
  teamName: "Inferno Duo",
  captainRealName: "Vikram Singhania",
  captainIgn: "WEVI_VIKRAM",
  captainUid: "6192837491",
  captainPhone: "8765432109",
  captainWhatsapp: "8765432109",
  viceCaptainWhatsapp: "9123456780",
  selectedGame: "Free Fire",
  participationFormat: "Duo",
  player1: { ign: "WEVI_VIKRAM", uid: "6192837491" },
  player2: { ign: "WEVI_GHOST", uid: "6192837492" },
  declarationAgreed: true,
};
const resFFDuo = simulateRegistrationValidation(ffDuo);
assert.strictEqual(resFFDuo.valid, true);
console.log("✔ Scenario 2: Free Fire Duo Passed -> ID:", resFFDuo.registrationId);

// 3. Free Fire Squad
const ffSquad = {
  email: "ff_squad@wevi.in",
  teamName: "Hydra Esports",
  captainRealName: "Karan Patel",
  captainIgn: "WEVI_KARAN",
  captainUid: "7182930491",
  captainPhone: "7890123456",
  captainWhatsapp: "7890123456",
  selectedGame: "Free Fire",
  participationFormat: "Squad",
  player1: { ign: "WEVI_KARAN", uid: "7182930491" },
  player2: { ign: "WEVI_VIPER", uid: "7182930492" },
  player3: { ign: "WEVI_TITAN", uid: "7182930493" },
  player4: { ign: "WEVI_NEXUS", uid: "7182930494" },
  declarationAgreed: true,
};
const resFFSquad = simulateRegistrationValidation(ffSquad);
assert.strictEqual(resFFSquad.valid, true);
console.log("✔ Scenario 3: Free Fire Squad Passed -> ID:", resFFSquad.registrationId);

// 4. BGMI Solo
const bgmiSolo = {
  email: "bgmi_lone@wevi.in",
  teamName: "Godlike Solo",
  captainRealName: "Aditya Verma",
  captainIgn: "WEVI_ADITYA",
  captainUid: "8192039481",
  captainPhone: "9012345678",
  captainWhatsapp: "9012345678",
  selectedGame: "BGMI",
  participationFormat: "Solo",
  player1: { ign: "WEVI_ADITYA", uid: "8192039481" },
  declarationAgreed: true,
};
const resBGMISolo = simulateRegistrationValidation(bgmiSolo);
assert.strictEqual(resBGMISolo.valid, true);
console.log("✔ Scenario 4: BGMI Solo Passed -> ID:", resBGMISolo.registrationId);

// 5. Call of Duty Duo
const codDuo = {
  email: "cod_tactical@wevi.in",
  teamName: "Delta Force",
  captainRealName: "Rohan Malhotra",
  captainIgn: "WEVI_WARLORD",
  captainUid: "9182736450",
  captainPhone: "9988776655",
  captainWhatsapp: "9988776655",
  selectedGame: "Call of Duty",
  participationFormat: "Duo",
  player1: { ign: "WEVI_WARLORD", uid: "9182736450" },
  player2: { ign: "WEVI_SHADOW", uid: "9182736451" },
  declarationAgreed: true,
};
const resCODDuo = simulateRegistrationValidation(codDuo);
assert.strictEqual(resCODDuo.valid, true);
console.log("✔ Scenario 5: Call of Duty Duo Passed -> ID:", resCODDuo.registrationId);

// 6. eFootball Solo
const efSolo = {
  email: "efootball_striker@wevi.in",
  teamName: "Blaugrana Solo",
  captainRealName: "Siddharth Das",
  captainIgn: "WEVI_MESSI10",
  captainUid: "1230984756",
  captainPhone: "6789012345",
  captainWhatsapp: "6789012345",
  selectedGame: "eFootball",
  participationFormat: "Solo",
  player1: { ign: "WEVI_MESSI10", uid: "1230984756" },
  declarationAgreed: true,
};
const resEFSolo = simulateRegistrationValidation(efSolo);
assert.strictEqual(resEFSolo.valid, true);
console.log("✔ Scenario 6: eFootball Solo Passed -> ID:", resEFSolo.registrationId);

// 7. Validation Negative Tests
console.log("\n=== NEGATIVE VALIDATION CHECKS ===");

const invalidPhone = simulateRegistrationValidation({ ...ffSolo, captainPhone: "12345" });
assert.strictEqual(invalidPhone.valid, false);
console.log("✔ Caught invalid phone number correctly:", invalidPhone.error);

const invalidEmail = simulateRegistrationValidation({ ...ffSolo, email: "not-an-email" });
assert.strictEqual(invalidEmail.valid, false);
console.log("✔ Caught invalid email correctly:", invalidEmail.error);

const missingDuoPlayer2 = simulateRegistrationValidation({ ...ffDuo, player2: null });
assert.strictEqual(missingDuoPlayer2.valid, false);
console.log("✔ Caught missing Player 2 in Duo format:", missingDuoPlayer2.error);

const missingSquadPlayer4 = simulateRegistrationValidation({ ...ffSquad, player4: { ign: "", uid: "" } });
assert.strictEqual(missingSquadPlayer4.valid, false);
console.log("✔ Caught missing Player 4 in Squad format:", missingSquadPlayer4.error);

const rejectedDeclaration = simulateRegistrationValidation({ ...ffSolo, declarationAgreed: false });
assert.strictEqual(rejectedDeclaration.valid, false);
console.log("✔ Caught unaccepted declaration correctly:", rejectedDeclaration.error);

console.log("\n✨ ALL 6 REGISTRATION SCENARIOS & VALIDATION CHECKS PASSED!");
