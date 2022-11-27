import {createReducer} from '@reduxjs/toolkit';
import {offers} from '../mocks/offers';
import {activeCity, filterOffers, sortOffers} from './action';
import {INITIAL_CITY, INITIAL_SORT_VALUE, SortOption} from '../const';

const initialState = {
  activeCity: INITIAL_CITY,
  filteredOffers: offers.filter((i) => i.city.name === INITIAL_CITY),
  activeSortValue: INITIAL_SORT_VALUE,
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(activeCity, (state, action) => {
      const {city} = action.payload;
      state.activeCity = city;
    })
    .addCase(filterOffers, (state) => {
      state.filteredOffers = offers.filter((i) => i.city.name === state.activeCity);
    })
    .addCase(sortOffers, (state, action) => {
      const {sortValue} = action.payload;
      state.activeSortValue = sortValue;
      switch (sortValue) {
        case SortOption.Popular:
          state.filteredOffers = offers.filter((i) => i.city.name === state.activeCity);
          break;
        case SortOption.LowToHigh:
          state.filteredOffers = state.filteredOffers.sort((a, b) => a.price - b.price);
          break;
        case SortOption.HighToLow:
          state.filteredOffers = state.filteredOffers.sort((a, b) => b.price - a.price);
          break;
        case SortOption.TopRated:
          state.filteredOffers = state.filteredOffers.sort((a, b) => b.rating - a.rating);
          break;
      }
    });
});

export {reducer};
