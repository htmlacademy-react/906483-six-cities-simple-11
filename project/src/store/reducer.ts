import {createReducer} from '@reduxjs/toolkit';
import {
  activeCity, loadNearbyOffers, loadOffer,
  loadOffers, loadReviews,
  requireAuthorization,
  setActiveSortValue,
  setDataLoadedStatus,
  userData,
} from './action';
import {AuthorizationStatus, INITIAL_CITY, INITIAL_SORT_VALUE} from '../const';
import {Offer, Offers} from '../types/offer';
import {UserData} from '../types/user-data';
import {Reviews} from '../types/review';

type InitialState = {
  activeCity: string;
  offers: Offers;
  offer: Offer | null;
  nearbyOffers: Offers;
  reviews: Reviews;
  activeSortValue: string;
  isDataLoaded: boolean;
  authorizationStatus: AuthorizationStatus;
  userData: UserData | null;
}

const initialState: InitialState = {
  activeCity: INITIAL_CITY,
  offers: [],
  offer: null,
  nearbyOffers: [],
  reviews: [],
  activeSortValue: INITIAL_SORT_VALUE,
  isDataLoaded: false,
  authorizationStatus: AuthorizationStatus.Unknown,
  userData: null,
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(activeCity, (state, action) => {
      const {city} = action.payload;
      state.activeCity = city;
    })
    .addCase(loadOffers, (state, action) => {
      state.offers = action.payload;
    })
    .addCase(loadOffer, (state, action) => {
      state.offer = action.payload;
    })
    .addCase(loadNearbyOffers, (state, action) => {
      state.nearbyOffers = action.payload;
    })
    .addCase(loadReviews, (state, action) => {
      state.reviews = action.payload;
    })
    .addCase(setActiveSortValue, (state, action) => {
      const {sortValue} = action.payload;
      state.activeSortValue = sortValue;
    })
    .addCase(setDataLoadedStatus, (state, action) => {
      state.isDataLoaded = action.payload;
    })
    .addCase(requireAuthorization, (state, action) => {
      state.authorizationStatus = action.payload;
    })
    .addCase(userData, (state, action) => {
      state.userData = action.payload;
    });
});

export {reducer};
