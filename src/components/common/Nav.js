import { Link } from 'react-router-dom';
import SearchBar from './nav-children/SearchBar';
import ColorSwitch from './nav-children/ColorSwitch';
import './Nav.css';

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
      <ul>
        <li className="Nav-youtube">
          <Link to="/">Youtube</Link>
        </li>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <SearchBar
            searchTerm={searchTerm}
            setSearchTerm={setSearchTerm}
            getSearch={getSearch}
          />
        </li>
        <li>
          <ColorSwitch
            isColorSwitchToggled={isColorSwitchToggled}
            handleSetIsColorSwitchToggled={setIsColorSwitchToggled}
            setCurrBGColor={setCurrBGColor}
          />
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
