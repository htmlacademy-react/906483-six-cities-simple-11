import {useParams} from 'react-router-dom';
import {calculateRating, getFilteredOffers, getRandomOfferImages} from '../../utils';
import HeaderNav from '../../components/header-nav/header-nav';
import Logo from '../../components/logo/logo';
import ReviewList from '../../components/review-list/review-list';
import ReviewForm from '../../components/review-form/review-form';
import Map from '../../components/map/map';
import OfferList from '../../components/offer-list/offer-list';
import {Offer} from '../../types/offer';
import {Reviews} from '../../types/review';
import {City} from '../../types/city';
import {useAppSelector} from '../../hooks';

type OfferScreenProps = {
  reviews: Reviews;
}

function OfferScreen({reviews}: OfferScreenProps): JSX.Element {
  const {id} = useParams();
  const activeLocation = useAppSelector((state) => state.activeCity);
  const offers = useAppSelector((state) => state.offers);

  const filteredOffers = getFilteredOffers(offers, activeLocation);
  const city: City = filteredOffers[0].city;

  const nearOffers = filteredOffers.filter((item) => item.id !== Number(id));
  const offer = filteredOffers.find((item) => item.id === Number(id)) as Offer;
  const {
    title,
    rating,
    type,
    bedrooms,
    maxAdults,
    price,
    host,
    description,
    goods,
    images,
  } = offer;
  const goodItems = goods.map((item) => <li className="property__inside-item" key={item}>{item}</li>);
  const allowedOfferImages = getRandomOfferImages(images);
  const offerImages = allowedOfferImages.map((imageSrc) => (
    <div className="property__image-wrapper" key={imageSrc}>
      <img className="property__image" src={imageSrc} alt="Photo studio"/>
    </div>
  ));

  return (
    <>
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <Logo />
            </div>
            <HeaderNav />
          </div>
        </div>
      </header>
      <main className="page__main page__main--property">
        <section className="property">
          <div className="property__gallery-container container">
            <div className="property__gallery">
              {offerImages}
            </div>
          </div>
          <div className="property__container container">
            <div className="property__wrapper">
              <div className="property__mark">
                <span>Premium</span>
              </div>
              <div className="property__name-wrapper">
                <h1 className="property__name">
                  {title}
                </h1>
              </div>
              <div className="property__rating rating">
                <div className="property__stars rating__stars">
                  <span style={{width: `${calculateRating(rating)}%`}}></span>
                  <span className="visually-hidden">Rating</span>
                </div>
                <span className="property__rating-value rating__value">{rating}</span>
              </div>
              <ul className="property__features">
                <li className="property__feature property__feature--entire">
                  {type}
                </li>
                <li className="property__feature property__feature--bedrooms">
                  {bedrooms} Bedrooms
                </li>
                <li className="property__feature property__feature--adults">
                  Max {maxAdults} adults
                </li>
              </ul>
              <div className="property__price">
                <b className="property__price-value">&euro;{price}</b>
                <span className="property__price-text">&nbsp;night</span>
              </div>
              <div className="property__inside">
                <h2 className="property__inside-title">What&apos;s inside</h2>
                <ul className="property__inside-list">
                  {goodItems}
                </ul>
              </div>
              <div className="property__host">
                <h2 className="property__host-title">Meet the host</h2>
                <div className="property__host-user user">
                  <div className="property__avatar-wrapper property__avatar-wrapper--pro user__avatar-wrapper">
                    <img className="property__avatar user__avatar" src={host.avatarUrl} width="74" height="74" alt="Host avatar"/>
                  </div>
                  <span className="property__user-name">
                    {host.name}
                  </span>
                  <span className="property__user-status">
                    {host.isPro ? 'Pro' : null}
                  </span>
                </div>
                <div className="property__description">
                  <p className="property__text">
                    {description}
                  </p>
                </div>
              </div>
              <section className="property__reviews reviews">
                <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{reviews.length}</span></h2>
                <ReviewList reviews={reviews}/>
                <ReviewForm />
              </section>
            </div>
          </div>
          <Map
            city={city}
            offers={filteredOffers}
            selectedPoint={offer}
            cssClass={'property__map'}
          />
        </section>
        <div className="container">
          <section className="near-places places">
            <h2 className="near-places__title">Other places in the neighbourhood</h2>
            <OfferList
              offers={nearOffers}
              cssClass={'near-places__list'}
            />
          </section>
        </div>
      </main>
    </>
  );
}

export default OfferScreen;
