import {createReducer} from '@reduxjs/toolkit';
import {offers} from "../mocks/offers";
import {activeCity} from "./action";
import {INITIAL_CITY} from "../const";

const initialState = {
  activeCity: INITIAL_CITY,
  offers,
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(activeCity, (state, action) => {
      const {city} = action.payload
      state.activeCity = city;
    });
});

export {reducer};
