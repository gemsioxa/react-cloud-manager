import React from "react";
import { baseProps } from "./index";

const FileIcon = (props) => (
  <svg
    {...baseProps}
    {...props}
    viewBox="0 0 50 50"
    className="icon"
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path stroke="white" fill="white" d="M 7 2 L 7 48 L 43 48 L 43 14.59375 L 42.71875 14.28125 L 30.71875 2.28125 L 30.40625 2 Z M 9 4 L 29 4 L 29 16 L 41 16 L 41 46 L 9 46 Z M 31 5.4375 L 39.5625 14 L 31 14 Z"/>
  </svg>
);

export default FileIcon;
