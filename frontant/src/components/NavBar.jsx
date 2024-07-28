import React, { useEffect, useRef } from "react";
import { CiSearch } from "react-icons/ci";
import { IoBagOutline, IoPersonOutline } from "react-icons/io5";
import logo from "../assets/Image/logo.png";
import { useCartContext } from "../context/Cart_Context";

const Navbar = () => {
  const { total_item, cart } = useCartContext();

  const countId = cart.map((i) => i.id);
  // console.log(countId);

  // const cartItems = ['2', '5', '4', '5', '2'];
  const cartItems = total_item;
  let sum = 0;

  for (let i = 0; i < cartItems.length; i++) {
    // Convert each item to a number and add it to the sum
    sum += parseInt(cartItems[i]);
  }

  //   console.log("Sum of 2 and 5:", sum);

  const navbarRef = useRef(null);

  useEffect(() => {
    const navbar = navbarRef.current;
    if (navbar) {
      let top = navbar.offsetTop;

      const stickynavbar = () => {
        if (window.scrollY >= top) {
          navbar.classList.add('sticky');
        } else {
          navbar.classList.remove('sticky');
        }
      };

      window.addEventListener('scroll', stickynavbar);

      // Clean up the event listener on component unmount
      return () => {
        window.removeEventListener('scroll', stickynavbar);
      };
    }
  }, []);

  // const navbar = document.querySelector("#nav-container");
  // let top = navbar.offsetTop;
  // function stickynavbar() {
  //   if (window.scrollY >= top) {
  //     navbar.classList.add("sticky");
  //   } else {
  //     navbar.classList.remove("sticky");
  //   }
  // }
  // window.addEventListener("scroll", stickynavbar);

  const myArray = countId; // Assuming countId is an array
  const targetString = "1";

  let count = 0;

  // Count occurrences of '1' in the array
  for (let i = 0; i < myArray.length; i++) {
    if (myArray[i].includes(targetString)) {
      count++;
    }
  }

  useEffect(() => {}, [sum, count]);

  return (
    <div className="nav-container" ref={navbarRef}>
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
