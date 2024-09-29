import React from "react";
import logo from "../logo.svg";
import "./Header.css";
export default function Header() {
  return (
    <nav className="navbar bg-body-tertiary">
      <div className="container nav-div">
        <a className="navbar-brand" href="#">
          <img
            src={logo}
            alt="Dog Breed Info Logo"
            width="50"
            height="50"
            className="d-inline-block align-text-top"
          />
          <h1>Dog Breed Info</h1>
        </a>
      </div>
    </nav>
  );
}
