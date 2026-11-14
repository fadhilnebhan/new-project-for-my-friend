# WEVI INDIA — Esports Organisation & Tournament Platform

A premier, production-grade esports organisation website and tournament management platform built for **WEVI INDIA**.

This platform transforms the conventional Google Forms tournament registration into a high-octane esports web experience featuring dark futuristic aesthetics, glassmorphic UI, real-time multi-step roster validation, and automated **Google Forms & Google Sheets** integration.

---

## 🏆 Key Features

### 1. Brand & Design System
- **Esports Aesthetics**: Dark charcoal/obsidian backgrounds (`#06080C`, `#0B0E14`), neon purple, electric blue, and cyber cyan accents.
- **Glassmorphism**: Backdrop blur overlays, cyber cut corners, and dynamic glow borders.
- **Fully Responsive**: Mobile-first responsive navigation with drawer menus, tablet optimization, and high-DPI desktop viewports.
- **Typography & Visuals**: High-contrast headings, custom esports scrollbars, and tournament status pills.

### 2. Complete Landing Page Sections
- **Sticky Navbar**: WEVI INDIA badge, quick navigation, direct Google Form link, and glowing "Register Now" action CTA.
- **Hero Section**:
  - Headline: *"ENTER THE ARENA. PROVE YOUR SKILLS."*
  - Live Season 2026 registration status badge.
  - Quick action CTAs with instant modal trigger.
  - Platform stats counter: 5,000+ Competitors, 120+ Tournaments, 4 Titles, 100% Anti-Cheat.
- **About WEVI**:
  - Official positioning statement & core pillars (Equal Opportunity, Prompt Matchday Management, Fair Play).
- **Supported Games**:
  - Interactive cards for **Free Fire**, **BGMI**, **Call of Duty**, and **eFootball** with direct game-selection registration triggers.
- **Tournament Showcase**:
  - Filterable tournament circuits with verified status tags, dates, formats, and prize pool placeholders.
- **Why Choose WEVI**:
  - 5 core platform advantages with custom illuminated iconography.
- **Community Hub**:
  - Official WhatsApp Community CTA, Captain WhatsApp desk, Discord invite, and social channels.
- **Contact & Helpdesk**:
  - Direct message form with feedback states, operational hours, and email support.
- **Footer**:
  - Organization credentials, quick navigation, game links, and legal modals (Privacy Policy & Terms).

### 3. Modern Multi-Step Team Registration Wizard
- **Step 1: Basic Information**:
  - Email Address (RFC-compliant regex validation).
  - Team Name (Required for all formats, including Solo).
- **Step 2: Team Captain Information**:
  - Captain's Real Name (strictly distinguished from IGN).
  - Captain's In-Game Name (IGN) (character name in game client).
  - Captain's UID / Game ID (numeric profile identifier).
  - Captain's Phone Number (+91 Indian 10-digit mobile number validation).
  - Captain's WhatsApp Number (with 1-click "Same as Phone" sync).
  - Vice Captain's WhatsApp Number (optional).
- **Step 3: Game Selection**:
  - Visual selection cards for Free Fire, BGMI, Call of Duty, and eFootball (eFootball auto-locks to Solo).
- **Step 4: Participation Format & Conditional Roster Logic**:
  - **Solo**: Roster displays only Player 1 (Captain). Players 2, 3, and 4 are hidden.
  - **Duo**: Roster displays Player 1 and Player 2. Players 3 and 4 are hidden.
  - **Squad**: Roster displays Player 1, Player 2, Player 3, and Player 4.
  - Complete validation for all active roster slots.
- **Step 5: Declaration & Agreement**:
  - Official Captain declaration text.
  - Mandatory selection of *"Yes, I agree"* before submitting.
- **Step 6: Review & Final Confirmation**:
  - Comprehensive summary card with edit shortcuts for every section.
  - Duplicate check against previous team registrations.
  - Transmit animation & loading states.
- **Receipt & Confirmation Screen**:
  - Animated celebration confetti (`canvas-confetti`).
  - Unique Tournament Pass ID (e.g. `WEVI-BGM-U7QHR`).
  - 1-Click Copyable receipt for captains.
  - Direct link to official WhatsApp Captain Desk.

### 4. Google Forms & Google Sheets Integration
- **Automated Google Apps Script Generator** (`google-apps-script/create_wevi_form.js`):
  - Automatically generates the official Google Form with section-based page breaks and branching (Solo &rarr; Solo section, Duo &rarr; Duo section, Squad &rarr; Squad section &rarr; Declaration).
  - Links directly to a freshly created Google Sheet database.
- **In-App Google Form Modal**:
  - Allows switching between the web wizard and the direct Google Form link.
  - Provides the complete 30-second setup procedure.
- **Setup Guide**: See [`GOOGLE_SHEETS_SETUP.md`](./GOOGLE_SHEETS_SETUP.md).

---

## 🛠️ Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS with custom esports theme
- **Icons**: Lucide React
- **Animations**: Framer Motion & CSS keyframe glow
- **Confetti**: Canvas-Confetti
- **Backend**: Next.js API Routes + Google Sheets Webhook / Google Forms

---

## 🚀 Getting Started

### 1. Clone & Install
```bash
# Clone the repository
git clone <repo-url>
cd "new project"

# Install dependencies
npm install
```

### 2. Environment Variables
Create `.env.local`:
```env
NEXT_PUBLIC_GOOGLE_FORM_URL=https://docs.google.com/forms/d/e/.../viewform
GOOGLE_SHEETS_WEBHOOK_URL=https://script.google.com/macros/s/.../exec
```

### 3. Run Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### 4. Run Verification Tests
```bash
node scripts/test-registration.js
```

### 5. Production Build
```bash
npm run build
npm run start
```

---

## 🌐 Deployment to Vercel

1. Push your repository to GitHub, GitLab, or Bitbucket.
2. Sign in to [Vercel](https://vercel.com) and click **Add New Project**.
3. Select your repository.
4. Set the Framework Preset to **Next.js**.
5. Add `NEXT_PUBLIC_GOOGLE_FORM_URL` in the **Environment Variables** section.
6. Click **Deploy**.
