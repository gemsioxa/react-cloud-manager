import React from "react";
import LogoIcon from "../icon/logo";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
import SidebarCss from "./Sidebar.module.css";
import SettingsIcon from "@/components/icon/settings";
import { useSelector } from "react-redux";

const SidebarItem = ({ item, ...props }) => {
  return (
    <NavLink
      to={`disk/${item.token}`}
      className={SidebarCss.sidebarMainControlsItem}
    >
      {item.token.slice(0, 2)}
    </NavLink>
  )
}

export default function Sidebar() {
  const yaAccounts = useSelector((store) => store.accounts.accounts.yandex);
  console.log('ya', yaAccounts);
  return (
    <div className={SidebarCss.container}>
      <div className={SidebarCss.sidebar}>
        <div className={SidebarCss.sidebarMain}>
          <Link to={"/"}>
            <LogoIcon className={SidebarCss.sidebarMainLogo} />
          </Link>
          <div className={SidebarCss.sidebarMainControls}>
            {yaAccounts.map((item) => {
              return <SidebarItem key={item.token} item={item} />
            })}
            {/* <NavLink
              to={"disk/1"}
              className={SidebarCss.sidebarMainControlsItem}
            >
              D1
            </NavLink>
            <NavLink
              to={"disk/2"}
              className={SidebarCss.sidebarMainControlsItem}
            >
              D2
            </NavLink> */}
          </div>
        </div>
        <div className={SidebarCss.sidebarControls}>
          <NavLink
            className={SidebarCss.sidebarControlsSettings}
            to={"settings"}
          >
            <SettingsIcon />
          </NavLink>
          <div className={SidebarCss.sidebarControlsVersion}>v. 0.0.1</div>
        </div>
      </div>
    </div>
  );
}
