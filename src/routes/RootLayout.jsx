import React from "react";
import Sidebar from "../components/sidebar";
import { Outlet } from "react-router-dom";
import DragZone from "../components/dragZone";
import { useDispatch } from "react-redux";
import { update } from "../store/accountsSlice";

export default function RootLayout() {
  const dispatch = useDispatch();

  dispatch(update());

  return (
    <div className="app">
      <DragZone />
      <Sidebar />
      <div />
      <div className="app__main">
        <Outlet />
      </div>
    </div>
  );
}
