import React from "react";
import { Link } from "react-router-dom";

function MenuItem({ name, path, logo }) {
  return (
    <li className="menuItem">
      <Link to={path} className="menuLink">
        <i className={logo}></i>
      </Link>
      <Link to={path} className="menuLink">
        <p>{name}</p>
      </Link>
    </li>
  );
}

export default MenuItem;
