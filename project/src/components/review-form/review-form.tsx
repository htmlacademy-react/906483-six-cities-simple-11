import ReviewRating from '../review-rating/review-rating';
import {ChangeEvent, FormEvent, useState} from 'react';
import {useAppDispatch, useAppSelector} from '../../hooks';
import {sendReviewAction} from '../../store/api-actions';
import {MIN_OFFER_SCORE, ReviewTextLength} from '../../const';
import './review-form.css';
import {getReviewFormDisabledStatus} from '../../store/offer-data/selectors';

const starValues = [
  {
    value: 5,
    title: 'perfect',
  },
  {
    value: 4,
    title: 'good',
  },
  {
    value: 3,
    title: 'not bad',
  },
  {
    value: 2,
    title: 'badly',
  },
  {
    value: 1,
    title: 'terribly',
  },
];

type ReviewFormProps = {
  offerId: string;
}

function ReviewForm({offerId}: ReviewFormProps): JSX.Element {
  const dispatch = useAppDispatch();
  const isFormDisabled = useAppSelector(getReviewFormDisabledStatus);
  const formDataDefault = {
    rating: '',
    review: '',
  };

  const [formData, setFormData] = useState(formDataDefault);
  const formFieldChangeHandle = (evt: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
    const {name, value} = evt.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const checkSubmitBtnDisabledStatus = (): boolean => (
    Number(formData.rating) < MIN_OFFER_SCORE ||
    formData.review.length < ReviewTextLength.Min
  );

  const formSubmitHandle = (event: FormEvent) => {
    event.preventDefault();
    dispatch(sendReviewAction({
      id: offerId,
      rating: Number(formData.rating),
      comment: formData.review
    }));
    setFormData({
      rating: '',
      review: '',
    });
  };
  return (
    <form className="reviews__form form" action="#" method="post" onSubmit={formSubmitHandle}>
      <fieldset className="reviews__fieldset" disabled={isFormDisabled}>
        <label className="reviews__label form__label" htmlFor="review">Your review</label>
        <div className="reviews__rating-form form__rating">
          {starValues.map((ratingElement) => (
            <ReviewRating
              element={ratingElement}
              rating={formData.rating}
              key={ratingElement.value}
              onRatingChange={formFieldChangeHandle}
            />
          ))}
        </div>
        <textarea
          className="reviews__textarea form__textarea"
          id="review"
          name="review"
          placeholder="Tell how was your stay, what you like and what can be improved"
          maxLength={ReviewTextLength.Max}
          minLength={ReviewTextLength.Min}
          value={formData.review}
          onChange={formFieldChangeHandle}
        >
        </textarea>
        <div className="reviews__button-wrapper">
          <p className="reviews__help">To submit review please make sure to set
            <span className="reviews__star">rating</span>
            and describe your stay with at least
            <b className="reviews__text-amount">{ReviewTextLength.Min} characters</b>.
          </p>
          <button
            className="reviews__submit form__submit button"
            type="submit"
            disabled={checkSubmitBtnDisabledStatus()}
          >Submit
          </button>
        </div>
      </fieldset>
    </form>
  );
}

export default ReviewForm;
