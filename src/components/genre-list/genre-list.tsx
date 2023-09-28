import type { GenreName } from '../../types/types';
import { useCallback } from 'react';

import { useAppDispatch, useAppSelector } from '../../hooks';
import { setGenre } from '../../store/site-process/site-process';
import Genre from '../genre/genre';
import { GENRE_TITLES as genreTitles } from '../../const';
import { getGenre } from '../../store/site-process/selectors';

const GenreList = (): JSX.Element => {
  const dispatch = useAppDispatch();

  const activeGenre = useAppSelector(getGenre);

  const handleGenreClick = useCallback((name: GenreName) => {
    dispatch(setGenre(name));
  }, [dispatch]);

  return (
    <nav className="film-nav film-card__nav">
      <ul className="catalog__genres-list">
        {genreTitles.map((genre) => (
          <Genre key={genre} name = {genre} onClick={handleGenreClick} isActive={genre === activeGenre} />
        ))}
      </ul>
    </nav>
  );
};

export default GenreList;
