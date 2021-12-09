import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import "./MobileNavigation.css";
import { SlideBarData} from "./NavBarLink"

export default function MobileNavigation() {
  const [sidebar, setSidebar] = useState(false);
  const showSidebar = () => {
    setSidebar(!sidebar);
  };

  return (
      <>
    <nav className="MobileNavigation">
      <div className="Mobilenavbar">
        <div className={sidebar ? "closeMenu" : "openMenu"}>
            <Link to="#" className="menu-bar">
          <i class="fas fa-align-justify" onClick={showSidebar}></i>
          </Link >
        </div>
        <div className={sidebar ? "openMenu" : "closeMenu"}>
        <Link to="#" className="menu-bar">
          <i class="far fa-times-circle" onClick={showSidebar}></i>
          </Link >
        </div>
      </div>
      <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
      <ul onClick={showSidebar}> 
         {SlideBarData.map((item, i) => {   
    return (
      <>
        <li key={item + i} className={item.cName}>
          <Link to={item.path}>
            {" "}
            {item.icon} <span>{item.title}</span>
          </Link>
        </li>
      </>
    );
  })}
        </ul>
    </nav>
    </nav>
    </>
  );
}
