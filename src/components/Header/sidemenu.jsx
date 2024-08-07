import React from 'react'
import "./sidemenu.scss"
import { NavLink } from 'react-router-dom'
import { FaShoppingCart, FaUserPlus } from 'react-icons/fa'
import { CgClose, CgMenu } from 'react-icons/cg'
const SideMenu = ({ isMenuOpen ,toggleMenu = () => { } }) => {

  return (
    <div className={`sidemenu-con ${isMenuOpen ? "show" : "hide"}`}>

      <nav className="navbar">
        <ul className={`sidebar-lists`}>
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
              <span className="cart-total--item"></span>
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
        
      </nav>
      <div className="res-navbar-btn">
         
          <CgClose

            className={`mobile-nav-close-icon`}
            onClick={toggleMenu}
          />
        </div>
    </div>

  )
}

export default SideMenu
