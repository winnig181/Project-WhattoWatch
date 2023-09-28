import { configureStore } from '@reduxjs/toolkit';
import { createAPI } from '../api';
import { rootReducer } from './root-reducer';
import { fetchFilms,fetchUserStatus } from './action';
import history from '../history';

const api = createAPI();
const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware ({
    thunk: {
      extraArgument: {
        api,
        history,
      },
    },
  }),
});

store.dispatch(fetchFilms());
store.dispatch(fetchUserStatus());

export default store;
