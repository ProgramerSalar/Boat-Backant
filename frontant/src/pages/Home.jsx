import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
// import HotSellingProduct from "../components/HotSellingProduct";
import Content from "../components/Content";
import Navbar from "../components/NavBar";
import Testimonials from "../components/Testimonials";

import twenty_one from "../assets/offer/twenty_one.png";
import HotSellingProduct from "../components/ProductDetails/Headphone/HotSellingProduct";
import { useEffect, useState } from "react";

const Home = () => {


 
   useEffect(() => {
     // This function will be called on the initial render
     const handleBeforeUnload = (event) => {
       // Cancel the event as stated by the standard
       event.preventDefault();
       // Chrome requires returnValue to be set
       event.returnValue = '';
     };
 
     // Add the event listener
     window.addEventListener('beforeunload', handleBeforeUnload);
 
     // Clean up the event listener on component unmount
     return () => {
       window.removeEventListener('beforeunload', handleBeforeUnload);
     };
   }, []); // Empty dependency array ensures the effect runs only once
 




  return (
    
    <div className="home-container">
      <div>
        <Navbar />
      </div>

      <div className="wallpaper-container">
        <img src={twenty_one} className="single-image" />
      </div>

      <div>
        <HotSellingProduct />
      </div>
      <div>
        <HotSellingProduct />
      </div>

      <div>
        <Content />
      </div>

      <div>
        <Testimonials />
      </div>
    </div>
  );
};

export default Home;
