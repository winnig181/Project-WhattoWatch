import { useAppSelector,useAppDispatch } from '../../hooks';
import {AppRoute} from '../../const';
import { Link } from 'react-router-dom';
import { getUserImg, getIsAuthorized } from '../../store/user-process/selectors';
import { logoutUser } from '../../store/action';

type HeaderProps = {
  page?:'film-card' | 'user-page';
};
const Header = ({page = 'film-card'}: HeaderProps) => {
  const userAvatar = useAppSelector(getUserImg);
  const dispatch = useAppDispatch();
  const isAuthorized = useAppSelector(getIsAuthorized);

  const handleLogoutClick = ()=>{
    if (isAuthorized){
      dispatch(logoutUser());
    }
  };

  return(
    <header className={`page-header ${page}__head`}>
      <div className="logo">
        <Link className="logo__link" to={AppRoute.Root} >
          <span className="logo__letter logo__letter--1">W</span>
          <span className="logo__letter logo__letter--2">T</span>
          <span className="logo__letter logo__letter--3">W</span>
        </Link>
      </div>
      {page === 'user-page' &&
      <h1 className="page-title user-page__title">My list</h1>}
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
  );
};
export default Header;
