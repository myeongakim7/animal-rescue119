import React from "react";
import { Link } from "react-router-dom";
import home from "../images/icon-home.svg";
import search from "../images/icon-search.svg";

function Nav() {
  return (
    <div className="bottomBox">
      <div className="iconBox">
        <Link to="/" className="iconHome">
          <img src={home} alt="home" />
        </Link>
      </div>

      <div className="iconBox">
        <Link to="/search" className="iconSearch">
          <img src={search} alt="search" />
        </Link>
      </div>
    </div>
  );
}

export default Nav;
