import { unstable_HistoryRouter as HistoryRouter, Routes, Route } from 'react-router-dom';
import Main from '../../pages/main/main';
import Login from '../../pages/login/login';
import FilmPage from '../../pages/films/film-page';
import Favorites from '../../pages/my-list/my-list';
import Player from '../../pages/player/player';
import ReviewPage from '../../pages/review/review';
import NotFound from '../../pages/not-found/not-found';
import PrivateRoute from '../private-route/private-route';
import { AppRoute } from '../../const';
import history from '../../history';

const App = (): JSX.Element => (
  <HistoryRouter history={history}>
    <Routes>
      <Route path = {AppRoute.Root} element = { <Main /> } />
      <Route path = {AppRoute.Login} element = {<Login />} />
      <Route path = {`${AppRoute.Player}/:id`} element = {<Player />} />
      <Route path = {`${AppRoute.Film}/:id`} element = {<FilmPage />} />
      <Route path = {`${AppRoute.Film}/:id/review`} element = {<ReviewPage />} />
      <Route
        path={AppRoute.Mylist}
        element = {
          <PrivateRoute>
            <Favorites />
          </PrivateRoute>
        }
      />
      <Route path = "*" element = {<NotFound />} />
    </Routes>
  </HistoryRouter>
);

export default App;
