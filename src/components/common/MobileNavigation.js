import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import Footer from "./Footer";
import "./MobileNavigation.css";
import './../common/Responsive.css'


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
     
          <Link to="/">
              <i class="fas fa-home-lg-alt"className="home-logo"></i></Link>
       
<Footer/>
    </ul>
    </nav>

    </nav>
    </>
  );
}
