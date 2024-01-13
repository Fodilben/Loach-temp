import map from "../assets/map2.svg";
import { Logo, CardContainer } from "../component";
const About = () => {
  return (
    <>
      <div className="flex flex-wrap gap-2 sm:gap-x-6 justify-center items-center">
        <h1 className=" text-4xl font-bold leading-none tracking-tight sm:text-6xl ">
          Trust
        </h1>
        <div className=" w-36 pt-2 grid place-items-center">
          <Logo />
        </div>
      </div>

      <div className="mt-12 gird place-items-center ">
        <CardContainer />
      </div>
      <div className=" mt-12 grid grid-cols-2 gap-4 ">
        <div className="grid place-items-center font-medium tracking-wide leading-6 text-gray-500 ">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto id
          perferendis enim, fugiat ipsum veritatis molestiae ut tempora commodi,
          optio eaque ratione, magni quia eum possimus consectetur nemo natus
          accusantium? Lorem ipsum dolor sit, amet consectetur adipisicing elit.
          Necessitatibus enim quam impedit dolorem. Dolores quia nulla porro!
          Deleniti earum laboriosam expedita explicabo aliquam at tenetur quam
          beatae eos, repudiandae neque.
        </div>
        <div className="hidden md:block">
          <img src={map} alt="map" />
        </div>
      </div>
    </>
  );
};
export default About;
