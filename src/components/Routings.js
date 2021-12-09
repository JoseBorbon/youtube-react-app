import { Routes, Route } from 'react-router-dom';
import Home from './main/Home';
import About from './main/About';
import Media from './main/Media';

const Routings = ({ searchResults, currBGColor }) => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <Home searchResults={searchResults} currBGColor={currBGColor} />
        }
      />
      <Route path="about" element={<About currBGColor={currBGColor} />} />
      <Route path="videos/*" element={<Media currBGColor={currBGColor} />} />
    </Routes>
  );
};

export default Routings;
