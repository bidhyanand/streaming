export interface fullMatches {
  date: string;
  team1: string;
  match: string;
  team2: string;
  group?: string;
  time: any;
  location: string;
}

export interface matchesDivision {
  data: fullMatches[];
}
