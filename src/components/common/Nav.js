import { Link } from 'react-router-dom';
import './Nav.css';
import SearchBar from './SearchBar';

const Nav = () => {
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
      </ul>
    </nav>
  );
};

export default Nav;
