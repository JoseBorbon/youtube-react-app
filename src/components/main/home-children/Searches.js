import { Link } from 'react-router-dom';
import './Searches.css';

const Searches = ({ searchResults }) => {
  const thumbnails = searchResults.map(
    ({ title, videoId, channelTitle, thumbnail }) => {
      return (
        <Link
          key={videoId}
          to={`videos/${videoId}`}
          className="Youtube-thumbnail"
        >
          <img src={thumbnail} alt={title} />
          <h4>{title}</h4>
        </Link>
      );
    }
  );

  return <main className="Youtube-searches">{thumbnails}</main>;
};

Searches.defaultProps = {
  opts: {
    height: '220',
    width: '200',
  },
};

export default Searches;