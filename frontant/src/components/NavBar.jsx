import React, { useEffect, useRef } from "react";
import { CiSearch } from "react-icons/ci";
import { IoBagOutline, IoPersonOutline } from "react-icons/io5";
import logo from "../assets/Image/logo.png";
import { useCartContext } from "../context/Cart_Context";

const Navbar = () => {
  
  return (
    <div className="nav-container">
      <div className="navbar">
        <div className="logo">
          <a href="/">
            <img src={logo} alt="logo" className="logo-name" />
          </a>
        </div>
        <nav>
          <ul className="ul-tag">
            <li className="li-tag">
              <a>Products</a>
            </li>
            <li className="li-tag">
              <a>Luna Ring</a>
            </li>
            <li className="li-tag">
              <a>Gift Store</a>
            </li>
            <li className="li-tag">
              <a>Support</a>
            </li>
            <li className="li-tag">
              <a>Blogs</a>
            </li>
          </ul>
        </nav>
        <div className="navbar-button-in-cart">
          <div className="col-1">
            <a className="navbar-icon">
              <CiSearch />
            </a>
            <a
              className="navbar-icon"
              // href="/add-to-cart-noise"
            ></a>
            <a className="navbar-icon">
              <IoPersonOutline />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
