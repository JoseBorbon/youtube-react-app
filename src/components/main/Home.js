import Searches from './home-children/Searches';
import Landing from './home-children/Landing';
import './Home.css';

const Home = ({ searchResults, setVideoId }) => {
  return searchResults.length === 0 ? (
    <Landing />
  ) : (
    <Searches searchResults={searchResults} setVideoId={setVideoId} />
  );
};

export default Home;
