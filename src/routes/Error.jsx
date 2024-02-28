import React from "react";
import { Link } from "react-router-dom";

export default function Error() {
  return (
    <div id="error-page">
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <Link to={"/"}>
          <i>Go to main page</i>
        </Link>
      </p>
    </div>
  );
}
