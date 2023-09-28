import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { AppRoute } from '../../const';

type VideoPlayerProps = {
  id: number;
  name: string;
  videoLink: string;
};

const VideoPlayer = ({id, name, videoLink }:VideoPlayerProps):JSX.Element => {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  return (
    <div className="player">
      <video
        controls
        ref={videoRef}
        src={videoLink}
        className="player__video" poster="img/player-poster.jpg"
        autoPlay
        muted
      />
      {/* <div className="player__controls">
        <div className="player__controls-row">
          <div className="player__name">{name}</div>
        </div>
      </div> */}
      <Link to={`${AppRoute.Film}/${id}`}>
        <button type="button" className="player__exit">Exit video [{name}]</button>
      </Link>
    </div>
  );
};

export default VideoPlayer;
