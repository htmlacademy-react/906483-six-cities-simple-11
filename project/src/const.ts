export const ONE_HUNDRED_PERCENT = 100;
export const MAX_RATING_VALUE = 5;
export const MAX_OFFER_IMAGES_AMOUNT = 6;
export const URL_MARKER_DEFAULT = 'img/pin.svg';
export const URL_MARKER_CURRENT = 'img/pin-active.svg';
export const INITIAL_CITY = 'Paris';
export const INITIAL_SORT_VALUE = 'Popular';
export const MIN_OFFER_SCORE = 1;

export const ReviewTextLength = {
  Min: 50,
  Max: 300,
};

export const SortOption = {
  Popular: 'Popular',
  LowToHigh: 'Price: low to high',
  HighToLow: 'Price: high to low',
  TopRated: 'Top rated first',
};

export enum AppRoute {
  Main = '/',
  Login = '/login',
  Offer = '/offer/:id',
  NotFound = '*',
}

export enum APIRoute {
  Offers = '/hotels',
  Login = '/login',
  Logout = '/logout',
  Nearby = '/nearby',
  Comments = '/comments',
}

export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}
