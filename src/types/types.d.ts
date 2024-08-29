type PlayerData = {
   success: boolean;
   response: {
      banned?: boolean;
      muted?: boolean;
      account: {
         type: string;
         username: string;
      };
      best_tag: {
         color: string;
         name: string;
      };
      clan?: {
         name: string;
         tag: string;
         tag_color: string;
      };
      connected: boolean;
      discord?: {
         name: string;
      };
      first_login?: number;
      last_login?: number;
      skin?: {
         hash: string;
      };
      stats: {
         bedwars: BedwarsStats;
         skywars_r1: SkywarsStats;
         hungergames: HungerGamesStats;
         pvp: PvPStats;
         duels: DuelsStats;
      };
   };
};

interface BedwarsStats {
   level_badge: {
      format: string;
      hex_color: string;
      min_level: string;
      symbol: string;
      type: string;
   };

   level?: string;

   beds_broken?: number;
   final_deaths?: number;
   final_kills?: number;
   kills?: number;
   deaths?: number;
   losses?: number;
   wins?: number;
   max_winstreak?: number;
   winstreak?: number;

   solo_beds_broken?: number;
   solo_deaths?: number;
   solo_final_deaths?: number;
   solo_final_kills?: number;
   solo_kills?: number;
   solo_losses?: number;
   solo_max_winstreak?: number;
   solo_wins?: number;
   solo_winstreak?: number;

   doubles_beds_broken?: number;
   doubles_deaths?: number;
   doubles_final_deaths?: number;
   doubles_final_kills?: number;
   doubles_kills?: number;
   doubles_losses?: number;
   doubles_max_winstreak?: number;
   doubles_wins?: number;
   doubles_winstreak?: number;

   "3v3v3v3_beds_broken"?: number;
   "3v3v3v3_deaths"?: number;
   "3v3v3v3_final_deaths"?: number;
   "3v3v3v3_final_kills"?: number;
   "3v3v3v3_kills"?: number;
   "3v3v3v3_losses"?: number;
   "3v3v3v3_max_winstreak"?: number;
   "3v3v3v3_wins"?: number;
   "3v3v3v3_winstreak"?: number;

   "4v4v4v4_beds_broken"?: number;
   "4v4v4v4_deaths"?: number;
   "4v4v4v4_final_deaths"?: number;
   "4v4v4v4_final_kills"?: number;
   "4v4v4v4_kills"?: number;
   "4v4v4v4_losses"?: number;
   "4v4v4v4_max_winstreak"?: number;
   "4v4v4v4_wins"?: number;
   "4v4v4v4_winstreak"?: number;

   "1v1_beds_broken"?: number;
   "1v1_deaths"?: number;
   "1v1_final_deaths"?: number;
   "1v1_final_kills"?: number;
   "1v1_kills"?: number;
   "1v1_losses"?: number;
   "1v1_max_winstreak"?: number;
   "1v1_wins"?: number;
   "1v1_winstreak"?: number;

   "2v2_beds_broken"?: number;
   "2v2_deaths"?: number;
   "2v2_final_deaths"?: number;
   "2v2_final_kills"?: number;
   "2v2_kills"?: number;
   "2v2_losses"?: number;
   "2v2_max_winstreak"?: number;
   "2v2_wins"?: number;
   "2v2_winstreak"?: number;

   "3v3_beds_broken"?: number;
   "3v3_deaths"?: number;
   "3v3_final_deaths"?: number;
   "3v3_final_kills"?: number;
   "3v3_kills"?: number;
   "3v3_losses"?: number;
   "3v3_max_winstreak"?: number;
   "3v3_wins"?: number;
   "3v3_winstreak"?: number;

   "4v4_beds_broken"?: number;
   "4v4_deaths"?: number;
   "4v4_final_deaths"?: number;
   "4v4_final_kills"?: number;
   "4v4_kills"?: number;
   "4v4_losses"?: number;
   "4v4_max_winstreak"?: number;
   "4v4_wins"?: number;
   "4v4_winstreak"?: number;

   mega_beds_broken?: number;
   mega_deaths?: number;
   mega_final_deaths?: number;
   mega_final_kills?: number;
   mega_kills?: number;
   mega_losses?: number;
   mega_max_winstreak?: number;
   mega_wins?: number;
   mega_winstreak?: number;
}

interface SkywarsStats {
   level: number;
   max_winstreak?: number;
   deaths?: number;
   deaths_solo?: number;
   deaths_team?: number;
   kills?: number;
   kills_solo?: number;
   kills_team?: number;
   level_badge: {
      format: string;
      hex_color: string;
      min_level: number;
      symbol: string;
      type: string;
   };
   losses?: number;
   losses_solo?: number;
   losses_team?: number;
   wins?: number;
   wins_solo?: number;
   wins_team?: number;
   winstreak?: number;
}

interface HungerGamesStats {
   doublekit_ranking: {
      hex_color: string;
      id: string;
      name: string;
      symbol: string;
   };
   assists?: number;
   deaths?: number;
   kills?: number;
   max_kills?: number;
   wins?: number;

   mode_doublekit_assists?: number;
   mode_doublekit_deaths?: number;
   mode_doublekit_kills?: number;
   mode_doublekit_wins?: number;

   mode_minimush_assists?: number;
   mode_minimush_deaths?: number;
   mode_minimush_kills?: number;
   mode_minimush_wins?: number;

