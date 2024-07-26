import { useState } from "react";
import { NavLink } from "react-router-dom";
import Nav from 'react-bootstrap/Nav';
import { FaShoppingCart } from "react-icons/fa";
import { CgMenu, CgClose } from "react-icons/cg";
import "../Header/header.scss"

const Navbar = () => {
  const [menuIcon, setMenuIcon] = useState();

  return (
    <>
    <div className="navbar-conatiner">
    <Nav>
      <div className={menuIcon ? "navbar active" : "navbar"}>
        <ul className="navbar-lists">
          <li>
            <NavLink
              to="/"
              className="navbar-link  ho"
              onClick={() => setMenuIcon(false)}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className="navbar-link ho "
              onClick={() => setMenuIcon(false)}>
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/product"
              className="navbar-link ho"
              onClick={() => setMenuIcon(false)}>
              Products
            </NavLink>
          </li>
          
        </ul>
        <ul className="navbar-login">

        <li>
            <NavLink to="/" className="navbar-link cart-trolly-">
            Cart
              <FaShoppingCart className="cart-trolley" />
              <span className="cart-total--item">0</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/"
              className="navbar-link "
              onClick={() => setMenuIcon(false)}>
              LOGIN
            </NavLink>
          </li>
      
        </ul>
        <div className="res-navbar-btn">
          <CgMenu
            name="menu-outline"
            className="mobile-nav-icon"
            onClick={() => setMenuIcon(true)}
          />
          <CgClose
            name="close-outline"
            className="res-nav-icon close-outline"
            onClick={() => setMenuIcon(false)}
          />
        </div>
      </div>
    </Nav>
    </div>
    </>
  );
};

export default Navbar;
