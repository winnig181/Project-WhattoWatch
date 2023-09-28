import Form from '../../components/review-form/review-form';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { postComment } from '../../store/action';
import { getFilm } from '../../store/site-data/selectors';
import { CommentAuth } from '../../types/types';
import { AppRoute } from '../../const';
import { Link } from 'react-router-dom';
import { getUserImg, getIsAuthorized } from '../../store/user-process/selectors';
import { logoutUser } from '../../store/action';

const ReviewPage = (): JSX.Element | null => {
  const dispatch = useAppDispatch();
  const film = useAppSelector(getFilm);
  const userAvatar = useAppSelector(getUserImg);
  const isAuthorized = useAppSelector(getIsAuthorized);

  if (!film) {
    return null;
  }
  const { id, name, backgroundImage, posterImage } = film;

  const onFormSubmit = (formData: Omit<CommentAuth, 'id'>) => {
    dispatch(postComment({ id, ...formData }));
  };

  const handleLogoutClick = ()=>{
    if (isAuthorized){
      dispatch(logoutUser());
    }
  };

  return (
    <section className="film-card film-card--full">
      <div className="film-card__header">
        <div className="film-card__bg">
          <img src={backgroundImage} alt={name} />
        </div>
        <h1 className="visually-hidden">WTW</h1>
        <header className="page-header">
          <div className="logo">
            <Link className="logo__link" to={AppRoute.Root} >
              <span className="logo__letter logo__letter--1">W</span>
              <span className="logo__letter logo__letter--2">T</span>
              <span className="logo__letter logo__letter--3">W</span>
            </Link>
          </div>
          <nav className="breadcrumbs">
            <ul className="breadcrumbs__list">
              <li className="breadcrumbs__item">
                <Link to={`${AppRoute.Film}/${id}`} className="breadcrumbs__link">{name}</Link>
                {/* <a href="film-page.html" className="breadcrumbs__link">{name}</a> */}
              </li>
              <li className="breadcrumbs__item">
                <a className="breadcrumbs__link">Add review</a>
              </li>
            </ul>
          </nav>
          <ul className="user-block">
            {isAuthorized && (
              <li className="user-block__item">
                <Link to={AppRoute.Mylist}>
                  <div className="user-block__avatar">
                    <img src={userAvatar} alt="User avatar" width={63} height={63} />
                  </div>
                </Link>
              </li>)}
            <li className="user-block__item">
              <Link className="user-block__link" to={isAuthorized ? AppRoute.Root : AppRoute.Login} onClick={handleLogoutClick}> {isAuthorized ? 'Sign out' : 'Sign in'}</Link>
            </li>
          </ul>
        </header>
        <div className="film-card__poster film-card__poster--small">
          <img src={posterImage} alt={name} width={218} height={327} />
        </div>
      </div>
      <div className="add-review">
        <Form onSubmit={onFormSubmit} />
      </div>
    </section>
  );};

export default ReviewPage;
