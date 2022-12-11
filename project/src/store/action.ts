import {createAction} from '@reduxjs/toolkit';
import {Offer, Offers} from '../types/offer';
import {AppRoute, AuthorizationStatus} from '../const';
import {UserData} from '../types/user-data';
import {Reviews} from '../types/review';

export const activeCity = createAction<{city: string}>('app/activeCity');

export const setActiveSortValue = createAction<{sortValue: string}>('app/sortOffers');

export const redirectToRoute = createAction<AppRoute>('app/redirectToRoute');

export const loadOffers = createAction<Offers>('data/loadOffers');

export const loadOffer = createAction<Offer>('data/loadOffer');

export const loadNearbyOffers = createAction<Offers>('data/loadNearbyOffers');

export const loadReviews = createAction<Reviews>('data/loadReviews');

export const setDataLoadedStatus = createAction<boolean>('data/setDataLoadedStatus');

export const requireAuthorization = createAction<AuthorizationStatus>('user/requireAuthorization');

export const userData = createAction<UserData | null>('user/userData');
