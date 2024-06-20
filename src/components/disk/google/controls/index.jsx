import React from "react";
import ControlsCss from "./Controls.module.css";

export default function Controls(props) {
  return (
    <div className={ControlsCss.controls}>
      <div className={ControlsCss.controlsTitle}>{props.title}</div>
    </div>
  );
}
