import {createSelector} from '@reduxjs/toolkit';
import {State} from '../../types/state';
import {NameSpace, SortOption} from '../../const';
import {Offer, Offers} from '../../types/offer';
import {Reviews} from '../../types/review';
import {getActiveCity, getActiveSortValue} from '../app-process/selectors';

export const getDataLoadedStatus = (state: State): boolean => state[NameSpace.Data].isDataLoaded;
export const getOffers = (state: State): Offers => state[NameSpace.Data].offers;
export const getOffer = (state: State): Offer => <Offer>state[NameSpace.Data].offer;
export const getNearbyOffers = (state: State): Offers => state[NameSpace.Data].nearbyOffers;
export const getReviews = (state: State): Reviews => state[NameSpace.Data].reviews;
export const getReviewFormDisabledStatus = (state: State): boolean => state[NameSpace.Data].isReviewFormDisabled;
export const getFilteredOffers = createSelector(
  [getOffers, getActiveCity],
  (offers: Offers, activeCity) => offers.filter((i) => i.city.name === activeCity)
);
export const getSortedOffers = createSelector(
  [getFilteredOffers, getActiveSortValue],
  (offers: Offers, activeSortValue) => {
    switch (activeSortValue) {
      case SortOption.Popular:
        return offers;
      case SortOption.LowToHigh:
        return offers.slice(0).sort((a, b) => a.price - b.price);
      case SortOption.HighToLow:
        return offers.slice(0).sort((a, b) => b.price - a.price);
      case SortOption.TopRated:
        return offers.slice(0).sort((a, b) => b.rating - a.rating);
      default:
        return offers;
    }
  }
);
