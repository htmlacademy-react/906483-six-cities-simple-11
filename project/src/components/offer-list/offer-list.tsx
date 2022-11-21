import {Offer, Offers} from '../../types/offer';
import OfferCard from '../offer-card/offer-card';

type OfferListProps = {
  offers: Offers;
  cssClass: string;
  onListItemHover?: (id: number | null) => void;
}

function OfferList(props: OfferListProps): JSX.Element {
  const {offers, cssClass, onListItemHover} = props;

  const setActiveOfferId = (id: number | null) => {
    if (onListItemHover) {
      onListItemHover(id);
    }
  };
  return(
    <div className={`${cssClass} places__list`}>
      {offers.map((offer: Offer) => (
        <OfferCard
          offer={offer}
          key={offer.id}
          onActiveSet={() => setActiveOfferId(offer.id)}
          onActiveRemove={() => onListItemHover?.(null)}
        />
      ))}
    </div>
  );
}

export default OfferList;
