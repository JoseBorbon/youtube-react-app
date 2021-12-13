import { useParams } from 'react-router';
import Video from './media-children/Video';
import Comments from './media-children/Comments';
import './Media.css';

const Media = ({ currBGColor }) => {
  const ytVideoId = Object.values(useParams())[0];

  return (
    <main className="Media-section" style={{ backgroundColor: currBGColor }}>
      <Video ytVideoId={ytVideoId} currBGColor={currBGColor} />
      <hr />
      <Comments currBGColor={currBGColor} />
    </main>
  );
};

export default Media;
