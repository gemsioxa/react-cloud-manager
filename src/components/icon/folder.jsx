import React from "react";
import { baseProps } from "./index";

const FolderIcon = (props) => (
  <svg
    {...baseProps}
    {...props}
    viewBox="0 0 1024 1024"
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M810.665 269.333v-24.889c0-27.467-22.288-49.777-49.777-49.777H437.333v-24.89c0-27.467-22.288-49.777-49.779-49.777H263.11c-27.489 0-49.777 22.31-49.777 49.777v99.556h597.332z"
      fill="#2577FF"
    />
    <path
      d="M885.332 269.333H399.999V232c0-41.203-33.431-74.667-74.667-74.667H138.667C97.431 157.333 64 190.798 64 232v597.333C64 870.6 97.431 904 138.667 904h746.665c41.235 0 74.666-33.4 74.666-74.667V344c0-41.202-33.431-74.667-74.666-74.667z"
      fill="#FCB814"
    />
    <path
      d="M344 209.224v60.109h55.528c10.588-82.956-28.514-102.28-62.733-110.843A181.619 181.619 0 0 1 344 209.224zM896.794 270.491C901.296 280.096 904 290.7 904 302v485.334C904 828.6 870.566 862 829.332 862H82.665c-3.93 0-7.71-0.571-11.477-1.156C83.092 886.282 108.73 904 138.665 904h746.667C926.566 904 960 870.6 960 829.333V344c0-37.278-27.454-67.953-63.206-73.509z"
      fill=""
    />
  </svg>
);

export default FolderIcon;
