import {useState} from 'react';
import {Offer} from '../../types/offer';
import {City} from '../../types/city';
import SortOptions from '../sort-options/sort-options';
import OfferList from '../offer-list/offer-list';
import Map from '../map/map';
import {getFilteredOffers} from '../../utils';
import {useAppSelector} from '../../hooks';

function MainPageContent(): JSX.Element {
  const offers = useAppSelector((state) => state.offers);
  const activeLocation = useAppSelector((state) => state.activeCity);

  const [selectedPoint, setSelectedPoint] = useState<Offer | undefined>(undefined);

  const onListItemHover = (id: number | null) => {
    const currentPoint = offers.find((offer) => offer.id === id);
    setSelectedPoint(currentPoint);
  };
  const filteredOffers = getFilteredOffers(offers, activeLocation);
  const city: City = filteredOffers[0].city;
  return (
    <div className="cities__places-container container">
      <section className="cities__places places">
        <h2 className="visually-hidden">Places</h2>
        <b className="places__found">{`${filteredOffers.length}`} places to stay in {`${activeLocation}`}</b>
        <SortOptions/>
        <OfferList
          offers={filteredOffers}
          cssClass={'cities__places-list'}
          onListItemHover={onListItemHover}
        />
      </section>
      <div className="cities__right-section">
        <Map
          offers={filteredOffers}
          selectedPoint={selectedPoint}
          city={city}
          cssClass={'cities__map'}
        />
      </div>
    </div>
  );
}

export default MainPageContent;
