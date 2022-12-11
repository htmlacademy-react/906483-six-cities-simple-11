import {Reviews} from '../../types/review';
import ReviewItem from '../review-item/review-item';
import {getSortedReviewsByDate} from '../../utils';

type ReviewListProps = {
  reviews: Reviews;
}

function ReviewList({reviews}: ReviewListProps): JSX.Element {
  reviews = getSortedReviewsByDate(reviews);
  return (
    <ul className="reviews__list">
      {reviews.map((item) =>
        <ReviewItem key={item.id} review={item} />
      )}
    </ul>
  );
}

export default ReviewList;
