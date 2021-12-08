import { Link } from 'react-router-dom';
import SearchBar from './nav-children/SearchBar';
import './Nav.css';
import {SlideBarData} from "./NavBarLink"

const Nav = ({ getSearch, searchTerm, setSearchTerm }) => {
  return (
    <nav>
      <ul>
    
        <li className="Nav-youtube">

        <ul className = "youtube">
          {SlideBarData.map((item, i) => {
          
            return (
              <>
                <li key={item + i}>
                  <Link to={item.path}>
                    {" "}
                    {item.icon} <span>{item.title}</span>
                  </Link>
                </li>
              </>
            );
          })}
        </ul>


          {/* <Link to="/">Youtube</Link>
        </li>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>*/}
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
