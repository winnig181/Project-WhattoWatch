import type { AxiosInstance, AxiosError } from 'axios';
import type { History } from 'history';
import { createAction, createAsyncThunk } from '@reduxjs/toolkit';
import type { Movie, GenreName, User, UserAuth, Comment, CommentAuth, FavoriteAuth } from '../types/types';
import {ApiRoute, AppRoute, HttpCode} from '../const';
import { Token } from '../utils';

type Extra = {
  api: AxiosInstance;
  history: History;
};

export const Action = {
  SET_GENRE: 'genre/set',
  FETCH_FILMS:'films/fetch',
  FETCH_FAVORITE_FILMS: 'films/fetch-favorite',
  FETCH_USER_STATUS: 'user/fetch-status',
  LOGIN_USER: 'user/login',
  LOGOUT_USER: 'user/logout',
  FETCH_FILM:'film/fetch',
  FETCH_PROMO:'promo/fetch',
  FETCH_COMMENTS: 'film/fetch-comments',
  FETCH_SIMILAR_FILMS: 'films/fetch-similar-films',
  POST_COMMENT: 'film/post-comment',
  POST_FAVORITE: 'film/post-favorite',
};

export const setGenre = createAction<GenreName>(Action.SET_GENRE);

export const fetchFilms = createAsyncThunk<Movie[], undefined, { extra: Extra }>(
  Action.FETCH_FILMS,
  async(_, { extra }) => {
    const { api } = extra;
    const {data} = await api.get<Movie[]>(ApiRoute.Films);

    return data;
  });

export const fetchFavoriteFilms = createAsyncThunk<Movie[], undefined, { extra: Extra }>(
  Action.FETCH_FAVORITE_FILMS,
  async (_, { extra }) => {
    const { api } = extra;
    const { data } = await api.get<Movie[]>(ApiRoute.Favorite);

    return data;
  });

export const fetchFilm = createAsyncThunk<Movie, Movie['id'], { extra: Extra }>(
  Action.FETCH_FILM,
  async (id, { extra }) => {
    const { api, history } = extra;

    try {
      const { data } = await api.get<Movie>(`${ApiRoute.Films}/${id}`);

      return data;
    } catch (error) {
      const axiosError = error as AxiosError;

      if (axiosError.response?.status === HttpCode.NotFound) {
        history.push(AppRoute.NotFound);
      }

      return Promise.reject(error);
    }
  });

export const fetchPromoFilm = createAsyncThunk<Movie, undefined, { extra: Extra }>(
  Action.FETCH_PROMO,
  async (_, { extra }) => {
    const { api } = extra;
    const { data } = await api.get<Movie>(`${ApiRoute.Promo}`);

    return data;
  });

export const fetchSimilarFilms = createAsyncThunk<Movie[], Movie['id'], { extra: Extra }>(
  Action.FETCH_SIMILAR_FILMS,
  async (id, { extra }) => {
    const { api } = extra;
    const { data } = await api.get<Movie[]>(`${ApiRoute.Films}/${id}/similar`);

    return data;
  });

export const fetchComments = createAsyncThunk<Comment[], Movie['id'], { extra: Extra }>(
  Action.FETCH_COMMENTS,
  async (id, { extra }) => {
    const { api } = extra;
    const { data } = await api.get<Comment[]>(`${ApiRoute.Comments}/${id}`);

    return data;
  });

export const fetchUserStatus = createAsyncThunk<User, undefined, { extra: Extra }>(
  Action.FETCH_USER_STATUS,
  async (_, {extra}) => {
    const { api } = extra;
    const {data} = await api.get<User>(ApiRoute.Login);
    return data;
  });

export const loginUser = createAsyncThunk<UserAuth['email'], UserAuth, { extra: Extra }>(
  Action.LOGIN_USER,
  async( { email, password }, { extra }) => {
    const { api, history } = extra;
    const { data } = await api.post <User> (ApiRoute.Login, { email, password});
    const { token } = data;

    Token.save(token);
    history.back();
    // window.history.back();

    return email;
  });

export const logoutUser = createAsyncThunk<void, undefined, { extra: Extra }>(
  Action.LOGOUT_USER,
  async( _, { extra }) => {
    const { api } = extra;
    await api.delete (ApiRoute.Logout);

    Token.drop();
  });

export const postComment = createAsyncThunk<Comment[], CommentAuth, { extra: Extra }>(
  Action.POST_COMMENT,
  async ({ id, comment, rating }, { extra }) => {
    const { api } = extra;
    const { data } = await api.post<Comment[]>(`${ApiRoute.Comments}/${id}`, { comment, rating });

    return data;
  });

export const postFavorite = createAsyncThunk<Movie, FavoriteAuth, { extra: Extra }>(
  Action.POST_FAVORITE,
  async ({ id, status }, { extra }) => {
    const { api, history } = extra;

    try {
      const { data } = await api.post<Movie>(`${ApiRoute.Favorite}/${id}/${status}`);

      return data;
    } catch (error) {
      const axiosError = error as AxiosError;

      if (axiosError.response?.status === HttpCode.NoAuth) {
        history.push(AppRoute.Login);
      }

      return Promise.reject(error);
    }
  });

