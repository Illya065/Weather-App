import React from "react";

const Burger = (props) => {
  return (
    <div onClick={props.toggleMenu} className="header__burger">
      <div
        className={props.isActive ? "burger__active" : "burger__deactive"}
      ></div>
    </div>
  );
};

export default Burger;
