import { Routes, Route } from 'react-router-dom';
import Home from './main/Home';
import About from './main/About';
import Media from './main/Media';
import Careers from './common/footer-children/Careers';
import Contact from './common/footer-children/Contact';


const Routings = ({ searchResults }) => {
  return (
    <Routes>
      <Route path="/" element={<Home searchResults={searchResults} />} />
      <Route path="about" element={<About />} />
      <Route path="videos/*" element={<Media />} />
      <Route path="career" element={<Careers/>} />
      <Route path="contact" element={<Contact />} />
    </Routes>
  );
};

export default Routings;
