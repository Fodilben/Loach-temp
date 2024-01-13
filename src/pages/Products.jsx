import { useLoaderData } from "react-router-dom";
import { Filters, PaginationContainer, ProductsContainer } from "../component";
import { CustomFetch } from "../utils";
const allProductsQuery = (queryParams) => {
  const { search, category, company, sort, price, shipping, page } =
    queryParams;

  return {
    queryKey: [
      "products",
      search ?? "",
      category ?? "all",
      company ?? "all",
      sort ?? "a-z",
      price ?? 100000,
      shipping ?? false,
      page ?? 1,
    ],
    queryFn: () =>
      CustomFetch("/products", {
        params: queryParams,
      }),
  };
};
export const loader =
  (queryClient) =>
  async ({ request }) => {
    const url = new URL(request.url);
    const params = Object.fromEntries([...url.searchParams.entries()]);
    console.log(url);
    const response = await queryClient.ensureQueryData(
      allProductsQuery(params)
    );

    return { products: response.data.data, meta: response.data.meta, params };
  };
const Products = () => {
  return (
    <>
      <Filters />
      <ProductsContainer />
      <PaginationContainer />
    </>
  );
};
export default Products;
