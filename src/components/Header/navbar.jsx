import { useState } from "react";
import { NavLink } from "react-router-dom";
import Nav from 'react-bootstrap/Nav';
import { FaShoppingCart, FaUserPlus } from "react-icons/fa";
import { CgMenu, CgClose } from "react-icons/cg";
import "../Header/header.scss"
import { useDispatch, useSelector } from "react-redux";

const Navbar = () => {
  // const dispatch = useDispatch();
  const { cartproduct: product } = useSelector(state => state.products);
  const [menuIcon, setMenuIcon] = useState();

 const TotalQuantity=()=>{
  return product.reduce((curr,idx)=>curr + idx.quantity,0)

 }
const totalQuantity=TotalQuantity()

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
                >
                  About
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/products"
                  className="navbar-link ho"
                >
                  Products
                </NavLink>
              </li>

            </ul>
            <ul className="navbar-login">

              <li>
                <NavLink to="/cart" className="navbar-link cart-trolly-">
                  Cart
                  <FaShoppingCart className="cart-trolley" />
                  <span className="cart-total--item">{totalQuantity}</span>
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/"
                  className="navbar-link "
                >
                  Login
                  <FaUserPlus  className="user"/>

                </NavLink>
              </li>

            </ul>
            <div className="res-navbar-btn">
              <CgMenu
                name="menu-outline"
                className="mobile-nav-icon"
                
              />
              <CgClose
                name="close-outline"
                className="res-nav-icon close-outline"
          
              />
            </div>
          </div>
        </Nav>
      </div>
    </>
  );
};

export default Navbar;




// import { useState } from "react";
// import { NavLink } from "react-router-dom";
// import { FaShoppingCart } from "react-icons/fa";
// import { CgMenu, CgClose } from "react-icons/cg";
// import "../Header/header.scss";

// const Navbar = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   const toggleMenu = () => {
//     setIsMenuOpen(prev => !prev);
//   };

//   return (
//     <div className="navbar-container">
//       <nav className="navbar">
//         <ul className={`navbar-lists ${isMenuOpen ? "open" : ""}`}>
//           <li>
//             <NavLink
//               to="/"
//               className="navbar-link"
//               onClick={() => setIsMenuOpen(false)}
//             >
//               Home
//             </NavLink>
//           </li>
//           <li>
//             <NavLink
//               to="/about"
//               className="navbar-link"
//               onClick={() => setIsMenuOpen(false)}
//             >
//               About
//             </NavLink>
//           </li>
//           <li>
//             <NavLink
//               to="/products"
//               className="navbar-link"
//               onClick={() => setIsMenuOpen(false)}
//             >
//               Products
//             </NavLink>
//           </li>
//         </ul>
//         <ul className={`navbar-login ${isMenuOpen ? "open" : ""}`}>
//           <li>
//             <NavLink to="/cart" className="navbar-link cart-trolley">
//               Cart
//               <FaShoppingCart className="cart-trolley-icon" />
//               <span className="cart-total-item">0</span>
//             </NavLink>
//           </li>
//           <li>
//             <NavLink
//               to="/login"
//               className="navbar-link"
//               onClick={() => setIsMenuOpen(false)}
//             >
//               LOGIN
//             </NavLink>
//           </li>
//         </ul>
//         <div className="res-navbar-btn">
//           <CgMenu
//             className={`mobile-nav-icon ${isMenuOpen ? "hidden" : ""}`}
//             onClick={toggleMenu}
//           />
//           <CgClose
//             className={`mobile-nav-close-icon ${isMenuOpen ? "visible" : ""}`}
//             onClick={toggleMenu}
//           />
//         </div>
//       </nav>
//     </div>
//   );
// };

// export default Navbar;




