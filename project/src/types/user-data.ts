import {User} from './user';

export interface UserData extends User {
  email: string;
  token: string;
}
