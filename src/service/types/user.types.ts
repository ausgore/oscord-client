export interface iUser {
  id: string;
  gear: iGear;
  skills: iSkills;
}

export interface iGear {
  user: iUser;
  offhand: number | null;
}

export interface iSkills {
  user: iUser;
  agility: number;
}