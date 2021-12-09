import React from "react";
import { Link } from "react-router-dom";
import {SlideBarData} from "./NavBarLink"
import "./Navigation.css";
export default function Navigation() {
  return (
    <div className="NavBar">
      <div className="Navigation">
        <ul>
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
      </div>
    </div>
  );
}
