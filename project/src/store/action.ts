import {createAction} from '@reduxjs/toolkit';
import {Offers} from '../types/offer';

export const activeCity = createAction<{city: string}>('app/activeCity');
export const setActiveSortValue = createAction<{sortValue: string}>('app/sortOffers');
export const loadOffers = createAction<Offers>('data/loadOffers');
export const setOffersDataLoadingStatus = createAction<boolean>('data/setOffersDataLoadingStatus');
