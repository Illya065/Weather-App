import React from "react";

const BurgerLinks = (props) => {
  return (
    <div className={`menu ${props.isActive ? "mact" : "mdeact"}`}>
      <ul className="menu__list">
        <li className="menu__link">
          <a href="/home">Home</a>
        </li>
        <li className="menu__link">
          <a href="/news">News</a>
        </li>
        <li className="menu__link">
          <a href="/photos">Photos</a>
        </li>
        <li className="menu__link">
          <a href="/contact">Contact</a>
        </li>
      </ul>
    </div>
  );
};

export default BurgerLinks;
