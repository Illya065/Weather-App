import React from "react";
import "./HeaderList.css";

const HeaderList = (props) => {
  return (
    <ul className="header__list">
      <li className="header__link">
        <a href="/home">Home</a>
      </li>
      <li className="header__link">
        <a href="/news">News</a>
      </li>
      <li className="header__link">
        <a href="/photos">Photos</a>
      </li>
      <li className="header__link">
        <a href="/contact">Contact</a>
      </li>
    </ul>
  );
};

export default HeaderList;
