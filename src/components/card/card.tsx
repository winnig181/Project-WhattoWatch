import type { Movie } from '../../types/types';
import VideoPreviewPlayer from '../video-preview/video-preview';
import { AppRoute } from '../../const';
import {memo} from 'react';
import { Link } from 'react-router-dom';

type CardProps = Movie & {
  isPlaying: boolean;
  handleCardMouseEnter: () => void;
  handleCardMouseLeave: () => void;
};

const Card = ({id,previewVideoLink, name, posterImage,isPlaying, handleCardMouseLeave,handleCardMouseEnter,
}: CardProps): JSX.Element =>
  (
    <article
      className="small-film-card catalog__films-card"
      onMouseEnter={handleCardMouseEnter}
      onMouseLeave={handleCardMouseLeave}
    >
      <VideoPreviewPlayer
        isPlaying={isPlaying}
        src = {previewVideoLink}
        id = {id}
        name = {name}
        posterImage={posterImage}
      />
      <h3 className="small-film-card__title">
        <Link to={`${AppRoute.Film}/${id}`} className="small-film-card__link">{name}</Link>
      </h3>
    </article>
  );
export default memo(Card);
