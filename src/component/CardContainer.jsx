import { Card } from "../component";

const CardContainer = () => {
  return (
    <div className=" flex justify-evenly gap-4 flex-wrap lg:mx-8">
      <Card text="stores in alg" number="15%" />
      <Card text="monthly users" number="10 k" />
      <Card text="partners" number="40" />
      <Card text="stores in alg" number="15%" />
    </div>
  );
};
export default CardContainer;
