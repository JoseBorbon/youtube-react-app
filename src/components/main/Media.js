import { useContext } from 'react';
import { useParams } from 'react-router';
import Video from './media-children/Video';
import Comments from './media-children/Comments';
import { ThemeContext } from '../../contexts/theme.context';
import './Media.css';

const Media = () => {
  const { color } = useContext(ThemeContext);
  const ytVideoId = Object.values(useParams())[0];

  return (
    <main className="Media-section" style={{ backgroundColor: color }}>
      <Video ytVideoId={ytVideoId} />
      <hr />
      <Comments />
    </main>
  );
};

export default Media;
