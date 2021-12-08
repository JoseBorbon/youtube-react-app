import { useParams } from 'react-router';
import Video from './media-children/Video';
import Comments from './media-children/Comments';
import './Media.css';

const Media = () => {
  const ytVideoId = Object.values(useParams())[0];

  return (
    <main className="Media-section">
      <Video ytVideoId={ytVideoId} />
      <hr />
      <Comments />
    </main>
  );
};

export default Media;
