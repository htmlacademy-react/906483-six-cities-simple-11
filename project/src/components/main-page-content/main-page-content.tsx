import {useState} from 'react';
import {Offer} from '../../types/offer';
import {City} from '../../types/city';
import SortOptions from '../sort-options/sort-options';
import OfferList from '../offer-list/offer-list';
import Map from '../map/map';
import {useAppSelector} from '../../hooks';
import {getActiveCity} from '../../store/app-process/selectors';
import {getSortedOffers} from '../../store/offer-data/selectors';

function MainPageContent(): JSX.Element {
  const offers = useAppSelector(getSortedOffers);
  const activeLocation = useAppSelector(getActiveCity);

  const [selectedPoint, setSelectedPoint] = useState<Offer | null>(null);

  const onListItemHover = (id: number | null) => {
    const currentPoint = offers.find((offer) => offer.id === id);
    setSelectedPoint(currentPoint ?? null);
  };
  const city: City = offers[0].city;
  return (
    <div className="cities__places-container container">
      <section className="cities__places places">
        <h2 className="visually-hidden">Places</h2>
        <b className="places__found">{`${offers.length}`} places to stay in {`${activeLocation}`}</b>
        <SortOptions/>
        <OfferList
          offers={offers}
          cssClass={'cities__places-list'}
          onListItemHover={onListItemHover}
        />
      </section>
      <div className="cities__right-section">
        <Map
          offers={offers}
          selectedPoint={selectedPoint}
          city={city}
          cssClass={'cities__map'}
        />
      </div>
    </div>
  );
}

export default MainPageContent;
