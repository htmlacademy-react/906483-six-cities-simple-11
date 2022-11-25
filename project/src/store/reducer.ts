import {createReducer} from '@reduxjs/toolkit';
import {offers} from '../mocks/offers';
import {activeCity, filterOffers} from './action';
import {INITIAL_CITY} from '../const';

const initialState = {
  activeCity: INITIAL_CITY,
  filteredOffers: offers.filter((i) => i.city.name === INITIAL_CITY),
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(activeCity, (state, action) => {
      const {city} = action.payload;
      state.activeCity = city;
    })
    .addCase(filterOffers, (state) => {
      state.filteredOffers = offers.filter((i) => i.city.name === state.activeCity);
    });
});

export {reducer};
