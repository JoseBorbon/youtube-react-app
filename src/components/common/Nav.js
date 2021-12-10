import { Link } from 'react-router-dom';
import SearchBar from './nav-children/SearchBar';
import './Nav.css';
import youtubeLogo from '../../media/youtube-logo.png.svg';
import homeLogo from '../../media/home-logo.png';

const Nav = ({ getSearch, searchTerm, setSearchTerm }) => {
  return (
    <nav>
        <div className="nav-youtube">
          <Link to="/"><img src ={youtubeLogo} className="youtube-logo alt="youtube-logo/></Link>
        </div>
        <div className="nav-home">
          <Link to="/"><img src ={homeLogo} className="home-logo"/></Link>
        </div>
        <div className = "search-bar">
        <SearchBar 
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          getSearch={getSearch}
        />
        </div>
    </nav>
  );
};

export default Nav;
