import {Offer} from '../../types/offer';
import {generatePath, Link} from 'react-router-dom';
import {calculateRating} from '../../utils';
import {AppRoute} from '../../const';

type OfferCardProps = {
  offer: Offer;
  onActiveSet?: () => void;
  onActiveRemove?: () => void;
};

function OfferCard(props: OfferCardProps): JSX.Element {
  const {offer, onActiveSet, onActiveRemove} = props;
  return (
    <article
      className="cities__card place-card"
      onMouseEnter={onActiveSet}
      onMouseLeave={onActiveRemove}
    >
      {offer.isPremium ? <div className="place-card__mark"><span>Premium</span></div> : null}
      <div className="cities__image-wrapper place-card__image-wrapper">
        <Link to={generatePath(`${AppRoute.Offer}`, {id: String(offer.id)})}>
          <img className="place-card__image" src={offer.previewImage} width="260" height="200" alt="Place image" />
        </Link>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{offer.price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>

        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{width: `${calculateRating(offer.rating)}%`}}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to={generatePath(`${AppRoute.Offer}`, {id: String(offer.id)})}>{offer.title}</Link>
        </h2>
        <p className="place-card__type">{offer.type}</p>
      </div>
    </article>
  );
}

export default OfferCard;
