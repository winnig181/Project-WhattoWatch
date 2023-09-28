import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { useParams } from 'react-router-dom';
import { fetchFilm } from '../../store/action';
import { getFilm } from '../../store/site-data/selectors';
import NotFound from '../not-found/not-found';
import VideoPlayer from '../../components/player/player';

const Player = (): JSX.Element => {
  const params = useParams();
  const dispatch = useAppDispatch();
  const film = useAppSelector(getFilm);

  useEffect(() => {
    const { id } = params;
    if (id) {
      const parsedId = Number(id);
      dispatch(fetchFilm(parsedId));
    }
  }, [params, dispatch]);

  if (!film) {
    return <NotFound/>;
  }

  const { id, name, videoLink } = film;

  return <VideoPlayer id = {id} name = {name} videoLink = {videoLink} />;

};

export default Player;
