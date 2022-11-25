import {createAction} from '@reduxjs/toolkit';

export const activeCity = createAction<{city: string}>('app/activeCity');
export const filterOffers = createAction('app/filterOffers');
