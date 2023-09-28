import { memo, useEffect} from 'react';
import { Link } from 'react-router-dom';
import {useAppSelector, useAppDispatch} from '../../hooks';
import {fetchPromoFilm} from '../../store/action';
import { getAuthorizationStatus } from '../../store/user-process/selectors';
import { getPromoFilm,getFilms} from '../../store/site-data/selectors';
import MyListBtn from '../../components/mylist-btn/mylist-btn';
import Header from '../../components/header/header';
import {AppRoute,AuthorizationStatus} from '../../const';
import Spinner from '../spinner/spinner';

const Promo = () => {
  const dispatch = useAppDispatch();
  const authorizationStatus = useAppSelector(getAuthorizationStatus);
  const promo = useAppSelector(getPromoFilm);
  const films = useAppSelector(getFilms);

  useEffect(()=> () => {
    dispatch(fetchPromoFilm( ));
  }, [films, dispatch]);

  if(!promo){
    return <Spinner/>;
  }

  return (
    <section className="film-card">
      <div className="film-card__bg">
        <img src={promo.backgroundImage} alt={promo.name} />
      </div>
      <h1 className="visually-hidden">WTW</h1>
      <Header />
      <div className="film-card__wrap">
        <div className="film-card__info">
          <div className="film-card__poster">
            <img src={promo?.posterImage} alt={promo.name} width={218} height={327} />
          </div>
          <div className="film-card__desc">
            <h2 className="film-card__title">{promo.name}</h2>
            <p className="film-card__meta">
              <span className="film-card__genre">{promo.genre}</span>
              <span className="film-card__year">{promo.released}</span>
            </p>
            <div className="film-card__buttons">
              <Link to={`${AppRoute.Player}/${promo.id}`}>
                <button className="btn btn--play film-card__button" type="button">
                  <svg viewBox="0 0 19 19" width={19} height={19}>
                    <use xlinkHref="#play-s" />
                  </svg>
                  <span>Play</span>
                </button>
              </Link>
              {authorizationStatus === AuthorizationStatus.Auth && (
                <MyListBtn id={promo.id} isActive={promo.isFavorite} />
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default memo(Promo);
