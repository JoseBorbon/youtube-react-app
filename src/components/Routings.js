import { Routes, Route } from 'react-router-dom';
import Home from './main/Home';
import About from './main/About';
import Media from './main/Media';

const Routings = ({ searchResults }) => {
  return (
    <Routes>
      <Route path="/" element={<Home searchResults={searchResults} />} />
      <Route path="about" element={<About />} />
      <Route path="videos/*" element={<Media />} />
    </Routes>
  );
};

export default Routings;
