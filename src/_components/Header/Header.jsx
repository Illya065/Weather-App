import React, { useState } from "react";
import Burger from "./Burger/Burger";
import BurgerLinks from "./BurgerLinks/BurgerLinks";
import HeaderList from "./HeaderList/HeaderList";
import Logo from "./Logo/Logo";

const Header = (props) => {
  let [isActive, setStatus] = useState(false);

  let toggleMenu = () => {
    setStatus(!isActive);
  };

  return (
    <>
      <header className="header">
        <div className="container">
          <div className="header__content">
            <Logo />

            <HeaderList />

            <Burger isActive={isActive} toggleMenu={toggleMenu} />
          </div>
        </div>
      </header>
      <BurgerLinks isActive={isActive} />
    </>
  );
};

export default Header;
