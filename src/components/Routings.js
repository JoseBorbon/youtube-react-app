import { Routes, Route } from 'react-router-dom';
import Home from './main/Home';
import About from './main/footer-children/About';
import Media from './main/Media';
import Careers from './main/footer-children/Careers';
import Contact from './main/footer-children/Contact';
import { News } from './main/footer-children/News';

const Routings = ({ searchResults }) => {
  return (
    <Routes>
      <Route path="/" element={<Home searchResults={searchResults} />} />
      <Route path="about" element={<About />} />
      <Route path="videos/*" element={<Media />} />
      <Route path="career" element={<Careers />} />
      <Route path="contact" element={<Contact />} />
      <Route path="news" element={<News />} />
    </Routes>
  );
};

export default Routings;
