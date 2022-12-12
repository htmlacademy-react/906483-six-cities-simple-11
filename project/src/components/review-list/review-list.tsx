import {Reviews} from '../../types/review';
import ReviewItem from '../review-item/review-item';

type ReviewListProps = {
  reviews: Reviews;
}

function ReviewList({reviews}: ReviewListProps): JSX.Element {
  return (
    <ul className="reviews__list">
      {reviews.map((item) =>
        <ReviewItem key={item.id} review={item} />
      )}
    </ul>
  );
}

export default ReviewList;
