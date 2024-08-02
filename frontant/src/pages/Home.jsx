import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
// import HotSellingProduct from "../components/HotSellingProduct";
import Content from "../components/Content";
import Navbar from "../components/NavBar";
import Testimonials from "../components/Testimonials";

import twenty_one from "../assets/offer/twenty_one.png";
import HotSellingProduct from "../components/ProductDetails/Headphone/HotSellingProduct";
import { useEffect, useState } from "react";
import { CrouselItem } from "../components/CarouselItem";
import thirteen from "../assets/Image/Content/thirteen.jpg";
import fifteen from "../assets/Image/Content/fifteen.png";
import sixteen from "../assets/Image/Content/sixteen.png";

const Home = () => {
  useEffect(() => {
    const handleBeforeUnload = (event) => {
      // Chrome requires returnValue to be set
      event.returnValue = "";
    };

    // Add the event listener
    window.addEventListener("beforeunload", handleBeforeUnload);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, []);

  return (
    <div className="home-container">
      <div>
        <Navbar />
      </div>

      <div className="wallpaper-container">
        {/* <img src={twenty_one} className="single-image" /> */}
        <CrouselItem />
      </div>

      <div>
        <HotSellingProduct />
      </div>
      <div className="">
        <a href="/hot-selling-product-collection">
          <img src={sixteen} alt="" className="home-container-wallpaper-image" />
        </a>
      </div>

      <div>
        <HotSellingProduct />
      </div>


      <div className="">
        <a href="/hot-selling-product-collection">
          <img src={fifteen} alt="" className="home-container-wallpaper-image" />
        </a>
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
      <div className="footer">
        <p>© 2022 boAt. All rights reserved.</p>
      </div>
    </div>
  );
};

export default Home;
