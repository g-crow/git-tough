import React from 'react'
import logo from './img/climbing_icon_white.png'
import './NavBar.css'

function NavBar() {
  return (
    <div className="navigation">
      <img src={logo} alt="logo" className="logo"/>
    </div>
  );
}

export default NavBar