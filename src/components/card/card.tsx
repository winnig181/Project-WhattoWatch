import type { Movie } from '../../types/types';
import VideoPreviewPlayer from '../video-preview/video-preview';
// import { AppRoute } from '../../const';

type CardProps = Movie & {
  onMouseEnter?: (id: number) => void;
  onMouseLeave?: () => void;
};

const Card = ({id, previewVideoLink, name, posterImage,
  onMouseEnter = () => void 0, onMouseLeave = () => void 0
}: CardProps): JSX.Element =>
// const handleMouseMove = () => {
//   onMouseMove(id);
// };

  (
    <VideoPreviewPlayer
      src = {previewVideoLink}
      id = {id}
      name = {name}
      posterImage={posterImage}
    />
    // <article
    //   className="small-film-card catalog__films-card"
    //   onMouseMove={handleMouseMove}
    //   onMouseLeave={onMouseLeave}
    // >
    //   <div className="small-film-card__image">
    //     <img src={posterImage} alt={name} width={280} height={175} />
    //   </div>
    //   <h3 className="small-film-card__title">
    //     <a className="small-film-card__link" href={`${AppRoute.Film}/${id}`}>{name}</a>
    //   </h3>
    // </article>
  );
export default Card;
