import { SupportedGame, ParticipationFormat } from "./registration";

export interface GameInfo {
  id: string;
  name: SupportedGame;
  category: string;
  shortDescription: string;
  longDescription: string;
  supportedFormats: ParticipationFormat[];
  bannerImage: string;
  thumbnail: string;
  accentColor: string;
  activePlayers: string;
  badge: string;
}

export interface TournamentItem {
  id: string;
  title: string;
  game: SupportedGame;
  format: ParticipationFormat;
  status: "Registration Open" | "Upcoming" | "Live Now" | "Completed";
  date: string;
  time: string;
  prizePool: string;
  slotsTotal: number;
  slotsFilled: number;
  bannerImage: string;
  entryFee: string;
  tags: string[];
}
