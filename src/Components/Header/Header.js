import React, { useState } from "react";

import spacex from "../../../public/spacex.svg";
import menu from "../../../public/menu.svg";
import './style.css';

const Header = () => {
  const [isDesktop, setIsDesktop] = useState(true)
  const [isOpen, setIsOpen] = useState(false)

  const handleToggle = () => {
    setIsOpen(prev => !prev)
  }

  const links = ['Главная', 'Технология', 'График полетов', 'Гарантия', 'О компании', 'Контакты']
  return (
    <div className="header">
      <div className="header-logo" >
        <img src={spacex} alt="logo" />
      </div>
      {!isDesktop ? (
        <div className="header-links">
          {links.map((link) => <span className="header-links__button">{link}</span>)}
        </div>
      ) : (
        <div className="burger-btn">
        <img onClick={handleToggle} src={menu} alt="menu" />
          <ul className={`menuNav ${isOpen ? " showMenu" : ""}`}>
          {links.map((link) => <span className="header-links__button">{link}</span>)}
          </ul>
        </div>
      )}
    </div >
  );
}

export default Header;




