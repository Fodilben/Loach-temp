import { Logo } from "../component";
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

      <p className=" mt-6 leading-8 max-w-2xl mx-auto text-xl">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore quae
        quam blanditiis vitae, dolor non eveniet ipsum voluptatibus, quia optio
        aut! Perferendis ipsa cumque ipsam nostrum reprehenderit ad illo sed
        officiis ea tempore! Similique eos minima sit porro, ratione aspernatur!
      </p>
    </>
  );
};
export default About;
