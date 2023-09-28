import { useParams, Link } from 'react-router-dom';
import { useEffect,useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { fetchFilm, fetchComments,fetchSimilarFilms, fetchUserStatus} from '../../store/action';
import Tabs from '../../components/tabs/tabs';
import TabsNav from '../../components/tabs-nav/tabs-nav';
import CardList from '../../components/card-list/card-list';
import Spinner from '../../components/spinner/spinner';
import MyListBtn from '../../components/mylist-btn/mylist-btn';
import { AuthorizationStatus, AppRoute } from '../../const';
import { getComments, getFilm, getIsFilmsLoading, getSimilarFilms } from '../../store/site-data/selectors';
import { getAuthorizationStatus, getUserImg } from '../../store/user-process/selectors';

const FilmPage = (): JSX.Element | null => {
  const params = useParams();
  const dispatch = useAppDispatch();
  const [activeTabTitle, setActiveTabTitle] = useState('Overview');
  const isFilmLoading = useAppSelector(getIsFilmsLoading);
  const film = useAppSelector(getFilm);
  const comments = useAppSelector(getComments);
  const similarFilms = useAppSelector(getSimilarFilms);
  const authorizationStatus = useAppSelector(getAuthorizationStatus);
  const userAvatar = useAppSelector(getUserImg);

  const onShowTab = (evt: React.MouseEvent<EventTarget>) => {
    evt.preventDefault();
    const target = evt.target as HTMLAnchorElement;
    if(target.innerText){
      setActiveTabTitle((target.innerText));
    }
  };

  useEffect(() => {
    const { id } = params;
    if (id) {
      const parsedId = Number(id);
      dispatch(fetchFilm(parsedId));
      dispatch(fetchComments(parsedId));
      dispatch(fetchSimilarFilms(parsedId));
      dispatch(fetchUserStatus);

    }
  }, [params, dispatch]);

  if (!film) {
    return null;
  }

  if (isFilmLoading) {
    return <Spinner />;
  }

  const { id, name, backgroundImage, genre, released, posterImage, isFavorite } = film;

  return(
    <>
      <div className="visually-hidden">
        {/* inject:svg */}
        <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
          <symbol id="add" viewBox="0 0 19 20">
            {/* Generator: Sketch 52.2 (67145) - http://www.bohemiancoding.com/sketch */}
            <title>+</title>
            <desc>Created with Sketch.</desc>
            <g id="Page-1" stroke="none" strokeWidth={1} fill="none" fillRule="evenodd">
              <polygon id="+" fill="#EEE5B5" points="10.777832 11.2880859 10.777832 19.5527344 8.41650391 19.5527344 8.41650391 11.2880859 0.627929688 11.2880859 0.627929688 8.92675781 8.41650391 8.92675781 8.41650391 0.662109375 10.777832 0.662109375 10.777832 8.92675781 18.5664062 8.92675781 18.5664062 11.2880859" />
            </g>
          </symbol>
          <symbol id="full-screen" viewBox="0 0 27 27">
            <path fillRule="evenodd" clipRule="evenodd" d="M23.8571 0H16V3.14286H23.8571V11H27V3.14286V0H23.8571Z" fill="#FFF9D9" fillOpacity="0.7" />
            <path fillRule="evenodd" clipRule="evenodd" d="M27 23.8571V16H23.8571V23.8571H16V27H23.8571H27L27 23.8571Z" fill="#FFF9D9" fillOpacity="0.7" />
            <path fillRule="evenodd" clipRule="evenodd" d="M0 3.14286L0 11H3.14286L3.14286 3.14286L11 3.14286V0H3.14286H0L0 3.14286Z" fill="#FFF9D9" fillOpacity="0.7" />
            <path fillRule="evenodd" clipRule="evenodd" d="M3.14286 27H11V23.8571H3.14286L3.14286 16H0L0 23.8571V27H3.14286Z" fill="#FFF9D9" fillOpacity="0.7" />
          </symbol>
          <symbol id="in-list" viewBox="0 0 18 14">
            <path fillRule="evenodd" clipRule="evenodd" d="M2.40513 5.35353L6.1818 8.90902L15.5807 0L18 2.80485L6.18935 14L0 8.17346L2.40513 5.35353Z" fill="#EEE5B5" />
          </symbol>
          <symbol id="pause" viewBox="0 0 14 21">
            <symbol id="play-s" viewBox="0 0 19 19">
              <path fillRule="evenodd" clipRule="evenodd" d="M0 0L19 9.5L0 19V0Z" fill="#EEE5B5" />
            </symbol>
            {/* Generator: Sketch 52.2 (67145) - http://www.bohemiancoding.com/sketch */}
            <title>Artboard</title>
            <desc>Created with Sketch.</desc>
            <g id="Artboard" stroke="none" strokeWidth={1} fill="none" fillRule="evenodd">
              <polygon id="Line" fill="#EEE5B5" fillRule="nonzero" points="0 -1.11910481e-13 4 -1.11910481e-13 4 21 0 21" />
              <polygon id="Line" fill="#EEE5B5" fillRule="nonzero" points="10 -1.11910481e-13 14 -1.11910481e-13 14 21 10 21" />
            </g>
          </symbol>
        </svg>
        {/* endinject */}
      </div>
      <div>
        <section className="film-card film-card--full">
          <div className="film-card__hero">
            <div className="film-card__bg">
              <img src={backgroundImage} alt={name} />
            </div>
            <h1 className="visually-hidden">WTW</h1>
            <header className="page-header film-card__head">
              <div className="logo">
                <Link className="logo__link" to={AppRoute.Root} >
                  <span className="logo__letter logo__letter--1">W</span>
                  <span className="logo__letter logo__letter--2">T</span>
                  <span className="logo__letter logo__letter--3">W</span>
                </Link>
              </div>
              <ul className="user-block">
                {authorizationStatus === AuthorizationStatus.Auth &&
                <li className="user-block__item">
                  <Link to={AppRoute.Mylist}>
                    <div className="user-block__avatar">
                      <img src={userAvatar} alt="User avatar" width={63} height={63} />
                    </div>
                  </Link>
                </li>}
                <li className="user-block__item">
                  <Link className="user-block__link" to={AppRoute.Login}> {authorizationStatus === AuthorizationStatus.Auth ? 'Sign out' : 'Sign in'} </Link>
                </li>
              </ul>
            </header>
            <div className="film-card__wrap">
              <div className="film-card__desc">
                <h2 className="film-card__title">{name}</h2>
                <p className="film-card__meta">
                  <span className="film-card__genre">{genre}</span>
                  <span className="film-card__year">{released}</span>
                </p>
                <div className="film-card__buttons">
                  <Link to={`${AppRoute.Player}/${id}`}>
                    <button className="btn btn--play film-card__button" type="button">
                      <svg viewBox="0 0 19 19" width={19} height={19}>
                        <use xlinkHref="#play-s" />
                      </svg>
                      <span>Play</span>
                    </button>
                  </Link>
                  {authorizationStatus === AuthorizationStatus.Auth &&
                      <MyListBtn id={id} isActive={isFavorite} />}
                  {authorizationStatus === AuthorizationStatus.Auth && (
                    <Link to = {`${AppRoute.Film}/${id}/review`} className="btn film-card__button">Add review</Link>)}
                </div>
              </div>
            </div>
          </div>
          <div className="film-card__wrap film-card__translate-top">
            <div className="film-card__info">
              <div className="film-card__poster film-card__poster--big">
                <img src={posterImage} alt={name} width={218} height={327} />
              </div>
              <div className="film-card__desc">
                <TabsNav onShowTab = {onShowTab} activeTabTitle = {activeTabTitle}/>
                <Tabs film = {film} reviews = {comments} activeTabTitle = {activeTabTitle}/>
              </div>
            </div>
          </div>
        </section>
        <div className="page-content">
          <section className="catalog catalog--like-this">
            <h2 className="catalog__title">More like this</h2>
            <CardList list = 'alike' films = {similarFilms.slice(0,4)}/>
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
      </div>
    </>
  );};

export default FilmPage;
