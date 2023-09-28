import { GENRE_TITLES, Sorting } from '../const';

export type SortName = keyof typeof Sorting;

export type GenreName = typeof GENRE_TITLES[number];
// export type Genre = {
//   name: GenreName;
// };
export type Genre = string;
export type Movie = {
  id: number;
  name: string;
  posterImage: string;
  previewImage: string;
  backgroundImage: string;
  backgroundColor: string;
  videoLink: string;
  previewVideoLink: string;
  description: string;
  rating: number;
  scoresCount: number;
  director: string;
  starring: [string];
  runTime: number;
  genre: string;
  released: number;
  isFavorite: boolean;
};

export type DictType = {
  [index:string]: string;
};

export type User = {
  id: number;
  name: string;
  avatarUrl: string;
  email: string;
  token: string;
};

export type UserAuth = Pick<User, 'email'> & { password: string };
export type CommentAuth = Pick<Comment, 'comment' | 'rating'> & Pick<Movie, 'id'>;
export type FavoriteAuth = Pick<Movie, 'id'> & { status: 1 | 0 }

export type Comment = {
    id: number;
    comment: string;
    date: string;
    rating: number;
    user: {
      id: number;
      name: string;
      };
};
// user: User

