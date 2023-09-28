/* eslint-disable jsx-a11y/anchor-is-valid */
import type { GenreName } from '../../types/types';

type GenreProps = {
    name: GenreName;
    isActive: boolean;
    onClick: (name: GenreName) => void;
}

const Genre = ({ name, isActive, onClick }: GenreProps): JSX.Element => {
  const handleGenreClick = () => {
    onClick(name);
  };

  return (
    <li className={`catalog__genres-item${isActive ? ' catalog__genres-item--active' : ''}`} >
      <a href="#" className="catalog__genres-link" onClick={handleGenreClick} >{name}</a>
    </li>
  );
};

export default Genre;
