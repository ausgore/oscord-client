import { APIGear, APISkills, APIUser } from '../types/user.types';

export class User {
  id: string;
  gear: Gear;
  skills: Skills;
  constructor(data: APIUser) {
    this.id = data.id;
    this.gear = new Gear(this, data.gear);
    this.skills = new Skills(this, data.skills);
  } 
}

class Gear {
  user: User;
  mainhand: number | null;
  offhand: number | null;
  constructor(user: User, data: APIGear) {
    this.user = user;
    this.mainhand = data.mainhand;
    this.offhand = data.offhand;
  }
}

class Skills {
  user: User;
  agility: number;
  fishing: number;
  cooking: number;
  constructor(user: User, data: APISkills) {
    this.user = user;
    this.agility = data.agility;
    this.fishing = data.fishing;
    this.cooking = data.cooking;
  }
}