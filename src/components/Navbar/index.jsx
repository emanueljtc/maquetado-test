import React, { useState } from 'react';
import { FaBars } from 'react-icons/fa';
import { HiOutlineShoppingCart } from 'react-icons/hi';
// import "animate.css"
import './styles.scss';
const Navbar = () => {
  const [showMenuMobile, setShowMenuMobile] = useState(false);
  const [navigation] = useState([
    {
      id: 1,
      name: 'Home',
    },
    {
      id: 2,
      name: 'Headphones',
    },
    {
      id: 3,
      name: 'Spekears',
    },
    {
      id: 4,
      name: 'Earphones',
    },
  ]);
  const toogleMobileMenu = () => {
    setShowMenuMobile(!showMenuMobile);
  };
  return (
    <>
      <div className="navbar">
        <div className="navbar-logo">
          <span className="name">audiophile</span>
        </div>
        <nav className="navbar-links">
          {navigation.map((item, index) => {
            return (
              <div className="content-link" key={index}>
                <a href="/" className="link">
                  {item.name}
                </a>
              </div>
            );
          })}
        </nav>
        <div className="navbar-extras">
          <HiOutlineShoppingCart />
        </div>
        <div className="navbar-hamburger" onClick={toogleMobileMenu}>
          <FaBars />
        </div>
      </div>
      {showMenuMobile ? (
        <nav className="navbar-mobile animate__animated animate__fadeInDown">
          {navigation.map((item, index) => {
            return (
              <div className="content-link" key={index}>
                <a href="/" className="link">
                  {item.name}
                </a>
              </div>
            );
          })}
        </nav>
      ) : (
        ''
      )}
    </>
  );
};

export default Navbar;
