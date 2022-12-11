import {User} from './user';

export type Review = {
  comment: string;
  date: string;
  id: string;
  rating: number;
  user: User;
}

export type Reviews = Review[];

export type ReviewData = Omit<Review, 'user' | 'date'>;
