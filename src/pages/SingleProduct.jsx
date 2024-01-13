import { useLoaderData, Link } from "react-router-dom";
import { useState } from "react";
import { CustomFetch, FormaPrice, generateOpion } from "../utils";
import { useDispatch } from "react-redux";
import { PartnersIcon } from "../component";
import { addItem } from "../features/cart/cartSlice";
const singleQuery = (id) => {
  return {
    queryKey: ["single", id],
    queryFn: () => CustomFetch(`products/${id}`),
  };
};
export const loader =
  (queryClient) =>
  async ({ params }) => {
    const id = params.id;
    const response = await queryClient.ensureQueryData(singleQuery(params.id));
    const product = response.data.data;
    return { product };
  };
const checkfn = (product) => {
  const array = JSON.parse(localStorage.getItem("featured") || []);
  const isObjectInArray = array.some((obj) => obj.id === product.id);
  return isObjectInArray;
};
const SingleProduct = () => {
  const [amount, setAmount] = useState(1);
  const { product } = useLoaderData();

  const { title, image, company, price, description, colors } =
    product.attributes;
  const dallorPrice = FormaPrice(price);
  const [color, setColor] = useState(colors[0]);
  const handleAmount = (e) => {
    setAmount(parseInt(e.target.value));
  };
  const productCart = {
    cartId: product.id + color,
    productId: product.id,
    image,
    company,
    price,
    title,
    amount,
    color,
  };
  const dispatch = useDispatch();
  const addToCart = () => {
    dispatch(addItem({ product: productCart }));
  };
  return (
    <section>
      <div className="text-md breadcrumbs">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/products">Products</Link>
          </li>
        </ul>
      </div>
      {checkfn(product) && <PartnersIcon />}
      <div className=" mt-6 grid gap-y-8 lg:grid-cols-2  lg:gap-x-16">
        <img
          src={image}
          alt={title}
          className=" object-cover w-96 h-96 rounded-lg lg:w-full "
        />
        <div>
          <h1 className=" font-bold text-3xl capitalize">{title}</h1>
          <h4 className=" font-bold text-xl text-neutral-content mt-2 ">
            {company}
          </h4>
          <p className=" text-xl mt-3">{dallorPrice}</p>
          <p className=" mt-6 leading-8 ">{description}</p>
          <div className=" mt-6">
            <h3 className="text-md font-medium tracking-wider capitalize">
              colors
            </h3>
            {colors.map((pcolor) => {
              return (
                <button
                  key={pcolor}
                  type="button"
                  style={{ backgroundColor: `${pcolor}` }}
                  className={`w-6 h-6 badge rounded-full mr-2 mt-2 ${
                    color === pcolor && "border-2 border-secondary"
                  }`}
                  onClick={() => setColor(pcolor)}
                ></button>
              );
            })}
          </div>
          <div className=" mt-4">
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <h4 className="text-md font-medium tracking-wider capitalize">
                  amount
                </h4>
              </label>
              <select
                className="select select-secondary select-bordered select-md"
                value={amount}
                onChange={handleAmount}
              >
                {generateOpion(20)}
              </select>
            </div>
            <div className="mt-10 ">
              <button className="btn btn-secondary btn-md" onClick={addToCart}>
                Add to bag
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default SingleProduct;
