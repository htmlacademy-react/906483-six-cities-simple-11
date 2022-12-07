import {createReducer} from '@reduxjs/toolkit';
import {
  activeCity,
  loadOffers,
  requireAuthorization,
  setActiveSortValue,
  setOffersDataLoadingStatus, userData,
} from './action';
import {AuthorizationStatus, INITIAL_CITY, INITIAL_SORT_VALUE} from '../const';
import {Offers} from '../types/offer';
import {UserData} from '../types/user-data';

type InitialState = {
  activeCity: string;
  offers: Offers;
  activeSortValue: string;
  isOffersDataLoading: boolean;
  authorizationStatus: AuthorizationStatus;
  userData: UserData | null;
}

const initialState: InitialState = {
  activeCity: INITIAL_CITY,
  offers: [],
  activeSortValue: INITIAL_SORT_VALUE,
  isOffersDataLoading: false,
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
    .addCase(setActiveSortValue, (state, action) => {
      const {sortValue} = action.payload;
      state.activeSortValue = sortValue;
    })
    .addCase(setOffersDataLoadingStatus, (state, action) => {
      state.isOffersDataLoading = action.payload;
    })
    .addCase(requireAuthorization, (state, action) => {
      state.authorizationStatus = action.payload;
    })
    .addCase(userData, (state, action) => {
      state.userData = action.payload;
    });
});

export {reducer};
