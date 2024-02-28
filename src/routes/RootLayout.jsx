import React from "react";
import Sidebar from "../components/sidebar";
import { Outlet } from "react-router-dom";
import DragZone from "../components/dragZone";

export default function RootLayout() {
  return (
    <div className="app">
      <DragZone />
      <Sidebar />
      <div className="app__main">
        <Outlet />
      </div>
    </div>
  );
}
