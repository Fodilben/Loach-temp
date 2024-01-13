import { st_partners } from "../utils/static";
import { Partner } from "../component";
const PartnersContainer = () => {
  return (
    <div className="grid gap-8 grid-cols-2">
      {st_partners.map((part) => {
        const { store } = part;
        return <Partner key={part.id} {...store} />;
      })}
    </div>
  );
};
export default PartnersContainer;
