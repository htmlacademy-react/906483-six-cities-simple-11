import {Offer, Offers} from '../../types/offer';
import OfferCard from '../offer-card/offer-card';

type OfferListProps = {
  offers: Offers;
  onListItemHover: (id: number | null) => void;
}

function OfferList(props: OfferListProps): JSX.Element {
  const {offers, onListItemHover} = props;

  const setActiveOfferId = (id: number | null) => {
    onListItemHover(id);
  };
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
