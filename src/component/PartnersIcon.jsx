import { Link } from "react-router-dom";
import { st_partners } from "../utils/static";
const PartnersIcon = () => {
  return (
    <div className="flex gap-4 mt-4">
      {st_partners.map((part) => {
        return (
          <Link
            key={part.id}
            to={part.store.jps}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={part.store.img}
              alt="partner"
              className=" w-10 rounded-full"
            />
          </Link>
        );
      })}
    </div>
  );
};
export default PartnersIcon;
