// import { Link } from 'react-router-dom';
import './Nav.css';
import SearchBar from './SearchBar';

const Nav = () => {
  return (
    <div>


<SearchBar placeholder="Search..." id="search-bar" 
// data={data}
/>
      {/* <ul>
        <li className="Nav-youtube">
          <Link to="/">Youtube</Link>
        </li>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <h1 class="logo-name">Youtube</h1>
        </li>
      </ul> */}
    </div>
  );
};

export default Nav;
