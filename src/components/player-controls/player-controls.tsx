import PropTypes from 'prop-types';

type VideoControlsProps = {
  name: string;
  runTime: number;
  isPlaying: boolean;
  onPlayPauseClick: ()=>void;
};

const VideoControls = ({ isPlaying, onPlayPauseClick, runTime, name }:VideoControlsProps):JSX.Element => (
  <div className="player__controls">
    <div className="player__controls-row">
      <div className="player__time">
        <progress className="player__progress" value={0} max={100} />
        <div className="player__toggler" style={{ left: '0%' }}>Toggler</div>
      </div>
      <div className="player__time-value">{runTime}</div>
    </div>
    <div className="player__controls-row">
      {isPlaying ? (
        <button type="button" className="player__play" onClick={() => onPlayPauseClick()}>
          <svg viewBox="0 0 19 19" width={19} height={19}>
            <use xlinkHref="#pause" />
          </svg>
          <span>Pause</span>
        </button>
      ) : (
        <button type="button" className="player__play" onClick={() => onPlayPauseClick()}>
          <svg viewBox="0 0 19 19" width={19} height={19}>
            <use xlinkHref="#play-s" />
          </svg>
          <span>Play</span>
        </button>)}
      <div className="player__name">{name}</div>
      <button type="button" className="player__full-screen">
        <svg viewBox="0 0 27 27" width={27} height={27}>
          <use xlinkHref="#full-screen" />
        </svg>
        <span>Full screen</span>
      </button>
    </div>

  </div>


);

VideoControls.propTypes = {
  isPlaying: PropTypes.bool,
  onPlayPauseClick: PropTypes.func,
};

export default VideoControls;
