export const STARS_COUNT = 10;
export const MAX_PERCENT_STARS_WIDTH = 100;

export enum AppRoute {
  Root = '/',
  Login = '/login',
  Film = '/films',
  Mylist = '/mylist',
  Player = '/player',

}

export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}
