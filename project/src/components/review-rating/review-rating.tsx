import {Fragment} from 'react';

type ReviewRatingProps = {
  element: {
    title: string;
    value: string;
  };
}

function ReviewRating({element}: ReviewRatingProps): JSX.Element {
  return (
    <Fragment key={element.value}>
      <input
        className="form__rating-input visually-hidden"
        name="rating"
        value={element.value}
        id={`${element.value}-stars`}
        type="radio"
      />
      <label
        htmlFor={`${element.value}-stars`}
        className="reviews__rating-label form__rating-label"
        title={element.title}
      >
        <svg className="form__star-image" width="37" height="33">
          <use xlinkHref="#icon-star"></use>
        </svg>
      </label>
    </Fragment>
  );
}

export default ReviewRating;
