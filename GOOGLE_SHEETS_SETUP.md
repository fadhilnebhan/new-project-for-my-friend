# WEVI INDIA — Google Forms & Google Sheets Setup Guide

This guide details the procedure for setting up the official **WEVI INDIA Tournament Registration Form** with dynamic section-based branching and automatic response storage in **Google Sheets**.

---

## 1. Automated Setup via Google Apps Script (Recommended — Takes 1 minute)

We have provided a production-grade Google Apps Script in [`google-apps-script/create_wevi_form.js`](./google-apps-script/create_wevi_form.js) that generates the complete Google Form, applies the conditional branching logic, and connects it directly to a brand new Google Sheet.

### Step-by-Step Procedure:

1. Open your browser and navigate to **[script.google.com](https://script.google.com)** (sign in with your WEVI organisation Google account).
2. Click **New project** (top-left).
3. In the code editor, delete any placeholder code in `Code.gs`.
4. Copy the entire contents of [`google-apps-script/create_wevi_form.js`](./google-apps-script/create_wevi_form.js) and paste it into the editor.
5. Click the **Save** icon (Ctrl+S / Cmd+S).
6. In the function dropdown on the toolbar, ensure `createWeviRegistrationForm` is selected.
7. Click **Run**.
8. **Permissions Notice**: Google will ask you to authorize the script to create the Form and Spreadsheet in your Google Drive:
   - Click **Review permissions**.
   - Select your Google account.
   - Click **Advanced** &rarr; Click **Go to Untitled project (unsafe)**.
   - Click **Allow**.
9. The script will execute. Open the **Execution Log** at the bottom of the screen. You will see:
   - **Form Published URL**: `https://docs.google.com/forms/d/e/.../viewform`
   - **Form Edit URL**: `https://docs.google.com/forms/d/.../edit`
   - **Linked Google Sheet URL**: `https://docs.google.com/spreadsheets/d/.../edit`

---

## 2. Dynamic Section Branching Logic

The generated Google Form implements the required conditional branching logic:

```
[Section 1: Basic Information]
  ├── Email Address (Required)
  └── Team Name (Required for all formats)
         │
[Section 2: Team Captain Information]
  ├── Captain Real Name (Required)
  ├── Captain In-Game Name (IGN) (Required)
  ├── Captain UID / Game ID (Required)
  ├── Captain Phone Number (+91) (Required)
  ├── Captain WhatsApp Number (+91) (Required)
  └── Vice Captain WhatsApp Number (Optional)
         │
[Section 3: Game Selection]
  └── Choice: Free Fire, Call of Duty, BGMI, eFootball
         │
[Section 4: Participation Format Selector]
  ├── Option "Solo / 1"   ───> Jumps to Section 4A (Solo Player Details)
  ├── Option "Duo / 2"    ───> Jumps to Section 4B (Duo Players Details)
  └── Option "Squad / 4"  ───> Jumps to Section 4C (Squad Players Details)
         │
  [Section 4A: Solo]       [Section 4B: Duo]       [Section 4C: Squad]
    • Player 1 IGN & UID     • Player 1 IGN & UID    • Player 1 IGN & UID
                             • Player 2 IGN & UID    • Player 2 IGN & UID
                                                     • Player 3 IGN & UID
                                                     • Player 4 IGN & UID
         │                         │                         │
         └─────────────────────────┼─────────────────────────┘
                                   │
                                   ▼
                [Section 5: Declaration & Agreement]
                  • Captain Declaration ("Yes, I agree" / "No, I don't agree")
                  • Required: "Yes, I agree" to submit.
```

---

## 3. Connecting to the WEVI Website

Once your Google Form is created, link it to the website:

1. Create a `.env.local` file in the project root:
   ```env
   # Your generated Google Form link
   NEXT_PUBLIC_GOOGLE_FORM_URL=https://docs.google.com/forms/d/e/YOUR_FORM_ID/viewform

   # Optional: Google Sheets Webhook endpoint for direct web submissions
   # GOOGLE_SHEETS_WEBHOOK_URL=https://script.google.com/macros/s/YOUR_WEBHOOK_ID/exec
   ```

2. When visitors click **Google Form** or **Open Official Google Form**, they are routed directly to your live Google Form.
3. Visitors can also use the integrated **Web Registration Wizard**, which provides instant validation, duplicate checking, and receipt generation.

---

## 4. Google Sheets Column Structure

The linked Google Sheet automatically logs the following structured columns:

| Column | Header | Description |
|---|---|---|
| A | `Timestamp` | Submission date and time |
| B | `Email Address` | Captain's contact email |
| C | `Team Name` | Official team / clan / solo tag |
| D | `Captain's Real Name` | Real identity (KYC/verification) |
| E | `Captain's In-Game Name (IGN)` | In-game character name |
| F | `Captain's UID / Game ID` | Profile numeric ID |
| G | `Captain's Phone Number` | Primary mobile number |
| H | `Captain's WhatsApp Number` | Matchday credentials recipient |
| I | `Vice Captain's WhatsApp Number` | Secondary backup contact |
| J | `Selected Tournament Game` | Free Fire / Call of Duty / BGMI / eFootball |
| K | `Participation Format` | Solo / Duo / Squad |
| L | `Player 1 IGN & UID` | Captain / Player 1 slot |
| M | `Player 2 IGN & UID` | Populated for Duo and Squad |
| N | `Player 3 IGN & UID` | Populated for Squad only |
| O | `Player 4 IGN & UID` | Populated for Squad only |
| P | `Declaration & Agreement` | Confirmation of terms |

---

## 5. Privacy & Security Rules

- **Do Not Expose Form Responses Publicly**: The Google Sheet must remain restricted to WEVI admins and tournament referees.
- **Matchday Displays**: In public broadcasts, stream overlays, or match point tables, only display `Team Name`, `Player In-Game Names (IGNs)`, and `Scores`. Never display phone numbers, real names, or emails.
