import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { useNavigate } from "react-router-dom";
import twenty_one from "../assets/offer/twenty_one.png";
import banner_one from "../assets\\Image\\Boat_Image\\five.png";
import banner_two from "../assets\\Image\\Boat_Image\\four.png";
import banner_three from "../assets\\Image\\Boat_Image\\three.png";
import banner_four from "../assets\\Image\\Boat_Image\\two.png";
import banner_five from "../assets\\Image\\Boat_Image\\one.png";

export const CrouselItem = () => {
  const navigate = useNavigate();
  return (
    <div className="crousel-container">
      <Carousel
        showStatus={false}
        showThumbs={false}
        autoPlay={true}
        infiniteLoop={true}
        showArrows={false}
      >
        <div className="parent" onClick={() => navigate("/Offer")}>
          <img src={banner_one} className="crousel-image" />
        </div>
        <div className="parent" onClick={() => navigate("/Offer")}>
          <img src={banner_two} className="crousel-image" />
        </div>
        <div className="parent" onClick={() => navigate("/Offer")}>
          <img src={banner_three} className="crousel-image" />
        </div>
        <div className="parent" onClick={() => navigate("/Offer")}>
          <img src={banner_four} className="crousel-image" />
        </div>
        <div className="parent" onClick={() => navigate("/Offer")}>
          <img src={banner_five} className="crousel-image" />
        </div>
      </Carousel>
    </div>
  );
};
