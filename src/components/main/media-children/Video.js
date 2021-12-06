import YouTube from 'react-youtube';
import React, { useState, useEffect } from 'react';

const Video = ({ ytVideoId, opts }) => {
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
    <div>
      <h3>{videoInfo.title}</h3>
      <YouTube
        containerClassName="Youtube-video"
        videoId={ytVideoId}
        opts={opts}
        onReady={onReady}
      />
      <h4>{videoInfo.channelTitle}</h4>
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
