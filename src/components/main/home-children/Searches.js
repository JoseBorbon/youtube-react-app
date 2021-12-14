import { Link } from 'react-router-dom';
import createMarkup from '../../../utilities/createMarkup';
import './Searches.css';

const Searches = ({ searchResults, currBGColor }) => {
  const thumbnails = searchResults.map(({ title, videoId, thumbnail }) => {
    return (
      <Link
        key={videoId}
        to={`videos/${videoId}`}
        className="Youtube-thumbnail"
      >
        <img src={thumbnail} alt={title} />
        <h4
          dangerouslySetInnerHTML={createMarkup(title)}
          style={{
            color: currBGColor === 'RGB(24, 24, 24)' ? 'white' : 'initial',
          }}
        />
      </Link>
    );
  });

  return (
    <main
      className="Youtube-searches"
      style={{
        backgroundColor: currBGColor,
      }}
    >
      {thumbnails}
    </main>
  );
};

export default Searches;
