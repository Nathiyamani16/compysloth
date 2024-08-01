import { useEffect } from "react";
import { NavLink } from "react-router-dom";
import "../Header/header.scss"
import Navbar from "./navbar";

const Header = ({ name }) => {
  return (
    <>
      <div className="main-container">
        <div className="mainHeader">
          <NavLink to="/">
            <img src="https://react-course-comfy-sloth-store.netlify.app/static/media/logo.221f6b13e6eaaad5828372464f73a1a4.svg" alt="logoimg" />
          </NavLink>
          <Navbar />
        </div>
      </div>
    </>
  );
};

export default Header
