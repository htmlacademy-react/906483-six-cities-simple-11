import {store} from '../store';
import {AuthorizationStatus} from '../const';
import {UserData} from './user-data';
import {Offer, Offers} from './offer';
import {Reviews} from './review';

export type State = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export type UserProcess = {
  authorizationStatus: AuthorizationStatus;
  userData: UserData | null;
};

export type AppProcess = {
  activeCity: string;
  activeSortValue: string;
}

export type OfferData = {
  offers: Offers;
  offer: Offer | null;
  nearbyOffers: Offers;
  reviews: Reviews;
  isDataLoaded: boolean;
  isReviewFormDisabled: boolean;
}
