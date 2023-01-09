import React from "react";
import "./NavBar.css";
import "./redimal.png";

export default function NavBar() {
  return (
    <div className="NavBar">
      <div className="logo">
        <img className="logo" src={require("./redimal.png")} />
      </div>
      <div className="searchBar">
        <input type="text" name="search" placeholder="Search the World!" />
      </div>
    </div>
  );
}
