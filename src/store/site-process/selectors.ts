import { StoreSlice } from '../../const';
import type { State } from '../../types/state';
import type { Genre } from '../../types/types';

export const getGenre = ({ [StoreSlice.SiteProcess]: SITE_PROCESS }: State): Genre => SITE_PROCESS.genre;
