import logo from "../assets/testmonials/logo.png";
import instagram from "../assets/testmonials/Instagram.png";
import youtube from "../assets/testmonials/youtube.png";
import fb from "../assets/testmonials/fb.png";
import { useEffect, useState } from "react";
import { RiArrowDownSLine } from "react-icons/ri";
import { IoIosArrowUp } from "react-icons/io";

const Testimonials = () => {
  const [ourProduct, setOurProduct] = useState(false);
  const [forBusiness, setForBusiness] = useState(false);
  const [AboutNoise, setAboutNoise] = useState(false);
  const [Legal, setLegal] = useState(false);
  const [Support, setSupport] = useState(false);

  const toogleOurProduct = () => {
    setOurProduct(!ourProduct);
    setForBusiness(false);
  };

  const toggleForBusiness = () => {
    setForBusiness(!forBusiness);
    setOurProduct(false);
  };

  const toogleAboutNoise = () => {
    setAboutNoise(!AboutNoise);
    setOurProduct(false);
  };

  const toogleLegal = () => {
    setLegal(!Legal);
    setSupport(false);
  };

  const toggleSupport = () => {
    setSupport(!Support);
    setLegal(false);
  };

  useEffect(() => {
    const handleResize = () => {
      // Reload the page when window is resized
      window.location.reload();
    };

    // Add event listener for window resize
    window.addEventListener("resize", handleResize);

    // Clean up the event listener when component unmounts
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="footer-and-testimonials">
      <div className="testimonial-container">
        {/* first  */}
        <div className="logo">
          <a >
            <img src={logo} alt="" className="noise-logo-company" />
          </a>
          <h3>Follow Us</h3>
          <div className="link">
            <a >
              <img src={fb} alt="" />
            </a>
            <a >
              <img src={instagram} alt="" />
            </a>
            <a >
              <img src={youtube} alt="" />
            </a>
          </div>
        </div>

        {window.innerWidth <= 1024 ? (
          <div>
            <nav>
              {/* Our Products parts here */}
              <div className="ham-menu">
                <div className="about-the-product" onClick={toogleOurProduct}>
                  <h3>Our product</h3>
                  <div className="icon">
                    <a
                      
                      style={{ display: ourProduct ? "none" : "flex" }}
                    >
                      <RiArrowDownSLine />
                    </a>
                    <a
                      
                      style={{ display: ourProduct ? "block" : "none" }}
                      className="arrow-up"
                    >
                      <IoIosArrowUp />
                    </a>
                  </div>
                </div>

                <div
                  className="off-screen-menu"
                  style={{ display: ourProduct ? "block" : "none" }}
                >
                  <div className="about-the-product-contant">
                    <p>Our Products</p>
                    <span    >Smart Watches</span>
                    <span   >Wireless Earbuds</span>
                    <span   >Luna Smart Ring</span>
                    <span     >NoiseFit App</span>
                    <span   >Noise Gift Card</span>
                  </div>
                </div>
              </div>
            </nav>

            <nav>
              {/* for Business parts here */}
              <div className="ham-menu">
                <div className="about-the-product" onClick={toggleForBusiness}>
                  <h3>For Business</h3>
                  <div className="icon">
                    <a
                      
                      style={{ display: forBusiness ? "none" : "flex" }}
                    >
                      <RiArrowDownSLine />
                    </a>
                    <a
                      
                      style={{ display: forBusiness ? "block" : "none" }}
                      className="arrow-up"
                    >
                      <IoIosArrowUp />
                    </a>
                  </div>
                </div>

                <div
                  className="off-screen-menu"
                  style={{ display: forBusiness ? "block" : "none" }}
                >
                  <div className="about-the-product-contant">
                    <p>For Business</p>
                    <span   >Noise for Business</span>
                    <span   >Corporate Enquiries</span>
                    <span   >Brand Partnership Enquiries</span>
                  </div>
                </div>
              </div>
            </nav>

            <nav>
              {/* About Noise parts here */}
              <div className="ham-menu">
                <div className="about-the-product" onClick={toogleAboutNoise}>
                  <h3>About Noise</h3>
                  <div className="icon">
                    <a
                      
                      style={{ display: AboutNoise ? "none" : "flex" }}
                    >
                      <RiArrowDownSLine />
                    </a>
                    <a
                      
                      style={{ display: AboutNoise ? "block" : "none" }}
                      className="arrow-up"
                    >
                      <IoIosArrowUp />
                    </a>
                  </div>
                </div>

                <div
                  className="off-screen-menu"
                  style={{ display: AboutNoise ? "block" : "none" }}
                >
                  <div className="about-the-product-contant">
                    <p>About Noise</p>
                    <span   >About Us</span>
                    <span   >Blogs</span>
                    <span   >Careers</span>
                    <span  >In the Press</span>
                  </div>
                </div>
              </div>
            </nav>

            <nav>
              {/* About Noise parts here */}
              <div className="ham-menu">
                <div className="about-the-product" onClick={toogleLegal}>
                  <h3>Legal</h3>
                  <div className="icon">
                    <a  style={{ display: Legal ? "none" : "flex" }}>
                      <RiArrowDownSLine />
                    </a>
                    <a
                      
                      style={{ display: Legal ? "block" : "none" }}
                      className="arrow-up"
                    >
                      <IoIosArrowUp />
                    </a>
                  </div>
                </div>

                <div
                  className="off-screen-menu"
                  style={{ display: Legal ? "block" : "none" }}
                >
                  <div className="about-the-product-contant">
                    <p>Legal</p>
                    <span   >Terms & Conditions</span>
                    <span   >Privicy Policy</span>
                    <span   >Social Responsibility</span>
                  </div>
                </div>
              </div>
            </nav>

            <nav>
              {/* About Noise parts here */}
              <div className="ham-menu">
                <div className="about-the-product" onClick={toggleSupport}>
                  <h3>Support</h3>
                  <div className="icon">
                    <a  style={{ display: Support ? "none" : "flex" }}>
                      <RiArrowDownSLine />
                    </a>
                    <a
                      
                      style={{ display: Support ? "block" : "none" }}
                      className="arrow-up"
                    >
                      <IoIosArrowUp />
                    </a>
                  </div>
                </div>

                <div
                  className="off-screen-menu"
                  style={{ display: Support ? "block" : "none" }}
                >
                  <div className="about-the-product-contant">
                    <p>Legal</p>
                    <span   >Terms & Conditions</span>
                    <span   >Privicy Policy</span>
                    <span   >Social Responsibility</span>
                  </div>
                </div>
              </div>
            </nav>
          </div>
        ) : (
          <div className="first-testimonial">
            <div className="testmoninial-col-1">
              <div className="first">
                <p className="testimonial-heading-contat">Our Products</p>
                <a className="testimonial-realated-things-noise" >
                  Smart Watches
                </a>
                <a className="testimonial-realated-things-noise" >
                  Wireless Earbuds
                </a>
                <a className="testimonial-realated-things-noise" >
                  Luna Smart Ring
                </a>
                <a className="testimonial-realated-things-noise" >
                  NoiseFit App
                </a>
                <a className="testimonial-realated-things-noise" >
                  Noise Gift Card
                </a>
              </div>
              <div className="second">
                <p className="testimonial-heading-contat">For Business</p>
                <a className="testimonial-realated-things-noise" >
                  Noise for Business
                </a>
                <a className="testimonial-realated-things-noise" >
                  Corporate Enquiries
                </a>
                <a className="testimonial-realated-things-noise" >
                  Brand Partnership Enquiries
                </a>
              </div>
            </div>

            <div className="testmoninial-col-1">
              <div className="first">
                <p>About Noise</p>
                <a className="testimonial-realated-things-noise" >
                  About Us
                </a>
                <a className="testimonial-realated-things-noise" >
                  Blogs
                </a>
                <a className="testimonial-realated-things-noise" >
                  Careers
                </a>
                <a className="testimonial-realated-things-noise" >
                  In the Press
                </a>
              </div>
              <div className="second">
                <p className="testimonial-heading-contat"> Legal</p>
                <a className="testimonial-realated-things-noise" >
                  Terms & Conditions
                </a>
                <a className="testimonial-realated-things-noise" >
                  Privicy Policy
                </a>
                <a className="testimonial-realated-things-noise" >
                  Social Responsibility
                </a>
              </div>
            </div>

            <div className="testmoninial-col-1">
              <div className="second">
                <p className="testimonial-heading-contat">Support</p>
                <a className="testimonial-realated-things-noise" >
                  Download your Invoice
                </a>
                <a className="testimonial-realated-things-noise" >
                  Tracks Your Order
                </a>
                <a className="testimonial-realated-things-noise" >
                  Shipping and Return Policy
                </a>
                <a className="testimonial-realated-things-noise" >
                  Register a Complaint
                </a>
                <a className="testimonial-realated-things-noise" >
                  Contact Us
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Testimonials;
