import React from "react";
import ContainerCss from "./Container.module.css";

export default function Container(props) {
  return (
    <div className={[ContainerCss.container, props.className].join(' ')}>
        {props.children}
    </div>
  )
}
