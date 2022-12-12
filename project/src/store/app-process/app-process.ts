import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {INITIAL_CITY, INITIAL_SORT_VALUE, NameSpace} from '../../const';
import {AppProcess} from '../../types/state';

const initialState: AppProcess = {
  activeCity: INITIAL_CITY,
  activeSortValue: INITIAL_SORT_VALUE,
};

export const appProcess = createSlice({
  name: NameSpace.App,
  initialState,
  reducers: {
    setActiveCity: (state, action: PayloadAction<string>) => {
      state.activeCity = action.payload;
    },
    setActiveSortValue: (state, action: PayloadAction<string>) => {
      state.activeSortValue = action.payload;
    }
  },
});

export const {setActiveCity, setActiveSortValue} = appProcess.actions;
