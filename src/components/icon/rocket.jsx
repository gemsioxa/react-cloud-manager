import React from "react";
import { baseProps } from "./index";

const RocketIcon = (props) => (
  <svg
    {...baseProps}
    {...props}
    viewBox="0 0 64 64"
    xmlns="http://www.w3.org/2000/svg"
    strokeWidth="3"
    stroke="#000000"
    fill="none"
  >
    <path d="M28.79,44l-9.4-9.4S31.76,5.41,56.77,7C56.77,7,60.25,30.12,28.79,44Z" />
    <path d="M56,16.82a10.87,10.87,0,0,1-6-3.08,11,11,0,0,1-3.11-6.15" />
    <circle cx="42.32" cy="21.44" r="5.48" />
    <path d="M30.61,43.16,30,47.84a.24.24,0,0,0,.33.25l8-3.47A2.32,2.32,0,0,0,39.63,43l1.22-5.83" />
    <path d="M20,33.29l-4.69.6a.23.23,0,0,1-.24-.32l3.46-7.95a2.33,2.33,0,0,1,1.67-1.35l5.82-1.22" />
    <path d="M21.49,36.68c-6.55,2.1-6.88,12.47-6.88,12.47s10.08.11,12.59-6.76" />
    <line x1="10.88" y1="52.82" x2="7.12" y2="56.59" strokeLinecap="round" />
    <line x1="10.6" y1="45.63" x2="7.41" y2="48.81" strokeLinecap="round" />
    <line x1="17.94" y1="53.11" x2="14.76" y2="56.3" strokeLinecap="round" />
  </svg>
);

export default RocketIcon;
