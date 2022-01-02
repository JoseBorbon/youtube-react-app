import YouTube from 'react-youtube';
import React, { useState, useEffect, useContext } from 'react';
import { ThemeContext } from '../../../contexts/theme.context';
import './Video.css';

const Video = ({ ytVideoId, opts }) => {
  const { isDark } = useContext(ThemeContext);
  const [videoInfo, setVideoInfo] = useState([]);

  useEffect(() => {
    (async () => {
      let response = await fetch(
        `https://youtube.googleapis.com/youtube/v3/videos?part=snippet&id=${ytVideoId}&key=${process.env.REACT_APP_API_KEY}`
      );
      response = await response.json();
      setVideoInfo(response.items[0].snippet);
    })();
  }, [ytVideoId]);

  const onReady = (evt) => {
    evt.target.pauseVideo();
  };

  return (
    <div
      className="Youtube-video"
      style={{ color: isDark ? 'white' : 'initial' }}
    >
      <h4>Channel: {videoInfo.channelTitle}</h4>
      <YouTube videoId={ytVideoId} opts={opts} onReady={onReady} />
      <h3>Title: {videoInfo.title}</h3>
    </div>
  );
};

Video.defaultProps = {
  opts: {
    height: '400',
    width: '400',
    playerVars: {
      autoplay: 0,
      origin: 'http://localhost:3000',
    },
  },
};

export default Video;
