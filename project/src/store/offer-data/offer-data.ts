import {createSlice} from '@reduxjs/toolkit';
import {OfferData} from '../../types/state';
import {NameSpace} from '../../const';
import {fetchNearbyOffers, fetchOfferAction, fetchOffersAction, fetchReviews, sendReviewAction,} from '../api-actions';

const initialState: OfferData = {
  offers: [],
  offer: null,
  nearbyOffers: [],
  reviews: [],
  isDataLoaded: false,
  isReviewFormDisabled: false,
};

export const offerData = createSlice({
  name: NameSpace.Data,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchOffersAction.pending, (state, action) => {
        state.isDataLoaded = true;
      })
      .addCase(fetchOffersAction.fulfilled, (state, action) => {
        state.offers = action.payload;
        state.isDataLoaded = false;
      })
      .addCase(fetchOffersAction.rejected, (state, action) => {
        state.isDataLoaded = false;
      })

      .addCase(fetchOfferAction.fulfilled, (state, action) => {
        state.offer = action.payload;
      })

      .addCase(fetchNearbyOffers.fulfilled, (state, action) => {
        state.nearbyOffers = action.payload;
      })

      .addCase(fetchReviews.fulfilled, (state, action) => {
        state.reviews = action.payload;
      })

      .addCase(sendReviewAction.pending, (state) => {
        state.isReviewFormDisabled = true;
      })
      .addCase(sendReviewAction.fulfilled, (state, action) => {
        state.isReviewFormDisabled = false;
        state.reviews = action.payload;
      })
      .addCase(sendReviewAction.rejected, (state) => {
        state.isReviewFormDisabled = false;
      });
  }
});


