import React from "react";
import { Routes, Route, Link } from 'react-router-dom';
//import headerLogo from "../images/headerlogo.svg";

function Header() {
  return (
    <header className="header">
      <div className="header__logo"></div>

      <Routes>
        <Route path='/sign-in' element={<Link to='/sign-up' className='header__link'>Регистрация</Link>} />
        <Route path='/sign-up' element={<Link to='/sign-in' className='header__link'>Войти</Link>} />
      </Routes>

    </header>
  );
}

export default Header;