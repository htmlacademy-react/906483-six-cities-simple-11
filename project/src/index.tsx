import React from 'react';
import ReactDOM from 'react-dom/client';
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {Provider} from 'react-redux';
import {checkAuthAction, fetchOffersAction} from './store/api-actions';
import App from './components/app/app';
import {store} from './store';

store.dispatch(fetchOffersAction());
store.dispatch(checkAuthAction());

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);
const rootElement = document.getElementById('root') as HTMLElement;
rootElement.classList.add('page', 'page--gray', 'page--main');

root.render(
  <React.StrictMode>
    <Provider store = {store}>
      <ToastContainer />
      <App/>
    </Provider>
  </React.StrictMode>,
);
