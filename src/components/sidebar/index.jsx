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
      {item.name.split(' ')[0].slice(0, 1)}
      {item.name.split(' ')[1] && item.name.split(' ')[1].slice(0, 1)}
    </NavLink>
  )
}

export default function Sidebar() {
  const yaAccounts = useSelector((store) => store.accounts.accounts.yandex);

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
          </div>
        </div>
        <div className={SidebarCss.sidebarControls}>
          <NavLink
            className={SidebarCss.sidebarControlsSettings}
            to={"settings"}
          >
            <SettingsIcon />
          </NavLink>
          <div className={SidebarCss.sidebarControlsVersion}>v. 0.1.3</div>
        </div>
      </div>
    </div>
  );
}
