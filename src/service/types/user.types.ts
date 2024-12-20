export interface APIUser {
  id: string;
  gear: APIGear;
  skills: APISkills;
}

export interface APIGear {
  user: APIUser;
  mainhand: number | null;
  offhand: number | null;
}

export interface APISkills {
  user: APIUser;
  agility: number;
  fishing: number;
  cooking: number;
}