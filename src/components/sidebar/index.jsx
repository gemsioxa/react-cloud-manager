import React from "react";
import LogoIcon from "../icon/logo";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
import SidebarCss from './Sidebar.module.css';

export default function Sidebar() {
  return (
    <div className={SidebarCss.container}>
      <div className={SidebarCss.sidebar}>
        <div className={SidebarCss.sidebarMain}>
          <Link to={"/"}>
            <LogoIcon className={SidebarCss.sidebarMainLogo} />
          </Link>
          <div className={SidebarCss.sidebarMainControls}>
            <NavLink to={"/disk/1"} className={SidebarCss.sidebarMainControlsItem}>
              D1
            </NavLink>
            <NavLink to={"/disk/2"} className={SidebarCss.sidebarMainControlsItem}>
              D2
            </NavLink>
            <NavLink to={"/disk/3"} className={SidebarCss.sidebarMainControlsItem}>
              D3
            </NavLink>
            <NavLink to={"/disk/4"} className={SidebarCss.sidebarMainControlsItem}>
              D4
            </NavLink>
          </div>
        </div>
        <div className={SidebarCss.sidebarControls}>
          <div className={SidebarCss.sidebarControlsSettings}>
            <NavLink to={"/settings"}>Settings</NavLink>
          </div>
          <div className={SidebarCss.sidebarControlsVersion}>v. 0.0.1</div>
        </div>
      </div>
    </div>
  );
}
