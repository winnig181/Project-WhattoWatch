import GenreList from '../../components/genre-list/genre-list';
import CardList from '../../components/card-list/card-list';
import { useAppSelector } from '../../hooks';
import { getFilms} from '../../store/site-data/selectors';
import Promo from '../../components/promo/promo';

const Main = (): JSX.Element | null => {
  const films = useAppSelector(getFilms);

  return (
    <div>
      <Promo />
      <div className="page-content">
        <section className="catalog">
          <h2 className="catalog__title visually-hidden">Catalog</h2>
          <GenreList />
          <CardList films = {films} />
        </section>
        <footer className="page-footer">
          <div className="logo">
            <a className="logo__link logo__link--light">
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
    </div>
  );};
export default Main;
