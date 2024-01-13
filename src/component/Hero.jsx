import { Link } from "react-router-dom";

import hero1 from "../assets/phones/iphone15.jpg";
import hero2 from "../assets/phones/hwaui.webp";
import hero3 from "../assets/phones/redmi.png";
import hero4 from "../assets/phones/samsung.webp";

const carouselImages = [hero1, hero2, hero3, hero4];
const Hero = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
      <div>
        <h1 className="max-w-2xl text-4xl font-bold tracking-tight  sm:text-6xl ">
          We are changing the way people shop.
        </h1>

        <p className="mt-8 max-w-xl text-lg leading-8">
          Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem
          cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat
          aliqua. Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure
          qui lorem cupidatat commodo.
        </p>
        <div className="mt-10 ">
          <Link to="products" className="btn btn-primary ">
            Our Products
          </Link>
        </div>
      </div>
      <div className=" hidden  h-[28rem] lg:carousel carousel-center   p-4 space-x-4 bg-neutral rounded-box">
        {carouselImages.map((img) => {
          return (
            <div key={img} className="carousel-item">
              <img src={img} />
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default Hero;
