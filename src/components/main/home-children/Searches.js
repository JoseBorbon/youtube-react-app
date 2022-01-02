import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ThemeContext } from '../../../contexts/theme.context';
import createMarkup from '../../../utilities/createMarkup';
import './Searches.css';

const Searches = ({ searchResults }) => {
  const { color, isDark } = useContext(ThemeContext);
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
            color: isDark ? 'white' : 'initial',
          }}
        />
      </Link>
    );
  });

  return (
    <main
      className="Youtube-searches"
      style={{
        backgroundColor: color,
      }}
    >
      {thumbnails}
    </main>
  );
};

export default Searches;
