import Searches from './home-children/Searches';
import Landing from './home-children/Landing';
import './Home.css';

const Home = ({ searchResults }) => {
  return searchResults.length === 0 ? (
    <Landing />
  ) : (
    <Searches searchResults={searchResults} />
  );
};

export default Home;
