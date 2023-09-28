import { createSelector } from '@reduxjs/toolkit';
import type { State } from '../../types/state';
import type { Movie, Comment } from '../../types/types';
import { StoreSlice, Dict } from '../../const';
import { getGenre } from '../site-process/selectors';


export const getIsFilmsLoading = ({ [StoreSlice.SiteData]: SITE_DATA }: State): boolean => SITE_DATA.isFilmsLoading;
export const getFilms = ({ [StoreSlice.SiteData]: SITE_DATA}: State): Movie[] => SITE_DATA.films;

export const getIsFilmLoading = ({ [StoreSlice.SiteData]: SITE_DATA }: State): boolean => SITE_DATA.isFilmLoading;
export const getFilm = ({ [StoreSlice.SiteData]: SITE_DATA }: State): Movie | null => SITE_DATA.film;

export const getIsFavoriteFilmsLoading = ({ [StoreSlice.SiteData]: SITE_DATA }: State): boolean => SITE_DATA.isFavoriteFilmsLoading;
export const getFavoriteFilms = ({ [StoreSlice.SiteData]: SITE_DATA }: State): Movie[] => SITE_DATA.favoriteFilms;

export const getIsPromoLoading = ({ [StoreSlice.SiteData]: SITE_DATA }: State): boolean => SITE_DATA.isPromoLoading;
export const getPromoFilm = ({ [StoreSlice.SiteData]: SITE_DATA }: State): Movie | null => SITE_DATA.promoFilm;

export const getSimilarFilms = ({ [StoreSlice.SiteData]: SITE_DATA }: State): Movie[] => SITE_DATA.similarFilms;

export const getComments = ({ [StoreSlice.SiteData]: SITE_DATA }: State): Comment[] => SITE_DATA.comments;

export const selectFilms = createSelector(
  [getFilms, getGenre],
  (films, genre) => films.filter((film) => Dict[film.genre] === genre)
);

