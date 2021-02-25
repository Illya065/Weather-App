import React from "react";
import "./HeaderList.css";

const HeaderList = (props) => {
  return (
    <ul className="header__list">
      <li className="header__link">
        <a href="#">Home</a>
      </li>
      <li className="header__link">
        <a href="#">News</a>
      </li>
      <li className="header__link">
        <a href="#">Photos</a>
      </li>
      <li className="header__link">
        <a href="#">Contact</a>
      </li>
    </ul>
  );
};

export default HeaderList;
