import {Offer, Offers} from '../../types/offer';
import OfferCard from '../offer-card/offer-card';
import {useState} from 'react';

type OfferListProps = {
  offers: Offers;
}

function OfferList({offers}: OfferListProps): JSX.Element {
  const results = useState<null | number>(null);
  const setActiveOfferId = results[1];
  return(
    <>
      {offers.map((offer: Offer) => (
        <OfferCard
          offer={offer}
          key={offer.id}
          onActiveSet={() => setActiveOfferId(offer.id)}
          onActiveRemove={() => setActiveOfferId(null)}
        />
      ))}
    </>
  );
}

export default OfferList;
