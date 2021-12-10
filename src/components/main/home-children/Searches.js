import { Link } from 'react-router-dom';
import createMarkup from '../../../utilities/createMarkup';
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
          <h4 dangerouslySetInnerHTML={createMarkup(title)} />
        </Link>
      );
    }
  );

  return <main className="Youtube-searches">{thumbnails}</main>;
};

// Searches.defaultProps = {
//   opts: {
//     height: '400',
//     width: 'auto',
//   },
// };

export default Searches;
