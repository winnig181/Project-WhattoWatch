import store from '../store';

import type { Movie, Comment, Genre, User } from './types';
import { AuthorizationStatus } from '../const';

export type SiteData = {
  films: Movie[];
  similarFilms: Movie[];
  isFilmsLoading: boolean;
  favoriteFilms: Movie[];
  isFavoriteFilmsLoading: boolean;
  film: Movie | null;
  promoFilm: Movie | null;
  isPromoLoading: boolean;
  isFilmLoading: boolean;
  comments: Comment[];
};

export type SiteProcess = {
  genre: Genre;
  // sorting: SortName;
}

export type UserProcess = {
    authorizationStatus: AuthorizationStatus;
    user: User['email'];
    userImg: User ['avatarUrl'];
}

export type State = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
