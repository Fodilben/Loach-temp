import { useSelector } from "react-redux";
import { CartTotals, CartItemsList, SectionTitle } from "../component";
import { Link } from "react-router-dom";

const Cart = () => {
  const { user } = useSelector((state) => state.userState);
  const { numItemsInCart } = useSelector((state) => state.cartState);

  if (numItemsInCart === 0) {
    return <SectionTitle text="Your Cart Is Emptys" />;
  }
  return (
    <>
      <SectionTitle
        text={numItemsInCart ? "Shopping Cart" : "Your Cart Is Emptys"}
      />
      <div className=" mt-5 grid gap-8 lg:grid-cols-12">
        <div className=" lg:col-span-8">
          <CartItemsList />
        </div>
        <div className=" lg:col-span-4 lg:pl-4">
          <CartTotals />
          {user ? (
            <Link to="/checkout" className="btn btn-primary btn-block mt-8">
              proceed checkout
            </Link>
          ) : (
            <Link to="/login" className="btn btn-primary btn-block mt-8">
              please loging
            </Link>
          )}
        </div>
      </div>
    </>
  );
};
export default Cart;
