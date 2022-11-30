import {createReducer} from '@reduxjs/toolkit';
import {activeCity, loadOffers, setActiveSortValue, setOffersDataLoadingStatus} from './action';
import {INITIAL_CITY, INITIAL_SORT_VALUE} from '../const';
import {Offers} from '../types/offer';

type InitialState = {
  activeCity: string;
  offers: Offers;
  activeSortValue: string;
  isOffersDataLoading: boolean;
}

const initialState: InitialState = {
  activeCity: INITIAL_CITY,
  offers: [],
  activeSortValue: INITIAL_SORT_VALUE,
  isOffersDataLoading: false,
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
    });
});

export {reducer};
