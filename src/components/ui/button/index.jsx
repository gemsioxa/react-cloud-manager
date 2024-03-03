import React from "react";
import ButtonCss from "./Button.module.css";

export default function Button(props) {
  return (
    <button className={ButtonCss.button} onClick={props.onClick}>
      {props.title || props.children}
    </button>
  );
}
