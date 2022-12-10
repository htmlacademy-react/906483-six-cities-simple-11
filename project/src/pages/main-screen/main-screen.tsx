import {useAppSelector} from '../../hooks';
import LocationList from '../../components/location-list/location-list';
import MainPageContent from '../../components/main-page-content/main-page-content';
import MainPageEmpty from '../../components/main-page-empty/main-page-empty';
import Header from '../../components/header/header';

function MainScreen(): JSX.Element {
  const offers = useAppSelector((state) => state.offers);
  return (
    <>
      <Header />
      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <section className="locations container">
            <LocationList />
          </section>
        </div>
        <div className="cities">
          {offers.length ? <MainPageContent /> : <MainPageEmpty />}
        </div>
      </main>
    </>
  );
}

export default MainScreen;
