import HeaderNav from '../../components/header-nav/header-nav';
import {Offer} from '../../types/offer';
import OfferList from '../../components/offer-list/offer-list';
import Map from '../../components/map/map';
import {useState} from 'react';
import {City} from '../../types/city';
import LocationList from '../../components/location-list/location-list';
import {useAppSelector} from '../../hooks';
import SortOptions from '../../components/sort-options/sort-options';
import {getFilteredOffers} from '../../utils';

function MainScreen(): JSX.Element {
  const [selectedPoint, setSelectedPoint] = useState<Offer | undefined>(undefined);

  const activeLocation = useAppSelector((state) => state.activeCity);
  const offers = useAppSelector((state) => state.offers);
  const onListItemHover = (id: number | null) => {
    const currentPoint = offers.find((offer) => offer.id === id);
    setSelectedPoint(currentPoint);
  };
  const filteredOffers = getFilteredOffers(offers, activeLocation);
  const city: City = filteredOffers[0].city;
  return (
    <>
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <a className="header__logo-link header__logo-link--active">
                <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41" />
              </a>
            </div>
            <HeaderNav />
          </div>
        </div>
      </header>
      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <section className="locations container">
            <LocationList
              activeLocation={activeLocation}
            />
          </section>
        </div>
        <div className="cities">
          <div className="cities__places-container container">
            <section className="cities__places places">
              <h2 className="visually-hidden">Places</h2>
              <b className="places__found">{`${filteredOffers.length}`} places to stay in {`${activeLocation}`}</b>
              <SortOptions />
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
        </div>
      </main>
    </>
  );
}

export default MainScreen;
