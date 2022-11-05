import ReviewRating from '../review-rating/review-rating';

function ReviewForm(): JSX.Element {
  const starValues = [
    {
      value: '5',
      title: 'perfect',
    },
    {
      value: '4',
      title: 'good',
    },
    {
      value: '3',
      title: 'not bad',
    },
    {
      value: '2',
      title: 'badly',
    },
    {
      value: '1',
      title: 'terribly',
    },
  ];
  return (
    <form className="reviews__form form" action="#" method="post">
      <label className="reviews__label form__label" htmlFor="review">Your review</label>
      <div className="reviews__rating-form form__rating">
        {starValues.map((ratingElement) => <ReviewRating element={ratingElement} key={ratingElement.value} />)}
      </div>
      <textarea className="reviews__textarea form__textarea" id="review" name="review"
        placeholder="Tell how was your stay, what you like and what can be improved"
      >
      </textarea>
      <div className="reviews__button-wrapper">
        <p className="reviews__help">To submit review please make sure to set
          <span className="reviews__star">rating</span>
          and describe your stay with at least
          <b className="reviews__text-amount">50 characters</b>.
        </p>
        <button className="reviews__submit form__submit button" type="submit" disabled>Submit</button>
      </div>
    </form>
  );
}

export default ReviewForm;
