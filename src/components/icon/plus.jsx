import React from "react";
import { baseProps } from "./index";

const PlusIcon = (props) => (
  <svg
    {...baseProps}
    {...props}
    viewBox="0 0 15 15"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M7.5,0C3.364,0,0,3.364,0,7.5S3.364,15,7.5,15S15,11.636,15,7.5S11.636,0,7.5,0z M7.5,14C3.916,14,1,11.084,1,7.5  S3.916,1,7.5,1S14,3.916,14,7.5S11.084,14,7.5,14z" />
    <polygon points="8,3.5 7,3.5 7,7 3.5,7 3.5,8 7,8 7,11.5 8,11.5 8,8 11.5,8 11.5,7 8,7 " />
  </svg>
);

export default PlusIcon;
