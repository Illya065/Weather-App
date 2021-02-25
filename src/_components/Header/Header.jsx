import React, { useState } from "react";
import HeaderList from "./HeaderList/HeaderList";

const Header = (props) => {
  let [isActive, setStatus] = useState(false);
  console.log(isActive);

  let toggleMenu = () => {
    setStatus(!isActive);
  };

  return (
    <>
      <header className="header">
        <div className="container">
          <div className="header__content">
            <div className="header__logo">
              <div className="header__logo-img"></div>
              <div className="header__logo-company">
                <div className="header__logo-name">
                  <h1>Weather App</h1>
                </div>
                <div className="header__logo-subname">
                  <h2>The best broadcast</h2>
                </div>
              </div>
            </div>

            <HeaderList />

            <div onClick={toggleMenu} className="header__burger">
              <div
                className={isActive ? "burger__active" : "burger__deactive"}
              ></div>
            </div>
          </div>
        </div>
      </header>
      <div className={`menu ${isActive ? "mact" : "mdeact"}`}>
        <ul className="menu__list">
          <li className="menu__link">
            <a href="#">Home</a>
          </li>
          <li className="menu__link">
            <a href="#">News</a>
          </li>
          <li className="menu__link">
            <a href="#">Photos</a>
          </li>
          <li className="menu__link">
            <a href="#">Contact</a>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Header;
