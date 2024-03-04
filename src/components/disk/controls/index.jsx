import React from "react";
import ControlsCss from "./Controls.module.css";

export default function Controls(props) {
  return (
    <div className={ControlsCss.controls}>
      <div className={ControlsCss.controlsTitle}>{props.title || '/'}</div>
      <div className={ControlsCss.controlsList}>
        <div className={ControlsCss.controlsListItem}>Copy</div>
        <div className={ControlsCss.controlsListItem}>Paste</div>
        <div className={ControlsCss.controlsListItem}>Delete</div>
      </div>
    </div>
  );
}
