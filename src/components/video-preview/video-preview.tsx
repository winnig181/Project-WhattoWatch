import {useState, useEffect, useRef} from 'react';
import { AppRoute } from '../../const';

type VideoPreviewPlayerProps = {
  src: string;
  posterImage: string;
  name: string;
  id: number;
}

function VideoPreviewPlayer({src, posterImage, name, id}: VideoPreviewPlayerProps): JSX.Element {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    if (videoRef.current === null) {
      return;
    }
    if (isPlaying) {
      try {
        videoRef.current.play();
        return;
      } catch (err){
        // eslint-disable-next-line no-console
        console.error(err);
      }
    }
    videoRef.current.pause();
  }, [isPlaying]);
  return (
    <article
      className="small-film-card catalog__films-card"
      onMouseEnter={() => setIsPlaying(isPlaying)}
      onMouseLeave={() => setIsPlaying(!isPlaying)}
    >
      <div className="small-film-card__image">
        <img src={posterImage} alt={name} width={280} height={175} />
        <video
          src={src}
          poster = {posterImage}
          ref={videoRef}
          muted
          playsInline
        />
      </div>
      <h3 className="small-film-card__title">
        <a className="small-film-card__link" href={`${AppRoute.Film}/${id}`}>{name}</a>
      </h3>
    </article>
  );
}

export default VideoPreviewPlayer;
