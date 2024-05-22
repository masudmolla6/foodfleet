import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import banner1 from "../../../assets/pexels-jill-wellington-1638660-257816.jpg"
import banner2 from "../../../assets/pexels-enginakyurt-1437267.jpg"
import banner3 from "../../../assets/pexels-enginakyurt-2271107.jpg"
import banner4 from "../../../assets/pexels-muffin-1653877.jpg"
import banner5 from "../../../assets/pexels-changerstudio-140831.jpg"
import banner6 from "../../../assets/pexels-pixabay-209540.jpg"

const Banner = () => {
  return (
    <Carousel>
      <div>
        <img src={banner1} />
      </div>
      <div>
        <img src={banner2} />
      </div>
      <div>
        <img src={banner3} />
      </div>
      <div>
        <img src={banner4} />
      </div>
      <div>
        <img src={banner5} />
      </div>
      <div>
        <img src={banner6} />
      </div>
    </Carousel>
  );
};

export default Banner;