   mode_megamush_assists?: number;
   mode_megamush_deaths?: number;
   mode_megamush_kills?: number;
   mode_megamush_wins?: number;

   mode_quarterquell_assists?: number;
   mode_quarterquell_deaths?: number;
   mode_quarterquell_kills?: number;
   mode_quarterquell_wins?: number;
}

interface PvPStats {
   coins?: number;
   arena_deaths?: number;
   arena_kills?: number;
   arena_killstreak?: number;
   arena_max_killstreak?: number;

   fps_deaths?: number;
   fps_kills?: number;
   fps_killstreak?: number;
   fps_max_killstreak?: number;
}

interface DuelsStats {
   bed_fight_beds_broken?: number;
   bed_fight_deaths?: number;
   bed_fight_kills?: number;
   bed_fight_losses?: number;
   bed_fight_wins?: number;

   bed_fight_max_winstreak?: number;
   bed_fight_winstreak?: number;

   bed_fight_doubles_beds_broken?: number;
   bed_fight_doubles_deaths?: number;
   bed_fight_doubles_kills?: number;
   bed_fight_doubles_losses?: number;
   bed_fight_doubles_max_winstreak?: number;
   bed_fight_doubles_wins?: number;
   bed_fight_doubles_winstreak?: number;

   bed_fight_solo_beds_broken?: number;
   bed_fight_solo_deaths?: number;
   bed_fight_solo_kills?: number;
   bed_fight_solo_losses?: number;
   bed_fight_solo_max_winstreak?: number;
   bed_fight_solo_wins?: number;
   bed_fight_solo_winstreak?: number;

   boxing_deaths?: number;
   boxing_kills?: number;
   boxing_losses?: number;
   boxing_max_winstreak?: number;
   boxing_solo_deaths?: number;
   boxing_solo_kills?: number;
   boxing_solo_losses?: number;
   boxing_solo_max_winstreak?: number;
   boxing_solo_wins?: number;
   boxing_solo_winstreak?: number;
   boxing_wins?: number;
   boxing_winstreak?: number;

   bridge_1v1v1v1_winstreak?: number;
   bridge_1v1v1v1_wins?: number;
   bridge_1v1v1v1_losses?: number;
   bridge_1v1v1v1_kills?: number;
   bridge_1v1v1v1_deaths?: number;
   bridge_deaths?: number;
   bridge_doubles_deaths?: number;
   bridge_doubles_kills?: number;
   bridge_doubles_losses?: number;
   bridge_doubles_max_winstreak?: number;
   bridge_doubles_points?: number;
   bridge_doubles_wins?: number;
   bridge_doubles_winstreak?: number;
   bridge_three_deaths?: number;
   bridge_three_kills?: number;
   bridge_three_losses?: number;
   bridge_three_points?: number;
   bridge_three_wins: number;
   bridge_three_winstreak: number;
   bridge_four_deaths?: number;
   bridge_four_kills?: number;
   bridge_four_points?: number;
   bridge_four_wins?: number;
   bridge_four_losses?: number;
   bridge_four_winstreak?: number;
   bridge_kills?: number;
   bridge_losses?: number;
   bridge_max_winstreak?: number;
   bridge_points?: number;
   bridge_solo_deaths?: number;
   bridge_solo_kills?: number;
   bridge_solo_losses?: number;
   bridge_solo_max_winstreak?: number;
   bridge_solo_points?: number;
   bridge_solo_wins?: number;
   bridge_solo_winstreak?: number;
   bridge_wins?: number;
   bridge_winstreak?: number;

   gladiator_deaths: number;
   gladiator_doubles_deaths: number;
   gladiator_doubles_kills: number;
   gladiator_doubles_losses: number;
   gladiator_doubles_max_winstreak: number;
   gladiator_doubles_wins: number;
   gladiator_doubles_winstreak: number0;
   gladiator_hg_solo_deaths: number1;
   gladiator_hg_solo_kills: number;
   gladiator_hg_solo_losses: number;
   gladiator_hg_solo_wins: number;
   gladiator_hg_solo_winstreak: number;
   gladiator_hg_doubles_wins?: number;
   gladiator_hg_doubles_losses?: number;
   gladiator_hg_doubles_kills?: number;
   gladiator_hg_doubles_deaths?: number;
   gladiator_kills: number;
   gladiator_losses: number;
   gladiator_max_winstreak: number;
   gladiator_solo_deaths: number;
   gladiator_solo_kills: number;
   gladiator_solo_losses: number;
   gladiator_solo_max_winstreak: number;
   gladiator_solo_wins: number;
   gladiator_solo_winstreak: number;
   gladiator_wins: number;
   gladiator_winstreak: number;

   soup_deaths: number;
   soup_doubles_deaths: number;
   soup_doubles_kills: number;
   soup_doubles_losses: number;
   soup_doubles_max_winstreak: number;
   soup_doubles_wins: number;
   soup_doubles_winstreak: number;
   soup_kills: number;
   soup_losses: number;
   soup_max_winstreak: number;
   soup_solo_deaths: number;
   soup_solo_kills: number;
   soup_solo_losses: number;
   soup_solo_max_winstreak: number;
   soup_solo_wins: number;
   soup_solo_winstreak: number;
   soup_wins: number;
   soup_winstreak: number;
}
