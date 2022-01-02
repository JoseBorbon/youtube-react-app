import { Link } from 'react-router-dom';
import SearchBar from './nav-children/SearchBar';
import ColorSwitch from './nav-children/ColorSwitch';
import './Nav.css';
import youtubeLogo from '../../media/youtube-logo.png.svg';
import homeLogo from '../../media/home-logo.png';
import notificationLogo from '../../media/notification.png';
import moreLogo from '../../media/more.png';
import pursuitLogo from '../../media/Pursuit.png';

const Nav = ({ getSearch, searchTerm, setSearchTerm, isTrue, toggleIt }) => {
  return (
    <nav>
      <div className="nav-youtube">
        <Link to="/">
          <img src={youtubeLogo} className="youtube-logo" alt="youtube-logo" />
        </Link>
      </div>
      <div className="nav-home">
        <Link to="/">
          <img src={homeLogo} className="home-logo" alt="home-logo" />
        </Link>
      </div>
      <div className="search-bar">
        <SearchBar
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          getSearch={getSearch}
        />
      </div>
      <div className="color-switch">
        <ColorSwitch isTrue={isTrue} toggleIt={toggleIt} />
      </div>
      <div className="notification-logo">
        <img src={notificationLogo} alt="notification-logo" />
      </div>
      <div className="more-logo">
        <img src={moreLogo} alt="more-logo" />
      </div>
      <div className="pursuit-logo">
        <img src={pursuitLogo} alt="pursuit-logo" />
      </div>
    </nav>
  );
};

export default Nav;
