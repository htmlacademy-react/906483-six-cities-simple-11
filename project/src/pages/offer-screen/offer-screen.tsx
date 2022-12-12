import {useParams} from 'react-router-dom';
import {useEffect} from 'react';
import {useAppSelector} from '../../hooks';
import {calculateRating, getRandomOfferImages} from '../../utils';
import {store} from '../../store';
import {fetchNearbyOffers, fetchOfferAction, fetchReviews} from '../../store/api-actions';
import ReviewList from '../../components/review-list/review-list';
import ReviewForm from '../../components/review-form/review-form';
import Map from '../../components/map/map';
import OfferList from '../../components/offer-list/offer-list';
import LoadingScreen from '../loading-screen/loading-screen';
import Header from '../../components/header/header';
import {getUserData} from '../../store/user-process/selectors';
import {getNearbyOffers, getOffer, getSortedReviewsByDate} from '../../store/offer-data/selectors';

function OfferScreen(): JSX.Element {
  const {id} = useParams();
  const currentOfferId = String(id);

  useEffect(() => {
    store.dispatch(fetchOfferAction((currentOfferId)));
    store.dispatch(fetchNearbyOffers((currentOfferId)));
    store.dispatch(fetchReviews((currentOfferId)));
  }, [currentOfferId]);

  const isUserData = useAppSelector(getUserData);
  const offer = useAppSelector(getOffer);
  const nearOffers = useAppSelector(getNearbyOffers);
  const reviews = useAppSelector(getSortedReviewsByDate);
  if (!offer) {
    return <LoadingScreen />;
  }

  const {
    city,
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
      <Header />
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
                {isUserData && <ReviewForm offerId={currentOfferId}/>}
              </section>
            </div>
          </div>
          <Map
            city={city}
            offers={nearOffers}
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
