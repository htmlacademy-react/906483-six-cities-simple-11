import cn from 'classnames';
import {useAppSelector} from '../../hooks';
import LocationList from '../../components/location-list/location-list';
import MainPageContent from '../../components/main-page-content/main-page-content';
import MainPageEmpty from '../../components/main-page-empty/main-page-empty';
import Header from '../../components/header/header';
import {getOffers} from '../../store/offer-data/selectors';

function MainScreen(): JSX.Element {
  const offers = useAppSelector(getOffers);
  return (
    <>
      <Header/>
      <main className={cn(
        'page__main',
        'page__main--index',
        {'page__main--index-empty': !offers.length}
      )}
      >
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <section className="locations container">
            <LocationList/>
          </section>
        </div>
        <div className="cities">
          {offers.length ? <MainPageContent/> : <MainPageEmpty/>}
        </div>
      </main>
    </>
  );
}

export default MainScreen;
