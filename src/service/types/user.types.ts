export interface APIUser {
  id: string;
  gear: APIGear;
  skills: APISkills;
}

export interface APIGear {
  user: APIUser;
  offhand: number | null;
}

export interface APISkills {
  user: APIUser;
  agility: number;
}