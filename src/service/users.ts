import axios from 'axios';
import { APIUser } from './types/user.types';
import { User } from './classes/user';

export class UserManager {
  static cache: Map<string, User> = new Map();

  static async create(id: string, data?: Partial<Omit<APIUser, 'id'>>) {
    const response = await axios.post<APIUser>(`${process.env.API_URL}/users/create/${id}`, data);
    const user = new User(response.data);
    this.cache.set(id, user);
    return user;
  }

  static async fetch(id: string): Promise<User | null> {
    let user: User | null = this.cache.get(id) ?? null;
    if (!user) {
      const response = await axios.get<APIUser | null>(`${process.env.API_URL}/users/${id}`);
      if (response.data) user = new User(response.data);
      else user = await this.create(id);
    }
    if (user) this.cache.set(id, user);
    return user;
  }
}