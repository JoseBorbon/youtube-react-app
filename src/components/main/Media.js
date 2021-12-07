import { useParams } from 'react-router';
import Video from './media-children/Video';
import Comments from './media-children/Comments';
import './Media.css';

const Media = () => {
  const ytVideoId = Object.values(useParams())[0];

  return (
    <main>
      <Video ytVideoId={ytVideoId} />
      <hr />
      <Comments />
    </main>
  );
};

export default Media;

/*  -- Media Component Layout -- 
    Specific Video component that was selected
    split by hr tag
    Comments section thats a form down below it (Will Keep Track Of State and be a component)
*/
