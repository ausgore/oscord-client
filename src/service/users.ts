import axios from 'axios';
import { APIUser } from './types/user.types';
import { User } from './classes/user';

export class UserManager {
  static async fetch() {
    const response = await axios.get<APIUser[]>(`${process.env.API_URL}`);
    return response.data.map(u => new User(u));
  }
}