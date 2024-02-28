import React from "react";
import "./style.css";
import LogoIcon from "../icon/logo";
import { Link } from "react-router-dom";
export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar__main">
        <Link to={"/"}>
          <LogoIcon className="sidebar__main-logo" />
        </Link>
        <div className="sidebar__main__controls">
          <div className="sidebar__main__controls-item sidebar__main__controls-item_active">
            Item
          </div>
          <div className="sidebar__main__controls-item">Item</div>
          <div className="sidebar__main__controls-item">Item</div>
          <div className="sidebar__main__controls-item">Item</div>
        </div>
      </div>
      <div className="sidebar__controls">
        <div className="sidebar__controls-settings">
          <Link to={"/settings"}>Settings</Link>
        </div>
        <div className="sidebar__controls-version">v. 0.0.1</div>
      </div>
    </div>
  );
}
