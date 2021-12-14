// import React from "react";
// import { useState } from "react";
// import { Link } from "react-router-dom";
// import Footer from "../Footer";
// import "./MobileNav.css";
// import './ResponsiveMobile.css'


// export default function MobileNavigation() {
//   const [sidebar, setSidebar] = useState(false);
//   const showSidebar = () => {
//     setSidebar(!sidebar);
   
//   };

//   return (
//       <>
//     <nav className="MobileNavigation">
//       <div className="Mobilenavbar">
//         <div className={sidebar ? "closeMenu" : "openMenu"}>
//             <Link to="#" className="menu-bar">
//           <i className="fas fa-align-justify" onClick={showSidebar}></i>
//           </Link >
//         </div>
//         <div className={sidebar ? "openMenu" : "closeMenu"}>
//         <Link to="#" className="menu-bar">
//           <i className="far fa-times-circle" onClick={showSidebar}></i>
//           </Link >
//         </div>
//       </div>

//       <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
//       <ul onClick={showSidebar}> 
     
//           <Link to="/">
//               <i className="fas fa-home-lg-alt"></i></Link>
       
//             <Footer/>
//     </ul>
//     </nav>

//     </nav>
//     </>
//   );
// }