import { Link } from "react-router-dom";
import "./Nav.css";

const Nav = () => {
  return (
    <div class="navbar">
      <div class="container flex">
        <li>
          <h1 class="logo-name">Youtube</h1>
        </li>
        <nav>
          <ul>
            <li className="search">
              <input type="text" placeholder="Search" className="search-box" />
              <button className="search-btn">
                <i className="fas fa-search"></i>
              </button>
            </li>
            <li>
              <Link to="/">
                <h3>Home</h3>
              </Link>
            </li>
            <li>
              <Link to="/about">
                <h3>About</h3>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Nav;
