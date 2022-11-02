import {Host} from './host';
import {Reviews} from './review';

export type Offer = {
  id: number;
  isPremium: boolean;
  imageSrc: string;
  price: string;
  rating: string;
  name: string;
  type: string;
  features: string[];
  insideItems: string[];
  host: Host;
  reviews: Reviews;
}

export type Offers = Offer[];
