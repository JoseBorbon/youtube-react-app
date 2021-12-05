import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Nav.css";
export class Nav extends Component {
  render() {
    return (
      <nav>
        <aside>
          <ul>
            <li>
              <i class="fas fa-align-justify"></i>
            </li>

            <li>
              <Link to="/">
                <img
                  className="logo"
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/YouTube_Logo_2017.svg/512px-YouTube_Logo_2017.svg.png"
                />
              </Link>
            </li>

            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/">About</Link>
            </li>

            {/* <li className="search">
              <input type="text" placeholder="Search" className="search-box" />
              <button className="search-btn">
                <i className="fas fa-search"></i>
              </button>
            </li> */}
          </ul>
        </aside>
      </nav>
    );
  }
}

export default Nav;
