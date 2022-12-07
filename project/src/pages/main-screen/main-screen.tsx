import HeaderNav from '../../components/header-nav/header-nav';
import LocationList from '../../components/location-list/location-list';
import {useAppSelector} from "../../hooks";
import MainPageContent from "../../components/main-page-content/main-page-content";
import MainPageEmpty from "../../components/main-page-empty/main-page-empty";

function MainScreen(): JSX.Element {
  const offers = useAppSelector((state) => state.offers);
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
