import {MAX_OFFER_IMAGES_AMOUNT, MAX_RATING_VALUE, ONE_HUNDRED_PERCENT} from './const';

const getRandomInteger = (min: number, max: number) => {
  const rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
};

export const calculateRating = (rating: number): number => {
  const roundRating = Math.round(rating);
  return roundRating / MAX_RATING_VALUE * ONE_HUNDRED_PERCENT;
};

export const getRandomOfferImages = (images: string[]): string[] => {
  const imagesCopy = images.slice(0);
  if (imagesCopy.length >= MAX_OFFER_IMAGES_AMOUNT) {
    const selectedImages: string[] = [];
    for (let i = 0; i < MAX_OFFER_IMAGES_AMOUNT; i++) {
      const randomInteger = getRandomInteger(0, imagesCopy.length - 1);
      selectedImages.push(imagesCopy[randomInteger]);
      imagesCopy.splice(randomInteger, 1);
    }
    return selectedImages;
  }
  return images;
};

export const getMonthName = (date: string) => {
  const dateValue = new Date(date);
  return dateValue.toLocaleString('en-us', {month: 'long'});
};

export const getFullYear = (date: string) => {
  const dateValue = new Date(date);
  return dateValue.getFullYear();
};
