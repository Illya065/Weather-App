import React from "react";
import "./Logo.css";

const Logo = (props) => {
  return (
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
  );
};

export default Logo;
