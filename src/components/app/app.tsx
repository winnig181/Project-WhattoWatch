import { BrowserRouter, Routes, Route } from 'react-router-dom';

import type { Movie } from '../../types/types';

import Main from '../../pages/main/main';
import Login from '../../pages/login/login';
import FilmPage from '../../pages/films/film-page';
import Favorites from '../../pages/my-list/my-list';
import Player from '../../pages/player/player';
import Review from '../../pages/review/review';
import NotFound from '../../pages/not-found/not-found';
import PrivateRoute from '../private-route/private-route';
// import { AppRoute } from '../../const';
import { AppRoute, AuthorizationStatus } from '../../const';

type AppProps = {
  films: Movie[];
}

const App = ({films}: AppProps): JSX.Element => (
  <BrowserRouter>
    <Routes>
      <Route index element = { <Main films = {films}/> } />
      <Route path = {AppRoute.Login} element = {<Login />} />
      <Route path = {AppRoute.Player} element = {<Player />} />
      <Route path = {`${AppRoute.Film}/:id`} element = {<FilmPage />} />
      <Route path = {`${AppRoute.Film}/:id/review`} element = {<Review />} />
      <Route path={AppRoute.Mylist}
        // element = {<Favorites films = {films}/>}
        element = {
          <PrivateRoute authorizationStatus = {AuthorizationStatus.NoAuth}>
            <Favorites films = {films}/>
          </PrivateRoute>
        }
      />
      <Route path = "*" element = {<NotFound />} />
    </Routes>
  </BrowserRouter>
);

export default App;
