/* eslint-disable jsx-a11y/anchor-is-valid */
import {GENRE_TITLES as genreTitles} from '../../const' ;

type GenreNavProps = {
  activeGenre: string;
  onShowGenre:(evt: React.MouseEvent<HTMLAnchorElement> & EventTarget)=>void;
}

const GenreNav = ({onShowGenre,activeGenre}:GenreNavProps): JSX.Element => (
  <nav className="film-nav film-card__nav">
    <ul className="catalog__genres-list">
      {genreTitles.map((genreTitle) => (
        (activeGenre === genreTitle) ? (
          <li className="catalog__genres-item catalog__genres-item--active" key = {genreTitles.indexOf(genreTitle)}>
            <a href="#" className="catalog__genres-link" onClick={onShowGenre} >{genreTitle}</a>
          </li>) : (
          <li className="catalog__genres-item" key = {genreTitles.indexOf(genreTitle)}>
            <a href="#" className="catalog__genres-link" onClick={onShowGenre} >{genreTitle}</a>
          </li>)
      ))}
    </ul>
  </nav>
);

export default GenreNav;
