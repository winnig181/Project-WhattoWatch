import Card from '../../components/card/card';
import Header from '../../components/header/header';
import { useState, useRef } from 'react';
import Spinner from '../../components/spinner/spinner';
import { useAppSelector } from '../../hooks';
import { getFavoriteFilms, getIsFavoriteFilmsLoading } from '../../store/site-data/selectors';

const Favorites = (): JSX.Element => {
  const [activeFilm, setActiveFilm] = useState<number | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const timeoutRef = useRef<number>(0);
  const favoriteFilms = useAppSelector(getFavoriteFilms);
  const isFavoriteFilmsLoading = useAppSelector(getIsFavoriteFilmsLoading);

  const handleCardMouseEnter = (id: number) => {
    const timeoutId = window.setTimeout( () =>
    {setActiveFilm(id);
      setIsPlaying(!isPlaying);
    },1000 );
    timeoutRef.current = timeoutId;
  };

  const handleCardMouseLeave = (id:number) => {
    setActiveFilm(null);
    const timeoutId = timeoutRef.current;
    setIsPlaying(!isPlaying);
    clearTimeout(timeoutId);
  };

  if (isFavoriteFilmsLoading) {
    return <Spinner />;
  }

  return (
    <div className="user-page">
      <Header page = 'user-page'/>
      <section className="catalog">
        <h2 className="catalog__title visually-hidden">Catalog</h2>
        <div className="catalog__films-list">
          {favoriteFilms.map((film) => (
            <Card
              key={film.id}
              {...film}
              isPlaying={film.id === activeFilm}
              handleCardMouseEnter={()=>handleCardMouseEnter(film.id)}
              handleCardMouseLeave={()=>handleCardMouseLeave(film.id)}
            />
          ))}

        </div>
      </section>
      <footer className="page-footer">
        <div className="logo">
          <a href="main.html" className="logo__link logo__link--light">
            <span className="logo__letter logo__letter--1">W</span>
            <span className="logo__letter logo__letter--2">T</span>
            <span className="logo__letter logo__letter--3">W</span>
          </a>
        </div>
        <div className="copyright">
          <p>© 2019 What to watch Ltd.</p>
        </div>
      </footer>
    </div>
  );
};

export default Favorites;
