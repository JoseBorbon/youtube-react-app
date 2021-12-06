import YouTube from 'react-youtube';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import './Media.css';

const Media = ({ opts }) => {
  const [videoInfo, setVideoInfo] = useState([]);
  const ytVideoId = Object.values(useParams())[0];

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
    <main>
      <h3>{videoInfo.title}</h3>
      <YouTube
        containerClassName="Youtube-video"
        videoId={ytVideoId}
        opts={opts}
        onReady={onReady}
      />
      <h4>{videoInfo.channelTitle}</h4>
      <hr />
    </main>
  );
};

Media.defaultProps = {
  opts: {
    height: '400',
    width: '400',
    playerVars: {
      autoplay: 0,
      origin: 'http://localhost:3000',
    },
  },
};

export default Media;

/*  -- Media Component Layout -- 
    Specific Video component that was selected
    split by hr tag
    Comments section thats a form down below it (Will Keep Track Of State and be a component)
*/
