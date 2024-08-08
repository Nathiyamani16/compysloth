


import { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaShoppingCart, FaUserPlus } from "react-icons/fa";
import { CgMenu, CgClose } from "react-icons/cg";
import "../Header/header.scss";
import { useSelector } from "react-redux";

const Navbar = ({ toggleMenu = () => { } }) => {

  const { cartproduct: product } = useSelector(state => state.products);



  const TotalQuantity = () => {
    return product.reduce((curr, idx) => curr + idx.quantity, 0)
  };
  const totalQuantity = TotalQuantity();

  return (
    <div className="navbar-container">
      <nav className="navbar">
        <ul className={`navbar-lists `}>
          <li>
            <NavLink
              to="/"
              className="navbar-link"

            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className="navbar-link"

            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/products"
              className="navbar-link"

            >
              Products
            </NavLink>
          </li>
        </ul>
        <ul className={`navbar-login `}>
          <li>
            <NavLink
              to="/cart"
              className="navbar-link cart-trolly-"

            >
              Cart
              <FaShoppingCart className="cart-trolley" />
              <span className="cart-total--item">{totalQuantity}</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/login"
              className="navbar-link"

            >
              Login
              <FaUserPlus className="user" />
            </NavLink>
          </li>
        </ul>
        <div className="res-navbar-btn">
          <CgMenu

            className={`mobile-nav-icon`}
            onClick={toggleMenu}
          />
          {/* <CgClose
            className={`mobile-nav-close-icon`}
            onClick={toggleMenu}
          /> */}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;

