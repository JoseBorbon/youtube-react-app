import { Link } from 'react-router-dom';
import SearchBar from './nav-children/SearchBar';
import './Nav.css';
import SearchBar from './SearchBar';

const Nav = ({ getSearch, searchTerm, setSearchTerm }) => {
  return (
    <nav>
      <ul>
        <li className="Nav-youtube">
          <Link to="/">Youtube</Link>
        </li>
        <li>
          <Link to="/">Home</Link>
        </li>
        <SearchBar className ="search-bar" />
        <li>
          <Link to="/about">About</Link>
        </li>
        <SearchBar
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          getSearch={getSearch}
        />
      </ul>
    </nav>
  );
};

export default Nav;
