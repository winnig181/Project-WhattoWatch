import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import type { SiteProcess } from '../../types/state';
import type {GenreName } from '../../types/types';
import { GENRE_TITLES, StoreSlice } from '../../const';

const initialState: SiteProcess = {
  genre: GENRE_TITLES[0],
};

export const siteProcess = createSlice({
  name: StoreSlice.SiteProcess,
  initialState,
  reducers: {
    setGenre: (state, action: PayloadAction<GenreName>) => {
      state.genre = action.payload;
    }
  },
});

export const { setGenre } = siteProcess.actions;
