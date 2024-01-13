import Hero from "../component/Hero";
import { CustomFetch } from "../utils/index";
import { FeaturedProducts } from "../component";
import { json } from "react-router-dom";

const url = "/products?featured=true";
const featuredProductsQuery = {
  queryKey: ["featuredProducts"],
  queryFn: () => CustomFetch(url),
};
export const loader = (queryClient) => async () => {
  const response = await queryClient.ensureQueryData(featuredProductsQuery);
  const products = response.data.data;
  localStorage.setItem("featured", JSON.stringify(products));
  return { products };
};
const Landing = () => {
  return (
    <>
      <Hero />
      <FeaturedProducts />
    </>
  );
};
export default Landing;
