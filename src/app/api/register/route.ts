import { NextResponse } from "next/server";
import { RegistrationFormData, RegistrationSubmission } from "@/types/registration";

export async function POST(request: Request) {
  try {
    const body: RegistrationFormData = await request.json();

    // 1. Core Validations
    if (!body.email || !body.teamName) {
      return NextResponse.json(
        { success: false, message: "Email and Team Name are required." },
        { status: 400 }
      );
    }

    if (
      !body.captainRealName ||
      !body.captainIgn ||
      !body.captainUid ||
      !body.captainPhone ||
      !body.captainWhatsapp
    ) {
      return NextResponse.json(
        { success: false, message: "All Captain details are required." },
        { status: 400 }
      );
    }

    if (!body.selectedGame) {
      return NextResponse.json(
        { success: false, message: "Please select a supported game." },
        { status: 400 }
      );
    }

    if (!body.declarationAgreed) {
      return NextResponse.json(
        {
          success: false,
          message: "You must accept the Team Captain declaration to proceed.",
        },
        { status: 400 }
      );
    }

    // Format specific validations
    if (!body.player1?.ign || !body.player1?.uid) {
      return NextResponse.json(
        { success: false, message: "Player 1 (Captain) details are required." },
        { status: 400 }
      );
    }

    if (body.participationFormat === "Duo" || body.participationFormat === "Squad") {
      if (!body.player2?.ign || !body.player2?.uid) {
        return NextResponse.json(
          { success: false, message: "Player 2 details are required for Duo/Squad." },
          { status: 400 }
        );
      }
    }

    if (body.participationFormat === "Squad") {
      if (!body.player3?.ign || !body.player3?.uid || !body.player4?.ign || !body.player4?.uid) {
        return NextResponse.json(
          { success: false, message: "Player 3 and Player 4 details are required for Squad." },
          { status: 400 }
        );
      }
    }

    // Generate unique Registration ID
    const randomHex = Math.random().toString(36).substring(2, 7).toUpperCase();
    const gamePrefix = body.selectedGame.replace(/\s+/g, "").substring(0, 3).toUpperCase();
    const registrationId = `WEVI-${gamePrefix}-${randomHex}`;
    const submittedAt = new Date().toISOString();

    const record: RegistrationSubmission = {
      ...body,
      registrationId,
      submittedAt,
      status: "confirmed",
    };

    // If an external Google Apps Script Webhook or Google Sheet endpoint is configured in env:
    const googleSheetWebhook = process.env.GOOGLE_SHEETS_WEBHOOK_URL;
    if (googleSheetWebhook) {
      try {
        await fetch(googleSheetWebhook, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(record),
        });
      } catch (err) {
        console.error("Failed to forward registration to Google Sheets Webhook:", err);
      }
    }

    return NextResponse.json(
      {
        success: true,
        message: "Registration successfully recorded!",
        data: record,
      },
      { status: 200 }
    );
  } catch (error: any) {
    console.error("Registration API error:", error);
    return NextResponse.json(
      { success: false, message: "Server error during registration.", error: error?.message },
      { status: 500 }
    );
  }
}
