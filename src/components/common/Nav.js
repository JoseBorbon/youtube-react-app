import { Link } from 'react-router-dom';
import SearchBar from './nav-children/SearchBar';
import ColorSwitch from './nav-children/ColorSwitch';
import './Nav.css';
import youtubeLogo from '../../media/youtube-logo.png.svg';
import homeLogo from '../../media/home-logo.png';

const Nav = ({
  getSearch,
  searchTerm,
  setSearchTerm,
  isColorSwitchToggled,
  setIsColorSwitchToggled,
  setCurrBGColor,
}) => {
  return (
    <nav>
        <div className="nav-youtube">
          <Link to="/"><img src ={youtubeLogo} className="youtube-logo" alt="youtube-logo"/></Link>
        </div>
        <div className="nav-home">
          <Link to="/"><img src ={homeLogo} className="home-logo" alt='home-logo'/></Link>
        </div>
        <div className = "search-bar">
        <SearchBar 
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          getSearch={getSearch}
        />
        </div>
        <div className ="color-switch" >
          <ColorSwitch 
            isColorSwitchToggled={isColorSwitchToggled}
            handleSetIsColorSwitchToggled={setIsColorSwitchToggled}
            setCurrBGColor={setCurrBGColor}
          />
          </div>
    </nav>
  );
};

export default Nav;
