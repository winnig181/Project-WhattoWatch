import {DictType} from '../../project/src/types/types';
// import { Movie, SortName } from './types/types';

export const STARS_COUNT = 10;
export const MAX_PERCENT_STARS_WIDTH = 100;
export const MAX_FILM_CARDS = 8;

export const GENRE_TITLES = ['All genres','Comedies','Crime','Adventure','Dramas','Horror','Action','Romance','Sci-Fi','Thrillers',] as const;

export const TAB_TITLES = [
  'Overview',
  'Details',
  'Reviews',
];

export enum ApiRoute {
  Films = '/films',
  Login = '/login',
  Logout = '/logout',
  Comments = '/comments',
  Promo = '/promo',
  Favorite = '/favorite',
}

export enum AppRoute {
  Root = '/',
  Login = '/login',
  Film = '/films',
  Mylist = '/mylist',
  Player = '/player',
  NotFound = '/404',
}

export enum StoreSlice {
  SiteData = 'SITE_DATA',
  SiteProcess = 'SITE_PROCESS',
  UserProcess = 'USER_PROCESS',
}

export enum HttpCode {
  NotFound = 404,
  NoAuth = 401
}

export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}

export enum Sorting {
  Popular = 'Popular',
  PriceIncrease = 'Price: low to high',
  PriceDecrease = 'Price: high to low',
  TopRated = 'Top rated first',
}

// export const Comparator: {
//   [key in SortName]: (a: Movie, b: Movie) => number;
// } = {
//   Popular: () => 0,
//   PriceIncrease: (a, b) => a.price - b.price,
//   PriceDecrease: (a, b) => b.price - a.price,
//   TopRated: (a, b) => b.rating - a.rating,
// };

// жанры моковых фильмов -> названия вкладок:
export const Dict:DictType = {
  'All genres': 'All genres',
  'Comedy': 'Comedies',
  'Crime': 'Crime',
  'Adventure': 'Adventure',
  'Drama':'Dramas',
  'Horror':'Horror',
  'Action': 'Action',
  'Romance': 'Romance',
  'Fantasy': 'Sci-Fi',
  'Thriller': 'Thrillers',
};
