import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { Auth0Provider } from "@auth0/auth0-react";

ReactDOM.render(
  <Auth0Provider
    domain="hacknyu.jp.auth0.com"
    clientId="v1XCHBsdcBoVR2cjS4VRiuDmj28VwkVy"
    redirectUri="http://localhost:3000/"
  >
    <App />,
  </Auth0Provider>,
  document.getElementById("root")
);
