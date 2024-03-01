import React from "react";
import { NavLink } from "react-router-dom";

export default function Error() {
  return (
    <div id="error-page">
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <NavLink to={"/"}>
          <i>Go to main page</i>
        </NavLink>
      </p>
    </div>
  );
}
