import Card from '../card/card';
import { useState, useRef, useEffect } from 'react';
import { useCallback } from 'react';
import {MAX_FILM_CARDS } from '../../const';
import {Movie} from '../../types/types';
import ShowMore from '../../components/show-more/show-more';
import { useAppSelector } from '../../hooks';
import Spinner from '../spinner/spinner';
import { getGenre } from '../../store/site-process/selectors';
import { getIsFilmsLoading, selectFilms } from '../../store/site-data/selectors';

type CardListProps = {
  films: Movie[];
  list?:'main' | 'alike';
};
const CardList = ({list = 'main', films}: CardListProps): JSX.Element => {
  const [activeFilm, setActiveFilm] = useState<number | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [filmsShown, setFilmsShown] = useState(MAX_FILM_CARDS);
  const timeoutRef = useRef<number>(0);
  const activeGenre = useAppSelector(getGenre);
  const isFilmsLoading = useAppSelector(getIsFilmsLoading);
  const filmsGenred = useAppSelector(selectFilms);

  let filmsListed;
  if (list === 'alike'){
    filmsListed = films;
  } else if (activeGenre === 'All genres'){
    filmsListed = films;
  } else {
    filmsListed = filmsGenred;
  }
  const filmsListedShown = filmsListed.slice(0,filmsShown);

  useEffect(()=> () => {
    setFilmsShown(MAX_FILM_CARDS);
  }, [activeGenre]);

  const handleCardMouseEnter = useCallback((id:number) => {
    const timeoutId = window.setTimeout( () =>
    {setActiveFilm(id);
      setIsPlaying(!isPlaying);
    },1000 );
    timeoutRef.current = timeoutId;
  },[]);
  const handleCardMouseLeave = useCallback((id:number) => {
    setActiveFilm(null);
    const timeoutId = timeoutRef.current;
    setIsPlaying(!isPlaying);
    clearTimeout(timeoutId);
  },[]);
  const handleOnShowMore = () => {
    setFilmsShown(filmsShown + MAX_FILM_CARDS);
  };

  if (isFilmsLoading) {
    return <Spinner />;
  }

  return (
    <>
      <div className="catalog__films-list">
        {filmsListedShown?.map((film) => (
          <Card key={film.id}
            {...film}
            isPlaying={film.id === activeFilm}
            handleCardMouseEnter={()=>handleCardMouseEnter(film.id)}
            handleCardMouseLeave={()=>handleCardMouseLeave(film.id)}
          />
        ))}
      </div>
      {filmsShown < filmsListed.length && <ShowMore onShowMore = {handleOnShowMore}/>}
    </>
  );
};
export default CardList;
