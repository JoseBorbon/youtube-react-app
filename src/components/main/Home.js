import Searches from './home-children/Searches';
import Landing from './home-children/Landing';
import './Home.css';

const Home = ({ searchResults, currBGColor }) => {
  return searchResults.length === 0 ? (
    <Landing currBGColor={currBGColor} />
  ) : (
    <Searches searchResults={searchResults} currBGColor={currBGColor} />
  );
};

export default Home;
