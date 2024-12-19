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
  offhand: number | null;
  constructor(user: User, data: APIGear) {
    this.user = user;
    this.offhand = data.offhand;
  }
}

class Skills {
  user: User;
  agility: number;
  constructor(user: User, data: APISkills) {
    this.user = user;
    this.agility = data.agility;
  }
}