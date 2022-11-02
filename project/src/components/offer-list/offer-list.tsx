import {Offer, Offers} from '../../types/offer';
import OfferCard from '../offer-card/offer-card';

type OfferListProps = {
  offers: Offers;
}

function OfferList({offers}: OfferListProps): JSX.Element {
  return(
    <>
      {offers.map((offer: Offer) => <OfferCard offer={offer} key={offer.id}/>)}
    </>
  );
}

export default OfferList;
