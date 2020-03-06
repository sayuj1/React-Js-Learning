import React from "react";
import style from "./Menu.module.css";
import { Link } from "react-router-dom";
const Menu = () => {
  return (
    <div className={style.menuContainer}>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </div>
  );
};

export default Menu;
