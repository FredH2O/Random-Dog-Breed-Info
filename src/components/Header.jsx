import React from "react";
import logo from "../logo.svg";

export default function Header() {
  return (
    <nav className="navbar bg-body-tertiary">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          <img
            src={logo}
            alt="Logo"
            width="50"
            height="50"
            className="d-inline-block align-text-top"
          />
          Doggo Info
        </a>
      </div>
    </nav>
  );
}
