import {Host} from './host';
import {Location} from './location';
import {City} from './city';

export type Offer = {
  city: City;
  bedrooms: number;
  description: string;
  goods: string[];
  host: Host;
  id: number;
  images: string[];
  isPremium: boolean;
  location: Location;
  maxAdults: number;
  previewImage: string;
  price: number;
  rating: number;
  title: string;
  type: string;
}

export type Offers = Offer[];
