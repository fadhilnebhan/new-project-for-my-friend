/**
 * ==============================================================================
 * WEVI INDIA — Official Tournament Registration Google Form & Sheets Generator
 * ==============================================================================
 * 
 * Instructions:
 * 1. Open Google Drive (drive.google.com) or Google Apps Script (script.google.com)
 * 2. Click "New Project" and paste this entire code into Code.gs
 * 3. Click the Save icon (floppy disk)
 * 4. In the function dropdown, select "createWeviRegistrationForm" and click "Run"
 * 5. Review permissions when prompted by Google (click Advanced -> Go to project)
 * 6. View the Execution Log at the bottom: It will output your Form Published URL,
 *    Form Edit URL, and your newly created Google Sheet URL!
 * 7. Copy the Form Published URL into your WEVI INDIA website configuration (.env)
 * ==============================================================================
 */

function createWeviRegistrationForm() {
  Logger.log('Initializing WEVI INDIA Google Form Creation...');

  // 1. Create Google Form
  var form = FormApp.create('WEVI INDIA — Tournament Registration')
    .setDescription(
      'Official Esports Tournament & Team Registration Platform for WEVI INDIA.\\n' +
      'Supported Titles: Free Fire, Call of Duty, BGMI, and eFootball.\\n\\n' +
      'Please ensure all Captain and Roster details are accurate. All registrations are verified by official WEVI referees.'
    )
    .setConfirmationMessage(
      '🏆 Registration Received! Welcome to WEVI INDIA.\\n\\n' +
      'Your team details have been logged in the official tournament database.\\n' +
      'Please join the official WhatsApp Captain Desk to receive custom room credentials and bracket updates.'
    )
    .setAllowResponseEdits(false)
    .setAcceptingResponses(true)
    .setShowLinkToRespondAgain(true);

  // ============================================================================
  // SECTION 1: BASIC INFORMATION
  // ============================================================================
  // Form starts on Page 1 by default
  
  // Field 1: Email Address
  form.addTextItem()
    .setTitle('Email Address')
    .setHelpText('Official contact email for match fixtures, confirmations, and notices.')
    .setRequired(true);

  // Field 2: Team Name
  form.addTextItem()
    .setTitle('Team Name')
    .setHelpText('The team name must be entered even if the user participates solo (e.g. Clan tag or Player Handle).')
    .setRequired(true);

  // ============================================================================
  // SECTION 2: TEAM CAPTAIN INFORMATION
  // ============================================================================
  var captainSection = form.addPageBreakItem()
    .setTitle('Team Captain Information')
    .setHelpText('The Captain is the primary contact responsible for lobby check-ins, reporting scores, and communication.');

  // Field 3: Captain Real Name
  form.addTextItem()
    .setTitle("Captain's Real Name")
    .setHelpText("Official real identity as per KYC/ID. Must not be confused with In-Game Name.")
    .setRequired(true);

  // Field 4: Captain In-Game Name
  form.addTextItem()
    .setTitle("Captain's In-Game Name (IGN)")
    .setHelpText("Exact character name displayed in the game client.")
    .setRequired(true);

  // Field 5: Captain UID / Game ID
  form.addTextItem()
    .setTitle("Captain's UID / Game ID")
    .setHelpText("Numeric or unique ID from the game profile.")
    .setRequired(true);

  // Field 6: Captain Phone Number
  form.addTextItem()
    .setTitle("Captain's Phone Number (+91 Indian Mobile)")
    .setHelpText("Standard 10-digit Indian mobile number for calls.")
    .setRequired(true);

  // Field 7: Captain WhatsApp Number
  form.addTextItem()
    .setTitle("Captain's WhatsApp Number")
    .setHelpText("Active WhatsApp number for receiving room IDs and passwords.")
    .setRequired(true);

  // Field 8: Vice Captain WhatsApp Number (Optional)
  form.addTextItem()
    .setTitle("Vice Captain's WhatsApp Number")
    .setHelpText("Optional secondary WhatsApp contact if captain is unreachable.")
    .setRequired(false);

  // ============================================================================
  // SECTION 3: GAME SELECTION
  // ============================================================================
  var gameSection = form.addPageBreakItem()
    .setTitle('Game Selection')
    .setHelpText('Choose the tournament game your team is registering to compete in.');

  form.addMultipleChoiceItem()
    .setTitle('Select Tournament Game')
    .setChoiceValues(['Free Fire', 'Call of Duty', 'BGMI', 'eFootball'])
    .setRequired(true);

  // ============================================================================
  // SECTION 7: DECLARATION & AGREEMENT (Created early to configure Page Navigation)
  // ============================================================================
  var declarationSection = form.addPageBreakItem()
    .setTitle('Declaration & Agreement')
    .setHelpText('Final verification and agreement with official WEVI tournament regulations.');

  var declarationText =
    'I, the Team Captain, hereby declare that all the information provided is true and accurate. ' +
    'I understand that any incorrect information may result in team rejection, and I have no objections to participating with WEVI Leagues.';

  form.addMultipleChoiceItem()
    .setTitle(declarationText)
    .setChoiceValues(['Yes, I agree', "No, I don't agree"])
    .setRequired(true);

  // ============================================================================
  // SECTION 4A: SOLO ROSTER DETAILS (Branch 1)
  // ============================================================================
  var soloSection = form.addPageBreakItem()
    .setTitle('Solo Player Details')
    .setHelpText('Enter details for Solo (1 Player) competition.');

  form.addTextItem().setTitle('Player 1 / Team Captain In-Game Name (IGN)').setRequired(true);
  form.addTextItem().setTitle('Player 1 UID / ID').setRequired(true);
  soloSection.setGoToPage(declarationSection); // After Solo, go straight to Declaration

  // ============================================================================
  // SECTION 4B: DUO ROSTER DETAILS (Branch 2)
  // ============================================================================
  var duoSection = form.addPageBreakItem()
    .setTitle('Duo Players Details')
    .setHelpText('Enter details for Duo (2 Players) competition.');

  form.addTextItem().setTitle('Player 1 / Team Captain In-Game Name (IGN)').setRequired(true);
  form.addTextItem().setTitle('Player 1 UID / ID').setRequired(true);
  form.addTextItem().setTitle('Player 2 In-Game Name (IGN)').setRequired(true);
  form.addTextItem().setTitle('Player 2 UID / ID').setRequired(true);
  duoSection.setGoToPage(declarationSection); // After Duo, go straight to Declaration

  // ============================================================================
  // SECTION 4C: SQUAD ROSTER DETAILS (Branch 3)
  // ============================================================================
  var squadSection = form.addPageBreakItem()
    .setTitle('Squad Players Details')
    .setHelpText('Enter details for Squad (4 Players) competition.');

  form.addTextItem().setTitle('Player 1 / Team Captain In-Game Name (IGN)').setRequired(true);
  form.addTextItem().setTitle('Player 1 UID / ID').setRequired(true);
  form.addTextItem().setTitle('Player 2 In-Game Name (IGN)').setRequired(true);
  form.addTextItem().setTitle('Player 2 UID / ID').setRequired(true);
  form.addTextItem().setTitle('Player 3 In-Game Name (IGN)').setRequired(true);
  form.addTextItem().setTitle('Player 3 UID / ID').setRequired(true);
  form.addTextItem().setTitle('Player 4 In-Game Name (IGN)').setRequired(true);
  form.addTextItem().setTitle('Player 4 UID / ID').setRequired(true);
  squadSection.setGoToPage(declarationSection); // After Squad, go straight to Declaration

  // ============================================================================
  // SECTION 4: PARTICIPATION FORMAT SELECTOR WITH BRANCHING
  // ============================================================================
  // We place this section right after Game Selection
  var formatSection = form.addPageBreakItem()
    .setTitle('Participation Format')
    .setHelpText('Select your format. The form will dynamically branch to your roster size.');

  var formatItem = form.addMultipleChoiceItem()
    .setTitle('Choose Format')
    .setHelpText('Solo = 1 Player, Duo = 2 Players, Squad = 4 Players')
    .setRequired(true);

  // Set branching navigation:
  // Solo -> goes to soloSection
  // Duo -> goes to duoSection
  // Squad -> goes to squadSection
  formatItem.setChoices([
    formatItem.createChoice('Solo / 1', soloSection),
    formatItem.createChoice('Duo / 2', duoSection),
    formatItem.createChoice('Squad / 4', squadSection)
  ]);

  // ============================================================================
  // SECTION 5: GOOGLE SHEETS STORAGE INTEGRATION
  // ============================================================================
  var spreadsheet = SpreadsheetApp.create('WEVI INDIA — Tournament Registrations Database');
  form.setDestination(FormApp.DestinationType.SPREADSHEET, spreadsheet.getId());

  var sheet = spreadsheet.getActiveSheet();
  sheet.setName('All Registrations');

  Logger.log('===========================================================');
  Logger.log('SUCCESS! WEVI INDIA FORM AND SHEETS GENERATED:');
  Logger.log('Form Published URL (Share with players): ' + form.getPublishedUrl());
  Logger.log('Form Edit URL (Admin editing): ' + form.getEditUrl());
  Logger.log('Linked Google Sheet URL (Database): ' + spreadsheet.getUrl());
  Logger.log('===========================================================');
}
