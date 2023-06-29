import {Movie} from '../../types/types';
import Card from '../card/card';
import { useState } from 'react';

type CardListProps = {
  films: Movie[];
};

const CardList = ({films}: CardListProps): JSX.Element => {
// Переменная activeFilm понадобится позже
// eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [activeFilm, setActiveFilm] = useState<number | null>(null);

  const handleCardMouseEnter = (id: number) => {
    setActiveFilm(id);
  };

  const handleCardMouseLeave = () => {
    setActiveFilm(null);
  };
  return (
    <div className="catalog__films-list">
      {films.map((film) => (
        <Card
          key={film.id}
          {...film}
          onMouseEnter={handleCardMouseEnter}
          onMouseLeave={handleCardMouseLeave}
        />
      ))}
    </div>
  );
};
export default CardList;
