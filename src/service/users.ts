import axios from 'axios';
import { iUser } from './types/user.types';
import { User } from './classes/user';

export class UserManager {
  static async fetch() {
    const response = await axios.get<iUser[]>(`${process.env.API_URL}`);
    return response.data.map(u => new User(u));
  }
}