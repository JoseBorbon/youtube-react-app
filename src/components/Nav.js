import "./Nav.css";
import { Link } from "react-router-dom";
export const Nav = () => {
  return (
    <nav>
      <aside>
        <ul>
          <li>
            <Link to="/">Youtube</Link>
          </li>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/">About</Link>
          </li>
        </ul>
      </aside>
    </nav>    
  );
};

export default Nav;