import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';

import App from './components/app/app';
import store from './store';
// import films from './mocks/films';
// import reviews from './mocks/reviews';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);

// root.render(
//   <React.StrictMode>
//     <App films={films} reviews = {reviews}/>
//   </React.StrictMode>,
// );
