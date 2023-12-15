import ProductsGrid from "./ProductsGrid";
import ProductsList from "./ProductsList";
import { useLoaderData } from "react-router-dom";

import { useState } from "react";
import { BsFillGridFill, BsList } from "react-icons/bs";
const ProductsContainer = () => {
  const { meta } = useLoaderData();
  const total = meta.pagination.total;
  const [layout, setLayout] = useState("list");
  const setActiveStyles = (pattern) => {
    return `text-xl btn btn-circle btn-sm ${
      pattern === layout
        ? "btn-primary text-primary-content"
        : "btn-ghost text-base-content"
    }`;
  };
  return (
    <div>
      {/* header */}
      <div className="w-full  flex justify-between items-center mt-8 border-b border-base-300 pb-5">
        <p className=" font-medium ">{total} products</p>
        <div className="flex justify-between gap-x-2">
          <button
            className={setActiveStyles("grid")}
            onClick={() => setLayout("grid")}
          >
            <BsFillGridFill />
          </button>

          <button
            className={setActiveStyles("list")}
            onClick={() => setLayout("list")}
          >
            <BsList />
          </button>
        </div>
      </div>
      {total === 0 ? (
        <h5 className="text-2xl mt-16">
          Sorry, no products matched your search...
        </h5>
      ) : layout === "grid" ? (
        <ProductsGrid />
      ) : (
        <ProductsList />
      )}
    </div>
  );
};
export default ProductsContainer;
