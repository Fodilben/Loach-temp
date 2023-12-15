import { useSelector } from "react-redux";
import { redirect } from "react-router-dom";
import { toast } from "react-toastify";
import { SectionTitle, CartTotals, CheckoutForm } from "../component";
export const loader = (store) => () => {
  const user = store.getState().userState.user;
  if (!user) {
    toast.warn("You must be logged in to checkout");
    return redirect("/login");
  }
  return null;
};
const Checkout = () => {
  const { cartTotal } = useSelector((state) => state.cartState);
  if (cartTotal === 0) {
    return <SectionTitle text="your cart is empty" />;
  }
  return (
    <>
      <SectionTitle text="Place Your Order" />
      <div className="mt-8 grid gap-8  md:grid-cols-2 items-start">
        <CheckoutForm />
        <CartTotals />
      </div>
    </>
  );
};
export default Checkout;
