import {Review} from '../../types/review';
import {calculateRating, getFullYear, getMonthName} from '../../utils';

type ReviewProps = {
  review: Review;
}

function ReviewItem(props: ReviewProps): JSX.Element {
  const {user, rating, date, comment} = props.review;
  return (
    <li className="reviews__item">
      <div className="reviews__user user">
        <div className="reviews__avatar-wrapper user__avatar-wrapper">
          <img className="reviews__avatar user__avatar" src={user.avatarUrl} width="54" height="54" alt="Reviews avatar"/>
        </div>
        <span className="reviews__user-name">{user.name}</span>
      </div>
      <div className="reviews__info">
        <div className="reviews__rating rating">
          <div className="reviews__stars rating__stars">
            <span style={{width: `${calculateRating(rating)}%`}}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <p className="reviews__text">
          {comment}
        </p>
        <time className="reviews__time" dateTime={date}>{`${getMonthName(date)} ${getFullYear(date)}`}</time>
      </div>
    </li>
  );
}

export default ReviewItem;
