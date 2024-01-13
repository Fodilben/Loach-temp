import { CiLocationOn } from "react-icons/ci";
import { Link } from "react-router-dom";
const Partner = ({ img, name, owner, place, jps }) => {
  return (
    <div className="card card-side  shadow-xl max-w-2xl mt-4 ">
      <figure>
        <img src={img} alt="brothers" />
      </figure>
      <div className="card-body">
        <h2 className="card-title font-bold sm:text-xl md:text-3xl">{name}</h2>
        <p className=" text-xs ">{owner}</p>
        <div className="flex items-center gap-2 mt-4">
          <CiLocationOn />
          <p className=" float-right  text-xs">{place}</p>
        </div>
        <div className="card-actions justify-end">
          <Link to={jps} target="_blank" rel="noopener noreferrer">
            <button className="btn btn-primary">view</button>
          </Link>
        </div>
      </div>
    </div>
  );
};
export default Partner;
