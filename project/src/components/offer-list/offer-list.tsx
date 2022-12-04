import {Offer, Offers} from '../../types/offer';
import OfferCard from '../offer-card/offer-card';
import {getSortedOffers} from '../../utils';
import {useAppSelector} from '../../hooks';

type OfferListProps = {
  offers: Offers;
  cssClass: string;
  onListItemHover?: (id: number | null) => void;
}

function OfferList(props: OfferListProps): JSX.Element {
  const {offers, cssClass, onListItemHover} = props;
  const activeSortValue = useAppSelector((state) => state.activeSortValue);
  const copyOffers = offers.slice(0);
  const sortedOffers = getSortedOffers(copyOffers, activeSortValue);
  const setActiveOfferId = (id: number | null) => {
    if (onListItemHover) {onListItemHover(id);}
  };
  return(
    <div className={`${cssClass} places__list`}>
      {sortedOffers.map((offer: Offer) => (
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
