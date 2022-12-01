import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import {Provider} from 'react-redux';
import {store} from './store';
import {reviews} from './mocks/reviews';
import {checkAuthAction, fetchOfferAction} from './store/api-actions';

store.dispatch(fetchOfferAction());
store.dispatch(checkAuthAction());

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);
const rootElement = document.getElementById('root') as HTMLElement;
rootElement.classList.add('page', 'page--gray', 'page--main');

root.render(
  <React.StrictMode>
    <Provider store = {store}>
      <App
        reviews={reviews}
      />
    </Provider>
  </React.StrictMode>,
);
