import { createSlice } from '@reduxjs/toolkit';

import type { SiteData } from '../../types/state';
import { StoreSlice } from '../../const';
import { fetchFilms, fetchFilm, fetchSimilarFilms, fetchFavoriteFilms, fetchPromoFilm, fetchComments, postComment, postFavorite } from '../action';

const initialState: SiteData = {
  films: [],
  similarFilms: [],
  isFilmsLoading: false,
  favoriteFilms: [],
  isFavoriteFilmsLoading: false,
  film: null,
  isFilmLoading: false,
  promoFilm: null,
  isPromoLoading: false,
  comments: [],
};

export const siteData = createSlice({
  name: StoreSlice.SiteData,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchFilms.pending, (state) => {
        state.isFilmsLoading = true;
      })
      .addCase(fetchFilms.fulfilled, (state, action) => {
        state.films = action.payload;
        state.isFilmsLoading = false;
      })
      .addCase(fetchFavoriteFilms.pending, (state) => {
        state.isFavoriteFilmsLoading = true;
      })
      .addCase(fetchFavoriteFilms.fulfilled, (state, action) => {
        state.favoriteFilms = action.payload;
        state.isFavoriteFilmsLoading = false;
      })
      .addCase(fetchFavoriteFilms.rejected, (state) => {
        state.isFavoriteFilmsLoading = false;
      })
      .addCase(fetchFilm.pending, (state) => {
        state.isFilmLoading = true;
      })
      .addCase(fetchFilm.fulfilled, (state, action) => {
        state.film = action.payload;
        state.isFilmLoading = false;
      })
      .addCase(fetchFilm.rejected, (state) => {
        state.isFilmLoading = false;
      })
      .addCase(fetchPromoFilm.pending, (state) => {
        state.isPromoLoading = true;
      })
      .addCase(fetchPromoFilm.fulfilled, (state, action) => {
        state.promoFilm = action.payload;
        state.isPromoLoading = false;
      })
      .addCase(fetchSimilarFilms.fulfilled, (state, action) => {
        state.similarFilms = action.payload;
      })
      .addCase(fetchComments.fulfilled, (state, action) => {
        state.comments = action.payload;
      })
      .addCase(postComment.fulfilled, (state, action) => {
        state.comments = action.payload;
      })
      .addCase(postFavorite.fulfilled, (state, action) => {
        const updatedFilm = action.payload;
        state.films = state.films.map((film) => film.id === updatedFilm.id ? updatedFilm : film);

        if (state.film && state.film.id === updatedFilm.id) {
          state.film = updatedFilm;
        }

        if (updatedFilm.isFavorite) {
          state.favoriteFilms = state.favoriteFilms.concat(updatedFilm);
        } else {
          state.favoriteFilms = state.favoriteFilms.filter((favoriteFilm) => favoriteFilm.id !== updatedFilm.id);
        }
      });
  }
});
