
import React from 'react';
import './sidemenu.scss';
import { NavLink } from 'react-router-dom';
import { FaShoppingCart, FaUserPlus } from 'react-icons/fa';
import { CgClose } from 'react-icons/cg';
import { useSelector } from 'react-redux';

const SideMenu = ({ isMenuOpen, toggleMenu = () => { }, closeMenu = () => { } }) => {


  const { cartproduct: product } = useSelector(state => state.products);



  const TotalQuantity = () => {
    return product.reduce((curr, idx) => curr + idx.quantity, 0)
  };

  const totalQuantity = TotalQuantity();
  return (
    <div className={`sidemenu-con px-3 ${isMenuOpen ? 'show' : 'hide'}`}>
      <div className="mobile-nav-close-icon " >
        <span onClick={toggleMenu}>
          <CgClose  style={{ color: 'red' ,fontSize:"30px",fontWeight:"500px"}} fontSize={40} />

        </span>

      </div>
      <NavLink to="/">
            <img src="https://react-course-comfy-sloth-store.netlify.app/static/media/logo.221f6b13e6eaaad5828372464f73a1a4.svg" alt="logoimg" />
          </NavLink>
      <nav className="navbar">

        <ul className="sidebar-lists">
          <li>
            <NavLink to="/" className="navbar-link" onClick={closeMenu}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" className="navbar-link" onClick={closeMenu}>
              About
            </NavLink>
          </li>
          <li>
            <NavLink to="/products" className="navbar-link" onClick={closeMenu}>
              Products
            </NavLink>
          </li>
        </ul>
        <ul className="navbar-login">
          <li>
            <NavLink to="/cart" className="navbar-link" onClick={closeMenu}>
              Cart
              <FaShoppingCart className="cart-trolley" />
              <span className="cart-total--item">{totalQuantity}</span>
            </NavLink>
          </li>
          <li className='login-sidemenu'>
            <NavLink to="/login" className="navbar-link login-sidemenu" onClick={closeMenu}>
              Login
              <FaUserPlus className="user" />
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default SideMenu;