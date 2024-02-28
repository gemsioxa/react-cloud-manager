import React from "react";
import "./style.css";
import LogoIcon from "../icon/logo";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar__main">
        <Link to={"/"}>
          <LogoIcon className="sidebar__main-logo" />
        </Link>
        <div className="sidebar__main__controls">
          <NavLink to={"/disk/1"} className="sidebar__main__controls-item">
            D1
          </NavLink>
          <NavLink to={"/disk/2"} className="sidebar__main__controls-item">
            D2
          </NavLink>
          <NavLink to={"/disk/3"} className="sidebar__main__controls-item">
            D3
          </NavLink>
          <NavLink to={"/disk/4"} className="sidebar__main__controls-item">
            D4
          </NavLink>
        </div>
      </div>
      <div className="sidebar__controls">
        <div className="sidebar__controls-settings">
          <NavLink to={"/settings"}>Settings</NavLink>
        </div>
        <div className="sidebar__controls-version">v. 0.0.1</div>
      </div>
    </div>
  );
}
