import {createAction} from '@reduxjs/toolkit';
import {Offers} from '../types/offer';
import {AppRoute, AuthorizationStatus} from '../const';
import {UserData} from '../types/user-data';

export const activeCity = createAction<{city: string}>('app/activeCity');

export const setActiveSortValue = createAction<{sortValue: string}>('app/sortOffers');

export const redirectToRoute = createAction<AppRoute>('app/redirectToRoute');

export const loadOffers = createAction<Offers>('data/loadOffers');

export const setOffersDataLoadingStatus = createAction<boolean>('data/setOffersDataLoadingStatus');

export const requireAuthorization = createAction<AuthorizationStatus>('user/requireAuthorization');

export const userData = createAction<UserData | null>('user/userData');
