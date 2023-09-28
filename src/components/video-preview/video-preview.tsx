import {useRef} from 'react';

type VideoPreviewPlayerProps = {
  src: string;
  posterImage: string;
  name: string;
  id: number;
  isPlaying: boolean;
}

function VideoPreviewPlayer({id, src, posterImage, name, isPlaying, }: VideoPreviewPlayerProps):
JSX.Element {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  return (
    <div className="small-film-card__image">
      {isPlaying ?
        <video
          autoPlay
          src={src}
          poster = {posterImage}
          ref={videoRef}
          width = {280}
          height={175}
          muted
          playsInline
        /> :
        <img src={posterImage} alt={name} width={280} height={175} /> }
    </div>

  );
}

export default VideoPreviewPlayer;
